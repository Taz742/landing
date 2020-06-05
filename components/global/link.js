import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, className, children }) => {
    const router = useRouter()

    if (router.pathname === href) {
        className = `${className ? className : ''} active`
    }

    return  <a href={href} className={className}>
                <span>{children}</span>
            </a>
}