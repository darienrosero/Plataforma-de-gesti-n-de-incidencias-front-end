import axios from 'axios'
import React, { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useLocation } from 'wouter'

const UseContext = createContext()

const UserProvider = ({ children }) => {
    const [location, setLocation] = useLocation()
    const [user, setUser] = useState(null)
    const [report, setReport] = useState([])


    const login = async (user_name, password) => {
        try {
            const res = await axios.post('http://localhost:3400/login', { user_name, password })
            localStorage.setItem("token", res.data.token)
            const token = localStorage.getItem('token')
            const decoded = jwtDecode(token)
            console.log(decoded.rol)
            if (decoded.rol === 1) {
                setLocation('/dashboard/admin')
            } else {
                setLocation('/dashboard/user')
            }
        } catch (error) {
            if (error.response) {
                console.error('Error de respuesta del servidor:', error.response.data);
            } else if (error.request) {
                console.error('No se recibió respuesta del servidor:', error.request);
            } else {
                console.error('Error al configurar la solicitud:', error.message);
            }
        }


    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setLocation('/')
      };

    const allReports = async () => {
        try {
            const token = localStorage.getItem('token')
            const report = await axios.get('http://localhost:3400/reports', { headers: { Authorization: `Bearer ${token}` } })
            console.log(report)
            return setReport(report.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <UseContext.Provider value={{ login, logout, allReports }} >
            {children}
        </UseContext.Provider>
    )
}

export { UseContext, UserProvider }
