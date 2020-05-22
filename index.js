//function to create a store:

function createStore() {

  // The store must have 4 parts:
  // 1. Contain the State (just create variable to to that)
  let state;
  let listeners = []

  // 2. Get the STATE TREE. create function that just returns state
  const getState = () => state


  // 3. Listen to changes on the state. Give users a way to listen to changes
  const subscribe = () => {
    listeners.push( listener )

    // we return to listener a way to unsubscribe:
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  // 4. Update the state. Here are our rules:
  // Only an event can change the state of the store:
  // What is an event? Put events into OBJECTS and call them ACTIONS

  //#2 continued:  This return statment exposed the getState() function
  return (
    getState
    subscribe
  )

}

