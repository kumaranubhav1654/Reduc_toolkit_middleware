const createSlice =require('@reduxjs/toolkit').createSlice

const initialCakeState={
    numOfCakes:10,
}

const cakeSlice= createSlice({
    name:'cake',
    initialState:initialCakeState,
    reducers:{
        ordered:(state,action)=>{
          state.numOfCakes-=action.payload
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload
          },
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions
