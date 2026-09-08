const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--window-size=375,812',
  '--user-data-dir=C:\\Users\\balmu\\AppData\\Local\\Temp\\cdp_test2',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9223/json');
    const tabs = await res.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            JSON.stringify({
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
              outerWidth: window.outerWidth,
              outerHeight: window.outerHeight,
              devicePixelRatio: window.devicePixelRatio,
              scrollWidth: document.documentElement.scrollWidth,
              clientWidth: document.documentElement.clientWidth
            })
          `,
          returnByValue: true
        }
      }));
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 1) {
        console.log('VIEWPORT METRICS:', data.result.result.value);
        chrome.kill();
        process.exit(0);
      }
    };
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);
