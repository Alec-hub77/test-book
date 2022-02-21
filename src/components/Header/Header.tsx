import React from 'react'
import styles from './Header.module.scss';
import { Link } from 'react-router-dom'

type HeaderProps = {}

export const Header: React.FC = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}><Link to='/'>Books Dashboard</Link></div>
        <div className={styles.link}><Link to='add-book'>Add a Book</Link></div>
      </div>
    </header>
  )
}

