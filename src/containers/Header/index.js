import React from 'react'
import styles from './Header.module.scss'
import classnames from 'classnames/bind'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

let cx = classnames.bind(styles)

const Header = () => {
    return (
        <div className={cx('container')}>
            <Logo />
            <Button size='lg' style='glass'>+ ADD MOVIE</Button>
        </div>
    )
}

export default Header;