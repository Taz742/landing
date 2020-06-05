import Layout from '../../components/layout'
import {PricingComp, PricingList} from '../../styled/pricing'
import Support from '../../components/global/support'

export default function Pricing(props) {
  const page = props.pages['pricing'];

  return (
    <Layout props={props} title="Gex Pricing">
      <PricingComp className="container-large">
        <h1 className="dark">
          Fee Schedule
        </h1>
        <PricingList>
          {page.meta && page.meta.map((item,index) => 
            <div key={index} className="price-item">
              <h5>{item.title}</h5>
              <div className="price-list">
                {item.content && item.content.map((percent, key) =>
                  <div key={key}>
                    <span>
                      {percent.percent}
                    </span>
                    <span>
                      {percent.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </PricingList>
        <Support content="Does not include bank and visa card fees" />
      </PricingComp>
    </Layout>
  )
}
