import { useState } from "react";

function App() {
  const [firstname,setFirstName] = useState('')
  const [lastname,setLastName] = useState('')
  const [age,setAge] = useState('')
  const [birthday,setBirthday] = useState('')
  const [address,setAddress] = useState('')
  const [school,setSchool] = useState('')
  const [height,setHeight] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const singUp = ()=>{
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(birthday);
    console.log(address);
    console.log(school);
    console.log(height);
    console.log(email);
    console.log(password);
    if(firstname===""){
      alert( "შეიყვანეთ firstname")
    }
    if(lastname===""){
      alert( "შეიყვანეთ lastname")
    }
    if(age===""){
      alert( "შეიყვანეთ age")
    }
    if(birthday===""){
      alert( "შეიყვანეთ birthday")
    }
    if(address===""){
      alert( "შეიყვანეთ address")
    }
    if(school===""){
      alert( "შეიყვანეთ school")
    }
    if(height===""){
      alert( "შეიყვანეთ height")
    }
    if(email===""){
      alert( "შეიყვანეთ email")
    }
    if(password===""){
      alert( "შეიყვანეთ password")
    }
  }

  return (
    <div className="App">

      <input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} placeholder="firstName"/>
      <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} placeholder="lastName"/> 
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="age"/> 
      <input type="text" value={birthday} onChange={(e)=>setBirthday(e.target.value)} placeholder="birthday"/> 
      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="address"/> 
      <input type="text" value={school} onChange={(e)=>setSchool(e.target.value)} placeholder="school"/> 
      <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="height"/> 
      <input type="emai" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/> 
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/> 

      <button onClick={singUp}> Sing Up </button>
    </div>
  );
}

export default App;
