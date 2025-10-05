import React from 'react';
import { TrainingHistoryDataPoint, AblationDataPoint, NoiseResilienceDataPoint, MoonDataPoint, MethodologyPoint } from './types';

export const ABSTRACT_TEXT = "This paper presents Adaptive Quantum-Enhanced Learning (AQEL), a novel hybrid quantum-classical machine learning framework designed to address critical challenges in the Noisy Intermediate-Scale Quantum (NISQ) era. AQEL integrates four adaptive components: Adaptive Quantum Feature Mapping (AQFM), a Noise-Aware Variational Quantum Circuit (NAVQC), a Classical Meta-Optimizer with Quantum Feedback (CMO-QF), and a Secure Scalable Data Interface (SSDI). Unlike static hybrid approaches, AQEL is designed to dynamically adapt its quantum architecture based on performance metrics and gradient behavior. We evaluate the framework's effectiveness on a benchmark binary classification task via high-fidelity simulation. The results demonstrate high classification accuracy, with the model automatically adapting its circuit depth during training to navigate the expressibility-trainability trade-off. Comprehensive ablation studies and a simulated noise resilience analysis validate the potential of AQEL's adaptive components, indicating its promise for developing robust QML applications.";

export const TRAINING_HISTORY_DATA: TrainingHistoryDataPoint[] = [
    { block: 0, "Training Loss": 0.35, "Test Loss": 0.3464 },
    { block: 1, "Training Loss": 0.18, "Test Loss": 0.1684 },
    { block: 2, "Training Loss": 0.11, "Test Loss": 0.0986 },
    { block: 3, "Training Loss": 0.09, "Test Loss": 0.0880 },
    { block: 4, "Training Loss": 0.08, "Test Loss": 0.0848 },
];

export const ABLATION_STUDY_DATA: AblationDataPoint[] = [
    { method: "AQEL (Full)", accuracy: 1.000, type: 'Quantum' },
    { method: "Fixed 2-Layer NAVQC", accuracy: 0.867, type: 'Quantum' },
    { method: "No AQFM Training", accuracy: 0.833, type: 'Quantum' },
    { method: "Single Optimizer", accuracy: 0.900, type: 'Quantum' },
    { method: "Classical SVM", accuracy: 0.750, type: 'Classical' },
    { method: "Random Forest", accuracy: 0.783, type: 'Classical' },
];

export const NOISE_RESILIENCE_DATA: NoiseResilienceDataPoint[] = [
    { noise: 0, AQEL: 0.0848, 'Static VQC': 0.0848 },
    { noise: 0.01, AQEL: 0.10, 'Static VQC': 0.15 },
    { noise: 0.02, AQEL: 0.12, 'Static VQC': 0.22 },
    { noise: 0.03, AQEL: 0.15, 'Static VQC': 0.30 },
    { noise: 0.04, AQEL: 0.19, 'Static VQC': 0.38 },
    { noise: 0.05, AQEL: 0.24, 'Static VQC': 0.45 },
    { noise: 0.06, AQEL: 0.29, 'Static VQC': 0.51 },
    { noise: 0.08, AQEL: 0.38, 'Static VQC': 0.58 },
    { noise: 0.1, AQEL: 0.48, 'Static VQC': 0.62 },
];

// Mock data to simulate the moons dataset from the paper
export const MOONS_DATASET: MoonDataPoint[] = [
    ...Array.from({ length: 100 }, (_, i) => {
        const angle = (i / 100) * Math.PI;
        return {
            x: Math.cos(angle) * 1.5 - 0.25 + (Math.random() - 0.5) * 0.5,
            y: Math.sin(angle) * 0.8 + (Math.random() - 0.5) * 0.5,
            value: 1, // Class 1
        };
    }),
    ...Array.from({ length: 100 }, (_, i) => {
        const angle = (i / 100) * Math.PI;
        return {
            x: -Math.cos(angle) * 1.5 + 0.25 + (Math.random() - 0.5) * 0.5,
            y: -Math.sin(angle) * 0.8 + 0.5 + (Math.random() - 0.5) * 0.5,
            value: -1, // Class -1
        };
    }),
];

