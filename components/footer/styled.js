import styled from 'styled-components'

export const FooterComp = styled.footer`
    background-color: #1C2730;
    padding: 170px 0 120px 0;

    @media screen and (max-width: 992px) {
        padding: 70px 0 50px 0;
    }

    p,
    a {
        color: #C4C9D1;
        font-size: 20px;
        margin-bottom: 33px;
        margin-top: 0;
    }

    p img {
        margin-right: 20px;
        vertical-align: middle;
    }

    h3 {
        color: #C4C9D1;
        font-size: 26px;
        padding: 0;
        margin: 0 0 23px 0;
    }

    .socials {
        text-align: right;
        padding-top: 90px;

        @media screen and (max-width: 992px) {
            text-align: center;
            padding-top: 10px;
        }

        a {
            margin-left: 13px;
        }

        p {
            font-size: 20px;
            color: #C4C9D1;
        }
    }

    .footer-container {
        display: flex;

        & > div {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
    }
`