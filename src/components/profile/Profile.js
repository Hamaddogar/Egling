import React from "react";
import './style.css';


class Profile extends React.Component{
	render(){
		return(
				<div className="mainbody">
					<div className="after">
					<p style={{color:'white'}} className="edit"> Edit Profile</p>
					</div>
					<div className="part" style={{height:'20%',width:'100%',marginTop:'1%'}}>
					<div style={{float:'left',height:'80px',width:'45%'}}>
					<label className="organisation">Organisation</label>
					<br/>
					<input type="text" className="fields"/>
					</div>

					<div style={{float:'right',height:'80px',width:'45%'}}>
					<label className="organize">Email address</label>
					<br/>
					<input type="text" className="field"/>
					</div>

					</div>
					<div  style={{height:'20%',width:'100%',marginTop:'1%'}}>

					<div style={{float:'left',height:'80px',width:'45%'}}>
					<label className="organisation">First Name</label>
					<br/>
					<input type="text" className="fieldss"/>
					</div>

					<div style={{float:'right',height:'80px',width:'45%'}}>
					<label className="organize">Last Name</label>
					<br/>
					<input type="text" className="fieldsss"/>
					</div>
					</div>
					<div style={{height:'20%',width:'100%',marginTop:'2%'}}>
						<p className="organizer">Employee Status</p>
					
					<input type="text" className="lastone"/>

					</div>
					
					

				</div>

			);
	}
}
export default Profile






;