import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../../actions/actions";
import Person from "./Person";

class AddPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };
  }

  nameChangeHandler(e) {
    this.setState({
      name: e.target.value,
    });
  }

  ageChangeHandler(e) {
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    const personsUI = this.props.persons.map((person) => {
      return (
        <Person
          clicked={() => this.props.onDeletePerson(person.id)}
          key={person.id}
          name={person.name}
          age={person.age}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => this.nameChangeHandler(e)}
          value={this.state.name}
        />
        <input
          type="age"
          placeholder="Age"
          onChange={(e) => this.ageChangeHandler(e)}
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.onAddPerson(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
        {personsUI}
      </div>
    );
  }
}

// Props mapStateToProps
const mapStateToProps = (state) => {
  return { persons: state.personReducer.persons };
};

// Dispatcher mapDispatcherToProps
const mapDispatcherToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) =>
      dispatch({ type: ActionTypes.ADDPERSON, data: { name: name, age: age } }),
    onDeletePerson: (id) =>
      dispatch({ type: ActionTypes.REMOVEPERSON, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(AddPerson);
