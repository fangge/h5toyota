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
                    <h3>该配合你演出的我视而不见……<br>
                        本王要的地中海风格被装得这么乡土风情，你<br>
                        当我是‘你好凯蒂猫’吗？</h3>
                    <i class="qp3"></i><i class="qp4"></i>
                    <i class="meye2"></i>
                    <i class="geye"></i>
                </div>

                <div @click="nextQa" class="btn2">
                    一首凉凉送给自己。<br>
                    哎，收拾心情继续布置吧,生活需要微笑面对。
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
            background: url(bg.jpg) no-repeat;
            background-size: 100% 100%;
            position: relative;

            i {
                display: block;
                position: absolute;
            }
            .meye {
                width: rpx(72);
                height: rpx(59);
                background: url(meye1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(425);
                right: rpx(100);
                animation: meye 0s .4s linear forwards;
            }
            .gmouth {
                width: rpx(25);
                height: rpx(28);
                background: url(gmouth1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(575);
                left: rpx(450);
                animation: gmouth 0s .8s linear forwards;
            }
            .qp1 {
                width: rpx(128);
                height: rpx(267);
                background: url(qp1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(130);
                left: rpx(379);
                animation: fadeIn 0.5s .6s linear both;
            }
            .qp2 {
                width: rpx(312);
                height: rpx(236);
                background: url(qp2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(485);
                left: rpx(15);
                animation: fadeIn 0.5s 1.6s linear both;
            }
            .gbling {
                width: rpx(21);
                height: rpx(39);
                background: url(gbilng.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(533);
                left: rpx(503);
                opacity: 0;
                animation: bounceIn 1s 1.4s infinite forwards;
            }
        }

        @keyframes gmouth {
            0% {
                width: rpx(25);
                height: rpx(28);
                background: url(gmouth1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(575);
                left: rpx(450);
            }
            100% {
                width: rpx(30);
                height: rpx(47);
                background: url(gmouth2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(565);
                left: rpx(445);
            }
        }

        @keyframes meye {
            0% {
                width: rpx(72);
                height: rpx(59);
                background: url(meye1.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(425);
                right: rpx(100);
            }
            100% {
                width: rpx(72);
                height: rpx(60);
                background: url(meye2.png) no-repeat;
                background-size: 100% 100%;
                top: rpx(425);
                right: rpx(100);
            }
        }

        .ans1 {
            width: rpx(699);
            height: rpx(592);
            background-image: url(ans1.jpg);

        }
        .ans2 {
            width: rpx(697);
            height: rpx(613);
            background-image: url(ans2.jpg);
            
        }
    }


</style>