import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent {
  render() {
    const {articleList, page, loadMoreList} = this.props;
    return (
      <div>
        <ListItem>
          {
            articleList.map((item, index) => (
              <Link to={'/detail/' + item.get('id')} key={index} className='router'>
                <ListInfo>
                  <img className='pic'
                       src={item.get('picUrl')}
                       alt=""/>
                  <p className='title'>{item.get('title')}</p>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </Link>
            ))
          }
        </ListItem>
        <LoadMore onClick={() => loadMoreList(page)}>
          阅读更多
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});
const mapDispatchToProps = (dispatch) => ({
  loadMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(List);