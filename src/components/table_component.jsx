import React,{Component} from 'react'

export default class table_component extends Component{
  constructor(props){
		super(props);
		this.state = {

      conditions: [
        {
        id:'1',
        name:"rakesh",
        screen_name:"xyz",
        followers_count:200,
        following_count:300,
        location:"banglore",
        verified:0,


        },
        {
          id:'2',
          name:"ramya",
          screen_name:"xyz",
          followers_count:500,
          following_count:400,
          location:"tumkur",
          verified:1,
        },
        {
          id:'3',
          name:"ramyarani",
          screen_name:"xyz",
          followers_count:700,
          following_count:300,
          location:"tumkur",
          verified:0,
        },
        {
          id:'4',
          name:"manu",
          screen_name:"xyz",
          followers_count:500,
          following_count:400,
          location:"tumkur",
          verified:1,
        },
        {
          id:'5',
          name:"nayana",
          screen_name:"xyz",
          followers_count:700,
          following_count:400,
          location:"banglore",
          verified:1,
        },
        {
          id:'6',
          name:"Rani",
          screen_name:"xyz",
          followers_count:1000,
          following_count:500,
          location:"tumkur",
          verified:0,
        },
        {
          id:'7',
          name:"rohith",
          screen_name:"xyz",
          followers_count:500,
          following_count:400,
          location:"hubli",
          verified:0,
        },
        {
          id:'8',
          name:"gagana",
          screen_name:"xyz",
          followers_count:400,
          following_count:200,
          location:"tumkur",
          verified:1,
        },
        {
          id:'9',
          name:"narayan",
          screen_name:"xyz",
          followers_count:2000,
          following_count:1000,
          location:"kolar",
          verified:1,
        },
        {
          id:'10',
          name:"hema",
          screen_name:"xyz",
          followers_count:500,
          following_count:400,
          location:"bidar",
          verified:0,

        },

        ],
        greater_eq:">=",
        lessthan_eq:"<=",
        select_1:"",
        select_2:"",
        select_3:null,
        select_4:null,
        select_5:"",
        select_6:null,
        value:"",
        value_1:"",
        select_10:"",
        data_1:""
        
    }}
    handleSubmit(event){
      event.preventDefault();
      event.target.reset();
     this.setState({select_1:"",select_2:"",value:""})
    }
    handleSubmit11(event){
      event.preventDefault();
      event.target.reset();
      this.setState({select_3:"",select_4:"",value_1:""})
    }
    querryfunction1=()=>{
   
     }
    componentDidMount(){
    
    }
    render() {
      var store=null;
        return(
            <React.Fragment>
                      
                       {/* tab for desktop */}
 

      
      <div className="">
          
<div classname="col-sm-12">
<div class="card">
  <div class="card-body">
  <form
                          className="form"
                          onSubmit={event => this.handleSubmit(event)}
                        >
  

<div className="col-sm-12">
    <div className="row">
        <div className="col-sm-2">Where</div>
        <div className="col-sm-2">   <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ select_1:event.target.value})} >
                                      <option value="" selected>Select </option>
                                      <option value="screen_name">Screen Name</option>
                                      <option value="followers_count">followers</option>
                                    
                                    </select></div>
     
        {/* <div className="col-sm-2"><div class="dropdown">
  <button class="btn  dropdown-toggle whitecolor"   onChange = {(event) => this.setState({select_1:event.target.value})} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Select
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Screen Name</a>
    <a class="dropdown-item" href="#">followers</a>
    
  </div>
</div></div>  */}
       <div className="col-sm-2">  <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ select_2:event.target.value})} >
                                      <option value="" selected>---Condition--- </option>
                                      <option value=">="> {this.state.greater_eq} </option>
                                      <option value="<="> {this.state.lessthan_eq}</option>
                                    
                                    </select></div>
     
        <div className="col-sm-2"><input type="text" placeholder="value"  onChange={(event)=>this.setState({value:event.target.value})} className="form-control"></input></div>
        <div className="col-sm-2"><button type="submit" className="form-control" style={{width:"28%"}}><i class="fa fa-trash"  aria-hidden="true" ></i></button></div>
    </div>
</div>

</form>








{/* second filter */}

<form
                          className="form"
                          onSubmit={event => this.handleSubmit11(event)}
                        >
