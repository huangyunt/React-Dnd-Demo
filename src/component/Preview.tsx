import React, { CSSProperties, useState, useRef } from "react";
import { useDrop } from "react-dnd";
import { ButtonA } from "./Button/ButtonA";
import { ButtonB } from "./Button/ButtonB";
import { ButtonC } from "./Button/ButtonC";
import Calendar from "./Calendar/Calendar";
import Carousel from "./Carousel/Carousel";
import ComponentBox from "./Component-box/ComponentBox";
export interface ComponentType {
    id: number | undefined;
    type: string;
    style: any;
    com?: JSX.Element;
    component?:React.FC
}
const style: CSSProperties = {
    position: "relative",
    minWidth: 800,
    border: "5px solid green",
};
export default function Preview() {
    const ref = useRef<HTMLDivElement>(null);
    const count = useRef<number>(0);
    const [dragFromPreview, setDragFromPreview] = useState(false);
    const [componentList, setComponentList] = useState<ComponentType[]>([]);
    const [, drop] = useDrop(() => ({
        accept: "Draggable-Component",
        // 这里传id是区分预览区内拖拽，传了就是预览区内拖拽
        drop: (item: { type: string; id?: number,component:React.FC }, monitor) => {
            console.log(item);
            const isFromPreview = typeof item.id !== "undefined";
            // 以父容器为基准定位
            const dropBox = ref.current!.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();
            const initSourceOffset = monitor.getInitialSourceClientOffset();
            const initOffset = monitor.getInitialClientOffset();
            // 拿到鼠标指针在被拖拽组件内部起始的相对位置
            const mouseClientX = initOffset!.x - initSourceOffset!.x;
            const mouseClientY = initOffset!.y - initSourceOffset!.y;
            const comStyle = {
                position: "absolute",
                left: clientOffset!.x - dropBox.left - mouseClientX - 5,
                top: clientOffset!.y - dropBox.top - mouseClientY - 5,
            };
            const component: ComponentType = {
                id: isFromPreview ? item.id : count.current++,
                type: item.type,
                style: comStyle,
            }

            component.com=<item.component/>
            component.component=item.component

            setDragFromPreview(() => (isFromPreview ? true : false));

            setComponentList(list => {
                const ind = list.findIndex(op => op.id === item.id);
                const ret = [...list];
                ind === -1
                    ? ret.push(component)
                    : ret.splice(ind, 1, component);
                return ret;
            });
        },
    }));
    return drop(
        <div style={style} ref={ref}>
            {componentList.map((val, index) => (
                <ComponentBox
                    key={index}
                    componentType={val}
                    id={val.id}
                    changeList={setComponentList}
                    dragFromPreview={dragFromPreview}
                />
            ))}
        </div>
    );
}
