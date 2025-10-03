var Carpark = {
        //variables
    
    //level
    level:1,
    oldlevel:-1,
    totalLevels:5,
    levelLocked:1,
    tryAgain:0,
    active:0,

    //to hold the state of all squares
    squareStatus : new Array(),

	// car positions an orientation
    carPosL : new Array(), /*Left position of each car*/
    carPosT : new Array(), /*Top position of each car*/
    carPosO : new Array(), /*Orientation of each car H or V*/

    //number of cars
    numberOfCars:0,

    //truck position
    truckPosT : 3,
    truckPosL : 0,
    
    //number of moves
    numberOfMoves:0,
    minimumNumberOfMoves:0,

    //DOM elements
    gameContainer:undefined,
    carparkContainer:undefined,
    wall:undefined,
    cars:undefined,
    truck:undefined,
    carparkGameCongratulations:undefined,
    carparkBacktogameButton:undefined,

    init: function(){
        var self = this;

        //initiate squares
        for (var i=0; i<=8; i++ ){ 
            this.squareStatus[i] = new Array();
        }

        // Dom elements
        this.gameContainer = $('#carparkGame');
        this.carparkContainer = $('#carparkContainer'); // the carpark container
        this.wall = $('#wall'); // the walls
        this.cars = $('.carparkCar'); // all the cars exept for the truck
        this.carparkGameCongratulations = $('#carparkGameCongratulations');
        this.carparkBacktogameButton = $('#carparkBacktogameButton');
        
        this.carparkBacktogameButton.on('click', function(){
            Game.carparkGame.hide("slow");
            self.init();
        });

        this.gameContainer.scroll(function(){
            self.refreshCarpark();
        });
        this.initLevel(self.level);

    },

    initLevel: function(level){
       var self = this;
       if(this.tryAgain==0){
        this.levelLocked=level+1;
       }
        
        this.numberOfMoves = 0;
        this.carparkGameCongratulations.hide();
        //clear carpark
        $('.carparkCar').remove();
        $('#carparkTruck').remove();
        if(level<=this.totalLevels){
            switch(level){
                case 1:
                    this.numberOfCars = 12;
                    this.carPosL = [-99,1,1,4,3,6,7,7,2,6,3,2,5];
                    this.carPosT = [-99,1,4,3,5,3,4,2,1,1,2,4,5];
                    this.carPosO = ['NULL','V','V','V','H','V','V','V','H','H','H','H','H'];
                    this.truckPosL = 1;
                    this.minimumNumberOfMoves = 6;
                    break;
                case 2:
                    this.numberOfCars = 12;
                    this.carPosL = [-99,1,1,4,3,5,7,7,4,6,3,2,5];
                    this.carPosT = [-99,1,4,3,5,3,4,2,1,1,2,4,5];
                    this.carPosO = ['NULL','V','V','V','H','V','V','V','H','H','H','H','H'];
                    this.truckPosL = 1; 
                    this.minimumNumberOfMoves =9;
                    break;
                case 3:
                    this.numberOfCars = 12;
                    this.carPosL = [-99,1,3,4,3,5,7,7,6,4,6,1,5];
                    this.carPosT = [-99,1,1,3,5,3,4,2,1,2,2,4,5];
                    this.carPosO = ['NULL','V','V','V','H','V','V','V','H','H','V','H','H'];
                    this.truckPosL = 1; 
                    this.minimumNumberOfMoves = 11;
                    break;
                case 4:
                    this.numberOfCars = 12;		
                    this.carPosL = [-99,1,3,4,4,5,7,7,4,4,6,2,6];
                    this.carPosT = [-99,4,1,3,5,3,3,1,1,2,1,4,5];
                    this.carPosO = ['NULL','V','V','V','H','V','V','V','H','H','V','H','H'];
                    this.truckPosL = 1; 
                    this.minimumNumberOfMoves = 14;
                    break;
                case 5:
                    this.numberOfCars = 12;		
                    this.carPosL = [-99,1,3,4,5,7,5,1,6,7,3,5,2];
                    this.carPosT = [-99,1,1,1,1,1,2,3,3,3,4,4,5];
                    this.carPosO = ['NULL','H','V','V','H','V','V','V','V','V','H','V','H'];
                    this.truckPosL = 2;
                    this.minimumNumberOfMoves = 20;
                    break;
                }
            

                this.carparkContainer.append('<div id="carparkTruck"></div>');
                $('#carparkTruck').css({'top': (this.truckPosT*20-20) + '%','left':(this.truckPosL*14.28-14.28) + '%'});
                for (var i=1; i<=this.numberOfCars; i++ ){
                    this.carparkContainer.append('<div class="carparkCar '+this.carPosO[i]+'" id="carparkCar'+i+'"></div>');
                    $('#carparkCar'+i).css({'top': (this.carPosT[i]*20-20) + '%','left':(this.carPosL[i]*14.28-14.28) + '%'});
                }

                this.refreshCarpark();
            }else{
                this.carparkGameCongratulations.show();
                
                    $('#carparkGameCongratulationPar').html('You have done all available levels.<br/> If you want you can try the last level again, but you won\'t get an extra boost in drops per second.');
                    $('#carparkGameCongratulationPar').append('<br/><button class="button" onclick="Carpark.tryAgain=1;Carpark.initLevel('+5+');">Try again</button>&nbsp;&nbsp;<button class="button" onclick="Game.carparkGame.hide();">close</button>');
               
            }
    },

    refreshCarpark: function(){
        var self = this;
        /*Set all square statess to zero (empty)*/
        for (var i=1; i<=7; i++ ){
            for (var j=1; j<=5; j++ ){
                this.squareStatus[i][j] = 0;
            }
        }

        //set the cars
        for (var i=1; i<=this.numberOfCars; i++ ){
            this.squareStatus[this.carPosL[i]][this.carPosT[i]] = 1;
            if(this.carPosO[i]=='V'){
                this.squareStatus[this.carPosL[i]][this.carPosT[i]+1] = 1;
            }else{
                this.squareStatus[this.carPosL[i]+1][this.carPosT[i]] = 1;
            }
        }

        //set the truck
        this.squareStatus[this.truckPosL][this.truckPosT]=1;
        this.squareStatus[this.truckPosL+1][this.truckPosT]=1;
        this.squareStatus[this.truckPosL+2][this.truckPosT]=1;

        for (var i=1; i<=this.numberOfCars; i++ ){
            this.setContainment('carparkCar',i);
        }
        this.setTruckContainment();
    },

    setContainment: function(car, i){
        var self = this;
        
        ////Allow a little wiggle in present position
        var blockWidth = $('#carparkContainer').width()/7;
        var blockHeight = $('#carparkContainer').height()/5;
        var l1 = (this.carPosL[i]*blockWidth)-blockWidth; 
        var t1 = (this.carPosT[i] * blockHeight)-blockHeight; 
        var l2 = l1;
        var t2 = t1;
        
        if(this.carPosO[i]=='V'){
            l1 = l1 - (2/700*$('#carparkContainer').width());
            t1 = t1 - (6/500*$('#carparkContainer').height());
            l2 = l1 + (10/700*$('#carparkContainer').width());
            t2 = t1 + (20/500*$('#carparkContainer').height());
        }else{
            l1 = l1 - (10/700*$('#carparkContainer').width());
            t1 = t1 - (2/500*$('#carparkContainer').height());
            l2 = l1 + (24/700*$('#carparkContainer').width());
            t2 = t1 + (15/500*$('#carparkContainer').height());
        }

        //Account for an empty space in front or behind
	    var lengthOfTest = 1;
        if(this.carPosO[i]=='V'){
            while(this.squareStatus[this.carPosL[i]][this.carPosT[i]-lengthOfTest]==0){
                t1 = t1 -blockHeight;
                lengthOfTest++;
            }
            lengthOfTest=2;
            while(this.squareStatus[this.carPosL[i]][this.carPosT[i]+lengthOfTest]==0){
                t2 = t2 +blockHeight;
                lengthOfTest++;
            }
        }else{
            while(this.squareStatus[this.carPosL[i]-lengthOfTest][this.carPosT[i]]==0){
                l1 = l1 -blockWidth;
                lengthOfTest++;
            }
            lengthOfTest=2;
            while(this.squareStatus[this.carPosL[i]+lengthOfTest][this.carPosT[i]]==0){
                l2 = l2 +blockWidth;
                lengthOfTest++;
            }
        }
        
        //make them draggable
        var x = self.getOffset( document.getElementById('carparkContainer') ); 
        l1 = Math.floor(x.left+l1);
        l2 = Math.floor(x.left+l2);
        t1 = Math.floor(x.top+t1);
        t2 = Math.floor(x.top+t2);

        $('#' + car + i).draggable({ 
            containment: [l1,t1,l2,t2],
            stop: function(){
                var xPos = Math.round((($(this).offset().left - x.left)/blockWidth))+1;
                var yPos = Math.round((($(this).offset().top - x.top)/blockHeight))+1;
                self.carPosL[i] = xPos;
                self.carPosT[i] = yPos;
                $(this).animate({left:((xPos*blockWidth)-blockWidth)+'px',top:((yPos*blockHeight)-blockHeight)+'px'},100);
                self.numberOfMoves++;
                self.refreshCarpark();
            }
        });
    },

    getOffset:function( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    },
    
    setTruckContainment: function(){
        var self = this;
        
        //Allow a little wiggle in present position
        var blockWidth = $('#carparkContainer').width()/7;
        var blockHeight = $('#carparkContainer').height()/5;
        var l1 = (this.truckPosL*blockWidth)-blockWidth-10; 
        var t1 = (this.truckPosT * blockHeight)-blockHeight-2;
        var l2 = l1+20;
        var t2 = t1+10;
        
        //Account for an empty space in front or behind
        var lengthOfTest = 1;
            while(this.squareStatus[this.truckPosL-lengthOfTest][this.truckPosT]==0){
                l1 = l1 - blockWidth;
                lengthOfTest++;
            }
            lengthOfTest=3;
            while(this.squareStatus[this.truckPosL+lengthOfTest][this.truckPosT]==0){
                l2 = l2 + blockWidth;
                lengthOfTest++;
            }
                   
        //make draggable
         
        var x = self.getOffset( document.getElementById('carparkContainer') ); 
        l1 = Math.floor(x.left+l1);
        l2 = Math.floor(x.left+l2);
        t1 = Math.floor(x.top+t1);
        t2 = Math.floor(x.top+t2);
        
        $('#carparkTruck').draggable({
            containment: [l1,t1,l2,t2],
            stop: function(){
                
                var xPos = Math.round((($(this).offset().left - x.left)/blockWidth))+1;
                
                var yPos = Math.round((($(this).offset().top - x.top)/blockHeight))+1;
                
                self.truckPosL = xPos; 
                self.truckPosT = yPos;
                $(this).animate({left:((xPos*blockWidth)-blockWidth)+'px',top:((yPos*blockHeight)-blockHeight)+'px'},100);
                self.numberOfMoves++;
                if(self.truckPosL==5){
                    self.success();
                }
                self.refreshCarpark();
            }
        });
    },

    success:function(){
        var self = this;
        this.active=0;
        Game.levelUpTruckStartMinigameButton.prop('disabled', true);

        $('#carparkTruck').animate({'left':'700px'},1000,function(){$('#carparkTruck').remove()});
        if(this.tryAgain==0){
            this.oldlevel = this.level;
            this.level++;
            Game._recalculateAll();
            Game.levelUpTruckStartMinigameButton.prop('disabled', true);
        }
        if(this.level>this.totalLevels){
            $('#carparkGameCongratulationPar').html('Well done, you have got the truck in ' + self.numberOfMoves + ' moves.');
            this.carparkGameCongratulations.show();
            if(self.numberOfMoves > self.minimumNumberOfMoves){
                $('#carparkGameCongratulationPar').append('You have done all available levels. But it is possible to do it with fewer moves. Can you do that? <br/>');
                $('#carparkGameCongratulationPar').append('<button class="button" onclick="Carpark.tryAgain=1;Carpark.initLevel(Carpark.oldlevel);">Try again</button>&nbsp;&nbsp;<button class="button" onclick="Carpark.init();Carpark.tryAgain=0;Game.carparkGame.hide();">close</button>');
            }else{
                $('#carparkGameCongratulationPar').append('That is the minimum number of moves for this level. You have done all available levels.');
                $('#carparkGameCongratulationPar').append('<br/><button class="button" onclick="Carpark.tryAgain=1;Carpark.initLevel(Carpark.oldlevel);">Try again</button>&nbsp;&nbsp;<button class="button" onclick="Carpark.init();Carpark.tryAgain=0;Game.carparkGame.hide();">Back to game</button>');
            }
        }else{
            $('#carparkGameCongratulationPar').html('Well done, you have got the truck in ' + self.numberOfMoves + ' moves.');
            this.carparkGameCongratulations.show();

            
            if(self.numberOfMoves > self.minimumNumberOfMoves){
                $('#carparkGameCongratulationPar').append('If you go to the next level your trucks will be twice as efficcient. But it is possible to do it with fewer moves. Can you do that? <br/>');
                $('#carparkGameCongratulationPar').append('<button class="button" onclick="Carpark.tryAgain=1;Carpark.initLevel(Carpark.oldlevel);">Try again</button>&nbsp;&nbsp;<button class="button" onclick="Carpark.init();Carpark.tryAgain=0;Game.carparkGame.hide();">Back to game</button>');
            }else{
                $('#carparkGameCongratulationPar').append('That is the minimum number of moves for this level. If you go to the next level your trucks will be twice as efficcient.');
                $('#carparkGameCongratulationPar').append('<br/><button class="button" onclick="Carpark.tryAgain=1;Carpark.initLevel(Carpark.oldlevel);">Try again</button>&nbsp;&nbsp;<button class="button" onclick="Carpark.init();Carpark.tryAgain=0;Game.carparkGame.hide();">Back to game</button>');
            }
        }
    },

    _loadInit:function(){
        var self=this;
        window.setTimeout(function(){self.init();}, 1000);
    },

};

