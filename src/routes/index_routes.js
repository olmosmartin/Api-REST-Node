const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    const datos = {
        "nombre":"martin",
        "datos":"algo(?"
    }
    res.json(datos)
})

module.exports=router;