import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
   `;

//logo组件
export const Logo = styled.div`
    cursor: pointer;
    width: 100px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPic}) no-repeat;  
    // ${logoPic}多行文本里嵌变量
    background-size: contain;
`;

//头部中间栏
export const Nav = styled.div`
    height: 100%;
    width: 980px;
    margin: 0 auto;
    padding-right: 90px;
    box-sizing: border-box;
    `;

//中间栏里的链接组件
export const NavItem = styled.div`
    &.left {
        float: left;    
    }
    &.right {
        float: right;
        color: #969696;
        font-size: 15px;
    }
    &.active {
        color: #ea6f5a
    }
    line-height: 26px;
    padding: 15px;
    //box-sizing: border-box; 没用
    font-size: 17px;
    color: #333;
`;
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    //这个组件下类名为iconfont的元素的样式
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 4px;
        line-height: 30px;
        width: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
        background: #777;
        color: #fff;
    }   
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused { 
        width: 240px;
    }
     &.slide-enter { //这些样式和组件的最外层的input框是同级关系，所以样式要加&
        transition: all 0.5s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all 0.5s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;
export const SearchInfo = styled.div`
  position: absolute;
  margin-top: 2px;
  left: 20px;
  top: 56px;
  width: 250px;
  padding: 0 20px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.a`
  position: relative;
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  :hover {
    color: #333;
  }
   .spin {
   padding-top: 0.13em;
    display: block;
    float: left;
    margin-right: 4px;
    font-size: 12px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchItem = styled.a`
  display: block;
  float: left;
  border: 1px solid #ddd;
  font-size: 12px;
  color: #787878;
  border-radius: 3px;
  padding: 2px 6px;
  margin-right: 16px;
  margin-bottom: 12px;
  line-height: 15px;
`;
export const Addition = styled.div` 
    height: 56px;
    position: absolute;
    top: 0;
    right: 0;
`;
export const Button = styled.button`
    //float: left;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    border-radius: 19px;
     padding: 0 25px;
    font-size: 15px;
     border: 1px solid #ec6149;
    &.reg {
    color: #ec6149;
    background: #fff; 
    }
    &.writing {
       color: #fff;
       background: #ec6149;
    } 
`;