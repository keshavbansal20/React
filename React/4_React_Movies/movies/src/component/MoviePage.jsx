import React, { Component } from 'react'
import { getMovies } from '../temp/MovieService'

export default class MoviePage extends Component {
    state = {
        movie: getMovies()
    }
    deleteEntry = (id) => {
        let filteredMovies = 
        this.state.movies.filter((movieObj)==>{
            return movieObj._id != id;
        })
        this.setState({
            movies: filteredMovies
        })
    }
    render() {
        // console.log(this.state.movie);
        let {movies} = this.state;
        return (
            <div className = "row">
                <div className ="col-3">
                    hello
                </div>
                <div className="col-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                             </tr>
                        </thead>
                        <tbody>
                            {movies.map((movieObj) => {
                                return (
                                    <tr scope = "row" key={movieObj._id}>
                                    <td>{movieObj.title}</td>
                                    <td>{movieObj.genre.name}</td>
                                    <td>{movieObj.numberInStock}</td>
                                    <td>{movieObj.dailyRentalRate}</td>
                                    <td><button type="button" onChange ={ () => {
                                        this.deleteEntry(movieObj._id)
                                    }}>Button</td></button></td>
                                    </tr>
                                    
                            })
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
