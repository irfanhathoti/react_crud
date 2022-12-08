const initialvalue = [
    {
        "Id": "1",
        "Name": "Yogesh",
        "Age": "21",
        "Course": "MERN",
        "Batch": "March"
    },
    {
        "Id": "2",
        "Name": "Irfan",
        "Age": "23",
        "Course": "MERN",
        "Batch": "May"
    },
    {
        "Id": "3",
        "Name": "Imran",
        "Age": "22",
        "Course": "MERN",
        "Batch": "July"
    },
]
const handleMyCounter = (state = initialvalue, action) => {

    switch (action.type) {
        case "ADD_DATA":
            return [...state, action.data]
        case "UPDATE_DATA":
            const Update = state.map((value) => value.Id == action.payload.Id ? action.payload : value)
            const newData = Update
            return newData
         
        case "REMOVE":
            const remove = state.filter((value) =>value.Id!==action.payload)
            return remove

        default:
            return state
    }

}

export default handleMyCounter