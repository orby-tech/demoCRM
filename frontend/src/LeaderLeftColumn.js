import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';


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
        <div className="profile__regularPlans">
            <div className="profile__planOfSales">
              <h3 className="profile__titlePlans"> План продаж на сегодня: </h3>
              <h2 className="profile__countPlans"> 0 / 60000 </h2>
            </div>            
            <div className="profile__planOfannouncement">
              <h3 className="profile__titlePlans"> План публикаций на сегодня: </h3>
              <h2 className="profile__countPlans"> 0 / 60 </h2>
            </div>
        </div>
        <br/>
        <br/>
        <div className="profile__table">
            <h1 className="leader__additionalTasksHeader"> Дополнительные задания </h1>
              <select  className="custom-select leader__selectPersone">
                <option value="selected">Иванов </option>
              </select>
            <br />
              <button className="leader__uppendAdditionalTask btn btn-success"> 
                Добавить задание
              </button>             
            <table>
              <tr>
                <td> Процесс </td>
                <td> Состояние </td>
                <td> Срок </td>
                <td> Время выполнения </td>
              </tr>

              {
                this.state.table.map( line =>
                <>
                <td> {line[1]} </td>
                <td>          
                  <select  className="custom-select profile__input" 
                    onChange={this.change}>
                    <option value="Не видел"> Не видел </option>

                    <option value="Просмотрел"> Просмотрел </option>
                    <option value="Исполняю"> Исполняю </option>                
                    <option value="Есть проблема"> Есть проблема </option>
                    <option value="Сделал"> Сделал </option>                        
                                    

                  </select>
                </td>
                <td> {line[3]} </td>
                <td> {line[4]} </td>
                </>
                )
              }
            </table>        
          </div>

        <br/>
        <br/>
        
        <br/>
        <br/>
          <div className="leader__lineChartBlock">
          <select  className="custom-select leader__selectLineChart">
            <option value="selected"> Статистика выполнения</option>
            <option value="selected"> Выручка отдела </option>
          </select>
          <h3 className="profile__hGraphics"> Статистика выполненых во время заданий </h3>
          <p className="profile__XTitle"> Колличество заданий </p>

          <LineChart
            width={810}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="выполнены" stroke="#66ff00" />
            <Line type="monotone" dataKey="не выполнены" stroke="#FF0000" />
            <Legend />
          </LineChart>
        </div>


			</div>
			)
	}
}
export default Profile;