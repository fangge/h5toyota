<template>
    <div class="qa qa3">
        <div v-if="qaIndex">
            <div class="ani-wrap">
                <i class="qp1"></i>
                <i class="qp2"></i>
                <i class="m"></i>
            </div>
            <p class="qa-title">怎么说都是新房，做好清洁工作还是灰常重要滴！来pick一下网上的清洁工具，顺便逃开一次bug的机会，试试？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.权威认证XX牌吸尘器：998元！</li>
                <li @click="answerQ('B')">B.吸尘器只要9.9元包邮买就送四重豪礼！</li>
            </ul>
        </div>
        <div class="qa-next" v-else>

            <div v-if="answer === 'A'">
                <h2 class="title">权威认证XX牌吸尘器：998元！</h2>
                <div class="ans1 ans">
                    <h3>假如我是权威认证，这绝对是次品！劣质品！<br>
                        用一次即烂的吸钱器！</h3>
                    <i class="qp3"></i>
                    <i class="mouth"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    有人说，踩遍无数bug才能C位出道。
                    <br>
                    此刻的我房子都有了，车子还会远吗？
                    <i></i>
                </div>
            </div>
            <div v-if="answer === 'B'">
                <h2 class="title">权威认证XX牌吸尘器：998元！</h2>
                <div class="ans ans2">
                    <h3>我走过最远的路，就是网上商家的套路！<br>
                        19.9元吸尘器形状的……钥匙扣呀！<br>
                        谢谢你让我学会坚强。</h3>
                    <p class="t1">这大概<br>
                        可能也许<br>
                        是我最<span>SKr</span>的<br>
                        一次网上购物吧。</p>
                    <i class="eye"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    有人说，踩遍无数bug才能C位出道。
                    <br>
                    此刻的我房子都有了，车子还会远吗？
                    <i></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qa3",
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

    .qa3 {
        .ani-wrap {
            width: rpx(698);
            height: rpx(771);
            margin: rpx(20) auto 0;
            background: url(../../img/qa3/qa3bg.jpg) no-repeat;
            background-size: 100% 100%;
            position: relative;

            i {
                display: block;
                position: absolute;
            }

            .qp1 {
                width: rpx(407);
                height: rpx(226);
                background: url(../../img/qa3/qp1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(156);
                left: rpx(16);
                animation: fadeIn 0.5s 1.4s linear both;
            }
            .qp2 {
                width: rpx(166);
                height: rpx(240);
                background: url(../../img/qa3/qp2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(370);
                left: rpx(260);
                animation: fadeIn 0.5s 2.2s linear both;
            }
            .m{
                width: rpx(647);
                height: rpx(399);
                background: url(../../img/qa3/m2.png) no-repeat;
                background-size: 100% 100%;
                bottom: rpx(5);
                right: rpx(5);
                animation: qa3m 0s 1.2s linear forwards;
            }
            @keyframes qa3m {
                0% {
                    background-image: url(../../img/qa3/m2.png);
                }
                100% {
                    background-image: url(../../img/qa3/m1.png);
                }
            }
        }

        .title{
            width: rpx(591);
            height:rpx(137);
            background: url(../../img/qa3/qa3title.png) no-repeat;
            background-size: 100% 100%;
            letter-spacing: 0;
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
            width: rpx(683);
            height: rpx(639);
            background-image: url(../../img/qa3/qa3ans1.jpg);
            background-size:100% 100%;
            i{
                display: block;
                position: absolute;
            }
            .mouth{
                width: rpx(42);
                height: rpx(35);
                background-image: url(../../img/qa3/gmouth1.png);
                background-size:100% 100%;
                right:rpx(83);
                top:rpx(545);
                animation: mouth 0s .4s linear forwards;
            }
            @keyframes mouth {
                0% {
                    width: rpx(42);
                    height: rpx(35);
                    background-image: url(../../img/qa3/gmouth1.png);
                    background-size:100% 100%;
                    right:rpx(83);
                    top:rpx(545);
                }
                100% {
                    width: rpx(44);
                    height: rpx(48);
                    background-image: url(../../img/qa3/gmouth2.png);
                    background-size:100% 100%;
                    right:rpx(83);
                    top:rpx(550);
                }
            }

            .qp3 {
                width: rpx(325);
                height: rpx(337);
                background: url(../../img/qa3/qp3.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(86);
                left: 50%;
                transform:translate(-50%,0);
                animation: fadeIn 0.5s .8s linear both;
            }

        }
        .ans2{
            width: rpx(697);
            height: rpx(613);
            background-image: url(../../img/qa2/qa2ans2.jpg);
            h3{
                line-height: 1.2;
            }
            p{
                &.t1{
                    font-size:rpx(58);
                    color: #000;
                    margin-top:rpx(95);
                    text-shadow:0 0 rpx(4) #fff;
                    span{
                        font-size:rpx(93);
                        color: #fff;
                        text-shadow:0 0 rpx(4) #000;
                    }
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