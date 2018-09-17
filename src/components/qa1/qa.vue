<template>
    <div class="qa">
        <div v-if="qaIndex">
            <p>回家的飞机今天出发，假设你是男主，现在你有一次逃开BUG的机会，请问，你要买飞机延误险吗？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.买，保一份安心无忧</li>
                <li @click="answerQ('B')">B.不买，何必浪费钱呢</li>
            </ul>
        </div>


        <div v-if="answer === 'A'">
            <p>航班突然取消，但买的延误险只保delay不保取消！
                保险，不保险……BUG出现的防不胜防，本以为完美无缺的行程就这样毁了……</p>

            <div @click="nextQa">
                历经艰辛，终于搭完这一趟糟心的航班回到家......满心期待着新房，准备装修好带女友过去验房和求婚。
            </div>
        </div>
        <div v-if="answer === 'B'">
            <p>航班突然取消，一分钱都赔不到，还要搭上超时请假扣的工资，经济损失不止一点点…</p>
            <div @click="nextQa">
                历经艰辛，终于搭完这一趟糟心的航班回到家......满心期待着新房，准备装修好带女友过去验房和求婚。
            </div>
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

<style scoped>

</style>