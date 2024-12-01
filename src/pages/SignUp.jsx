import {useState} from "react"; 
import {validateEmail} from "../utils/validations";
import { AppContainer, StyledInput, StyledButton, ButtonContainer, FieldError } from "../styles/AppStyles";
import Select from 'react-select';


const PasswordErrorMessage = () => { 
 return ( 
   <FieldError className="FieldError">Password should have at least 8 characters</FieldError> 
 ); 
}; 
 
function App() { 

  const roleOptions = [
    { value: 'role', label: 'Role' },
    { value: 'individual', label: 'Individual' },
    { value: 'Business', label: 'Business' },
  ];

 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState(null);

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
  <AppContainer> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <StyledInput 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <StyledInput 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <StyledInput 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <StyledInput 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <div className="Field pt"> 
           <label> 
             Role <sup>*</sup> 
           </label> 
           <Select 
              value={role}
              onChange={setRole}
              options={roleOptions}
            /> 
         </div> 
         <ButtonContainer>
          <StyledButton type="submit" disabled={!getIsFormValid()}> 
            Create account 
          </StyledButton> 
         </ButtonContainer>
       </fieldset> 
     </form> 
   </AppContainer>
  );
};

export default App; 