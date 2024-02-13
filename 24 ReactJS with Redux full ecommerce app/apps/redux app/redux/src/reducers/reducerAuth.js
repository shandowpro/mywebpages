// Define a new recuder metjod  of Authentication process : 

// Define the main redcuer method [with iniitial value of false  ]  :
export const reducerAuth = (state = {isLog : false}  , action  ) => {
    if (action.type === 'Login') {
        return { isLog : true }
    }

    if (action.type === 'notLogin') {
        return { isLog : false }
    }

    return state ;
}



