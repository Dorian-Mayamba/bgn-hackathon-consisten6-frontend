import { useParams, useNavigate } from "react-router"
import { useUser } from "../contexts/UserContext";
import { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { API_KEY, API_ENDPOINT } from "../constants/constants";
import $, { data } from 'jquery';
import '../styles/Dashboard.css'
export function DashBoard() {
    const { id } = useParams();
    const { currentUser, setCurrentUser } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser == null) {
            navigate('/', { replace: true });
        } else {
            if (currentUser.financial_statement.length > 0) {
                displayBarChart(currentUser);
                displayPieChart(currentUser);
            }

        }
    })

    const askAdvice = async (e) => {
        e.preventDefault();
        if (currentUser != null) {
            try {
                var url = $(e.target).attr('action');
                var response = await fetch(url + '/' + currentUser.data.id);
                var data = await response.json();
                $('.response').text(data.response);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const displayBarChart = (currentUser) => {
        var chartStatus = Chart.getChart('bar-chart');
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        const financialStatement = currentUser.financial_statement[currentUser.financial_statement.length - 1];
        const chart = document.getElementById('bar-chart');
        const chartPlot = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['food expense', 'rent expense', 'bills expense', 'miscellaneous expense', 'transportation expense'],
                datasets: [{
                    label: 'Your expenses',
                    data: [financialStatement.food_expense, financialStatement.rent_expense, financialStatement.utilities_expense, financialStatement.miscellaneous_expense, financialStatement.transportation_expense],
                    backgroundColor: [
                        'rgba(13,110,253, 0.8)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderWidth: 1
                }]
            },
        })
    }

    const displayPieChart = (currentUser) => {
        var chartStatus = Chart.getChart('pie-chart');
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        const financialStatement = currentUser.financial_statement[currentUser.financial_statement.length - 1];
        var ctx = $('#pie-chart');
        var chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['food expense', 'rent expense', 'bills expense', 'miscellaneous expense', 'transportation expense', 'disposable income'],
                datasets: [{
                    label: 'Your expenses',
                    data: [financialStatement.food_expense, financialStatement.rent_expense, financialStatement.utilities_expense, financialStatement.miscellaneous_expense, financialStatement.transportation_expense],
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
        <>
            <div className="dashboard-box row w-100">
                <h1 className="text-center"><small>Track your finance</small></h1>

                <div className="bar-chart col-md-6">
                    <canvas id="bar-chart"></canvas>
                </div>
                <div className="pie-chart col-md-6">
                    <canvas id="pie-chart"></canvas>
                </div>
            </div>
            <div className="row w-100 text-center">
                <form action="http://127.0.0.1:8000/account/chatbot" method="post" onSubmit={(e) => askAdvice(e)}>
                    <button className="btn  btn-lg btn-success">Ask for advise</button>
                    <p className="response"></p>
                </form>
            </div>
        </>

    )


}