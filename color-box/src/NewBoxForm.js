import React, { useState } from "react";
import BoxList from "./BoxList"

import { v4 as uuid } from "uuid";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {color: "red", height: 50, width: 50, id:uuid()};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="Color"
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        placeholder="12"
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="12"
      />

      <button>Add a new Box!</button>
    </form>
  );
};

export default NewBoxForm;
