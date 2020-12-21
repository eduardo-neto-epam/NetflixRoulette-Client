import React, { memo } from 'react'
import styles from './Logo.module.scss'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

const Logo = () => {
    return (
        <div>
            <span className={cx('brand', 'brand--bold')}>netflix</span>
            <span className={cx('brand')}>roulette</span>
        </div>
    )
}

export default memo(Logo);
