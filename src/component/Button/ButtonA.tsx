import { Button } from "antd";
const ButtonA: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <Button type="primary" style={style}>
            Primary Button
        </Button>
    );
};
export default ButtonA;
