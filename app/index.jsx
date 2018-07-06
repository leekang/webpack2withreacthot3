import React from 'react';
import { render } from 'react-dom';
import { browserHistory,hashHistory } from 'react-router';

import { AppContainer } from 'react-hot-loader';
import Routes from './app';

//这个地方是热更新
const renderCom = () => {
  let Router = require('react-router').Router;
  render(
    <AppContainer warnings={false}>
        <Router history={browserHistory} routes={Routes}/>
    </AppContainer>,
    document.getElementById('box')
  );
}

renderCom();

if (module.hot) {
  module.hot.accept(
      './app',() => {
           const nextUpload = require('./app').default; // eslint-disable-line global-require
           renderCom(nextUpload);
      }
  )
}