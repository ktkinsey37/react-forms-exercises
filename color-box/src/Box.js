import React from "react";



function Box(props) {

  // console.log(props, props.box.color, "THIS IS THE LINE THAT IS BOTH LOGGING AND THROWING?")

  return (
    <div>
          <div
        className="box"
        key={props.id}
        style={{
          backgroundColor: `${props.box.color}`,
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
