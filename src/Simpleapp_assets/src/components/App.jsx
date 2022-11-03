
import CheckSMPC from "./innerComp/CheckSMPC";
import React from "react";
import BuySMPC from "./innerComp/BuySMPC";
import SellSMPC from "./innerComp/SellSMPC";
import TransferSMPC from "./innerComp/TransferSMPC";
import Getid from "./innerComp/Getid";


const App = () => {

  return <>
    {/* <h1>test</h1> */}
    <Getid />
    <CheckSMPC />
    <BuySMPC />
    <SellSMPC />
    <TransferSMPC />
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