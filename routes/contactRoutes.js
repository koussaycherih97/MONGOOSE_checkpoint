const express = require('express')
const router = express.Router()
const Contact = require('../models/contactSchema')

// POST METHOD //

router.post('/users', async (req,res) => {
    try {
        const newContact = new Contact(req.body) 
        await newContact.save()
        res.status(200).json({ msg:'contact added' , newContact })
    }  catch (err) { res.status(500).json( { msg:err.message } )}
})

// GET METHOD //

router.get('/users', async (req,res) => {
    try {
        const newContact = await Contact.find()
        res.status(200).json({ msg:"success", newContact})
    } catch (err) { res.status(500).json({msg: err.message})}
})


// GET ONE METHOD //

router.get('/users', async (req,res) => {
    try {
        const newContact = await Contact.findOne(req.body.name)
        res.status(200).json({ msg:"success", newContact})
    } catch (err) { res.status(500).json({msg: err.message})}
})

// GET BY ID METHOD //

router.get('/users:id', async (req,res) => {
    try {
        const newContact = await Contact.findById(req.params.id)
        if (!newContact) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({ msg:"success", newContact})
    } catch (err) { res.status(500).json({msg: err.message})}
})

// UPDATE METHOD //

router.put('/users:id', async (req,res) => {
    try {
        const newContact = await Contact.findByIdAndUpdate({_id : req.params.id}, {...req.body})
        if (!newContact) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({ msg:"contact updated", newContact:{...newContact,...req.body}})
    } catch (err) { res.status(500).json({msg: err.message})}
})

// DELETE METHOD //

router.delete('/users:id', async (req,res) => {
    try {
        const newContact = await Contact.findByIdAndDelete(req.params.id)
        if (!newContact) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({ msg:"contact deleted", newContact})
    } catch (err) { res.status(500).json({msg: err.message})}
})



module.exports = router