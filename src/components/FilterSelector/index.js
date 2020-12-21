import React, { useEffect, useState } from 'react'
import styles from './FilterSelector.module.scss'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types';

let cx = classnames.bind(styles)

const FilterSelector = ({ children, handleSelect }) => {

    return (
        <label className={cx('filter')} htmlFor={children}>{children}
        <input 
            type='radio'
            name='filters'
            id={children}
            defaultChecked={children === 'all'}
            className={cx(
                'menu-filter'
                )}
            onChange={(e) => handleSelect(e)}
            value={children}
        />
         <span className={cx('checkmark')} />
        </label>
    )
}

FilterSelector.propTypes = {
    children: PropTypes.string,
    handleSelect: PropTypes.func,
  }
  
  FilterSelector.defaultProps = {
    children: 'LABEL',
    handleSelect: ()=>{throw new Error('Prop to handle filter selection is missing')},
  }

export default FilterSelector