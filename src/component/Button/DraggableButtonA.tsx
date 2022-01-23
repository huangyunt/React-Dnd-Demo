import ButtonA from "./ButtonA";
import { WithDraggable } from "../../utils/draggable";
// export default function DraggableButtonA() {
//     const [, drag] = useDrag(() => ({
//         type: "Draggable-Component",
//         item: { type: "Button1" },
//     }));
//     return (
//         <div ref={drag}>
//             <ButtonA />
//         </div>
//     );
// }
export default WithDraggable("Button1")(ButtonA);
