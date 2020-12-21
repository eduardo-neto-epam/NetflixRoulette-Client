import React, { useState } from 'react'
import styles from './SearchForm.module.scss'
import classnames from 'classnames/bind'
import Button from '../Button'

let cx = classnames.bind(styles)

const SearchForm = () => {

    const [ value, setValue ] = useState('')

    function handleChange(e) {
        e.persist()
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Sumbiting: ', value)
    }

    return (
        <div className={cx('container')}>
            <form onSubmit={handleSubmit}>
                <input
                    className={cx('input')}
                    value={value}
                    placeholder='What do you want to watch?'
                    onChange={handleChange}
                    required
                />
                <Button type='submit' size='lg'>SEARCH</Button>
            </form>
        </div>
    )
}

export default SearchForm;