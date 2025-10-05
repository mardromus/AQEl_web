import React, { useState } from 'react';
import { FRAMEWORK_COMPONENTS } from '../constants';

const FlowArrow = ({ direction, label }: { direction: 'right' | 'left', label: string }) => {
    const isRight = direction === 'right';
    return (
        <div className={`flex items-center gap-4 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="relative w-24 h-1 bg-slate-700 rounded-full">
                <div 
                    className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] rounded-full animate-pulse"
                    style={{ animation: `flow 2s linear infinite ${isRight ? '' : 'reverse'}` }}
                ></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={isRight ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M7 16l-4-4m0 0l4-4m-4 4h18"} />
            </svg>
            <style>
                {`
                @keyframes flow {
                    0% { transform: scaleX(0); transform-origin: ${isRight ? 'left' : 'right'}; }
                    50% { transform: scaleX(1); transform-origin: ${isRight ? 'left' : 'right'}; }
                    50.1% { transform-origin: ${isRight ? 'right' : 'left'}; }
                    100% { transform: scaleX(0); transform-origin: ${isRight ? 'right' : 'left'}; }
                }
                `}
            </style>
        </div>
    );
};

export const FrameworkDiagram: React.FC = () => {
    const [selected, setSelected] = useState<string | null>('CMO-QF');

    const ComponentCard = ({ id, title, description }: { id: string, title: string, description: string }) => {
        const isSelected = selected === id;
        return (
            <div
                onClick={() => setSelected(selected === id ? null : id)}
                className={`w-full p-4 rounded-lg cursor-pointer transition-all duration-300 backdrop-blur-sm border ${isSelected ? 'bg-[var(--primary)]/10 border-[var(--primary)]' : 'bg-slate-800/50 hover:bg-slate-800/80 border-transparent hover:border-slate-600'}`}
            >
                <h3 className="font-bold text-[var(--primary)] text-lg">{title}</h3>
                <div className={`grid transition-all duration-500 ease-in-out ${isSelected ? 'grid-rows-[1fr] pt-2' : 'grid-rows-[0fr]'}`}>
                   <div className="overflow-hidden">
                     <p className="text-sm text-[var(--text-main)] leading-relaxed">{description}</p>
                   </div>
                </div>
            </div>
        );
    };

    return (
        <div className="mt-12 p-4 sm:p-6 rounded-xl bg-black/20 w-full">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-8">
                
                {/* Column 1: Classical */}
                <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-lg bg-slate-900/30">
                    <h2 className="text-2xl font-bold text-slate-200 text-center">Classical Control Plane</h2>
                    <ComponentCard {...FRAMEWORK_COMPONENTS.find(c => c.id === 'CMO-QF')!} />
                </div>

                {/* Middle Flow Channel */}
                <div className="flex md:flex-col justify-around md:justify-center items-center gap-8 py-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-sm font-semibold text-[var(--secondary)] mb-2">Control Signals</span>
                        <FlowArrow direction="right" label="Control" />
                    </div>
                     <div className="flex flex-col items-center text-center">
                        <span className="text-sm font-semibold text-[var(--primary)] mb-2">Quantum Feedback</span>
                        <FlowArrow direction="left" label="Feedback" />
                    </div>
                </div>
                
                {/* Column 2: Quantum */}
                <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-lg bg-slate-900/30">
                    <h2 className="text-2xl font-bold text-slate-200 text-center">Quantum Processing Unit</h2>
                    <ComponentCard {...FRAMEWORK_COMPONENTS.find(c => c.id === 'AQFM')!} />
                    <ComponentCard {...FRAMEWORK_COMPONENTS.find(c => c.id === 'NAVQC')!} />
                </div>
            </div>

            {/* Bottom Bridge */}
            <div className="mt-8 pt-8 border-t border-[var(--border)]">
                 <h2 className="text-xl font-bold text-slate-200 text-center mb-4">Data Interface Layer</h2>
                 <ComponentCard {...FRAMEWORK_COMPONENTS.find(c => c.id === 'SSDI')!} />
            </div>

            <p className="text-center text-sm text-slate-500 mt-8 w-full">
                Click on a component to expand its description. The diagram shows how the Classical Control Plane sends control signals to the Quantum Processing Unit and receives feedback to make adaptive decisions.
            </p>
        </div>
    );
};
