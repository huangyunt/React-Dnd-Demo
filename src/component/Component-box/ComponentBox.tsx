import React from "react";
import { useDrag } from "react-dnd";
import { ComponentType } from "../Preview";
interface IProps {
    id: number | undefined;
    componentType: ComponentType;
    changeList: any;
    dragFromPreview: boolean;
}
const ComponentBox: React.FC<IProps> = ({ componentType, id, dragFromPreview, changeList }) => {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: componentType.type, id },
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
