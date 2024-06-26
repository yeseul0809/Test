// 두 단어가 애너그램인지 확인
// 문제 정의:
// 두 단어 A와 B가 주어졌을 때, A의 알파벳 순서를 바꾸어 B를 만들 수 있는지 확인하라.
// 가능하다면 true, 아니라면 false를 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 공백은 무시한다.
// 두 단어의 길이는 같아야 한다.
// 예시:

// 입력: "listen", "silent"
// 출력: true
// 입력: "hello", "bello"
// 출력: false

// function isAnagram(a, b) {
// 문자열 a,b를 toLowerCase(), toUpperCase() + 공백제거 하기
// 소문자로 공백이 제거된 문자열 b를 배열로 바꾼다.
// 문자열 a 의 길이와 b 의 길이가 같아야한다.
// a를 순회하며 b문자열을 만났을때 그 인덱스의 값을 없앤다.
// b배열의 길이가 0이라면 true, 있다면 false 반환

//   const aChars = a.toLowerCase().replaceAll(" ", "");
//   const bChars = b.toLowerCase().replaceAll(" ", "");
//   let bCharsArray = bChars.split("");

//   if (aChars.length !== bChars.length) {
//     return false;
//   }

//   for (const i of aChars) {
//     const index = bCharsArray.indexOf(i);
//     if (index !== -1) {
//       bCharsArray.splice(index, 1);
//     } else {
//       return false;
//     }
//   }
//   return bCharsArray.length === 0;
// }

function isAnagram(a, b) {
  // 1. 문자열 a와 b를 소문자로 변환하고 공백 제거
  const aChars = a.toLowerCase().replace(/\s/g, "");
  const bChars = b.toLowerCase().replace(/\s/g, "");

  // 2. b 문자열을 객체로 변환하여 각 문자의 개수 저장
  const bCharCount = {};
  for (const char of bChars) {
    bCharCount[char] = (bCharCount[char] || 0) + 1;
  }

  // 3. a 문자열을 순회하며 b 객체에 해당 문자가 있는지 확인
  for (const char of aChars) {
    if (!bCharCount[char]) {
      return false;
    }
    bCharCount[char]--;
  }

  // 4. b 객체의 모든 문자 개수가 0이 되면 true 반환
  return Object.values(bCharCount).every((count) => count === 0);
}

// 테스트 코드
function testIsAnagram() {
  const testCases = [
    { input: ["listen", "silent"], expected: true },
    { input: ["hello", "bello"], expected: false },
    { input: ["anagram", "nagaram"], expected: true },
    { input: ["rat", "car"], expected: false },
    { input: ["Dormitory", "Dirty room"], expected: true }, // 공백과 대소문자 무시
    { input: ["The eyes", "They see"], expected: true }, // 공백과 대소문자 무시
    { input: ["a gentleman", "elegant man"], expected: true }, // 공백과 대소문자 무시
    { input: ["School master", "The classroom"], expected: true }, // 공백과 대소문자 무시
    { input: ["Conversation", "Voices rant on"], expected: true }, // 공백과 대소문자 무시
    { input: ["Astronomer", "Moon starer"], expected: true }, // 공백과 대소문자 무시
    { input: ["funeral", "real fun"], expected: true }, // 공백과 대소문자 무시
    { input: ["adultery", "true lady"], expected: true }, // 공백과 대소문자 무시
    { input: ["Eleven plus two", "Twelve plus one"], expected: true }, // 공백과 대소문자 무시
    { input: ["apple", "pale"], expected: false }, // 길이가 다른 경우
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = isAnagram(input[0], input[1]);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice3.js 실행
testIsAnagram();
