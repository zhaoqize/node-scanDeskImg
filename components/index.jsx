import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { observer } from 'mobx-react';
import appState from './state/states'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


@observer
class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange = (value) => {
    appState.indexChange(value)
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={appState.slideIndex}
        >
          <Tab label="博客" value={0} />
          <Tab label="资讯" value={1} />
          <Tab label="工具" value={2} />
        </Tabs>
        <SwipeableViews
          index={appState.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Layout;