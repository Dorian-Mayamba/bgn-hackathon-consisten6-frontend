import { useState } from 'react';
import '../styles/Finance.css';
import $ from 'jquery';
import Chart from 'chart.js/auto'
import { useUser } from '../contexts/UserContext';
export function Finance() {

    const {currentUser, setCurrentUser} = useUser();

    const askAdvice = async(e)=>{
        e.preventDefault();
        if(currentUser != null){
            try{
                var url = $(e.target).attr('action');
                var response = await fetch(url + '/'+currentUser.data.id);
                var data = await response.json();
                $('.response').text(data.response);
            }catch(err){
                console.log(err);
            }
        }
    }

    const displayPieChart = (e) =>{
        
    }

    return (
        <div className='finance-group'>
            <h1 className="text-center">Manage Your Finances Here</h1>
            <form action="http://127.0.0.1:8000/account/chatbot" method='POST' className="w-50 mx-auto" onSubmit={(e)=>askAdvice(e)}>
                <div className="form-group my-4">
                    <input type="number" className="form-control" name="age" id="age" placeholder="You age" required/>
                </div>
                <div className="form-group my-4">
                    <input type="number" className="form-control" name="monthly_incomes" id="monthly_incomes" placeholder="Your monthly incomes" required/>
                </div>
                <div className="financial-goals-section">
                    <h1 className="text-center"><small>Your financial goals</small></h1>
                    <div className="dropdown">
                        <button className="btn btn-primary btn-lg">Save</button>
                        <div className="expense-section">
                            <h1><small>Your expenses</small></h1>
                            <div className="form-group mb-3">
                                <label htmlFor="food_expense">Food expenses</label>
                                <input type="number" className="form-control" id="food_expense" placeholder="your food expenses"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="rent_expense">Rent expeses</label>
                                <input type="number" className="form-control" name="rent_expense" id="rent_expense" placeholder="your rent expense"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="bills_expense">Bills expense</label>
                                <input type="number" className="form-control" name="bills_expense" id="bills_expense" placeholder="your bills expenses"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="miscellaneous_expense">miscellaneous expense</label>
                                <input type="number" className="form-control" name="miscellaneous_expense" id="miscellaneous_expense" placeholder="miscellaneous expense"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="transportation_expense">transportation expense</label>
                                <input type="number" className="form-control" name="transportation_expense" id="transportation_expense" placeholder="transportation expense"/>
                            </div>
                            <div className="chart">
                                <canvas id='myChart'></canvas>
                            </div>
                            <div className="form-group">
                                <input className='btn btn-lg btn-success' type="submit" value="Display chart"/>
                            </div>
                            <div className="chart">
                                <canvas id="pie-chart"></canvas>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Display Pie chart" className='btn btn-success btn-lg'/>
                            </div>
                        </div>
                        <button className='btn btn-danger btn-lg'>Ask for advice</button>
                        <p className='response'>

                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}