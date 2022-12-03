import React from 'react';
import PropTypes from 'prop-types';

import TableRows from '../TableRows/TableRows';

function Table({
  className, caption, headers, cells,
}) {
  const tableClassName = `table ${className}`;

  return (
    <table className={tableClassName}>
      <caption className="table__caption">{caption}</caption>
      <tbody>
        <TableRows headers={headers} cells={cells} />
      </tbody>
    </table>
  );
}

Table.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  headers: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ),
  cells: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ),
};

Table.defaultProps = {
  className: '',
  caption: '',
  headers: null,
  cells: null,
};

export default Table;
