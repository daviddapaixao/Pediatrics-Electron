# It's just a example of a basic application 
## Pediatrics-App
Pediatrics desktop application 

### Instructions installation for Electron

##### Create package.json 
    `npm init`

##### Create new folders
    `npm install electron --save-dev --save-exact`

##### Check Electon version 
    `electron --version`

##### Run app 
    `electron ./main.js`


##### Main file 
**Main file is defined in package.json**, This main file creates application windows which contain rendered web pages and interaction with the native GUI. Just starting the main process does not give the users of your application any application window. These are created by the main process in the main file by using the BrowserWindow module. Each browser window then runs its own renderer process. The renderer process takes an HTML file which references the usual CSS files, JavaScript files, images, etc. and renders it in the window.

##### Difference between Main and Renderer processes
The main process creates web pages by creating the BrowserWindow instances. Each BrowserWindow instance runs the web page in its own renderer process. When a BrowserWindow instance is destroyed, the corresponding renderer process is also terminated.

The main process manages all web pages and their corresponding renderer processes. Each renderer process is isolated and only cares about the web page running in it.


# Instructions to build release application

##### Add this in `main.js` in `script`
    `"scripts": {
    "start": "electron .",
    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
    "package-win": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"CryptoApp\"",    
    "package-linux": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"   
    }`
    **Don't forget to create icon folder and add icon images**

##### Run this to create build
    `npm run package-win (or package-mac, package-linux)`

# Looks for some  troubles 

##### electron npm ERR! missing script: start
    `"scripts": {
    "start": "electron ."
    },`
