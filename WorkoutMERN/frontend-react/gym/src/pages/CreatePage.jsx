import { useState } from "react";
import { useNavigate} from "react-router-dom";




function CreatePage() {
    
const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [unit, setUnit] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

   const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = { name, weight, reps, unit, date };
        const response = await fetch(
            '/exercises', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newExercise)
            }
        );
        if (response.status === 201) {
            alert("Successfully added the exercise!");
            navigate('/');
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        
    };

    return(
        <div>
            <form>
                <fieldset>
                    <legend>Create Exercise</legend>
                    <label>
                        Exercise Name:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Exercise"
                        />
                    </label>
                    <br />
                    <label>
                        Weight:
                        <input
                            type="number"
                            value={weight}
                            onChange={e => setWeight(e.target.valueAsNumber)}
                            min={0}
                        />
                    </label>
                    <br />
                    <label>
                        Reps:
                        <input
                            type="number"
                            value={reps}
                            onChange={e => setReps(e.target.valueAsNumber)}
                            min={0}
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

            <button onClick={addExercise}>Add Exercise</button>
        </div>
    );


}
export default CreatePage;