'use client'
import axios from 'axios'
const api = axios.create({
    baseURL: 'https://ecoapi-hyjk.onrender.com'
})

export {
    api
}   