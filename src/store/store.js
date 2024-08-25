// src/store/store.js
import create from 'zustand';

const useStore = create((set) => ({
  grid: Array(10).fill(null).map(() => Array(10).fill('')),
  updateCell: (row, col, value) => set((state) => {
    const newGrid = state.grid.map((r, rIndex) =>
      r.map((c, cIndex) => (rIndex === row && cIndex === col ? value : c))
    );
    return { grid: newGrid };
  }),
}));

export { useStore };
