<template>
    <div class="qa">
        <div v-if="qaIndex">
            <p>让时光葛优躺一会儿，回到房子即将装修的时候，看看你有没有装修公司选择纠结症？</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.嫡出正统的才是本王所爱</li>
                <li @click="answerQ('B')">B.难得随心，民间招一个~</li>
            </ul>
        </div>


        <div v-if="answer === 'A'">
            <p>该配合你演出的我视而不见……
                本王要的地中海风格被装得这么乡土风情，你当我是‘’你好凯蒂猫‘’吗？
            </p>

            <div @click="nextQa">
                一首凉凉送给自己。
                哎，收拾心情继续布置吧。生活需要微笑面对。
            </div>
        </div>
        <div v-if="answer === 'B'">
            <p>货不对板、电话关机、卷款潜逃……
                这么老土的剧情，竟然都！发！生！了！
            </p>
            <div @click="nextQa">
                一首凉凉送给自己。
                哎，收拾心情继续布置吧。生活需要微笑面对。
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qa2",
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