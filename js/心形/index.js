function draw(canvas, bgColor = "#5AB55E") {
    const ctx = canvas.getContext('2d');
    const size = 0.2;//控制大小

    const drawHeart = () => {

        let vertices = [];
        for(let i=0; i<50; i++) {
            const step = i/50*(Math.PI*2);//设置心上面两点之间的角度，具体分成多少份，好像需要去试。
            const vector = {
                x : 16 * Math.pow(Math.sin(step), 3) / size,
                y : (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step)) / size
            }
            vertices.push(vector);
        }

        ctx.beginPath();
        ctx.translate(90, 90);
        for(let i=0; i<50; i++) {
            let vectors = vertices[i];
            ctx.lineTo(vectors.x, vectors.y);
        }
        ctx.fillStyle = bgColor;
        ctx.fill();
        ctx.closePath();
    };
    const calcPoint = (i) => {
        const step = i/50*(Math.PI*2);//设置心上面两点之间的角度，具体分成多少份，好像需要去试。
        return  {
            x : 16 * Math.pow(Math.sin(step), 3) / size,
            y : (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step)) / size
        }
    };
    //心跳线
    const line = () => {
        const l = 14;
        const t = l /2;
        const s = calcPoint(l);
        const two = calcPoint(t);
        const three = calcPoint(50 - t);
        const four = calcPoint(50 - t - 1);
        const e = calcPoint(50 - l);
        ctx.beginPath();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth= 2;
        ctx.moveTo(s.x, s.y);//第一个点
        ctx.lineTo(two.x, two.y / 5 * 2)
        ctx.lineTo(three.x, -three.y / 20 * 1);
        ctx.lineTo(four.x,  s.y);
        ctx.lineTo(e.x, e.y)//最后一个点

        ctx.stroke();
        ctx.closePath();
    };
    drawHeart();
    line();
}
const canvas = document.getElementById('ball');

draw(canvas);