import eventRepositories from "../repositories/eventRepositories.js"



export async function createEvent(req,res){ 
    try{
        const savedEvent = await eventRepositories.create(req.body)
        res.status(201).json({
            savedEvent
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

export async function getAllEvents(req,res){
    try{
        const events = await eventRepositories.findAll()
        res.status(200).json(events)
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

export async function getById(req,res){
    try{
        const event = await eventRepositories.findById(req.params.id)
        res.status(200).json(event)
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

export async function updateEvent(req,res){
    try{
        const event = await eventRepositories.updateById(req.params.id, req.body)
        res.status(200).json(event)
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

export async function deleteEvent(req,res){
    try{
        const event = await eventRepositories.deleteById(req.params.id)
        res.status(200).json(event)
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}