const {app, BrowserWindow, Menu} = require('electron')
var userData = app.getPath('userData');
var Datastore = require('nedb')
var userDataBase = new Datastore({ filename: userData+'database/user.db', autoload: true })

function initializeDataBase() {
    if (!hasEntry()) {
        console.log('Database is empty')
        addUser()
    }
}

function hasEntry() {
    userDataBase.count({}, function (error, count) {
        if (error != null) {
            //TODO Show error or retry 
            console.log('error:', error)
        }
        console.log('count: ', count)
        return count > 0
      });
}

function addUser() {
    var user = {    login: "doctor",
                    password: "Azerty123"
                }

    userDataBase.insert(user, function (error, newUser) {   
        if (error != null) {
            //TODO Show error or retry 
            console.log('error:', error)
        }
        console.log('Saved user:', newUser.login)
    });
}

module.exports = initializeDataBase()