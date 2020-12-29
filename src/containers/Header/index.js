import React, {useState} from 'react'
import styles from './Header.module.scss'
import classnames from 'classnames/bind'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import {Modal} from '../../components/Modal'
import AddMovie from '../../forms/AddMovie'
import ErrorBoundary from '../../components/ErrorBoundary'

let cx = classnames.bind(styles)

const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleClick() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <div className={cx('container')}>
            <Logo />
            <Button size='lg' style='glass' type='button' handleClick={handleClick}>+ ADD MOVIE</Button>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <ErrorBoundary>
                        <AddMovie />
                    </ErrorBoundary>
                </Modal>
                )}
        </div>
    )
}

export default Header;