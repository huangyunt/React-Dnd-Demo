import React from "react";
import { useDrag } from "react-dnd";
import { WithDraggable } from "../../utils/draggable";
import { ComponentType } from "../Preview";
interface IProps {
    id: number | undefined;
    componentType: ComponentType;
}
const ComponentBox: React.FC<IProps> = ({ componentType, id }) => {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Draggable-Box", id },
        // end: () => {
        //     changeList((list: Array<ComponentType>) => {
        //         const ind = list.findIndex(ot => ot.id === id);
        //         const temp = [...list];
        //         temp.splice(ind, 1);
        //         return temp;
        //     });
        // },
    }));
    return drag(
        <div className="draggable-box" style={componentType.style}>
            {{...componentType.com}}
        </div>
    );
};
export default ComponentBox;