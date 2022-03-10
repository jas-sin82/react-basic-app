import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


// we can define our react background in variable 
// const h1Element = React.createElement('h1' ,null ,'Hello World !');

// using these variable as props
const appTitle = 'My First React Application';
const appNumber = 10;

ReactDOM.render(
  <React.StrictMode>
    {/*<div className="container">
      <h1>Hello World!</h1>
    </div> */}
    < App appTitle={appTitle} appNumber={appNumber} />

    {/* background react to create elements , prop , content */}

    {/* React.createElement( 'div',{className: 'container'},h1Element)*/}
    {/*React.createElement('h1' ,null ,'Hello World !'))*/}

  </React.StrictMode>,
  document.getElementById('root')
)

// if you want your application work offline and load faster youcan change
// unregister() to register().

serviceWorker.unregister();
