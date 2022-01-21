import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const MyCarousel: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <Carousel effect="fade" style={style}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
        </Carousel>
    );
}
export default MyCarousel;