<div className="col-sm-12 mt-3">
    <div className="row">
        <div className="col-sm-2">     <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ select_3:event.target.value})} >
                                      <option value="" selected>--&& ||-- </option>
                                      <option value="&&"> AND </option>
                                      <option value="||"> OR</option>
                                    
                                    </select></div>
        <div className="col-sm-2">
        <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ select_4:event.target.value})} >
                                      <option value="" selected>---Location--- </option>
                                      {/* {this.state.conditions.map((e,key)=>{
                                        for(var i=e.location;i==e.location;i++){
                                          // console.log("hhhhhhhhhhhhh",i )
                                           return <option value={i}> {i} </option>
                                        }
                                      

                                        
                                      })} */}
                                      {Array.from(new Set(this.state.conditions.map(obj => obj.location))).map(location => {
    return <option value={location}>{location}</option>
})}
                                    
                                     
                                    
                                    </select></div> 
       
        <div className="col-sm-2">
        <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ select_5:event.target.value})} >
                                      <option value="" selected>Equals </option>
                                     
                                      
                                    
                                    </select>
        </div>
        <div className="col-sm-2">  <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ value_1:event.target.value})} >
                                      <option value="" selected>---Verify--- </option>
                                      <option value="1"> verified </option>
                                      <option value="0">Not Verified</option>
                                      <option value="">All</option>
                                    
                                    </select></div>
        <div className="col-sm-2"><button type="submit" className="form-control"  style={{width:"28%"}}><i class="fa fa-trash"  aria-hidden="true"></i></button></div>
   <div className="col-sm-12">
     <div className="row">
       {/* <div className="col-sm-2"> {this.state.select_6==null?"": this.state.select_6=="&&"?<p>AND</p>:<select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ select_10:event.target.value})} required>
                                      <option value="" selected>Select </option>
                                      <option value="&&"> AND </option>
                                      <option value="||"> OR</option>
                                    
                                    </select>}</div> */}
      
     </div>
     {/* <div className="col-sm-12">
     <select className="form-control" id="sel2" 
                                      onChange = {(event) => this.setState({ value_1:event.target.value})} required>
                                      <option value="" selected>Select </option>
                                      <option value="1"> yes </option>
                                      <option value="0">No</option>
                                    
                                    </select>
     </div> */}
   </div>
   
    </div>
</div>
</form>
 </div>

</div>
</div>


      </div>
      <div className="col-sm-12">
        {/* {this.state.value_1} */}
     
        <table data-toggle="table" class="table table-hover" style={{color:"white"}}>
        
      <thead>
        <tr>
          <th>Name</th>
          <th>Screen Name</th>
          <th>followers</th>
          <th>Friends Contact</th>
          <th>Location</th>
          <th>Verified</th>

        </tr>
      </thead>
      {this.state.conditions.map((e,key)=>{


if(this.state.select_2==">="?e.followers_count>=this.state.value:e.followers_count<=this.state.value)
           
              
              {
                if(this.state.select_3=="&&"? e.location==this.state.select_4:   this.state.select_2==">="?e.followers_count>=this.state.value:e.followers_count<=this.state.value)

     
           
             {
     
      
        // if(this.state.value_1!=""?""   :   this.state.select_2==">="?e.followers_count>=this.state.value:e.followers_count<=this.state.value)
 if( this.state.value_1==""? this.state.select_3=="&&"? e.location==this.state.select_4:   this.state.select_2==">="?e.followers_count>=this.state.value:e.followers_count<=this.state.value  :                  this.state.value_1=="1"?  e.verified==1:  e.verified==0)
             {
               
                return (
           
             
             <tr>
           <td>{e.name}</td>
           <td>{e.screen_name}</td>
           <td>{e.followers_count}</td>
           <td>{e.following_count}</td>
           <td>{e.location}</td>
           <td>{e.verified ==1?<i class="fa fa-check-circle-o"style={{color:"red"}} aria-hidden="true"></i>:<i style={{color:"green"}}class="fa fa-times-circle-o" aria-hidden="true"></i>}</td>
         
         </tr>
                   
        
                  
                
                )
              }else{
              
              }
            
             } 
            }
        

          }  )}
      <tbody>
  
   

      </tbody>

    </table>
      </div>
    
                       </React.Fragment>
       
              
          
            
        )
    } 

}