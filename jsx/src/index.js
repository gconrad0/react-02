// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () => {
    return <h1 style={{color: 'red'}}>Hello, World!</h1>;
};

// Take React component and display
ReactDOM.render( <App />, document.querySelector('#root'));