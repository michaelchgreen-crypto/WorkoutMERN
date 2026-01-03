

import '../App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import {MdEdit} from "react-icons/md";
const ExerciseRow = ({exercises,onDelete, onEdit}) => {

    return (
       exercises.map((exercises)=>
        <tr>
            <td>
                <MdEdit onClick={e => {e.preventDefault(); onEdit(exercises)}}/>
                {exercises.name}
                </td>
            <td>{exercises.weight}</td>
            <td>{exercises.reps}</td>
            <td>{exercises.unit}</td>
            <td>{exercises.date}</td>   
            <td>
                <FaRegTrashAlt onClick={e => {e.preventDefault(); onDelete(exercises._id)}}/>
                </td>               
        </tr>
       )
    );
   
}

export default ExerciseRow;