import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { observable, computed,autorun } from 'mobx';
import { observer } from 'mobx-react';

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

// store 好几种写法
class AppStore {
  @observable slideIndex = 0;

  indexChange (value){
    this.slideIndex = value;
  }
  
  //每次点击的时候 导致slideIndex变化 squared然后执行中间计算或操作
  // @computed get squared() {
  //   return this.slideIndex*10000;
  // }

}

const age = observable(10)

const dispose = autorun(() => {
  debugger
    if (age.get() < 0)
        throw new Error("Age should not be negative")
    console.log("Age", age.get())
})


const appState = new AppStore();

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