const express = require('express')
const router = express.Router()

const peliculas=require('../sample.json')

router.get('/api/peliculas',(req, res)=>{
    res.json(peliculas)
})

router.post('/api/peliculas',(req, res)=>{
    //console.log(req.body);
    const {titulo, director, mas_cosas}=req.body;
    //pruebo q no falte nada
    if(titulo && director && mas_cosas){
        const id = peliculas.length + 1;
        const nuevaPelicula= {...req.body, id};
        peliculas.push(nuevaPelicula);

        res.send(peliculas);
    }else{
        res.status(500).json({error:"hubo un error"});
    }
})

router.put('/api/peliculas/:id',(req, res)=>{
    let { id} = req.params;
    const {titulo, director, mas_cosas}=req.body;
    //pruebo q no falte nada
    if(titulo && director && mas_cosas){
        peliculas.forEach(pelicula => {
            if(pelicula.id == id){
                pelicula.titulo=titulo;
                pelicula.directo=director;
                pelicula.mas_cosas=mas_cosas;
            }
        });
        res.send(peliculas);
    }else{
        res.status(500).json({error:"hubo un error"});
    }
})

router.delete('/api/peliculas/:id',(req, res)=>{
    //con req.params tomo el :id de arriba
    let { id} = req.params;
    peliculas.forEach(pelicula => {
        if(pelicula.id == id){
            peliculas.splice(id -1, 1)
        }
    });
    res.send(peliculas);
})

module.exports=router;