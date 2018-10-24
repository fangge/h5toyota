<template>
    <div class="qa qa2">
        <div v-if="qaIndex">
            <div class="ani-wrap">
                <i class="gmouth"></i>
                <i class="meye"></i>
                <i class="qp1"></i>
                <i class="qp2"></i>
                <i class="gbling"></i>
            </div>
            <p class="qa-title">让时光葛优躺一会儿，回到房子即将装修的时候，看看你有没有装修公司选择纠结症？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.嫡出正统的才是本王所爱</li>
                <li @click="answerQ('B')">B.难得随心，民间招一个~</li>
            </ul>
        </div>
        <div class="qa-next" v-else>

            <div v-if="answer === 'A'">
                <h2 class="title">嫡出正统的才是本王所爱</h2>
                <div class="ans1 ans">
                    <h3>本王要的地中海风格被装得这么乡土风，<br>你当我是‘你好凯蒂猫’？</h3>
                    <i class="meye2"></i>
                    <i class="geye"></i>
                    <i class="qp3"></i><i class="qp4"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    一首凉凉送给自己。<br>
                    哎，收拾心情继续布置吧,生活需要微笑面对。
                    <i></i>
                </div>
            </div>
            <div v-if="answer === 'B'">
                <h2 class="title">难得随心，民间招一个~</h2>
                <div class="ans ans2">
                    <h3>货不对板、电话关机、卷款潜逃……<br>
                        这么老土的剧情，竟然都！发！生！了！</h3>
                    <p class="t1">装修的<br>
                        兄dei</p>
                    <p class="t2">你们的良心不会痛吗？</p>
                    <i class="eye"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    一首凉凉送给自己。<br>
                    哎，收拾心情继续布置吧,生活需要微笑面对。
                    <i></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qa2",
        data() {
            return {
                qaIndex: true,
                answer: ''
            }
        },
        methods: {
            nextQa() {
                this.$emit('stepNext');
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

    .qa2 {
        .ani-wrap {
            width: rpx(702);
            height: rpx(771);
            margin: rpx(20) auto 0;
            background: url(../../img/qa2/qa2bg.jpg) no-repeat;
            background-size: 100% 100%;
            position: relative;

            i {
                display: block;
                position: absolute;
            }
            .meye {
                width: rpx(72);
                height: rpx(59);
                background: url(../../img/qa2/meye1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(425);
                right: rpx(100);
                animation: meye 0s 1s linear forwards;
                transform: translateZ(0);
            }
            .gmouth {
                width: rpx(25);
                height: rpx(28);
                background: url(../../img/qa2/gmouth1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(575);
                left: rpx(450);
                animation: gmouth 0s 1.6s linear forwards;
                transform: translateZ(0);
            }
            .qp1 {
                width: rpx(128);
                height: rpx(267);
                background: url(../../img/qa2/qp1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(130);
                left: rpx(379);
                animation: fadeIn 0.5s 1.4s linear both;
                transform: translateZ(0);
            }
            .qp2 {
                width: rpx(312);
                height: rpx(236);
                background: url(../../img/qa2/qp2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(485);
                left: rpx(15);
                animation: fadeIn 0.5s 2.5s linear both;
                transform: translateZ(0);
            }
            .gbling {
                width: rpx(21);
                height: rpx(39);
                background: url(../../img/qa2/gbilng.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(533);
                left: rpx(503);
                opacity: 0;
                animation: bounceIn 1s 1.6s infinite forwards;
                transform: translateZ(0);
            }
        }

        @keyframes gmouth {
            0% {
                width: rpx(25);
                height: rpx(28);
                background: url(../../img/qa2/gmouth1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(575);
                left: rpx(450);
            }
            100% {
                width: rpx(30);
                height: rpx(47);
                background: url(../../img/qa2/gmouth2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(565);
                left: rpx(445);
            }
        }

        @keyframes meye {
            0% {
                width: rpx(72);
                height: rpx(59);
                background: url(../../img/qa2/meye1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(425);
                right: rpx(100);
            }
            100% {
                width: rpx(72);
                height: rpx(60);
                background: url(../../img/qa2/meye2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(425);
                right: rpx(100);
            }
        }
        .ans{
            p{
                &.t1{
                    color: #fff;
                    font-weight: 600;
                    -webkit-text-stroke: rpx(3) #000;
                    animation: fadeInLeft .5s .6s linear both;
                    transform: translateZ(0);
                }
                &.t2{
                    color: #000;
                    font-weight: 600;
                    text-shadow:0 0 rpx(4) #fff;
                    animation: fadeInLeft .5s .8s linear both;
                    transform: translateZ(0);
                }
            }
        }
        .ans1 {
            width: rpx(704);
            height: rpx(628);
            background-image: url(../../img/qa2/qa2ans1.jpg);
            background-size:100% 100%;
            i{
                display: block;
                position: absolute;
            }
            .meye2{
                width: rpx(66);
                height: rpx(26);
                background-image: url(../../img/qa2/meye3.png);
                background-size:100% 100%;
                right:rpx(138);
                top:rpx(272-25);
                animation: meye2 0s 1s linear forwards;
                transform: translateZ(0);
            }
            @keyframes meye2 {
                0% {
                    width: rpx(66);
                    height: rpx(26);
                    background-image: url(../../img/qa2/meye3.png);
                }
                100% {
                    width: rpx(63);
                    height: rpx(31);
                    background-image: url(../../img/qa2/meye4.png);
                }
            }
            .geye{
                width: rpx(52);
                height: rpx(23);
                background-image: url(../../img/qa2/geye1.png);
                background-size:100% 100%;
                right:rpx(305);
                top:rpx(353-25);
                transform: translateZ(0);
                animation: geye 0s 1.6s linear forwards;
            }
            @keyframes geye {
                0% {
                    width: rpx(52);
                    height: rpx(23);
                    background-image: url(../../img/qa2/geye1.png);
                }
                100% {
                    width: rpx(49);
                    height: rpx(23);
                    background-image: url(../../img/qa2/geye2.png);
                }
            }
            .qp3 {
                width: rpx(332);
                height: rpx(102);
                background: url(../../img/qa2/qp3.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(202);
                left: rpx(99);
                animation: fadeIn 0.5s 2s linear both;
                transform: translateZ(0);
            }
            .qp4 {
                width: rpx(125);
                height: rpx(319);
                background: url(../../img/qa2/qp4.png) no-repeat;
                background-size: 100% 100%;
                bottom: rpx(-10);
                right: rpx(-10);
                animation: fadeIn 0.5s 2.6s linear both;
                transform: translateZ(0);
            }
        }
        .ans2{
            width: rpx(697);
            height: rpx(613);
            background-image: url(../../img/qa2/qa2ans2.jpg);
            p{
                &.t1{
                    font-size:rpx(88);
                    margin-bottom:rpx(40);
                    color: #fff;
                    margin-top:rpx(150);
                    text-shadow:0 0 rpx(4) #000;
                }
                &.t2{
                    font-size:rpx(44);
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
                    top:rpx(242);
                    right:rpx(62);
                }
            }
        }
    }


</style>