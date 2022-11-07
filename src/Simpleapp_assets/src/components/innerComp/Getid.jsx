import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
import { Container } from "../../../../../node_modules/@material-ui/core/index";
// import { Principal } from "@dfinity/principal";

const Getid = () => {
    const [val, changeVal] = React.useState("");
    const handler = async () => {
        const temp = await Simpleapp.getID();
        changeVal(temp.toLocaleString());
    }
    return <>
        <container>
            <h2>Getid</h2>
            <button onClick={handler}>get ID</button>
            <p>{val}</p>
        </container>
    </>
}

export default Getid;