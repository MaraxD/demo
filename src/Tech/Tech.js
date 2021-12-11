import React,{useState,Fragment,useEffect} from 'react'
//import {NavLink} from 'react-router-dom' //eroare-path changed
import data from './data.json'
import { nanoid } from "nanoid";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './tech.scss'
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';


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
    
    const[members, setMembers]=useState(data);

    useEffect(()=> {
        const text = localStorage.getItem("user");
        if(text)
         {
          setMembers (JSON.parse(text));
         }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(members));
    }, []);

    const[addFormData,setAddFormData]=useState({
        nume:'',
        prenume:'',
        activitate:'',
        nr_tel:'',
        mail:''
    })

    const [editFormData, setEditFormData] = useState({
        nume: "",
        prenume: "",
        activitate: "",
        nr_tel: "",
        mail: "",
    });
    
    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
    }; 
    
    const handleEditClick = (event, member) => {
        event.preventDefault();
        setEditMemberId(member.id);
    
        const formValues = {
          nume: member.nume,
          prenume: member.prenume,
          activitate: member.activitate,
          nr_tel: member.nr_tel,
          mail: member.mail,
        };
    
        setEditFormData(formValues);
    };

    const [editMemberId, setEditMemberId] = useState(null);

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
            id: nanoid(),
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

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedMember = {
          id: editMemberId,
          nume: editFormData.nume,
          prenume: editFormData.prenume,
          activitate: editFormData.activitate,
          nr_tel: editFormData.nr_tel,
          mail: editFormData.mail,
        };
    
        const newMembers = [...members];
    
        const index = members.findIndex((member) => member.id === editMemberId);
    
        newMembers[index] = editedMember;
    
        setMembers(newMembers);
        setEditMemberId(null);
    };

    const handleCancelClick = () => {
        setEditMemberId(null);
    };


    const handleDeleteClick = (memberId) => {
        const newMembers = [...members];
    
        const index = members.findIndex((member) => member.id === memberId);
    
        newMembers.splice(index, 1);
    
        setMembers(newMembers);
    };

    return (
        <div className="tabel-container">
            <form onSubmit={handleEditFormSubmit}>
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
                                //<tr style={{color:getColor(member.activitate)}}>
                                <Fragment>
                                    {editMemberId === member.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick} />
                                    ) : (

                                    <ReadOnlyRow member={member}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick} />
                                    )}
                                </Fragment>
                            //</tr>
                        ))}
                            
                    </tbody> 
                </table>
            </form>
                

           
            <h3>Adauga un membru nou</h3>
           
            <form onSubmit={handleAddFormSubmit}>
            <div className="membru-buton">
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
                </div>  
                
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