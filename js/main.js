var counter = 0;

function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function animate(duck){
    
    var anim = setInterval(function(){
    
        var left = parseInt($(duck).css('left'));
        
        if(left >= 260 || $(duck).attr('data-left') === "0"){
            clearInterval(anim);
            $(duck).destroy();
        }else{
            left+=20;
            $(duck).css('left', left+'px');
        }   
    }, 250);
}

function createDucks(items){
    
        
        $('#top-bg').append("<div id='duck"+counter+"' data-left='1' class='duck blue-duck' style='top:"+getRandom(1, 115)+"px;'></div>");
        
        $('#duck'+counter).sprite({fps: 8, no_of_frames: 7}).click(function(){
        
            $(this).attr('data-left', '0');
            var id = $(this).attr('id');

            $(this).addClass('blue-down');
            $(this).destroy();
            //
            $(this).sprite({
                fps: 8,
                no_of_frames: 7,
                on_frame: {
                    5: function(obj) {
                        obj.spStop();
                    }
                }
            
            });

            var interval = setInterval(function(){

                var temp = parseInt($('#'+id).css('top'));
                temp+=20;

                $('#'+id).css('top', temp+'px');
                if(temp >= 160) clearInterval(interval);

            }, 150);

        });
        
        animate("#duck"+counter);
        counter++;
        
    }
    

$(document).ready(function() {
    
    var play = setInterval(function(){
        createDucks();
    }, getRandom(400, 900) );
        
});







