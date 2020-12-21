import React from 'react'
import styles from './HeaderBanner.module.scss'
import classnames from 'classnames/bind'
import Header from '../Header'
import Heading from '../../components/Heading'
import SearchForm from '../../components/SearchForm'

let cx = classnames.bind(styles)

const HeaderBanner = () => {
    return (
        <>
        <div className={cx('image-frame')}>
            <div className={cx('bg-image')}></div>
        </div>
        <div className={cx('container')}>
            <Header />
            <Heading />
            <SearchForm />
        </div>
        </>
    )
}

export default HeaderBanner