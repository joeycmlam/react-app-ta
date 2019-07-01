import React, {Component} from 'react';
import './App.css';
import SimpleTabs from './SimpleTabs';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SearchInput from "./SearchInput";
import ContainedButtons from './buttonMenu';
import filterImages from './searchImages';
import ConceptListResult from './ConceptListResult';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterConcepts: [],
            concepts: []
        }
    }

    getConcepts() {
        fetch('http://ec2-34-221-74-184.us-west-2.compute.amazonaws.com/get_concepts')
            .then(res => res.json())
            .then((data) => {
                this.setState({concepts: data})
                this.setState({
                    filterConcepts: filterImages(data, "")})
            })
            .catch(console.log)
    }


    handleSearchChange = event => {
        if (this.state.concepts.length <= 0) {
            this.getConcepts()
        } else {
            this.setState(
                {filterConcepts: filterImages(this.state.concepts, event.target.value)}
                )
            console.log('numeber of output:' + this.state.filterConcepts.length)
        }
    };


    render() {

        if (this.state.concepts.length <= 0) {
            this.getConcepts();
        }

        return (
            <div>
                <SimpleTabs/>
                <SearchInput textChange={this.handleSearchChange}/>
                <ContainedButtons/>
                <p>Total number of filter concepts: {this.state.filterConcepts.length} out of {this.state.concepts.length}  </p>
                <ConceptListResult imageData={this.state.filterConcepts}/>

                {/*<ConceptListResult imageData={this.state.concepts}/>*/}
            </div>
        );
    }
}

export default App;
