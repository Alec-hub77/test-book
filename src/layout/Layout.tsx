import React, { FunctionComponent, ReactNode } from 'react'
import {Header} from '../components/Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        {children}
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
  ) => {
    return function withLayoutComponent(props: T) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    };
  };
