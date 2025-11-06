import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, LinkedinIcon, WhatsAppIcon, MailIcon } from './Icons';

const socialLinks = [
	{
		icon: LinkedinIcon,
		href: 'https://www.linkedin.com/in/khalilmansour/',
		label: 'LinkedIn',
	},
];

export const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    const emailjs = (window as any).emailjs;

    emailjs.send('service_6j8e98r', 'template_d5dd5hl', templateParams)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset form status after 5 seconds
      }, (error: any) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };
  
  const getButtonText = () => {
    switch (status) {
        case 'submitting': return 'Sending...';
        case 'success': return 'Sent!';
        default: return 'Send Message';
    }
  };

  return (
    <section id={id} className="bg-white text-black h-screen scroll-mt-20 snap-start flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          New Chapter
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 bg-transparent focus:ring-2 focus:ring-black focus:outline-none transition-shadow placeholder:text-gray-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 bg-transparent focus:ring-2 focus:ring-black focus:outline-none transition-shadow placeholder:text-gray-600"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 bg-transparent focus:ring-2 focus:ring-black focus:outline-none transition-shadow placeholder:text-gray-600"
              placeholder="How can we help?"
            />
          </div>
          <div className="text-center">
             <Button
              type="submit"
              size="lg"
              variant="dark"
              theme="light"
              className="font-semibold"
              disabled={status === 'submitting'}
            >
              {getButtonText()}
              {status === 'idle' && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
            {status === 'success' && <p className="mt-4 text-green-600">Thank you! Your message has been sent successfully.</p>}
            {status === 'error' && <p className="mt-4 text-red-600">Something went wrong. Please try again later.</p>}
          </div>
        </form>
        
        <div className="mt-16 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 mb-6">
                <div className="flex items-center justify-center gap-2.5 text-lg text-gray-700 font-semibold">
                    <WhatsAppIcon className="w-6 h-6 text-green-600" />
                    <span>Mobile / WhatsApp:</span>
                    <a href="tel:+351938800080" className="hover:underline text-black">+351 938 800 080</a>
                </div>
                <div className="flex items-center justify-center gap-2.5 text-lg text-gray-700 font-semibold">
                    <MailIcon className="w-6 h-6 text-gray-600" />
                    <span>Email:</span>
                    <a href="mailto:nextchapter@wspaceinc.com" className="hover:underline text-black">nextchapter@wspaceinc.com</a>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/5 hover:bg-black/10 text-black flex items-center gap-x-2 rounded-full border border-black/10 px-4 py-2 transition-colors duration-200"
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
    </section>
  );
};