/*
Math 클래스는 수학이나 수치와 관련된 데이터를 처리하는 함수
1) 값 : PI(원주율), E(오일러 상수)
    Math.PI와 같은 방식으로 사용
2) 함수
*/

// 1) Math 클래스에 선언된 상수
console.log(`원주율 : ${Math.PI}`);
console.log(`오일러 상수 : ${Math.E}`);

// 2) abs(n) : 절대값을 반환
// Falsy값 : (0, null, undefined, '')
// Truely값 : [], 공백이 있는 문자열, 0을 제외한 숫자들
console.log('-------------- abs()');
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-2')); // 2
console.log(Math.abs(null)); // 0, null은 Object
console.log(Math.abs('')); // 0
console.log(Math.abs(' ')); // 0
console.log(Math.abs('Korea')); // NaN
console.log(Math.abs()); // NaN
console.log(Math.abs([])); // 0
console.log(Math.abs([1, 2, 3])); // NaN

// 3) ceil(n) : 올림. 주어진 숫자의 양의 방향으로 만나는 정수
console.log('-------------- ceil()');
console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(5.00000001)); // 6
console.log(Math.ceil(5)); // 5
console.log(Math.ceil(-0.95)); // -0
console.log(Math.ceil(-5.00000001)); // -5

// 4) floor(n) : 버림. 주어진 숫자의 음의 방향으로 만나는 정수
console.log('-------------- floor()');
console.log(Math.floor(0.95)); // 0
console.log(Math.floor(5.00000001)); // 5
console.log(Math.floor(5)); // 5
console.log(Math.floor(-0.95)); // -1
console.log(Math.floor(-5.00000001)); // -6

// 5) trunc(n) : 절삭(버림). 소수점 이하를 버림
console.log('-------------- trunc()');
console.log(Math.trunc(0.95)); // 0
console.log(Math.trunc(5.00000001)); // 5
console.log(Math.trunc(5)); // 5
console.log(Math.trunc(-0.95)); // -0
console.log(Math.trunc(-5.00000001)); // -5

// 6) round(n) : 반올림 (주의: 소수점 n자리 이하 등 반올림의 위치를 직접 제어할 수 없다.)
console.log('-------------- round()');
console.log(Math.round(0.95)); // 1
console.log(Math.round(5.00000001)); // 5
console.log(Math.round(5)); // 5
console.log(Math.round(-0.95)); // -1
console.log(Math.round(-5.00000001)); // -5
console.log(Math.round(-5.6)); // -6
console.log(Math.round(-5.5)); // -5
console.log(Math.round(-5.51)); // -6
console.log(Math.round(5.5)); // 6 (+0.5는 반올림을 한다.)

// 참고
console.log('--------------');
console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity(양의 무한대)
console.log(10 / -0); // -Infinity(음의 무한대)

// (7) min(n), max(n) : 최소값, 최대값
console.log('------------- max()');
console.log(Math.max(1, 5, 3));
console.log(Math.max(-1, -5, -3));
console.log(Math.max()); // -Infinity(음의 무한대)
console.log(Math.max(-0.94)); // -0.94

console.log('------------- min()');
console.log(Math.min(1, 5, 3));
console.log(Math.min(-1, -5, -3));
console.log(Math.min()); // Infinity(양의 무한대)
console.log(Math.min(-0.94)); // -0.94

// [연습] ary = [2, 5, 7, 1, 6] 배열에 들어 있는 값 중 최대값, 최소값을 구하시오
let ary = [2, 5, 7, 1, 6];
console.log(`최대값: ${Math.max(...ary)} \n최소값 : ${Math.min(...ary)}`);

// 8) pow(n1, n2) : 거듭제곱 함수
console.log('------------- pow()');
console.log(Math.pow(5, 3)); // 125
console.log(5 ** 3);
console.log(Math.pow(4, 0.5)); // 2
console.log(4 ** 0.5);
console.log(Math.pow(4, -2)); // 0.0625
console.log(4 ** -2);

console.log(Math.pow(-5, 3)); // -125
console.log((-5) ** 3);
console.log(Math.pow(-4, -2)); // 0.0625
console.log(Math.pow(-4, -0.5)); // NaN

// 9) random() : 난수 발생(0이상 ~ 1미만의 실수)
console.log('------------- random()');
for (let i = 0; i < 5; ++i)
    console.log(Math.ceil(Math.random() * 50)); // 0은 발생하지 않음

// 10) toFixed
console.log('------------- toFixed()');
let data = Math.random();
console.log(data);
console.log(data.toFixed(2));
console.log(data.toFixed(4));




