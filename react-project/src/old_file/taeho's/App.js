//import logo from './logo.svg';
import './App.css';
import Recommendation from "./Recommendation.js";
import React from "react"; //, { useState }
//import class_data from "./data/klasdata.csv"

function App() 
{
  const recommendations = [
    {
    point: 3, 
    rating: 5, 
    title: "강의명0"
},
{
    point: 3, 
    rating: 4, 
    title: "강의명1"
},
{
    point: 3, 
    rating: 4, 
    title: "강의명2"
},
{
    point: 3, 
    rating: 3, 
    title: "강의명3"
}
];
  return(
    <div>
      <Recommendation recommendations = {recommendations}/>
    </div>
  );
}

export default App;
