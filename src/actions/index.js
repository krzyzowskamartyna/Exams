import { ADD_EXAM, DELETE_EXAM, CLEAR_EXAMS } from "../constans";

export const addExam = (text, dueDate) => {
    const action = {
        type: ADD_EXAM,
        text,
        dueDate
    }
    console.log('action', action);
    return action;
}

export const deleteExam = (id) => {
    const action = {
        type: DELETE_EXAM,
        id
    }
    console.log('action', action);
    return action;
}

export const clearExams = () => {
    return {
        type: CLEAR_EXAMS
    }

}