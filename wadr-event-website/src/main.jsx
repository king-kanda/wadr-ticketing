import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import store from './store.js';
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/scrollToTop.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter >
      <ScrollToTop/>
      <App />
    </BrowserRouter> 
  </Provider>
 
)
