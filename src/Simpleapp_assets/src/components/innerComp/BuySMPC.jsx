import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
import {Principal} from "@dfinity/principal";


const BuySMPC = () => {
    const [id, changeID] = React.useState("");
    const [amount, changeAmount] = React.useState("");

    const changeFun = async () => {
        const holderId = Principal.fromText(id);
        const value = await Simpleapp.balanceOf(holderId);
        // console.log(value);
        changeAmount(value.toLocaleString());
    }
    return <>
        <h2>Check balance</h2>
        <input type="text" placeholder="Enter ID" onChange={(e) => changeID(e.target.value)} value={id} />
        <button onClick={changeFun}>Check balance</button>
        <p>Balance: {amount}</p>
    </>
}

export default BuySMPC;