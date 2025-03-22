const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        console.log("MMM-Selfie: Starting node helper");
        this.config = null;
    },

    socketNotificationReceived: function(notification, payload) {
        console.log("MMM-Selfie: Node helper received notification:", notification);
        if (notification === "CONFIG") {
            console.log("MMM-Selfie: Node helper received config");
            this.config = payload;
            this.sendSocketNotification("CONFIG_RECEIVED", this.config);
            console.log("MMM-Selfie: Node helper sent CONFIG_RECEIVED");
        }
    }
}); 