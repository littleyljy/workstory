var stories= [{
    title:'老板：蝠蝠，加个班吧！',
    content:'蝙蝠侠：不加，老子有钱任性。'
}, {
    title:'老板：超超，加个班吧！',
    content:'超人：你被炒了，现在我是老板。'
}, {
    title:'老板：美奇，加个班吧！',
    content:'神奇女侠：我加班的小心心留给你。'
}, {
    title:'老板：小电，加个班吧！',
    content:'闪电侠：老板，再见！'
}, {
}];
//绘制蝙蝠侠对象
var batmanImg = new Image();
batmanImg.src = 'img/batman.png';
var batman = {
    x: 50,
    y: 500,
    vy: 4,
    w: 75,
    h: 100,
    au: 'audio/fall.mp3',
    direction: 'start'
}
//绘制老板对象
var bossImg = new Image();
bossImg.src = 'img/boss.png';
var boss = {
    x: 240,
    y: 500,
    vy: 4,
    w: 75,
    h: 100,
    direction: 'start'
}
//绘制宝箱对象
var chestImg = new Image();
chestImg.src = 'img/chest.png';
var chest = {
    x: 200,
    y: -75,
    vy: 4,
    w: 135,
    h: 75,
    direction: 'start'
}
//绘制超人对象
var supermanImg = new Image();
supermanImg.src = 'img/superman.png';
var superman = {
    x: 50,
    y: 500,
    vy: 4,
    w: 75,
    h: 100,
    au: 'audio/batman.mp3',
    direction: 'start'
}
//绘制员工对象
// var staffImg = new Image();
// staffImg.src = 'img/staff.png';
// var staff = {
//     x: 240,
//     y: 500,
//     vy: 5,
//     w: 75,
//     h: 100,
//     direction: 'start'
// }
//绘制墨镜对象
var sunglassImg = new Image();
sunglassImg.src = 'img/sunglass.png';
var sunglass = {
    x: 50,
    y: -100,
    vy: 4,
    w: 65,
    h: 35,
    direction: 'start'
}
//绘制问号对象
// var questionImg = new Image();
// questionImg.src = 'img/question.png';
// var question = {
//     x: 270,
//     y: 450,
//     vy: 5,
//     w: 15,
//     h: 30,
//     direction: 'start'
// }
//绘制神奇女侠对象
var wonderwomanImg = new Image();
wonderwomanImg.src = 'img/wonderwoman.png';
var wonderwoman = {
    x: 50,
    y: 500,
    vy: 0.4,
    w: 75,
    h: 100,
    au: 'audio/superman.mp3',
    direction: 'start'
}
//绘制闪电侠对象
var flashImg = new Image();
flashImg.src = 'img/flash.png';
var flash = {
    x: 50,
    y: 500,
    vy: 3,
    w: 75,
    h: 100,
    au: 'audio/flash.mp3',
    direction: 'start'
}
//绘制骷髅对象
// var skullImg = new Image();
// skullImg.src = 'img/skull.png';
// var skull = {
//     x: 220,
//     y: 475,
//     vy: 5,
//     w: 115,
//     h: 125,
//     direction: 'start'
// }