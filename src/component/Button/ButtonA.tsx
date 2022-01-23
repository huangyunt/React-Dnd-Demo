import { Button } from "antd";
import { WithDraggable } from "../../utils/draggable";
export const ButtonA: React.FC<any> = props => {
    return (
        <Button type="primary" {...props}>
            Primary Button
        </Button>
    );
};
export const DraggableButtonA = WithDraggable("Button1")(ButtonA);
