import { Carousel } from "antd";
import { useDrag } from "react-dnd";
const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export default function MyCarousel() {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Carousel" },
    }));
    return (
        <div ref={drag} style={{width: "90%"}}>
            <Carousel effect="fade">
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
            </Carousel>
            ,
        </div>
    );
}
