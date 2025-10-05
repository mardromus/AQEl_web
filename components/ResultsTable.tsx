import React from 'react';

const ablationTableData = [
  { method: 'AQEL (Full)', accuracy: '1.000', loss: '0.0848', time: '45.2s' },
  { method: 'Fixed 2-Layer NAVQC', accuracy: '0.867', loss: '0.1425', time: '28.7s' },
  { method: 'No AQFM Training', accuracy: '0.833', loss: '0.1892', time: '41.8s' },
  { method: 'Single Optimizer', accuracy: '0.900', loss: '0.1156', time: '32.3s' },
  { method: 'Classical SVM', accuracy: '0.750', loss: '0.2845', time: '2.1s' },
  { method: 'Random Forest', accuracy: '0.783', loss: '0.2534', time: '5.8s' },
];

export const ResultsTable: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-semibold text-center text-[var(--text-main)] mb-4">Ablation Study Results</h3>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg border border-[var(--border)]">
            <table className="min-w-full divide-y divide-[var(--border)]">
              <thead className="bg-slate-800/50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[var(--text-main)] sm:pl-6">Method</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-main)]">Test Acc.</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-main)]">Final Loss</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-main)]">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] bg-slate-900/50">
                {ablationTableData.map((row) => (
                  <tr key={row.method} className="hover:bg-slate-800/50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[var(--text-main)] sm:pl-6">{row.method}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-muted)]">{row.accuracy}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-muted)]">{row.loss}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-muted)]">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};