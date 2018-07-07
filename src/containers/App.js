import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SeachBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import {setSearchField} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {  
    return {
        searchField: state.searchField,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
    }
}

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            robots: [],
        }

    }

    render() {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;

        const filteredRobots = robots.filter(
            robot =>  
                robot.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (!robots.length) ?
                <h1>Loading</h1>
            : (
                <div className = 'tc'>
                    <h1>Robo Friends</h1>
                    <SeachBox searchChange = {onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then( response => response.json() )
                .then( robot => this.setState({robots: robot})
        )    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);