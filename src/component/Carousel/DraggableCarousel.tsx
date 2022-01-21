import Carousel from "./Carousel";
import { useDrag } from "react-dnd";

const DraggableCarousel: React.FC<{ style?: any }> = ({ style }) => {
    const [, drag] = useDrag(() => ({
        type: "Draggable-Component",
        item: { type: "Carousel" },
    }));
    return (
        <div ref={drag} style={{width: "90%"}}>
            <Carousel style={style}/>
        </div>
    );
}
export default DraggableCarousel;
