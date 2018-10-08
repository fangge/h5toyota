<template>
    <div class="wrap">
        <div class="input-wrap" v-if="step===0">
            <input type="text" placeholder="输入你的姓名" v-model="username">
            <a @click="stepNext">测测你能承受多少Pa</a>
        </div>
        <div v-if="resultShow">
            你是一个能承受{{score}}帕BUG的人
            <div v-if="score>=1 && score <=25">你可能还没理解什么叫BUG，但我很佩服你越BUG越不怕的精神，继续跌倒吧朋友，摔瘸了总会有站不起来的那天，嘻嘻。
            </div>
            <div v-else-if="score>=26 && score <=50">差点及格？那还是不及格啊！
                不用风中凌乱了，那依然解救不了你脆弱的心灵。
                有时候BUG就是一副解药，啃两口吞下去，睡一觉第二天醒来你依然是个王者。
            </div>
            <div v-else-if="score>=51 && score <=75">二货，就算你抗压能力强，能熬夜吃苦，就要死扛吗？
                正确的办法是——找个TA护航，偶尔听听一诺一生的情话，偶尔踩踩BUG，打怪升级才快啊！
            </div>
            <div v-else>嘿嘿，你个老司机 !别什么BUG不BUG，我瞧对你来说都是小咖。别搞那一套天生强大，我知道你背后闷骚努力，就猥琐着浪吧。
                给你比心，C位出道的机会来了！
            </div>
            <a @click="resultImg">分享测试结果</a><a href="https://www.gac-toyota.com.cn/vehicles/newlevin%20hev ">进入无忧计划</a>
        </div>
        <div v-else>
            <qa1 v-if="step === 1" @stepNext="stepNext" @setAnswer="setAnswer"></qa1>
            <qa2 v-if="step === 2" @stepNext="stepNext" @setAnswer="setAnswer"></qa2>
            <qa3 v-if="step === 3" @stepNext="stepNext" @setAnswer="setAnswer"></qa3>
            <qa4 v-if="step === 4" @stepNext="stepNext" @setAnswer="setAnswer" @resultPage="resultPage"></qa4>
        </div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    import qa1 from '../../components/qa1/qa';
    import qa2 from '../../components/qa2/qa';
    import qa3 from '../../components/qa3/qa';
    import qa4 from '../../components/qa4/qa';

    export default {
        components: {
            qa1,qa2,qa3,qa4
        },
        data () {
            return {
                step:0,
                username:'',
                resultShow:false,
                answers:[],
                score:0
            }
        },
        created(){

        },
        methods:{
            stepNext(){
                if(this.username){
                    this.step++;
                }else{
                    alert('请输入你的名字')
                }
            },
            resultPage(){
              this.resultShow = true;
              let alen = 0;
              for(let i in this.answers){
                  if(this.answers[i] === 'A'){
                      alen++;
                  }
              }
              if(alen ===1){
                  this.score = this.randomNum(1,25)
              }else if(alen ===2){
                  this.score = this.randomNum(26,50)
              }else if(alen ===3){
                  this.score = this.randomNum(51,75)
              }else if(alen ===4){
                  this.score = this.randomNum(76,100)
              }
            },
            randomNum(minNum,maxNum){
                switch(arguments.length){
                    case 1:
                        return parseInt(Math.random()*minNum+1,10);
                        break;
                    case 2:
                        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                        break;
                    default:
                        return 0;
                        break;
                }
            },
            setAnswer(data){
                this.answers.push(data);
            },
            resultImg(){
                html2canvas(document.body).then(canvas => {
                    document.body.appendChild(canvas)
                });
            }
        }
    }

</script>

<style lang="scss">

    $psdBaseSize:750;
    $maxBaseSize:540;

    @function rpx($value){
        @return $value / $psdBaseSize * 10rem;
    }

    html{
        font-size:10vw;
    }
    /**
   * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
   * http://cssreset.com
   */
    body * { max-height: 999999px; }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
        font-style: normal;
        appearance: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    html,body {
        font-family: PingFangSC-Medium, "Source Han Sans CN", sans-serif;
        background: transparent;
    }

    img {
        vertical-align: top;
    }

    /* custom */
    a {
        color: #7e8c8d;
        text-decoration: none;
        -webkit-backface-visibility: hidden;
    }

    li {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: rgba(0, 0, 0, 0.2);
        -webkit-border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background-color: rgba(125, 125, 125, 0.7);
        -webkit-border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        width: 5px;
        background-color: rgba(125, 125, 125, 0.7);
        -webkit-border-radius: 6px;
    }

    body {
        -webkit-text-size-adjust: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        position: relative;
    }
    .wrap{
        position: relative;
        overflow: hidden;
    }
    .input-wrap{
        position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        input{
            width: rpx(360);
            height: rpx(40);
            line-height: rpx(40);
            text-align: center;
            border:1px solid #000;
        }
    }
</style>
