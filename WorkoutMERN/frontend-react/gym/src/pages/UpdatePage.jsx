import { useState } from "react";
import { useNavigate} from "react-router-dom";




function UpdatePage({exerciseToEdit}) {
    
const [name, setName] = useState(exerciseToEdit.name);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

   const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = { name, weight, reps, unit, date };
        const response = await fetch(
            `/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedExercise)
            }
        );
        if (response.status === 200) {
            alert("Successfully edited the exercise!");
            navigate('/');
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        
    };

    return(
        <div>
            <form>
                <fieldset>
                    <legend>Edit Exercise</legend>
                    <label>
                        Exercise Name:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Weight:
                        <input
                            type="number"
                            value={weight}
                            onChange={e => setWeight(e.target.valueAsNumber)}
                            min="0"
                        />
                    </label>
                    <br />
                    <label>
                        Reps:
                        <input
                            type="number"
                            value={reps}
                            onChange={e => setReps(e.target.valueAsNumber)}
                            min="0"
                        />
                    </label>
                    <br />
                    <label>
                        Unit:
                        <input
                            type="text"
                            value={unit}
                            onChange={e => setUnit(e.target.value)}
                             placeholder="lbs, kgs, miles or km"
                            list="units"
                        />
                    </label>
                    <datalist id="units">
                                <option value="lbs" />
                                <option value="kgs" />
                                <option value="miles" />
                                <option value="km" />
                            </datalist>
                    <br />
                    <label>
                        Date:
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </label>    
                </fieldset>

         

            </form>

            <button onClick={editExercise}>Edit Exercise</button>
        </div>
    );


}
export default UpdatePage;