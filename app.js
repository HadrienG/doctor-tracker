const { app, BrowserWindow, Tray, nativeImage } = require("electron");
const path = require("path");

let url;
let assets;
let icon;
if (process.env.NODE_ENV === "DEV") {
    url = "http://localhost:8080/";
    assets = path.join(__dirname, "src/assets/");
    icon = path.join(assets, "icon.png");
} else {
    url = `file://${path.join(__dirname, "dist/index.html")}`;
    // url = `file://${process.cwd()}/dist/index.html`;
    assets = path.join(__dirname, "src/assets/");
    icon = nativeImage.createFromPath(path.join(assets, "icon.png"));
}
console.log(url);

let tray = undefined;
let window = undefined;

// Don't show the app in the doc
app.dock.hide();

// Quit the app when the window is closed
app.on("window-all-closed", () => {
    app.quit();
});

app.on("ready", () => {
    createTray();
    createWindow();
});

const createTray = () => {
    tray = new Tray(icon);

    tray.on("right-click", toggleWindow);
    tray.on("double-click", toggleWindow);
    tray.on("click", function(event) {
        toggleWindow();

        // Show devtools when command clicked
        if (window.isVisible() && process.defaultApp && event.metaKey) {
            window.openDevTools({ mode: "detach" });
        }
    });
};

const createWindow = () => {
    window = new BrowserWindow({
        width: 200,
        height: 120,
        show: false,
        frame: false,
        fullscreenable: false,
        resizable: false,
        transparent: false,
        webPreferences: {
            // Prevents renderer process code from not running when window is
            // hidden
            backgroundThrottling: false
        }
    });
    window.loadURL(url);

    // Hide the window when it loses focus
    window.on("blur", () => {
        if (!window.webContents.isDevToolsOpened()) {
            window.hide();
        }
    });
    window.setVisibleOnAllWorkspaces(true);
};

const toggleWindow = () => {
    if (window.isVisible()) {
        window.hide();
    } else {
        showWindow();
    }
};

const showWindow = () => {
    const position = getWindowPosition();
    window.setPosition(position.x, position.y, false);
    window.show();
    window.focus();
};

const getWindowPosition = () => {
    const windowBounds = window.getBounds();
    const trayBounds = tray.getBounds();

    // Center window horizontally below the tray icon
    const x = Math.round(
        trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
    );

    // Position window 4 pixels vertically below the tray icon
    const y = Math.round(trayBounds.y + trayBounds.height + 4);

    return { x: x, y: y };
};
