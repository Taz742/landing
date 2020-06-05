import styled from 'styled-components'

export const AboutComp = styled.div`
    .content {
        margin-top: 50px;
        color: #6C7686;
        font-size: 18px;
        margin-bottom: 80px;
    }

    .team {
        display: flex;
        margin-bottom: 120px;

        @media screen and (max-width: 992px) {
            margin-bottom: 60px;
        }

        div {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-right: 8.66%;
            max-width: 18.5%;

            @media screen and (max-width: 992px) {
                max-width: 100%;
                margin-right: 0;
                margin-bottom: 30px;
            }

            &:last-child {
                margin-right: 0;
            }

            & > img {
                width: 184px;
                margin: 0 auto 30px auto;
            }

            h5 {
                margin: 0 0 10px 0;
                font-size: 26px;
                color: #242A33;
            }

            span {
                color: #A5ADBA;
            }

            p {
                margin: 30px 0;
                color: #6C7686;
            }

            a {
                max-width: 50px;

                @media screen and (max-width: 992px) {
                    margin: 0 auto;
                }                
            }
        }
    }
`

export const HiringComp = styled.div`
    margin-bottom: 80px;
    background-color: #1C2730;
    padding: 120px 0;

    @media screen and (max-width: 992px) {
        padding: 60px 0;
    }

    &:after {
        content: '';
        display: table;
        clear: both;
    }

    img {
        max-width: 350px;
        margin-top: 33px;
    }

    div div {
        width: 50%;
        float: left;
    }

    h3 {
        color: #FFFFFF;
        font-size: 58px;
        margin: 0 0 30px 0;
        font-weight: normal;

        @media screen and (max-width: 992px) {
            font-size: 30px;
        }
    }

    p {
        color: #707B8D;
        font-size: 18px;
        margin-bottom: 80px;
    }

    a.hire {
        width: 286px;
        height: 70px;
        background-color: rgba(14, 203, 253, 0.15);
        border-radius: 4px;
        border: 0;
        text-align: center;
        line-height: 70px;
        color: #0ECBFD;
        font-size: 22px;
        outline: none;
    }
`