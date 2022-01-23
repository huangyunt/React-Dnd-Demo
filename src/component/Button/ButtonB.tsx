import { Button } from "antd";
import { WithDraggable } from "../../utils/draggable";
const ButtonB: React.FC<{ style?: any }> = ({ style }) => {
    return <Button style={style}>Default Button</Button>;
};
export default ButtonB;
export const DraggableButtonB = WithDraggable("Button2")(ButtonB)