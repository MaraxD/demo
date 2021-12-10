import React from "react";

const getColor=(activitate)=>{
    if(activitate<2) return 'red';
    return ' ';
};

const ReadOnlyRow = ({ member, handleEditClick, handleDeleteClick }) => {
  return (
    <tr style={{color:getColor(member.activitate)}}>
    <td>{member.nume}</td>
     <td>{member.prenume}</td>
     <td>{member.activitate}</td>
     <td>{member.nr_tel}</td>
     <td>{member.mail}</td>
                        
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, member)}
        >Editeaza</button>
        <button type="button" onClick={() =>  handleDeleteClick(member.id)}>Stergere</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;