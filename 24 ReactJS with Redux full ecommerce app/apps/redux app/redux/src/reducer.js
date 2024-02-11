// The main {Reducer} method Definition file :

// Define Reducer method including state wiht assinged value of object + (1) types of actions with 3 values   :
export const reducerCounter = (state = { counter: 0 }, action) => {
  // Define a first action value of  this {Reducer} :
  if (action.type === "INCREMENT") {
    state = state.counter + 1;
  }

  // Define  a second  return of only action in this {Reducer} :
  if (action.type === "DECREMENT") {
    state = state.counter - 1;
  }

  // Define  a third  return of only action in this {Reducer} :
  if (action.type === "RESET") {
    state = 0;
  }

  // Define the default value of the action of  this  {Reducer}   :
  return state;
};
