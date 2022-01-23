import { CSSProperties } from "react";
import { DraggableButtonA } from "./Button/ButtonA";
import { DraggableButtonB } from "./Button/ButtonB";
import { DraggableButtonC } from "./Button/ButtonC";

import { DraggableCalendar } from "./Calendar/Calendar";
import { DraggableCarousel } from "./Carousel/Carousel";
const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 400,
    border: "5px solid gray",
};
export default function List() {
    return (
        <div className="component-list" style={style}>
            <DraggableCalendar />
            <DraggableButtonA />
            <DraggableButtonB />
            <DraggableButtonC />
            <DraggableCarousel />
        </div>
    );
}
