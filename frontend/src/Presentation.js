
import React, { Component } from 'react';

import { Link } from 'react-router-dom';






class Presentation extends Component {

    render() {


        return (
            <div className="presentation__container">
                <h1> Отцифруй свой бизнес! </h1>
                <h3> Нет задач, которые невозможно автоматизировать </h3>
                <p className="presentation__text"> Есть задачи которые не стоит автоматизировать, чаще всего эти задачи и есть суть вашего дела. </p>
                <br/>
                <p className="presentation__text"> Эта CRM система не сделает за вас всю работу, она поможет вам заниматься своим делом с минимальным колличеством сторонних задач.  </p>
                
                <br/>
                <hr />
                <h2 className="presentation__footersHeader"> Вы можете опробовать демо-версию CRM-системы: </h2>
            </div>
        );
    }
}

export default Presentation;