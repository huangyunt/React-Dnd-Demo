import { Button } from "antd";
import { WithDraggable } from "../../utils/draggable";
const ButtonC: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <Button type="dashed" style={style}>
            Dashed Button
        </Button>
    );
};
export default ButtonC;
export const DraggableButtonC = WithDraggable("Button3")(ButtonC)
