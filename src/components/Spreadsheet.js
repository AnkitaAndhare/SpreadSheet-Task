// src/components/Spreadsheet.js
"use client";  // Add this directive at the top

import React, { useState } from 'react';
import { useStore } from '../store/store';  // Correct path to store.js

const Spreadsheet = () => {
  const { grid, updateCell } = useStore();
  const [editingCell, setEditingCell] = useState(null);
  const [cellValue, setCellValue] = useState('');

  const handleCellClick = (row, col) => {
    setEditingCell({ row, col });
    setCellValue(grid[row][col]);
  };

  const handleChange = (e) => {
    setCellValue(e.target.value);
  };

  const handleBlur = () => {
    if (editingCell) {
      updateCell(editingCell.row, editingCell.col, cellValue);
      setEditingCell(null);
    }
  };

  return (
    <div className="grid grid-cols-10 gap-1">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            value={editingCell?.row === rowIndex && editingCell?.col === colIndex ? cellValue : cell}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border p-2 w-full h-10"
          />
        ))
      )}
    </div>
  );
};

export default Spreadsheet;
