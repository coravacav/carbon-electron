"use strict";

var createTitlebar = function createTitlebar() {
     const $ = require('jquery');
     const remote = require('electron').remote;

     $('body').prepend($('<div></div>', { id: "title-bar" }).html(`<header id="titlebar"> <div id="drag-region"> <div id="window-title"> <span>Carbon-Electron-Developer</span> </div> <div id="window-controls"> <div class="button" id="min-btn"> <span>&#xE921;</span> </div> <div class="button" id="max-btn"> <span>&#xE922;</span> </div> <div class="button" id="restore-btn"> <span>&#xE923;</span> </div> <div class="button" id="close-btn"> <span>&#xE8BB;</span> </div> </div> </div></header><style> @font-face { font-family: "Segoe MDL2 Assets"; src: url('./fonts/SegMDL2.ttf'); } #titlebar { display: block; position: fixed; height: 32px; width: 100%; background: #254053; color: #FFF; padding: 4px; } #titlebar #drag-region { width: 100%; height: 100%; -webkit-app-region: drag; display: grid; grid-template-columns: auto 138px; } #window-controls { display: grid; grid-template-columns: repeat(3, 46px); position: absolute; top: 0; right: 7px; height: 100%; font-size: 10px; -webkit-app-region: no-drag; } #window-controls * { font-family: "Segoe MDL2 Assets"; } #window-controls .button { grid-row: 1 / span 1; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; user-select: none; cursor: default; opacity: 0.8; } #window-controls #min-button { grid-column: 1; } #window-controls #max-button, #window-controls #restore-button { grid-column: 2; } #window-controls #close-button { grid-column: 3; } #window-controls .button:hover { background: rgba(255, 255, 255, 0.2); opacity: 1; } #window-controls #close-button:hover { background: #E81123; } #window-controls #restore-button { display: none; } #window-title { grid-column: 1; display: flex; align-items: center; font-size: 16px; margin-left: 8px; overflow-x: hidden; } #window-title span { overflow: hidden; text-overflow: ellipsis; line-height: 1.5; }</style>`))

     let window = remote.BrowserWindow.getFocusedWindow();

     $('#min-btn').click(event => {
          console.log("hello")
          window = remote.BrowserWindow.getFocusedWindow();
          window.minimize();
     });

     $('#max-btn').click(event => {
          console.log("alive")
          window = remote.BrowserWindow.getFocusedWindow();
          window.maximize();
          toggleMaxRestoreButtons();
     });

     $('#restore-btn').click(event => {
          window = remote.BrowserWindow.getFocusedWindow();
          window.unmaximize();
          toggleMaxRestoreButtons();
     });

     // Toggle maximise/restore buttons when maximisation/unmaximisation
     // occurs by means other than button clicks e.g. double-clicking
     // the title bar:
     toggleMaxRestoreButtons();
     window.on('maximize', toggleMaxRestoreButtons);
     window.on('unmaximize', toggleMaxRestoreButtons);

     $('#close-btn').click(event => {
          window = remote.BrowserWindow.getFocusedWindow();
          window.close();
     });

     function toggleMaxRestoreButtons() {
          window = remote.BrowserWindow.getFocusedWindow();
          if (window.isMaximized()) {
               $('#max-btn').css('display', 'none');
               $('#restore-btn').css('display', 'flex');
          } else {
               $('#max-btn').css('display', 'flex');
               $('#restore-btn').css('display', 'none');
          }
     }
}

var test = function test() {
     console.log("It works!")
}

createTitlebar();