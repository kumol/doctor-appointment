import React, {Component} from "react";
import { Box, Button, TextField } from '@material-ui/core';
class Orders extends Component {
    // state = {
    //     orders:[{
    //         id:"dkfksfa",
    //         ingredients:{
    //             salad:2
    //         },
    //         price:6.4
    //     }],
    //     isLoading:true
    // }
    // componentDidMount(){
    //     axios.get("/orders.json").then(res=>{
    //         let ordersData=[]
    //         for(let key in res.data){
    //             ordersData.push({
    //                 ...res.data[key],
    //                 id:key
    //             });
    //         }
    //         this.setState({
    //             orders:ordersData,
    //             isLoading:false
    //         })
    //     }).catch(err=>{
    //         this.setState({
    //             isLoading:false
    //         })
    //     })
    // }
    render(){
        // const order = this.state.isLoading ? <Spinner/>: this.state.orders.map(order=>{
        //     return(
        //         <Order order={order} key={order.id}/>
        //     )
        // })
        return(
            <div>
               <p>Hello</p>
               <TextField
                  label="Cost"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  name='cost'
                  fullWidth
                  id="margin-none"
                />
            </div>
        )
    }
}

export default Orders;