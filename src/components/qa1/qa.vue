<template>
    <div class="qa qa1">
        <div v-if="qaIndex">
            <div class="ani-wrap">
                <div class="g"></div>
                <!--<div class="m" style="animation:none"></div>-->
                <div class="m"></div>
                <i class="qp"></i>
                <i class="key2"></i>
            </div>
            <p class="qa-title">飞机延误就是晴空万里中突然暴风雨…坚决阻断了你回家的路。给你一次逃bug的机会，延误险到底buy不buy呢？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.Buy啊，万一见鬼了呢？</li>
                <li @click="answerQ('B')">B.Buy个毛，老子钱多？</li>
            </ul>
        </div>
        <div class="qa-next" v-else>

            <div v-if="answer === 'A'">
                <h2 class="title">Buy啊，万一见鬼了呢？</h2>
                <div class="ans1 ans">
                    <h3>划重点，我的航班取消但不在理赔范围内！<br> 扎心了……</h3>
                    <p class="t1" style="font-family: Arial">W…What?!</p>
                    <p class="t2">这bug真的让我<br>
                        虎躯一震<br>
                        diss保险公司<br>
                        你这个戏精</p>
                    <i class="eye"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    就算心态有点崩，也算安全到家了。淡定吃鸡<br>一把，准备带我亲爱的验房去and…<br>准备进入坟墓，oh no~是求婚啦！
                    <i></i>
                </div>
            </div>
            <div v-if="answer === 'B'">
                <h2 class="title">Buy个毛，老子钱多？</h2>
                <div class="ans ans2">
                    <h3>没想到这一延误就是大半天！请完年假还要扣<br>事假工资......心好塞……</h3>
                    <p class="t1">后悔呀！</p>
                    <p class="t2">这bug成双成对地来，<br>
                        瞬间成了时间金钱双失青年</p>
                    <i class="eye"></i>
                </div>

                <div @click="nextQa"  class="btn2">
                    就算心态有点崩，也算安全到家了。淡定吃鸡<br>一把，准备带我亲爱的验房去and…<br>准备进入坟墓，oh no~是求婚啦！
                    <i></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qa1",
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
        animation: $name $time $delay linear both;
    }

    .qa1{
        .ani-wrap {
            width: rpx(718);
            height: rpx(781);
            margin: rpx(20) auto 0;
            background: url(../../img/qa1/qa1bg.jpg) no-repeat;
            background-size: 100% 100%;
            position: relative;
            .g {
                width: rpx(109);
                height: rpx(230);
                background: url(../../img/qa1/g.png) no-repeat;
                background-size: 100% 100%;
                position: absolute;
                left: rpx(40);
                top: rpx(410);
                animation: g .5s 1.5s linear forwards;
            }
            .m {
                width: rpx(324);
                height: rpx(381);
                background: url(../../img/qa1/m.png) no-repeat;
                background-size: 100% 100%;
                position: absolute;
                right: rpx(46);
                bottom: rpx(10);
                transition: none;
                animation: m 0s 3.5s linear forwards;

            }
            i {
                display: block;
                position: absolute;
            }
            .qp {
                width: rpx(284);
                height: rpx(134);
                background: url(../../img/qa1/qp.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(280);
                left: rpx(184);
                @include ani(fadeIn, .5s, 2s);
            }
            .key2 {
                width: rpx(49);
                height: rpx(69);
                background-image: url(../../img/qa1/key1.png);
                background-size: 100% 100%;
                right: rpx(320);
                bottom: rpx(115);
                transform-origin: right top;
                animation: key 1.5s 0s linear infinite, fadeOut 0s 3.5s linear forwards;
            }
        }

        @keyframes g {
            0% {
                height: rpx(230);
                background-image: url(../../img/qa1/g.png);
            }
            100% {
                height: rpx(229);
                background-image: url(../../img/qa1/g2.png);
            }
        }

        @keyframes m {
            0% {
                height: rpx(381);
                background-image: url(../../img/qa1/m.png);
            }
            100% {
                height: rpx(385);
                right: rpx(46);
                bottom: rpx(6);
                background-image: url(../../img/qa1/qa1m2.png);
            }
        }

        @keyframes key {
            50% {
                transform: translateZ(0) rotate(-49deg);
                bottom: rpx(125);
            }
            0%, 100% {
                transform: translateZ(0) rotate(0deg)
            }
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
                    line-height: rpx(57);
                    text-shadow:0 0 rpx(4) #fff;
                    animation: fadeInLeft .5s .8s linear both;
                }
            }
        }
        .ans1{
            width: rpx(699);
            height: rpx(592);
            background-image: url(../../img/qa1/qa1ans1.jpg);
            p{
                &.t1{
                    font-size:rpx(68);
                }
                &.t2{
                    font-size:rpx(52);
                }
            }
            .eye{
                display: block;
                width: rpx(228);
                height: rpx(62);
                background-image:url(../../img/qa1/eye1.png);
                background-size:100% 100%;
                position: absolute;
                top:rpx(270);
                right:rpx(47);
                animation: eye 0s .4s linear forwards;
            }
            @keyframes eye {
                0% {
                    width: rpx(228);
                    height: rpx(62);
                    background-image:url(../../img/qa1/eye1.png);
                }
                100% {
                    width: rpx(222);
                    height: rpx(67);
                    background-image:url(../../img/qa1/eye2.png);
                }
            }
        }
        .ans2{
            width: rpx(697);
            height: rpx(613);
            background-image: url(../../img/qa1/qa1ans2.jpg);
            p{
                &.t1{
                    font-size:rpx(88);
                    margin-bottom:rpx(58);
                    margin-top:rpx(150);
                }
                &.t2{
                    font-size:rpx(39);
                }
            }
            .eye{
                display: block;
                width: rpx(200);
                height: rpx(122);
                background-image:url(../../img/qa1/eye3.png);
                background-size:100% 100%;
                position: absolute;
                top:rpx(234);
                right:rpx(62);
                animation: eye2 0s .4s linear forwards;
            }
            @keyframes eye2 {
                0% {
                    width: rpx(200);
                    height: rpx(122);
                    background-image:url(../../img/qa1/eye3.png);
                }
                100% {
                    width: rpx(194);
                    height: rpx(113);
                    background-image:url(../../img/qa1/eye4.png);
                    top:rpx(240);
                    right:rpx(62);
                }
            }
        }
    }


</style>