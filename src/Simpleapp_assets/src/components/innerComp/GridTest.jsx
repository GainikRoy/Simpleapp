import React from "react";
import Grid from "@material-ui/core/Grid";
import BuySMPC from "./BuySMPC";
import CheckSMPC from "./CheckSMPC";
import Getid from "./Getid";
import TransferSMPC from "./TransferSMPC";

const GridTest = () => {
    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Getid />
            </Grid>
            <Grid item xs={6}>
                <BuySMPC />
            </Grid>
            <Grid item xs={6}>
                <CheckSMPC />
            </Grid>
            <Grid item xs={6}>
                <TransferSMPC />
            </Grid>
        </Grid>
    </>
}

export default GridTest;