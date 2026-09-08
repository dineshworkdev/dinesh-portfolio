const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9224',
  '--user-data-dir=C:\\Users\\balmu\\AppData\\Local\\Temp\\cdp_test3',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9224/json');
    const tabs = await res.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    
    const ws = new WebSocket(wsUrl);
    let step = 0;

    ws.onopen = () => {
      // 1. Set mobile device metrics
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: {
          width: 375,
          height: 812,
          deviceScaleFactor: 2,
          mobile: true
        }
      }));
    };
    
    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 1) {
        // Measure overflow
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              JSON.stringify({
                innerWidth: window.innerWidth,
                scrollWidth: document.documentElement.scrollWidth,
                hasOverflow: document.documentElement.scrollWidth > window.innerWidth
              })
            `,
            returnByValue: true
          }
        }));
      } else if (data.id === 2) {
        console.log('Mobile Check:', data.result.result.value);
        // Capture screenshot
        ws.send(JSON.stringify({
          id: 3,
          method: 'Page.captureScreenshot',
          params: {
            format: 'png',
            captureBeyondViewport: false
          }
        }));
      } else if (data.id === 3) {
        const buffer = Buffer.from(data.result.data, 'base64');
        fs.writeFileSync(
          'C:\\Users\\balmu\\.gemini\\antigravity-ide\\brain\\9d8fd0a9-3ae6-4157-af8c-29c4d44d3248\\mobile_device_screenshot.png',
          buffer
        );
        console.log('Saved mobile screenshot successfully!');
        chrome.kill();
        process.exit(0);
      }
    };
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 2500);
