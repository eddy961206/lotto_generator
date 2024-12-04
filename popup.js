$(document).ready(function() {
  $('#generate').on('click', generateNumbers);
});

function generateNumbers() {
  // 기존 애니메이션 클래스 제거
  $('.number').removeClass('animate');

  // 로또 번호 생성 (1-45)
  var numbers = [];
  while (numbers.length < 6) {
    var num = Math.floor(Math.random() * 45) + 1;
    if ($.inArray(num, numbers) === -1) {
      numbers.push(num);
    }
  }
  numbers.sort(function(a, b) { return a - b; });

  // 애니메이션과 함께 화면 업데이트
  $('.number').each(function(index, element) {
    // 애니메이션 초기화
    $(element).css('animation', 'none');
    element.offsetHeight; // 리플로우 트리거
    $(element).css('animation', '');

    // 지연 시간을 두고 애니메이션 클래스 추가
    setTimeout(function() {
      $(element).text(numbers[index]);
      $(element).addClass('animate');
    }, index * 200);
  });
}
