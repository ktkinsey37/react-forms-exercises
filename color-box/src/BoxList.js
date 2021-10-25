import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

// /** Get random int min..max (not incl max) */
// function randRange(min = 0, max = 100) {boxes
//   return Math.random() * (max - min) + min;
// }

/** Manage positioned & re-positionable circles.
 *
 * State:
 * - circles: array of circles: [ {x, y, color }, ... ]
 **/

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Add a circle w/newColor */
  function addBox({color, height, width, id}) {
    setBoxes(boxes => [
      ...boxes,
      { color: color, height: height, width: width, id:id },
    ]);
  }

  function remove(box){
    setBoxes(boxes.filter(b => b.id !== box.id))
  }

  return (
    <div>
      {boxes.map((box) => (
        <div>
            <Box
            box={box}
            key={box.id}
            remove={() => remove(box)}
             />
        </div>
        ))}
      <NewBoxForm addBox={addBox}/>
    </div>
  );
}


export default BoxList;
