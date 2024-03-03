# WebSocket Framework

WebSocket Framework is a lightweight JavaScript library for creating WebSocket servers in Node.js applications.

## Installation

You can install the WebSocket Framework via npm:

```bash
npm install websocket-framework
```

## Usage

```javascript
const WebSocketFramework = require('websocket-framework');

// Initialize WebSocket server options
const options = { port: 8080 };

// Create a new WebSocketFramework instance
const wsf = new WebSocketFramework(options);

// Start the WebSocket server
wsf.start();
```

### Broadcasting Messages

You can broadcast messages to all connected clients using the `broadcast` method:

```javascript
const message = 'Hello, world!';
wsf.broadcast(message);
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
