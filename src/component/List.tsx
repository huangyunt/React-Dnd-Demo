import { CSSProperties } from "react";
import Button from "./Button/Button";
// import Calendar from "./Calendar/Calendar";
import DraggableCalendar from "./Calendar/DraggableCalendar";
import Carousel from "./Carousel/Carousel";
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
            <DraggableCalendar/>
            {/* <Calendar /> */}
            <Button />
            <Carousel />
        </div>
    );
}
