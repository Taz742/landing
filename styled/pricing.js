import styled from 'styled-components'

export const PricingComp = styled.div`
    margin-top: -190px;
    background-color: #FAFAFA;
    border-radius: 8px;
    padding-top: 98px;

    @media screen and (max-width: 992px) {
        padding-left: 15px;
        padding-right: 15px;
        width: calc(100% - 30px);
        padding-top: 30px;
    }
`

export const PricingList = styled.div`
    padding-top: 50px;

    @media screen and (max-width: 992px) {
        padding-top: 25px;
    }

    .price-item {
        h5 {
            letter-spacing: -0.52px;
            color: #242A33;
            font-size: 26px;
            margin: 0 0 30px 0;
            font-weight: normal;

            @media screen and (max-width: 992px) {
                font-size: 24px;
                margin: 0 0 15px 0;
                text-align: center;
            }
        }    
    }

    .price-list {
        margin-bottom: 80px;
        display: flex;

        @media screen and (max-width: 992px) {
            flex-direction: column;
            margin-bottom: 40px;
        }

        div {
            flex: 1;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            max-width: calc(23.5% - 50px);
            min-width: calc(23.5% - 50px);
            margin-right: 2%;
            padding: 20px 0 40px 50px;
            -webkit-box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.1);
            -moz-box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.1);
            box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.1);
            border-radius: 8px;

            @media screen and (max-width: 992px) {
                max-width: 100%;
                min-width: 100%;
                padding: 20px 0 20px 0;
                margin-bottom: 15px;
                margin-right: 0px;
                text-align: center;
            }
            

            &:last-child {
                margin-right: 0;
            }

            span:first-child {
                letter-spacing: -0.88px;
                color: #0ECBFD;
                font-size: 44px;
                line-height: 80px;

                @media screen and (max-width: 992px) {
                    font-size: 30px;
                    line-height: 60px;
                }
            }

            span:nth-child(2) {
                letter-spacing: -0.4px;
                color: #6C7686;
                font-size: 20px;
            }
        }
    }
`