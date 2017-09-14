   var now = 0;
    var int = self.setInterval("changeBG()", 30000);
    var array = ["./assets/img/software-dev1.jpg", "./assets/img/software-dev.jpg", "./assets/img/programming1.jpg", "./assets/img/lightbulb.jpg", "./assets/img/mainframes.png" ];

    function changeBG(){
        //array of backgrounds
        now = (now+1) % array.length ;
        $('#headerwrap').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("' + array[now] + '")');
    }