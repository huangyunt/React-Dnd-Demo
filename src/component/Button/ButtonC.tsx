import { Button } from "antd";
import { WithDraggable } from "../../utils/draggable";
export const ButtonC: React.FC<any> = props => {
    return (
        <Button type="dashed" {...props}>
            Dashed Button
        </Button>
    );
};
export const DraggableButtonC = WithDraggable("Button3")(ButtonC);
