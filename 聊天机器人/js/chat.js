$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
    //为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click',function(){
        var text = $('#ipt').val().trim()
        if(text.length<=0){
            return $('#ipt').val('')
        }
        //如果用户输入了聊天内容，则将聊天内容追加到页面上显示
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /><span>'+text+'</span></li >')
        // 方法里面不能加空格,尤其是图片
        $('#ipt').val('')
        //重置滚动条的位置
        resetui()
        //发起请求，获取聊天内容
        getMsg(text)
    })
    //获取聊天机器人发送回来的消息
    function getMsg(text){
        $.ajax({
            method:'GET',
            url: 'http://ajax.frontend.itheima.net:3006/api/robot',
            data:{
                spoken:text
            },
            success:function(res){
                console.log(res)
            }
        })
    }
})