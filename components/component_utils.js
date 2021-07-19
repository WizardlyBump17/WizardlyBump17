import React from 'react'
import styles from '../styles/global.module.css'

export {
    Container,
    List,
    Left,
    SmallP,
    StrongH4,
    CenterFlex,
    HGroup
}

function Container({children, className}) {
    return <div className={`${styles.container}${!className ? "" : " " + className}`}>{children}</div>
}

function List({children, className}) {
    return <ul className={`${styles.list}${!className ? "" : " " + className}`}>{children}</ul>
}

function Left({children, className}) {
    return <span className={`${styles.left}${!className ? "" : " " + className}`}>{children}</span>
}

function SmallP({children}) {
    return <p className={styles.small_text}>{children}</p>
}

function StrongH4({children}) {
    return <h4 className={styles.strong}>{children}</h4>
}

function CenterFlex({children}) {
    return <div className={styles.center_flex}>{children}</div>
}

function HGroup({children}) {
    return <div>{children}</div>
}