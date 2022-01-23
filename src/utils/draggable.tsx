import React from "react";
import { useDrag } from "react-dnd";
export function WithDraggable(type: string): (component: React.FC) => React.FC {
    return (Component: React.FC): React.FC => {
        return function DraggableComponent(props) {
            const [, drag] = useDrag(() => ({
                type: "Draggable-Component",
                item: { type },
            }));
            return (
                <div ref={drag}>
                    <Component {...props} />
                </div>
            );
        };
    };
}
