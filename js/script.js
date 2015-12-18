var snake; 
var pellet;
var mine;

var container;

var up = 38;
var down = 40;
var left = 37;
var right = 39;

var Cogan = 96;
var Scott = 97;
var Davis = 98;
var Darrian = 99;
var Kevin = 100;
var Haley = 101;
var Colton = 102;
var Gus = 103;
var Gabe = 104;
var Climate = 105;
var Montgomery = 49;
var Roger = 50;
var Lindsey = 51;
var Jesse = 52;
var Kyle = 53;
var Cobi = 54;

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
    
};


var mines = new Array;

var check_mines = function(){
    mines = document.getElementsByClassName('mine');
    return mines;
};


var overlap = function(a,b){
    var al = a.offsetLeft;
    var ar = a.offsetLeft+a.offsetWidth;
    var bl = b.offsetLeft;
    var br = b.offsetLeft+b.offsetWidth;

    var at = a.offsetTop;
    var ab = a.offsetTop+a.offsetHeight;
    var bt = b.offsetTop;
    var bb = b.offsetTop+b.offsetHeight;

    if(bl>ar || br<al){console.log(false);return false;}
    if(bt>ab || bb<at){console.log(false);return false;}

    if(bl>al && bl<ar){console.log(true);return true;}
    if(br>al && br<ar){console.log(true);return true;}

    if(bt>at && bt<ab){console.log(true);return true;}
    if(bb>at && bb<ab){console.log(true);return true;}

    console.log(false);
    return false;
};


var speed_width = function(){
    return container.offsetWidth / snake.offsetWidth;
};

var speed_height = function(){
    return container.offsetHeight / snake.offsetHeight * 2;
};


document.addEventListener('DOMContentLoaded',function(event){
    
    snake = document.createElement('li');
    snake.setAttribute('id','snake');
    snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/MrCogan.png')";
    snake.style.backgroundSize = '90px 90px';
    snake.style.backgroundRepeat = 'no-repeat';
    snake.style.float = 'left';
    snake.style.width = '85px';
    snake.style.height = '85px';
    
    snake.style.position = 'relative';
    snake.style.left = 0;
    snake.style.top = -5;
    snake.style.fontSize = '1.5em';
    snake.style.paddingBottom = '10px';
    snake.style.borderRadius = '10%';
    
    
    container = document.createElement('ul');
    container.setAttribute('id','container');
    container.style.backgroundColor = '#EFBF1B';
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
        mine.style.width = '70px';
        mine.style.height = '55px';
        mine.textContent = '';
        mine.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/food_better.png')";
        mine.style.backgroundSize = '70px 70px';
        mine.style.backgroundRepeat = 'no-repeat';
        mine.style.position = 'absolute';
        mine.style.left = 0;
        mine.style.top = 0;
        mine.style.left = Math.random()* container.offsetWidth - 30 + 'px';
        mine.style.top =  Math.random()* container.offsetHeight - 30 + 'px';
        mine.style.color = '#EFBF1B';
        mine.style.textAlign = 'center';
        mine.style.paddingBottom = '10px';
        mine.style.borderRadius = '40%';

        container.appendChild(mine);
   };

    
});


document.addEventListener('keydown',function(event){

    if(up){
      check_mines();
      for(var i=0; i< mines.length; i++){
                  if(overlap(snake,mines[i]) === true){
                      mines[i].remove();
                      check_mines();
                  };
      };
    
      if(mines.length === 0){
          document.body.textContent = 'DONE!';
          document.body.setAttribute('id','done')
          document.body.style.backgroundColor = '#33A82F';
          document.body.style.color = '#EFBF1B';
          document.body.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/wallpaper_best.jpg')";
          document.body.style.backgroundSize = '100% 100%';
          document.body.style.backgroundRepeat = 'no-repeat';
      };
    };
    
    
    if(event.keyCode === up){
      
        //console.log('up');
        snake.style.top = snake.offsetTop - speed_height() + 'px';
        if(snake.offsetTop < 0){
            snake.style.top = container.offsetHeight - snake.offsetHeight + 'px';
        };
    };
    
    
    if(event.keyCode === down){
      
        //console.log('down');
        snake.style.top =  snake.offsetTop + speed_height() + 'px';
        //console.log(snake.offsetTop);
        
        if(snake.offsetTop > container.offsetHeight - snake.offsetHeight){
            //console.log('outside container');
            snake.style.top = '0px';
        };
    };
    
    
    if(event.keyCode === left){
       
        //console.log('left');
        
        snake.style.left = snake.offsetLeft - speed_width() + 'px';
        //console.log(snake.offsetLeft);
        
        if(snake.offsetLeft < 0){
            snake.style.left = container.offsetWidth - snake.offsetWidth + 'px';
        };
    };    


    if(event.keyCode === right){
       
        //console.log('right');
        snake.style.left = snake.offsetLeft + speed_width() + 'px';
        //console.log(snake.offsetLeft);
        
        if( snake.offsetLeft > container.offsetWidth - snake.offsetWidth){
            //console.log('outside container');
            snake.style.left = '0px';
        };
    }; 
    
    
    
    if(event.keyCode === Cogan){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/MrCogan.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/campus.PNG')";
    };
    
    if(event.keyCode === Scott){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/meme_lord_1.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/scott_wallpaper.jpg')";
    };
    
    if(event.keyCode === Davis){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Davis.PNG')";
        container.style.backgroundImage = "url('http://wallpapercave.com/wp/yDDxGyn.jpg')";
    };
    
    if(event.keyCode === Darrian){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Darrian.PNG')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Darrian_wallpaper.PNG')";
    };
    
    if(event.keyCode === Kevin){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Kevin_1.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Kevin_1_wallpaper.png')";
    };
    
    if(event.keyCode === Haley){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Haley.PNG')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Haley_wallpaper.PNG')";
    };
    
    if(event.keyCode === Colton){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/colton.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/colton_wallpaper.png')";
    };
    
    if(event.keyCode === Gus){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/gus.PNG')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/gus_wallpaper.PNG')";
    };
    
    if(event.keyCode === Gabe){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/gabe.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/gabe_wallpaper.jpg')";
    };
    
    if(event.keyCode === Climate){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/climate.PNG')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/climate_wallpaper.PNG')";
    };
    
    if(event.keyCode === Montgomery){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Montgomery_best.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Montgomery_wallpaper_best.png')";
    };
    
    if(event.keyCode === Roger){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Roger.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/Roger_wallpaper.png')";
    };
    
    if(event.keyCode === Lindsey){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/lindsey.PNG')";
        container.style.backgroundImage = "";
        container.style.backgroundColor = 'hotpink';
    };
    
    if(event.keyCode === Jesse){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/jesse.PNG')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/jesse_wallpaper.PNG')";
    };
    
    if(event.keyCode === Kyle){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/kyle.png')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/kyle_wallpaper.png')";
    };
    
    if(event.keyCode === Cobi){
        snake.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/cobi.PNG')";
        container.style.backgroundImage = "url('https://snake-geekwisemontgomerylara.c9users.io/images/cobi_wallpaper.PNG')";
    };
});