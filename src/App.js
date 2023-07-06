import ImgBtn from './ImgBtn';
import practRange from "./btn_img/p-range.png";
import skirm from "./btn_img/skirm.png";
import dMatch from "./btn_img/d-match.png";
import customG from "./btn_img/custom-g.png";
import logo from "./btn_img/logo.png";
import ButtonGroup from "./ButtonGroup"


 function App() {
 return(
    <>
    <div>
    <h1><i>FINDING GAME</i></h1>
    </div>
    <img src = {logo}></img> 
    <div className = "options1">
    <ButtonGroup/>
    {/*<ImgBtn customImg = {practRange} 
     btnTxt = 'PRACTICE RANGE'/>
    
     <ImgBtn customImg = {skirm} 
     btnTxt = 'SKIRMISH'/>

    <ImgBtn customImg = {dMatch} 
     btnTxt = 'DEATH MATCH'/>

    <ImgBtn customImg = {customG} 
     btnTxt = 'CUSTOM GAMES'/> */}
  
   </div>
   <div className = "bottom-cont" >
 <button className = "bottom-btns" id = "while">WHILE YOU WAIT</button>
 <button className = "bottom-btns" id = "battle">BATTLE PASS</button>
 </div>
</>
);
} 

export default App;
