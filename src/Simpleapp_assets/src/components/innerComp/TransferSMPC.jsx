import React from "react";
import { Principal } from "@dfinity/principal";
import { Simpleapp } from "../../../../declarations/Simpleapp";
import { Container } from "../../../../../node_modules/@material-ui/core/index";

const TransferSMPC = () => {
    const [fromId, changeFromID] = React.useState("");
    const [toID, changeToId] = React.useState("");
    const [amount, changeAmount] = React.useState("0");
    const [state, changeState] = React.useState("")

    const clickHandler = async () => {
        const pFromId = Principal.fromText(fromId);
        const pToID = Principal.fromText(toID);

        const nstate = await Simpleapp.sendCoin(pFromId, pToID, amount);
        // console.log(nstate);
        changeState(nstate);

    }

    return <>
        <container>
            <h2> Transfer SPC</h2>
            <input type="text" placeholder="Enter Source ID" onChange={(e) => changeFromID(e.target.value)} value={fromId} /><br />
            <input type="text" placeholder="Enter Target ID" onChange={(e) => changeToId(e.target.value)} value={toID} /><br />
            <input type="text" placeholder="Amount" onChange={(e) => changeAmount(Number(e.target.value))} value={amount} /><br />
            <button onClick={clickHandler}>SELL</button>
            <p>{state ? "sucessful" : ""}</p>
        </container>
    </>
}


export default TransferSMPC;