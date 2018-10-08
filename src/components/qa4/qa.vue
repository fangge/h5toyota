<template>
    <div class="qa">
        <div v-if="qaIndex">
            <p>想想看，买车比娶媳妇还激动。我一定要把bug反弹，在买车时满血复活!</p>
            <ul class="answer">
                <li @click="answerQ('A')">A.XX牌8年质保的混动车</li>
                <li @click="answerQ('B')">B.‘一诺一生，终身质保’的雷凌双擎</li>
            </ul>
        </div>


        <div v-if="answer === 'A'">
            <p>眼看着王者打到最后，猪队友跑出来了……
                杂牌啊，你这上不了台面的，赶紧给我有多远滚多远。
            </p>

            <div @click="resultPage">
                人生有无数个选择，无数个BUG，但只要选对了重要的TA，每天都是狂欢节！
                那你呢？估计能hold住多少PA的BUG？


            </div>
        </div>
        <div v-if="answer === 'B'">
            <p>为我自己打call！
                啥叫靠谱，看看雷凌双擎的“电池无忧计划” ，比结婚誓言还真诚：“一诺一生”。
                啥叫服务，不限年限，不限里程！
                买了就赚大发了！
            </p>
            <div @click="resultPage">
                人生有无数个选择，无数个BUG，但只要选对了重要的TA，每天都是狂欢节！
                那你呢？估计能hold住多少PA的BUG？
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
            resultPage(){
                this.$emit('resultPage');
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