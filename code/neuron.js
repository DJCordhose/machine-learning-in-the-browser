function sigmoid(z) {
    return 1 / (1 + Math.exp(z * -1));
}

function sigmoidGradient(z) {
    return sigmoid(z) * (1 - sigmoid(z));
}


class Neuron {

    constructor() {
        this.output = null;
        this.w = [3, -4, 2];
    }

    forward(x) {
        if (x.length !== this.w.length - 1) {
            throw new Error('Inputs and Weights do not match');
        }
        const paddedX = [1, ...x];
        this.output = w[0] * paddedX[1] + w[1] * paddedX[1] + w[2] * paddedX[2];
        return sigmoid(this.output);
    }
}


let g;
let svg;
function drawBox(box) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute('width', 10);
    rect.setAttribute('height', 10);
    rect.setAttribute('x', box.x);
    rect.setAttribute('y', box.y);
    rect.setAttribute('stroke', 'black');
    rect.setAttribute('fill', 'transparent');
    rect.setAttribute('stroke-width', 1);
    g.appendChild(rect);
}

document.addEventListener("DOMContentLoaded", function () {
    g = document.getElementById('g');
    svg = document.getElementById('svg');
});
