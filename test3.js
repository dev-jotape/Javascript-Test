const isLucky = (n) => {
    let sum1 = 0, sum2 = 0,
        toString = n.toString(),
        half1 = toString.substring(0, toString.length / 2), 
        half2 = toString.substring(toString.length / 2, toString.length);
    
    half1.split('').forEach(el => sum1 += +el);
    half2.split('').forEach(el => sum2 += +el);

    return sum1 === sum2
      
};

const n = 1230;

let lucky = isLucky(n);
console.log(lucky);