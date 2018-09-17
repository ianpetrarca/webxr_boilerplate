# WebVR Boilerplate

<img align="center" width="100%" height="100%" src="https://user-images.githubusercontent.com/1003196/41374523-5d92c64c-6f21-11e8-8d3b-42ab01c8370d.PNG">

WebVR Boilerplate is a toolkit for WebVR creators to develop, build and deploy static WebVR experiences to the web. WebVR Boilerplate comes with a hot-reload webserver, the latest builds of [Aframe](https://github.com/aframevr/aframe/), Aframe's best community components and a Webpack build pipeline that packages your content for Firebase Hosting. Some other features are:

- Cross compatibility across HTC Vive, Oculus Rift/Go, Gear VR, iOS and Android devices. (Tested 6.14.18)
- Spatial Audio, Shadows, Controllers, Teleport, Physics and Environment code examples
- Local development server that can be viewed on external devices in realtime (helpful for debugging on iOS/Android)
- All code is integrated into the Aframe Entity and Component system for best performance 
- Dependencies are loaded through Webpack modules and NPM

___
## Installation

    git clone https://github.com/ianpetrarca/webvr_boilerplate.git
    cd webvr_boilerplate
    npm install

## File Structure + Descriptions

    ├── build                  # Webpack Production build output 
    ├── src                    # Source files
        ├── components         # Folder for Aframe components (JS)
        └── templates          # Folder for resuseable Aframe entities (HTML)
    ├── .firebaserc            # Connects your project to Firebase Hosting 
    ├── firebase.json          # Specifies which directory to upload to Firebase
    ├── package.json           # NPM 
    ├── webpack.config.js      # Webpack Config file for dev server/production builds
    
## Development Stage

To spin up a localhost site, run the following command then point a WebVR friendly browser to http://localhost:8080/

    npm run dev

To view the dev server on an external device find out your local IP address (Type 'ipconfig' in any terminal) and view the 8080 port. This may look like:

    192.168.1.165:8080

 **WebVR-Boilerplate was designed for Single-Page-Applications** and does not handle multiple html files without reconfiguring the _webpack.config.js_ HTMLWebpack plugin.
 
 ## Building 
 
 To build and optimze your HTML/JS run:
     
     npm run build
 
 This will Webpack build your ./src folder into the ./build directory with the specifications made in the _webpack.config.js_ file.

## Deploying

WebVR-Boilerplate uses Firebase for quick and easy static-asset hosting. If you haven't already, install Firebase by running:

    npm install -g firebase-tools
    
After installing Firebase, run _init_ and setup a hosting connection:

    firebase init 
    
The _firebase.json_ file tells Firebase Hosting to use the _./build directory. Find out more about Firebase Hosting [Here](https://firebase.google.com/docs/hosting/quickstart)

Once Firebase is installed and initialized, run the following code to build and deploy your code:

    npm run deploy
    
## Credits

Aframe has an amazing community of developers, here are the people/projects that are being used in WebVR Boilerplate:

- [Aframe](https://github.com/aframevr/aframe)
- [Aframe Environment] (https://github.com/feiss/aframe-environment-component) by [Diego Goberna](http://feiss.be/) 
- [Aframe Extras](https://github.com/donmccurdy/aframe-extras) by [Don McCurdy](https://www.donmccurdy.com/)
- [Aframe Physics](https://github.com/donmccurdy/aframe-physics-system) by [Don McCurdy](https://www.donmccurdy.com/)
- [Kframe](https://github.com/ngokevin/kframe/) by [Kevin Ngo](http://ngokevin.com/)
- [Aframe Teleport Component](https://github.com/fernandojsg/aframe-teleport-controls) by [Fernando Serrano](http://fernandojsg.com/blog/)
- [Aframe UI Widgets](https://github.com/caseyyee/aframe-ui-widgets) by [Casey Yee](https://twitter.com/whoyee?lang=en)
- [Super-Hands](https://github.com/wmurphyrd/aframe-super-hands-component) by [Will Murphy](https://social.coop/@datatitian) 
