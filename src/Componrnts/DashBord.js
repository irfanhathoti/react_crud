import React, { Component } from 'react'
import DataService from './Services/DataService'
import './Style.css'
class DashBord extends Component {
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }
    componentDidMount() {
        DataService.getDataService().then((res) => {
            this.setState({
                users: res.data
            })
        })
    }
    handleRemove = (id) =>{
        DataService.deleteDataService(id).then((res) =>{
            this.setState({
                users:this.state.users.filter(user =>user!==id)
            })
        })
    }

    render() {
        return (
            <div className='Parent'>
                {
                    this.state.users.map((data, i) => {
                        return (
                            <div className='map-parent' key={i}>
                                <div>
                                    <b>Author: </b>
                                    {data.author}
                                </div>
                                <p>
                                    <b>Title:</b>
                                    {
                                        data.title
                                    }
                                </p>
                                <p>
                                    description:{
                                        data.description
                                    }
                                </p>
                                <p>
                                    Date :<small>
                                        {
                                            data.date
                                        }
                                    </small>
                                </p>
                                <button onClick={()=>{this.handleRemove(data.id)}}> Remove  </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DashBord
