import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import DatePicker from 'react-datepicker';
import styles from './CustomDatePicker.module.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import icon from '../../assets/icon-calendar.svg';

const cx = classnames.bind(styles);

const CustomDatePicker = ({ startDate, setStartDate }) => {
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <label className={cx('label')} htmlFor={value}>
      RELEASE DATE
      <button type="button" id={value} className={cx('date-input')} ref={ref} onClick={onClick}>
        {value}
        <img className={cx('icon')} src={icon} alt="" />
      </button>
    </label>
  ));
  CustomInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
  };
  CustomInput.defaultProps = {
    value: '',
    onClick: () => {},
  };
  return (
    <DatePicker
      selected={startDate}
      dateFormat="dd/MM/yyyy"
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInput />}
    />
  );
};

CustomDatePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
};

export default CustomDatePicker;
