// 'moving-title' 클래스를 가진 요소가 클릭될 때 'jump' 클래스 추가
document.querySelector('.moving-title').addEventListener('click', function() {
    this.classList.add('jump');
});

// Swiper 인스턴스 생성
var swiper = new Swiper('.swiper-container', {
  centeredSlides: true, // 슬라이드 중앙 정렬 옵션 활성화
  slidesPerView: 'auto', // 슬라이드 개수를 자동으로 결정

  on:{
    slideChange:function(){
      var slides = document.querySelectorAll('.swiper-slide');

      // 모든 슬라이드에서 'active' 클래스 제거
      slides.forEach(function(slide){
        slide.classList.remove('active'); 
      });

      // 현재 활성화된 슬라이드에 'active' 클래스 추가 
      slides[this.activeIndex].classList.add('active'); 
    }
  }
});