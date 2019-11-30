const writePyramid = (n) => {
    let pyramid;
    for (let i = 1; i <= n; i++) {
        let space = ' '.repeat(n-i),
            character = '#'.repeat(i*2 -1)
    
        if(pyramid) pyramid += '\n\'' + space + character + space + '\''
        else pyramid = '\'' + space + character + space + '\''
    }
    return pyramid;
}

const levels = 7;

let pyramid = writePyramid(levels);
console.log(pyramid);