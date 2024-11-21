function solution(num_str) {
    let sum = 0;
    for (let char of num_str) {
        sum += parseInt(char, 10);
    }
    return sum;
}