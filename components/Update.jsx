import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {


	let {userid} =useParams();
	let name = useRef();
	let email = useRef();
	let contact = useRef();
	let gender = useRef();
	let nav = useNavigate();

	useEffect(()=>{
		fetch(`http://localhost:4000/user/${userid}`)
		.then((res)=>{return res.json()})
		.then((data)=>{
			name.current.value = data.name;
			email.current.value = data.email;
			contact.current.value = data.contact;
			gender.current.value = data.gender;
		})
	})

	let handleUpdate = (e)=>{
		e.preventDefault()

		let updatedata ={
			name:name.current.value,
			email:email.current.value,
			contact:contact.current.value,
			gender:gender.current.value,

		}

		fetch(`http://localhost:4000/user/${userid}`,{
			method:"PUT",
			headers:{"Cotent-Type":"application/json"},
			body:JSON.stringify(updatedata)
		}).then((res)=>{
			console.log(res);
			alert("data updated")
			nav('/');
		})

		
	}
	return (  
		<div>
			<form onSubmit={handleUpdate}>
			<label htmlFor="">Name: <input type="text" ref={name} /></label><br />
				<label htmlFor="">Email : <input type="email" name="" id="" ref={email} /></label><br />
				<label htmlFor="">Contact No: <input type="number" name="" id="" ref={contact} /></label><br />
				<label htmlFor="">Gender: <input type="text" ref={gender} /></label><br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
 
export default Update;