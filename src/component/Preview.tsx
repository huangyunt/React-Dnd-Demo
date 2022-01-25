import { CSSProperties, useRef, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { ButtonA } from "./Button/ButtonA";
import { ButtonB } from "./Button/ButtonB";
import { ButtonC } from "./Button/ButtonC";
import Calendar from "./Calendar/Calendar";
import Carousel from "./Carousel/Carousel";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
export interface ComponentType {
    id: number | undefined;
    style: any;
    com?: JSX.Element;
    component?:React.FC
}
const style: CSSProperties = {
    // position: "relative",
    minWidth: 800,
    border: "5px solid green",
};
export default function Preview() {
    const componentList = useRef<React.FC<any>[]>([]);
    const [layouts, setLayout] = useState<Layout[]>([]);
    const [, drop] = useDrop(() => ({
        accept: "Draggable-Component",
        drop: (item: { type: string }, monitor: DropTargetMonitor) => {
            let lay: Layout = {
                x: 0,
                y: Infinity,
                w: 3,
                h: 3,
                i: new Date().getTime().toString(),
            };
            let component: any;
            // 这里做映射
            switch (item.type) {
                case "Calendar":
                    component = Calendar;
                    lay = {
                        x: 0,
                        y: Infinity,
                        w: 3,
                        h: 3.05,
                        maxH: 3.05,
                        minH: 3.05,
                        maxW: 3,
                        minW: 3,
                        i: new Date().getTime().toString(),
                    };
                    break;
                case "Button1":
                    component = ButtonA;
                    lay = {
                        x: 0,
                        y: Infinity,
                        w: 2,
                        h: 0.8,
                        i: new Date().getTime().toString(),
                    };
                    break;
                case "Button2":
                    component = ButtonB;
                    lay = {
                        x: 0,
                        y: Infinity,
                        w: 2,
                        h: 0.8,
                        i: new Date().getTime().toString(),
                    };
                    break;
                case "Button3":
                    component = ButtonC;
                    lay = {
                        x: 0,
                        y: Infinity,
                        w: 2,
                        h: 0.8,
                        i: new Date().getTime().toString(),
                    };
                    break;
                case "Carousel":
                    component = Carousel;
                    lay = {
                        x: 0,
                        y: Infinity,
                        w: 2.5,
                        h: 1.5,
                        i: new Date().getTime().toString(),
                    };
                    break;
                default:
                    break;
            }
            componentList.current.push(component);
            setLayout(oldLayout => {
                lay.x = oldLayout.length * 3;
                return [...oldLayout, lay];
            });
        },
    }));
    return (
        <div style={style} ref={drop}>
            <ResponsiveReactGridLayout
                className="layout"
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={100}
                layouts={{ layouts }}
            >
                {componentList.current.map((FnComponent, ind) => (
                    <div key={ind} data-grid={layouts[ind]}>
                        <FnComponent
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                ))}
            </ResponsiveReactGridLayout>
        </div>
    );
}
