import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
import { Principal } from "@dfinity/principal";

const SellSMPC = () => {
    const [id, changeID] = React.useState("");
    const [amount, changeAmount] = React.useState(0);
    const [state, changeState] = React.useState(false);

    const changeFun = async () => {
        const holderId = Principal.fromText(id);
        const value = await Simpleapp.sell(holderId, amount);
        changeState(value);
        // changeAmount(value.toLocaleString());
    }
    return <>
        <h2>Sell SPC</h2 >
        <input type="text" placeholder="Enter ID" onChange={(e)=> changeID(e.target.value) } value={id} />
        <input type="text" placeholder="Amount" onChange={(e) => changeAmount(Number(e.target.value)) } value={amount} />
        <button onClick={changeFun}>Sell</button>
        <p>{ state ? "sucessful" : ""}</p>
    </>
}

export default SellSMPC;