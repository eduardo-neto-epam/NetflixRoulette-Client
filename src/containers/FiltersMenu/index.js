import React, { useState, useEffect } from 'react'
import styles from './FiltersMenu.module.scss'
import classnames from 'classnames/bind'

import FilterSelector from '../../components/FilterSelector'

let cx = classnames.bind(styles)

const FiltersMenu = () => {

    const filters = [
        'all',
        'documentary',
        'comedy',
        'horror',
        'crime',
    ]

    const [filter, setFilter] = useState('all')

    function handleSelect(e) {
        setFilter(e.target.value)
    }

    useEffect(()=>{
        console.log('Current Filter is: ', filter)
    }, [filter])

    return (
        <>
        <ul className={cx('menu')}>
            { filters.map((filter, index) => (
                <li 
                    key={index} 
                    className={cx(
                        'filter'
                        )}>
                    <FilterSelector
                     handleSelect={handleSelect}
                     >
                         {filter}
                    </FilterSelector>
                </li>
            )) }
        </ul>
        </>
    )
}

export default FiltersMenu