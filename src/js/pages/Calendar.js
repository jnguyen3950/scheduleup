import React from "react";

import Day from "../components/calendar/Day";

var c = require('calendar');
var cal = new c.Calendar();

export default class Calendar extends React.Component {
  constructor() {
    var currentTime = new Date();
    super();
    this.state = {
      currentDate: currentTime.getDate(),
      currentMonth: currentTime.getMonth(),
      currentYear: currentTime.getFullYear(),
    }
  }

  monthTextFunc(monthNum) {
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var monthText = month[monthNum];
    return monthText;
  }

  render() {
    const { currentDate } = this.state;
    const { currentMonth } = this.state;
    const { currentYear } = this.state;
    const { monthText } = this.state;
    const weeksArray = cal.monthDays(currentYear, currentMonth);

    const week1 = weeksArray[0].map((date, index) => <Day key={index} date={date}/>);
    const week2 = weeksArray[1].map((date, index) => <Day key={index} date={date}/>);
    const week3 = weeksArray[2].map((date, index) => <Day key={index} date={date}/>);
    const week4 = weeksArray[3].map((date, index) => <Day key={index} date={date}/>);
    const week5 = weeksArray[4].map((date, index) => <Day key={index} date={date}/>);
    const week6 = weeksArray[5] !== undefined ? weeksArray[5].map((date, index) => <Day key={index} date={date}/>) : "";

    return (
      <div class="container">
    		<div class="calendar-container">
          <header>
            <div class="col-md-offset-1">
    				  <div class="day">{currentDate}</div>
    				  <div class="month">{this.monthTextFunc(currentMonth)}</div>
            </div>
    			</header>
    			<table class="calendar">
    				<thead>
    					<tr>
    						<td class="col-md-2">Mon</td>
    						<td class="col-md-2">Tue</td>
    						<td class="col-md-2">Wed</td>
    						<td class="col-md-2">Thu</td>
    						<td class="col-md-2">Fri</td>
    						<td class="col-md-2">Sat</td>
                <td class="col-md-2">Sun</td>
    					</tr>
    				</thead>
    				<tbody>
    					<tr>
    						{week1}
    					</tr>
    					<tr>
    						{week2}
    					</tr>
    					<tr>
    						{week3}
    					</tr>
    					<tr>
    						{week4}
    					</tr>
    					<tr>
    						{week5}
    					</tr>
              <tr>
                {week6}
              </tr>
    				</tbody>
    			</table>
          <div class="ring-left"></div>
          <div class="ring-right"></div>
    		</div>
    	</div>
    );
  }
}
