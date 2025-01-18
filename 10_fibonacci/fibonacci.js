const fibonacci = function(n) {
    n = Number(n);

    if ( n < 0 ) return 'OOPS';
    if ( n === 0 ) return 0;
    if ( n === 1 || n === 2 ) return 1;

    let [secondPrevTerm, prevTerm] = [1, 1];

    cnt = 3;
    while ( cnt <= n ){
        [secondPrevTerm, prevTerm] = [prevTerm, secondPrevTerm+prevTerm];
        cnt++;
    }
    return prevTerm;
};

// Do not edit below this line
module.exports = fibonacci;
