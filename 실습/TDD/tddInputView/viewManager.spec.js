describe('클릭이벤트 처리 및 뷰를 담당하는 함수 입니다.', () => {
  let textManager;
  let viewerEl, btnEl, inpEl;
  let viewManager;

  beforeEach(() => {
    textManager = new TextManager();
    viewerEl = document.createElement('strong');
    btnEl = document.createElement('button');
    inpEl = document.createElement('input');

    viewManager = new ViewManager(textManager, {
      viewerEl,
      btnEl,
      inpEl
    });
  });

  // dependency injection (의존성 주입)
  // 혼자서는 사용될 수 없고 다른 객체로 부터 주입을 받아야 사용 가능.
  it('viewManager에 인자가 제대로 전달되었는지 확인합니다.', () => {
    const textManager = null;
    const btnEl = null;
    const viewerEl = null;
    const inpEl = null;

    // 인자가 전달되는지 확인하는 함수
    const actual = () => {
      viewManager = new ViewManager(textManager, {
        btnEl,
        viewerEl,
        inpEl
      });
    };

    expect(actual).toThrowError();
  });


  it('click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.', () => {
    // 특정한 모듈의 함수를 감시.
    spyOn(viewManager, 'changeValue');
    btnEl.click();
    // toHaveBeenCalled: 함수가 호출이 된 적이 있는지 판별.
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it('updateView 함수를 실행합니다.', () => {
    // 특정한 모듈의 함수를 감시.
    spyOn(viewManager, 'updateView');
    viewManager.changeValue();
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});