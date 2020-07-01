import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 3;
`;

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    z-index: 4;
    width: 510px;
    border-radius: 22px;
    background-color: #242A33;
    padding: 60px;
    left: 50%;
    margin-left: -315px;
    margin-top: 9%;

    @media screen and (max-width: 992px) {
        left: 0;
        margin-left: 2%;
        width: 87%;
        padding: 15px;
    }

    .modal-header {
        letter-spacing: 0px;
        color: #FFFFFF;
        font-size: 26px;
        margin-bottom: 40px;

        img {
            cursor: pointer;
            float: right;
        }
    }

    button {
        background-color: #0ECBFD;
        width: 240px;
        height: 45px;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        border: 0;
        border-radius: 8px;
        margin-top: 50px;
    }

    label:not(.file) {
        width: 48%;
        margin-right: 4%;
        float: left;
        margin-bottom: 22px;
        position: relative;

        @media screen and (max-width: 992px) {
            margin-right: 0;
            width: 100%;
        }

        span {
            position: absolute;
            color: #495264;
            font-size: 14px;
            top: 15px;
            left: 10px;
            padding: 0 5px;
            transition: all 0.3s ease;
            background-color: #242A33;
        }

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    .clear {
        clear: both;
        display: table;
    }

    input[type="text"] {
        height: 43px;
        border-radius: 8px;
        border: 1px solid #3A4252;
        padding: 0 15px;
        width: calc(100% - 30px);
        background-color: #242A33;
        color: #fff;
        outline: none;

        &:not(:placeholder-shown),
        &:focus {
            border-color: #0ECBFD;
        }

        &:not(:placeholder-shown) ~ span,
        &:focus ~ span {
            top: -8px;
            color: #0ECBFD;
        }
    }

    label.file {
        color: #0ECBFD;
        font-size: 14px;
        margin-top: 22px;
        display: inline-block;

        input {
            display: none;
        }

        img {
            padding-right: 12px;
        }
    }
`;