import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
import { Principal } from "@dfinity/principal";
import { Container } from "../../../../../node_modules/@material-ui/core/index";

const CheckSMPC = () => {
    const [id, changeID] = React.useState("");
    const [amount, changeAmount] = React.useState(0);
    const [state, changeState] = React.useState(false);

    const changeFun = async () => {
        const holderId = Principal.fromText(id);
        const value = await Simpleapp.topUp(holderId, amount);
        changeState(value);
        // changeAmount(value.toLocaleString());
    }
    return <>
        <container>
            <h2>Buy SPC</h2 >
            <input type="text" placeholder="Enter ID" onChange={(e) => changeID(e.target.value)} value={id} /><br />
            <input type="text" placeholder="Amount" onChange={(e) => changeAmount(Number(e.target.value))} value={amount} /><br />
            <button onClick={changeFun}>Buy</button><br />
            <p>{state ? "sucessful" : ""}</p>
        </container>
    </>
}

export default CheckSMPC;