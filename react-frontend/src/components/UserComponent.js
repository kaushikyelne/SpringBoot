import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

const UserComponent = () => {

    const [users, setUser] = useState([]);

    // componentDidMount(){

    //     UserService.getUsers().then((response)=>{
    //         console.log(response);
    //         this.setState({users: response.data})
    //     });
    // }

    useEffect(()=>{
        UserService.getUsers().then((response)=>{
            setUser(response.data);
        });
    },[]);

    return(
        <div>
            <h1 className = "text-center"> users List</h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td> User Id</td>
                        <td> User First Name</td>
                        <td> User Last Name</td>
                        <td> User Email Id</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserComponent