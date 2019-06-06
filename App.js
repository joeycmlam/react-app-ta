import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTabs from './SimpleTabs';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SearchInput from "./SearchInput";
import ContainedButtons from './buttonMenu';
import filterImages from './searchImages';
import ProductListResult from "./ProductListResult";
import ImageIconResult from "./ImageListResults";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterImages: filterImages("", 20)
        }
    }

    handleSearchChange = event => {
        this.setState({
            filterImages: filterImages(event.target.value, 20)
        });
    };

    getAllInputs() {
        fetch('http://127.0.0.1:80/get_concepts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <SimpleTabs/>
                <SearchInput textChange={this.handleSearchChange} />
                <ContainedButtons/>

                {/*<ProductListResult imageData={this.state.filterImages}/>*/}
            </div>
        );
    }
}

export default App;
