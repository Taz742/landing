import styled from 'styled-components'

export const HomeComp = styled.div`
    button.registration {
        background-color: #0ECBFD;
        font-size: 22px;
        color: #FFFFFF;
        padding: 17px 60px;
        border-radius: 4px;
        border: 0;

        @media screen and (max-width: 992px) {
            font-size: 18px;
            padding: 10px 40px;
            margin: 0 auto;
            display: block;
        }
    }
`

export const TopCoins = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 0;
    margin-top: 70px;
    display: flex;
    margin-bottom: 100px;
    box-shadow: 0px 6px 12px #EDEEF2C6;

    @media screen and (max-width: 992px) {
        padding: 20px 0;
        margin-top: 25px;
        margin-bottom: 50px;
    }

    .item {
        text-align: center;
        width: 20%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        @media screen and (max-width: 992px) {
            margin-bottom: 30px;
        }

        &:before {
            content: '';
            position: absolute;
            right: 0;
            height: 150px;
            width: 0;
            border: 1px solid #E6E8F2;
            top: 18px;

            @media screen and (max-width: 992px) {
                height: 75px;
            }
        }

        &:last-child {
            &:before {
                display: none;
            }
        }

        img {
            width: 65px;
        }

        .price {
            color: #242A33;
            font-size: 32px;   
            margin: 18px 0 8px 0;
            height: 38px;

            @media screen and (max-width: 992px) {
                font-size: 22px;
            }
        }

        .priceh {
            color: #6C7686;
            margin: 0 0 18px 0;
            height: 19px;
        }

        .price-percent {
            color: #06B787;
            margin: 0;

            img {
                height: 13px;
                width: auto;
                margin-right: 5px;
            }
        }
    }
`

export const WhyComp = styled.div`
    background-color: #1C2730;
    padding: 140px 0 40px 0px;

    @media screen and (max-width: 992px) {
        padding: 70px 0 20px 0px;
    }

    h3 {
        color: #FFFFFF;
        padding: 0;
        margin: 0 0 90px 0;
        font-size: 62px;
        font-weight: normal;

        @media screen and (max-width: 992px) {
            margin: 0 0 45px 0;
            font-size: 34px;
            text-align: center;
        }
    }

    .items {
        &:after {
            content: '';
            display: table;
            clear: both;
        }

        .item {
            float: left;
            width: 22%;
            margin-right: 4%;
            margin-bottom: 100px;

            @media screen and (max-width: 992px) {
                margin-bottom: 50px;
            }

            &:nth-child(4n) {
                margin-right: 0px;
            }

            img {
                height: 55px;
            }

            h5 {
                color: #FFFFFF;
                font-size: 26px;
                font-weight: normal;
                padding: 0;
                margin: 35px 0 15px 0;

                @media screen and (max-width: 992px) {
                    font-size: 20px;
                    margin: 20px 0 12px 0;
                }
            }

            p {
                padding: 0;
                margin: 0;
                color: #6C7686;
            }
        }
    }
`

export const CoinsComp = styled.div`
    background-color: #fff;
    padding: 120px 0 0px 0;

    @media screen and (max-width: 992px) {
        padding-top: 60px;
    }

    h3 {
        color: #242A33;
        padding: 0;
        margin: 0 0 90px 0;
        font-size: 62px;
        font-weight: normal;

        @media screen and (max-width: 992px) {
            margin: 0 0 45px 0;
            font-size: 34px;
            text-align: center;
        }
    }

    .items {
        &:after {
            content: '';
            display: table;
            clear: both;
        }

        .item {
            float: left;
            width: 15%;
            margin-right: 6.25%;
            margin-bottom: 80px;

            @media screen and (max-width: 992px) {
                margin-right: 0;
                margin-bottom: 40px;
            }

            &:nth-child(5n) {
                margin-right: 0px;
            }

            img {
                width: 55px;
                height: 55px;
                object-fit: contain;
                margin-right: 15px;
                float: left;
            }

            h5 {
                color: #6C7686;
                font-size: 20px;
                font-weight: normal;
                padding: 0;
                margin: 0;

                a {
                    font-size: 16px;
                    color: #A5B1C3;
                }
            }
        }
    }
