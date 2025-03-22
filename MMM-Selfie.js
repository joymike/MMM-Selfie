Module.register("MMM-Selfie", {
    defaults: {
        width: 640,
        height: 480,
        updateInterval: 1000, // Update every second
        deviceId: null, // Will be set to default camera if not specified
    },

    start: function() {
        console.log("MMM-Selfie: Starting module");
        this.sendSocketNotification("CONFIG", this.config);
        this.videoStream = null;
    },

    getDom: function() {
        console.log("MMM-Selfie: Creating DOM");
        const wrapper = document.createElement("div");
        wrapper.className = "MMM-Selfie";
        
        const video = document.createElement("video");
        video.id = "selfie-video";
        video.autoplay = true;
        video.playsInline = true;
        video.width = this.config.width;
        video.height = this.config.height;
        video.style.display = "block"; // Ensure video is visible
        
        wrapper.appendChild(video);
        return wrapper;
    },

    socketNotificationReceived: function(notification, payload) {
        console.log("MMM-Selfie: Received socket notification:", notification);
        if (notification === "CONFIG_RECEIVED") {
            console.log("MMM-Selfie: Config received, initializing camera");
            this.initializeCamera();
        }
    },

    initializeCamera: async function() {
        console.log("MMM-Selfie: Initializing camera");
        try {
            const constraints = {
                video: {
                    width: { ideal: this.config.width },
                    height: { ideal: this.config.height },
                    deviceId: this.config.deviceId ? { exact: this.config.deviceId } : undefined
                }
            };

            console.log("MMM-Selfie: Requesting camera access");
            this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log("MMM-Selfie: Camera access granted");
            
            const video = document.getElementById("selfie-video");
            if (video) {
                console.log("MMM-Selfie: Setting video source");
                video.srcObject = this.videoStream;
            } else {
                console.error("MMM-Selfie: Video element not found");
            }
        } catch (error) {
            console.error("MMM-Selfie: Error accessing camera:", error);
        }
    },

    stop: function() {
        console.log("MMM-Selfie: Stopping module");
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(track => track.stop());
        }
    }
}); 