const { contextBridge } = require("electron");
const WebSocket = require("ws");

let ws;

// Expose a safe API to React
contextBridge.exposeInMainWorld("api", {
  connect: (url) => {
    ws = new WebSocket(url);

    ws.on("open", () => {
      console.log("Connected to Python WebSocket");
    });

    ws.on("message", (data) => {
      window.dispatchEvent(new CustomEvent("pythonMessage", { detail: data }));
    });
  },
  sendCommand: (command) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(command));
    }
  },
});