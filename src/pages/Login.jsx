import React, { useEffect, useState } from 'react'

import LoginForm from '../components/LoginForm'

import { getUsuario } from '../helpers/rutaUsuarios'

const Login = (props) => {
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState([])

    useEffect(() => {
        // const logOut = () => {
        //     setUsuario([])
        //     localStorage.setItem('usuario', JSON.stringify([]))

        // }
    }, [])

    useEffect(() => {
        getUsuario(user.correo).then(datos => {
            setUserData(datos)
            localStorage.setItem('usuario', JSON.stringify(datos))

        })

    }, [user])

    useEffect(() => {

        if (userData.length > 0) {
            props.history.push('/')
        }


    }, [userData])



    return (
        <div className="container mt-5">
            <div className="row text-center mb-3">
                <div className="col">
                    <h3>Iniciar Sesión</h3>

                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-4">
                    <p className="text-center">Ingresa tu correo electrónico</p>

                    <LoginForm setUser={setUser} />

                    <div className="text-center text-muted mt-4">
                        <span >
                            Al continuar con tu correo aceptas los términos y condiciones y el aviso de privacidad.
                   </span>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login