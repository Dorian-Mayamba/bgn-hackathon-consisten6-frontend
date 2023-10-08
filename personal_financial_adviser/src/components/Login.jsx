import $ from 'jquery';
import { useUser } from '../contexts/UserContext';
export function Login() {
    const {currentUser,setCurrentUser} = useUser();

    const LoginUser = async(e) =>{
        e.preventDefault();
        const elements = e.target.elements;
        const [email,password] = elements;
        try{
            let response = await fetch($(e.target).attr('action'), {
                method:'POST',
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify({
                    email:email.value,
                    password:password.value
                })
            });
            var data = await response.json();
            localStorage.setItem('user', data);
            setCurrentUser(data);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <form action="http://127.0.0.1:8000/account/users/login" method="POST" onSubmit={(e)=>LoginUser(e)}>
                <div className="form-group mb-3">
                    <label for="email">Email:</label>
                    <input className="form-control" type="email" id="email" placeholder="Enter email" name="email" required/>
                </div>
                <div className="form-group mb-3">
                    <label for="password">Password:</label>
                    <input className="form-control" type="password" id="password" placeholder="Enter password" name="password" />

                    <input className="form-control" type="password" id="password" placeholder="Enter password" name="password" required/>
                </div>
                <div className="form-group mb-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <table width="100%" height="100%">
    <tr>
        <td align="right" valign="bottom">
            <img src="https://i.ibb.co/561562S/background-photo-cropped.png" alt="bug" height="500" width="500" />
        </td>
    </tr>
</table>
            </form>
        </div>
        
    )


}
