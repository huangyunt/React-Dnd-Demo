import { Calendar } from "antd";
import { CSSProperties, useRef } from "react";
const style: CSSProperties = {
    border: "5px solid gray",
};
export default function List() {
    const calendar = useRef<HTMLLIElement>(null);
    return (
        <div className="component-list" style={style}>
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} />
            </div>
        </div>
    );
}
