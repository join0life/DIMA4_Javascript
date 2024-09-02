*** jQuery 소개

- 2006년 모질라의 개발자인 존 레식이 개발한 자바스크립트 라이브러리.
- 개발한 이유 
    브라우저의 호환성을 위해 개발
    오픈 소스
- 특징
    모든 처리가 전부 함수
    일반 자바스크립트 : getElementById() => 함수 / innerHTML, value => 속성
    제이쿼리 :  getElementById() / innerHTML(html()), value(val())
    jQuery()로 모든 로직을 처리함
    CSS, DOM에 접근하기 쉽게 되어 있다.
    AJAX(비동기 처리)를 편하게 사용하도록 도와준다!
    * 특정 함수를 사용 후에 반환타입이 다시 jQuery 객체이면 다시 jQuery 함수를 사용할  수 있다.
        (Method chaining 시 중요)
    
- 사용방법
1) 라이브러리 임포트한다.
2) 사용자가 명령을 개발한다.

    <script src="jquery-3.7.1.min.js"></script>
    <script>
    // 사용자 지정 명령
    </script>

3) jQuery를 이용해서 DOM 요소 선택방법
    $('CSS선택자')  ==> 특정 요소 선택시
    $('구조문서')   ==> 특정 요소 선택시, jQuery 객체 생성할 때
    $(콜백함수)     ==> 문서가 로드되면 실행할 함수를 기재