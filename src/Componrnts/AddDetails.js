import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Updtate, AddData } from '../action/CounterAction'

function AddDetails() {
    const mystate = useSelector((state) => state.handleMyCounter)
    const dispatch = useDispatch()
    
    const {id} = useParams()

    const [data, setData] = useState({
        Id: "",
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    })
    const HandleInput = (e) => {
        let name = e.target.name;
        let value  = e.target.value

        setData({...data,[name]:value})
        console.log(data)
    }
    const HandleSubmit = (event) =>{
        event.preventDefault()

        if(!id == ""){
            const newData = {...data,Id:id}
            dispatch(Updtate(newData))

        }
        else{
            const newData = {...data,Id: `${mystate.length + 1}`}
            dispatch(AddData(newData))
        }

    }
    return (
        <div>
            <div>
                <form >
                    <div>
                        <input type=" text" name='Name'
                            placeholder='Enter  Name'
                            value={data.Name} onChange = {HandleInput} />
                    </div>
                    <div>
                        <input type="text" name='Age'
                            placeholder='Enter Age'
                            value={data.Age} onChange = {HandleInput} />
                    </div>
                    <div>
                        <input type="text" name='Course'
                            placeholder='Enter Course'
                            value={data.Course} onChange = {HandleInput} />
                    </div>
                    <div>
                        <input type="text" name='Batch'
                            placeholder='Enter Batch'
                            value={data.Batch} onChange = {HandleInput} />
                    </div>
                    <button onClick={HandleSubmit} type="submit"  >Submit</button>
                </form>

            </div>

        </div>
    )
}

export default AddDetails