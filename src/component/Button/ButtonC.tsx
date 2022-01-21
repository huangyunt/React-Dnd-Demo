import { Button } from "antd";
const ButtonC: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <Button type="dashed" style={style}>
            Dashed Button
        </Button>
    );
};
export default ButtonC;
