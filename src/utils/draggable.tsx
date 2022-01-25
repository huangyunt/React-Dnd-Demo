import React from "react";
import { useDrag } from "react-dnd";
export function WithDraggable(itemType: string): (component: React.FC) => React.FC {
    return (Component: React.FC): React.FC => {
        return function DraggableComponent(props) {
            const [, drag] = useDrag(() => ({
                type: "Draggable-Component",
                item: { type: itemType,component:Component },
            }));
            return (
                <div ref={drag}>
                    <Component {...props} />
                </div>
            );
        };
    };
}
