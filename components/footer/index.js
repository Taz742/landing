import {FooterComp} from './styled';

export default function footer(props) {
    const data = props.props.props.extra;
    return (
        <FooterComp>
            <div className="container">
                <div className="footer-container flex-container">
                    <div>
                        <a>Exchange</a>
                        <a>Buy/Sell</a>
                        <a>Advantages</a>
                        <a href="/terms">Terms</a>
                    </div>
                    <div>
                        <a>About Company</a>
                        <a>AML Policy</a>
                        <a>Knowledge base</a>
                        <a>AML</a>
                    </div>
                    <div>
                        <h3>
                            Write us
                        </h3>
                        <p>
                            <img src="/images/call.svg" />
                            + 995 599 123 123
                        </p>
                        <p>
                            <img src="/images/email.svg" />
                            Testmail@gmail.com
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