import { useCallback, useState } from "react";
import { useStream } from "react-fetch-streams";
import { withLayout } from "../components/layout";

import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function createHoldingData(
  name,
  entryDateTime,
  exitDateTime,
  qty,
  ltp,
  entryPrice,
  exitPrice,
  avgPrice,
  age,
  transact,
  status,
  action,
  pandl
) {
  return {
    name,
    entryDateTime,
    exitDateTime,
    qty,
    ltp,
    entryPrice,
    exitPrice,
    avgPrice,
    age,
    transact,
    status,
    action,
    pandl,
  };
}

function createOppData(
  name,
  entryDateTime,
  exitDateTime,
  ltp,
  entryPrice,
  exitPrice,
  transact,
  qty,
  status,
  pandl
) {
  return {
    name,
    entryDateTime,
    exitDateTime,
    ltp,
    entryPrice,
    exitPrice,
    transact,
    qty,
    status,
    pandl,
  };
}

const holdingRows = [
  createHoldingData(
    "GULFOILLUB",
    "11/01/2023 09:15:00",
    "09/04/2023 01:20:00",
    1000,
    159.2,
    160.11,
    180.01,
    162.1,
    80,
    "Buy",
    "closed",
    "Exit",
    1256
  ),
  createHoldingData(
    "NLCINDIA",
    "06/02/2023 09:15:00",
    "29/06/2023 02:20:10",
    500,
    119.2,
    120.11,
    132.01,
    120.2,
    60,
    "Sell",
    "closed",
    "Exit",
    -1560
  ),
  createHoldingData(
    "TATACOFFEE",
    "06/11/2022 02:28:50",
    "19/04/2023 01:12:45",
    10,
    22119.2,
    22120.11,
    22132.01,
    22120.2,
    20,
    "Buy",
    "closed",
    "Exit",
    15960
  ),
  createHoldingData(
    "ICICIBANK",
    "06/11/2022 10:28:50",
    "29/05/2023 03:10:20",
    600,
    387.24,
    388.14,
    389.11,
    340.6,
    200,
    "Buy",
    "closed",
    "Exit",
    -15600
  ),
];

const opportunityRows = [
  createOppData(
    "INFY",
    "11/01/2023 09:15:00",
    "09/04/2023 01:20:00",
    159.2,
    159.5,
    189.06,
    "sell",
    1000,
    "complete",
    3200
  ),
  createOppData(
    "ASIANPAINT",
    "22/08/2022 10:15:00",
    "11/10/2022 03:01:10",
    1509.12,
    1509.14,
    1560.1,
    "Buy",
    100,
    "closed",
    1560
  ),
  createOppData(
    "BANKBEES",
    "22/02/2023 10:18:01",
    "11/04/2023 02:12:10",
    209.12,
    210.14,
    260.1,
    "Buy",
    1500,
    "closed",
    12600
  ),
  createOppData(
    "DIXON",
    "16/12/2022 11:18:01",
    "18/04/2023 01:12:10",
    1309.01,
    1310.14,
    1349.1,
    "Buy",
    1500,
    "closed",
    14600
  ),
  createOppData(
    "IRCTC",
    "04/02/2023 11:18:01",
    "18/04/2023 01:12:10",
    460.2,
    462.14,
    490.1,
    "Buy",
    1500,
    "closed",
    20600
  ),
  createOppData(
    "NIFTY ALPHA 50",
    "04/01/2023 11:28:01",
    "11/04/2023 01:12:10",
    1260.2,
    1262.14,
    1490.1,
    "Buy",
    500,
    "closed",
    20200
  ),
  createOppData(
    "HINDUNILVR",
    "08/03/2023 11:28:01",
    "11/04/2023 01:12:10",
    1320.02,
    1321.14,
    1520.1,
    "Buy",
    200,
    "closed",
    20200
  ),
  createOppData(
    "GMMPFAUDLR",
    "09/12/2022 11:28:01",
    "11/04/2023 01:12:10",
    320.02,
    321.14,
    520.1,
    "Buy",
    2000,
    "closed",
    45200
  ),
  createOppData(
    "BATAINDIA",
    "09/03/2023 10:28:01",
    "07/04/2023 03:12:10",
    320.02,
    321.14,
    520.1,
    "Buy",
    1000,
    "closed",
    5200
  ),
  createOppData(
    "IPCALAB",
    "31/04/2023 10:28:01",
    "27/05/2023 03:01:10",
    430.02,
    422.14,
    490.1,
    "Buy",
    1000,
    "closed",
    15200
  ),
  createOppData(
    "HBLPOWER",
    "12/05/2023 10:28:01",
    "10/07/2023 03:12:10",
    2320.02,
    2321.14,
    520.1,
    "Buy",
    500,
    "closed",
    5200
  ),
];

const HoldingsTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="thead">
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell>Instrument</TableCell>
            <TableCell>Entry date time</TableCell>
            <TableCell>Exit date time</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>LTP</TableCell>
            <TableCell>Entry price</TableCell>
            <TableCell>Exit price</TableCell>
            <TableCell>Avg price</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Transaction type</TableCell>
            <TableCell>Staus</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>P&L</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {holdingRows.map((row, index) => (
            <TableRow
              key={`${row.name}_${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.entryDateTime}</TableCell>
              <TableCell>{row.exitDateTime}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.ltp}</TableCell>
              <TableCell>{row.entryPrice}</TableCell>
              <TableCell>{row.exitPrice}</TableCell>
              <TableCell>{row.avgPrice}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                <span
                  className={
                    row.transact === "Buy"
                      ? "status-info"
                      : row.transact === "Sell"
                      ? "status-warn"
                      : ""
                  }
                >
                  {row.transact}
                </span>
              </TableCell>
              <TableCell>
                <span className={row.status === "closed" ? "status-warn" : ""}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell>
                <span className={row.action === "Exit" ? "status-error" : ""}>
                  {row.action}
                </span>
              </TableCell>
              <TableCell className={row.pandl < 0 ? "warn" : "success"}>
                {row.pandl}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const PositionsTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="thead">
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell>Instrument</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>LTP</TableCell>
            <TableCell>Entry price</TableCell>
            <TableCell>Exit price</TableCell>
            <TableCell>Avg price</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Transaction type</TableCell>
            <TableCell>Staus</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>P&L</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {holdingRows.map((row, index) => (
            <TableRow
              key={`${row.name}_${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.ltp}</TableCell>
              <TableCell>{row.entryPrice}</TableCell>
              <TableCell>{row.exitPrice}</TableCell>
              <TableCell>{row.avgPrice}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                <span
                  className={
                    row.transact === "Buy"
                      ? "status-info"
                      : row.transact === "Sell"
                      ? "status-warn"
                      : ""
                  }
                >
                  {row.transact}
                </span>
              </TableCell>
              <TableCell>
                <span className={row.status === "closed" ? "status-warn" : ""}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell>
                <span className={row.action === "Exit" ? "status-error" : ""}>
                  {row.action}
                </span>
              </TableCell>
              <TableCell className={row.pandl < 0 ? "warn" : "success"}>
                {row.pandl}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OpportunitiesTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="thead">
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell>Instrument</TableCell>
            <TableCell>Date & time</TableCell>
            <TableCell>LTP</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {opportunityRows.map((row, index) => (
            <TableRow
              key={`${row.name}_${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.entryDateTime}</TableCell>
              <TableCell>{row.ltp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const PortfolioTabPanel = ({ tabVal }) => {
  switch (tabVal) {
    case 0:
      return <HoldingsTable />;
    case 1:
      return <PositionsTable />;
    case 2:
      return <OpportunitiesTable />;
    default:
      return <HoldingsTable />;
  }
};

const PortfolioTabs = ({ tabVal, tabValSet, tabNameSet }) => {
  const handleTabChange = (e, newTabVal) => {
    tabValSet(newTabVal);
    tabNameSet(e.target.innerHTML);
  };

  return (
    <Box>
      <Tabs
        sx={{
          "& button": {
            textTransform: "none",
            fontWeight: "normal",
            padding: "4px",
            color: "#444",
            fontSize: "13px",
            "&:hover": {
              color: "#c43235",
            },
            "&.Mui-selected": {
              color: "#c43235",
            },
          },
          "& .MuiTabs-flexContainer": { justifyContent: "flex-end" },
        }}
        value={tabVal}
        onChange={handleTabChange}
      >
        <Tab value={0} label={"Holdings"} disableRipple={true} />
        <Tab value={1} label={"Positions"} disableRipple={true} />
        <Tab value={2} label={"Opportunities"} disableRipple={true} />
      </Tabs>
    </Box>
  );
};

const fetchParams = { mode: "cors" };

const Portfolio = () => {
  const [tabVal, setTabVal] = useState(0);
  const [tabName, setTabName] = useState("");
  const [data, setData] = useState({});
  const onNext = useCallback(
    async (res) => {
      const data = await res.json();
      console.log("data", data);
      setData(data);
    },
    [setData]
  );
  useStream(
    "https://9d00-2401-4900-1f28-6bca-a282-386d-7c17-dce6.ngrok.io/v1/shorttermtrading/live/positions",
    { onNext }
  );

  console.log("data", data);
  return (
    <div className="portfolio">
      <Paper sx={{ padding: "1rem" }} elevation={1}>
        <Grid container>
          <Grid item xs={8}>
            <span>{tabName} </span>
          </Grid>
          <Grid item xs={4}>
            <PortfolioTabs
              tabVal={tabVal}
              tabValSet={setTabVal}
              tabNameSet={setTabName}
            />
          </Grid>
          <Grid item xs={12}>
            <PortfolioTabPanel tabVal={tabVal} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withLayout(Portfolio);
