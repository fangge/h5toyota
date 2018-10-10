<template>
    <div class="qa">
        <div v-if="qaIndex">
            <div class="ani-wrap">
                <div class="g"></div>
                <div class="m"></div>
                <i class="qp animated"></i>
                <i class="key2"></i>
            </div>
            <p>飞机延误就是晴空万里中突然暴风雨…坚决阻断了你回家的路。给你一次逃bug的机会，延误险到底buy不buy呢？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.Buy啊，万一见鬼了呢？</li>
                <li @click="answerQ('B')">B.Buy个毛，老子钱多？</li>
            </ul>
        </div>
        <div class="qa-next" v-else>
            <h2 class="title">Buy啊，万一见鬼了呢？</h2>
            <div v-if="answer === 'A'">
                <p>划重点，我的航班取消但不在理赔范围内！ 扎心了……</p>

                <div @click="nextQa">
                    就算心态有点崩，也算安全到家了。淡定吃鸡一把，准备带我亲爱的验房去an…准备进入坟墓，oh no~是求婚啦！
                </div>
            </div>
            <div v-if="answer === 'B'">
                <p>没想到这一延误就是大半天！请完年假还要扣事假工资......心好塞……</p>
                <div @click="nextQa">
                    就算心态有点崩，也算安全到家了。淡定吃鸡一把，准备带我亲爱的验房去an…准备进入坟墓，oh no~是求婚啦！
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
        animation-name: $name;
        animation-delay: $delay;
        animation-duration: $time !important;
        animation-timing-function: linear;
    }

    .ani-wrap {
        width: rpx(718);
        height: rpx(780);
        margin: 0 auto;
        background: url(bg.jpg) no-repeat;
        background-size: 100% 100%;
        position: relative;
        .g {
            width: rpx(109);
            height: rpx(230);
            background: url(g.png) no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: rpx(40);
            top: rpx(410);
            animation: g .5s 1.5s linear forwards;
        }
        .m {
            width: rpx(324);
            height: rpx(381);
            background: url(m.png) no-repeat;
            background-size: 100% 100%;
            position: absolute;
            right: rpx(46);
            bottom: rpx(10);
            transition: none;
            animation: m 0s 2s linear forwards;
        }
        i {
            display: block;
            position: absolute;
        }
        .qp {
            width: rpx(284);
            height: rpx(134);
            background: url(qp.png) no-repeat;
            background-size: 100% 100%;
            top: rpx(280);
            left: rpx(184);
            @include ani(fadeIn, .5s, 1.5s);
        }
        .key2 {
            width: rpx(49);
            height: rpx(69);
            background-image: url(key1.png);
            background-size: 100% 100%;
            right: rpx(320);
            bottom: rpx(115);
            transform-origin: right top;
            animation: key 1.5s 0s linear infinite, fadeOut 0s 2s linear forwards;
        }
    }

    @keyframes g {
        0% {
            height: rpx(230);
            background-image: url(g.png);
        }
        100% {
            height: rpx(229);
            background-image: url(g2.png);
        }
    }

    @keyframes m {
        0% {
            width: rpx(324);
            height: rpx(381);
            background-image: url(m.png);
        }
        100% {
            width: rpx(213);
            height: rpx(385);
            background-image: url(m2.png);
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

    p {
        width: rpx(718);
        margin: rpx(40) auto 0;
        font-size: rpx(28);
        line-height: rpx(36);
        font-weight: 600;
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
            background: url(btn.png) no-repeat;
            background-size: 100% 100%;
            margin: rpx(20) auto;
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
</style>