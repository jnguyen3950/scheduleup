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

  monthTextFunc(num) {
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

    var monthText = month[num];
    return monthText;
  }

  render() {
    var { currentDate } = this.state;
    var { currentMonth } = this.state;
    var { currentYear } = this.state;
    var { monthText } = this.state;
    var weeksArray = cal.monthDays(currentYear, currentMonth)

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
    						<td class="prev-month">29</td>
    						<td class="prev-month">30</td>
    						<td class="prev-month">31</td>
    						<td>1</td>
    						<td>2</td>
    						<td>3</td>
    						<td>4</td>
    					</tr>
    					<tr>
    						<td>5</td>
    						<td>6</td>
    						<td>7</td>
    						<td>8</td>
    						<td>9</td>
    						<td>10</td>
    						<td>11</td>
    					</tr>
    					<tr>
    						<td>12</td>
    						<td>13</td>
    						<td>14</td>
    						<td>15</td>
    						<td>16</td>
    						<td>17</td>
    						<td class="current-day">18</td>
    					</tr>
    					<tr>
    						<td>19</td>
    						<td>20</td>
    						<td>21</td>
    						<td>22</td>
    						<td>23</td>
    						<td>24</td>
    						<td>25</td>
    					</tr>
    					<tr>
    						<td>26</td>
    						<td>27</td>
    						<td>28</td>
    						<td>29</td>
    						<td>30</td>
    						<td>31</td>
    						<td class="next-month">1</td>
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
