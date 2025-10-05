import React from 'react';
import { Header } from './components/Header';
import { AbstractSection } from './components/AbstractSection';
import { FrameworkDiagram } from './components/FrameworkDiagram';
import { ResultsDashboard } from './components/ResultsDashboard';
import { Section } from './components/Section';
import { Conclusion } from './components/Conclusion';
import { MethodologySection } from './components/MethodologySection';
import { AnimatedSection } from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Header />
        
        <div className="space-y-24 mt-16">
          <AnimatedSection>
            <AbstractSection />
          </AnimatedSection>
          
          <AnimatedSection>
            <MethodologySection />
          </AnimatedSection>

          <AnimatedSection>
            <Section 
              title="The AQEL Framework"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414M12 16a4 4 0 110-8 4 4 0 010 8z" /></svg>
              }
            >
              <p className="mt-4 text-lg max-w-3xl text-slate-400">
                AQEL employs a four-component architecture for synergistic operation. This interactive diagram illustrates the flow of information and feedback loops between the classical and quantum components.
              </p>
              <FrameworkDiagram />
            </Section>
          </AnimatedSection>

          <AnimatedSection>
            <Section 
              title="Simulation Results & Analysis"
              icon={
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              }
            >
              <p className="mt-4 text-lg max-w-3xl text-slate-400">
                The framework was evaluated on a benchmark binary classification task. The following visualizations showcase its performance, adaptive behavior, and robustness.
              </p>
              <ResultsDashboard />
            </Section>
          </AnimatedSection>
          
          <AnimatedSection>
            <Conclusion />
          </AnimatedSection>
        </div>
      </main>
      <footer className="text-center py-8 text-slate-500 border-t border-[var(--border)] mt-24">
        <p>Built by a world-class senior frontend React engineer.</p>
        <p>Exploring the frontiers of Quantum Machine Learning.</p>
      </footer>
    </div>
  );
};

export default App;