import React from "react";
import Draggable from "react-draggable";

export default function Popup({ onClose }) {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }} scale={1}>
      <div
        style={{
          width: 300,
          height: 300,
          position: "fixed",

          backgroundColor: "#c0c0c0",
          borderRight: "2px solid #333",
          borderTop: "2px solid #333",
          borderLeft: "2px solid #f2f2f2",
          borderBottom: "2px solid #f2f2f2",
          padding: 2,
        }}
      >
        <div className="handle">
          <p style={{ flexGrow: 1 }} className="headFont">
            Ryley Randall
          </p>
          <div
            style={{
              width: 18,
              height: 18,
              backgroundColor: "#c0c0c0",
              borderRight: "2px solid #333",
              borderTop: "2px solid #333",
              borderLeft: "2px solid #f2f2f2",
              borderBottom: "2px solid #f2f2f2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            <p style={{ color: "#000" }} className="headFont">
              X
            </p>
          </div>
        </div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>
  );
}
