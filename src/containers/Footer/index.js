import React from 'react'
import styles from './Footer.module.scss'
import classnames from 'classnames/bind'
import Logo from '../../components/Logo'

let cx = classnames.bind(styles)

const Footer = () => {
    return (
        <div className={cx('container')}>
            <Logo />
        </div>
    )
}

export default Footer
