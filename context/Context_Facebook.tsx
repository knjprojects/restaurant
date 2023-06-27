import React, {createContext, useState, useEffect}from 'react';


let Context = createContext({});

type Props={
    children:any
}
function Provider(props:Props){

   const initialState = {
        userID: false,
        user:undefined,
        loading: true,
        authenticated:false
    }

    const [state,updateState] = useState(initialState)




  return(

    <Context.Provider value={{
        state:state
    }}>

      {props.children}
    </Context.Provider>

  )

}


const Consumer = Context.Consumer;
export {Provider, Consumer, Context}