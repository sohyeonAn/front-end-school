// variables
const introLoginBtn = document.querySelector('.intro .btn-login');
const introBox = document.querySelector('.intro');
const loginModal = document.querySelector('.modal-login');
const modalCloseBtn = document.querySelector('.modal-login .btn-close');
const inputId = document.querySelector('.inp-id');
const inputPwd = document.querySelector('.inp-pwd');
const modalLoginBtn = document.querySelector('.modal-login .btn-login');

// Event Listners
introLoginBtn.addEventListener('click', openLoginModal);
modalCloseBtn.addEventListener('click', closeLoginModal);
modalLoginBtn.addEventListener('click', loginValidation);

// functions
function openLoginModal() {
  loginModal.classList.remove('hidden');
  introBox.classList.add('hidden');
}

function closeLoginModal() {
  inputId.value = '';
  inputPwd.value = '';
  introBox.classList.remove('hidden');
  loginModal.classList.add('hidden');
}

function loginValidation(e) {
  // submit 자동 리로드 해제
  e.preventDefault();
  const wrapId = document.querySelector('.id-wrap');
  const wrapPwd = document.querySelector('.pwd-wrap');

  // 초기 리셋. 이미 주의 텍스트가 있는데 더 추가되지 않도록 함.
  if(wrapId.lastChild.className === 'txt-warning'){
    wrapId.removeChild(wrapId.lastChild);
  }
  if(wrapPwd.lastChild.className === 'txt-warning'){
    wrapPwd.removeChild(wrapPwd.lastChild);
  }

  const warningTxt = document.createElement('p');
  warningTxt.classList.add('txt-warning');

  if(!inputId.value){
    inputId.focus();
    inputId.classList.add('warning');
    warningTxt.innerText = '아이디를 입력해 주세요.'; 
    wrapId.appendChild(warningTxt);
    return ;
  }else{
    inputId.classList.remove('warning');
  }
  if(!inputPwd.value){
    inputPwd.focus();
    inputPwd.classList.add('warning');
    warningTxt.innerText = '비밀번호를 입력해 주세요.';
    wrapPwd.appendChild(warningTxt);
    return ;
  }else{
    inputPwd.classList.remove('warning');
  }
}