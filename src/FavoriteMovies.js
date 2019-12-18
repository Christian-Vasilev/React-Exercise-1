import React, { Component } from 'react'

class FavoriteMovies extends Component {
    render() {
        return this.props.profiles.map((profile) => {
            const user = this.props.users[profile.userID].name;
            const movie = this.props.movies[profile.favoriteMovieID].name;

            return (
                <p key={profile.id}><b>{user}</b> favorite movie is <b>{movie}</b></p>
            )
        });
    }
}

export default FavoriteMovies;