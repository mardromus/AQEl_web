import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ABLATION_STUDY_DATA } from '../../constants';

export const AblationStudyChart: React.FC = () => {
    return (
        <div className="w-full h-96">
            <h3 className="text-xl font-semibold text-center text-[var(--text-main)] mb-4">Ablation Test Accuracy</h3>
            <ResponsiveContainer>
                <BarChart data={ABLATION_STUDY_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(136, 146, 176, 0.2)" />
                    <XAxis type="number" domain={[0, 1]} stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} />
                    <YAxis dataKey="method" type="category" width={120} stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                        labelStyle={{ color: 'var(--text-main)' }}
                    />
                    <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
                        {ABLATION_STUDY_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.type === 'Quantum' ? 'var(--primary)' : 'var(--accent)'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};