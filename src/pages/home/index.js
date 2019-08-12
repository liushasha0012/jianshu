import React, {PureComponent} from 'react';
import Topics from './components/Topics';
import List from './components/List';
import Writer from './components/Writer';
import Recommends from './components/Recommends';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

//PureComponent和immutable.js数据管理框架结合使用，能避免很多坑
class Home extends PureComponent {
  handleBackTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const {showTips, showScroll, handleShowTips, handleHideTips} = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img"
               src="https://upload-images.jianshu.io/upload_images/5958646-15f0131991dec17b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"
               alt=""/>
          <Topics/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommends/>
          <Writer/>
        </HomeRight>
        {
          showScroll ? <BackTop
            onClick={this.handleBackTop}
            onMouseEnter={handleShowTips}
            onMouseLeave={handleHideTips}
          >
            <div className={showTips ? "backTop " : "backTop hideTips"}>回到顶部</div>
            ∧
          </BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  };

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTops)
  }
}


const mapState = (state) => ({
  showTips: state.getIn(['home', 'showTips']),
  showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  },
  handleShowTips() {
    dispatch(actionCreators.getShowTips())
  },
  handleHideTips() {
    dispatch(actionCreators.getHideTips())
  },
  changeScrollTops() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.showScrollTops(true));
    } else {
      dispatch(actionCreators.showScrollTops(false))
    }

  }
});
export default connect(mapState, mapDispatch)(Home);