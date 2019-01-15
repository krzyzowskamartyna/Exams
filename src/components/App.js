import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExam, deleteExam, clearExams } from '../actions';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }
    addExam() {
        this.props.addExam(this.state.text, this.state.dueDate);
    }
    deleteExam(id) {
        this.props.deleteExam(id)
    }

    renderExams() {
        const { exams } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    exams.map(exam => {
                        return (
                            <li key={exam.id} className="list-group-item">
                                <div className="list-item">
                                    <div>    {exam.text}  </div>
                                    <div><em>{moment(new Date(exam.dueDate)).fromNow()}
                                    </em></div>
                                </div>
                                <div
                                    className="list-item btn-delete"
                                    onClick={() => this.deleteExam(exam.id)}
                                >&#x2715;</div>

                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        console.log('props', this.props)
        return (
            <div className="App">
                <div className="title">
                    <h1>Do not forget about exams!</h1>
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Next exam is ..."
                            onChange={e => this.setState({ text: e.target.value })}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={e => this.setState({ dueDate: e.target.value })}
                        />

                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addExam()}
                    >
                        Add</button>
                </div>
                {this.renderExams()}
                <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearExams()}
                >
                    Clear All</div>
            </div>
        )
    }
}

function mapStateProps(state) {
    return {
        exams: state
    }
}
export default connect(mapStateProps, { addExam, deleteExam, clearExams })(App);