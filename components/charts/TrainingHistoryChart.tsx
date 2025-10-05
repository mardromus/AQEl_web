import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TRAINING_HISTORY_DATA } from '../../constants';

export const TrainingHistoryChart: React.FC = () => {
    return (
        <div className="w-full h-96">
            <h3 className="text-xl font-semibold text-center text-[var(--text-main)] mb-4">Training & Test Loss History</h3>
            <ResponsiveContainer>
                <LineChart
                    data={TRAINING_HISTORY_DATA}
                    margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(136, 146, 176, 0.2)" />
                    <XAxis 
                        dataKey="block" 
                        label={{ value: 'Optimization Block', position: 'insideBottom', offset: -15, fill: 'var(--text-muted)' }} 
                        stroke="var(--text-muted)"
                        tick={{ fill: 'var(--text-muted)' }}
                    />
                    <YAxis 
                        label={{ value: 'Loss', angle: -90, position: 'insideLeft', fill: 'var(--text-muted)' }}
                        stroke="var(--text-muted)"
                        tick={{ fill: 'var(--text-muted)' }}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }} 
                        labelStyle={{ color: 'var(--text-main)' }}
                    />
                    <Legend wrapperStyle={{ color: 'var(--text-main)', paddingTop: '20px' }} />
                    <Line type="monotone" dataKey="Training Loss" stroke="var(--secondary)" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Test Loss" stroke="var(--primary)" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};