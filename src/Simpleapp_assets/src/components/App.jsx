import React from "react";
import NavBar from "./innerComp/NavBar";
import GridTest from "./innerComp/GridTest";


const App = () => {

  return <>
    <NavBar />
    <div className="mainDiv">
      <GridTest />
    </div>
  </>

}

export default App;


{/* <h2 > Buy SMPC</h2 >
    <input type="text" placeholder="Enter ID" onChange={} value ={} />
    <input type="text" placeholder="Amount" onChange={} value ={} />
    <button onClick={}>Buy</button>
    <p>{ ? "sucessful" : "retry"}</p> 
    
    <h2>Sell SMPC</h2>
    <input type="text" placeholder="Enter ID" onChange={} value ={} />
    <input type="text" placeholder="Amount" onChange={} value ={} />
    <button onClick={}>SELL</button>
    <p>{ ? "sucessful" : "retry"}</p> 

    <h2> Transfer SMPC</h2>
    <input type="text" placeholder="Enter Source ID" onChange={} value ={} />
    <input type="text" placeholder="Enter Target ID" onChange={} value ={} />    
    <input type="text" placeholder="Amount" onChange={} value ={} />
    <button onClick={}>SELL</button>
    <p>{ ? "sucessful" : "retry"}</p> */}