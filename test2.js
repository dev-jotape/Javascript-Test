const findAngle = (h, m) => {
    let angleH = (h * 60 + m) * 0.5;
    let angleM = m * 6;

    return Math.abs(angleH - angleM);
};

const   h = 3,
        m = 45;

let angle = findAngle(h,m);
console.log(angle);