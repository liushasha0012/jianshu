import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecItem, RecList} from '../style';

class Recommends extends PureComponent {
  render() {
    const {recUrl} = this.props;
    return (
      <div>
        <RecItem>
          {
            recUrl.map((item) => (
              <RecList
                imgUrl={item.get('imgUrl')}
                key={item.get('id')}
              />
            ))
          }

        </RecItem>
      </div>
    );
  }
}

const mapState = (state) => ({
  recUrl: state.getIn(['home', 'recUrl'])
});
export default connect(mapState, null)(Recommends);