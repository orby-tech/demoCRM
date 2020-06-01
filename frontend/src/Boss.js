import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';



import  LeftColumn from './BossLeftColumn'
import  RightColumn from './BossRightColumn'


const data = [
	{ name: "6 мая 2020", выполнены: 3, "не выполнены":2, amt: 500},
	{ name: "7 мая 2020", выполнены: 7, "не выполнены":1, amt: 500},
	{ name: "8 мая 2020", выполнены: 5, "не выполнены":2, amt: 500},
	{ name: "9 мая 2020", выполнены: 5, "не выполнены":3, amt: 500},
	{ name: "10 мая 2020", выполнены: 2, "не выполнены":3, amt: 500},
	{ name: "11 мая 2020", выполнены: 6, "не выполнены":2, amt: 500},
	{ name: "12 мая 2020", выполнены: 5, "не выполнены":1, amt: 500},

]
class Boss extends Component{
  constructor(props) {
    super(props);
    this.createTicketButton = this.createTicketButton.bind(this)
    this.state  = {
        update: false,
        table: [
        	["Иванов", "Забрать груз со склада", "Просмотрел", "до вторника", "не определено", "ред."]
        ]

    };
  }
  createTicketButton(){
  	this.setState({update: !this.state.update})
  }

	render(){
		return(
			<div className="profile__container">
				<div>
					<LeftColumn />
				</div>
				<div>
					<RightColumn />
				</div>
			<div className="boss__table">
						<h1 className="boss__additionalTasksHeader"> Дополнительные задания </h1>
						<select  className="custom-select leader__selectPersone">
		          <option value="selected">Общий список </option>
		          
		          <option value="selected">Иванов </option>
		          <option value="selected">Отдел продаж</option>
		        </select>
						<br />
						<button className="leader__uppendAdditionalTask btn btn-success"> 
							Добавить задание
						</button>			        
						<table className="boss__table">
							<tr>
								<td> Работник </td>
								<td> Процесс </td>
								<td> Состояние </td>
								<td> Срок </td>
								<td> Время выполнения </td>
								<td> Редактировать </td>
							</tr>

							{
								this.state.table.map( line =>
								<>
								<td><Link to="/profile"> {line[0]} </Link></td>
								<td> {line[1]} </td>
								<td> {line[2]} </td>
								<td> {line[3]} </td>
								<td> {line[4]} </td>
								<td> {line[5]} </td>
								</>
								)
							}
						</table>
											
				</div>

				</div>

			)
	}
}
export default Boss;