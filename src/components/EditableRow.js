import React from "react";

const EditableRow =  ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  

  return (
    <tr>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Introduceti numele..."
          name="nume"
          value={editFormData.nume}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
           type="text"
           required="required"
           placeholder="Introduceti prenumele..."
           name="prenume"
          value={editFormData.prenume}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Introduceti numarul de perioade active..."
          name="activitate"
          value={editFormData.activitate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Introduceti numarul de telefon..."
          name="nr_tel"
          value={editFormData.nr_tel}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Introduceti mail-ul institutional..."
          name="mail"
          value={editFormData.mail}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        
          <button type="submit">Salveaza</button>
          <button  type="button" onClick={handleCancelClick}>
            Anuleaza
          </button>
      
        
      </td>
    </tr>
  );
};

export default EditableRow;
