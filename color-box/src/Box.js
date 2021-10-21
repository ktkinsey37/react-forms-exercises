import React from "react";



function Box(props) {



  return (
    <div>
          <div
        className="box"
        key={props.id}
        style={{
          backgroundColor: props.box.color,
          position: "relative",
          height: `${props.box.height}px`,
          width: `${props.box.width}px`,
          border: "2px solid black"
        }}
      >
      </div>
      <button onClick={props.remove}>X</button>
    </div>

  );
}

export default Box;
