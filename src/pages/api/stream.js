export default function handler(req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Encoding", "none");

  // Send fake streaming data at regular intervals
  const interval = setInterval(() => {
    const data = { value: Math.random() };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);

  // Clean up the interval when the client disconnects
  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
}
