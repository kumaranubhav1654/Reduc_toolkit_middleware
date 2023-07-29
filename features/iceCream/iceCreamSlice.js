const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions =require('../cake/cakeSlice').cakeActions

const initialIcecreamState={
    numofIcecream:10
}

const icecreamSlice=createSlice({
    name:'iceCream',
    initialState:initialIcecreamState,
    reducers:{
        ordered:(state,action)=>{
            state.numofIcecream-=action.payload
          },
        restocked:(state,action)=>{
              state.numofIcecream+=action.payload
          },
    },                
    //In case of Buying 1 cake 1 free iceCream
    // extraReducers:{                                 //Method 1   
    //     ['cake/ordered']:(state)=>{
    //      state.numofIcecream--
    //     }  
    //   }

    extraReducers:(builder)=>{                        //Method 2
     builder.addCase(cakeActions.ordered,state=>{
        state.numofIcecream--
     })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamAction = icecreamSlice.actions