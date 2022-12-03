import React from 'react';

import TableCells from '../TableCells/TableCells';

function TableRows({ headers, cells }) {
  return headers.map(({ id, tag, text }) => (
    <tr className="table-row" key={id}>
      <th className="table-row__header">{text}</th>
      <TableCells property={tag} cells={cells} />
    </tr>
  ));
}

export default TableRows;
