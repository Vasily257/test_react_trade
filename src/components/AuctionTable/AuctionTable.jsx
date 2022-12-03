import React from 'react';

import TEXT_CONTENT from '../../utils/scripts/textContent';
import memberBase from '../../utils/scripts/member-base.json';

import Table from '../Table/Table';

const { desription, lotName, date } = TEXT_CONTENT.COMMON;
const { caption, headers } = TEXT_CONTENT.TABLE;
const { members } = memberBase;

function AuctionTable() {
  return (
    <div className="auction-table">
      <p className="auction-table__desription">{` ${desription} ${lotName} ${date}`}</p>
      <Table className="auction-table__table" caption={caption} headers={headers} cells={members} />
    </div>
  );
}

export default AuctionTable;
