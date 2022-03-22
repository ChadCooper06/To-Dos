import React from "react";
import Paper from "./paper";

export default function Layout({children}) {
    return(
        <>
        <Paper />
        {children}
        <Bottom />
        </>
    )
}