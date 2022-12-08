import React from 'react'
import {AddData,Remove} from '../action/CounterAction'
import {useSelector, useDispatch } from 'react-redux'

function Counter() {
    const mystate = useSelector((state) =>state.handleMyCounter)
    const dispatch = useDispatch()
    return (
        <div>
            <div className ="jumbotron">
                <h1 className ="display-4">Hello, world!</h1>
                <p className ="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className ="my-4"/>
                    <p>It uses utility className es for typography and spacing to space content out within the larger container.</p>
                    <p className ="lead">
                        <button onClick={() =>dispatch(AddData())} className ="btn btn-primary btn-lg" href="#" role="button">Plus</button>
                        <input type= "text" value={mystate}  />
                        <button onClick={()=>dispatch(Remove())} className ="btn btn-danger btn-lg" href="#" role="button">Minus</button>

                    </p>
            </div>
        </div>
    )
}

export default Counter