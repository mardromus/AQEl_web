import React from 'react';
import { Section } from './Section';

// FIX: Extracted props into a dedicated interface to improve type clarity and
// resolve a subtle TypeScript issue causing false-positive "missing children" errors.
interface KeyPointProps {
  children: React.ReactNode;
}

const KeyPoint = ({ children }: KeyPointProps) => (
  <li className="flex items-start gap-4">
    <svg className="h-8 w-8 flex-shrink-0 text-[var(--primary)] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="text-lg text-[var(--text-muted)]">{children}</span>
  </li>
);

export const Conclusion: React.FC = () => {
    return (
        <Section 
            title="Conclusion & Future Work"
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            }
        >
            <p className="mt-4 text-lg text-[var(--text-muted)] max-w-4xl">
                AQEL's success in simulation demonstrates the potential of adaptive hybrid architectures for practical Quantum Machine Learning. The framework's ability to achieve high accuracy while automatically optimizing its structure suggests a promising direction for developing NISQ-compatible algorithms.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-semibold text-slate-100">Key Implications</h3>
                    <ul className="mt-6 space-y-5">
                        <KeyPoint>Mitigates barren plateaus through expressibility control.</KeyPoint>
                        <KeyPoint>Optimizes resource utilization by gradually scaling complexity.</KeyPoint>
                        <KeyPoint>Maintains training stability across varying problem characteristics.</KeyPoint>
                        <KeyPoint>Provides potential robustness to hardware noise.</KeyPoint>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-slate-100">Future Directions</h3>
                    <ul className="mt-6 space-y-5">
                        <KeyPoint>Integration with actual NISQ hardware to validate results.</KeyPoint>
                        <KeyPoint>Scaling to higher-dimensional datasets and more qubits.</KeyPoint>
                        <KeyPoint>Application to domain-specific problems (e.g., materials science, drug discovery).</KeyPoint>
                        <KeyPoint>Theoretical analysis of adaptation criteria and convergence guarantees.</KeyPoint>
                    </ul>
                </div>
            </div>
        </Section>
    );
};
