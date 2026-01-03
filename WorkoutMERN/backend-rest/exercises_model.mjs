// Get the mongoose object
import mongoose from 'mongoose';
import 'dotenv/config';
import { populate } from 'dotenv';


const EXERCISE_CLASS = 'Exercise';

let connection = undefined;
let Exercise = undefined;
/**
 * This function connects to the MongoDB server.
 */
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        Exercise = createModel();
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

function createModel(){
    const exerciseSchema = mongoose.Schema({
        name:{type: String, required: true},
        reps:{type: Number, required: true},
        weight:{type: Number, required: true},
        unit:{type:String, populate: true, required: true, enum: ['lbs','kgs', 'miles', 'km']},
        date:{type: Date, required: false, default: Date.now}
    })
    return mongoose.model(EXERCISE_CLASS,exerciseSchema);
}

async function createExercise(name, reps, weight, unit, date){
    const exercise =new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date })
    return exercise.save();
}



async function findExercises(filter) {
    const query =Exercise.find(filter);
    return query.exec();

}

async function findExerciseById(id) {

const find =  Exercise.findById(id);
   
return find.exec();
}



async function updateExercise(_id, update) {


     const result = Exercise.findByIdAndUpdate(_id,update)

     return result.exec();
    
    
}

async function deleteExercise(filter){
    const result =await Exercise.deleteMany(filter)
    return result.deletedCount;
}

async function deleteExerciseByID(_id){
    const deleted =await Exercise.deleteOne({_id:_id}).exec()
    return 
}




export { connect, createExercise, findExercises, findExerciseById, updateExercise, deleteExercise, deleteExerciseByID };
