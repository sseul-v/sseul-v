function solution(my_string, n) {
    var answer = [...my_string].map(s => s.repeat(n)).join("");
    console.log(answer);
    return answer;
}