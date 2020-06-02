import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';


import  LeftColumn from './ProfileLeftColumn'
import  RightColumn from './ProfileRightColumn'

const data = [
	{ name: "6 мая 2020", выполнены: 3, "не выполнены":2, amt: 500},
	{ name: "7 мая 2020", выполнены: 7, "не выполнены":1, amt: 500},
	{ name: "8 мая 2020", выполнены: 5, "не выполнены":2, amt: 500},
	{ name: "9 мая 2020", выполнены: 5, "не выполнены":3, amt: 500},
	{ name: "10 мая 2020", выполнены: 2, "не выполнены":3, amt: 500},
	{ name: "11 мая 2020", выполнены: 6, "не выполнены":2, amt: 500},
	{ name: "12 мая 2020", выполнены: 5, "не выполнены":1, amt: 500},

]
class Profile extends Component{
  constructor(props) {
    super(props);
    this.createTicketButton = this.createTicketButton.bind(this)
    this.change = this.change.bind(this)
    this.state  = {
        update: false,
        table: [
        	["Иванов", "Забрать груз со склада", "Просмотрел", "до вторника", "не определено", "ред."]

        ]
    };
  }
  createTicketButton(){
  	alert ("Вы похвалили сотрудника")
  }
  backButton(){
  	  	this.setState({update: !this.state.update})

  }
  change(event){
  	let arr = this.state.table
  	console.log(event.target.value)
  	arr[0][2] = event.target.value
  	this.setState({table: arr})
  	console.log(this.state.table)
  }

	render(){
		return(
			<div className=""> 
				<div className="profile__header">
					<div className="profile__regularPlans">
						<div className="profile__planOfSales">
						<h3 className="profile__titlePlans"> План продаж на сегодня: </h3>
						<h2 className="profile__countPlans"> 0 / 30000 </h2>
						</div>            
						<div className="profile__planOfannouncement">
						<h3 className="profile__titlePlans"> План публикаций на сегодня: </h3>
						<h2 className="profile__countPlans"> 0 / 30 </h2>
						</div>
					</div>
					<div className="profile__actions">
						<button className="profile__actionsButtons btn btn-success"> 
						Оформить продажу
						</button>
						<button className="profile__actionsButtons btn btn-success"> 
						Я создал объявление 
						</button>
					</div>
					<div className="profile__tickets">
						<h2> Повестка дня: </h2>  
						<div className="profile__smartTicket"> 
							9 + 1
						</div>
						<div className="profile__smartTicket"> 
							Продать очень много
						</div>              
					</div>
				</div>
				<hr />


							<div>
					<LeftColumn />
				</div>
				<div>
					<RightColumn />
				</div>
			</div>
			)
	}
}
export default Profile;