import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';
import e from 'express';

const app = express();
app.use(express.json())

const PORT = process.env.PORT;




app.post('/exercises', async (req, res)=> {

    try{
    const {name, reps, weight, unit, date}= req.body;
    const exercise= await exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)

    res.status(201)
    res.send(exercise)
    } catch {
        res.status(400)
        res.send({"Error": "Invalid request"})
    }
})




app.get('/exercises', asyncHandler(async (req, res)=> {
try{
    const filt = req.query
    const allExercises= await exercises.findExercises(filt)
    
    res.send(allExercises)
} catch {
    res.status(400)
    res.send({"Error": "Invalid request"})
}


}))




app.get('/exercises/:id', asyncHandler(async (req, res)=> {


    const filter = req.params.id

    const exercise= await exercises.findExerciseById(filter)
    if(typeof(exercise)=== 'undefined' || exercise=== null){
        res.status(404)
        res.send({"Error": "Exercise not found"})
        return
    }
    res.send(exercise)

   

  
}))




app.put('/exercises/:id', asyncHandler(async (req, res)=> {
try{
    const filter = req.params.id
    const body= req.body;

    const exercise= await exercises.updateExercise(filter,body)
    
    res.send(exercise)
} catch {
    res.status(400)
    res.send({"Error": "Invalid request"})  }
}))




app.delete('/exercises/:id', asyncHandler(async (req, res)=> {
try{
    const filter = req.params.id
    const exercise= await exercises.deleteExerciseByID(filter)

    res.status(204)
    res.send(exercise)
   
}catch { 
    res.status(404)
    res.send({"Error": "Invalid request"})}
}))

app.listen(PORT, async () => {
    await exercises.connect(false)
    console.log(`Server listening on port ${PORT}...`);
});
