import React, { Component } from 'react'
import { getMovies } from '../temp/MovieService'

const sortAsc = 1;
const sortDesc = -1;

export default class MoviePage extends Component {
    state = {
        movie: getMovies(),
        currSearchText: "",
        limit:4 , 
        currentPage:1

    }
    //id denge phir filter lga denge jisme id ayengi aur jo match krjaegi usse chodkr baki asb return hojayegi
    deleteEntry = (id) => {
        let filteredMovies = 
        this.state.movie.filter((movieObj) =>{
            return movieObj._id != id;
        })
        this.setState({
            movie: filteredMovies
        })
    }

    setCurrentText = (e) => {
        let task = e.target.value;
        this.setState({
            currSearchText:task
        })
    }
    sortByRatings = (e) =>{
        let className = e.target.className;
        let sortedMovies;
        let {movie} = this.state;
        if(className=="fas fa-sort-up") {
            sortedMovies = movie.sort((movieObjA , movieObjB) => {
                return movieObjA.dailyRentalRate-movieObjB.dailyRentalRate;
            });
        } else {
            sortedMovies = movie.sort((movieObjA , movieObjB) =>{
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
            })
        }
        
        this.setState({
            movie: sortedMovies
        })
    }

    sortByStock = (e) => {
        let className = e.target.className;
        let sortedMovies;
        let {movie} = this.state;
        if(className=="fas fa-sort-up") {
            sortedMovies = movie.sort((movieObjA , movieObjB) => {
                return movieObjA.numberInStock -movieObjB.numberInStock;
            });
        } else {
            sortedMovies = movie.sort((movieObjA , movieObjB) =>{
                return movieObjB.numberInStock - movieObjA.numberInStock;
            })
        }
        this.setState({
            movie: sortedMovies
        })
    }

    changelimit = (e) => {
        let currLimit = e.target.value;
        this.setState({
            limit: currLimit
        })
    }
    render() {
        // console.log(this.state.movie);
        let {movie, currSearchText, limit, currentPage } = this.state;
        let filteredArr = movie.filter((movieObj) => {
            let title = movieObj.title.trim().toLowerCase();
            // console.log(title);
            return title.includes(currSearchText.toLowerCase());
        })
        if(currSearchText=""){
            filteredArr = this.state.movie;
        }

        let numberofPage = Math.ceil(filteredArr.length/limit);
        let pageNumberArr = [];
        for(let i = 0 ; i < numberofPage ; i++){
            pageNumberArr.push(i+1);
        }

        //pagination implement
        // let si = 
        console.log(currentPage);
        let si = (currentPage - 1) * limit;
        let eidx = si + limit;
        filteredArr = filteredArr.slice(si , eidx);
        
        return (
            <div className = "row">
                <div className ="col-3">
                    hello
                </div>
                <div className="col-9">
                    <input type = "search" value={currSearchText}
                        onChange={this.setCurrentText}/>
                    <input type="number" className="col-1"
                        placeholder="no of elements/page"
                        value={limit}
                        onChange={this.changelimit}
                    />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col"> Genre</th>
                                <th scope="col" >
                                    <i className = "fas fa-sort-up" onClick={this.sortByRatings}/>
                                    Rate
                                    <i className = "fas fa-sort-down" onClick={this.sortByRatings}/>
                                </th>
                                <th scope="col">
                                    <i className = "fas fa-sort-up" onClick={this.sortByStock}/>
                                        Stock
                                    <i className = "fas fa-sort-down" onClick={this.sortByStock}/>
                                </th>
                             </tr>
                        </thead>
                        
                        <tbody>
                            {filteredArr.map((movieObj) => {
                                return (
                                    <tr scope = "row" key={movieObj._id}>
                                    <td></td>
                                    <td>{movieObj.title}</td>
                                    <td>{movieObj.genre.name}</td>
                                    <td>{movieObj.dailyRentalRate}</td>
                                    <td>{movieObj.numberInStock}</td>
                                    <td><button type="button" className="btn btn-danger"
                                        onClick={() => {
                                            this.deleteEntry(movieObj._id);
                                        }}>Delete</button></td>
                                    </tr>)
                                    
                            })}
                        </tbody>
                    </table>
                    <nav aria-label="..." className="col-2">
                            <ul className="pagination ">
                                {
                                    pageNumberArr.map((pageNumber) => {
                                        return (
                                              <li className="page-item active" aria-current="page">
                                                <span className="page-link">{pageNumber}</span>
                                              </li>  
                                            )
                                    })
                                }
                            </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
