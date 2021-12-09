import React,{useState} from 'react'
import {NavLink} from 'react-router-dom' //eroare-path changed
import data from './data.json'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './tech.scss'
import TextField from 'material-ui/TextField'; 
import  IconButton  from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const getColor=(activitate)=>{
    if(activitate<2) return 'red';
    return ' ';
};

function Tech() {
    
    const[members, setMembers]=useState(data);

    const[inputFields, setInputField]= useState([
        { nume:'',prenume:'',activitate:'',nr_tel:'',mail:''},
    ])

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputField", inputFields);
    }

    const handleAddFields = () => {
        setInputField([...inputFields, { selectedDate: ' ' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputField(values);
    }


    return (
        <div className="tabel-container">
                <div className="links"> 
                    <li>
                        <a className="active" href="tech">Tech</a>
                    </li>
                    <li>
                        <a href="promo">Promovare</a>
                    </li>
                    <li>
                        <a href="rep">Reprezentare</a>
                    </li>
                    <li>
                        <a href="hr">HR</a>
                    </li>
                
                </div>
            <table className="table" id="table-to-xls"> 
                <thead>
                    <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Numar perioade active</th>
                        <th>Numar de telefon</th>
                        <th>Adresa de mail institutionala</th>
                    </tr>
                
                </thead> 
                         
                <tbody>
                    {inputFields.map((inputField, index,member)=>(
                        <tr style={{color:getColor(member.activitate)}}
                            onChange={event=>handleChangeInput(index,event)}>
                            <td>Mihalache</td>
                            <td>Andrei</td>
                            <td>1</td>
                            <td>073542935</td>
                            <td>ceva19@stud.ase.ro</td>
                            <IconButton
                                onClick={()=>handleRemoveFields(index)}
                            >
                                {index===0?(
                                    <></>
                                ):(
                                    <RemoveIcon/>
                                )} 
                            </IconButton>

                            <IconButton
                                onClick={()=>handleAddFields()}
                            >
                                <AddIcon/>
                             </IconButton>
                        </tr>
                    ))}
                        
                </tbody> 
            </table>
            <div className="save-button">
                <button onClick={handleSubmit}> save changes</button>
            </div>


            <div className="xls-button">
                <ReactHTMLTableToExcel
                    id="xls-button"
                    className="download"
                    table="table-to-xls"
                    filename="Tabel_activ"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"
                />
            </div>


        </div>
    )
}

export default Tech