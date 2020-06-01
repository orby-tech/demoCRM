
import React, { Component } from 'react';

import { Link } from 'react-router-dom';






class Presentation extends Component {

    render() {


        return (
            <div className="presentation__container">
                <h1> Отцифруй свой бизнес! </h1>
                <h4 className="presentation__header"> Нет задач, которые невозможно автоматизировать </h4>
                <p className="presentation__text"> Есть задачи которые не стоит автоматизировать, чаще всего эти задачи и есть суть вашего дела. </p>
                <br/>
                <h4 className="presentation__header"> Эта CRM система не сделает за вас всю работу </h4>
                <p className="presentation__text"> Она поможет вам заниматься своим делом с минимальным колличеством сторонних задач.  </p>
                <br/>
                <h4 className="presentation__header"> Что умеет эта система? </h4>
                <ol> 
                    <li> Автоматизация контроля выполнения задач сотрудниками </li>
                    <li> Автоматизация установки задач сотрудникам </li>
                    <li>     Автоматическое построение граффиков таких как:</li>
                        <ul>                            
                            <li> Доходов/Расходов </li>
                            <li> Выполняемость задач сотрудниками и отделами </li>
                            <li> Выполнение прогнозов развития </li>
                        </ul>
                    <li> Установка и контроль выполнения срочных(и регулярных) задач </li>
                    <li> Установка и контроль выполнения планов продаж или производств </li>
                </ol>
                <br/>
                <hr />
                <h2 className="presentation__footersHeader"> Вы можете опробовать демо-версию CRM-системы: </h2>
                
            </div>
        );
    }
}

export default Presentation;