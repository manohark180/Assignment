import React,{Component} from 'react'
import Manin from "./table_component"

export default class filter_component extends Component{
    constructor(props){
        super(props);
        this.state = {

        increment:1 ,
        inc:[1]   
        }}
    querryfunction=(e,j)=>{

        var data=e;
     
        this.setState({increment:this.state.increment+1},()=>{
            this.state.inc.push(data)
        })
       
       }
    render() {
      
        
        return(
            <div>
             
             
      
             
<div className="mt-5">{this.state.inc.map((e,key)=>{
                return <div className="mt-3"><Manin/></div>
            })}</div>
            
        <div className="col-sm-12 mt-5"><i class="fa fa-plus-circle" style={{color:"white"}} aria-hidden="true" ></i> <a style={{color:"white"}} onClick={()=>this.querryfunction(this.state.increment+1,2)}> Add Filter.</a>
</div>
            </div>
            
        )
    } 

}