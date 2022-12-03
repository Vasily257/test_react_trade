import React from 'react';

function TableCells({ property, cells }) {
  return cells.map((cell) => (
    <td className="table-cell" key={cell.id}>
      {cell[property]}
    </td>
  ));
}

export default TableCells;
