import React,{useState} from 'react'
import {NavLink} from 'react-router-dom' //eroare-path changed
import data from './data.json'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './link'
import './tech.scss'


const getColor=(activitate)=>{
    if(activitate<2) return 'red';
    return ' ';
};

function Tabel() {
    
    const[members, setMembers]=useState(data);

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
                    {members.map((member)=>
                        <tr style={{color:getColor(member.activitate)}}>
                            <td>{member.nume}</td>
                            <td>{member.prenume}</td>
                            <td>{member.activitate}</td>
                            <td>{member.nr_tel}</td>
                            <td>{member.mail}</td>
                        </tr>
                    
                    )}
                    
                </tbody> 
            </table>
            <div className="save-button">
                <button> save changes</button>
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

export default Tabel
