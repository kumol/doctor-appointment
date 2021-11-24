// import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Grid from "@material-ui/core/Grid";
import { Box, Button, TextField } from '@material-ui/core';
import { useState } from "react";
import classes from "../styles/addgroupexpense.module.css";
import axios from "axios";
const AddGroupExpense = () => {
    let [cost, setCost] = useState(0);
  let [details, setDetails] = useState("");
  let [isValid, setIsValid] = useState(true);
  const onChangeHandler = (event)=>{
    event.preventDefault();
    if(event.target.name == "cost") {
      setCost(+event.target.value);
      isValidate("cost", +event.target.value);
    } else {
      setDetails(event.target.value);
      isValidate("details", +event.target.value);
    }
  }
  const onSave = async(event)=> {
    event.preventDefault();
    let body = {
        "user": 1,
        "spentMoney": cost,
        "details": details,
        "group": 1
    }
    let response = await axios.post('http://localhost:5000/group-expense/', body);
    console.log(response);
  }
  const isValidate = (target, value) => {
    if(target=="cost"){
      return setIsValid(!(value > 0 && details != ""));
    }else{
      return setIsValid(!(cost > 0 && value != ""));
    }    
  }
  return (
    <div className='row d-flex' className={classes.backg}>
      <div className="container">
        <div className="row pt_20px">
          <div className="col-md-3 pb_20px" >
            Add area
          </div>
          <div className="col-md-6 pb_20px">
            <div className='row pb_20px'> 
              <div className='col-md-6 pb_20px'>
                <TextField
                  label="Cost"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  name='cost'
                  onChange={onChangeHandler}
                  value = {cost}
                  fullWidth
                  id="margin-none"
                />
              </div>
              <div className='col-md-6'>
                <TextField
                  id="outlined-textarea"
                  variant="outlined"
                  label="Details"
                  placeholder="Details"
                  multiline
                  size="small"
                  name='details'
                  onChange={onChangeHandler}
                  value={details}
                  fullWidth
                  id="margin-none"
                />
              </div>
            </div>
            <div className='row' >
              <div className={classes.button_center}>
                <Button disabled={isValid} variant="contained" size="small" onClick={onSave}>Submit</Button></div>
            </div>
          </div>
          <div className="col-md-3 pb_20px" >
            add area
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddGroupExpense;