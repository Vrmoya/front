import { useState } from "react";
import Validation from "./Validation";
const Forms = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password:"",
    })
    const [errors, setErrors] = useState({
        email: "",
        password:"",
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        
            setErrors(
                Validation({
                  ...userData,
                  [event.target.name]: event.target.value,
                })
              );
            };
     const handleSubmit = (event) => {
                event.preventDefault();
                login(userData);
              };

    
    return (
    <div>
        <form>
            <br />
            <label>EMAIL: </label>
            <input 
            placeholder="email"
            type="email" 
            name="email"
            value={userData.email}
            onChange={handleChange}
            />
            <br />
            <p>{errors.email}</p>
            <br />
            <label>PASSWORD: </label>
            <input 
            placeholder="password"
            type="password" 
            name ="password"
            value={userData.password}
            onChange={handleChange}
            />
            <br />
            <p>{errors.password}</p>
            <button type="submit" onClick={handleSubmit}>Enviar</button>


        </form>
        </div>
    )
}
export default Forms;