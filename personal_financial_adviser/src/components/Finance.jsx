export function Finance(){
    return (
        <div>
            <h1 className="text-center">Manage your finance here!!!</h1>
            <form action="#">
                <div className="form-group row w-100">
                    <div className="col-md-6">
                        <input type="number" className="form-control" placeholder="You age"/>
                    </div>
                    <div className="col-md-6">
                        <input type="number" className="form-control" name="monthly_incomes" id="monthly_incomes" placeholder="Your monthly incomes"/>
                    </div>
                </div>
            </form>
            <div className="financial-goals-section">
                <h1><small>Your financial goals</small></h1>
            </div>
        </div>
    )
}