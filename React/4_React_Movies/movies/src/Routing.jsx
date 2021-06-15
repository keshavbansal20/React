import React, { Component } from 'react';
import { Route } from 'react-router-dom';
 
 
 export default class Routing extends Component {
     render() {
         return (
             <div>
                 
             </div>
         )
     }
 }

 class home extends Component {
     state = {  }
     render() { 
         return ( 
             <div>
                Home
             </div>
          );
     }
 }
 class Prfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               profile
            </div>
         );
    }
} 

class Listing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               Listing
            </div>
         );
    }
}

class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               Error
            </div>
         );
    }
}
 
 export default home;
 