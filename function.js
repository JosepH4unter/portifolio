    $(function(){
        $('.mobile').click(function(){//eu tirei a especificacao de ul para ir para o componente como um todo
            var el = $(this).parent().find('ul');
            if(el.is(':visible') == false){
            el.fadeIn();
            }else{
                el.fadeOut();
            }
        })
    })
