 // RightSidebar.js
import React from "react";

const RightSidebar = ({ isOpen }) => {
  return (
    <div className={`right-sidebar ${isOpen ? "open" : "close"}`}>
      <h2>Right Sidebar</h2>
    </div>
  );
};

export default RightSidebar;
