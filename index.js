//function to create a store:

//  Here are our rules:
// STEP 3 (Continued:)
    // 1. Only an event can change the state of the store:
    // What is an event? Put events into OBJECTS and call them ACTIONS
    // 2.  The function that returns the new state needs to be a pure function to maintain predictability
          //a. a pure function returns the same result if the same arguments are passed in.
          //b. a pure function depends solely on the arguments passed in to them
               //ex.  it does not access global variable
          //c. a pure function does not product side effects.  Ex. no interaction with outside world...no API requests.
//this function is a reducer:  it takes in previous state and an action and reduces it down to a new state.
// a REDUCER MUST BE A PURE FUNCTION.  IT UPDATES STATE OF THE ELEMENT, no the store...
function todos ( state = [], action ) {
  if ( action.type === 'ADD_TODO' ) {
    return state.concat([ action.todo ])
  }

  return state
}




function createStore( reducer ) {

  // The store must have 4 parts:
  // STEP 1. Contain the State (just create variable to to that)
  let state;
  let listeners = []

  // STEP 2. Get the STATE TREE. create function that just returns state
  const getState = () => state


  // STEP 3. Listen to changes on the state. Give users a way to listen to changes
  const subscribe = () => {
    listeners.push( listener )

    // we return to listener a way to unsubscribe:
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // STEP 4. Update the state of the STORE.
  const dispatch = (action) => {
    state = reducer( state, action )
    // inform listeners by looping over listener array:
    listeners.forEach( listener => listener())
  }

  
  //#2 continued:  This return statment exposed the getState() function
  return (
    getState,
    subscribe,
    dispatch,   //dispatch modifies the state in the store
  )

}

