import React from 'react';
import { Provider } from "react-redux";
import Layout from './Layout.jsx';
import store from '../../store/rootStore';


const App = ()=>(
  <Provider store={store}>
    <Layout/>
  </Provider>
);

export default App;
