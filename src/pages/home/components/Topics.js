import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';

class Topics extends PureComponent {
  render() {
    const {topicList} = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=''
              />
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
});
export default connect(mapStateToProps, null)(Topics);