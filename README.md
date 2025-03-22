# MMM-Selfie

A Magic Mirror module that displays real-time camera feed from your device's camera.

## Features

- Real-time camera feed display
- Configurable video dimensions
- Support for multiple cameras
- Responsive design with modern styling
- Low latency video streaming

## Installation

1. Navigate to your Magic Mirror's `modules` folder:
```bash
cd ~/MagicMirror/modules
```

2. Clone this repository:
```bash
git clone https://github.com/joymike/MMM-Selfie.git
```

3. Install the module:
```bash
cd MMM-Selfie
npm install
```

## Configuration

Add the following to the `modules` array in your `config.js` file:

```javascript
{
    module: "MMM-Selfie",
    position: "top_right", // Change this to your preferred position
    config: {
        width: 640,        // Video width in pixels
        height: 480,       // Video height in pixels
        updateInterval: 1000, // Update interval in milliseconds
        deviceId: null     // Set to specific camera ID if you want to use a specific camera
    }
}
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `width` | Width of the video feed in pixels | 640 |
| `height` | Height of the video feed in pixels | 480 |
| `updateInterval` | How often to update the video feed (in milliseconds) | 1000 |
| `deviceId` | Specific camera ID to use (null for default camera) | null |

## Usage

1. After installation, restart your Magic Mirror
2. The module will request camera permissions when first loaded
3. Grant permission to access your camera when prompted
4. The video feed will appear in your chosen position on the Magic Mirror

## Browser Support

This module uses the WebRTC API and requires a modern browser that supports:
- `getUserMedia` API
- WebRTC
- HTML5 Video

## Troubleshooting

1. If the camera doesn't show up:
   - Check if you've granted camera permissions
   - Verify that your camera is properly connected and working
   - Try refreshing the Magic Mirror page

2. If the video feed is not displaying:
   - Check the browser console for any error messages
   - Verify that your camera is not being used by another application
   - Try adjusting the width and height values in the config

## License

MIT License - See LICENSE file for details 