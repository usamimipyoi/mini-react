import { useEffect, useState } from 'react';
import { mockEmployees , addEmployees , deleteEmployee } from './Home';

const shoutTest = () => {
    console.log({mockEmployees})
}

const admin = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [position, setPosition] = useState();

    const [arrayEmployees, setArratEmployees] = useState(mockEmployees);

    useEffect(() => {},[mockEmployees])

    const submitHandler = (firstname,lastname,position) => {
        const addNew = {
            id: mockEmployees.length,
            name: firstname,
            lastname: lastname,
            position: position,
        }
        console.log(addNew)
        addEmployees(addNew);
        console.log(mockEmployees)

        setFirstname('');
        setLastname('');
        setPosition('');
    }

    return (
        <div>
            <div>
                <h4>Create User Here</h4>
                <form action="">
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        placeholder='Name'
                        onChange={(e)=>
                            (setFirstname(e.target.value)
                        )}
                    />
                                        <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        placeholder='Last name'
                        onChange={(e)=>
                            (setLastname(e.target.value)
                        )}
                    />
                    <input 
                        type="text"
                        name="position"
                        id="position"
                        value={position}
                        placeholder='position'
                        onChange={(e)=>
                            (setPosition(e.target.value)
                        )}
                    />
                    <button 
                        type='button' 
                        id='buttonSave'
                        onClick = {
                        () => submitHandler(firstname,lastname,position)
                        }>Save</button>
                    <button 
                        type='button' 
                        onClick={
                        () => shoutTest()
                        }>Test</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEmployees.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td id='deleteButton'>
                            <span 
                            onClick={() =>
                            deleteEmployee(item.id)
                        }>Delete</span></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default admin