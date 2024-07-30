import axios from 'axios'
import React, { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useLocation } from 'wouter'

const UseContext = createContext()

const UserProvider = ({ children }) => {
    const [location, setLocation] = useLocation()
    const [user, setUser] = useState(null)
    const [report, setReport] = useState([])
    const [myreports, setMyReports] = useState([])
    const [create, setCrete] = useState([])


    const login = async (user_name, password) => {
        try {
            const res = await axios.post('http://localhost:3400/login', { user_name, password })
            localStorage.setItem("token", res.data.token)
            const token = localStorage.getItem('token')
            const decoded = jwtDecode(token)
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

    const register = async (name, last_name, user_name, password, rol_id, departamento) => {
        try {
            const res = await axios.post('http://localhost:3400/register', { name, last_name, user_name, password, rol_id, departamento })
            setCrete(prevCreate => [...prevCreate, res.data]);
            return res.data;
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

    const allReports = async () => {
        try {
            const token = localStorage.getItem('token')
            const report = await axios.get('http://localhost:3400/reports', { headers: { Authorization: `Bearer ${token}` } })
            setReport(report.data)
        } catch (error) {
            console.error(error)
            setReport([])
        }
    }

    const createReport = async (reportData) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
            const response = await axios.post('http://localhost:3400/createReports', reportData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCrete(prevCreate => [...prevCreate, response.data]);
            return response.data;
        } catch (error) {
            console.error("Error creating report:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
            }
            throw error;
        }
    }

    const myReports = async () => {
        try {
            const token = localStorage.getItem('token')
            const result = await axios.get('http://localhost:3400/myreports', { headers: { Authorization: `Bearer ${token}` } })
            return setMyReports(result.data)
          } catch (error) {
            console.error(error)
            setMyReports([])
          }
    }

    return (
        <UseContext.Provider value={{ report, create, myreports, user, location, setCrete, register, setCrete, setReport, login, logout, allReports, createReport, myReports }} >
            {children}
        </UseContext.Provider>
    )
}

export { UseContext, UserProvider }
