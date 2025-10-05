import React from 'react';

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.35c.4-.75 1.5-1.35 2.6-1.35 2.5 0 4.5 2 4.5 5.75z"></path>
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="mb-16 text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-300 to-[var(--primary)] py-4">
        Adaptive Quantum-Enhanced Learning
      </h1>
      <p className="mt-6 text-xl sm:text-2xl max-w-4xl text-[var(--text-muted)]">
        A Dynamic Hybrid Framework for Robust Quantum Machine Learning in the NISQ Era
      </p>
      <div className="mt-10">
        <a 
          href="https://drive.google.com/file/d/1FYmBOlrbGI0sau8_ZAOBxkvQR-lvJ7cy/view" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-md text-lg font-semibold text-[var(--primary)] bg-transparent border-2 border-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)]/10"
        >
          View Full Paper
        </a>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 text-[var(--text-main)]">
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-lg">Kushagra Goyal</p>
          <p className="text-sm text-[var(--text-muted)]">Symbiosis Institute Of Technology(SIT), Pune</p>
           <a 
              href="https://www.linkedin.com/in/weisenk%C3%B6nig/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10"
           >
              <LinkedInIcon className="w-4 h-4" />
              Connect on LinkedIn
           </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-lg">Avinash Pathak</p>
          <p className="text-sm text-[var(--text-muted)]">University of Illinois Urbana-Champaign (UIUC)</p>
           <a 
              href="https://www.linkedin.com/in/avipathak99/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10"
           >
              <LinkedInIcon className="w-4 h-4" />
              Connect on LinkedIn
           </a>
        </div>
      </div>
    </header>
  );
};