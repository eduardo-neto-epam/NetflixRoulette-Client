import React, { useState } from 'react'
import styles from './SelectGenreInput.module.scss'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

export function Checkbox({ option, handleCheckChange, isChecked }) {
    return (
            <label htmlFor={option}>{option}
                <input id={option} type='checkbox' onClick={handleCheckChange} name={option} checked={isChecked} value={option} />
                <span className={cx('checkbox')}>
                <svg 
                    xmlns='http://www.w3.org/2000/svg' 
                    viewBox='0 0 24 24' 
                    aria-hidden="true" 
                    focusable="false"
                >
                    <path 
                        fill='none' 
                        stroke='var(--color-contrast)' 
                        strokeWidth='3' 
                        d='M1.73 12.91l6.37 6.37L22.79 4.59' 
                    />
                </svg>
                </span>
            </label>
    )
}

const SelectGenreInput = ({ genres, label, handleCheckChange, errorMessage, showError  }) => {

    const [ viewOptions, setViewOptions ] = useState(false)

    function handleViewOptions() {
        setViewOptions(prev => !prev);
    }

    return (
        <div className={cx('container', {'container--open': viewOptions})}>
            <div className={cx('title')}>Genre</div>
            <div className={cx('_inner', {'_inner--error': showError})} onClick={handleViewOptions}>
                <div className={cx('label')}>Select Genre</div>
                <span className={cx(
                    'arrow',
                    {'arrow--down': !viewOptions},
                    {'arrow--up': viewOptions}
                    )}></span>
            </div>
           <ul className={cx(
               'options-container',
               {'options-container--show': viewOptions}
               )}>
                {genres.map((genre, index) => (
                    <li key={index}>
                        <Checkbox option={genre.value} label={label}  handleCheckChange={handleCheckChange} checked={genre.isChecked} />
                    </li>
                ))}
            </ul>
                <span className={cx(
                    'error-msg', 
                    {'error-msg--hide': !showError}
                )}>{errorMessage}</span>
        </div>
    )
}

export default SelectGenreInput
