import { useDrag } from "react-dnd";
import ButtonB from "./ButtonB";

export default function DraggableButtonB() {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Button2" },
    }));
    return (
        <div ref={drag}>
            <ButtonB />
        </div>
    );
}
