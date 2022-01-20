import React, { CSSProperties } from "react";
import List from "./List";
const style: CSSProperties = {
    display: "flex",
    width: 200,
    backgroundColor: "pink",
};
export default function Container() {
    return (
        <div className="box-container" style={style}>
            <List />
        </div>
    );
}
