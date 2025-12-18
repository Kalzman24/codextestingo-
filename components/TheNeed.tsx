
import React from 'react';
import { AnimatedTestimonials, Testimonial } from './ui/testimonial';

const TheNeed: React.FC = () => {
  // Using specific Unsplash IDs that match the visual descriptions provided:
  // George: Professional headshot with white background
  // Thibault: Professional headshot with blue/grey background
  const testimonialData: Testimonial[] = [
    {
      name: "George Abou Jaoudé",
      designation: "YPO Member",
      quote: "I would love to have a platform that shows me who the person I’m meeting actually is — and gives me a short, relevant brief before the conversation.",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "Thibault Launay",
      designation: "Harvard Alumni · YPO Member",
      quote: "Connections today are driven by online exposure, not by the actual value someone brings to the table.",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-12 text-center">The Need — In Their Words</h2>
        <div className="bg-zinc-50 rounded-3xl overflow-hidden border border-brand-grey/50">
          <AnimatedTestimonials testimonials={testimonialData} autoplay={true} />
        </div>
      </div>
    </div>
  );
};

export default TheNeed;
