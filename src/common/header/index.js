import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchItem,
    SearchInfoList
} from './style';
import { Globalstyle } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

class Header extends Component {
    getInfoArea() {
        const { focused, list, page, totalPage, mouseIn, mouseEnter, mouseLeave, changePageList } = this.props;
        const newList = list.toJS(); //把immutable对象转换成JS对象
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => changePageList(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => {
                this.spinIcon = icon
              }} className="iconfont spin">&#xe66d; </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, list, login, handleInputFocus, handleInputBlur, logout } = this.props;
        return (
            <HeaderWrapper>
        <Globalstyle/>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login? 
            <NavItem className='right' onClick={logout}>退出</NavItem>:
            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused} //用来控制入场和出场动画
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? "iconfont zoom focused" : "iconfont zoom"}>&#xe64d;</span>
            {this.getInfoArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Link to='/write'>
          <Button className='writing'>
            <span className="iconfont">&#xe61d;</span> 写文章
          </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
        )
    }
}


//store里的数据通过这个方法映射到这个组件中
const mapStateToProps = (state) => {
    return {
        //focused: state.header.get('focused') //把redux数据库里的focused映射给props里的focused
        //使用immutable后，不能直接使用state.header.focused的用法，要使用get方法
        //state是JS对象，state.header是Immutable对象，前后对象不统一
        //使用redux-immutable后，把state也变为immutable对象，因此获取header用get方法。
        //1. focused: state.get('header').get('focused');
        //也可以用getIn方法
        focused: state.getIn(['header', 'focused']), //这句代码的含义：获取state下的header下的focused
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
};
//组件和store连接时，组价想要改变store里的内容，就要通过dispatch方法
// 把改变store里内容的dispatch方法映射到props里面
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        changePageList(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else if (page === totalPage) {
                dispatch(actionCreators.changePage(1));
            }

        },
        mouseEnter() {
            dispatch(actionCreators.getMouseEnter());
        },
        mouseLeave() {
            dispatch(actionCreators.getMouseLeave());
        },
        logout() {
            dispatch(loginActionCreators.logout()); //这个操作是为了改变login里面的数据，所以要用到的actionCreators是login下面的，并且与这个方法相关的操作都应该放到login里面        
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);