import React, { useCallback, useState } from "react";
import { useStream } from "react-fetch-streams";
import { Switch, Button } from "@mui/material";
//import { data } from "../data";

export default function StocksGrid() {
  const [data, setData] = useState({});

  const onNext = useCallback(
    async (res) => {
      try {
        //console.log(res);
        const data = await res.json();
        //console.log(data);

        setData(data);
      } catch (error) {
        //console.log(error);
      }
    },
    [setData]
  );
  //useStream("http://localhost:8080/data/generator/v1", { onNext });
  useStream("http://localhost:8080/trading/stock/positions1", { onNext });

  return (
    data && (
      <div
        style={{
          "max-height": "400px",
          width: "100%",
          "margin-top": "32px",
          overflow: "auto",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Net Qty</th>
              <th>Transaction</th>
              <th>Avg Price</th>
              <th>LTP</th>
              <th>En Time</th>
              <th>Signal</th>
              <th>Status</th>
              <th>{"P&L"}</th>
              <th>Realised</th>
              <th>Un-Realised</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.netQty}</td>
              <td>{data.transaction}</td>
              <td>{data.avgPrice}</td>
              <td>{data.ltp}</td>
              <td>09:23</td>
              <td>{data.signal}</td>
              <td>{data.status}</td>
              <td>{data.pnl}</td>
              <td>{data.realised}</td>
              <td>{data.unRealised}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
}
