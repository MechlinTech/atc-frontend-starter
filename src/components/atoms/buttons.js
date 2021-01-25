import { Button } from 'antd';
import styled from 'styled-components';

import { GiHelp } from 'react-icons/gi'

const BtnComponent = () => {
    return (
        <Button type="primary" htmlType="submit">
            {'Submit'}
        </Button>
    );
};


const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: ${props => props.black ? '#333' : '#a2792c'};
    color: white;
    font-weight: 700;
    border-radius: 5px;
    border-color: ${props => props.black ? '#5c5c5c' : '#c7bca8'};
  }
`;

export const Btn2 = (props) => {
    const { text } = props
    return (
        <ButtonContainer>
            <Button type="primary" >{text}</Button>
        </ButtonContainer>

    )
}

export const Btn3 = (props) => {
    const { text } = props
    return (
        <ButtonContainer black>
            <Button type="primary" >{props.icon ? <GiHelp /> : ''}{`  ${text}`}</Button>
        </ButtonContainer>
    )
}

export default BtnComponent;