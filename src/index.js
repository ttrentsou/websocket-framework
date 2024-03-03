// websocket-framework.js

class WebSocketFramework {
    constructor(options) {
      this.options = options;
      this.clients = [];
    }
  
    start() {
      const WebSocketServer = require('ws').Server;
      this.wss = new WebSocketServer(this.options);
  
      this.wss.on('connection', (ws) => {
        console.log('Client connected');
        this.clients.push(ws);
  
        ws.on('message', (message) => {
          console.log('Received message:', message);
          this.broadcast(message, ws);
        });
  
        ws.on('close', () => {
          console.log('Client disconnected');
          this.clients = this.clients.filter(client => client !== ws);
        });
      });
  
      console.log('WebSocket server started');
    }
  
    broadcast(message, sender) {
      this.clients.forEach(client => {
        if (client !== sender && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  }
  
  module.exports = WebSocketFramework;
  