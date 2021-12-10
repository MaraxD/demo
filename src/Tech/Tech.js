import React,{useState} from 'react'
import {nanoid} from 'nanoid';
//import {NavLink} from 'react-router-dom' //eroare-path changed
import data from './data.json'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './tech.scss'
import  IconButton  from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Axios } from 'axios';
//import { api } from '../api/api';

const getColor=(activitate)=>{
    if(activitate<2) return 'red';
    return ' ';
};


var axios = require('axios');
var Data = '';

var config = {
  method: 'get',
  url: 'http://localhost:64975/api/Member',
  Data : Data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.Data));
})
.catch(function (error) {
  console.log(error);
});

const Tech=()=> {
    
    const url="http://localhost:64975/api/Member"
    const[members, setMembers]=useState(data);
    const[addFormData,setAddFormData]=useState({
        nume:'',
        prenume:'',
        activitate:'',
        nr_tel:'',
        mail:''
    })

    const handleAddFormChange=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute('name');
        const fieldValue=event.target.value;

        const newFormData={...addFormData};
        newFormData[fieldName]=fieldValue;

        setAddFormData(newFormData);
    };
    
    const handleAddFormSubmit = (event) => {
        event.preventDefault(); //prevents a post request

        const newMember={
            nume:addFormData.nume,
            prenume:addFormData.prenume,
            activitate:addFormData.activitate,
            nr_tel:addFormData.nr_tel,
            mail:addFormData.mail
        };

        const newMembers=[...members, newMember];
        setMembers(newMembers);

        // Axios.post(url,{
        //     nume:members.nume,
        //     prenume:members.prenume,
        //     activitate:members.activitate,
        //     nr_tel:members.nr_tel,
        //     mail:members.mail,
        // })
        // .then(res=>{
        //     console.log(res.members)
        // })
        
        console.log("membrii",newMembers);
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
                    {members.map((member,index)=>(
                            <tr style={{color:getColor(member.activitate)}}>
                            <td>{member.nume}</td>
                            <td>{member.prenume}</td>
                            <td>{member.activitate}</td>
                            <td>{member.nr_tel}</td>
                            <td>{member.mail}</td>
                            <IconButton
                                // onClick={()=>handleRemoveFields(index)}
                            >
                                {index===0?(
                                    <></>
                                ):(
                                    <RemoveIcon/>
                                )}  
                            </IconButton>

                            <IconButton
                                // onClick={()=>handleAddFields()}
                            >
                                <AddIcon/>
                             </IconButton>
                        </tr>
                        ))}
                        
                </tbody> 
            </table>

            <h3>Adauga un membru nou</h3>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="nume"
                    required="required"
                    placeholder="Nume"
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="prenume"
                    required="required"
                    placeholder="Prenume"
                    onChange={handleAddFormChange}
                />

                <input
                    type="text"
                    name="activitate"
                    required="required"
                    placeholder="Activitate"
                    onChange={handleAddFormChange}
                />
        
                <input
                    type="text"
                    name="nr_tel"
                    required="required"
                    placeholder="Numar de telefon"
                    onChange={handleAddFormChange}
                />
        
                <input
                    type="text"
                    name="mail"
                    required="required"
                    placeholder="Email"
                    onChange={handleAddFormChange}
                />
                <div className="save-button">
                    <button
                     type="submit">Adauga</button>
                </div>  
            </form>


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

export default Tech;