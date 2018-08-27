const initialState = {
        make: "",
        model: "",
        name: "",
        serial: "",
        condition:"",
        category: "",
        description: ""

}

const UPDATE_MAKE = "UPDATE_MAKE"
const UPDATE_MODEL  = "UPDATE_MODEL"
const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_SERIAL = "UPDATE_SERIAL"
const UPDATE_CONDITION = "UPDATE_CONDITION"
const UPDATE_CATEGORY = "UPDATE_CATEGORY"
const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION"
const RESET_FORM = "RESET_FORM"

function reducer(state=initialState, action){
    switch (action.type){
      case UPDATE_MAKE:
      return {...state, make: action.payload}
      case UPDATE_MODEL:
      return {...state, model: action.payload}
      case UPDATE_NAME:
      return {...state, name: action.payload}
      case UPDATE_SERIAL:
      return {...state, serial: action.payload}
      case UPDATE_CONDITION:
      return {...state, condition: action.payload}
      case UPDATE_CATEGORY:
      return {...state, category: action.payload}
      case UPDATE_DESCRIPTION:
      return {...state, description: action.payload}
      case RESET_FORM:
      return initialState
      default: return state;
    }
  }

export function update_make(make) {
  return {
    type: UPDATE_MAKE,
    payload: make
  };
}

export function update_model(model) {
  return {
    type: UPDATE_MODEL,
    payload: model
  };
}

export function update_name(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function update_serial(serial) {
  return {
    type: UPDATE_SERIAL,
    payload: serial
  };
}

export function update_condition(condition) {
  return {
    type: UPDATE_CONDITION,
    payload: condition
  };
}

export function update_category(category) {
  return {
    type: UPDATE_CATEGORY,
    payload: category
  };
}

export function update_description(description) {
  return {
    type: UPDATE_DESCRIPTION,
    payload: description
  };
}

export function reset_form(){
  return {
    type: RESET_FORM
  }
}

export default reducer;