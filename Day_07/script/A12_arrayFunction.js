/*
배열을 다루는 여러 메소드

1) join("문자열") : 전달된 문자열을 구분자로 하여, 배열을 문자열로 합친 후 반환
2) reverse() : 배열을 뒤집음
3) slice() : 부분문자열을 가져옴. 원본은 그대로
4) splice() : 부분문자열을 가져옴. 원본이 수정
5) sort() : 배열 요소를 정렬
6) concat() : 두 개 이상의 배열을 연결
7) push(), pop() : 
8) unshift(), shift() : 
9) toString()
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.join("/"));

// console.log(arr.reverse());
let temp = arr.slice(1, 5);
console.log('슬라이스된 배열: ' + temp);
console.log('원본: ', arr);

// 원본을 수정하면 temp는??
arr[2] = 22;
console.log(arr); // 원본 출력
console.log(temp); // 원본으로부터 분리된 복사본

temp = arr.slice(0, -2); // 음수 사용 가능
console.log(temp);

// splice() - 부분 문자열
let color = ['빨강', '주황', '노랑', '초록', '파랑', '남색', '보라'];
temp = color.splice(4) // 인덱스 4 ~ 끝까지 
console.log(temp); // 파, 남, 보라색 잘라서 temp
console.log(color); // 원본이 영향을 받음

//
color = ['빨강', '주황', '노랑', '초록', '파랑', '남색', '보라'];
color.splice(2, 1, 'Yellow', '노란'); // 2번 인덱스에서 1개를 빼고 'Yellow'와 '노란' 삽입
console.log(color);

// concat()
let food = ['피자', '죽', '뼈해장국'];
let drink = ['물', '주스', '커피'];
let fruit = ['수박', '블루베리', '복숭아'];

let lunch = food.concat(drink);
console.log(lunch);

lunch = food.concat(drink, fruit);
console.log(lunch);
console.log(lunch.toString()); // 배열 요소를 콤마로 연결된 문자열로 반환

// push(), pop()
let data = "짜장면";
food.push(data); // 가장 끝부분의 인덱스로 삽입
console.log(food);

data = food.pop(); // 마지막 데이터가 꺼내짐
console.log(data);

// 
food = ['라볶이'];
data = food.pop();
console.log(data);
console.log(food); // '라볶이'가 pop돼서 빈 배열이 됨

data = food.pop();
console.log(data); // 데이터가 하나도 없는데 pop하면 undefined

// unshift(item), shift()
drink = ['물', '주스', '커피'];
data = drink.shift();
console.log(data);
console.log(drink);

drink.unshift('맥주');
console.log(drink)

fruit = ['수박', '블루베리', '복숭아'];
fruit.sort(); // 원본을 정렬
console.log(fruit);

let idx = fruit.indexOf("블루베리");
console.log('블루베리 위치 : ' + idx); // 1