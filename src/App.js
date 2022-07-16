

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from "./page/screen/Home";
import AddProduct from "./page/screen/AddProduct";
import Product from "./page/screen/Product";
import history from './page/screen/history';

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route path="/" exact  element={<Home/>} />
                    <Route path="/Product" element={<Product/>} />
                    <Route path="/AddProduct" element={<AddProduct/>} />
                </Routes>
            </Router>
        )
    }
}
















/* import logo from './logo.svg';
import React,{useEffect,useState,useCallback} from 'react';

import './App.css';
 import {db} from './page/Firebase1'; 
import { doc,collection, addDoc,query, orderBy, onSnapshot,deleteDoc } from "firebase/firestore"; 

class App extends React.Component {

  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount=()=>{
this.dataset();
this.getData();
  }
 
  async  dataset(){
   
     
      try {
        const docRef = await addDoc(collection(db, "us"), {
          first: "Ada1",
          last: "Lovelac1e",
          born: 18151
        });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }  
     
     
  }


   getData(){
   let data1=[];
    const q = query(collection(db, 'us'))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
      
        data1.push(doc)
        
        this.setState({
          data:data1
        })
      });
    })
   
   
   
  }
  async handleClick(props){
   console.log("props=",props);
   const taskDocRef = doc(db, 'us', props)
   try{
     await deleteDoc(taskDocRef)
     this.getData();
   } catch (err) {
     alert(err)
   }
  }
  render(){
    
  return (
    <div className="App">
     
      {this.state.data.map((e,index)=>{
       
       return (<div><p>{e.data().first}==={e.data().last}==={e.data().born}</p><p onClick={()=>this.handleClick(e.id)}>Delete</p></div>);
      })}
 
     
    </div>
  );}
}

export default App;
 */