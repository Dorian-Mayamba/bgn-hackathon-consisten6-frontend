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
