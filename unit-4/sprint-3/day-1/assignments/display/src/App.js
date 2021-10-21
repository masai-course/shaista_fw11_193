import {Mobile} from "./components/Mobile"

import "./App.css"
function App() {
  return (
    <div >
    {/* <div id="dis" >
     <img alt="test" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mg2znartawjgqks9dvle"/>
    <div className="space">
    
     <h1> Tortellini    <img alt="icon"src="https://cdn5.vectorstock.com/i/1000x1000/06/29/leaf-logo-design-vector-12780629.jpg" className="icon"/></h1>
  
     <p>Good food is always cooking! Go ahead, order some yummy items from the menu.Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
      <div className="ft" id="spce">
       <p >265 Cal </p>
      
      <p >P/F/C: 12/10/31</p>
      <p >53.8 C</p>
      </div>
      
      <div className="clear"></div>
     <div className="ft" id="spce"><p >$23.90</p>
      <p className="cnt">$29.90</p>
       <p > <button>order</button></p></div>
     
     </div>
      </div >  */}
     <Mobile head={"Mobile Operating System"} l1={"Andriod"} l2 ={"Blekberry"} l3 ={"iPhone"} l4 ={"Windows Phone"} />
    <Mobile head={"Mobile Manufacturers"} l1={"Samsung"} l2 ={"HTC"} l3 ={"Micromax"} l4 ={"Apple"} /> 
    </div>
  );
}

export default App;
