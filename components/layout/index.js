import {LayoutComp} from './styled';
import Header from '../header';
import Footer from '../footer';
import Head from 'next/head'

export default function Layout(props) {
    return (
        <LayoutComp>
            <Head>
                <title>{props.title ? props.title : 'Gex'}</title>
                <meta name="description" 
                content="Gex Bitcoin Coins"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header props={props} />
            <div className="Content">
                {props.children}
            </div>
            <Footer props={props} />
        </LayoutComp>
    )
}