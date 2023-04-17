import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <h3>This is home page{user && <span>{user.displayName}</span> }</h3>
        </div>
    );
};

export default Home;