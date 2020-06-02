import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';




const data = [
	{ name: "6 мая 2020", выполнены: 3, "не выполнены": 2, amt: 500 },
	{ name: "7 мая 2020", выполнены: 7, "не выполнены": 1, amt: 500 },
	{ name: "8 мая 2020", выполнены: 5, "не выполнены": 2, amt: 500 },
	{ name: "9 мая 2020", выполнены: 5, "не выполнены": 3, amt: 500 },
	{ name: "10 мая 2020", выполнены: 2, "не выполнены": 3, amt: 500 },
	{ name: "11 мая 2020", выполнены: 6, "не выполнены": 2, amt: 500 },
	{ name: "12 мая 2020", выполнены: 5, "не выполнены": 1, amt: 500 },

]
class Boss extends Component {
	constructor(props) {
		super(props);
		this.createTicketButton = this.createTicketButton.bind(this)
		this.state = {
			update: false,
			table: [
				["Иванов", "Забрать груз со склада", "Просмотрел", "до вторника", "не определено", "ред."]
			]

		};
	}
	createTicketButton() {
		this.setState({ update: !this.state.update })
	}

	render() {
		return (
			<div className="boss__container">

				<h3 className="profile__hGraphics"> Статистика выполненых во время заданий </h3>
				<select className="boss__graphSelect custom-select ">
					<option value="selected"> Статистика выполнения</option>
					<option value="selected"> Выручка отдела NN </option>
					<option value="selected"> Выручка отдела AA </option>
					<option value="selected"> Выручка организации </option>


				</select>
				<p className="profile__XTitle"> Колличество заданий </p>

				<LineChart
					width={700}
					height={400}
					data={data}
					margin={{ top: 5, left: -40, bottom: 5 }}
				>
					<XAxis dataKey="name" />
					<YAxis />

					<Tooltip />
					<CartesianGrid stroke="#f5f5f5" />
					<Line type="monotone" dataKey="выполнены" stroke="#66ff00" />
					<Line type="monotone" dataKey="не выполнены" stroke="#FF0000" />
					<Legend />
				</LineChart>
				<hr />
				<br />
				<h3 className=""> Дополнительные задания </h3>
				<select className="custom-select boss__selectPersone">
					<option value="selected">Общий список </option>

					<option value="selected">Иванов </option>
					<option value="selected">Отдел продаж</option>
				</select>

				<button className="boss__ticketAppend btn btn-success">
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
						this.state.table.map(line =>
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
				<hr />
				<br />
				<h3> Повестка дня: </h3>
				<div className="boss__regularPlans">
					<select className="boss__sectorSelect custom-select">
						<option value="selected">Отдел продаж </option>
					</select>
					<br />
					<br />


					<div className="boss__planeOfSales">
						<button className="btn btn-success">
							Редактировать план продаж отдела
					</button>
						<br />
						<div className="">
							<h5 className="profile__titlePlans"> План продаж на сегодня: </h5>
							<h4 className="profile__countPlans"> 0 / 60000 </h4>
						</div>
						<div className="">
							<h5 className="profile__titlePlans"> План публикаций на сегодня: </h5>
							<h4 className="profile__countPlans"> 0 / 60 </h4>
						</div>
					</div>
				</div>
				<div className="boss__agenda">
					
					<button className="btn btn-success">
						Добавить Smart Ticket
					</button>
					<div className="profile__smartTicket">
						9 + 1
					</div>
					<div className="profile__smartTicket">
						Продать очень много
					</div>
				</div>

			</div>

		)
	}
}
export default Boss;