import React,{useState} from "react";

const SignIn = () =>{
    const[user,setUser] = useState({
        name:"",
        email:"",
        number:"",
        work:"",
        password:"",
        cpassword:""
    })
    let name, value;
    const HandleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
        console.log(user)

    }
    // const HandleSubmit = (e)=>{
    //     e.preventDefault()
    //     console.log
    // }
    return(
        <div>
            <h1>Sign In</h1>
            <form  >
                <input type= "text" name="name" id="name" onChange={HandleInput} value={user.name} placeholder="Enter Name"  />
                <br/>
                <input type= "email" name="email" id="email" onChange={HandleInput} value={user.email} placeholder="Enter Your Email"  />
                <br/>
                <input type= "number" name="number" id="number" onChange={HandleInput} value={user.number} placeholder="Enter Your Number"  />
                <br/>
                <input type= "text" name="work" id="work"  onChange={HandleInput} value={user.work} placeholder="Proffession"  />
                <br />
                <input type= "password" name="password" id="password" onChange={HandleInput} value={user.password} placeholder="Enter Your Password"  />
                <br />
                <input type= "password" name="cpassword" id="cpassword" onChange={HandleInput} value={user.cpassword} placeholder="Confirm Your Password"  />
                <br />
            </form>

        </div>
    )
}

export default SignIn