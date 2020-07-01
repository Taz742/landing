import {FooterComp} from './styled';

export default function footer(props) {
    const data = props.props.props.extra;
    const menu = props.props.props.footerMenu;
    return (
        <FooterComp>
            <div className="container">
                <div className="footer-container flex-container">
                    <div>
                        {menu && menu.length > 0 && menu.map((item, index) =>
                            (index < 4 && 
                                <a  href={item.type === 'custom' ? item.url : item.slug} 
                                    key={index}>
                                        {item.title}
                                </a>
                            )
                        )}
                    </div>
                    <div>
                        {menu && menu.length > 0 && menu.map((item, index) =>
                            (index > 3 && 
                                <a  href={item.type === 'custom' ? item.url : item.slug} 
                                    key={index}>
                                        {item.title}
                                </a>
                            )
                        )}
                    </div>
                    <div>
                        <h3>
                            Write us
                        </h3>
                        <p>
                            <img src="/images/call.svg" />
                            +995 599 123 123
                        </p>
                        <p>
                            <img src="/images/email.svg" />
                            info@gex.ge
                        </p>
                        <p>
                            <img src="/images/map.svg" />
                            12 Sulkhan Tsintsadze str.
                        </p>
                    </div>
                    <div className="socials">
                        <div>
                            <a target="_blank" href={data.linkedin}>
                                <img src="/images/linkedin.svg" />
                            </a>
                            <a target="_blank" href={data.facebook}>
                                <img src="/images/facebook.svg" />
                            </a>
                        </div>
                        <p>
                            <img src="/images/copyright.svg" />
                            {data.copy}
                        </p>
                    </div>
                </div>
            </div>
        </FooterComp>
    )
}