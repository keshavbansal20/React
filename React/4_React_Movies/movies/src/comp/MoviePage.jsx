import React, { Component } from 'react'
import getMovies from "../temp/MovieService"

export default class MoviePage extends Component {
    state={
        movies:getMovies(),
        currSearchText:"",
        limit:4 ,
        currentPage:1
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
    
    
    render() {
        console.log(this.state.movies)
        let {movies,currentPage, limit, currSearchText}=this.state;
        let filteredArr=movies;
        if(currSearchText!=""){
             
            filteredArr =  filteredArr.filter((movieobj)=>{
                let title =  movieobj.title.trim().toLowerCase();
                return title.includes(currSearchText.toLowerCase())

            })
            console.log("hello",filteredArr)
        }
        let pageNumberArr=[];
        for(let i= 0;i<pa)
        let numberofPage = Math.ceil(filteredArr.length/limit);
        let si = (currentPage-1)*limit;
        let eidx =si+limit;
        filteredArr = filteredArr.splice(si ,eidx);
        console.log(filteredArr)
        
        return (
            <div>
                <div className="row">
                    
                    <div className="col-3">hello</div>
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
                      <nav aria-label="...">
                        <ul class="pagination">
                         pageNumberArr.filter(())
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
                            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            
                        </ul>
                      </nav>
                    </div>


                </div>
            </div>
        )
    }
}
