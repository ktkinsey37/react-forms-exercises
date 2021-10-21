import React, { useState } from "react";
import { v4 as uuid } from "uuid";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {todo:"New ToDo", id:0};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addToDo(formData);
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
      <label htmlFor="todo">ToDo:</label>
      <input
        id="todo"
        name="todo"
        value={formData.name}
        onChange={handleChange}
        placeholder="Add New Todo"
      />

      <button>Add a new ToDo!</button>
    </form>
  );
};

export default NewToDoForm;
