let angle = 0;
let w = 24;
let magicAngle;
let maxD;

function setup() {
    createCanvas(400, 400, WEBGL);
    magicAngle = atan(1 / Math.sqrt(2));
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(100);
    ortho(-400, 400, 400, -400, 0, 600);

    rotateX(-magicAngle);
    rotateY(-QUARTER_PI);
    
    for (let z = 0; z < height; z += w) {
    for (let i = 0; i < width; i += w) {
        push();
        let d = dist(i, z, width / 2, height / 2);
        let offset = map(d, 0, maxD, -PI, PI);
        let a = angle + offset;
        let h = floor(map(sin(a), -1, 1, 50, 300));
        translate(i - width / 2, 0, z - height / 2);
        box(w - 2, h, w - 2);
        pop();
    }
}

    angle -= 0.08;
}
