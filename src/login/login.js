const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const loginBtn = document.getElementById('loginBtn')
const remote = electron.remote

loginBtn.addEventListener('click', function (event) {
    checkAuthentification(showHome)
})

function checkAuthentification(callback) {
    let loginInput = document.getElementById('loginInput')
    let passwordInput = document.getElementById('passwordInput')
    let rememberCheckbox = document.getElementById('rememberCheckbox')

    if (!checkFieldsAreValids(loginInput, passwordInput)) {
        return
    }

    if (rememberCheckbox.checked) {
        //TODO add auto login 
    }

    //TODO change true with login check
    if (true) {
        callback()
    } else {
        //TODO show login error
    }
}

function showHome() {
    const modalPath = path.join('file://', __dirname, '../home/home.html')
    let win = new BrowserWindow({ width: 600, height: 800 })
    
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()

    closeLogin()
}

function closeLogin() {
    var loginWindow = remote.getCurrentWindow();
    loginWindow.close();
}

function checkFieldsAreValids(loginInput, passwordInput) {

    if (isEmpty(loginInput.value)) {
        loginInput.style.borderColor = "#D8000C"
    } else {
        loginInput.style = "text"
    } 
    
    if (isEmpty(passwordInput.value)) {
        passwordInput.style.borderColor = "#D8000C"
    } else {
        passwordInput.style = "text"
    }

    return !isEmpty(passwordInput.value) && !isEmpty(loginInput.value)
}

function isEmpty(str){
    return !str.replace(/^\s+/g, '').length
}