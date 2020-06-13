import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello ffm</h1>
                <p className={'contact'}>fuming.ffm@alibaba-inc.com</p>
            </header>
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                src="http://cdn.fengfuming.com/coverr-aerial-view-of-rocky-mountains-1585320758193.mp4"/>
        </div>
    );
}

export default App;
