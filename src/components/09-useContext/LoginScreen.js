import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    return (
        <div>
            <h1>Login screen</h1>
            <hr />
            <button 
                className="btn btn-outline-primary"
                onClick={ () =>
                    setUser({ id:1234, name:'lucho'})
                }
            >
                Login
            </button>
        </div>
    )
}
