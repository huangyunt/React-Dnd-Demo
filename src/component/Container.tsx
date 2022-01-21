import React, { CSSProperties } from "react";
import Dustbin from "./Dustbin";
import List from "./List";
import Preview from "./Preview";
const style: CSSProperties = {
    display: "flex",
    height: 800,
};
export default function Container() {
    return (
        <div className="box-container" style={style}>
            <List />
            <Preview />
            <Dustbin />
        </div>
    );
}
