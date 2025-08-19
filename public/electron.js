const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let pyProc;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,   // ✅ allow ipcRenderer in React
      contextIsolation: false, // no preload needed
    }
  });

  mainWindow.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : path.join(__dirname, '../build/index.html')
  );

  // Spawn Python
  pyProc = spawn('python', [path.join(__dirname, '../src/components/backend.py')]);

  pyProc.stdout.on('data', (data) => {
    console.log(`PYTHON: ${data}`);
    // forward to React
    mainWindow.webContents.send('python-response', data.toString());
  });

  pyProc.stderr.on('data', (data) => console.error(`PYTHON ERROR: ${data}`));
  pyProc.on('close', (code) => console.log(`Python exited with code ${code}`));

  // Handle messages from React -> Python
  ipcMain.on('run-python', (event, command) => {
    console.log("Sending to Python:", command);
    pyProc.stdin.write(command + "\n");
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (pyProc) pyProc.kill();
  if (process.platform !== 'darwin') app.quit();
});
