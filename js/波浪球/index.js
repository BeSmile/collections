function draw(canvas, opts) {
    let defaultOpts = {
        range: 100,
        bColor: "#BEE1C0",//边框线
        bgColor: "#E6F4E7",//背景色
        fBgColor: "rgb(118,194,121)", //前置色
        backBgColor: "rgba(118,194,121, 0.4)", //后置色
        perfect: 0, //高度百分比
        fixed: 5, //最少高度 防止底部太少留出的空隙
        cycle: 25, //控制弧度
        contour: false, //是否等高
    };
    if(!canvas) {
        return new Error('target not found');
    }

    if(!canvas.getContext("2d")) {
        return new Error("not support canvas");
    }
    defaultOpts = Object.assign(defaultOpts, opts);


    const range = defaultOpts.range;//宽度
    const height = defaultOpts.contour?range:Math.floor(range / 4 * 3); //高度 4： 3
    const width = range;
    const ctx = canvas.getContext("2d");

    const drawBg = () => {
        ctx.fillStyle = defaultOpts.bgColor;
        ctx.fillRect(0,0, width,height);
    };

    //边框线
    const drawBorderLine = () => {
        ctx.beginPath();
        ctx.strokeStyle  = defaultOpts.bColor;
        ctx.moveTo(0,0);
        ctx.lineTo(0,height);
        ctx.lineTo(width, height);
        ctx.lineTo(width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();
    };
    //绘制波浪  X 绘制坐标 Y 控制显示高度
    const drawWave = (X, Y, bgColor) => {

        ctx.beginPath();

        ctx.moveTo(0, height - defaultOpts.fixed - Y + Math.sin((- X) / defaultOpts.cycle) * 10);//起点
        for(let x = 1; x< width; x++) {
            const y = height - defaultOpts.fixed - Y + Math.sin((x - X) / defaultOpts.cycle) * 10;
            ctx.strokeStyle = bgColor;
            ctx.lineTo(x,y );
        }

        //绘制区域部分
        ctx.lineTo(width, height );//最右下角坐标
        ctx.lineTo(0, height - 1);//左侧最下角坐标
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = bgColor;
        ctx.fill();
    };

    if(defaultOpts.perfect === 0) {
        setTimeout(() => {
            drawBg();//画背景
            drawBorderLine();//画边框线
        })
    } else {
        let x = 0; //周期
        setInterval(() => {
            drawBg();//画背景
            drawBorderLine();//画边框线
            if(x == Math.floor((Math.PI  * 4) * defaultOpts.cycle))
                x  = 0;
            drawWave(40 + x++, height * defaultOpts.perfect, defaultOpts.backBgColor);
            drawWave(x++, height * defaultOpts.perfect ,defaultOpts.fBgColor);
        }, 80)
    }
}
const canvas = document.getElementById('ball');

draw(canvas, {
    range: 100,
    contour: true,
    perfect: 0.3,
});