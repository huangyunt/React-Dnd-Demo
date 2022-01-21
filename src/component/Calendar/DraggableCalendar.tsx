import { useRef } from "react";
import { useDrag } from "react-dnd";
import Calendar from "./Calendar";
const DraggableCalendar: React.FC<{ style?: any }> = ({ style }) => {
    const ref = useRef(null);
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Calendar" },
    }));
    drag(ref);
    return (
        <div className="draggable-calendar" ref={ref}>
            <Calendar/>
        </div>
    );
};
export default DraggableCalendar;