import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from './PrimarySearchAppBar'
import TextMobileStepper from './TextMobileStepper';
import IconLabelButtons from './IconLabelButtons';
import SimpleTabs from './SimpleTabs';
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Dashboard from './Dashboard';
import SearchInput from "./SearchInput";


class App extends Component {

    handleSelect(eventKey) {
        alert(`
        // selected ${eventKey}`);
    }


    render() {
        return (
            <SideNav>
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="model">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Models
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

        );
    }
}

export default App;
