import React from "react";
import Draggable from "react-draggable";

export default function Blaster({ onClose }) {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }} scale={1}>
      <div
        style={{
          width: 522,
          height: 430,
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
            Astroid Blaster
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
            width: 512,
            height: 384,
            backgroundColor: "white",

            marginTop: 6,
            border: "1px dotted",
          }}
        >
          <iframe
            src="https://www.embed.com/app/arcade/asteroids.html"
            style={{
              width: 1280,
              height: 960,
              transform: "scale(.4)",
              transformOrigin: "0 0",
            }}
            scrolling="no"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </Draggable>
  );
}
