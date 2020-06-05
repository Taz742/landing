import styled from 'styled-components'

export const OtcComp = styled.div`
    margin-top: -400px;

    @media screen and (max-width: 992px) {
        margin-top: 25px;
    }

    .otc-item {
        display: flex;
        margin-top: 60px;

        @media screen and (max-width: 992px) {
            margin-top: 25px;
        }

        & > div {
            border-radius: 15px;
            /* height: 260px; */
            margin-right: 2%;
            background: #fff;
            flex: 1;
            align-content: center;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 60px 0 50px 0;
            -webkit-box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.1);
            -moz-box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.1);
            box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.1);

            @media screen and (max-width: 992px) {
                margin-bottom: 30px;
            }

            div {
                width: 100px;
                height: 70px;
                margin: 0 auto;
                padding-top: 25px;
                background: url('/images/otc.svg');
            }

            span {
                margin-top: 30px;
                color: #6C7686;
            }

            img {
                height: 55px;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
`