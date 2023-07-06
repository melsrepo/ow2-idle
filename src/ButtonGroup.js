import './App.css';
import React, {useState, useEffect} from 'react';
import ImgBtn from './ImgBtn';
import practRange from "./btn_img/p-range.png";
import skirm from "./btn_img/skirm.png";
import dMatch from "./btn_img/d-match.png";
import customG from "./btn_img/custom-g.png";
function ButtonGroup() {

    return (
     <div className = "options">
    <ImgBtn customImg = {practRange} 
     btnTxt = 'PRACTICE RANGE'/>
    
     <ImgBtn customImg = {skirm} 
     btnTxt = 'SKIRMISH'/>

    <ImgBtn customImg = {dMatch} 
     btnTxt = 'DEATH MATCH'/>

    <ImgBtn customImg = {customG} 
     btnTxt = 'CUSTOM GAMES'/>
      
     </div>   
      );
  }



  export default ButtonGroup;