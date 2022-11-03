import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";
// import { Principal } from "@dfinity/principal";

const Getid = () => {
    const [val, changeVal] = React.useState("");
    const handler = async () => {
        const temp = await Simpleapp.getID();
        changeVal(temp.toLocaleString());
    }
    return <>
        <h2>Getid</h2>
        <button onClick={handler}>get ID</button>
        <p>{val}</p>
    </>
}

export default Getid;