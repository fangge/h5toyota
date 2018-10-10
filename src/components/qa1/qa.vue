<template>
    <div class="qa">
        <div v-if="qaIndex">
            <div class="ani-wrap">
                <div class="g"></div>
                <div class="m"></div>
                <i class="qp"></i></div>
            <p>飞机延误就是晴空万里中突然暴风雨…坚决阻断了你回家的路。给你一次逃bug的机会，延误险到底buy不buy呢？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.Buy啊，万一见鬼了呢？</li>
                <li @click="answerQ('B')">B.Buy个毛，老子钱多？</li>
            </ul>
        </div>


        <div v-if="answer === 'A'">
            <p>划重点，我的航班取消但不在理赔范围内！ 扎心了……</p>

            <div @click="nextQa">
                就算心态有点崩，也算安全到家了。淡定吃鸡一把，准备带我亲爱的验房去an…准备进入坟墓，oh no~是求婚啦！</div>
        </div>
        <div v-if="answer === 'B'">
            <p>没想到这一延误就是大半天！请完年假还要扣事假工资......心好塞……</p>
            <div @click="nextQa">
                就算心态有点崩，也算安全到家了。淡定吃鸡一把，准备带我亲爱的验房去an…准备进入坟墓，oh no~是求婚啦！</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qa1",
        data(){
            return{
                qaIndex:true,
                answer:''
            }
        },
        methods:{
            nextQa(){
                this.$emit('stepNext');
            },
            answerQ(data){
                this.qaIndex=false;
                this.answer = data;
                this.$emit('setAnswer',data);
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
    @mixin ani($name,$time,$delay){
        animation-name:$name;
        animation-delay: $delay;
        animation-duration:$time!important;
        animation-timing-function: linear;
    }
    .ani-wrap{
        width: rpx(718);
        height: rpx(780);
        margin: 0 auto;
        background: url(bg.jpg) no-repeat;
        background-size: 100% 100%;
    }
    p{
        width: rpx(718);
        margin: rpx(40) auto 0;
        font-size:rpx(28);
        line-height: rpx(36);
        font-weight: 600;
    }
    .answer{
        li{
            width: rpx(667);
            height: rpx(96);
            line-height: rpx(96);
            text-align: center;
            color: #000;
            font-size:rpx(31);
            font-weight:600;
            background: url(btn.png) no-repeat;
            background-size:100% 100%;
            margin: rpx(20) auto;
        }
    }
</style>