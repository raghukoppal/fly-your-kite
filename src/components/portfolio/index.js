import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

export const PortFolioTabs = ({ tabVal, tabValSet, setTabName }) => {
  const handleTabChange = (e, value) => {
    tabValSet(value);
    setTabName(e.target.innerHTML);
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

export const PortfolioTabPanel = ({ tabVal, data }) => {
  switch (tabVal) {
    case 0:
      return <HoldingsTable data={data} />;
    case 1:
      return <PositionsTable />;
    case 2:
      return <OpportunitiesTable />;
    default:
      return <HoldingsTable />;
  }
};

const HoldingsTable = ({ data }) => {
  return (
    data && (
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
                key={`${data["name"]}_${keyIndex}`}
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
                <TableCell>
                  <span
                    className={
                      data[key].status === "Buy"
                        ? "status-success"
                        : "status-error"
                    }
                  >
                    {data[key].status}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={
                      data[key].status === "Buy"
                        ? "status-success"
                        : "status-error"
                    }
                  >
                    {data[key].status}
                  </span>
                </TableCell>
                <TableCell>{data[key].posInfo}</TableCell>
                <TableCell className={data[key].pnl > 0 ? "success" : "error"}>
                  {data[key].pnl}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

const PositionsTable = () => {
  return <div>PositionsTable</div>;
};

const OpportunitiesTable = () => {
  return <div>Opportunities Table</div>;
};
