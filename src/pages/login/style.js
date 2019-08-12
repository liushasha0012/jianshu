import styled from 'styled-components';

export const LoginWrapper = styled.div`
position: relative;
  height: 100%;
  min-height: 750px;
  background: #f1f1f1;
  font-size: 14px;
  text-align: center;
  
`;
export const LoginTable = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  width: 400px;
  height: 300px;
  margin-left: -200px;;
  padding: 50px 50px 30px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  border-radius: 4px;
  box-sizing: border-box; 
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 4px 12px 4px 35px;
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
  border-radius: 4px 4px 0 0;
  background: #f7f7f7;
  vertical: middle;
  margin-bottom：0；
  font-size: 18px;
  &.id {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  &.password {
    border-radius: 0 0 4px 4px;
    border-top: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  .iconfont {
    font-size: 18px;
    color: #969696;
    position: absolute;
    left: 3.5%;
    top: 28%;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  margin-top: 30px;
  background: #3194d0;
  padding: 9px 18px;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;