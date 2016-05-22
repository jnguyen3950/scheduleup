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

  render() {
    var { currentDate } = this.state;
    var { currentMonth } = this.state;
    var { currentYear } = this.state;
    var weeksArray = cal.monthDays(currentYear, currentMonth)
    console.log(weeksArray);

    return (
      <div class="container" onLoad={this.print.bind(this)}>
        <button onClick={this.print.bind(this)}>Click</button>
    		<div class="calendar-container">
          <header>
            <div class="col-md-offset-1">
    				  <div class="day">{currentDate}</div>
    				  <div class="month">{currentMonth + 1}</div>
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
