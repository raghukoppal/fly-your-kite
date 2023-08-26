import { useCallback, useState, useEffect } from "react";
import { withLayout } from "../components/layout";

import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { PortFolioTabs, PortfolioTabPanel } from "../components/portfolio";

const Portfolio = () => {
  const [tabVal, setTabVal] = useState(0);
  const [tabName, setTabName] = useState("Holdings");
  const [stocksdata, setStocksData] = useState({});

  useEffect(() => {
    // Create an EventSource to listen for server-sent events - test source - comment below
    const eventSource = new EventSource("/api/stockstream");

    // Create an EventSource to listen for server-sent events - live source un comment below snippet
    // const eventSource = new EventSource(
    //   "https://5c2e-2401-4900-1f29-829d-f2c5-17fa-fce1-d6af.ngrok.io/v1/shorttermtrading/live/positions4"
    // );

    // Listen for messages from the server
    eventSource.onopen = (event) => {
      console.log("stream is open");
    };

    eventSource.onmessage = (evt) => {
      setStocksData(JSON.parse(evt.data));
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
    };
    // Cleanup when the component is unmounted
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="portfolio">
      <Paper sx={{ padding: "1rem" }} elevation={1}>
        <Grid container>
          <Grid item xs={8}>
            <span>{tabName} </span>
          </Grid>
          <Grid item xs={4}>
            <PortFolioTabs
              tabVal={tabVal}
              tabValSet={setTabVal}
              setTabName={setTabName}
            />
          </Grid>
          <Grid item xs={12}>
            <PortfolioTabPanel tabVal={tabVal} data={stocksdata} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withLayout(Portfolio);
