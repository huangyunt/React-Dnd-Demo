import { Calendar } from "antd";
import { WithDraggable } from "../../utils/draggable";
const MyCalendar: React.FC<any> = props => {
    return (
        <div className="site-calendar-demo-card" {...props}>
            <Calendar fullscreen={false} />
        </div>
    );
};
export default MyCalendar;
export const DraggableCalendar = WithDraggable("Calendar")(MyCalendar);