export const FRAMEWORK_COMPONENTS = [
    {
        id: "CMO-QF",
        title: "Classical Meta-Optimizer with Quantum Feedback",
        short: "CMO-QF",
        description: "This is the strategic brain of the entire framework. Running on a classical computer, it does more than just optimize parameters. It analyzes performance metrics and gradient data fed back from the quantum circuit. Based on this feedback, it makes high-level architectural decisions, such as increasing the quantum circuit's depth or adjusting the data encoding strategy, forming an intelligent, adaptive control loop.",
    },
    {
        id: "AQFM",
        title: "Adaptive Quantum Feature Mapping",
        short: "AQFM",
        description: "This component acts as an intelligent data translator. It's responsible for encoding classical data (e.g., features from a dataset) into a quantum state that the quantum circuit can process. Crucially, this mapping is 'adaptive'—its parameters are learned during training. This allows the framework to discover the most effective quantum representation of the data for the specific task, rather than relying on a fixed, potentially sub-optimal encoding scheme.",
    },
    {
        id: "NAVQC",
        title: "Noise-Aware Variational Quantum Circuit",
        short: "NAVQC",
        description: "This is the quantum core where the main computation happens. It's a sequence of quantum gates with tunable parameters ('variational'). Its key feature is its dynamic depth. The circuit starts shallow to remain trainable and resilient to noise. If training stagnates, the CMO-QF directs it to add more layers, increasing its computational power ('expressibility'). This navigates the critical trade-off between power and trainability in the noisy NISQ era.",
    },
    {
        id: "SSDI",
        title: "Secure Scalable Data Interface",
        short: "SSDI",
        description: "This component is the essential communication bridge. It manages the efficient and robust flow of data between the classical optimizer and the quantum processor. It handles tasks like batching data for scalable training and ensuring the integrity of the classical-quantum communication, which is vital for the practical implementation of any hybrid algorithm.",
    },
];

export const METHODOLOGY_POINTS: MethodologyPoint[] = [
    {
        icon: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" })),
        title: "Adaptive Architecture",
        previous: "Most hybrid models use a static, predefined quantum circuit. Researchers would have to guess the best circuit depth and structure beforehand, which is often suboptimal and inflexible.",
        innovation: "AQEL dynamically changes its quantum circuit depth during training. It starts simple to avoid noise and complexity, and only adds layers if performance stagnates. This automated adjustment is more efficient and robust."
    },
    {
        icon: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25 1.313M12 12.75V15m0-2.25l2.25 1.313M4.5 15.75l2.25-1.313M4.5 15.75l2.25 1.313M4.5 15.75V18m15-2.25l-2.25-1.313m-10.5 0l2.25 1.313m-2.25 0l2.25-1.313m0 0l2.25 1.313m0 0l2.25-1.313m0 0l2.25 1.313M12 9.75l-2.25-1.313M12 9.75l2.25-1.313M12 9.75V7.5m0 2.25L9.75 8.438" })),
        title: "Intelligent Quantum-Classical Loop",
        previous: "Classical optimizers were used simply to tune parameters within a fixed quantum circuit. The communication was one-way: the classical part told the quantum part what to do, with little intelligent feedback.",
        innovation: "AQEL's classical optimizer (CMO-QF) acts as a 'meta-controller.' It doesn't just tune parameters; it analyzes gradients and performance metrics from the quantum circuit to make high-level architectural decisions, creating a true, intelligent feedback loop."
    },
    {
        icon: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" })),
        title: "Barren Plateau Mitigation",
        previous: "Deep, complex quantum circuits often suffer from 'barren plateaus,' where gradients become vanishingly small, making the model impossible to train effectively. This is a major roadblock for QML.",
        innovation: "By starting with a shallow, trainable circuit and only increasing depth when needed, AQEL actively avoids the conditions that create barren plateaus. This 'complexity-on-demand' approach ensures the model remains trainable throughout the process."
    },
    {
        icon: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" })),
        title: "Adaptive Data Encoding",
        previous: "Data encoding strategies (feature maps) were typically fixed. How classical data was translated into quantum states did not change, which might not be the most powerful representation for a given problem.",
        innovation: "AQEL's feature mapping (AQFM) is also trainable. The system learns the best way to encode the data in parallel with learning the model parameters, leading to a more powerful and tailored solution for the specific dataset."
    }
];