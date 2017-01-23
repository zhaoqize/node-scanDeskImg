import { observable, computed,autorun } from 'mobx';

// store 好几种写法
class AppStore {
  @observable slideIndex = 0;

  indexChange (value){
    this.slideIndex = value;
  }
  
}

const appState = new AppStore();

//log
autorun(() => console.log(appState.slideIndex));

export default appState