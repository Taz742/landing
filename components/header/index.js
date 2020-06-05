import {HeaderComp} from './styled';
import Link from '../global/link'
import { useRouter } from 'next/router'
import {useState} from 'react';

export default function Header() {
    const router = useRouter();
    const [active, setAtive] = useState(false);

    return (
        <HeaderComp className={router.pathname === '/' ? 'hom-header' : ''}>
            <div className="header-container container">
                <Link href="/" className="logo">
                    GEX
                </Link>

                <div className={active ? 'active menu' : 'menu'}>
                    <a href="http://10.10.5.4/">
                        Exchange
                    </a>
                    <a href="http://10.10.5.4/simple-trade">
                        Instant Trade
                    </a>
                    <Link href="/faq">
                        Why GEX
                    </Link>
                    <Link href="/pricing">
                        Pricing
                    </Link>
                    <Link href="/otc">
                        OTC
                    </Link>
                    <Link href="/about">
                        Company
                    </Link>
                </div>
                
                <div className={active ? 'active right-burger' : 'right-burger'} 
                    onClick={(e) => setAtive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="right-header hidden-xs">
                    <div className="language">
                        <img src="/images/eng.png"/>
                    </div>
                    <a href="http://10.10.5.4/">
                        Sign In
                    </a>
                </div>
            </div>
        </HeaderComp>
    )
}