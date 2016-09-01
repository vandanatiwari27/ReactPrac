import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AppStateFul from './AppStateFul.jsx';
import AppStateFul2 from './AppStateFul2.jsx';
import ImmutableProps1 from './ImmutableProps1.jsx';
import DefaultProps1 from './DefaultProps1.jsx';
import StateProps1 from './StateProps1.jsx';

//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<AppStateFul />, document.getElementById('app'));
//ReactDOM.render(<AppStateFul2 />, document.getElementById('app'));
//ReactDOM.render(<ImmutableProps1 headerProp="header prop value" contentProp = "content prop value" />, document.getElementById('app'));
//ReactDOM.render(<DefaultProps1 />, document.getElementById('app'));
ReactDOM.render(<StateProps1 />, document.getElementById('app'));
