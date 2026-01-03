import ExerciseRow from "./ExerciseRow";
import ExerciseHeader from "./ExerciseHeader";

const ExerciseTable = ({exercises,onDelete, onEdit}) => {
    return (
        <table>
            <ExerciseHeader />
            <ExerciseRow exercises={exercises} onDelete={onDelete} onEdit={onEdit} />
        </table>
    );
}

export default ExerciseTable
                