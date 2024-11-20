function solution(numer1, denom1, numer2, denom2) {
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const lcm = (a, b) => (a * b) / gcd(a, b);
    const commonDenom = lcm(denom1, denom2);
    const sumNumer = numer1 * (commonDenom / denom1) + numer2 * (commonDenom / denom2);
    const commonDivisor = gcd(sumNumer, commonDenom);
    return [sumNumer / commonDivisor, commonDenom / commonDivisor];
}