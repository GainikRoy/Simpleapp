import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
import { Principal } from "@dfinity/principal";
import { Container } from "../../../../../node_modules/@material-ui/core/index";

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
        <container>
            <h3>Sell SPC</h3 >
            <input type="text" placeholder="Enter ID" onChange={(e) => changeID(e.target.value)} value={id} /><br />
            <input type="text" placeholder="Amount" onChange={(e) => changeAmount(Number(e.target.value))} value={amount} /><br />
            <button onClick={changeFun}>Sell</button><br />
            <p>{state ? "sucessful" : ""}</p><br />
        </container>
    </>
}

export default SellSMPC;