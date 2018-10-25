<template>
    <div class="wrap">
        <div :class="'music '+musicplay" @click="musicCheck" v-if="!showImg"></div>
        <audio id="audio" loop>
            <source src="https://hd.huya.com/entertainWeekly16/bgm.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
        <loadbar @loadSuccess="loadSuccess" :isOk="isOk"></loadbar>
        <div v-if="isOk" class="cont">
            <div class="index" v-if="step == 0 && !resultShow">
                <i class="key"></i>
                <div class="input-wrap animated" v-if="step===0">
                    <input type="text" placeholder="输入你的姓名" v-model="username">
                    <a @click="stepNext">开启躲bug人生</a>
                    <i class="hand" id="hand1"></i>
                </div>
                <i class="animated qp qp1"></i><i class="animated qp qp2"></i><i class="animated qp qp3"></i><i
                    class="animated qp qp4"></i>
            </div>

            <div v-if="resultShow" class="resultPage">
                <div id="result-cover">
                    <div class="result-top"><p id="resulttop">测试结果</p></div>
                    <i class="result-m result-m0" v-if="score==0"></i>
                    <i class="result-m result-m1" v-else-if="score>0 && score <=25"></i>
                    <i class="result-m result-m2" v-else-if="score>=26 && score <=50"></i>
                    <i class="result-m result-m3" v-else-if="score>=51 && score <=75"></i>
                    <i class="result-m result-m4" v-else></i>
                    <div class="result-bg">

                        <h3>{{scoreTitle}}</h3>
                        <img class="result-intro result0" v-if="score==0" src="../../img/result0.png">
                        <img class="result-intro result1" v-else-if="score>0 && score <=25" src="../../img/result1.png">
                        <img class="result-intro result2" v-else-if="score>=26 && score <=50"  src="../../img/result2.png">
                        <img class="result-intro result3" v-else-if="score>=51 && score <=75"  src="../../img/result3.png">
                        <img class="result-intro result4"  src="../../img/result4.png" v-else>
                    </div>
                    <div class="reg-wrap" id="coverbot">
                        <img src="../../img/reg.png" class="reg">
                        <img src="../../img/regintro.png" alt="" class="p">
                    </div>

                </div>
                <a  v-if="!showImg" @click="showPop">分享测试结果</a>
                <a href="https://www.gac-toyota.com.cn/vehicles/newlevin%20hev" v-if="!showImg">进入无忧计划</a>
                <span class="copyright">music by by AudionautiX.com</span>
            </div>
            <div v-else class="qaPage">
                <qa1 v-if="step === 1" @stepNext="stepNext" @setAnswer="setAnswer"></qa1>
                <qa2 v-if="step === 2" @stepNext="stepNext" @setAnswer="setAnswer"></qa2>
                <qa3 v-if="step === 3" @stepNext="stepNext" @setAnswer="setAnswer"></qa3>
                <qa4 v-if="step === 4" @stepNext="stepNext" @setAnswer="setAnswer" @resultPage="resultPage"></qa4>
            </div>

        </div>
        <div class="share-pop" id="share-pop" v-if="popShow" @click="popClose">
            <div class="share-tip" v-if="!showImg">
                <i></i>
                <a @click.stop="resultImg">生成图片</a>
            </div>
            <div v-else>
                <p v-if="shareloading" class="loading">加载中</p>
            </div>
            <div id="share-img-box"></div>
            <blockquote v-if="showImg">长按图片保存</blockquote>
        </div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    import loadbar from '../../components/processbar/progress-bar';
    import qa1 from '../../components/qa1/qa';
    import qa2 from '../../components/qa2/qa';
    import qa3 from '../../components/qa3/qa';
    import qa4 from '../../components/qa4/qa';

    export default {
        components: {
            loadbar, qa1, qa2, qa3, qa4
        },
        data() {
            return {
                isOk: false, // 是否显示进度条
                step: 1,
                username: '',
                resultShow: false,
                answers: [],
                score: 0,
                scoreTitle:'BUG王者',
                result_title: '测试显示',
                popShow: false,
                shareloading: false,
                audiobg:null,
                musicplay:'',
                showImg:false
            }
        },
        mounted() {
            this.audiobg = document.getElementById('audio')
            var loader = {
                uto: null,
                cbfun: null,
                loadW: 0,
                loadH: 0,
                total: 0,
                loaded: 0,
                loadId: '',
                loadBgId: '',
                loadTopId: '',
                hide: function () {

                    if (this.cbfun) {
                        this.cbfun();
                    }
                },
                show: function (cb, iFileData) {
                    this.cbfun = cb;
                    this.total = iFileData.length;
                    this.loaded = 0;
                    for (var i = 0; i < this.total; i++) {
                        this.loadImage(iFileData[i]);
                    }
                },
                loadImage: function (iData) {
                    var _this = this;
                    var img = new Image();
                    img.onload = function () {
                        _this.loaded++;
                        _this.checkLoadComplete();
                    };
                    img.onerror = function () {
                        _this.loaded++;
                        _this.checkLoadComplete();
                    }
                    img.src = iData;
                },
                checkLoadComplete: function () {
                    if (this.loaded == this.total) {
                        this.hide();
                    }
                }
            }

            loader.show(() => {
                this.isOk = true;
            }, [
                'img/bg.jpg',
                'img/btn.png',
                'img/btn2_wrap.jpg',
                'img/car.png',
                'img/car2.png',
                'img/m.png',
                'img/m1.png',
                'img/m2.png',
                'img/qa1ans1.jpg',
                'img/qa1ans2.jpg',
                'img/qa1bg.jpg',
                'img/qa1m2.png',
                'img/qa2ans1.jpg',
                'img/qa2ans2.jpg',
                'img/qa2bg.jpg',
                'img/qa3ans1.jpg',
                'img/qa3bg.jpg',
                'img/qa4ans2.jpg',
                'img/qa4bg.jpg'
            ]);
            this.musicInit();
        },
        methods: {
            musicCheck(){
              if(this.musicplay === ''){
                  this.musicplay = 'pause';
                  this.playBgMusic(false);
              }else{
                  this.musicplay = '';
                  this.playBgMusic(true);
              }
            },
            musicInit() {
                let _this = this;

                if (sessionStorage.bgmusic == 'pause') {
                    _this.playBgMusic(false);
                } else {
                    _this.playBgMusic(true);
                    //----------处理自动播放------------
                    //--创建页面监听，等待微信端页面加载完毕 触发音频播放
                    document.addEventListener('DOMContentLoaded',  ()=>{
                        function audioAutoPlay() {
                            _this.playBgMusic(true);
                            document.addEventListener("WeixinJSBridgeReady",  ()=> {
                                _this.playBgMusic(true);
                            }, false);
                        }

                        audioAutoPlay();
                    });

                    if (window.WeixinJSBridge) {
                        WeixinJSBridge.invoke('getNetworkType', {}, (e)=> {
                            _this.playBgMusic(true);
                        }, false);
                    } else {
                        document.addEventListener("WeixinJSBridgeReady", () => {
                            WeixinJSBridge.invoke('getNetworkType', {}, () => {
                                _this.playBgMusic(true);
                            });
                        }, false);
                    }


                    //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
                    function audioAutoPlay() {
                        _this.playBgMusic(true);
                        document.removeEventListener('touchstart', audioAutoPlay);
                    }

                    document.addEventListener('touchstart', audioAutoPlay);
                }
                //----------处理页面激活------------
                var hiddenProperty = 'hidden' in document ? 'hidden' :
                    'webkitHidden' in document ? 'webkitHidden' :
                        'mozHidden' in document ? 'mozHidden' :
                            null;
                var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
                var onVisibilityChange = () =>{
                    if (!document[hiddenProperty]) {
                        if (!sessionStorage.bgmusic || sessionStorage.bgmusic == 'play') {
                            _this.audiobg.play();
                        }
                    } else {
                        _this.audiobg.pause();
                    }
                }
                document.addEventListener(visibilityChangeEvent, onVisibilityChange);
            },
            //---------音乐播放和暂停----------
            playBgMusic(val) {
                if (val) {
                    this.audiobg.play();
                    this.audiobg.loop;
                    sessionStorage.bgmusic = 'play';
                } else {
                    this.audiobg.pause();
                    this.audiobg.loop;
                    sessionStorage.bgmusic = 'pause';
                }
            },
            stepNext() {
                if (this.username) {
                    this.step++;
                } else {
                    alert('请输入你的名字')
                }
            },
            resultPage() {
                this.resultShow = true;
                let alen = 0;
                var i ;
                for (i=0;i<=this.answers.length;i++) {
                    if (this.answers[i] === 'A') {
                        alen++;
                    }
                }
                if(alen === 0){
                    this.score = 0;
                    this.scoreTitle='BUG王者'
            } else if (alen === 1) {
                    this.score = this.randomNum(1, 25);
                    this.scoreTitle='差不多青年'
                } else if (alen === 2) {
                    this.score = this.randomNum(26, 50);
                    this.scoreTitle='2B青年'
                } else if (alen === 3) {
                    this.score = this.randomNum(51, 75);
                    this.scoreTitle='三道杠青年'
                } else if (alen === 4) {
                    this.score = this.randomNum(76, 100);
                    this.scoreTitle='靠谱青年'
                }
            },
            randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            },
            setAnswer(data) {
                this.answers.push(data);
            },
            showPop(){
                this.popShow = true;
            },
            resultImg() {
                this.showImg = true;
                this.shareloading = true;
                document.getElementById('resulttop').innerText = this.username;
                document.getElementById('coverbot').style.display = 'block';
                this.convert2canvas();
            },
            loadSuccess() {
                this.isOk = true;
            },
            popClose(event) {
                if(event.target.className === 'share-pop'){
                    document.getElementById('share-img-box').removeChild(document.getElementById('share-img-box').firstChild);
                    this.popShow = false;
                    this.showImg = false;
                }
            },
            DPR() {
                if (window.devicePixelRatio && window.devicePixelRatio > 1) {
                    return window.devicePixelRatio;
                }
                return 1;
            },
            convert2canvas() {

                var cntElem = document.getElementById('result-cover');

                var shareContent = cntElem;//需要截图的包裹的（原生的）DOM 对象
                var width = shareContent.offsetWidth; //获取dom 宽度
                var height = shareContent.offsetHeight; //获取dom 高度
                var canvas = document.createElement("canvas"); //创建一个canvas节点
                var scale = this.DPR(); //定义任意放大倍数 支持小数
                canvas.width = width * scale; //定义canvas 宽度 * 缩放
                canvas.height = height * scale; //定义canvas高度 *缩放
                canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
                var opts = {
                    scale: scale, // 添加的scale 参数
                    canvas: canvas, //自定义 canvas
                    // logging: true, //日志开关，便于查看html2canvas的内部执行流程
                    width: width, //dom 原始宽度
                    height: height,
                    useCORS: true // 【重要】开启跨域配置
                };

                html2canvas(shareContent, opts).then((canvas) => {

                    var context = canvas.getContext('2d');
                    // 【重要】关闭抗锯齿
                    context.mozImageSmoothingEnabled = false;
                    context.webkitImageSmoothingEnabled = false;
                    context.msImageSmoothingEnabled = false;
                    context.imageSmoothingEnabled = false;

                    // 【重要】默认转化的格式为png,也可设置为其他格式
                    var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);


                    setTimeout(() => {
                        this.shareloading = false;
                        document.getElementById('coverbot').style.display = 'none';
                        document.getElementById('share-img-box').appendChild(img);

                        //img.style.width =  canvas.width / 2 + "px";
                        //img.style.height =  canvas.height / 2 + "px"
                    }, 200)
                });
            }
        },
    }

