// do something!
// DOM 요소를 가져옵니다.
/*const toggleButton = document.querySelector('.toggle');
const nav = document.querySelector('nav');

// 토글 버튼의 클릭 이벤트 핸들러를 정의합니다.
toggleButton.addEventListener('click', function () {
  // 사이드 내비게이션의 활성화 여부를 확인합니다.
  const isNavActive = nav.classList.contains('active');

  // 사이드 내비게이션의 상태를 토글합니다.
  if (isNavActive) {
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
});
*/

// DOM 요소를 가져옵니다.
const toggleButton = document.querySelector('.toggle');
const nav = document.querySelector('nav');

// 사이드 내비게이션 상태를 저장하고 읽어오는 함수를 정의합니다.
function saveNavState(state) {
  localStorage.setItem('navState', state);
}

function getNavState() {
  return localStorage.getItem('navState');
}

// 토글 버튼의 클릭 이벤트 핸들러를 정의합니다.
toggleButton.addEventListener('click', function () {
  const isNavActive = nav.classList.contains('active');

  if (isNavActive) {
    nav.classList.remove('active');
    saveNavState('closed');
  } else {
    nav.classList.add('active');
    saveNavState('opened');
  }
});

// 페이지 로드 시에 사이드 내비게이션 상태를 복원합니다.
document.addEventListener('DOMContentLoaded', function () {
  const navState = getNavState();

  if (navState === 'opened') {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});