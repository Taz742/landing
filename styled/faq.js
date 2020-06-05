import styled from 'styled-components'

export const FaqComp = styled.div`
    margin-top: 60px;

    @media screen and (max-width: 992px) {
        margin-top: 25px;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #A9B2BF;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #A9B2BF;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #A9B2BF;
    }

    .search {
        position: relative;
        background: #FFFFFF;
        box-shadow: 0px 6px 12px #EDEEF2C6;
        border-radius: 10px;
        overflow: hidden;
        padding-left: 45px;
        margin-bottom: 90px;

        @media screen and (max-width: 992px) {
            margin-bottom: 25px;
            padding-left: 15px;
        }

        input {
            width: 100%;
            height: 96px;
            font-size: 20px;
            color: #A9B2BF;
            border: 0;
            outline: none;

            @media screen and (max-width: 992px) {
                height: 65px;
            }
        }

        img {
            position: absolute;
            top: 39px;
            right: 50px;

            @media screen and (max-width: 992px) {
                right: 15px;
                top: 25px;
            }
        }
    }

    .accordion__item {
        padding: 40px 0px;
        border-bottom: 1px solid #d5d9e0;

        @media screen and (max-width: 992px) {
            padding: 20px 0;
        }

        &:last-child {
            border-bottom: 0px;
        }
    }

    .accordion__button {
        letter-spacing: -0.52px;
        color: #242A33;
        font-size: 26px;
        list-style: disc;
        display: list-item;
        outline: none;
        cursor: pointer;
        margin-left: 26px;
        height: 57px;
        line-height: 57px;

        @media screen and (max-width: 992px) {
            font-size: 18px;
            height: 35px;
            line-height: 35px;
        }

        .pull-right {
            float: right;
            background-color: rgba(14, 203, 253, 0.1);
            width: 57px;
            height: 57px;
            border-radius: 50%;
            text-align: center;
            line-height: 57px;
            position: relative;

            @media screen and (max-width: 992px) {
                height: 35px;
                line-height: 35px;
                width: 35px;
            }

            &:before {
                content: '';
                position: absolute;
                top: 28px;
                left: 18px;
                width: 22px;
                height: 4px;
                background: #0ECBFD;

                @media screen and (max-width: 992px) {
                    top: 16px;
                    left: 11px;
                    width: 16px;
                }
            }
        }

        &[aria-disabled='false'] { 
            .pull-right {
                background-color: transparent;

                &:before {
                    content: '+';
                    position: absolute;
                    top: 1px;
                    left: 20px;
                    width: 0;
                    height: 0px;
                    color: #6C7686;
                    font-size: 31px;

                    @media screen and (max-width: 992px) {
                        left: 11px;
                    }
                }
            }
        }
    }
    
    .accordion__panel {
        font-size: 20px;
        letter-spacing: -0.4px;
        color: #6C7686;
        padding-left: 26px;
        width: 80%;
        padding-top: 15px;
    }
`;
