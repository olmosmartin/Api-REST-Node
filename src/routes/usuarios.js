const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()

router.get('/api/usuarios',async(req, res)=>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios= await respuesta.json()
    res.send(usuarios)
})

module.exports=router;