import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './ListFilter.css';
import { DateRangePicker } from 'react-dates';

class ListFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }

  render() {
    const { setDates, setMood } = this.props;
    const { startDate, endDate, mood } = this.props.filter;

    return (
      <div className='list-filter'>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          startDateId='startDate'
          endDateId='endDate'
          onDatesChange={({ startDate, endDate }) => setDates({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          isOutsideRange={() => false}
          showClearDates={true}
          numberOfMonths={1}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
        />
        <select
          onChange={e => setMood(e.target.value)}
          className='list-filter__select'
          value={mood}
        >
          <option value=''>All Moods</option>
          <option value='1'>Awful</option>
          <option value='2'>Bad</option>
          <option value='3'>Meh</option>
          <option value='4'>Good</option>
          <option value='5'>Amazing</option>
        </select>
        <select
          onChange={e => setMood(e.target.value)}
          className='list-filter__select'
          value={mood}
        >
          <option value=''>Order</option>
        </select>
        </div>
    );
  }
}

export default ListFilter;