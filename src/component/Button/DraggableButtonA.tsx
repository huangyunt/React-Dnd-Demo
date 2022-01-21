import { useDrag } from "react-dnd";
import ButtonA from "./ButtonA";

export default function DraggableButtonA() {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Button1" },
    }));
    return (
        <div ref={drag}>
            <ButtonA />
        </div>
    );
}
