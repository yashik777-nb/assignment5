import * as ActionTypes from "../../actions/actions";

const intialState = {
  persons: [],
};

const personReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.ADDPERSON:
      const personData = {
        id: Math.random(),
        name: action.data.name,
        age: action.data.age,
      };
      return {
        persons: state.persons.concat(personData),
      };
    case ActionTypes.REMOVEPERSON:
      const newPersons = state.persons.filter(
        (person) => person.id !== action.id
      );
      return {
        persons: newPersons,
      };
    default:
      return state;
  }
};

export default personReducer;
