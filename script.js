document.querySelector('.moving-title').addEventListener('click', function() {
    this.classList.add('jump');
});

var swiper = new Swiper('.swiper-container', {
  centeredSlides:true, // 가운데 정렬 옵션 활성화
  slidesPerView:'auto', // 자동으로 슬라이드 개수 결정
  loop:true, // 반복 재생 옵션 활성화

  on:{
    slideChange:function(){
      var slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(function(slide){
        slide.classList.remove('active'); // 모든 슬라이드에서 active 클래스 제거
      });

      slides[this.activeIndex].classList.add('active'); // 현재 활성화된 슬라이드에 active 클래스 추가 
    }
  }
});