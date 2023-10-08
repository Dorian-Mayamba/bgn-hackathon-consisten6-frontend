export function Register() {
    return (
        <div>
            <h1>Register For Our Service</h1>
            <h4>It only takes a minute</h4>
            <form action="/action_page.php">
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
    )
}