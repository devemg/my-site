import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {contactFormResolver, type ContactFormValues} from '../schemas/contact.shema';
import {twMerge} from "tailwind-merge";
import {ArrowRightIcon, CodeIcon, MailIcon, PlusIcon, SendHorizontalIcon, Share2Icon} from "lucide-react";

const ContactPage = () => {
    const [submittingState, setSubmittingState] = useState<'idle' | 'dispatching' | 'sent'>('idle');
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<ContactFormValues>({
        resolver: contactFormResolver,
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
        mode: 'onTouched',
    });

    useEffect(() => {
        if (submittingState !== 'sent') return;

        const timer = window.setTimeout(() => {
            reset();
            setSubmittingState('idle');
        }, 3000);

        return () => window.clearTimeout(timer);
    }, [reset, submittingState]);

    const onSubmit = async (data: ContactFormValues) => {
        setSubmittingState('dispatching');

        await new Promise((resolve) => window.setTimeout(resolve, 1500));

        console.log('Final form result:', data);
        setSubmittingState('sent');
    };

    const isDisabled = submittingState !== 'idle';

    return (
        <section className="space-y-16">
            {/* Contact Header */}
            <div className="max-w-3xl mb-12">
                <h1 className="font-display text-4xl md:text-5xl text-white mb-4 font-extrabold leading-tight">
                    Let's build <span className="text-gradient">something together.</span>
                </h1>
                <p className="font-sans text-[#cbc3d7] text-base md:text-lg leading-relaxed">
                    Whether you're looking to architect a scalable system, integrate cutting-edge frontend patterns, or
                    simply talk tech—I'm always open to high-fidelity collaborations.
                </p>
            </div>

            {/* Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Contact Form Card (7 Columns) */}
                <div
                    className="lg:col-span-12 xl:col-span-7 glass-card rounded-xl p-8 flex flex-col justify-between border-[#d0bcff]/10 hover:border-[#d0bcff]/20 transition-all duration-300">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name box */}
                            <div className="space-y-2">
                                <label htmlFor="name"
                                       className="font-mono text-[10px] text-[#cbc3d7]/60 block uppercase tracking-wide">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className={`w-full bg-[#131b2e] border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all font-sans text-xs text-white placeholder:text-[#958ea0]/40 ${
                                        errors.name
                                            ? 'border-rose-400/80 focus:border-rose-400 focus:ring-rose-400'
                                            : 'border-[#494454]/40 focus:border-[#d0bcff] focus:ring-[#d0bcff]'
                                    }`}
                                    disabled={isDisabled}
                                    aria-invalid={Boolean(errors.name)}
                                    {...register('name')}
                                />
                                {errors.name && <p className="text-xs text-rose-300">{errors.name.message}</p>}
                            </div>

                            {/* Email box */}
                            <div className="space-y-2">
                                <label htmlFor="email"
                                       className="font-mono text-[10px] text-[#cbc3d7]/60 block uppercase tracking-wide">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className={`w-full bg-[#131b2e] border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all font-sans text-xs text-white placeholder:text-[#958ea0]/40 ${
                                        errors.email
                                            ? 'border-rose-400/80 focus:border-rose-400 focus:ring-rose-400'
                                            : 'border-[#494454]/40 focus:border-[#d0bcff] focus:ring-[#d0bcff]'
                                    }`}
                                    disabled={isDisabled}
                                    aria-invalid={Boolean(errors.email)}
                                    {...register('email')}
                                />
                                {errors.email && <p className="text-xs text-rose-300">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="space-y-2">
                            <label htmlFor="message"
                                   className="font-mono text-[10px] text-[#cbc3d7]/60 block uppercase tracking-wide">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                placeholder="Tell me about your vision..."
                                className={`w-full bg-[#131b2e] border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all font-sans text-xs text-white placeholder:text-[#958ea0]/40 resize-none ${
                                    errors.message
                                        ? 'border-rose-400/80 focus:border-rose-400 focus:ring-rose-400'
                                        : 'border-[#494454]/40 focus:border-[#d0bcff] focus:ring-[#d0bcff]'
                                }`}
                                disabled={isDisabled}
                                aria-invalid={Boolean(errors.message)}
                                {...register('message')}
                            />
                            {errors.message && <p className="text-xs text-rose-300">{errors.message.message}</p>}
                        </div>

                        {/* Button handlers */}
                        {submittingState === 'idle' && (
                            <button
                                type="submit"
                                disabled={isDisabled}
                                className={twMerge("w-full sm:w-auto px-8 py-4 cyber-gradient text-white font-mono text-xs font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#a078ff]/25 flex items-center justify-center gap-3 cursor-pointer",
                                    isDisabled && "opacity-50")}
                            >
                                DISPATCH MESSAGE
                                <span className="material-symbols-outlined text-[18px]"><SendHorizontalIcon size={14} /></span>
                            </button>
                        )}

                        {submittingState === 'dispatching' && (
                            <button
                                type="button"
                                disabled
                                className="w-full sm:w-auto px-8 py-4 bg-[#2d3449] text-[#4cd7f6] font-mono text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="animate-spin h-4 w-4 text-[#4cd7f6]" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                </svg>
                                DISPATCHING PROTOCOL...
                            </button>
                        )}

                        {submittingState === 'sent' && (
                            <button
                                type="button"
                                disabled
                                className="w-full sm:w-auto px-8 py-4 bg-[#03b5d3] text-[#001f26] font-mono text-xs font-extrabold rounded-lg transition-all flex items-center justify-center gap-3 shadow-md shadow-[#03b5d3]/20"
                            >
                                <span className="material-symbols-outlined text-base">check_circle</span>
                                SENT SUCCESSFULLY
                            </button>
                        )}
                    </form>
                </div>

                {/* Social Links & Details Cluster (5 Columns) */}
                <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                    {/* Social Links Card */}
                    <div
                        className="glass-card rounded-xl p-8 flex flex-col justify-center border-white/10 hover:border-[#4cd7f6]/30 transition-all duration-300">
                        <h3 className="font-mono text-xs text-[#cbc3d7]/60 uppercase tracking-widest mb-6">
                            Connect Locally
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    name: 'Github',
                                    color: 'hover:bg-[#d0bcff]/10',
                                    icon: <CodeIcon />,
                                    textCol: 'text-[#d0bcff]',
                                    link: 'https://github.com'
                                },
                                {
                                    name: 'LinkedIn',
                                    color: 'hover:bg-[#4cd7f6]/10',
                                    icon: <Share2Icon />,
                                    textCol: 'text-[#4cd7f6]',
                                    link: 'https://linkedin.com'
                                },
                                {
                                    name: 'Gmail',
                                    color: 'hover:bg-[#ffafd3]/10',
                                    icon: <MailIcon />,
                                    textCol: 'text-[#ffafd3]',
                                    link: 'https://twitter.com'
                                }
                            ].map((soc) => (
                                <a
                                    key={soc.name}
                                    href={soc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-between p-4 bg-[#222a3d]/50 rounded-lg group/link transition-all border border-[#494454]/10 ${soc.color}`}
                                >
                                    <div className="flex items-center gap-4">
                    <span className={`material-symbols-outlined ${soc.textCol}`}>
                      {soc.icon}
                    </span>
                                        <span className="font-sans text-lg font-semibold text-white">
                      {soc.name}
                    </span>
                                    </div>
                                    <span
                                        className={`material-symbols-outlined ${soc.textCol} opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all`}>
                    <ArrowRightIcon />
                  </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Availability Info Card */}
                    <div
                        className="glass-card rounded-xl overflow-hidden relative group border-white/5 flex flex-col justify-between">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#d0bcff]/10 to-[#4cd7f6]/5 pointer-events-none"/>

                        <div className="relative p-8 h-full flex flex-col justify-center space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-3 h-3 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6] animate-pulse"/>
                                    <span
                                        className="font-mono text-[10px] text-[#4cd7f6] uppercase tracking-widest font-extrabold">
                    Available for hire
                  </span>
                                </div>
                                <h4 className="font-sans text-xl font-bold text-white">
                                    Technical Consulting
                                </h4>
                                <p className="font-sans text-xs text-[#cbc3d7]">
                                    Based in San Francisco, CA. Open to remote opportunities worldwide.
                                </p>
                            </div>

                            {/* Card Footer credentials line */}
                            <div className="pt-6 border-t border-[#494454]/30 flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    <div
                                        className="w-10 h-10 rounded-full border-2 border-[#0b1326] bg-[#222a3d] overflow-hidden">
                                        <img
                                            alt="Tech Lead Profile Avatar"
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover pointer-events-none"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbnUrdawKSDPteMYjKvxGgcnkTW0PJTs59EsHXycGggRY11BCpYRBWWG_TMZfoafd1H6U8JxdBNdguKujFM2ypJPmDroDwbPbinAlQ_Sg3l4r9ie5jLQHIuEQMI5TwUBdhH11p98X0J-7uV2NnGamO3nhjJZuf7G75rPhZh7LsAaJOXofMZ_ogv-GTPyDTnyzBXXMfBj_atB0PKiYu01VOrma9YG-6orNdgHOeSKc_HAQv0hrxqSPUVciKujJ-tqhe1ermZxMlV-CZ"
                                        />
                                    </div>
                                    <div
                                        className="w-10 h-10 rounded-full border-2 border-[#0b1326] bg-[#222a3d] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#d0bcff] text-base font-extrabold select-none">
                        <PlusIcon />
                    </span>
                                    </div>
                                </div>
                                <p className="font-mono text-[10px] text-[#cbc3d7]/60 uppercase tracking-tight font-bold">
                                    Active Projects: 3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;
