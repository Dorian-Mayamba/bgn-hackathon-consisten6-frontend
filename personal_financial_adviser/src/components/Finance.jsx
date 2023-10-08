import { useState } from 'react';
import '../styles/Finance.css';
import $ from 'jquery';
import Chart from 'chart.js/auto'
export function Finance() {

    const displayExpensesChart = (e)=>{
        e.preventDefault();
        var chartStatus = Chart.getChart('myChart');
        if(chartStatus!=undefined){
            chartStatus.destroy();
        }

        const chart = document.getElementById('myChart');
        const chartPlot = new Chart(chart, {
            type:'bar',
            data:{
                labels: ['food expense', 'rent expense', 'bills expense', 'miscellaneous expense', 'transportation expense'],
                datasets:[{
                    label: 'Expenses dataset',
                    data: [$('#food_expense').val(),$('#rent_expense').val(),$('#bills_expense').val(),$('#miscellaneous_expense').val(),$('#transportation_expense').val()],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor:[
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderWidth:1
                }]
            },
        })
    }

    const displayPieChart = (e) =>{
        e.preventDefault();
        let foodExpense =  parseInt($('#food_expense').val());
        let rentExpense = parseInt($('#rent_expense').val());
        let billsExpense = parseInt($('#bills_expense').val());
        let miscellaneousExpense = parseInt($('#miscellaneous_expense').val());
        let transportationExpense = parseInt($('#transportation_expense').val());
        const totalExpenses = foodExpense + rentExpense + billsExpense + miscellaneousExpense + transportationExpense;
        var monthlyIncomes = parseInt($('#monthly_incomes').val());
        var disposableIncome = monthlyIncomes - totalExpenses;
        let chartStatus = Chart.getChart('pie-chart');
        if(chartStatus != undefined){
            chartStatus.destroy();
        }
        var ctx = $('#pie-chart');
        var chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['food expense', 'rent expense', 'bills expense', 'miscellaneous expense', 'transportation expense', 'disposable income'],
                datasets:[{
                    label: 'Incomes comparison',
                    data: [foodExpense, rentExpense, billsExpense, miscellaneousExpense, transportationExpense, disposableIncome],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(216, 219, 42)',
                        'rgb(50, 168, 82)',
                        'rgb(147, 50, 168)',
                        'rgb(227, 41, 187)',
                        'rgb(227, 146, 41)'
                    ],
                    hoverOffset: 4
                }]
            }
        })
    }

    return (
        <div className='finance-group'>
            <h1 className="text-center">Manage Your Finances Here</h1>
            <form action="127.0.0.1:8000/chatgpt" className="w-50 mx-auto" onSubmit={(e)=>{
                e.preventDefault();
                console.log($(e.target).attr('action'));
            }}>
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
                                <input className='btn btn-lg btn-success' type="submit" value="Display chart" onClick={(e)=>displayExpensesChart(e)}/>
                            </div>
                            <div className="chart">
                                <canvas id="pie-chart"></canvas>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Display Pie chart" className='btn btn-success btn-lg' onClick={(e)=>displayPieChart(e)}/>
                            </div>
                        </div>
                        <button className='btn btn-danger btn-lg'>Invest</button>
                    </div>
                </div>
            </form>
        </div>
    )
}