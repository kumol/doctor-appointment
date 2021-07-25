import React, { Component } from "react";

import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";


const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error:null
        }
        // requestInterceptor;
        // responseInterceptor;
        componentDidMount(){
            this.requestInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});
            });
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }
        modalClosed=()=>{
            this.setState({error:null});
        }
        render(){

            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.modalClosed} >{this.state.error?this.state.error.message:null}</Modal>
                    <WrappedComponent {...this.props}/> 
                </Aux>
            )
        }
    }
}

export default WithErrorHandler;