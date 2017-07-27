import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/basic.css';
import './static/PingFang/PingFang Regular.css'
import App from './Layout/App';
import registerServiceWorker from './registerServiceWorker';

const init = (docs, win) => {
  var docEls = docs.documentElement,
  resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalcs = () => {

  //getBoundingClientRect()这个方法返回一个矩形对象

  window.rem = docEls.getBoundingClientRect().width/45;
  docEls.style.fontSize = window.rem + 'px';

  };
  recalcs();
  if (!docs.addEventListener) return;
  win.addEventListener(resizeEvts, recalcs, false);
}

init(document, window)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
