import { Calendar } from "antd";
const MyCalendar: React.FC<{ style?: any }> = ({ style }) => {
    return (
        <div className="site-calendar-demo-card" style={style}>
            <Calendar fullscreen={false} />
        </div>
    );
};
export default MyCalendar;
