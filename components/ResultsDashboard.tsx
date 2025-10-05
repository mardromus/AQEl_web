import React, { useState } from 'react';
import { TrainingHistoryChart } from './charts/TrainingHistoryChart';
import { DecisionBoundaryChart } from './charts/DecisionBoundaryChart';
import { AblationStudyChart } from './charts/AblationStudyChart';
import { NoiseResilienceChart } from './charts/NoiseResilienceChart';
import { ResultsTable } from './ResultsTable';


type Tab = 'Training' | 'Boundary' | 'Ablation' | 'Noise';

export const ResultsDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('Training');
    
    const tabs: { id: Tab; label: string }[] = [
        { id: 'Training', label: 'Training Dynamics' },
        { id: 'Boundary', label: 'Decision Boundary' },
        { id: 'Ablation', label: 'Ablation Study' },
        { id: 'Noise', label: 'Noise Resilience' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Training':
                return <TrainingHistoryChart />;
            case 'Boundary':
                return <DecisionBoundaryChart />;
            case 'Ablation':
                return (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                        <AblationStudyChart />
                        <ResultsTable />
                    </div>
                );
            case 'Noise':
                return <NoiseResilienceChart />;
            default:
                return null;
        }
    };
    
    return (
        <div className="mt-12">
            <div className="flex justify-center">
                <nav className="flex flex-wrap justify-center gap-2 bg-slate-900/50 p-2 rounded-lg border border-[var(--border)]" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${
                                activeTab === tab.id
                                    ? 'bg-[var(--primary)] text-slate-900 font-bold'
                                    : 'text-[var(--text-muted)] hover:bg-slate-700/50 hover:text-white'
                            } whitespace-nowrap py-3 px-6 rounded-md text-sm transition-all`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="mt-8 bg-[var(--glass-bg)] backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-[var(--border)] shadow-2xl shadow-black/30">
                {renderContent()}
            </div>
        </div>
    );
};