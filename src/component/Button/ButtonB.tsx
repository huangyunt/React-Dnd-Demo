import { Button } from "antd";
import { WithDraggable } from "../../utils/draggable";
export const ButtonB: React.FC<any> = props => {
    return <Button {...props}>Default Button</Button>;
};
export const DraggableButtonB = WithDraggable("Button2")(ButtonB);
