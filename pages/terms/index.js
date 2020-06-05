import react, {useState, useEffect} from 'react';
import Layout from '../../components/layout'
import {TermsComp} from '../../styled/terms'
import {PricingComp} from '../../styled/pricing'
import { replaceEnterSymbol, stripHtml } from '../../utils';

export default function Pricing(props) {
    const data = props.pages['terms'];
    const [contentIndex, setInted] = useState(0);

    return (
        <Layout props={props} title="Gex Terms">
            <PricingComp className="container-large">
                <h1 className="dark">
                  Terms of Use
                </h1>
                <TermsComp className="flex-container">
                  <div className="items">
                    {data.meta && data.meta.map((item, index) => 
                      <>
                        <p 
                          onClick={() => setInted(index)}
                          className={contentIndex === index ? 'active' : ''} 
                          key={index}>
                          {item.carrer_title}
                        </p>
                        <br />
                      </>
                    )}
                  </div>
                  <div className="content" dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(data.meta[contentIndex].carrer_text) }} />
                </TermsComp>
            </PricingComp>
        </Layout>
    )
}