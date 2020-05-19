//function to create a store:

function createStore() {

  // The store must have 4 parts:
  // 1. Contain the State (just create variable to to that)
  let state;

  // 2. Get the state. create function that just returns state
  const getState = () => state
  // 3. Listen to changes on the state. 
  // 4. Update the state.

  //#2 continued:  This return statment exposed the getState() function
  return (
    getState
  )

}