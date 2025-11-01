import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, ArrowLeft } from './Icons';

export const NextChapterPage: React.FC = () => {
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

  const handleBack = () => {
    window.history.back();
  }

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold">Start Your Next Chapter</h1>
                <p className="mt-4 text-lg text-white/70">
                    You've seen what's possible. Let's talk about how we can apply it to your business.
                    Fill out the form below, and our team will be in touch to schedule an initial consultation.
                </p>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 p-3 bg-transparent focus:ring-2 focus:ring-white focus:outline-none transition-shadow placeholder:text-white/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 p-3 bg-transparent focus:ring-2 focus:ring-white focus:outline-none transition-shadow placeholder:text-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 p-3 bg-transparent focus:ring-2 focus:ring-white focus:outline-none transition-shadow placeholder:text-white/50"
                  placeholder="How can we help?"
                />
              </div>
              <div className="text-center">
                 <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="font-semibold"
                  disabled={status === 'submitting'}
                >
                  {getButtonText()}
                  {status === 'idle' && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
                {status === 'success' && <p className="mt-4 text-green-400">Thank you! Your message has been sent successfully.</p>}
                {status === 'error' && <p className="mt-4 text-red-400">Something went wrong. Please try again later.</p>}
              </div>
            </form>
            
            <div className="mt-12 text-center">
                <Button onClick={handleBack} variant="ghost">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                </Button>
            </div>
        </div>
    </main>
  );
};
