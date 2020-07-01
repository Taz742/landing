import React, { useState } from 'react'
import Layout from '../../components/layout'
import { AboutComp, HiringComp } from '../../styled/about'
import { PricingComp } from '../../styled/pricing'
import { replaceEnterSymbol } from '../../utils'
import Modal from '../../components/global/modal'
import { toast, ToastContainer } from 'react-nextjs-toast'

export default function Pricing(props) {
    const page = props.pages['about'];
    const [open, setOpen] = useState(false)

    return (
        <Layout props={props} title="Gex About">
            <ToastContainer />
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
                  <a onClick={(e) => {e.preventDefault(); setOpen(true)}} className="hire">
                    Apply
                  </a>
                </div>
              </div>
            </HiringComp>
            <Modal close={(data) => {
                  if (data) {
                    toast.notify('Your e-mail has been sent successfuly', {
                        duration: 5,
                        type: "success"
                    })
                  }
                  setOpen(false)
                }} open={open}/>
        </Layout>
    )
}
