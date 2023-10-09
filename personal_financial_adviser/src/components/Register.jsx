import $ from 'jquery';
import { useNavigate } from 'react-router';
export function Register(e) {
    const navigate = useNavigate();
    const RegisterUser = (e) =>{
        e.preventDefault();
        const elements = e.target.elements;
        const [firstName, lastName, email,age, password, password_conf] = elements;
        try{
            checkPassword(password.value,password_conf.value)
            fetch($(e.target).attr('action'), {
                method:'POST',
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify({
                    first_name:firstName.value,
                    last_name:lastName.value,
                    email:email.value,
                    age:age.value,
                    password:password.value
                })
            })
            .then(res=>{
                if(!res.ok){
                    throw new Error('error');
                }
                return res.json()
                .then(data=>{
                    navigate('/login', {replace:true})
                })
            })
        }catch(err){
            alert(err);
        }
    }

    const checkPassword = (password, passwordConf)=>{
        if(password != passwordConf){
            throw new new Error('both the password and the confirmed should match');
        }
    }

    return (
        <div className="register-box">
            <div style={{marginLeft: 150, marginRight: 400}}>
                <h1>Register For Our Service</h1>
                <h4>It only takes a minute</h4>
                <form action="http://127.0.0.1:8000/account/users/create" method='POST' onSubmit={(e)=>RegisterUser(e)}>
                    <div className="form-group">
                        <label for="forename">First Name:</label>
                        <input type="name" class="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                    </div>
                    <div className="form-group">
                        <label for="surname">Last Name:</label>
                        <input type="name" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                    </div>
                    <div className="form-group">
                        <label for="Email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                    </div>
                    <div className="form-group">
                        <label for="age">Your age:</label>
                        <input className="form-control" type="number" name="age" id="age" placeholder="enter your age" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Confirm your Password:</label>
                        <input type="password" class="form-control" id="pwd_confirm" placeholder="Confirm your password" name="pswd_confirm"></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}