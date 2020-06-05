import React from 'react';
import Layout from '../../components/layout'
import {AboutComp, HiringComp} from '../../styled/about'
import {PricingComp} from '../../styled/pricing'
import { replaceEnterSymbol, stripHtml } from '../../utils';

export default function Pricing(props) {
    const page = props.pages['about'];

    return (
        <Layout props={props} title="Gex About">
            <PricingComp className="container-large">
                <h1 className="dark">
                  About company
                </h1>
                <AboutComp>
                  <div className="content" dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }}></div>

                  <div className="team flex-container">
                    {page.meta && page.meta.map((item,index) => 
                      <div key={index}>
                        <img src={item.client_logo} />
                        <h5>{item.client_title}</h5>
                        <span>{item.client_position}</span>
                        <p>{item.client_desc}</p>
                        <a href={item.client_linkedin} target="_blank">
                          <img src="./images/linkdn.svg"/>
                        </a>
                      </div>
                    )}
                  </div>
                </AboutComp>
            </PricingComp>
            <HiringComp>
              <div className="container flex-container">
                <div className="hidden-xs">
                  <img src="./images/studio.svg" />
                </div>
                <div>
                  <h3>
                    We’re Hiring
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.about) }}></p>
                  <a className="hire" target="_blank" href={page.link}>
                    Apply
                  </a>
                </div>
              </div>
            </HiringComp>
        </Layout>
    )
}
