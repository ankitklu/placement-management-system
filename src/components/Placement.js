import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Placement() {
    
    const [result, setResult] = useState(null);

    function handleDelete(event){
        alert(event.currentTarget.getAttribute("student"))
        axios.delete('http://localhost:8081/delete', {params:{
            "id": event.currentTarget.getAttribute("student")
        }}).then((response)=>{
            console.log(response.data);
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8081/display')
            .then((response) => {
                console.log(response.data);
                setResult(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure it runs only once on component mount

    if (result === null) {
        return (
            <div>
                The placement data is null;
            </div>
        );
    } else {
        return (
            <div>
                The user data is given below <br />
                <table border="1">
                    <tr>
                        <th>Student Id:</th>
                        <th>Student Name</th>
                        <th>Placement Status</th>
                        <th>Company Name</th>
                        <th>CTC</th>
                        <th>Delete button</th>
                    </tr>
                    {result.map((user) => (
                        <tr key={user.sid}>
                            <td>{user.sid}</td>
                            <td>{user.sname}</td> {/* Fix the typo here (should be 'sname' instead of 'snmae') */}
                            <td>{user.pstatus}</td>
                            <td>{user.scompany}</td>
                            <td>{user.sctc}</td>
                            <td><button onClick={handleDelete} student={user.sid}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }  
}
