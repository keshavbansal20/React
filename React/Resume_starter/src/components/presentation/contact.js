import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
// import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
// import * as contactActions from '../../actions/contactActions';
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";

import * as taskActions from "../../redux/actionTypes";
import { useHistory } from "react-router-dom";
import ResumePreview from './resumePreview'
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
// import { connect } from "react-redux";

function Contact(props) {
   let history = useHistory();
    console.log(props)
   let initFormState = {
    [fieldCd.FirstName]: "",
    [fieldCd.LastName]: "",
    [fieldCd.ProfSummary]: "",
    [fieldCd.Email]: "",
    [fieldCd.Phone]: "",
    [fieldCd.Profession]: "",
    [fieldCd.Street]: "",
    [fieldCd.City]: "",
    [fieldCd.State]: "",
    [fieldCd.Country]: "",
    [fieldCd.ZipCode]: ""
    }

   const [contact,setContact]= useState(initFormState);
//    useEffect(() => {
//        if(!props.document || !props.document.id || !props.document.skinCd)
//        {
//            history.push('/getting-started')
//        }
//    }, [])
  const onchange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        // this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
        setContact({...contact,[key]:val})
    }
    const onSubmit= async()=>{
        // if(props.contactSection!=null){
        //     props.updateContact(props.document.id,contact);
        // }
        // else{
        //     props.addContact(props.document.id,contact);
        // }
        // let keys = Object.keys(props.contact);
        // if(keys.length==0){
        //     props.setContact(contact);
        // } else{
        //     props.up
        // }
        let keys = Object.keys(props.contact)
        if(keys.length==0){
            props.setContact(contact);
        } else {
            props.updateContact(contact);
        }
        history.push('/education');
    }


    const getFieldData=(key)=>{
        if(contact && contact[key]){
          return contact[key]
        }
        return "";
    }

    useEffect(()=>{
        let keys = Object.keys(props.contact);
        if(keys.length!=0){
            setContact(props.contact);
        }
    },[]);
    //field m data kese change ho rha hai 1.given then unique id(fieldCd.FirstName etc)
                                        // 2. then on change function run ( key , value set hojata hai setcontach se , key[event.target.name])
                                        //3.then again rendering happen
                                        //4.value in div run (getFieldData(key name bhejta h isme(id))) isse hum key val get krte hai
    
    return (
        // yha pr do section banenge personal details and resume preview
          <div className="container med contact">
            <div className="section funnel-section">
                {/* form card div*/}
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                        
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                { console.log(props)}
                    <ResumePreview contactSection={contact} skinCd={props?.document?.skinCd}></ResumePreview>
                </div>

            </div>
        </div>
    );
}
function mapStatetoProps(store){
    return {
        document:store.document,
        contact:store.contact
    }
}
function mapDispatchToProps(dispatch){
    return{
        setContact:(object)=>{
            dispatch({
                type:taskActions.ADD_CONTACT , 
                payload:object
           })
        } , 
        updateContact:(object) => {
            dispatch({
                type:taskActions.UPDATE_CONTACT , 
                payload:object 
            })
        }
    }
}

export default withRouter(connect(mapStatetoProps , mapDispatchToProps)(Contact));


