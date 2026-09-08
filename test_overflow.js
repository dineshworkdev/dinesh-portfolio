const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=375,812',
  '--user-data-dir=C:\\Users\\balmu\\AppData\\Local\\Temp\\cdp_test',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9222/json');
    const tabs = await res.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    console.log('Target WebSocket:', wsUrl);
    
    // We can use standard WebSocket in Node 22+
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const overflowElements = [];
              document.querySelectorAll('*').forEach(el => {
                if (el.offsetWidth > window.innerWidth) {
                  overflowElements.push({
                    tag: el.tagName,
                    cls: el.className,
                    id: el.id,
                    width: el.offsetWidth,
                    window: window.innerWidth
                  });
                }
              });
              return JSON.stringify(overflowElements.slice(0, 10));
            })()
          `,
          returnByValue: true
        }
      }));
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 1) {
        console.log('OVERFLOW ELEMENTS:', data.result.result.value);
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
