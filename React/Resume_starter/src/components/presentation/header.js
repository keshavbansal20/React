import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}


const Header = (props) => {
  // const auth = props.auth;
  const handleLogOut=()=>{
   console.log('The user will sign out');
  }

  return (
    
  <header className="header">
  
  <nav className="nav">
      {/* for landing page route */}
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

        {/* { isLoaded(auth) && !isEmpty(auth) ?<> */}
        
        {/*sign in and sign out routes link */}
          <ul>
            <li className="signin ">
              <NavLink className="  " to="/">
               Logged in as 
              </NavLink>
            </li>
            <li className="signin"> 
              <button className="text-blue btnv-3" onClick={handleLogOut}>
             Signout
              </button>         
            </li>
          </ul>

        {/* </>:<LoggesOut></LoggesOut>} */}
          {/*ul contain routers for resume templates and about us */}
          <ul id="nav-mid">
            <li>
            {/*1.resume templates */}
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li>
            {/*contain routes for about us page */} 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

// const mapStateToProps=(state)=>{
//   return{
//      auth: state.firebase.auth
//   }
// }
// const mapDispatchToProps= (dispatch)=>{
//   return {
//    signOut:()=>dispatch(authActions.signout())
//   }
// }
export default Header;
