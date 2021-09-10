import React,{useEffect,useState} from 'react';
import {skinCodes} from '../../constants/typeCodes';
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';

// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
 //on click use template nagivate to contact page with the skin id
 //mtlb ki skin set hojayegi jo use krni hai

// import {skincodes} from '../../constants/typeCodes'
import * as taskActions from "../../redux/actionTypes";
import uuid from 'react-uuid';
import { connect} from 'react-redux';
import { withRouter} from "react-router-dom";
// import { unstable_batchedUpdates } from 'react-dom';

function GettingStarted(props) {

    console.log(props);
     let history = useHistory();
     const [select , setvalue]=useState('');

     const onChange = async (skinCd) => {
         //template set: redux
         if(props.id==null){
             let document = {
                 id:uuid() , 
                 skinCd:skinCd 
             }
            {/*call dispatch function and setskin in store */}
             props.setSkin(document);
         } else {
             //skin only
             props.updateSkin(skinCd);
         }
         setvalue(skinCd)
         history.push('/contact');
         // if(props.document.id){
         //     //  props.updateDocument(props.document.id, skinCd);        
         // }
         // else{
         //     //  props.setDocument(skinCd); 
         // }
      }
      useEffect(() => {
        let skins = props?.document?.skinCd;
        console.log()
        if(skins!=""){
            // select=skinCd
            setvalue(skins)
        }
      }, [])

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    {/* map on skidcode array to display images of all skins in the array 
                    and button to select the skin and navigate with skin id to contact details  */}
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            {console.log(
                                props?.skinCd)}
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == props?.skinCd? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
{/* return document from reducer in form pf pros */}
function mapStatetoProps(store){
    return store.document;
}

{/*dispathch set and update action in reducer for set document in store */}
function mapDispatchedtoProps(dispatch){
    return {
        setSkin:(document)=>{
            dispatch({
                type:taskActions.SET_SKIN , 
                payload:document 
            })
        },
        updateSkin:(skinCd)=>{
            dispatch({
                type:taskActions.UPDATE_SKIN , 
                payload:skinCd
            })
        }
    }
}


export default withRouter(connect(mapStatetoProps , mapDispatchedtoProps)(GettingStarted)); 

