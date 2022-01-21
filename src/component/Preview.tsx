import { CSSProperties, useState, useRef } from "react";
import { useDrop } from "react-dnd";
import Calendar from "./Calendar/Calendar";
import Carousel from "./Carousel/Carousel";
import ComponentBox from "./Component-box/ComponentBox";
export interface ComponentType {
    id: number;
    com?: JSX.Element;
}
const style: CSSProperties = {
    position: "relative",
    flex: 1,
    border: "5px solid green",
};
export default function Preview() {
    const [componentList, setComponentList] = useState<ComponentType[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const count = useRef(0);
    const [, drop] = useDrop(() => ({
        accept: "Draggable-Component",
        drop: (item: { type: string }, monitor) => {
            console.log(item);
            // 以父容器为基准定位
            const dropBox = ref.current!.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();
            const initSourceOffset = monitor.getInitialSourceClientOffset();
            const initOffset = monitor.getInitialClientOffset();
            // console.log("x: ", initOffset!.x);
            // console.log("y: ", initOffset!.y);
            // 拿到鼠标指针在被拖拽组件内部起始的相对位置
            const mouseClientX = initOffset!.x - initSourceOffset!.x;
            const mouseClientY = initOffset!.y - initSourceOffset!.y;
            // console.log("x: ", mouseClientX);
            // console.log("y: ", mouseClientY);
            console.log("x: ", clientOffset!.x);
            console.log("y: ", clientOffset!.y);
            const comStyle = {
                position: "absolute",
                left: clientOffset!.x - dropBox.left - mouseClientX - 5,
                top: clientOffset!.y - dropBox.top - mouseClientY - 5,
            };
            const component: ComponentType = { id: count.current++ };
            switch (item.type) {
                case "Calendar":
                    component.com = <Calendar style={comStyle} />;
                    break;
                case "Button1":
                    component.com = <Calendar />;
                    break;
                case "Button2":
                    component.com = <Calendar />;
                    break;
                case "Button3":
                    component.com = <Calendar />;
                    break;
                case "Carousel":
                    component.com = <Carousel />;
                    break;
                default:
                    break;
            }

            // setComponentList(list => {
            //     const findId = list.findIndex(opt => opt.id === component.id);
            //     return findId === -1
            //         ? [...list, component]
            //         : [...list].splice(findId, 1, component);
            // });
            setComponentList(list => [...list, component]);
            // setComponentList([...componentList, component]);
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
                />
            ))}
        </div>
    );
}
