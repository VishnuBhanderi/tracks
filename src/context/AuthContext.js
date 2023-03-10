import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email an password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up is fails, we probably need to reflect an error message somewhere
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    //somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signup, signout},
    { isSingnedIn: false,}
    );
