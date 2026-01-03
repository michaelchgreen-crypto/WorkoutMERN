
import ExerciseTable from "../components/ExerciseTable";

import { Link } from "react-router-dom";

import{ useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";

function RetrievePage({setExerciseToEdit}) {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const data = await response.json();
    setExercises(data);
  }
  useEffect(() => {
    loadExercises();
  }, []);


    const onDelete = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, 
            {method: 'DELETE'}
        );
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        }
        else {
        alert(`Failed to delete exercise, status code = ${response.status}, ${_id}`);
        }
}

    const onEdit = async (exercise) => {
        setExerciseToEdit(exercise);
        navigate('/update')

    }

  return (
        <>
        <h2>List of Exercises</h2>
        <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit} />
        <Link to="/create">Create New Exercise</Link>
        </>
  );
}

export default RetrievePage;    