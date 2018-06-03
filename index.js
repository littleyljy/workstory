var count = 0;
var max = 0;
var min = 320;
//var musicPlay = false;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var music = document.getElementById("bg-music");
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
canvas.width = windowWidth;
canvas.height = windowHeight;

//打字效果方法
$.fn.autotype = function() {
    var $text = $(this);
    console.log('this', this);
    var str = $text.html(); //返回被选 元素的内容
    var index = 0;
    var x = $text.html('');
    //$text.html()和$(this).html('')有区别
    var timer = setInterval(function() {
        //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
        var current = str.substr(index, 1);
        if (current == '<') {
            //indexOf() 方法返回">"在字符串中首次出现的位置。
            index = str.indexOf('>', index) + 1;
        } else {
            index++;
        }
        //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '_': '']);
        //substring() 方法用于提取字符串中介于两个指定下标之间的字符
        $text.html(str.substring(0, index) + (index & 1 ? '_': ''));
        if (index >= str.length) {
            clearInterval(timer);
        }
    },
    100);
};
//调用打字方法
function autotypeinit(i){
    $('.story-content').html('');
    $('.story-title').html('');
    $('.story-title').html(stories[i].title);
    $('.story-title').autotype();
    setTimeout(function(){
        $('.story-content').html(stories[i].content);
        $('.story-content').autotype();
    },1000);
}

//蝙蝠侠场景
function dropBoss(){
    console.log('chest.y',chest.y);
    // 移动宝箱
    if (chest.y < 425) {
        chest.y += chest.vy;
    }else{
        if(boss.h > 25){
            boss.h -= boss.vy;
            boss.y += boss.vy;
            chest.y += chest.vy;
        }else{
            if(batman.y > -100){
                batman.y -= batman.vy;
            }else{
                count = 1;
                autotypeinit(count);
                chgBoss();
                return;
            }
        }
    }
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重绘
    ctx.drawImage(batmanImg,batman.x,batman.y,batman.w,batman.h);
    ctx.drawImage(bossImg,boss.x,boss.y,boss.w,boss.h);
    ctx.drawImage(chestImg,chest.x,chest.y,chest.w,chest.h);
    // 使用requestAnimationFrame实现动画循环
    requestAnimationFrame(dropBoss);
}

//超人场景
function chgBoss(){
    console.log('sunglass.y',sunglass.y);
    $('.boss').show(); 
    // 移动墨镜
    if (sunglass.y < 520) {
        sunglass.y += sunglass.vy;
    }else{
        $('.boss').hide(); 
        $('.staff').show(); 
        $('.question').show();  
        count = 2;
        setTimeout(function(){
            autotypeinit(count);
            koBoss();
        },2000);
        return;
    }
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重绘
    //ctx.drawImage(bossImg,boss.x,boss.y,boss.w,boss.h);
    ctx.drawImage(supermanImg,superman.x,superman.y,superman.w,superman.h);
    ctx.drawImage(sunglassImg,sunglass.x,sunglass.y,sunglass.w,sunglass.h);
    // 使用requestAnimationFrame实现动画循环
    requestAnimationFrame(chgBoss);
}

//神奇女侠场景
function koBoss(){
    console.log('wonderwoman.y',wonderwoman.y);
    $('.boss').show(); 
    $('.staff').hide();
    $('.question').hide();
    //移动小人
    if (wonderwoman.x > -75) {
        wonderwoman.x -= wonderwoman.vy;
        $('.heart').show();
    }else{
        count = 3;
        autotypeinit(count);
        flashBoss();
        return;
    }
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重绘
    ctx.drawImage(wonderwomanImg,wonderwoman.x,wonderwoman.y,wonderwoman.w,wonderwoman.h);
    //ctx.drawImage(bossImg,boss.x,boss.y,boss.w,boss.h);
    // 使用requestAnimationFrame实现动画循环
    requestAnimationFrame(koBoss);
}

//闪电侠场景
function flashBoss(){
    console.log('flash.y',flash.y);
    //  
    $('.heart').hide(); 
    if (flash.y > -100) {
        flash.y -= flash.vy;
        flash.x = parseInt(Math.random()*(max-min+1)+min,10);
        $('.skull').show();
    }else{
        // count = 0;
        // autotypeinit(count);
        // dropBoss();
        //window.location.reload();
        $('.over').show();
        return;
    }
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重绘
    ctx.drawImage(flashImg,flash.x,flash.y,flash.w,flash.h);
    //ctx.drawImage(bossImg,boss.x,boss.y,boss.w,boss.h);
    //ctx.drawImage(skullImg,skull.x,skull.y,skull.w,skull.h);
    // 使用requestAnimationFrame实现动画循环
    requestAnimationFrame(flashBoss);
}

// function isMusicPlay(src,musicPlay){
//     music.src = src;
//     if(musicPlay){
//         $(this).find('img').attr('src','img/voice.png');
//         music.play();
//         musicPlay = false;
//         }else{
//             $(this).find('img').attr('src','img/quiet.png');
//             music.pause();
//             musicPlay = true;
//         }
// }
//开始执行
$(document).ready(function(){
    $('.start').click(function(){
        $(this).hide();
        music.play();
        dropBoss();
        autotypeinit(count);
    });
    $('.over').click(function(){
        $('.share-layer').show();
    });
  });

  //音乐控制
    // $('.music').click(function(){
    //     isMusicPlay(true);
    // });