import React from 'react';

const ClarityItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center w-20 h-20 mb-6 border border-gray-800 rounded-full bg-black">
      {icon}
    </div>
    <h3 className="text-xl font-normal text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const GateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const SignalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2l2-8 4 16 4-16 2 8h2" /></svg>;
const WindowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4zM4 12h16" /></svg>;
const MirrorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z M16 16l-8-8" /></svg>;


const SystemOfClarity = () => {
  const items = [
    { icon: <GateIcon />, title: "The Gate", description: "Discernment with consent" },
    { icon: <SignalIcon />, title: "The Signal", description: "Clarity with reason" },
    { icon: <WindowIcon />, title: "The Window", description: "Resign in motion" },
    { icon: <MirrorIcon />, title: "The Mirror", description: "Imbody in reflection" }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-12">The System of Clarity</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            // FIX: Refactored to pass props explicitly to resolve a TypeScript error where the `key` prop was being incorrectly included in the component's props during type checking.
            <ClarityItem key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemOfClarity;