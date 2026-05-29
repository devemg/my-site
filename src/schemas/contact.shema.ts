import { z } from 'zod';
import type { FieldError, FieldErrors, Resolver } from 'react-hook-form';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters long.')
    .max(60, 'Name must be 60 characters or fewer.'),
  email: z.string().trim().email('Enter a valid email address.'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters long.')
    .max(1000, 'Message must be 1000 characters or fewer.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const mapZodIssuesToFieldErrors = (issues: z.ZodIssue[]): FieldErrors<ContactFormValues> => {
  return issues.reduce<FieldErrors<ContactFormValues>>((acc, issue) => {
    const key = issue.path[0] as keyof ContactFormValues | undefined;

    if (!key) return acc;

    acc[key] = {
      type: issue.code,
      message: issue.message,
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
