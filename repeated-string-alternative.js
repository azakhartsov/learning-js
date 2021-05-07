const countA = (s) => { 
    return s.split('').filter(i => { 
        return i === 'a'
    }).length;
}

const repeatedString = (s, n)  =>{
    const aCount = countA(s);
    const times = Math.floor(n / s.length);
    const extraCount = countA(s.slice(0, n % s.length));
    const totalCount = aCount * times + extraCount;

    return totalCount;
}

repeatedString('abcac',1003);