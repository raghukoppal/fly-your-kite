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
            <th>Stock</th>
            <th>Mode</th>
            <th>En Time</th>
            <th>Ex Time</th>
            <th>LTP</th>
            <th>Transaction</th>
            <th>En Price</th>
            <th>Pts</th>
            <th>Qty</th>
            <th>P&L</th>
            <th>Action</th>
            <th>Signal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.stock}</td>
              <td>
                <Switch checked={item.autoMode ? 'checked' : ''} />
              </td>
              <td>{item.entryTime}</td>
              <td>{item.exitTime}</td>
              <td>{item.ltp}</td>
              <td>{item.transaction}</td>
              <td>{item.entryPrice}</td>
              <td>{item.pts}</td>
              <td>{item.qty}</td>
              <td>{item.pl}</td>
              <td>
                <Button
                  variant="contained"
                  color={`${item.action === 'buy' ? 'success' : 'error'}`}
                >
                  {item.action}
                </Button>
              </td>
              <td>{item.signal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
