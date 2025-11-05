import React from 'react';
import { cn } from '../../lib/utils';
import {
	Check,
	Copy,
	type LucideIcon,
	Mail,
	MapPin,
	Phone,
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../Icons';
import { Button, type ButtonProps } from './button';

const APP_EMAIL = 'mail@example.com';
const APP_PHONE = '+1 (800) 123-4567';
const APP_PHONE_2 = '+1 (800) 987-6543';

export function ContactPage() {
	const socialLinks = [
		{
			icon: GithubIcon,
			href: '#',
			label: 'GitHub',
		},
		{
			icon: TwitterIcon,
			href: '#',
label: 'Twitter',
		},
		{
			icon: LinkedinIcon,
			href: '#',
			label: 'LinkedIn',
		},
		{
			icon: InstagramIcon,
			href: '#',
			label: 'Instagram',
		},
	];

	return (
		<div className="w-full">
			<div className="mx-auto h-full max-w-6xl">
				<div
					aria-hidden
					className="absolute inset-0 isolate -z-10 opacity-80 contain-strict"
				>
					<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsl(var(--foreground)/0.06)_0,hsl(var(--foreground)/0.02)_50%,hsl(var(--foreground)/0.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/0.04)_0,hsl(var(--foreground)/0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/0.04)_0,hsl(var(--foreground)/0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
				</div>
				
				<div className="grid md:grid-cols-3 border-t border-l border-r border-border">
					<Box
						icon={Mail}
						title="Email"
						description="We respond to all emails within 24 hours."
					>
						<a
							href={`mailto:${APP_EMAIL}`}
							className="font-mono text-base font-medium tracking-wide hover:underline"
						>
							{APP_EMAIL}
						</a>
						<CopyButton className="size-6" text={APP_EMAIL} />
					</Box>
					<Box
						icon={MapPin}
						title="Office"
						description="Drop by our office for a chat."
					>
						<span className="font-mono text-base font-medium tracking-wide">
							123 Innovation Drive, Tech Valley, CA 94043
						</span>
					</Box>
					<Box
						icon={Phone}
						title="Phone"
						description="We're available Mon-Fri, 9am-5pm."
						className="border-b-0 md:border-r-0"
					>
						<div>
							<div className="flex items-center gap-x-2">
								<a
									href={`tel:${APP_PHONE}`}
									className="block font-mono text-base font-medium tracking-wide hover:underline"
								>
									{APP_PHONE}
								</a>
								<CopyButton className="size-6" text={APP_PHONE} />
							</div>
							<div className="flex items-center gap-x-2">
								<a
									href={`tel:${APP_PHONE_2}`}
									className="block font-mono text-base font-medium tracking-wide hover:underline"
								>
									{APP_PHONE_2}
								</a>
								<CopyButton className="size-6" text={APP_PHONE_2} />
							</div>
						</div>
					</Box>
				</div>
				<BorderSeparator />
				<div className="relative flex h-full min-h-[320px] items-center justify-center border-b border-l border-r border-border">
					<div
						className={cn(
							'z--10 absolute inset-0 size-full',
							'bg-[radial-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px)]',
							'bg-[size:32px_32px]',
							'[mask-image:radial-gradient(ellipse_at_center,hsl(var(--background))_30%,transparent)]',
						)}
					/>

					<div className="relative z-1 space-y-6 text-center px-4">
						<h2 className="text-center text-3xl font-bold md:text-4xl">
							Find us online
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-4">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-muted/50 hover:bg-accent flex items-center gap-x-2 rounded-full border border-border px-4 py-2"
								>
									<link.icon className="size-4" />
									<span className="font-mono text-sm font-medium tracking-wide">
										{link.label}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function BorderSeparator() {
	return <div className="h-px w-full border-b border-border" />;
}

type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	icon,
	...props
}: ContactBox) {
    const Icon = icon;
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b border-border md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-muted/40 flex items-center gap-x-3 border-b border-border p-4">
				<Icon className="text-muted-foreground size-5" strokeWidth={1.5} />
				<h2 className="font-sans text-lg font-medium tracking-wider">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t border-border p-4">
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</div>
	);
}

// FIX: Changed to a type alias to correctly inherit all button properties.
type CopyButtonProps = ButtonProps & {
	text: string;
};

function CopyButton({
	className,
	variant = 'ghost',
	size = 'icon',
	text,
	...props
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={cn('disabled:opacity-100', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied || props.disabled}
			{...props}
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-3.5" />
			</div>
		</Button>
	);
}