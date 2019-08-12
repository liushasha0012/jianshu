import React, { PureComponent } from 'react';
import { LoginWrapper, LoginTable, Input, Button, InputWrapper } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent {
    render() {
        if (!this.props.loginStatus) {
            return (
                <LoginWrapper>
        <LoginTable>
          <InputWrapper>
            <Input placeholder='手机号或邮箱' ref={(input)=>{this.account = input}}/>
            <span className="iconfont">&#xe603;</span>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='密码' className='password' type='password' ref={(input)=>{this.password = input}}/>
            <span className="iconfont">&#xe64b;</span>
          </InputWrapper>
          <Button onClick={()=>{this.props.login(this.account,this.password)}}>登录</Button>
        </LoginTable>
      </LoginWrapper>
            )
        } else {
          return <Redirect to='/' />
        }

    }
}


const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        //accountElem和passwordElem获得的是对应的dom元素
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
        //accountElem.value, passwordElem.value获得的是input框中输入的值
    }
});

export default connect(mapState, mapDispatch)(Login);