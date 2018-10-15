<template>
    <div class="qa qa4">
        <div v-if="qaIndex">
            <div class="ani-wrap">
                <div class="qa4s1">
                    <div class="car_wrap">
                        <span class="car"><i class="wheel"></i><i class="wheel-line"></i></span>
                        <i class="shadow1"></i>
                    </div>
                    <i class="qp"></i>

                </div>
                <div class="qa4s2">
                    <p>确认过<br>
                        眼神…<br>
                        这就<br>
                        是我<br>
                        想要<br>
                        的CAR！</p>
                </div>
                <i class="car2"></i>
            </div>
            <p class="qa-title">想想看，买车比娶媳妇还激动。我一定要把bug反弹，在买车时满血复活!</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.‘一诺一生，终身质保’的雷凌双擎</li>
                <li @click="answerQ('B')">B.XX牌8年质保的混动车</li>
            </ul>
        </div>
        <div class="qa-next" v-else>

            <div v-if="answer === 'A'">
                <h2 class="title title2">‘一诺一生，终身质保’的雷凌双擎</h2>
                <div class="ans1 ans">
                    <i class="qa4mouth"></i>
                    <i class="qp2"></i><i class="qp3"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    人生有无数个选择，无数个BUG，但只要选对了
                    重要的TA，每天都是狂欢节！<br>
                    那你呢？估计能hold住多少PA的BUG？
                    <i></i>
                </div>
            </div>
            <div v-if="answer === 'B'">
                <h2 class="title">XX牌8年质保的混动车</h2>
                <div class="ans ans2">
                    <h3>眼看着王者打到最后，<br>
                        猪队友跑出来了……</h3>
                    <p class="t1">杂牌啊！</p>
                    <p class="t2">你这上不了台面的，<br>
                        赶紧给我有多远滚多远。</p>
                    <i class="eye"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    人生有无数个选择，无数个BUG，但只要选对了
                    重要的TA，每天都是狂欢节！<br>
                    那你呢？估计能hold住多少PA的BUG？
                    <i></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "qa4",
        data() {
            return {
                qaIndex: true,
                answer: ''
            }
        },
        methods: {
            nextQa() {
                this.$emit('resultPage');
            },
            answerQ(data) {
                this.qaIndex = false;
                this.answer = data;
                this.$emit('setAnswer', data);
            }
        }
    }
</script>

