const store = require('./app/store')
const cakeActions =require('./features/cake/cakeSlice').cakeActions
const icecreamActions =require('./features/iceCream/iceCreamSlice').icecreamAction
const fetchUser =require('./features/user/userSlice').fetchUser

console.log("initialState", store.getState())

// const unsubscribe = store.subscribe(()=>{
//     console.log("updatedState", store.getState())   //Redux-logger will take care.
// })

store.dispatch(fetchUser())

// store.dispatch(cakeActions.ordered(3))
// store.dispatch(cakeActions.restocked(5))

// store.dispatch(icecreamActions.ordered(7))
// store.dispatch(icecreamActions.restocked(15))


// unsubscribe()