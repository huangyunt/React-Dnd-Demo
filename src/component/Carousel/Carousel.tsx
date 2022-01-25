import { Carousel } from "antd";
import { WithDraggable } from "../../utils/draggable";
const contentStyle: React.CSSProperties = {
    // width: "",
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const MyCarousel: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <div style={{ width: "300px" }}>
            <Carousel effect="fade" style={style}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
            </Carousel>
        </div>
    );
};
export default MyCarousel;
export const DraggableCarousel = WithDraggable("Carousel")(MyCarousel);
