/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/

const appReducer = ( state, action ) => {
  switch( action.type ) {
      case 'DELETE_FLAVOR':
          return state.filter( item => ( item.flavor !== action.flavor ))
      default:
         return state;
  }
}

const result = appReducer(
    [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }],
    {type:'DELETE_FLAVOR',flavor:'Chocolate'});
 
console.log(result)