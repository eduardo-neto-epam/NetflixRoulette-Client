import React from 'react'
import styles from './Main.module.scss'
import classnames from 'classnames/bind'

import FiltersMenu from '../FiltersMenu'
import SortSelector from '../../components/SortSelector'
import Footer from '../Footer'

let cx = classnames.bind(styles)

const Main = () => {
    return (
        <div className={cx('background')}>
            <div className={cx('container')}>
                <div className={cx('menu-row')}>
                    <FiltersMenu />
                    <SortSelector />
                </div>
                <hr className={cx('separator')}/>
                <div className={cx('inner')}>
                    <h3 className={cx('no-movies-warn')}>No Movie Found</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main