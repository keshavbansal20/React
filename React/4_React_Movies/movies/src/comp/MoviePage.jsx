import React, { Component } from 'react'
import getMovies from "../temp/MovieService"

export default class MoviePage extends Component {
    state={
        movies:getMovies(),
        currSearchText:"",
        limit:4 ,
        currentPage:1,
        cGenre:"All Genres",
        genres:getMovies().json()
    }

    setCurrSearchText =(e) => {
        let task=e.target.value;
        console.log(this.state.currSearchText);
        this.setState({
            currSearchText:task
        })
    }
    deleteEntry=(obj)=> {
       
       let  filteredArr = this.state.movies.filter((movieObj)=>{
            return movieObj.title!=obj;
        })
        console.log(obj , "" ,filteredArr)
        this.setState({
            movies:filteredArr
        })
    }

    changeLimit =(e)=> {
        let currLimit=e.target.value;
        console.log(currLimit)
        this.setState({
            limit:currLimit
        })
    }

    changeCurrentPage=(pageNumber) => {
        this.setState({
            currentPage:pageNumber
        })
    }

    groupBygenre = (name)=> {
        this.setState({
            cGenre:name, 
            currSearchText:""
        })
    }
    
    
    render() {
        console.log(this.state.movies)
        let {movies,currentPage,cGenre ,genres, limit, currSearchText}=this.state;
        let filteredArr=movies;
        console.log(genres)
        if(currSearchText!=""){
             
            filteredArr =  filteredArr.filter((movieobj)=>{
                let title =  movieobj.title.trim().toLowerCase();
                return title.includes(currSearchText.toLowerCase())

            })
            console.log("hello",filteredArr)
        }
        let pageNumberArr=[];
        
        let numberofPage = Math.ceil(filteredArr.length/limit);
        for(let i =0 ; i < numberofPage;i++){
            pageNumberArr.push(i+1);
        }
        //impliment
        //si-->(pageNumber-1)*limit;
        //eidx--> si+limit;
        //number of pages
        // //paginate
        let si = (currentPage-1)*limit;
        let eidx =si+limit;
        filteredArr = filteredArr.splice(si ,eidx);
        console.log(filteredArr)
        
        return (
            <div>
                <div className="row">
                    
                    <div className="col-3">
              
                    </div>
                    <div className="col-9">
                    <input type="search" placeholder="Enter Movie" value={this.currSearchText} onChange={this.setCurrSearchText} ></input>
                    <input type="number"  value={limit} className="col-2" onChange={this.changeLimit}></input>
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Stock</th>

                      </tr>
                    </thead>
                     <tbody>
                         {filteredArr.map((movieObj)=>{
                            return(
                                <tr>
                                    <td></td>
                                    <td>{movieObj.title}</td>
                                    <td>{movieObj.genre.name}</td>
                                    <td>{movieObj.dailyRentalRate}</td>
                                    <td>{movieObj.numberInStock}</td>
                                    <td><button type="button" className="btn btn-danger"
                                    onClick={()=> {
                                    this.deleteEntry(movieObj.title);
                                    }}>Delete</button></td>
                                    
                                </tr>
                            )
                        })}
                      </tbody>
                    </table>
                      <nav aria-label="..." className="col-2">
                      <ul class="pagination">
                        {
                            pageNumberArr.map((pageNumber) => {
                                let additional = pageNumber == currentPage?"page-item active":"page-item";
                                return (
                                    <li class={additional}
                                    aria-current="page" onClick={()=>{this.changeCurrentPage(pageNumber)}}>
                                    <span class="page-link" href="#">{pageNumber}</span>
                                    </li>
                                )
                            })
                        }
                      
                        
                        
                        </ul>
                        </nav>
                        
                        </div>
                        

                </div>
            </div>
        )
    }
}
