import React, { Component } from 'react'
import { getMovies } from '../temp/MovieService'
import List from "./List.jsx";
import Pagination from "./Pagination.jsx";
// import New from "./New.jsx";
import {Link} from "react-router-dom"

export default class MoviePage extends Component {
    state = {
      
        genres: [{id:1 , name: "All Genres"}],
        currSearchText: "",
        limit:4 , 
        currentPage:1 ,
        cGenre: "All Genres"

    }
    //id denge phir filter lga denge jisme id ayengi aur jo match krjaegi usse chodkr baki asb return hojayegi
    

    setCurrentText = (e) => {
        let task = e.target.value;
        console.log(this.state.currSearchText);
        this.setState({
            currSearchText:task
        })
    }
    sortByRatings = (e) =>{
        let className = e.target.className;
        let sortedMovies;
        // let {movie} = this.state;
        let {movie} = this.props;
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
        // let {movie} = this.state;
        let {movie} = this.props
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
    changeCurrentPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    groupBygenre = (name) => {
        this.setState({
            cGenre:name , 
            currSearchText:""
        })
    }

    async componentDidMount() {
        

        let resp = await fetch("https://react-backend101.herokuapp.com/genres");
        let jsonGenres = await resp.json();
        this.setState({
            genres:[...this.state.genres ,...jsonGenres.genres]
        });

    }
    
    render() {
        // console.log(this.state.movie);
        let { currSearchText, limit, currentPage , genres , cGenre } = this.state;
        let {movie , deleteEntry} = this.props;
        //genre
        let filteredArr = movie;
        if(cGenre!="All Genres"){
            filteredArr = filteredArr.filter((movieObj) => {
                return movieObj.genre.name == cGenre;
            })
        }
        if(currSearchText!=""){
            let filteredArr = movie.filter((movieObj) => {
                let title = movieObj.title.trim().toLowerCase();
                // console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }
        
        

        let numberofPage = Math.ceil(filteredArr.length/limit);
       
         // impliment
        // console.log(filteredArr);
        // si -> (pagenumber-1)*limit;
        // eidx = si+limit;
        // number of pages 
        // paginate 
        let si = (currentPage - 1) * limit;
        let eidx = si + limit;
        filteredArr = filteredArr.slice(si , eidx);
        

        return (
            <div className = "row">
                <div className ="col-3">
                    <List genres={genres} groupBygenre={this.groupBygenre}></List>
                </div>
                
                <div className="col-9">
                    <div>
                    <button className= "btn btn-primary">
                        <Link to="/new" className="text-light">New</Link>
                    </button>
                    </div>
                    <input type = "search" value={currSearchText}
                        placeholder="search movie"
                    onChange={this.setCurrentText}/>
                    <input type="number" className="col-1"
                        placeholder="no of elements/page"
                        value={limit}
                        onChange={this.changelimit}
                    />
                    {/* <input type="text" className="pageNumber"
                        placeholder="page number" /> */}
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
                                            deleteEntry(movieObj._id);
                                        }}>Delete</button></td>
                                    </tr>)
                                    
                            })}
                        </tbody>
                    </table>


                    
                    <Pagination                //logic yhi rhgea

                            numberofPage = {numberofPage}         //sirf konsa page h , kya number h  page or changeCurrentPage wala function bhejge
                            currentPage = {currentPage}
                            changeCurrentPage = {this.changeCurrentPage}
                            >
                    </Pagination>
                </div>
            </div>
        )
    }
}
