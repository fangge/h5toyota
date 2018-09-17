<template>
    <div class="wrap">
        <div class="input-wrap" v-if="step===0"><input type="text" placeholder="输入你的姓名" v-model="username"><a @click="stepNext">测测你能承受多少Pa</a></div>
        <qa1 v-if="step === 1" @stepNext="stepNext" @setAnswer="setAnswer"></qa1>
    </div>
</template>

<script>
    import qa1 from '../../components/qa1/qa';

    export default {
        components: {
            qa1
        },
        data () {
            return {
                step:0,
                username:'',
                answers:[]
            }
        },
        created(){


        },
        methods:{
            stepNext(){
                this.step++;
            },
            setAnswer(data){
                this.answers.push(data);
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
    }
</style>
