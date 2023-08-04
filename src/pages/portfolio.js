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

import { sampleData } from "../mockdata/sampledata";

const HoldingsTable = ({ data }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="thead">
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell>Name</TableCell>
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
          {Object.keys(data).map((key, keyIndex) => (
            <TableRow
              key={`${data[key].name_keyIndex}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{data[key].name}</TableCell>
              <TableCell>{data[key].entryTime}</TableCell>
              <TableCell>{data[key].exitTime}</TableCell>
              <TableCell>{data[key].netQty}</TableCell>
              <TableCell>{data[key].ltp}</TableCell>
              <TableCell>{data[key].avgPrice}</TableCell>
              <TableCell>{data[key].avgPrice}</TableCell>
              <TableCell>{data[key].avgPrice}</TableCell>
              <TableCell>{data[key].token}</TableCell>
              <TableCell>{data[key].status}</TableCell>
              <TableCell>{data[key].status}</TableCell>
              <TableCell>{data[key].posInfo}</TableCell>
              <TableCell>{data[key].pnl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const PositionsTable = ({ data }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="thead">
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell>Name</TableCell>
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
          {Object.keys(data).map((key, keyIndex) => (
            <TableRow
              key={`${data[key].name_keyIndex}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{data[key].name}</TableCell>
              <TableCell>{data[key].qty}</TableCell>
              <TableCell>{data[key].ltp}</TableCell>
              <TableCell>{data[key].entryPrice}</TableCell>
              <TableCell>{data[key].entryPrice}</TableCell>
              <TableCell>{data[key].avgPrice}</TableCell>
              <TableCell>{data[key].pts}</TableCell>
              <TableCell>{data[key].transaction}</TableCell>
              <TableCell>{data[key].transaction}</TableCell>
              <TableCell>{data[key].action}</TableCell>
              <TableCell>{data[key].pnl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OpportunitiesTable = ({ data }) => {
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
          {Object.keys(data).map((key, keyIndex) => (
            <TableRow
              key={`${data[key].name_keyIndex}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{data[key].name}</TableCell>
              <TableCell>{data[key].entryTime}</TableCell>
              <TableCell>{data[key].ltp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const PortfolioTabPanel = ({ tabVal, data }) => {
  // return <div>test</div>;
  switch (tabVal) {
    case 0:
      return <HoldingsTable data={data} />;
    case 1:
      return <PositionsTable data={data} />;
    case 2:
      return <OpportunitiesTable data={data} />;
    default:
      return <HoldingsTable data={data} />;
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

const Portfolio = () => {
  const [tabVal, setTabVal] = useState(0);
  const [tabName, setTabName] = useState("");
  const [data, setData] = useState({});
  const onNext = useCallback(
    async (res) => {
      try {
        const restxt = await res.text();
        const jsonData = JSON.parse(restxt.replace("data:", ""));

        //Now you can access the individual properties of the jsonData object
        setData((prevRespData) => ({
          ...prevRespData,
          [jsonData.name]: jsonData,
        }));
      } catch (error) {
        console.error("Error parsing JSON:", error);
        // Handle the error, for example, set a default value for data or show an error message.
        setData({});
      }
    },
    [setData]
  );

  useStream(
    "https://18ff-2401-4900-1f29-2ddf-6ea0-1a9c-8605-e31f.ngrok.io/v1/shorttermtrading/live/positions",
    { onNext }
  );

  return (
    data && (
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
              <PortfolioTabPanel tabVal={tabVal} data={data} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  );
};

export default withLayout(Portfolio);
