import {z} from 'zod';
import type {FieldError, FieldErrors, Resolver} from 'react-hook-form';
import i18n from '../i18n/config';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(60),
  email: z.string().trim().email(),
  message: z
    .string()
    .trim()
    .min(10)
    .max(1000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const getFieldErrorMessage = (issue: z.ZodIssue): string => {
  const field = issue.path[0];

  if (field === 'name') {
    if (issue.code === 'too_small') return i18n.t('contact.errors.nameMin');
    if (issue.code === 'too_big') return i18n.t('contact.errors.nameMax');
  }

  if (field === 'email') {
    if (issue.code === 'invalid_format') {
      return i18n.t('contact.errors.emailInvalid');
    }
  }

  if (field === 'message') {
    if (issue.code === 'too_small') return i18n.t('contact.errors.messageMin');
    if (issue.code === 'too_big') return i18n.t('contact.errors.messageMax');
  }

  return issue.message;
};

const mapZodIssuesToFieldErrors = (issues: z.ZodIssue[]): FieldErrors<ContactFormValues> => {
  return issues.reduce<FieldErrors<ContactFormValues>>((acc, issue) => {
    const key = issue.path[0] as keyof ContactFormValues | undefined;

    if (!key) return acc;

    acc[key] = {
      type: issue.code,
      message: getFieldErrorMessage(issue),
    } satisfies FieldError;

    return acc;
  }, {});
};

export const contactFormResolver: Resolver<ContactFormValues> = async (values) => {
  const result = contactSchema.safeParse(values);

  if (result.success) {
    return {
      values: result.data,
      errors: {},
    };
  }

  return {
    values: {},
    errors: mapZodIssuesToFieldErrors(result.error.issues),
  };
};
