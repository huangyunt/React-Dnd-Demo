import { CSSProperties } from "react";
import DraggableButtonA from "./Button/DraggableButtonA";
import DraggableButtonB from "./Button/DraggableButtonB";
import DraggableButtonC from "./Button/DraggableButtonC";
import DraggableCalendar from "./Calendar/DraggableCalendar";
import DraggableCarousel from "./Carousel/DraggableCarousel";
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
