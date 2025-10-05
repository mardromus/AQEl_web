import React from 'react';
import { Section } from './Section';
import { METHODOLOGY_POINTS } from '../constants';
import { MethodologyPoint } from '../types';

const MethodologyCard: React.FC<{ item: MethodologyPoint }> = ({ item }) => (
    <div className="bg-[var(--glass-bg)] backdrop-blur-md p-6 rounded-lg border border-[var(--border)] h-full">
        <div className="flex items-center gap-4">
            <item.icon className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
            <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
        </div>
        <div className="mt-4 space-y-4">
            <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--text-muted)]">Previous Approaches</h4>
                <p className="mt-1 text-[var(--text-main)]/80 text-base">{item.previous}</p>
            </div>
             <div className="border-t border-[var(--border)] my-4"></div>
            <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--primary)]">AQEL's Innovation</h4>
                <p className="mt-1 text-[var(--text-main)] text-base">{item.innovation}</p>
            </div>
        </div>
    </div>
);

export const MethodologySection: React.FC = () => {
    return (
        <Section
            title="Methodology Highlights"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
        >
             <p className="mt-4 text-lg max-w-3xl text-[var(--text-muted)]">
               The AQEL framework is built on key principles that improve upon standard hybrid quantum-classical models. Here’s a breakdown of what makes it different and more effective.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {METHODOLOGY_POINTS.map((point, index) => (
                    <MethodologyCard key={index} item={point} />
                ))}
            </div>
        </Section>
    );
};