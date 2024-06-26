import Event from "../models/event.js"

class EventRepository{
    async create(data){
        const event = new Event(data)
        await event.save()
        return event
    }

    async findAll(){
        return Event.find()
    }
    
    async findById(id){
        return Event.findById(id)
    }

    async updateById(id, data){
        return Event.findByIdAndUpdate(id, data, {new:true})
    }

    async deleteById(id){
        return Event.findByIdAndDelete(id)
    }
}

const eventRepositories = new EventRepository()
export default eventRepositories