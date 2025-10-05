import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { NOISE_RESILIENCE_DATA } from '../../constants';

export const NoiseResilienceChart: React.FC = () => {
    return (
        <div className="w-full h-96">
            <h3 className="text-xl font-semibold text-center text-[var(--text-main)] mb-4">Noise Resilience Comparison</h3>
            <ResponsiveContainer>
                <LineChart
                    data={NOISE_RESILIENCE_DATA}
                    margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(136, 146, 176, 0.2)" />
                    <XAxis 
                        dataKey="noise" 
                        type="number"
                        domain={[0, 0.1]}
                        label={{ value: 'Noise Level', position: 'insideBottom', offset: -15, fill: 'var(--text-muted)' }} 
                        stroke="var(--text-muted)"
                        tick={{ fill: 'var(--text-muted)' }}
                        tickFormatter={(tick) => `${(tick * 100).toFixed(0)}%`}
                    />
                    <YAxis 
                        label={{ value: 'Test Loss', angle: -90, position: 'insideLeft', fill: 'var(--text-muted)' }}
                        stroke="var(--text-muted)"
                        tick={{ fill: 'var(--text-muted)' }}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }} 
                        labelStyle={{ color: 'var(--text-main)' }}
                        formatter={(value: number) => value.toFixed(4)}
                        labelFormatter={(label: number) => `Noise: ${(label * 100).toFixed(0)}%`}
                    />
                    <Legend wrapperStyle={{ color: 'var(--text-main)', paddingTop: '20px' }} />
                    <Line type="monotone" dataKey="AQEL" stroke="var(--primary)" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Static VQC" stroke="#f87171" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};