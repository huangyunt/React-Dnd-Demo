import React from "react";
import { useDrag } from "react-dnd";
// import { ComponentType } from "../Preview";
interface IProps {
    id: number;
    componentType: any;
    changeList: any;
}
const ComponentBox: React.FC<IProps> = ({ componentType, id, changeList }) => {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Calendar" },
        // end: () => {
        //     changeList((list: Array<ComponentType>) => {
        //         const ind = list.findIndex(ot => ot.id === id);
        //         const temp = [...list];
        //         temp.splice(ind, 1);
        //         return temp;
        //     });
        // },
    }));
    return drag(<div className="draggable-box">{componentType.com}</div>);
};
export default ComponentBox;
