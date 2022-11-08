import { Simpleapp } from "../../../../declarations/Simpleapp/index"
import React from "react";

const Getid = () => {
    const [val, changeVal] = React.useState("");
    const handler = async () => {
        const temp = await Simpleapp.getID();
        changeVal(temp.toLocaleString());
    }
    return <>
        <container>
            <h3>Getid</h3>
            <button onClick={handler}>get ID</button>
            <p>{val}</p>
        </container>
    </>
}

export default Getid;