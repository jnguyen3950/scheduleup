import React from "react";

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

  hide(date) {
    if(date == "0") {
      return "hide-day";
    }
  }

  render() {
    const { currentDate } = this.state;
    const { currentMonth } = this.state;
    const { currentYear } = this.state;
    const { monthText } = this.state;
    const weeksArray = cal.monthDays(currentYear, currentMonth);

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
    						<td class={this.hide(weeksArray[0][0])}>{weeksArray[0][0]}</td>
    						<td class={this.hide(weeksArray[0][1])}>{weeksArray[0][1]}</td>
    						<td class={this.hide(weeksArray[0][2])}>{weeksArray[0][2]}</td>
    						<td class={this.hide(weeksArray[0][3])}>{weeksArray[0][3]}</td>
    						<td class={this.hide(weeksArray[0][4])}>{weeksArray[0][4]}</td>
    						<td class={this.hide(weeksArray[0][5])}>{weeksArray[0][5]}</td>
    						<td class={this.hide(weeksArray[0][6])}>{weeksArray[0][6]}</td>
    					</tr>
    					<tr>
    						<td class={this.hide(weeksArray[1][0])}>{weeksArray[1][0]}</td>
    						<td class={this.hide(weeksArray[1][1])}>{weeksArray[1][1]}</td>
    						<td class={this.hide(weeksArray[1][2])}>{weeksArray[1][2]}</td>
    						<td class={this.hide(weeksArray[1][3])}>{weeksArray[1][3]}</td>
    						<td class={this.hide(weeksArray[1][4])}>{weeksArray[1][4]}</td>
    						<td class={this.hide(weeksArray[1][5])}>{weeksArray[1][5]}</td>
    						<td class={this.hide(weeksArray[1][6])}>{weeksArray[1][6]}</td>
    					</tr>
    					<tr>
    						<td class={this.hide(weeksArray[2][0])}>{weeksArray[2][0]}</td>
    						<td class={this.hide(weeksArray[2][1])}>{weeksArray[2][1]}</td>
    						<td class={this.hide(weeksArray[2][2])}>{weeksArray[2][2]}</td>
    						<td class={this.hide(weeksArray[2][3])}>{weeksArray[2][3]}</td>
    						<td class={this.hide(weeksArray[2][4])}>{weeksArray[2][4]}</td>
    						<td class={this.hide(weeksArray[2][5])}>{weeksArray[2][5]}</td>
    						<td class={this.hide(weeksArray[2][6])}>{weeksArray[2][6]}</td>
    					</tr>
    					<tr>
    						<td class={this.hide(weeksArray[3][0])}>{weeksArray[3][0]}</td>
    						<td class={this.hide(weeksArray[3][1])}>{weeksArray[3][1]}</td>
    						<td class={this.hide(weeksArray[3][2])}>{weeksArray[3][2]}</td>
    						<td class={this.hide(weeksArray[3][3])}>{weeksArray[3][3]}</td>
    						<td class={this.hide(weeksArray[3][4])}>{weeksArray[3][4]}</td>
    						<td class={this.hide(weeksArray[3][5])}>{weeksArray[3][5]}</td>
    						<td class={this.hide(weeksArray[3][6])}>{weeksArray[3][6]}</td>
    					</tr>
    					<tr>
    						<td class={this.hide(weeksArray[4][0])}>{weeksArray[4][0]}</td>
    						<td class={this.hide(weeksArray[4][1])}>{weeksArray[4][1]}</td>
    						<td class={this.hide(weeksArray[4][2])}>{weeksArray[4][2]}</td>
    						<td class={this.hide(weeksArray[4][3])}>{weeksArray[4][3]}</td>
    						<td class={this.hide(weeksArray[4][4])}>{weeksArray[4][4]}</td>
    						<td class={this.hide(weeksArray[4][5])}>{weeksArray[4][5]}</td>
    						<td class={this.hide(weeksArray[4][6])}>{weeksArray[4][6]}</td>
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
