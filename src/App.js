import React, {Component} from 'react';
import './App.css';
import FavoriteMovies from "./FavoriteMovies";

const users = {
    1: {
        id: 1,
        name: 'Jane Cruz',
        userName: 'coder',
    },
    2: {
        id: 2,
        name: 'Clark',
        userName: 'wat?',
    },
    3: {
        id: 3,
        name: 'Caren',
        userName: 'CarN',
    },
    4: {
        id: 4,
        name: 'John',
        userName: 'Jh',
    },
};

const profiles = [
    {
        id: 1,
        userID: '4',
        favoriteMovieID: '4',
    },
    {
        id: 2,
        userID: '3',
        favoriteMovieID: '3',
    },
    {
        id: 3,
        userID: '2',
        favoriteMovieID: '2',
    },
    {
        id: 4,
        userID: '1',
        favoriteMovieID: '1',
    },
];

const movies = {
    1: {
        id: 1,
        name: 'Planet Earth 1',
    },
    2: {
        id: 2,
        name: 'Selma',
    },
    3: {
        id: 3,
        name: 'Million Dollar Baby',
    },
    4: {
        id: 4,
        name: 'Forrest Gump',
    },
};

class App extends Component {
    render() {
        return (
            <div className='App-header'>
                    <FavoriteMovies movies={movies} profiles={profiles} users={users}/>
            </div>
        );
    }
}

export default App;
