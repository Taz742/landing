import styled from 'styled-components'

export const SupportCont = styled.p`
    color: #B1B9C4;
    text-align: center;
    margin: 130px 0 100px 0;

    @media screen and (max-width: 992px) {
        margin: 65px 0 50px 0;
    }

    a {
        color: #0ECBFD;
    }

    img {
        width: 23px;
        height: 23px;
        margin-right: 13px;
        vertical-align: middle;
        position: relative;
        top: -2px;
    }
`;

export default function Support(props) {
    return (
        <SupportCont>
            <img src="/images/info.svg"/>
            {props && props.content ? (
                <span style={{display: 'inline'}} dangerouslySetInnerHTML={{ __html: props.content }} />
            ): (
                <>For more information, contact our customer support at the following e-mail address: <a href="mailto:support@gex.ge">support@gex.ge</a></>
            )}        
        </SupportCont>
    )
}