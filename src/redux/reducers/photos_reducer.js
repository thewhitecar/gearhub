const noImage = require('./none.png')

const initialState = {
photos1: noImage,
photos2: noImage,
photos3: noImage,
photos4: noImage
}

const UPDATE_PHOTO1 = "UPDATE_PHOTO1"
const UPDATE_PHOTO2 = "UPDATE_PHOTO2"
const UPDATE_PHOTO3 = "UPDATE_PHOTO3"
const UPDATE_PHOTO4 = "UPDATE_PHOTO4"

function reducer(state=initialState, action){
switch (action.type){
  case UPDATE_PHOTO1:
  return {...state, photos1: action.payload}
  case UPDATE_PHOTO2:
  return {...state, photos2: action.payload}
  case UPDATE_PHOTO3:
  return {...state, photos3: action.payload}
  case UPDATE_PHOTO4:
  return {...state, photos4: action.payload}
  default: 
  return state;
}
}

export function update_photo1(photo1URL) {
return {
type: UPDATE_PHOTO1,
payload: photo1URL
};
}

export function update_photo2(photo2URL) {
return {
type: UPDATE_PHOTO2,
payload: photo2URL
};
}

export function update_photo3(photo3URL) {
  return {
  type: UPDATE_PHOTO3,
  payload: photo3URL
  };
  }

export function update_photo4(photo4URL) {
return {
type: UPDATE_PHOTO4,
payload: photo4URL
};
}


export default reducer;