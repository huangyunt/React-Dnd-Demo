import { Button } from "antd";
import React from "react";
import { useDrag } from "react-dnd";
export default function Mybutton() {
    const [, drag1] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Button1" },
    }));
    const [, drag2] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Button2" },
    }));
    const [, drag3] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Button3" },
    }));
    return (
        <React.Fragment>
            <div ref={drag1}>
                <Button type="primary" style={{ marginRight: 10 }}>
                    Primary Button
                </Button>
            </div>
            <div ref={drag2}>
                <Button>Default Button</Button>
            </div>
            <div ref={drag3}>
                <Button type="dashed">Dashed Button</Button>
            </div>
        </React.Fragment>
    );
}
