const express = require('express');
const router = express.Router();
const fs = require('fs')
const loadplaces = fs.readFileSync('places.json');
const places = JSON.parse(loadplaces);
router.get('/',(req,res)=>{
    return res.json(places);
})
router.get('/:province',(req,res)=>{
    const provinceParam = req.params.province.toLowerCase();
    const provinces = places.filter(p=>p.province.toLowerCase() === provinceParam);
    if(provinces.length>0){
        return res.json(provinces);
    }else{
        return res.status(400).json({message:'no such place'})
    }

})

router.get('/:location',(req,res)=>{
    const locationParam = req.params.location.toLowerCase();
    const locations = places.filter(p=>p.location.toLowerCase() === locationParam);
    if(locations.length>0){
        return res.json(locations);
    }else{
        return res.send(400).json({message:'no such place'})
    }

})
module.exports = router