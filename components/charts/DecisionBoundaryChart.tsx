import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';
import { MOONS_DATASET } from '../../constants';

export const DecisionBoundaryChart: React.FC = () => {
    return (
        <div className="w-full h-96 relative">
            <h3 className="text-xl font-semibold text-center text-[var(--text-main)] mb-4">Learned Decision Boundary</h3>
            <div className="absolute inset-0 top-10 right-8 bottom-10 left-12 bg-gradient-to-r from-[var(--secondary)]/10 via-transparent to-[var(--primary)]/10 rounded-md"></div>
            <ResponsiveContainer>
                <ScatterChart
                    margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(136, 146, 176, 0.2)" />
                    <XAxis 
                        type="number" 
                        dataKey="x" 
                        name="Feature 1" 
                        stroke="var(--text-muted)"
                        tick={{ fill: 'var(--text-muted)' }}
                        domain={[-2.5, 2.5]}
                    />
                    <YAxis 
                        type="number" 
                        dataKey="y" 
                        name="Feature 2" 
                        stroke="var(--text-muted)"
                        tick={{ fill: 'var(--text-muted)' }}
                        domain={[-2, 2]}
                    />
                    <ZAxis dataKey="value" range={[50, 50]} />
                    <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }} 
                        contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                        labelStyle={{ color: 'var(--text-main)' }}
                    />
                    <Scatter name="Class 1" data={MOONS_DATASET.filter(d => d.value === 1)} fill="var(--primary)" shape="circle" />
                    <Scatter name="Class -1" data={MOONS_DATASET.filter(d => d.value === -1)} fill="var(--secondary)" shape="circle" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};