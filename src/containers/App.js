import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SeachBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            robots: [],
            searchfield: ''
        }

    }

    onSearchChange  = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(
            robot =>  
                robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );

        return (!robots.length) ?
                <h1>Loading</h1>
            : (
                <div className = 'tc'>
                    <h1>Robo Friends</h1>
                    <SeachBox searchChange = {this.onSearchChange} />
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

export default App;