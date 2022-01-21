import { useDrag } from "react-dnd";
import ButtonC from "./ButtonC";

export default function DraggableButtonC() {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Button3" },
    }));
    return (
        <div ref={drag}>
            <ButtonC />
        </div>
    );
}
