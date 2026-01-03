import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CarModel, PaintFinish, CameraPreset } from '@/types';

interface SimulatorState {
  /** Currently selected car model */
  selectedCar: CarModel;
  /** Currently selected paint color (hex) */
  selectedColor: string;
  /** Currently selected color code */
  selectedColorCode: string;
  /** Currently selected finish type */
  selectedFinish: PaintFinish;
  /** Current camera preset angle */
  cameraPreset: CameraPreset;
  /** Whether the model is currently loading */
  isLoading: boolean;
  /** Loading progress percentage */
  loadingProgress: number;
  /** Auto-rotate enabled */
  autoRotate: boolean;

  /** Actions */
  setCar: (car: CarModel) => void;
  setColor: (color: string, code?: string) => void;
  setFinish: (finish: PaintFinish) => void;
  setCameraPreset: (preset: CameraPreset) => void;
  setLoading: (loading: boolean) => void;
  setLoadingProgress: (progress: number) => void;
  setAutoRotate: (autoRotate: boolean) => void;
  resetConfig: () => void;
}

const DEFAULT_STATE = {
  selectedCar: 'sedan' as CarModel,
  selectedColor: '#1e3a5f', // Sovicol Navy
  selectedColorCode: 'SC-B003',
  selectedFinish: 'metallic' as PaintFinish,
  cameraPreset: 'quarter' as CameraPreset,
  isLoading: false,
  loadingProgress: 0,
  autoRotate: true,
};

export const useSimulatorStore = create<SimulatorState>()(
  persist(
    (set) => ({
      ...DEFAULT_STATE,

      setCar: (car) => set({ selectedCar: car, isLoading: true }),

      setColor: (color, code) =>
        set({
          selectedColor: color,
          selectedColorCode: code || '',
        }),

      setFinish: (finish) => set({ selectedFinish: finish }),

      setCameraPreset: (preset) => set({ cameraPreset: preset }),

      setLoading: (loading) => set({ isLoading: loading }),

      setLoadingProgress: (progress) => set({ loadingProgress: progress }),

      setAutoRotate: (autoRotate) => set({ autoRotate }),

      resetConfig: () => set(DEFAULT_STATE),
    }),
    {
      name: 'sovicol-simulator',
      partialize: (state) => ({
        selectedCar: state.selectedCar,
        selectedColor: state.selectedColor,
        selectedColorCode: state.selectedColorCode,
        selectedFinish: state.selectedFinish,
        autoRotate: state.autoRotate,
      }),
    }
  )
);

/** Hook to get current configuration as URL-shareable state */
export function useSimulatorConfig() {
  const {
    selectedCar,
    selectedColor,
    selectedColorCode,
    selectedFinish,
    cameraPreset,
  } = useSimulatorStore();

  const configString = `${selectedCar}-${selectedColorCode}-${selectedFinish}`;

  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/simulator?config=${encodeURIComponent(configString)}`
      : '';

  return {
    car: selectedCar,
    color: selectedColor,
    colorCode: selectedColorCode,
    finish: selectedFinish,
    cameraPreset,
    configString,
    shareUrl,
  };
}
