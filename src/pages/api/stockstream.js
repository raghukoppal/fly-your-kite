const getRandomToken = () => {
  // Generate a random token logic here
  return Math.floor(Math.random() * 1000).toString();
};

const getRandomLTP = () => {
  // Generate a random LTP value logic here
  return (Math.random() * 1000).toFixed(2);
};

const getRandomPNL = () => {
  // Generate a random PNL value logic here
  const pnlValue = (Math.random() * 200 - 100).toFixed(2); // Generating between -100 and 100
  return parseFloat(pnlValue);
};

const getRandomQty = () => {
  // Generate a random LTP value logic here
  return Math.floor((Math.random() * 100).toFixed(2));
};

const getRandomAvgPrice = () => {
  // Generate a random LTP value logic here
  return (Math.random() * 100).toFixed(2);
};

const getRandomDateTime = () => {
  // Generate a random date and time logic here
  const now = new Date();
  const randomDate = new Date(now.getTime() - Math.random() * 86400000); // Up to 24 hours ago
  const formattedDate = randomDate.toISOString().slice(0, 19).replace("T", " ");
  return formattedDate;
};

const getRandomStatus = () => {
  const statuses = ["Buy", "Sell"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Encoding", "none");

  // Send fake streaming data at regular intervals
  const interval = setInterval(() => {
    const data = {
      ICICI: {
        name: "ICICI",
        token: getRandomToken(),
        symbol: null,
        entryTime: getRandomDateTime(),
        exitTime: getRandomDateTime(),
        tickerTime: null,
        exchage: null,
        transaction: null,
        signal: null,
        ltp: getRandomLTP(),
        pnl: getRandomPNL(),
        avgPrice: getRandomAvgPrice(),
        realised: 0,
        unRealised: 0,
        netQty: getRandomQty(),
        status: getRandomStatus(),
        posInfo: null,
        tradingStopped: false,
      },
      TECHM: {
        name: "TECHM",
        token: getRandomToken(),
        symbol: null,
        entryTime: getRandomDateTime(),
        exitTime: getRandomDateTime(),
        tickerTime: null,
        exchage: null,
        transaction: null,
        signal: null,
        ltp: getRandomLTP(),
        pnl: getRandomPNL(),
        avgPrice: getRandomAvgPrice(),
        realised: 0,
        unRealised: 0,
        netQty: getRandomQty(),
        status: getRandomStatus(),
        posInfo: null,
        tradingStopped: false,
      },
      INFY: {
        name: "INFY",
        token: getRandomToken(),
        symbol: null,
        entryTime: getRandomDateTime(),
        exitTime: getRandomDateTime(),
        tickerTime: null,
        exchage: null,
        transaction: null,
        signal: null,
        ltp: getRandomLTP(),
        pnl: getRandomPNL(),
        avgPrice: getRandomAvgPrice(),
        realised: 0,
        unRealised: 0,
        netQty: getRandomQty(),
        status: getRandomStatus(),
        posInfo: null,
        tradingStopped: false,
      },
      HCL: {
        name: "HCL",
        token: getRandomToken(),
        symbol: null,
        entryTime: getRandomDateTime(),
        exitTime: getRandomDateTime(),
        tickerTime: null,
        exchage: null,
        transaction: null,
        signal: null,
        ltp: getRandomLTP(),
        pnl: getRandomPNL(),
        avgPrice: getRandomAvgPrice(),
        realised: 0,
        unRealised: 0,
        netQty: getRandomQty(),
        status: getRandomStatus(),
        posInfo: null,
        tradingStopped: false,
      },
    };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);

  // Clean up the interval when the client disconnects
  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
}
