import React from 'react'
import styles from './CustomDatePicker.module.scss'
import classnames from 'classnames/bind'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import icon from '../../assets/icon-calendar.svg'

let cx = classnames.bind(styles)

const CustomDatePicker = ({ startDate, setStartDate }) => {

    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <label className={cx('label')}>RELEASE DATE
            <button type='button' className={cx('date-input')} ref={ref} onClick={onClick}>
                {value}
                <img className={cx('icon')} src={icon} />
            </button>
        </label>
    ))
    return (
      <DatePicker
        selected={startDate}
        dateFormat='dd/MM/yyyy' 
        onChange={date => setStartDate(date)}
        customInput={<CustomInput />}
      />
    )
  }

  export default CustomDatePicker