// The First  {Reducer}  method [reducerCounter] Definition file :
// allocataed for  the [counter] appliation :


// Define Reducer method including state wiht assinged value of object + (1) types of actions with 3 values   :
export const reducerCounter = (state = { counter: 0 }, action) => {
  // Define a first action type's value of  this {Reducer} :
  if (action.type === "INCREMENT") {
    return {
      // assign a new value of prop name of the state prop [+1] inside the conditional return [of action's type value = 'INCREMENT'] :
      counter : state.counter + 1
    } 
  }

  // Define  a second  return of only action type's value  in this {Reducer} :
  if (action.type === "DECREMENT") {
    return {
      // assign a new value of prop name of the state prop [-1] inside the conditional return [of action's type value = 'DECREMENT'] :
      counter : state.counter - 1
    } 
  }

  // Define  a third  return of only action type's value in this {Reducer} :
  if (action.type === "RESET") {
    return {
      // assign a new value of prop name of the state prop [0] inside the conditional return [of action's type value = 'RESET'] :
      counter : 0 
    }  
  }

  // assign the default value of the action's  type of  this  {Reducer} [incsae of NO  action's type value called ]    : 
  return state;
};
