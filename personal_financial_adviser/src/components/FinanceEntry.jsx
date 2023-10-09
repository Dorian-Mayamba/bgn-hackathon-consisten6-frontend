import { useParams } from "react-router";
import { useUser } from "../contexts/UserContext";
import $ from 'jquery';
export function FinanceEntry(){
    const {currentUser, setCurrentUser} = useUser();
    const {id} = useParams();

    const EnterStatement = async(e) =>{
        e.preventDefault();
        const elements = e.target.elements;
        const [monthly_income, rent_expense,current_balance,food_expense,transportation_expense,utilities_expense,miscellaneous_expense,current_debt, time_to_pay,risk_tolerance,current_goal,currency] = elements;
        try{
            const disposableIncome = parseInt(monthly_income.value) - parseInt(rent_expense.value) - parseInt(food_expense.value) - parseInt(transportation_expense.value) - parseInt(utilities_expense.value) - parseInt(miscellaneous_expense.value);
            const url = $(e.target).attr('action')+'/'+id;
            var response = await fetch(`${url}`, {
                method:'POST',
                headers:{
                    "Content-Type" : 'application/json'
                },
                body:JSON.stringify({
                    user_id:id,
                    monthlyincome:monthly_income.value,
                    rent_expense:rent_expense.value,
                    current_balance:current_balance.value,
                    food_expense:food_expense.value,
                    transportation_expense:transportation_expense.value,
                    utilities_expense:utilities_expense.value,
                    miscellaneous_expense:miscellaneous_expense.value,
                    disposable_income:disposableIncome,
                    current_debt:current_debt.value,
                    time_to_pay:time_to_pay.value,
                    risk_tolerance:risk_tolerance.value,
                    current_goal:current_goal.value,
                    currency:currency.value
                })
            });
            var data = await response.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="container">
            <h1>Enter your financial statement</h1>
            <form action="http://127.0.0.1:8000/account/users/statement" onSubmit={(e)=>EnterStatement(e)}>
                <div className="form-group">
                    <input type="number" className="form-control" id="monthly_income" placeholder="your monthly incomes" required/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="enter your rent expense" id="rent_expense" required/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="current_balance" placeholder="enter your current balance" required/>
                </div>
                <div className="form-group">
                    <input type="number" name="food_expense" id="food_expense" placeholder="enter your food expense" className="form-control" required/>
                </div>
                <div className="form-group">
                    <input type="number" name="transportation_expense" id="transportation_expense" placeholder="enter your transportation expense" className="form-control" required/>
                </div>
                <div className="form-group">
                    <input type="number" name="utilities_expense" id="utilities_expense" placeholder="enter your utilities expense" className="form-control" required/>
                </div>
                <div className="form-group">
                    <input type="number" name="miscellaneous_expense" id="miscellaneous_expense" placeholder="enter your miscellaneous expense" className="form-control" required/>
                </div>
                <div className="form-group">
                    <input type="number" name="current_debt" id="current_debt" placeholder="enter your current debt" className="form-control" required/>
                </div>
                <div className="form-group">
                    <input type="number" name="time_to_pay" id="time_to_pay" placeholder="enter your time to pay" className="form-control" required/>
                </div>
                <div className="form-group">
                    <select className="form-control" name="risk_tolerance" id="risk_tolerance" required>
                        <option value="">Select a risk tolerance</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Hight">High</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="current_goal" id="current_goal" required>
                        <option value="">Select a current goal</option>
                        <option value="Saving">Saving</option>
                        <option value="Invest">Invest</option>
                        <option value="Debt management">Debt management</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" name="currency" id="currency" className="form-control" placeholder="currency" required/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-lg btn-success"/>
                </div>
            </form>
        </div>
    )
}