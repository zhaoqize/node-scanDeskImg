import { observable, computed,autorun } from 'mobx';

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

// const age = observable(10)

// const dispose = autorun(() => {
//   debugger
//     if (age.get() < 0)
//         throw new Error("Age should not be negative")
//     console.log("Age", age.get())
// })


const appState = new AppStore();

export default appState