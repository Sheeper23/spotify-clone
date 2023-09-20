"use client"

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
    return <Toaster toastOptions={{
        style: {
            background: 'black',
            color: 'white',
            userSelect: 'none'
        }
    }} />
}