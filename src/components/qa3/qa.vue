<template>
    <div class="qa">
        <div v-if="qaIndex">
            <p>怎么说都是新房，做好清洁工作还是灰常重要滴！来pick一下网上的清洁工具，顺便逃开一次bug的机会，试试？
            </p>
            <ul class="answer">
                <li @click="answerQ('A')">A.权威认证XX牌吸尘器：998元！</li>
                <li @click="answerQ('B')">B.吸尘器只要9.9元包邮买就送四重豪礼！</li>
            </ul>
        </div>


        <div v-if="answer === 'A'">
            <p>假如我是权威认证，这绝对是次品！劣质品！用一次即烂的吸钱器！</p>

            <div @click="nextQa">
                有人说，踩遍无数bug才能C位出道。
                此刻的我房子都有了，车子还会远吗？

            </div>
        </div>
        <div v-if="answer === 'B'">
            <p>我走过最远的路，就是网上商家的套路！
                19.9元吸尘器形状的……钥匙扣呀！谢谢你让我学会坚强。</p>
            <div @click="nextQa">
                有人说，踩遍无数bug才能C位出道。
                此刻的我房子都有了，车子还会远吗？
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qa3",
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

<style scoped>

</style>