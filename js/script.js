var snake; 
var pellet;
var mine;

var container;


//controls
var up = 38;
var down = 40;
var left = 37;
var right = 39;





var random_top;
var random_left;





var random_position = function(element){
    
    random_top = Math.round(
                            Math.random()* (container.offsetHeight - element.offsetHeight - 50)
    );
    
    random_left = Math.round(
                             Math.random()* (container.offsetWidth - element.offsetWidth - 50)
    );
    
    element.style.top = random_top + 'px';
    element.style.left = random_left + 'px';
    return random_top;
    return random_left;
    
}


var mines = new Array;

var check_mines = function(){
    mines = document.getElementsByClassName('mine');
    return mines;
}


var overlap = function(a,b){
    var al = a.offsetLeft;
    var ar = a.offsetLeft+a.offsetWidth;
    var bl = b.offsetLeft;
    var br = b.offsetLeft+b.offsetWidth;

    var at = a.offsetTop;
    var ab = a.offsetTop+a.offsetHeight;
    var bt = b.offsetTop;
    var bb = b.offsetTop+b.offsetHeight;

    if(bl>ar || br<al){console.log(false);return false;}//overlap not possible
    if(bt>ab || bb<at){console.log(false);return false;}//overlap not possible

    if(bl>al && bl<ar){console.log(true);return true;}
    if(br>al && br<ar){console.log(true);return true;}

    if(bt>at && bt<ab){console.log(true);return true;}
    if(bb>at && bb<ab){console.log(true);return true;}

    console.log(false);
    return false;
}



var speed_width = function(){
    return container.offsetWidth / snake.offsetWidth;
}

var speed_height = function(){
    return container.offsetHeight / snake.offsetHeight * 2;
}



document.addEventListener('DOMContentLoaded',function(event){
    
    snake = document.createElement('li');
    snake.setAttribute('id','snake');
    snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/MrCogan.png')";
    snake.style.backgroundSize = '90px 90px';
    snake.style.backgroundRepeat = 'no-repeat';
    snake.style.float = 'left';
    snake.style.width = '85px';
    snake.style.height = '85px';
    // snake.textContent = '';
    snake.style.position = 'relative';
    snake.style.left = 0;
    snake.style.top = -5;
    snake.style.fontSize = '1.5em';
    snake.style.paddingBottom = '10px';
    snake.style.borderRadius = '10%';
    
    

    
    container = document.createElement('ul');
    container.setAttribute('id','container');
    container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/campus.PNG')";
    container.style.backgroundSize = '100% 100%';
    container.style.backgroundRepeat = 'no-repeat';
    
    document.body.appendChild(container);
    container.appendChild(snake);
    
    
   for(var i=0; i < Math.round( (Math.random()*1000)*2); i++){
        mine = document.createElement('li');
        mine.setAttribute('id','mine_'+i);
        mine.setAttribute('class','mine');
        mine.style.fontSize = '1.5em';
        mine.style.width = '35px';
        mine.style.height = '35px';
        mine.textContent = '☻';
        mine.style.position = 'absolute';
        mine.style.left = 0;
        mine.style.top = 0;
        mine.style.left = Math.random()* container.offsetWidth - 30 + 'px';
        mine.style.top =  Math.random()* container.offsetHeight - 30 + 'px';
        mine.style.color = '#BFED18';
        mine.style.textAlign = 'center';
        mine.style.paddingBottom = '10px';
        // mine.style.fontSize = '1em';
        mine.style.borderRadius = '40%';

        
        container.appendChild(mine);
   };
    
    


    
    
});


document.addEventListener('keydown',function(event){
    
    //track keyboard code events
    //console.log(event.keyCode);
    
    if(up){
      check_mines();
      for(var i=0; i< mines.length; i++){
                  if(overlap(snake,mines[i]) === true){
                      mines[i].remove();
                      check_mines();
                    //   snake.textContent += '☺';
                    
                        // mine = document.createElement('li');
                        // mine.setAttribute('id','mine_'+i);
                        // mine.setAttribute('class','mine');
                        // mine.style.width = '35px';
                        // mine.style.height = '35px';
                        // mine.textContent = '☻';
                        // mine.style.fontSize = '1.5em';
                        // mine.style.position = 'absolute';
                        // mine.style.left = 0;
                        // mine.style.top = 0;
                        // mine.style.left = Math.random()* container.offsetWidth - 30 + 'px';
                        // mine.style.top =  Math.random()* container.offsetHeight - 30 + 'px';
                        // mine.style.color = '#BFED18';
                        // mine.style.textAlign = 'center';
                        // mine.style.paddingBottom = '10px';
                        // // mine.style.fontSize = '1em';
                        // mine.style.borderRadius = '40%';
                
                        
                        // container.appendChild(mine);
                   
                  }
       
      }
    
      if(mines.length === 0){
          document.body.textContent = 'DONE!';
          document.body.setAttribute('id','done')
          document.body.style.backgroundColor = '#BFED18';
          document.body.style.color = '#BFED18';
          document.body.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/campus.PNG')";
      }
        
    }
    
    

    
    
    if(event.keyCode === up){
      
        //console.log('up');
        snake.style.top = snake.offsetTop - speed_height() + 'px';
        if(snake.offsetTop < 0){
            snake.style.top = container.offsetHeight - snake.offsetHeight + 'px';
        }
    };
    
    
    if(event.keyCode === down){
      
        //console.log('down');
        snake.style.top =  snake.offsetTop + speed_height() + 'px';
        //console.log(snake.offsetTop);
        
        if(snake.offsetTop > container.offsetHeight - snake.offsetHeight){
            //console.log('outside container');
            snake.style.top = '0px';
        }
        
        
    };
    
    if(event.keyCode === left){
       
        //console.log('left');
        
        snake.style.left = snake.offsetLeft - speed_width() + 'px';
        //console.log(snake.offsetLeft);
        
        if(snake.offsetLeft < 0){
            snake.style.left = container.offsetWidth - snake.offsetWidth + 'px';
        }
        
    };    

    if(event.keyCode === right){
       
        //console.log('right');
        snake.style.left = snake.offsetLeft + speed_width() + 'px';
        //console.log(snake.offsetLeft);
        
        if( snake.offsetLeft > container.offsetWidth - snake.offsetWidth){
            //console.log('outside container');
            snake.style.left = '0px';
        }
        
    };    
    
    
})