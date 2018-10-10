
import Vue from 'vue'
import App from './app.vue'
import wxApi from '../../assets/wxapi';
import '../../font/zt.css';
import '../../assets/animate.css';
wxApi.shareToPYQ.opts = wxApi.sendToPY.opts = {
    img_url:'',
    link:location.href,
    title:'测测你能承受多少Pa',
    desc:'分享文案'
}


const app = new Vue({
    el: '#app',
    render: h => h(App)
})


