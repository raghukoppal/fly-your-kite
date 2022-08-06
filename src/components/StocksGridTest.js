import * as React from 'react';
import { Switch, Button } from '@mui/material';
import { data } from '../data';

export default function StocksGrid() {
  return (
    <div
      style={{
        'max-height': '400px',
        width: '100%',
        'margin-top': '32px',
        overflow: 'auto',
      }}
    >
      {/* <DataGrid rows={rows} columns={columns} /> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LTP</th>
            <th>Transaction</th>
            <th>Avg Price</th>
            <th>Net Qty</th>
            <th>Signal</th>
            <th>Position Status</th>
            <th>{'P&L'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.stock}</td>
              <td>{item.ltp}</td>
              <td>{item.transaction}</td>
              <td>Avg Price</td>
              <td>{item.qty}</td>
              <td>
                {/* <Button
                  variant="contained"
                  color={`${item.action === 'buy' ? 'success' : 'error'}`}
                >
                  {item.action}
                </Button> */}
                {item.action}
              </td>
              <td>{item.signal}</td>
              <td>{item.pl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
