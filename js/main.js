// swiper

new Swiper('.swipe-menu .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    el: '.swipe-menu .swiper-pagination', // 페이지 번호 요소
    clickable: true, // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 이전, 다음 슬라이드 버튼 사용
    nextEl: '.swipe-menu .swiper-button-next',
    prevEl: '.swipe-menu .swiper-button-prev',
  },
});