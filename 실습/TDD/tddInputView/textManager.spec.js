describe('텍스트 관리자 테스트 입니다.', () => {
  let textManager;

  // beforeEach: it 함수 호출 직전에 실행됩니다.
  beforeEach( () => {
    textManager = new TextManager();
  });

  it('텍스트 값을 전달합니다.', () => {
    const initVal = textManager.getValue();
    expect(textManager.getValue()).toBe(initVal);
  });

  it('텍스트 값을 수정합니다', () => {
    const newText = {
      data: 'Hello Hedgie!'
    };
    textManager.setValue(newText);

    expect(textManager.getValue()).toBe(newText.data);
  });
});