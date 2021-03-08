const maxLength = 10;

const seatConfig = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
};

const solution = (n = 1, s = '') => {
  const result = 0;
  const available = [];
  const disabled = formatStr(n, s);

  for (const key in disabled) {
    const itemArr = disabled[key];
    for (const item of itemArr) {
    }
  }

  return result;
};

const formatStr = (n, str) => {
  const result = {};
  const arr = str.split(' ');
  for (let i = 1; i < n + 1; i++) {
    result[i] = [];
    arr.forEach((element) => {
      element.indexOf(i) > -1 && result[i].push(seatConfig[element.substr(1)]);
    });
  }

  return result;
};

console.log(solution(2, '1a 2f 1c'));
