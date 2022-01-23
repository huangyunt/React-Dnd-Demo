import { Button } from "antd";
import { WithDraggable } from "../../utils/draggable";
const ButtonA: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <Button type="primary" style={style}>
            Primary Button
        </Button>
    );
};
export default ButtonA;
export const DraggableButtonA = WithDraggable("Button1")(ButtonA)
