# WebVR Boilerplate

WebVR Boilerplate is a starting point for WebVR creators to develop, build and deploy static WebVR experienecs to the web. WebVR Boilerplate comes with a hot-reload webserver, the latest builds of [Aframe](https://github.com/aframevr/aframe/) and [Aframe Extras](https://github.com/donmccurdy/aframe-extras/) and a Webpack build pipeline that packages your content for Firebase Hosting.

<img align="center" width="100%" height="100%" src="https://user-images.githubusercontent.com/1003196/29487874-39d7f72e-84ce-11e7-8e53-95c122a49f6e.png">

#### _Included WebVR Scene (Physics,Shadows and Audio support)_

## Installation

    git clone https://github.com/ianpetrarca/webvr_boilerplate.git
    cd webvr_boilerplate
    npm install

## Hot-Reload Development Server 

WebVR-Boilerplate uses Webpack-dev-server to host a hot-reloading http server of the _./dist_ directory. This is specified in _webpack.config.dev.js_:

    devServer: {
        contentBase: './dist',
        hot: true
     }
     
To spin up a development site run the following code then point a WebVR friendly browser to http://localhost:8080/

    npm run dev

To view realtime updates of the Webpack compiling process go to http://localhost:8080/webpack-dev-server/.
  
 **WebVR-Boilerplate was designed for Single-Page-Applications** and does not handle multiple html files without reconfiguring the _webpack.config.js_ files.
