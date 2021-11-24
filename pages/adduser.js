import React,{useEffect, useState} from "react";
import axios from "axios";
// import { useForm } from 'react-hook-form';
const NewUser = () => {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    //const { register, handleSubmit, reset, formState } = useForm(formOptions);
    async function onSubmitForm(event) {
        event.preventDefault();
        let response = await axios.post("http://localhost:5000/",{name,password});
        alert(response.data.body);
        console.log(response.data);
    }
    function valueChanger(event){
        event.preventDefault();
        event.target.name == "password" ? setPassword(event.target.value) : setName(event.target.value);
    }
    return(
        <div>
            <form>
                <label ><b>Name</b></label>
                <input type="text" name="name" value={name} onChange={valueChanger}></input>
                <label ><b>Password</b></label>
                <input type="text" name="password" value={password} onChange={valueChanger}></input>
                <button type="submit" onClick={onSubmitForm}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default NewUser;