`

export const SimpleTradeLine = styled.div`
    display: flex;
    margin-top: 60px;
    margin-bottom: 130px;

    @media screen and (max-width: 992px) {
        margin-bottom: 60px;
        margin-top: 30px;
    }

    .line {
        width: calc(100% - 240px);
        height: 9px;
        background-color: #F2F3F6;

        .active-line {
            width: 30%;
            height: 9px;
            transition: all 0.1s ease;
            border-radius: 12px;
            background: transparent linear-gradient(90deg, #08AA7D 0%, #2765C9 100%) 0% 0% no-repeat padding-box;
            
            &[type="ASK"] {
                background: transparent linear-gradient(90deg, #F7A13C 0%, #D85947 100%) 0% 0% no-repeat padding-box;
            }
        }
    }

    .line-data {
        margin-left: auto;
        color: #6C7686;
        font-size: 16px;
        text-align: right;
        position: relative;
        top: -15px;

        span {
            color: #0ECBFD;
        }

        img {
            margin-right: 12px;
            position: relative;
            top: 5px;
        }
    }
`

export const SimpleTrade = styled.div`
    .trade-right {
        float: right;
        width: 318px;

        .coin {
            width: 193px;
            height: 47px;
            float: left;
            margin-right: 16px;
            border: 1px solid #CDD6E3;
            border-radius: 8px;
            position: relative;

            .active-coin {
                font-size: 16px;
                color: #6C7686;
                position: relative;
                height: 50px;
                text-align: center;
                line-height: 50px;
                cursor: pointer;

                img {
                    position: absolute;
                    top: 22px;
                    right: 15px;
                    width: 11px;
                }
            }

            .coin-list-dropdown {
                position: absolute;
                top: 100%;
                width: 100%;
                z-index: 2;
                background: #fafafa;
                max-height: 0px;
                border-radius: 8px;
                overflow: hidden;

                p {
                    margin: 0;
                    padding: 15px 10px;
                    font-size: 15px;
                    color: #6C7686;
                    border: 1px solid #cdd6e3;
                    border-radius: 8px;
                    /* border-bottom: 1px solid #cdd6e3; */
                    cursor: pointer;

                    &:hover {
                        background: #e2e2e2;
                    }
                }
            }

            &:hover {
                .coin-list-dropdown {
                    max-height: 200px;
                }
            }
        }

        .currency {
            float: left;
            width: 104px;
            height: 50px;
            background: #DBF7FF 0% 0% no-repeat padding-box;
            border-radius: 8px;
            line-height: 23px;
            text-align: center;
            position: relative;

            .value {
                font-size: 16px;
                color: #0ECBFD;
                text-transform: uppercase;
            }

            .left {
                position: absolute;
                top: 19px;
                left: 20px;
                cursor: pointer;
                width: 0px;
                height: 0px;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-right: 9px solid #0ECBFD;
            }

            .right {
                position: absolute;
                top: 19px;
                right: 20px;
                cursor: pointer;
                width: 0px;
                height: 0px;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 9px solid #0ECBFD;
            }
        }
    }

    h3 {
        color: #242A33;
        font-size: 58px;
        font-weight: normal;
        margin: 0 0 50px 0;

        @media screen and (max-width: 992px) {
            font-size: 33px;
            margin: 0 0 25px 0;
            text-align: center;
        }
    }

    .tabs {
        display: flex;
        margin-bottom: 45px;

        @media screen and (max-width: 992px) {
            margin-bottom: 22px;
        }

        button {
            flex: 1;
            background-color: #D9DCE6;
            height: 60px;
            font-size: 18px;
            color: #6C7686;
            border: 0;
            outline: none;

            @media screen and (max-width: 992px) {
                height: 40px;
            }

            &.active:first-child {
                background-color: #08AA7D;
                color: #FFFFFF;
            } 

            &.active:last-child {
                background-color: #D85947;
                color: #FFFFFF;
            } 
        }
    }

    .tabs-list {
        display: flex;

        .tab-coin {
            margin-right: 1.5%;
            flex: 1;
            background-color: #FFFFFF;
            box-shadow: 0px 6px 12px #EDEEF2C6;
            border-radius: 11px;
            padding: 30px 0;

            @media screen and (max-width: 992px) {
                padding: 15px;
                margin-bottom: 25px;
                max-width: calc(100% - 30px);
            }

            &:last-child {
                margin-right: 0;
            }

            button {
                background-color: #DBF7FF;
                width: 100%;
                border-radius: 6px;
                border: 0;
                outline: none;
                color: #0ECBFD;
                font-size: 14px;
                height: 42px;
                width: 80%;
                margin-left: 10%;

                @media screen and (max-width: 992px) {
                    height: 32px;
                }
            }

            p {
                color: #6C7686;
                font-size: 13px;
                text-align: center;
                font-weight: 100;

                span {
                    display: block;
                    font-weight: normal;
                }
            }

            h4 {
                color: #242A33;
                font-size: 36px;
                margin: 35px 0 45px 0;
                text-align: center;

                @media screen and (max-width: 992px) {
                    font-size: 26px;
                    margin: 25px 0 20px 0;
                }
            }

            .inputs {
                height: 110px;
                width: 80%;
                margin-left: 10%;

                ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: #6C7686;
                    opacity: 1; /* Firefox */
                }

                :-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color: #6C7686;
                }

                ::-ms-input-placeholder { /* Microsoft Edge */
                    color: #6C7686;
                }

                input {
                    border: 1px solid #CDD6E3;
                    border-radius: 6px;
                    width: calc(100% - 11px);
                    height: 35px;
                    color: #6C7686;
                    padding-left: 8px;
                    margin: 5px 0;
                }
            }
        }
    }
`