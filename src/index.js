if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
  require('./styles.css');
}

//Load Site Assets
require('./load.js')
