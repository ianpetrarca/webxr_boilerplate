# WebVR Boilerplate

WebVR Boilerplate is a toolkit for WebVR creators to develop, build and deploy static WebVR experiences to the web. WebVR Boilerplate comes with a hot-reload webserver, the latest builds of [Aframe](https://github.com/aframevr/aframe/) and [Aframe Extras](https://github.com/donmccurdy/aframe-extras/) and a Webpack build pipeline that packages your content for Firebase Hosting.

___

<img align="center" width="100%" height="100%" src="https://user-images.githubusercontent.com/1003196/29487874-39d7f72e-84ce-11e7-8e53-95c122a49f6e.png">

#### _WebVR_Boilerplate Scene (Physics, Shadows and Audio support out of the box!)_

___

## Installation

    git clone https://github.com/ianpetrarca/webvr_boilerplate.git
    cd webvr_boilerplate
    npm install

### File Structure + Descriptions
    ├── dist                   # Webpack Production build output 
    ├── src                    # Source material (unminifed)
    ├── .firebaserc            # Connects your project to Firebase Hosting 
    ├── firebase.json          # Specifies which directory to upload to Firebase
    ├── package.json           # NPM 
    ├── webpack.config.dev.js  # Creates hot-reload server (no optimization)
    └── webpack.config.prod.js # Optimizes and builds code to the ./dist folder
    
    ├── ...
    ├── src                     # Source Files
    │   ├── box.js              # Module for box component
    │   ├── index.html          # Front-End HTML + Aframe code
    |   ├── index.js            # Webpack entry point
    │   └── styles.css          # CSS
    └── ...

## Hot-Reload Development Server 

WebVR-Boilerplate uses Webpack-Dev-Server to host a hot-reloading http server of the _./dist_ directory. This is specified in _webpack.config.dev.js_:

    devServer: {
        contentBase: './dist',
        hot: true
     }
     
To spin up a development site, run the following code then point a WebVR friendly browser to http://localhost:8080/

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

 
 
 
 
