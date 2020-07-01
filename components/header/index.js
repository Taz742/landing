import {HeaderComp} from './styled';
import Link from '../global/link'
import { useRouter } from 'next/router'
import {useState} from 'react';

export default function Header(props) {
    const router = useRouter();
    const [active, setAtive] = useState(false);
    const menu = props.props.props.headerMenu;

    return (
        <HeaderComp className={router.pathname === '/' ? 'hom-header' : ''}>
            <div className="header-container container">
                <Link href="/" className="logo">
                    GEX
                </Link>

                <div className={active ? 'active menu' : 'menu'}>
                    {menu && menu.length > 0 && menu.map((item, index) =>
                        item.type === 'custom' ? (
                            <a  href={item.url} 
                                key={index}>
                                    {item.title}
                            </a>
                        ) : (
                            <Link  href={`/${item.slug}`} 
                                    key={index}>
                                    {item.title}
                            </Link>
                        )
                    )}
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
                    <a href="http://10.10.5.4/?action=login">
                        Sign In
                    </a>
                </div>
            </div>
        </HeaderComp>
    )
}