import React,{useState} from 'react'
import './tabel.scss'
import data from './data.json'

function Tabel() {
    
    const[members, setMembers]=useState(data);

    return (
        <div className="tabel-container">

                <div className="links"> 
                    <a href="tech">Tech</a>
                    <a href="promo">Promovare</a>
                    <a href="rep">Reprezentare</a>
                    <a href="hr">HR</a>
                </div>
            <table id="table-to-xls">
                <thead>
                    <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Numar perioade active</th>
                        <th>Numar de telefon</th>
                        <th>Adresa de mail institutionala</th>
                        <th>Platforme</th>
                    </tr>
                </thead> 

                <tbody>
                    {members.map((member)=>
                        <tr>
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
            
            <div className="excel-button">
                <button> export as excel</button>
            </div>
            
        </div>
    )
}

export default Tabel
