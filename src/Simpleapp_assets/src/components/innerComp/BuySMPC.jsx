import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
import { Principal } from "@dfinity/principal";
import { Container } from "../../../../../node_modules/@material-ui/core/index";


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
        <container>
            <h3>Check balance</h3>
            <input type="text" placeholder="Enter ID" onChange={(e) => changeID(e.target.value)} value={id} /><br />
            <button onClick={changeFun}>Check balance</button><br />
            <p>Balance: {amount}</p><br />
        </container>
    </>
}

export default BuySMPC;