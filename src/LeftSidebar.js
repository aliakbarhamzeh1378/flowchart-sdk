// LeftSidebar.js
import React from "react";

const LeftSidebar = ({ isOpen }) => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className={`left-sidebar ${isOpen ? "open" : "close"}`}>
            <aside>
                <div className="description">You can drag these nodes to the pane on the right.</div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                    Input Node
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                    Default Node
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                    Output Node
                </div>
            </aside>
        </div>
    );
};

export default LeftSidebar;
