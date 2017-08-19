//Load Site Assets
if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
  require('./styles.css');
}

//Create Box Component and Place in Scene
require('./box.js')