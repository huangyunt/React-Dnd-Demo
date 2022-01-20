import { Calendar } from "antd";
import { useRef } from "react";
export default function List() {
    const calendar = useRef<HTMLLIElement>(null);
    return (
        <div>
            <Calendar />
        </div>
    );
}
