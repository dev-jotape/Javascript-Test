const commonCharacters = (s1, s2) => {
    let cont = 0;
    s1 = s1.split('');
    s2 = s2.split('');

    s1.forEach(element => {
        if (s2.indexOf(element) !== -1) {
            cont++;
            s2.splice(s2.indexOf(element), 1)
        } 
    });

    return cont;
};

const   s1 = "aabcc",
        s2 = "adcaa";

let cont = commonCharacters(s1,s2);
console.log(cont);