<style lang="scss">
    $psdBaseSize: 750;
    $maxBaseSize: 540;

    @function rpx($value) {
        @return $value / $psdBaseSize * 10rem;
    }

    @mixin ani($name,$time,$delay) {
        animation-name: $name;
        animation-delay: $delay;
        animation-duration: $time !important;
        animation-timing-function: linear;
    }

    .qa4 {
        .ani-wrap {
            width: rpx(704);
            height: rpx(771);
            margin: rpx(20) auto 0;
            background: url(../../img/qa4/qa4bg.jpg) no-repeat;
            background-size: 100% 100%;
            position: relative;
            .qa4s1{
                width: rpx(395);
                height: rpx(249);
                background: url(../../img/qa4/qa4s1.jpg) no-repeat;
                background-size: 100% 100%;
                overflow: hidden;
                position: absolute;
                top:rpx(21);
                left:rpx(17);
                animation: fadeIn .4s 2.4s linear both;
                transform: translateZ(0);
            }
            .qa4s2{
                width: rpx(231);
                height: rpx(267);
                background: url(../../img/qa4/qa4s2.png) no-repeat;
                background-size: 100% 100%;
                overflow: hidden;
                position: absolute;
                top:rpx(-2);
                right:rpx(32);
                animation:fadeIn .6s 3.4s linear both;
                transform: translateZ(0);
                p{
                    font-size:rpx(26);
                    line-height: rpx(36);
                    position: absolute;
                    left:rpx(16);
                    top:rpx(32);
                    font-weight: 600;
                }
            }
            i {
                display: block;
                position: absolute;
            }
            .car_wrap{
                width: rpx(245);
                height: rpx(116);
                bottom:rpx(30);
                right:0;
                position: absolute;
                animation: car .7s 2.8s linear both;
                transform: translateZ(0);
                .shadow1{
                    width: rpx(243);
                    height: rpx(28);
                    background: url(../../img/qa4/shadow1.png) no-repeat;
                    background-size: 100% 100%;
                    bottom:rpx(-20);
                    left:0;
                    z-index: 10;
                }
            }
            .car{
                display: block;
                width: rpx(245);
                height: rpx(116);
                background: url(../../img/qa4/car.png) no-repeat;
                background-size: 100% 100%;
                position: relative;
                z-index: 11;
                .wheel{
                    width: rpx(58);
                    height: rpx(57);
                    background: url(../../img/qa4/wheel.png) no-repeat;
                    background-size: 100% 100%;
                    top:rpx(76);
                    left:rpx(27);
                    transform-origin: center center;
                    animation: wheel 1s 1s linear both;
                    z-index: 99;
                    transform: translateZ(0);
                }
                .wheel-line{
                    width: rpx(79);
                    height:rpx(12);
                    background: url(../../img/qa4/wheel_line.png) no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    top:rpx(118);
                    left:rpx(68)
                }
            }
            .qp{
                width: rpx(67);
                height: rpx(136);
                background: url(../../img/qa4/qa4qp1.png) no-repeat;
                background-size: 100% 100%;
                top:rpx(35);
                left:rpx(183);
                animation: fadeIn .5s 3.2s linear both;
                transform: translateZ(0);
            }
            @keyframes car {
                0%{transform: translate(100%,0)}
                100%{transform: translate(0,0)}
            }
            @keyframes wheel{
                0%{transform: rotate(0)}
                100%{transform: rotate(-360deg)}
            }
            .car2{
                width: rpx(566);
                height: rpx(234);
                background: url(../../img/qa4/car2.png) no-repeat;
                background-size: 100% 100%;
                transform-origin: right center;
                right:rpx(15);
                bottom:rpx(32);
                animation: fadeIn .8s 1s linear both,car2 1s 1.4s linear both;
                transform: translateZ(0);
            }
            @keyframes car2 {
                0%{transform: scale(.4)}
                100%{transform: scale(1)}
            }
        }
        .title2{
            width: rpx(676);
            height: rpx(137);
            background: url(../../img/qa4/qa4title.jpg) no-repeat;
            background-size: 100% 100%;
        }
        .ans{
            p{
                &.t1{
                    color: #fff;
                    font-weight: 600;
                    -webkit-text-stroke: rpx(2) #000;
                    animation: fadeInLeft .5s .6s linear both;
                }
                &.t2{
                    color: #000;
                    font-weight: 600;
                    text-shadow:0 0 rpx(4) #fff;
                    animation: fadeInLeft .5s .8s linear both;
                }
            }
        }
        .ans1 {
            width: rpx(701);
            height: rpx(634);
            background-image: url(../../img/qa4/qa4ans2.jpg);
            background-size:100% 100%;
            overflow: visible;
            i{
                display: block;
                position: absolute;
            }
            .qa4mouth{
                width: rpx(65);
                height: rpx(16);
                background-image: url(../../img/qa4/msmell.png);
                background-size:100% 100%;
                top:rpx(218);
                left:rpx(198);
                animation: qa4mouth 0s .4s linear forwards;
                transform: translateZ(0);
            }
            @keyframes qa4mouth {
                0%{
                    width: rpx(65);
                    height: rpx(16);
                    background-image: url(../../img/qa4/msmell.png);
                    background-size:100% 100%;
                    top:rpx(218);
                    left:rpx(198)
                }
                100%{
                    width: rpx(72);
                    height: rpx(38);
                    background-image: url(../../img/qa4/msmell2.png);
                    background-size:100% 100%;
                    top:rpx(212);
                    left:rpx(196)
                }
            }
            .qp2{
                width: rpx(160);
                height: rpx(229);
                background-image: url(../../img/qa4/qa4qp2.png);
                background-size:100% 100%;
                top:rpx(-35);
                left:rpx(-20);
                animation: fadeIn .4s .6s linear both;
            }
            .qp3{
                width: rpx(163);
                height: rpx(146);
                background-image: url(../../img/qa4/qa4qp3.png);
                background-size:100% 100%;
                bottom:rpx(32);
                right:rpx(18);
                animation: fadeIn .4s 1s linear both;
            }

        }
        .ans2{
            width: rpx(697);
            height: rpx(613);
            background-image: url(../../img/qa2/qa2ans2.jpg);
            h3{
                //line-height: 1.2;
            }
            p{
                &.t1{
                    font-size:rpx(88);
                    margin-bottom:rpx(40);
                    color: #fff;
                    margin-top:rpx(150);
                    text-shadow:0 0 rpx(2) #000;
                }
                &.t2{
                    font-size:rpx(39);
                }
            }
            .eye{
                display: block;
                width: rpx(200);
                height: rpx(122);
                background-image:url(../../img/qa2/eye3.png);
                background-size:100% 100%;
                position: absolute;
                top:rpx(234);
                right:rpx(62);
                animation: eye2 0s .4s linear forwards;
                transform: translateZ(0);
            }
            @keyframes eye2 {
                0% {
                    width: rpx(200);
                    height: rpx(122);
                    background-image:url(../../img/qa2/eye3.png);
                }
                100% {
                    width: rpx(194);
                    height: rpx(113);
                    background-image:url(../../img/qa2/eye4.png);
                    top:rpx(240);
                    right:rpx(62);
                }
            }
        }
    }


</style>