export  const AddData = (data) =>{
    return{
        type:"ADD_DATA",
        payload:data
    }
}

export const Updtate = (data) =>{
    return{
        type:"UPDATE_DATA",
        payload:data
    }
}

  
export const Remove = (id) =>{
    return {
        type:"REMOVE",
        payload:id
    }
}