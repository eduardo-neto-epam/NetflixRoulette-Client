import React, { useState } from 'react'
import styles from './SortSelector.module.scss'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

const SortSelector = () => {

    const [ selectedMethod, setSelectedMethod ] = useState('release date')
    const [ viewOptions, setViewOptions ] = useState(false)

    const options = [
        'release date',
        'movie title',
        'movie genre',
    ]

    function handleSelection(e) {
        e.persist();
        setSelectedMethod(e.target.textContent)
        setViewOptions(prev => !prev)
    }

    function handleViewOptions() {
        setViewOptions(prev => !prev);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('_inner')}>
                <div className={cx('label')}>SORT BY</div>
                <div
                 data-testid={`selected-method`}
                 className={cx('selected-method')}
                 onClick={handleViewOptions}
                 >
                     {selectedMethod}
                </div>
            </div>
           <ul className={cx(
               'options-container',
               {'options-container--show': viewOptions}
               )}>
                {options.map((option, index) => (
                    <li 
                        className={cx('option')}
                        key={index}
                        onClick={handleSelection}
                        >                
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SortSelector
