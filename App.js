import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from './PrimarySearchAppBar'
import TextMobileStepper from './TextMobileStepper';
import IconLabelButtons from './IconLabelButtons';
import SimpleTabs from './SimpleTabs';

class App extends Component {
  render() {
    return (

    <React.Fragment>
        <PrimarySearchAppBar />
        <SimpleTabs />
        <IconLabelButtons />
        <TextMobileStepper />
    </React.Fragment>
    );
  }
}

export default App;
