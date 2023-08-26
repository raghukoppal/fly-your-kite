import React, { useEffect } from "react";

const FakeStream = () => {
  useEffect(() => {
    // Create an EventSource to listen for server-sent events
    const eventSource = new EventSource("/api/stream");

    // Listen for messages from the server
    eventSource.onopen = (event) => {
      console.log("kaka is inside");
      //   const data = event.data;
      // Update your UI with the received data
      //   console.log("Received data:", data);
    };

    eventSource.onmessage = (evt) => {
      console.log("event data", evt.data);
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
    <div>
      <h1>Fake Streaming Example</h1>
      {/* Render your UI elements here */}
    </div>
  );
};

export default FakeStream;
