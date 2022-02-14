import React, { useState, useEffect } from 'react'
import GithubUsers from './githubUsers';
import Loading from './loading';


const Api = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <GithubUsers users={users}/>
        </>
    )
}

export default Api
