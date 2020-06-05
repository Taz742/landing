import React, {useState} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    resetNextUuid,
} from 'react-accessible-accordion';
import Layout from '../../components/layout'
import {FaqComp} from '../../styled/faq'
import {PricingComp} from '../../styled/pricing'
import Support from '../../components/global/support'

export default function Pricing(props) {
    resetNextUuid();
    const data = props.pages['faq'];
    const [page, getPage] = useState(props.pages['faq']);
    const search = (e) => {
        const text = e.target.value;
        if (text) {
            const result = data.meta.filter((val) => {
                if (val.client_title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
                    return val;
                }
            });
            getPage({meta: []});
            getPage({meta: result});
        } else {
            getPage({meta: []});
            getPage(data);
        }
    }

    return (
        <Layout props={props} title="Gex FAQ">
            <PricingComp className="container-large">
                <h1 className="dark">
                    Frequently Asked Questions
                </h1>
                <FaqComp>
                    <div className="search">
                        <input onChange={(e) => search(e)} placeholder="How can we help?" />
                        <img src="./images/Search.svg"/>
                    </div>
                    
                    <Accordion preExpanded={[0]}>
                        {page.meta && page.meta.map((item, key) => 
                            <AccordionItem key={key}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {item.client_title}

                                        <div className="pull-right"></div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {item.client_content}
                                </AccordionItemPanel>
                            </AccordionItem>
                        )}
                    </Accordion>
                </FaqComp>

                <Support content="For more information, contact our customer support at the following e-mail address: <a>support@gex.ge</a>" />
            </PricingComp>
        </Layout>
    )
}
