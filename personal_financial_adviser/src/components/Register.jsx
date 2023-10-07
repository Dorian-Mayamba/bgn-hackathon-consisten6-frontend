export function Register(){
    return (
        <div>
            <h1>Register</h1>
            <form action="/action_page.php">
                <div>
                    <label for="forename">First Name:</label>
                    <input type="name" class="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                </div>
                <div>
                    <label for="surname">Last Name:</label>
                    <input type="name" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                </div>
                <div>
                    <label for="Email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                </div>
                <div>
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
                </div>
                <div>
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"> Remember me </input>
                    </label>
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}