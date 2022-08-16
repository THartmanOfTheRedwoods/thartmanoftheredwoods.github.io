// Author: TREVOR

// NOTE ABOUT DATES: Store as TEXT and do tests as indicated below:
// Wrap your comparison in (parenthesis) so that sqlite treats it as a formula and does the math conversions for you... like this:
// tx.executeSql("DELETE FROM mytable WHERE (msg_when <= datetime('now', '-4 days'))");,

var db = null;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
    },

    initDb: function() {
      // Connect to data.
      // Create structure if not already created.
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // "pause", "resume", etc.
    onDeviceReady: function() {
        // Initialize our DB
        this.initDb();
    }
};

app.initialize();
