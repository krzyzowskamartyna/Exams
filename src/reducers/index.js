import { ADD_EXAM, DELETE_EXAM, CLEAR_EXAMS } from '../constans';
import { bake_cookie, read_cookie } from 'sfcookies';

const exam = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}
const removeById = (state = [], id) => {
    const exams = state.filter(exam => exam.id !== id);
    console.log('new exam', exams);
    return exams;
}
const exams = (state = [], action) => {
    let exams = null;
    state = read_cookie('exams');
    switch (action.type) {
        case ADD_EXAM:
            exams = [...state, exam(action)]
            bake_cookie('exams', exams)
            return exams;
        case DELETE_EXAM:
            exams = removeById(state, action.id);
            bake_cookie('exam', exam)
            return exams;
        case CLEAR_EXAMS:
            exams = [];
            bake_cookie('exams', exams);
            return exams;
        default:
            return state;
    }
}

export default exams;