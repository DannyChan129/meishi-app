import React from 'react';
import {render} from 'react-dom';

//App负责选择哪一个页面
import './assets/index.less';
import App from "./containers/index";
import {Provider} from 'react-redux';
import {configureStore} from './store'
let store = configureStore({
    userInfo:{
        'city':'xxx'
    }
});//生成store
render(
    <Provider store={store}>
    <App/>
    </Provider>
    ,document.getElementById('root'));