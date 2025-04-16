"use client"

import axios from "axios";
const BASE_URL = "https://yardstickai-backend.onrender.com";
export const publicRequest = axios.create({
    baseURL: BASE_URL
})