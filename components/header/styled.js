import styled from 'styled-components'

export const HeaderComp = styled.div`
    height: 520px;
    background-image: url('/images/BG.png');
    background-position: center;
    background-size: cover;

    &.hom-header {
        height: 600px;
    }

    @media screen and (max-width: 992px) {
        max-height: 350px;
    }

    .header-container {
        padding-top: 50px;
        display: flex;

        @media screen and (max-width: 992px) {
            padding-top: 20px;
            display: block;
        }
    }

    .logo {
        color: #F4F5FA;
        font-size: 40px;
    }

    .right-burger {
        display: none;

        @media screen and (max-width: 992px) {
            -webkit-user-select: none;
            user-select: none;
            position: relative;
            width: 33px;
            display: block;
            float: right;
            top: 13px;

            span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                position: relative;
                background: #cdcdcd;
                border-radius: 3px;
                z-index: 1;
                transform-origin: 4px 0px;
                transition: all 0.3s ease;
            }

            span:last-child {
                transform-origin: 0% 0%;
            }

            span:nth-last-child(1) {
                transform-origin: 0% 100%;
            }

            &.active {
                span {
                    opacity: 1;
                    transform: rotate(45deg) translate(-2px, -1px);
                }

                span:nth-last-child(2) {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                span:nth-last-child(1) {
                    transform: rotate(-45deg) translate(0, -1px);
                }
            }
        }
    }

    .menu {
        margin-left: 70px;
        transition: all 0.3s ease;

        a {
            color: #DBE2ED;
            margin-right: 40px;
            text-transform: capitalize;
            padding: 13px 0;
            border-bottom: 1px solid transparent;

            &:hover,
            &.active {
                opacity: 1;
                color: #0ECBFD;
                border-color: #0ECBFD;
            }
        }

        @media screen and (max-width: 992px) {
            position: fixed;
            top: 80px;
            right: -100vw;
            width: 100%;
            height: calc(100vh - 80px);
            z-index: 12;
            background-color: rgba(36, 42, 51, 0.95);
            margin: 0px;

            &.active {
                right: 0px;
            }

            a {
                display: block;
                margin-left: 40px;
                margin-top: 18px;
                padding-top: 0;
            }
        }
    }

    .right-header {
        display: flex;
        margin-left: auto;

        a {
            color: #0ECBFD;
            padding: 13px 30px;
            background-color: transparent;
            border-radius: 4px;
            background-color: rgba(26, 77, 96, 0.6);
        }

        .language {
            padding-right: 40px;
            margin-right: 40px;
            border-right: 1px solid #798CAA;
            height: 22px;
            margin-top: 12px;

            img {
                cursor: pointer;
                width: 22px;
                height: 22px;
            }
        }
    }
`