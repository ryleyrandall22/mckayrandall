import React from "react";
import Draggable from "react-draggable";

export default function Popup({ onClose }) {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }} scale={1}>
      <div
        style={{
          width: 300,

          position: "fixed",
          top: 30,
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
            className="button"
            style={{
              width: 18,
              height: 18,

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
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: 4,
            marginTop: 6,
            border: "1px dotted",
          }}
        >
          <h4 className="text">E-Mail</h4>
          <p className="text">ryley.randall@gmail.com</p>
          <h4 style={{ marginTop: 20 }} className="text">
            Location
          </h4>
          <p className="text">Mesa, Arizona</p>
          <h4 style={{ marginTop: 20 }} className="text">
            Intrests
          </h4>
          <p className="text">No-code, Pickleball, West Africa</p>
        </div>
      </div>
    </Draggable>
  );
}
