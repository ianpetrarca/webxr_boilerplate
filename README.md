# WebVR Boilerplate

WebVR Boilerplate is a toolkit for WebVR creators to develop, build and deploy static WebVR experiences to the web. WebVR Boilerplate comes with a hot-reload webserver, the latest builds of [Aframe](https://github.com/aframevr/aframe/), Aframe's best community components and a Webpack build pipeline that packages your content for Firebase Hosting. Some other features are:

- Cross compatibility across HTC Vive, Oculus Rift/Go, Gear VR, iOS and Android devices. (Tested 6.14.18)
- Spatial Audio, Shadows, Controllers, Teleport, Physics and Environment code examples
- Local development server that can be viewed on external devices in realtime (helpful for debugging on iOS/Android)
- Dependencies loaded through Webpack modules

___

<img align="center" width="100%" height="100%" src="https://user-images.githubusercontent.com/1003196/41374523-5d92c64c-6f21-11e8-8d3b-42ab01c8370d.PNG">

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
    

## Hot-Reload Development Server 

WebVR-Boilerplate uses Webpack-Dev-Server to host a hot-reloading http server. This is specified in _webpack.config.js_:

    devServer: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
    
To spin up a localhost site, run the following code then point a WebVR friendly browser to http://localhost:8080/

    npm run dev

To view realtime updates of the Webpack compiling process go to http://localhost:8080/webpack-dev-server/.
  
 **WebVR-Boilerplate was designed for Single-Page-Applications** and does not handle multiple html files without reconfiguring the _webpack.config.prod.js_ and _webpack.config.dev.js_ files.
 
 ## Building 
 
 To build and optimze your HTML/JS/CSS run:
     
     npm run build
 
 This will build your ./source folder into the ./dist directory with the specifications made in the _webpack.config.prod.js_ file.

## Deploying

WebVR-Boilerplate uses Firebase for quick and easy static-asset hosting. If you haven't already, install Firebase by running:

    npm install -g firebase-tools
    
After installing Firebase, run _init_ and setup a hosting connection:

    firebase init 
    
The _firebase.json_ file tells Firebase Hosting to use the _./dist_ directory. Find out more about Firebase Hosting [Here](https://firebase.google.com/docs/hosting/quickstart)

Once Firebase is installed and initialized, run the following code to build and deploy your code:

    npm run deploy

 
 
 
 
