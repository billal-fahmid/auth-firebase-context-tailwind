import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Header = () => {

   

    const { user,logOut } = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then(()=>{
            console.log('logOut Successfully')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div>

            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth-Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
                { user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">Sign-Out</button>
                        </>
                        : <Link to='/login'>Login</Link>
                }
            </div>


        </div>
    );
};

export default Header;