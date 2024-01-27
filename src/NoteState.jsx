import React, { useReducer } from "react";
import web from '../src/image/img1.jpg'
import app from '../src/image/img2.jpg'
import digital from '../src/image/img3.jpg'
import android from '../src/image/img4.jpg'
import mobile from '../src/image/img5.jpg'
import Technology from '../src/image/img.jpg'
import NoteContext from "./NoteContext";
const NoteState=(props)=>{

    // const API="http://thapareactapi.up.railway.app";
    const intialState={
        name:"",
        image:"",
        services:[],
    };

    const Data=[
        {
         id:1,
         img:web,
         title: "Web Development"    
        },
        {
            id:2,
            img:Technology,
            title: "Website Development Process"  
        },
        {
            id:3,
            img:android,
            title: "Front vs. Back End"  
        },
        {
            id:4,
            img:digital,
            title: "Web Design Development"  
        },
        {
            id:5,
            img:mobile,
            title: "Coffee Bean"  
        },
        {
            id:6,
            img:app,
            title: "Web Development"  
        },

]
    const reducer=(state,action)=>{
        console.log(state,action);
        if(action.type==="HOME_UPDATE"){
            return{
                ...state,
                name:action.payload.name,
                image:action.payload.image,
            }
        }
        
        if(action.type==="ABOUT_UPDATE"){
            return{
                ...state,
                name:action.payload.name,
                image:action.payload.image,
            }
        }
        if(action.type==="GET_SERVICES"){
            return{
                ...state,
                services:action.payload,
            }
        }
        return state;
    }

const [state, dispatch]=useReducer(reducer, intialState);
const updateHomePage=()=>{
    return dispatch({
        type:"HOME_UPDATE",
        payload:{
            name:"Umesh Chaudhary",
            image:"images/umesh2.jpg",   
          }
    })
}

const updateAboutPage=()=>{
    return dispatch({
        type:"ABOUT_UPDATE",
        payload:{
            name:"Umesh Chaudhary",
            image:"images/umesh1.jpg",   
          }
    })
}
const updateServicePage=()=>{
    return dispatch({
        type:"GET_SERVICES",
        payload:Data
    })
}

// const getService=async(url)=>{
//     try{
//         const res=await fetch(url);
//         const data=await res.json(); 
//         dispatch({
//             type:"GET_SERVICES",
//             payload:data
//         })
//     }catch(error){
// console.log(error);
//     }

// }
// useEffect(()=>{
//     getService(API);
// },[])

    return(
        <NoteContext.Provider value={{...state,updateAboutPage,updateHomePage,updateServicePage}}>{props.children}</NoteContext.Provider>
    )
}
export default NoteState;