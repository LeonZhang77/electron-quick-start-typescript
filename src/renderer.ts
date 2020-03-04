// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// import { app, BrowserWindow, remote} from "electron.remote";
// import * as path from "path";

const path = require('path');
const {BrowserWindow} = require('electron').remote;

// import { remote, BrowserWindow } from "electron";
// import * as path from "path";

const newWindowBtn = document.getElementById('login-window');

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '/login.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})