import styled from 'styled-components'

export const TermsComp = styled.div`
    margin-top: 70px;
    margin-bottom: 150px;

    @media screen and (max-width: 992px) {
        margin-top: 20px;
        margin-bottom: 50px;
    }

    &:after {
        content: '';
        clear: both;
        display: table;
    }

    .items {
        float: left;
        width: 23%;
        margin-right: 2%;

        p {
            margin: 0 0 50px 0;
            color: #6C7686;
            font-size: 20px;
            position: relative;
            display: inline-block;
            cursor: pointer;

            @media screen and (max-width: 992px) {
                margin: 0 0 20px 0;
            }

            &:hover,
            &.active {
                color: #0ECBFD;

                &:before {
                    content: '';
                    position: absolute;
                    border: 2px solid #0ECBFD;
                    width: 50px;
                    height: 0;
                    left: calc(100% + 20px);
                    top: 10px;
                }
            }
        }
    }

    .content {
        width: 70%;
        float: left;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.4px;
        color: #6C7686;
        max-height: 70vh;
        padding-right: 15px;
        overflow-y: auto;
    }
`
