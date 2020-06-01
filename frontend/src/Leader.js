import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';



import  LeftColumn from './LeaderLeftColumn'
import  RightColumn from './LeaderRightColumn'


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
    this.change = this.change.bind(this)
    this.state  = {
        update: false,
        table: [
        	["Иванов", "Забрать груз со склада", "Просмотрел", "до вторника", "не определено", "ред."]

        ]
    };
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
			<div className="profile__container"> 
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