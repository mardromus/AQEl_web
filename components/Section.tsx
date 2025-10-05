import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section>
      <div className="flex items-center gap-4">
        {icon && <div className="text-[var(--primary)]">{icon}</div>}
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">{title}</h2>
      </div>
      <div className="mt-8 border-l-2 border-[var(--primary)]/30 pl-4 md:pl-8">{children}</div>
    </section>
  );
};