</script>

<style lang="scss">
    @mixin ani($name,$time,$delay) {
        animation-name: $name;
        animation-delay: $delay;
        animation-duration: $time !important;
        animation-timing-function: linear;
    }

    $psdBaseSize: 750;
    $maxBaseSize: 540;

    @function rpx($value) {
        @return $value / $psdBaseSize * 10rem;
    }

    html {
        font-size: 10vw;
    }

    /**
   * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
   * http://cssreset.com
   */
    body * {
        max-height: 999999px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
        font-style: normal;
        appearance: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    html, body {
        font-family: 'pinghei';
        background: transparent;
        font-weight: 600;
    }

    img {
        vertical-align: top;
    }

    /* custom */
    a {
        color: #7e8c8d;
        text-decoration: none;
        -webkit-backface-visibility: hidden;
    }

    li {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: rgba(0, 0, 0, 0.2);
        -webkit-border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background-color: rgba(125, 125, 125, 0.7);
        -webkit-border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        width: 5px;
        background-color: rgba(125, 125, 125, 0.7);
        -webkit-border-radius: 6px;
    }

    body {
        -webkit-text-size-adjust: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        position: relative;
    }

    .wrap {
        position: relative;
        overflow: hidden;
    }

    .input-wrap {
        width: rpx(701);
        height: rpx(307);
        background: url(../../img/input_wrap.png) no-repeat;
        background-size: 100% 100%;
        position: fixed;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding-top: rpx(22);
        @include ani(fadeIn, .2s, 1s);
        input {
            display: block;
            width: rpx(651);
            height: rpx(126);
            line-height: rpx(40);
            text-align: center;
            border: 0;
            background: transparent url(../../img/input.png) no-repeat;
            background-size: 100% 100%;
            margin: 0 auto;
            font-size: rpx(45);
            font-weight: 600;
            color: #000;
            font-family: 'pinghei';
            caret-color: rgba(0, 0, 0, 0.25);
            &::placeholder {
                color: #a2a2a2;
            }
        }
        a {
            display: block;
            width: rpx(650);
            height: rpx(122);
            line-height: rpx(122);
            background: transparent url(../../img/btn.png) no-repeat;
            background-size: 100% 100%;
            margin: rpx(16) auto 0;
            color: #000;
            font-size: rpx(38);
            text-align: center;
            font-weight: 600;
        }
        .hand {
            right: rpx(10);
            bottom: rpx(-5)
        }
    }

    body, html, .wrap, .cont {
        height: 100%;
    }

    input:focus {
        outline: 0;
    }

    .index {
        width: 100%;
        height: 100%;
        background: #c1c1c1 url(../../img/bg.jpg) no-repeat center 0;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        i.qp {
            display: block;
            position: absolute;
            background-size: 100% 100%;
            left: 50%;
            top: 50%;
            z-index: 10;
            &.qp1 {
                width: rpx(105);
                height: rpx(217);
                background-image: url(../../img/qp1.png);
                margin-left: rpx(-262);
                margin-top: rpx(-108);
                @include ani(fadeIn, .5s, 0s);
            }
            &.qp2 {
                width: rpx(108);
                height: rpx(257);
                background-image: url(../../img/qp2.png);
                margin-left: rpx(-332);
                margin-top: rpx(-328);
                @include ani(fadeIn, .5s, .2s);
            }
            &.qp3 {
                width: rpx(102);
                height: rpx(233);
                background-image: url(../../img/qp3.png);
                margin-left: rpx(232);
                margin-top: rpx(-288);
                @include ani(fadeIn, .5s, .4s);
            }
            &.qp4 {
                width: rpx(94);
                height: rpx(167);
                background-image: url(../../img/qp4.png);
                margin-left: rpx(92);
                margin-top: rpx(-278);
                @include ani(fadeIn, .5s, .6s);
            }
        }

    }

    .hand {
        display: block;
        width: rpx(102);
        height: rpx(119);
        background: url(../../img/hand.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        transition: all .5s;
        animation: fadeIn .2s 8s linear both, handclick 1s 8.4s infinite linear;
        @keyframes handclick {
            0%, 100% {
                transform: scale(1)
            }
            50% {
                transform: scale(.85)
            }
        }
    }

    .key {
        display: block;
        width: rpx(65);
        height: rpx(125);
        background: url(../../img/key.png) no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        position: absolute;
        left: 63%;
        top: 49%;
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
        transform-origin: top right;
        animation: keyrotate 1s linear infinite;
    }

    @keyframes keyrotate {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        16.7% {
            transform: translate3d(-55%, -41%, 0) rotate(60deg);
        }
        33.4% {
            transform: translate3d(-77%, -36%, 0) rotate(120deg)
        }
        50.1% {
            transform: translate3d(-103%, -50%, 0) rotate(180deg)
        }
        66.8% {
            transform: translate3d(-94%, -63%, 0) rotate(240deg)
        }
        83.5% {
            transform: translate3d(-69%, -66%, 0) rotate(300deg)
        }
        100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }

    p.qa-title {
        width: rpx(667);
        margin: rpx(40) auto 0;
        font-size: rpx(28);
        line-height: rpx(36);
        font-weight: 600;
        //animation: fadeInUp .5s 4s linear both;
    }

    .answer {
        overflow: hidden;
        li {
            width: rpx(667);
            height: rpx(96);
            line-height: rpx(96);
            text-align: center;
            color: #000;
            font-size: rpx(31);
            font-weight: 600;
            background: url(../../img/sbtn.png) no-repeat;
            background-size: 100% 100%;
            margin: rpx(20) auto;
            animation: fadeInUp .4s 2.4s linear both;
            &:first-child {
                animation: fadeInUp .4s 2.2s linear both;
            }
        }
    }

    .qa-next {
        padding: 0 rpx(25);
    }

    .title {
        width: rpx(472);
        height: rpx(137);
        background: url(../../img/title.png) no-repeat;
        background-size: 100% 100%;
        color: #fff;
        font-size: rpx(36);
        line-height: rpx(170);
        font-weight: 600;
        box-sizing: border-box;
        padding-left: rpx(30);
        margin-top: rpx(47);
        letter-spacing: rpx(-4);
    }

    .btn2 {
        width: rpx(692);
        height: rpx(344);
        background-image: url(../../img/btn2_wrap.jpg);
        background-size: 100% 100%;
        margin: 0 auto;
        color: #000;
        font-size: rpx(28);
        line-height: rpx(36);
        padding: rpx(34) rpx(44) 0;
        box-sizing: border-box;
        font-weight: 600;
        animation: fadeInUp .6s .8s linear both;
        position: relative;
        i {
            display: block;
            width: rpx(173);
            height: rpx(88);
            background-image: url(../../img/btn2.png);
            background-size: 100% 100%;
            position: absolute;
            bottom: rpx(70);
            left: 50%;
            transform: translate(-50%, 0);
            animation: btnmove 1s 5s linear infinite;
        }
        @keyframes btnmove {
            0%, 100% {
                transform: translate(-50%, 0);
            }
            50% {
                transform: translate(-46%, 0);
            }
        }
    }

    .ans {
        background-size: 100% 100%;
        margin: rpx(20) auto;
        position: relative;
        overflow: hidden;
        h3 {
            color: #fff;
            font-size: rpx(31);
            font-weight: 600;
            line-height: rpx(45);
            width: 92%;
            margin: rpx(28) auto rpx(92);
            white-space: nowrap;
            letter-spacing: rpx(-2);
        }
        p {
            margin-left: rpx(35);
        }
    }

    .qa {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
    }

    .result-top {
        width: rpx(200);
        height: rpx(117);
        background-image: url(../../img/resultop.png);
        background-size: 100% 100%;
        box-sizing: border-box;
        padding-top: rpx(46);
        margin-left: rpx(47);
        z-index: 97;
        position: relative;
        p {
            color: #000;
            text-shadow: 0 0 rpx(5) #ffe680;
            font-size: rpx(38);
            font-weight: 600;
            text-align: center;
            width: rpx(185);
            white-space: nowrap;
            overflow: hidden;
            line-height: 1.5;
            text-overflow: ellipsis;
            margin: 0 auto;
        }
    }

    .resultPage {
        height: 100%;
        background-image: url(../../img/resultbg.jpg);
        background-size: 100% 100%;
        text-align: center;
        overflow: hidden;
        a {
            display: inline-block;
            width: rpx(339);
            height: rpx(103);
            background-image: url(../../img/resultbtn.png);
            background-size: 100% 100%;
            line-height: rpx(103);
            text-align: center;
            color: #000;
            font-size: rpx(31);
            font-weight: 600;
        }
    }

    .result-bg {
        width: rpx(696);
        height: rpx(719);
        background-image: url(../../img/resultbg.png);
        background-size: 100% 100%;
        overflow: hidden;
        margin: rpx(-20) auto rpx(30);
        position: relative;
        z-index: 30;
        h3 {
            font-size: rpx(58);
            line-height: rpx(120);
            font-weight: 600;
            color: #000;
            width: 100%;
            text-align: center;
            margin-bottom:rpx(45);

            span {
                font-size: rpx(62);
                color: #ff5f5f;
                text-shadow: 0 0 rpx(4) #000;
                font-weight: 600;
            }
        }
    }
    .result-m{
        display: block;
        /*position: absolute;*/
        z-index: 20;
        background-size:100% 100%;
        margin: 0 auto;
        /*right:rpx(68);*/
        /*top:rpx(70);*/
        &.result-m0{
            width: rpx(313);
            height: rpx(276);
            background-image: url(../../img/resultm0.png);
        }
        &.result-m1{
            width: rpx(317);
            height: rpx(290);
            background-image: url(../../img/resultm1.png);
        }&.result-m2{
            width: rpx(237);
            height: rpx(275);
            background-image: url(../../img/resultm2.png);
        }&.result-m3{
            width: rpx(232);
            height: rpx(290);
            background-image: url(../../img/resultm3.png);
        }&.result-m4{
            width: rpx(307);
            height: rpx(296);
            background-image: url(../../img/resultm4.png);
        }
    }

    .result-intro {
        //position: absolute;
        margin: 0 auto
    }

    @mixin resultbg($width,$height) {
        display: block;
        width: rpx($width);
        height: rpx($height);
    }

    .result0 {
        @include resultbg(557, 144)
    }
    .result1 {
        @include resultbg(582, 104)
    }

    .result2 {
        @include resultbg(556, 104)
    }

    .result3 {
        @include resultbg(563, 104)
    }

    .result4 {
        @include resultbg(583, 104)
    }

    .share-pop {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 99;
        img {
            display: block;
            width: 80%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .loading {
            color: #fff;
            font-size:rpx(50);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 99;
        }
        blockquote{
            font-size:rpx(36);
            color: #fff;
            position: absolute;
            left:50%;
            bottom:rpx(50);
            transform: translate(-50%,0);
        }
    }

    .reg-wrap {
        display: none;
        padding-bottom: rpx(50);
        .reg {
            width: rpx(200);
            display: inline-block;
            text-align: left;
            vertical-align: middle;
        }
        img.p {
            display: inline-block;
            width: rpx(393);
            height: rpx(88);
            vertical-align: middle;
            margin-left: rpx(20)
        }
    }
    .music{
        width: rpx(67);
        height:rpx(63);
        background-image: url(../../img/play.png);
        background-size: 100% 100%;
        position: fixed;
        top:rpx(10);
        right:rpx(10);
        z-index: 90;
        animation:musicplay 2s linear infinite;
        &.pause{
            animation: musicpause 1s .4s linear forwards;
        }
    }
    @keyframes musicplay {
         0%{transform: rotate(0deg) translateZ(0)}
         100%{transform: rotate(360deg) translateZ(0)}
    }
    @keyframes musicpause {
        0%{transform: scale(1) translateZ(0);}
        50%{transform: scale(.8) translateZ(0);}
        100%{transform: scale(1) translateZ(0);background-image: url(../../img/pause.png);}
    }
    .share-tip{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        i{
            display: block;
            width:rpx(555);
            height:rpx(194);
            background-image: url(../../img/result-tip.png);
            background-size: 100% 100%;
        }
        a{
            display: block;
            width:rpx(339);
            height:rpx(102);
            line-height: rpx(102);
            font-size:rpx(31);
            color: #000;
            text-align: center;
            font-weight: 700;
            background-image: url(../../img/resultbtn2.png);
            background-size: 100% 100%;
            margin:rpx(50) auto 0;
        }
    }
    .copyright{
        position: fixed;
        width: 100%;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
        font-size:rpx(12);
        bottom: rpx(5);
        left: 0;
    }

    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
        // iphonex
        p.qa-title {
            margin-top: rpx(50)
        }
        .answer li {
            margin: rpx(30) auto;
        }
        .title {
            margin-top: 0
        }
    ;
        .ans {
            margin: rpx(35) auto;
        }
    }
    @media only screen and (max-height:567px){
        .result-bg{
            height:rpx(940);
            margin-top:rpx(-50);
            margin-bottom:rpx(5)
        }
        .result-top{
            margin-top:rpx(-32)
        }
    }


</style>
