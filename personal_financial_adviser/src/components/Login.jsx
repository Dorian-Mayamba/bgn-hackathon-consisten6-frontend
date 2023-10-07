export function Login() {
    return (
        <div className="container">
            <h1>Login</h1>
            <form action="#">
                <div className="form-group mb-3">
                    <label for="email">Email:</label>
                    <input className="form-control" type="email" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="form-group mb-3">
                    <label for="password">Password:</label>
                    <input className="form-control" type="password" id="password" placeholder="Enter password" name="password" />
                </div>
                <div className="form-group mb-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )


}
