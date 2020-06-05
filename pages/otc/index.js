import Layout from '../../components/layout'
import {OtcComp} from '../../styled/ots'
import { stripHtml } from '../../utils';
import Support from '../../components/global/support'

export default function Otc(props) {
  const page = props.pages['otc'];

  return (
    <Layout props={props} title="Gex OTC">
      <OtcComp className="container">
        <h1>
          OTC Desk
        </h1>
        <div className="page-desc" dangerouslySetInnerHTML={{ __html: stripHtml(page.data.post_content) }} />

        <div className="otc-item flex-container">
          {page.meta && page.meta.map((item, key) => {
            return (
              <div key={key}>
                <div>
                  <img src={item.client_logo} />
                </div>
                <span>{item.client_title}</span>
              </div>
            )
          })}
        </div>

        <Support />
      </OtcComp>
    </Layout>
  )
}
