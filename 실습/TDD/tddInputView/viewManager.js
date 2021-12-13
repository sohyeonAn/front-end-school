function ViewManager(textManager, options) {
  if(!textManager || !options.btnEl || !options.viewerEl || !options.inpEl){
    console.log(options.btnEl);
    console.log(options.viewerEl);
    console.log(options.inpEl);
    
    // throw 사용자 정의 예외를 만들고 프로그램을 종료합니다.
    throw Error('전달인자중에 빈값이 존재합니다.');
  }

  this.inpEl = options.inpEl;
  this.viewerEl = options.viewerEl;
  this.textManager = textManager;

  options.btnEl.addEventListener('click', () => {
    this.changeValue();
  });
}

ViewManager.prototype.changeValue = function () {
  this.textManager.setValue({data: this.inpEl.value});
  this.updateView();
};

ViewManager.prototype.updateView = function () {
  this.viewerEl.textContent = this.textManager.getValue();
};