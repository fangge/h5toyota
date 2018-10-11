<template>
    <div class="wrap">
        <loadbar @loadSuccess="loadSuccess" :isOk="isOk"></loadbar>
        <div v-if="isOk" class="cont">
            <div class="index" v-if="step == 0">
                <i class="key"></i>
                <div class="input-wrap animated" v-if="step===0">
                    <input type="text" placeholder="输入你的姓名" v-model="username">
                    <a @click="stepNext">测测你能承受多少Pa</a>
                    <i class="hand" id="hand1"></i>
                </div>
                <i class="animated qp qp1"></i><i class="animated qp qp2"></i><i class="animated qp qp3"></i><i
                    class="animated qp qp4"></i>
            </div>

            <div v-if="resultShow" class="resultPage">
                你是一个能承受{{score}}帕BUG的人
                <div v-if="score>=1 && score <=25">你可能还没理解什么叫BUG，但我很佩服你越BUG越不怕的精神，继续跌倒吧朋友，摔瘸了总会有站不起来的那天，嘻嘻。
                </div>
                <div v-else-if="score>=26 && score <=50">差点及格？那还是不及格啊！
                    不用风中凌乱了，那依然解救不了你脆弱的心灵。
                    有时候BUG就是一副解药，啃两口吞下去，睡一觉第二天醒来你依然是个王者。
                </div>
                <div v-else-if="score>=51 && score <=75">二货，就算你抗压能力强，能熬夜吃苦，就要死扛吗？
                    正确的办法是——找个TA护航，偶尔听听一诺一生的情话，偶尔踩踩BUG，打怪升级才快啊！
                </div>
                <div v-else>嘿嘿，你个老司机 !别什么BUG不BUG，我瞧对你来说都是小咖。别搞那一套天生强大，我知道你背后闷骚努力，就猥琐着浪吧。
                    给你比心，C位出道的机会来了！
                </div>
                <a @click="resultImg">分享测试结果</a><a
                    href="https://www.gac-toyota.com.cn/vehicles/newlevin%20hev ">进入无忧计划</a>
            </div>
            <div v-else class="qaPage">
                <qa1 v-if="step === 1" @stepNext="stepNext" @setAnswer="setAnswer"></qa1>
                <qa2 v-if="step === 2" @stepNext="stepNext" @setAnswer="setAnswer"></qa2>
                <qa3 v-if="step === 3" @stepNext="stepNext" @setAnswer="setAnswer"></qa3>
                <qa4 v-if="step === 4" @stepNext="stepNext" @setAnswer="setAnswer" @resultPage="resultPage"></qa4>
            </div>

        </div>

    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    import Canvas2Image from '../../assets/canvas2image';
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
                step: 2,
                username: '',
                resultShow: false,
                answers: [],
                score: 0
            }
        },
        mounted() {
            setTimeout(() => {
                this.isOk = true;
            }, 1000)
        },
        methods: {
            stepNext() {
                this.step++;
                // if (this.username) {
                //     this.step++;
                // } else {
                //     alert('请输入你的名字')
                // }
            },
            resultPage() {
                this.resultShow = true;
                let alen = 0;
                for (let i in this.answers) {
                    if (this.answers[i] === 'A') {
                        alen++;
                    }
                }
                if (alen === 1) {
                    this.score = this.randomNum(1, 25)
                } else if (alen === 2) {
                    this.score = this.randomNum(26, 50)
                } else if (alen === 3) {
                    this.score = this.randomNum(51, 75)
                } else if (alen === 4) {
                    this.score = this.randomNum(76, 100)
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
            resultImg() {
                html2canvas(document.body).then(canvas => {
                    document.body.appendChild(canvas)
                });
            },
            loadSuccess() {
                this.isOk = true;
            }
        },
        watch:{
            username:function(val){
                let timer = null;
                if(val.length>0){
                    clearTimeout(timer);
                    if(this.step == 0){
                        timer = setTimeout(function () {
                            document.getElementById('hand1').className += ' show';
                        },5000)
                    }
                }else{
                    clearTimeout(timer);
                }
            }
        }
    }

</script>

<style lang="scss">
    @mixin ani($name,$time,$delay){
        animation-name:$name;
        animation-delay: $delay;
        animation-duration:$time!important;
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
        background: url(input_wrap.png) no-repeat;
        background-size:100% 100%;
        position: fixed;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding-top:rpx(22);
        @include ani(fadeIn,.2s,1s);
        input {
            display: block;
            width: rpx(651);
            height: rpx(126);
            line-height: rpx(40);
            text-align: center;
            border: 0;
            background: transparent url(input.png) no-repeat;
            background-size:100% 100%;
            margin: 0 auto;
            font-size:rpx(45);
            font-weight: 600;
            color: #000;
            font-family: 'pinghei';
            &::placeholder{
                color: #a2a2a2;
            }
        }
        a{
            display: block;
            width: rpx(650);
            height: rpx(122);
            line-height: rpx(122);
            background: transparent url(btn.png) no-repeat;
            background-size:100% 100%;
            margin: rpx(16) auto 0;
            color: #000;
            font-size: rpx(38);
            text-align: center;
            font-weight: 600;
        }
        .hand{
            right:rpx(-5);
            bottom:rpx(-5)
        }
    }

    body, html, .wrap, .cont {
        height: 100%;
    }

    .index {
        height: 100%;
        background: #c1c1c1 url(bg.jpg) no-repeat center 0;
        background-size: cover;
        i.qp {
            display: block;
            position: absolute;
            background-size: 100% 100%;
            left:50%;
            top:50%;
            z-index: 10;
            &.qp1 {
                width: rpx(105);
                height: rpx(217);
                background-image: url(qp1.png);
                margin-left:rpx(-262);
                margin-top:rpx(-108);
                @include ani(fadeIn,.5s,0);
            }
            &.qp2 {
                width: rpx(108);
                height: rpx(257);
                background-image: url(qp2.png);
                margin-left:rpx(-332);
                margin-top:rpx(-328);
                @include ani(fadeIn,.5s,.2s);
            }
            &.qp3 {
                width: rpx(102);
                height: rpx(233);
                background-image: url(qp3.png);
                margin-left:rpx(232);
                margin-top:rpx(-288);
                @include ani(fadeIn,.5s,.4s);
            }
            &.qp4 {
                width: rpx(94);
                height: rpx(167);
                background-image: url(qp4.png);
                margin-left:rpx(92);
                margin-top:rpx(-278);
                @include ani(fadeIn,.5s,.6s);
            }
        }

    }
    .hand{
        display: block;
        width: rpx(102);
        height:rpx(119);
        background: url(hand.png) no-repeat;
        background-size:100% 100%;
        position: absolute;
        opacity: 0;
        transition: all .5s;
        &.show{
            opacity: 1;
        }
    }

    .key {
        display: block;
        width: rpx(65);
        height: rpx(125);
        background: url(key.png) no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        position: absolute;
        left: 63%;
        top: 49%;
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
        transform-origin: top right;
        animation: keyrotate 1s linear infinite;
    }

    @-webkit-keyframes keyrotate {
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
        width: rpx(718);
        margin: rpx(40) auto 0;
        font-size: rpx(28);
        line-height: rpx(36);
        font-weight: 600;
        animation: fadeInDown .2s 2.8s linear both;
    }
    .answer {
        li {
            width: rpx(667);
            height: rpx(96);
            line-height: rpx(96);
            text-align: center;
            color: #000;
            font-size: rpx(31);
            font-weight: 600;
            background: url(sbtn.png) no-repeat;
            background-size: 100% 100%;
            margin: rpx(20) auto;
            animation: fadeInDown .2s 3.2s linear both;
            &:first-child{
                animation: fadeInDown .2s 3s linear both;
            }
        }
    }
    .qa-next{
        padding: 0 rpx(25);
    }
    .title{
        width: rpx(472);
        height: rpx(137);
        background: url(title.png) no-repeat;
        background-size:100% 100%;
        color: #fff;
        font-size:rpx(36);
        line-height: rpx(170);
        box-sizing: border-box;
        padding-left:rpx(30);
        margin-top:rpx(47)
    }
    .btn2{
        width: rpx(692);
        height: rpx(344);
        background-image: url(btn2_wrap.jpg);
        background-size:100% 100%;
        margin: 0 auto;
        color: #000;
        font-size:rpx(28);
        line-height: rpx(36);
        padding: rpx(34) rpx(44) 0;
        box-sizing: border-box;
        font-weight: 600;
        animation: bounceIn .5s 1.2s linear both;
        i{
            display: block;
            width: rpx(173);
            height: rpx(88);
            background-image: url(btn2.png);
            background-size:100% 100%;
            margin: rpx(20) auto 0;
        }
    }
    .ans{
        background-size: 100% 100%;
        margin: rpx(45) auto rpx(30);
        position: relative;
        overflow: hidden;
        h3{
            color: #fff;
            font-size:rpx(31);
            font-weight: 600;
            line-height: rpx(45);
            padding: 0 rpx(28);
            margin: rpx(28) 0 rpx(92);
        }
        p{
                margin-left:rpx(35);
        }
    }
</style>
