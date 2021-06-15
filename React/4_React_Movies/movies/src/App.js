// import logo from './logo.svg';
import './App.css';
import MoviePage from './component/MoviePage';
import New from './component/New';
import {Switch , Route} from "react-router-dom";
import React, { Component } from 'react'
import NavBar  from './component/NavBar';
export default class App extends Component {
  state = {
    movie:[]
  }
  deleteEntry = (id) => {
    let filteredMovies = 
    this.state.movie.filter((movieObj) =>{
        return movieObj._id != id;
    })
    this.setState({
        movie: filteredMovies
    })
   }

   async componentDidMount() {
    let resp = await fetch("https://react-backend101.herokuapp.com/movies");
    let jsonMovies = await resp.json();
    
    this.setState({
        movie:jsonMovies.movies
    })
   }

   addMovie = (obj) => {
     let {title , genre , stock , rate} = obj;
     let genreObj = [{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
     { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
     { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" }
     ];

     for(let i = 0 ; i < genreObj.length;i++){
       if(genreObj[i].name == genre) {
         genre = genreObj[i];
       }
     }
     
     let movieObj = {
       _id: Date.now() , 
       title , 
       genre , 
       dailyRentalRate: rate , 
       numberInStock: stock
     } 
     let copyofMovies = [...this.state.movie , movieObj];
     this.setState({
       movie : copyofMovies
     })
   }
  render() {
    console.log("movies");
    return (
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/new" render={
            (props) => {
              return (<New {...props}
                addMovie={this.addMovie}
              ></New>)
            }
          }></Route>
           {/* <Route path="/login" component={Login}></Route> */}
           <Route path="/" render={(props)=>{
             return (<MoviePage {...props}
              deleteEntry = {this.deleteEntry}
              movie = {this.state.movie}>
              </MoviePage>)
           }}>
           </Route>
        </Switch>
      </div>
    )
  }
}

// export default App;

// function App() {
//   return (
//     <>
//     <NavBar></NavBar>
//     <switch>
//     <New></New>
//     <MoviePage></MoviePage>
//     </switch>
    
//     </>
//   );
// }