function solution(num, k) {
    let numStr = String(num);
    let position = numStr.indexOf(String(k));
    
    if (position === -1) {
        return -1;
    } else {
        return position +1;
    }
}