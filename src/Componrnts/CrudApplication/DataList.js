import React from 'react'

function DataList() {
    const array = ["Irfan","Imran","Darshan"];


    const Remove = (i) =>{
        array.pop(i)
    }



  return (
    <div>
        <form>
            <input type= "text" placeholder='Enter Name' name='name' />
            <button type= "submit"> Add </button>
        </form>


        {
            array.map((curEl,index) =>{
                return(
                    <div key={index}>
                        {
                            curEl
                        }
                        <button onClick={() =>Remove(index)}>  Remove </button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default DataList