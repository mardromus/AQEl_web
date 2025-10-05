// Fix: Import React to make the JSX namespace available, resolving issues with using types like JSX.Element.
import React from 'react';

export interface TrainingHistoryDataPoint {
  block: number;
  'Training Loss': number;
  'Test Loss': number;
}

export interface AblationDataPoint {
  method: string;
  accuracy: number;
  type: 'Quantum' | 'Classical';
}

export interface NoiseResilienceDataPoint {
  noise: number;
  AQEL: number;
  'Static VQC': number;
}

export interface MoonDataPoint {
    x: number;
    y: number;
    value: number;
}

export interface MethodologyPoint {
    // FIX: Changed `JSX.Element` to `React.ReactElement` to resolve the "Cannot find namespace 'JSX'" error.
    icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
    title: string;
    previous: string;
    innovation: string;
}