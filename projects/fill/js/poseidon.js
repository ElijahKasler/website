var Poseidon = {

    //variables
    poseidonStarted:0,

    //Timer
    poseidonTimer:undefined,
    pInterval:1000,

    pFoodBarnCostMultiplier:1.25,
    pWoodBarnCostMultiplier:1.25,
    pStoneBarnCostWoodMultiplier: 1.25,
    pStoneBarnCostStoneMultiplier: 1.25,

    pFoodTotal:0,
    pFoodMaxCap:200,
    pLeatherCounter:0,
    pLeatherTotal:0,
    pFoodBarnCost:100,
    pWoodTotal:0,
    pWoodMaxCap:200,
    pWoodBarnCost:100,
    pStoneTotal:0,
    pStoneMaxCap:200,
    pStoneBarnCostWood:20,
    pStoneBarnCostStone:100,
    pTentCostLeather:2,
    pTentCostWood:2,
    pWorkerMaxCap:0,
    pTentTotal:0,
    pWoodenhouseCostLeather:1,
    pWoodenhouseCostWood:20,
    pBuildersIdle:0,
    pWoodenhouseBuildersReq:2,
    pWoodenhouseTotal:0,
    pBuildersWorking:0,
    pStonehouseCostLeather:1,
    pStonehouseCostWood:10,
    pStonehouseCostStone:30,
    pStonehouseBuildersReq:5,
    pStonehouseTotal:0,
    pWorkerCostFood:20,
    pWorkerTotal:0,
    pWorkerIdle:0,
    pFarmerTotal:0,
    pWoodcutterTotal:0,
    pStonecutterTotal:0,
    pTempleCostWood:50,
    pTempleCostStone:100,
    pTempleBuildersReq:20,
    pTempleTotal:0,

    pFarmerProduce:1.2,
    pWoodcutterProduce:0.5,
    pStonecutterProduce:0.2,

    pFoodShortage:0,
    pWorkerDie:0,

    //DOM Variables
    poseidonStart: undefined,
    poseidonStartStartButton:undefined,
    poseidonStartCloseButton:undefined,
    poseidonEnd:undefined,
    poseidonEndStartButton:undefined,
    poseidonEndCloseButton:undefined,
    poseidonMinigame: undefined,
    poseidonBacktogameButton: undefined,
    pFoodImage: undefined,
    pFoodBarnImage: undefined,
    pWoodImage: undefined,
    pWoodBarnImage: undefined,
    pStoneImage: undefined,
    pStoneBarnImage: undefined,
    pTentImage: undefined,
    pWoodenhouseImage: undefined,
    pWoodenhouseTD: undefined,
    pStonehouseImage: undefined,
    pStonehouseTD: undefined,
    pWorkerImage: undefined,
    pFarmerMinButton: undefined,
    pFarmerPlusButton: undefined,
    pWoodcutterMinButton: undefined,
    pWoodcutterPlusButton: undefined,
    pStonecutterMinButton: undefined,
    pStonecutterPlusButton: undefined,
    pBuilderMinButton: undefined,
    pBuilderPlusButton: undefined,
    pTempleImage: undefined,
    pTempleTimeTD: undefined,
    pCongratulationsDiv: undefined,
    
        //Dom variables for showing on screen
        pFoodTotalStat: undefined,
        pLeatherTotalStat: undefined,
        pFoodBarnCapStat: undefined,
        pFoodBarnCostStat: undefined,
        pWoodTotalStat: undefined,
        pWoodBarnCostStat: undefined,
        pWoodBarnCapStat: undefined,
        pStoneTotalStat: undefined,
        pStoneBarnCostWoodStat: undefined,
        pStoneBarnCostStoneStat: undefined,
        pStoneBarnCapStat: undefined,
        pTentTotalStat: undefined,
        pWorkerMaxCapStat: undefined,
        pWoodenhouseStat: undefined,
        pBuildersIdleStat: undefined,
        pBuildersWorkingStat: undefined,
        pStonehouseStat: undefined,
        pWorkerStat: undefined,
        pWorkerIdleStat: undefined,
        pFarmerStat: undefined,
        pWoodcutterStat: undefined,
        pStonecutterStat: undefined,
        pBuildersIdleStat: undefined,
        pBuilderStat: undefined,
        pTempleStat: undefined,
        pTempleCostWoodStat: undefined,
        pTempleCostStoneStat:undefined,
        pWorkerDieStat: undefined,

    init: function() {
        var self = this;

        // -- Cache DOM elements
        this.poseidonStart = $('#poseidonStart'); // shown first click on poseidonimage
        this.poseidonStartStartButton = $('#poseidonStartStartButton'); //start building temples button
        this.poseidonStartCloseButton = $('#poseidonStartCloseButton'); // close notice poseidon start
        this.poseidonEnd = $('#poseidonEnd'); // shown width click after minigame completed
        this.poseidonEndStartButton = $('#poseidonEndStartButton'); //go to temples button
        this.poseidonEndCloseButton = $('#poseidonEndCloseButton'); // close notice poseidon
        this.poseidonMinigame = $('#poseidonMinigame'); // the dark overlay that covers entire screen
        this.poseidonBacktogameButton = $('#poseidonBacktogameButton'); // close poseidon minigame button
        this.pFoodImage = $('#pFoodImage'); // foodimage to click on
        this.pFoodBarnImage = $('#pFoodBarnImage') ; // barnimage width food to click on
        this.pWoodImage = $('#pWoodImage'); //woodimage to click on
        this.pWoodBarnImage = $('#pWoodBarnImage'); //woodbarn to click on
        this.pStoneImage = $('#pStoneImage'); //stone image to click on
        this.pStoneBarnImage = $('#pStoneBarnImage'); // stonebarn image to click on
        this.pTentImage = $('#pTentImage'); // tentimage to click on
        this.pWoodenhouseImage = $('#pWoodenhouseImage'); // wooden house image to click on
        this.pWoodenhouseTD = $('#pWoodenhouseTD'); //table cell to add progressbar fro building wooden house
        this.pStonehouseImage = $('#pStonehouseImage'); // stone house image tot click on
        this.pStonehouseTD = $('#pStonehouseTD'); //table cell to add progressbar fro building stone house 
        this.pWorkerImage = $('#pWorkerImage'); // worker image to click on
        this.pFarmerMinButton = $('#pFarmerMinButton'); // click to dismiss one farmer
        this.pFarmerPlusButton = $('#pFarmerPlusButton'); // click to employ one idle worker as farmer
        this.pWoodcutterMinButton = $('#pWoodcutterMinButton'); // click to dismiss one woodcutter
        this.pWoodcutterPlusButton = $('#pWoodcutterPlusButton'); // click to employ one idle worker as woodcutter
        this.pStonecutterMinButton = $('#pStonecutterMinButton'); // click to dismiss one stonecutter
        this.pStonecutterPlusButton = $('#pStonecutterPlusButton'); // click to employ one idle worker as stonecutter
        this.pBuilderMinButton = $('#pBuilderMinButton'); //click to dismiss one builder
        this.pBuilderPlusButton = $('#pBuilderPlusButton'); // click to employ one idle worker as builder (builder will be idle untill effectively building)
        this.pTempleImage = $('#pTempleImage'); // click to build a temple
        this.pTempleTimeTD = $('#pTempleTimeTD'); //table cell to add progressbar for building temple
        this.pCongratulationsDiv = $('#pCongratulationsDiv'); //show this after completion of building 1000 temples

            //Dom variables for showing on screen
            this.pFoodTotalStat = $('#pFoodTotalStat'); // the number of food
            this.pLeatherTotalStat = $('#pLeatherTotalStat'); // the number of leather
            this.pFoodBarnCapStat = $('#pFoodBarnCapStat'); //the number of capacity for food of the food barn
            this.pFoodBarnCostStat = $('#pFoodBarnCostStat'); // the cost of the next foorbarn upgrade
            this.pWoodTotalStat = $('#pWoodTotalStat'); // the number of wood
            this.pWoodBarnCostStat = $('#pWoodBarnCostStat'); // the cost of the next woodbarn upgrade
            this.pWoodBarnCapStat = $('#pWoodBarnCapStat'); // the number f capacity foor wood of the woodbarn
            this.pStoneTotalStat = $('#pStoneTotalStat'); // the number of stones
            this.pStoneBarnCostWoodStat = $('#pStoneBarnCostWoodStat'); //the woodcost of next stonebarn
            this.pStoneBarnCostStoneStat = $('#pStoneBarnCostStoneStat'); // the stonecost of next stonebarn
            this.pStoneBarnCapStat = $('#pStoneBarnCapStat'); // the number of capacity for stone of the stonebarn
            this.pTentTotalStat = $('#pTentTotalStat'); // the number of tents
            this.pWorkerMaxCapStat = $('#pWorkerMaxCapStat'); // the maximum number of workers that can be housed
            this.pWoodenhouseStat = $('#pWoodenhouseStat'); // the number of wooden houses
            this.pBuildersIdleStat = $('#pBuildersIdleStat'); // the number of workers that are not working
            this.pBuildersWorkingStat = $('#pBuildersWorkingStat'); // the number of workers that are working
            this.pStonehouseStat = $('#pStonehouseStat'); //the number of stone houses
            this.pWorkerStat = $('#pWorkerStat'); // the number of workers
            this.pWorkerIdleStat = $('#pWorkerIdleStat'); // the number of idle workers
            this.pFarmerStat = $('#pFarmerStat'); //the number of farmers
            this.pWoodcutterStat = $('#pWoodcutterStat'); // the number of woodcutters
            this.pStonecutterStat = $('#pStonecutterStat'); // the number of stonecutters
            this.pBuildersIdleStat = $('#pBuildersIdleStat'); // the number of idle builders
            this.pBuilderStat = $('#pBuilderStat'); // the total number of builders
            this.pTempleStat = $('#pTempleStat'); // the number of temples
            this.pTempleCostWoodStat = $('#pTempleCostWoodStat'); // the cost of wood to build a temple
            this.pTempleCostStoneStat = $('#pTempleCostStoneStat'); // the cost of stone to build a temple
            this.pWorkerDieStat = $('#pWorkerDieStat'); // the number of workers that died

        // initialise numbers on screen
        this.pFoodBarnCapStat.text(this.pFoodMaxCap);
        this.pFoodBarnCostStat.text(this.pFoodBarnCost);
        this.pWoodBarnCapStat.text(this.pWoodMaxCap);
        this.pWoodBarnCostStat.text(this.pWoodBarnCost);
        this.pStoneBarnCostWoodStat.text(this.pStoneBarnCostWood);
        this.pStoneBarnCostStoneStat.text(this.pStoneBarnCostStone);
        this.pStoneBarnCapStat.text(this.pStoneMaxCap);
        this.pTempleCostWoodStat.text(this.pTempleCostWood);
        this.pTempleCostStoneStat.text(this.pTempleCostStone);

        // click functions
        this.poseidonStartStartButton.on('click', function(){
            self.poseidonStart.toggle("slow");
            self.poseidonMinigame.show("slow");
            self.poseidonStarted = 1;
            self.poseidonTimer = window.setInterval(function() {  // start poseidonTimer
                self._poseidonTick();
            }, self.pInterval);
        });

        this.poseidonStartCloseButton.on('click', function(){
            self.poseidonStart.toggle("slow");
        });

        this.poseidonEndStartButton.on('click', function(){
            self.poseidonEnd.toggle("slow");
            self.poseidonMinigame.show("slow");
        });

        this.poseidonEndCloseButton.on('click', function(){
            self.poseidonEnd.toggle("slow");
        });

        this.poseidonBacktogameButton.on('click', function(){
            self.poseidonMinigame.hide("slow");
        });

        this.pFoodImage.on('click',function(){
            self._pFoodClick();
        });

        this.pFoodBarnImage.on('click', function(){
            self._pFoodBarnClick();
        });

        this.pWoodImage.on('click', function(){
            self._pWoodClick();
        });

        this.pWoodBarnImage.on('click', function(){
            self._pWoodBarnClick();
        });

        this.pStoneImage.on('click', function(){
            self._pStoneClick();
        });

        this.pStoneBarnImage.on('click', function(){
            self._pStoneBarnClick();
        });

        this.pTentImage.on('click', function(){
            self._pTentClick();
        });
        
        this.pWoodenhouseImage.on('click', function(){
            self._pWoodenhouseClick();
        });

        this.pStonehouseImage.on('click', function(){
            self._pStonehouseClick();
        });

        this.pWorkerImage.on('click', function(){
            self._pWorkerClick();
        });

        this.pFarmerMinButton.on('click', function(){
            if(self.pFarmerTotal>=1){
                self.pFarmerTotal--;
                self.pFarmerStat.text(self.pFarmerTotal);
                self.pWorkerIdle++;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
            }
        });
        
        this.pFarmerPlusButton.on('click', function(){
            if(self.pWorkerIdle>=1){
                self.pWorkerIdle--;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
                self.pFarmerTotal++;
                self.pFarmerStat.text(self.pFarmerTotal);
            }
        });
        
        this.pWoodcutterMinButton.on('click', function(){
            if(self.pWoodcutterTotal>=1){
                self.pWoodcutterTotal--;
                self.pWoodcutterStat.text(self.pWoodcutterTotal);
                self.pWorkerIdle++;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
            }
        });
        
        this.pWoodcutterPlusButton.on('click', function(){
            if(self.pWorkerIdle>=1){
                self.pWorkerIdle--;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
                self.pWoodcutterTotal++;
                self.pWoodcutterStat.text(self.pWoodcutterTotal);
            }
        });
        
        this.pStonecutterMinButton.on('click', function(){
            if(self.pStonecutterTotal>=1){
                self.pStonecutterTotal--;
                self.pStonecutterStat.text(self.pStonecutterTotal);
                self.pWorkerIdle++;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
            }
        });
        
        this.pStonecutterPlusButton.on('click', function(){
            if(self.pWorkerIdle>=1){
                self.pWorkerIdle--;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
                self.pStonecutterTotal++;
                self.pStonecutterStat.text(self.pStonecutterTotal);
            }
        });
        
        this.pBuilderMinButton.on('click', function(){
            if(self.pBuildersIdle>=1){
                self.pBuildersIdle--;
                self.pBuildersIdleStat.text(self.pBuildersIdle);
                self.pBuilderStat.text(self.pBuildersIdle+self.pBuildersWorking);
                self.pWorkerIdle++;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
            }
        });
        
        this.pBuilderPlusButton.on('click', function(){
            if(self.pWorkerIdle>=1){
                self.pWorkerIdle--;
                self.pWorkerIdleStat.text(self.pWorkerIdle);
                self.pBuildersIdle++;
                self.pBuildersIdleStat.text(self.pBuildersIdle);
                self.pBuilderStat.text(self.pBuildersIdle+self.pBuildersWorking);
            }
        });

        this.pTempleImage.on('click', function(){
            self._pTempleClick();
        });
    },

    _pFoodClick: function(){
        var self = this;
        if(self.pFoodTotal<this.pFoodMaxCap){
            self.pFoodTotal++;
            self.pFoodTotalStat.text(self.pFoodTotal.toFixed(0));
            if (self.pLeatherTotal<10){
                self.pLeatherCounter++;
                if (self.pLeatherCounter==20){
                    self.pLeatherTotal++;
                    self.pLeatherTotalStat.text(self.pLeatherTotal);
                    self.pLeatherCounter=0;
                }
            }         
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pFoodClick();
            });
           
            var position = document.getElementById("pFoodImage").getBoundingClientRect();
            var posX = position.left+ self.pFoodImage.width();
            var posY = position.top+30;
            textDiv.css({'display':'block','top':posY, 'left':posX});
            textDiv.addClass("textanimationPoseidon");
            textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                    textDiv.remove();
                });
        }
    },

    _pFoodBarnClick: function(){
        var self = this;
        if (self.pFoodBarnCost!="Max. cap."){
            if(self.pWoodTotal>=self.pFoodBarnCost){
                self.pWoodTotal = self.pWoodTotal - self.pFoodBarnCost;
                self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
                self.pFoodBarnCost = (self.pFoodBarnCost * self.pFoodBarnCostMultiplier).toFixed(0);
                if ((self.pFoodBarnCost>self.pWoodMaxCap)&&(self.pWoodBarnCost>self.pWoodMaxCap)){self.pFoodBarnCost="Max. cap.";}
                self.pFoodMaxCap = self.pFoodMaxCap +100;
                
                self.pFoodBarnCapStat.text(self.pFoodMaxCap);
                self.pFoodBarnCostStat.text(self.pFoodBarnCost);
                
                var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
                self.poseidonMinigame.append(textDiv);
                textDiv.html('+ 100 cap');
                textDiv.css({'cursor':'pointer'});
                textDiv.click(function(){
                    self._pFoodBarnClick();
                });
                var position = document.getElementById("pFoodBarnImage").getBoundingClientRect();
                var posX = position.left+ self.pFoodBarnImage.width()/2;
                var posY = position.top+30;
                textDiv.css({'display':'block','top':posY, 'left':posX});
                textDiv.addClass("textanimationPoseidon");
                textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                        textDiv.remove();
                    });
            }
        }
    },

    _pWoodClick: function(){
        var self = this;
        if(self.pWoodTotal<this.pWoodMaxCap){
            self.pWoodTotal++;
            self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pWoodClick();
            });
            var position = document.getElementById("pWoodImage").getBoundingClientRect();
            var posX = position.left+ self.pWoodImage.width();
            var posY = position.top+30;
            textDiv.css({'display':'block','top':posY, 'left':posX});
            textDiv.addClass("textanimationPoseidon");
            textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                    textDiv.remove();
                });
        }
    },

    _pWoodBarnClick:function(){
        var self = this;
        if(self.pWoodBarnCost!="Max. cap."){
            if(self.pWoodTotal>=self.pWoodBarnCost){
                self.pWoodTotal = self.pWoodTotal - self.pWoodBarnCost;
                self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
                self.pWoodBarnCost = (self.pWoodBarnCost * self.pWoodBarnCostMultiplier).toFixed(0);
                self.pWoodBarnCostStat.text(self.pWoodBarnCost);
                if (self.pWoodBarnCost>self.pWoodMaxCap){self.pWoodBarnCost="Max. cap.";}
                self.pWoodMaxCap = self.pWoodMaxCap +100;
                
                self.pWoodBarnCapStat.text(self.pWoodMaxCap);
                self.pWoodBarnCostStat.text(self.pWoodBarnCost);
                
                var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
                self.poseidonMinigame.append(textDiv);
                textDiv.html('+ 100 cap');
                textDiv.css({'cursor':'pointer'});
                textDiv.click(function(){
                    self._pWoodBarnClick();
                });
                var position = document.getElementById("pWoodBarnImage").getBoundingClientRect();
                var posX = position.left+ self.pWoodBarnImage.width()/2;
                var posY = position.top+30;
                textDiv.css({'display':'block','top':posY, 'left':posX});
                textDiv.addClass("textanimationPoseidon");
                textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                        textDiv.remove();
                    });
            }
        }
    },

    _pStoneClick:function(){
        var self = this;
        if(self.pStoneTotal<this.pStoneMaxCap){
            self.pStoneTotal++;
            self.pStoneTotalStat.text(self.pStoneTotal.toFixed(0));

            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pStoneClick();
            });
            var position = document.getElementById("pStoneImage").getBoundingClientRect();
            var posX = position.left+ self.pStoneImage.width();
            var posY = position.top+30;
            textDiv.css({'display':'block','top':posY, 'left':posX});
            textDiv.addClass("textanimationPoseidon");
            textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                    textDiv.remove();
                });
        }
    },

    _pStoneBarnClick:function(){
        var self = this;
        if ((self.pStoneBarnCostWood!="Max. cap")&&(self.pStoneBarnCostStone!="Max. cap")){
            if((self.pWoodTotal>=self.pStoneBarnCostWood)&&(self.pStoneTotal>=self.pStoneBarnCostStone)){
                self.pWoodTotal = self.pWoodTotal - self.pStoneBarnCostWood;
                self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
                self.pStoneTotal = self.pStoneTotal - self.pStoneBarnCostStone;
                self.pStoneTotalStat.text(self.pStoneTotal.toFixed(0));

                self.pStoneBarnCostWood = (self.pStoneBarnCostWood * self.pStoneBarnCostWoodMultiplier).toFixed(0);
                self.pStoneBarnCostStone = (self.pStoneBarnCostStone * self.pStoneBarnCostStoneMultiplier).toFixed(0);

                self.pStoneBarnCostWoodStat.text(self.pStoneBarnCostWood);
                self.pStoneBarnCostStoneStat.text(self.pStoneBarnCostStone);
                
                self.pStoneMaxCap = self.pStoneMaxCap +100;
                self.pStoneBarnCapStat.text(self.pStoneMaxCap);

                if(((self.pStoneBarnCostWood>self.pWoodMaxCap)&&(self.pWoodBarnCost>self.pWoodMaxCap))||(self.pStoneBarnCostStone>self.pStoneMaxCap)){
                    self.pStoneBarnCostWood="Max. cap";
                    self.pStoneBarnCostStone="Max. cap";
                }
                
                var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
                self.poseidonMinigame.append(textDiv);
                textDiv.html('+ 100 cap');
                textDiv.css({'cursor':'pointer'});
                textDiv.click(function(){
                    self._pStoneBarnClick();
                });
                var position = document.getElementById("pStoneBarnImage").getBoundingClientRect();
                var posX = position.left+ self.pStoneBarnImage.width()/2;
                var posY = position.top+30;
                textDiv.css({'display':'block','top':posY, 'left':posX});
                textDiv.addClass("textanimationPoseidon");
                textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                        textDiv.remove();
                    });
            }
        }
    },

    _pTentClick:function(){
        var self = this;
        if((self.pLeatherTotal>=self.pTentCostLeather)&&(self.pWoodTotal>=self.pTentCostWood)){
            self.pLeatherTotal = self.pLeatherTotal - self.pTentCostLeather;
            self.pLeatherTotalStat.text(self.pLeatherTotal);
            self.pWoodTotal = self.pWoodTotal - self.pTentCostWood;
            self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));

            self.pTentTotal++;
            self.pWorkerMaxCap++;
            
            self.pTentTotalStat.text(self.pTentTotal);
            self.pWorkerMaxCapStat.text(self.pWorkerMaxCap);
            
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1 tent');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pTentClick();
            });
            var position = document.getElementById("pTentImage").getBoundingClientRect();
            var posX = position.left+ self.pTentImage.width()/2;
            var posY = position.top+30;
            textDiv.css({'display':'block','top':posY, 'left':posX});
            textDiv.addClass("textanimationPoseidon");
            textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                    textDiv.remove();
                });
        }
    },

    _pWoodenhouseClick: function(){
        var self = this;
        if((self.pLeatherTotal>=self.pWoodenhouseCostLeather)&&(self.pWoodTotal>=self.pWoodenhouseCostWood)&&(self.pBuildersIdle>=self.pWoodenhouseBuildersReq)){
            self.pLeatherTotal = self.pLeatherTotal - self.pWoodenhouseCostLeather;
            self.pLeatherTotalStat.text(self.pLeatherTotal);
            self.pWoodTotal = self.pWoodTotal - self.pWoodenhouseCostWood;
            self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
            self.pBuildersIdle = self.pBuildersIdle - self.pWoodenhouseBuildersReq;
            self.pBuildersWorking = self.pBuildersWorking + self.pWoodenhouseBuildersReq;
            self.pBuildersIdleStat.text(self.pBuildersIdle);
            self.pBuildersWorkingStat.text(self.pBuildersWorking);
            
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1 wooden house');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pWoodenhouseClick();
            });
            
            var outerDiv = $("<div style='width:100%; height:3px; margin-top:2px;'></div>");
            var innerDiv = $("<div style='width:0%; height:100%; background-color:#00ff00;'></div>");
            outerDiv.append(innerDiv);
            self.pWoodenhouseTD.append(outerDiv);
            
            var buildwoodinterval = setInterval(frame, 10);
            var i = 0;
            function frame() { 
                if (i==1000){
                    clearInterval(buildwoodinterval);
                    self.pWoodenhouseTotal++;
                    self.pWorkerMaxCap+=3;
                    self.pWorkerMaxCapStat.text(self.pWorkerMaxCap);
                    self.pWoodenhouseStat.text(self.pWoodenhouseTotal);
                    self.pBuildersIdle = self.pBuildersIdle + self.pWoodenhouseBuildersReq;
                    self.pBuildersWorking = self.pBuildersWorking - self.pWoodenhouseBuildersReq;
                    self.pBuildersIdleStat.text(self.pBuildersIdle);
                    self.pBuildersWorkingStat.text(self.pBuildersWorking); 
                    innerDiv.remove();
                    outerDiv.remove();
                    
                    var position = document.getElementById("pWoodenhouseImage").getBoundingClientRect();
                    var posX = position.left+ self.pWoodenhouseImage.width()/2;
                    var posY = position.top+30;
                    textDiv.css({'display':'block','top':posY, 'left':posX});
                    textDiv.addClass("textanimationPoseidon");
                    textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                            textDiv.remove();
                        });
                } else{
                    var wtxt = (i/10)+ "%";
                    innerDiv.css({'width':wtxt});
                    i++;
                }
            }
        }
    },

    _pStonehouseClick: function(){
        var self = this;
        if((self.pLeatherTotal>=self.pStonehouseCostLeather)&&(self.pWoodTotal>=self.pStonehouseCostWood)&&(self.pStoneTotal>=self.pStonehouseCostStone)&&(self.pBuildersIdle>=self.pStonehouseBuildersReq)){
            self.pLeatherTotal = self.pLeatherTotal - self.pStonehouseCostLeather;
            self.pLeatherTotalStat.text(self.pLeatherTotal);
            self.pWoodTotal = self.pWoodTotal - self.pStonehouseCostWood;
            self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
            self.pStoneTotal = self.pStoneTotal - self.pStonehouseCostStone;
            self.pStoneTotalStat.text(self.pStoneTotal.toFixed(0));
            self.pBuildersIdle = self.pBuildersIdle - self.pStonehouseBuildersReq;
            self.pBuildersWorking = self.pBuildersWorking + self.pStonehouseBuildersReq;
            self.pBuildersIdleStat.text(self.pBuildersIdle);
            self.pBuildersWorkingStat.text(self.pBuildersWorking);
            
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1 stone house');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pStonehouseClick();
            });	
            
            var outerDiv = $("<div style='width:70px; height:3px; margin-top:2px;'></div>");
            var innerDiv = $("<div style='width:0%; height:100%; background-color:#00ff00;'></div>");
            self.pStonehouseTD.append(outerDiv);
            outerDiv.append(innerDiv);
            
            var buildstoneinterval = setInterval(frame, 10);
            var i = 0;
            function frame() { 
                if (i==2000){
                    clearInterval(buildstoneinterval);
                    self.pStonehouseTotal++;
                    self.pWorkerMaxCap+=6;
                    self.pWorkerMaxCapStat.text(self.pWorkerMaxCap);
                    self.pStonehouseStat.text(self.pStonehouseTotal);
                    self.pBuildersIdle = self.pBuildersIdle + self.pStonehouseBuildersReq;
                    self.pBuildersWorking = self.pBuildersWorking - self.pStonehouseBuildersReq;
                    self.pBuildersIdleStat.text(self.pBuildersIdle);
                    self.pBuildersWorkingStat.text(self.pBuildersWorking);
                    innerDiv.remove();
                    outerDiv.remove();

                    var position = document.getElementById("pStonehouseImage").getBoundingClientRect();
                    var posX = position.left+ self.pStonehouseImage.width()/2;
                    var posY = position.top+30;
                    textDiv.css({'display':'block','top':posY, 'left':posX});
                    textDiv.addClass("textanimationPoseidon");
                    textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                            textDiv.remove();
                        });
                } else{
                    var wtxt = (i/20)+ "%";
                    innerDiv.css({'width':wtxt});
                    i++;
                }
            }
        }			
    },

    _pWorkerClick:function(){
        var self = this;
        if ((self.pFoodTotal>=self.pWorkerCostFood)&&(self.pWorkerMaxCap>self.pWorkerTotal)){
            self.pFoodTotal = self.pFoodTotal - self.pWorkerCostFood;
            self.pFoodTotalStat.text(self.pFoodTotal.toFixed(0));
            self.pWorkerTotal++;
            self.pWorkerIdle++;
            self.pWorkerStat.text(self.pWorkerTotal);
            self.pWorkerIdleStat.text(self.pWorkerIdle);
            
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1 worker');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pWorkerClick();
            });
            var position = document.getElementById("pWorkerImage").getBoundingClientRect();
            var posX = position.left+ self.pWorkerImage.width()/2;
            var posY = position.top+30;
            textDiv.css({'display':'block','top':posY, 'left':posX});
            textDiv.addClass("textanimationPoseidon");
            textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                    textDiv.remove();
                });	
        }
    },

    _pTempleClick: function(){
        var self = this;
        if((self.pWoodTotal>=self.pTempleCostWood)&&(self.pStoneTotal>=self.pTempleCostStone)&&(self.pBuildersIdle>=self.pTempleBuildersReq)){
            self.pWoodTotal = self.pWoodTotal - self.pTempleCostWood;
            self.pWoodTotalStat.text(self.pWoodTotal.toFixed(0));
            self.pStoneTotal = self.pStoneTotal - self.pTempleCostStone;
            self.pStoneTotalStat.text(self.pStoneTotal.toFixed(0));
            self.pBuildersIdle = self.pBuildersIdle - self.pTempleBuildersReq;
            self.pBuildersWorking = self.pBuildersWorking + self.pTempleBuildersReq;
            self.pBuildersIdleStat.text(self.pBuildersIdle);
            self.pBuildersWorkingStat.text(self.pBuildersWorking);
            
            var textDiv = $("<div class='textclickpos'>&nbsp;</div>");
            self.poseidonMinigame.append(textDiv);
            textDiv.html('+ 1 temple');
            textDiv.css({'cursor':'pointer'});
            textDiv.click(function(){
                self._pTempleClick();
            });
           
            var outerDiv = $("<div style='width:140px; height:3px; margin-top:2px;'></div>");
            var innerDiv = $("<div style='width:0%; height:100%; background-color:#00ff00;'></div>");
            self.pTempleTimeTD.append(outerDiv);
            outerDiv.append(innerDiv);
            
            var buildtempleinterval = setInterval(frame, 10);
            var i = 0;
            function frame() { 
                if (i==3000){
                    clearInterval(buildtempleinterval);
                    self.pTempleTotal++;
                    if(self.pTempleTotal>=1000){
                        self.poseidonStarted = 2;
                        self.pCongratulationsDiv.fadeIn("fast");
                        Game.templeImage.show("slow");
                        Game.poseidonImage.removeClass();
                        clearInterval(self.poseidonTimer);
                    }
                    self.pTempleStat.text(self.pTempleTotal);
                    self.pBuildersIdle = self.pBuildersIdle + self.pTempleBuildersReq;
                    self.pBuildersWorking = self.pBuildersWorking - self.pTempleBuildersReq;
                    self.pBuildersIdleStat.text(self.pBuildersIdle);
                    self.pBuildersWorkingStat.text(self.pBuildersWorking);
                    innerDiv.remove();
                    outerDiv.remove();
                    var position = document.getElementById("pTempleImage").getBoundingClientRect();
                    var posX = position.left+ self.pTempleImage.width()/2;
                    var posY = position.top+30;
                    textDiv.css({'display':'block','top':posY, 'left':posX});
                    textDiv.addClass("textanimationPoseidon");
                    textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                            textDiv.remove();
                        });
                } else{
                    var wtxt = (i/30)+ "%";
                    innerDiv.css({'width':wtxt});
                    i++;
                }
            }
        }
    },

    _poseidonTick: function(){
        if (this.pWorkerTotal>0){ 
            var foodProd = 0; 
            if(this.pFarmerTotal>0){
                foodProd = this.pFarmerTotal * this.pFarmerProduce;
            }  
            var foodDelta = foodProd - this.pWorkerTotal;
            
            var newFoodTotal = this.pFoodTotal + foodDelta;
            
            if (newFoodTotal < 0){
                this.pFoodShortage = this.pFoodShortage - newFoodTotal;
                newFoodTotal = 0;
                if (this.pFoodShortage>10){
                    this.pFoodShortage=0;
                    this.pWorkerTotal -= 1;
                    this.pWorkerStat.text(this.pWorkerTotal);
                    this.pWorkerDie++;
                    this.pWorkerDieStat.text(this.pWorkerDie);
                    if(this.pBuildersIdle>0){
                        this.pBuildersIdle--;
                        this.pBuilderStat.text(this.pBuildersIdle+this.pBuildersWorking); 
                        this.pBuilderIdleStat.text(this.pBuildersIdle);
                    }else if (this.pStonecutterTotal>0){
                        this.pStonecutterTotal--;
                        this.pStonecutterStat.text(this.pStonecutterTotal);
                    }else if (this.pWoodcutterTotal>0){
                        this.pWoodcutterTotal--;
                        this.pWoodcutterStat.text(this.pWoodcutterTotal);
                    }else if (this.pFarmerTotal>0){
                        this.pFarmerTotal--;
                        this.pFarmerStat.text(this.pStonecutterTotal);
                    }else {
                        this.pWorkerIdle--;
                        this.pWorkerIdleStat.text(this.pWorkerIdle);
                    }
                }
            }
            if (this.pLeatherTotal<10){
                this.pLeatherCounter++;
                if (this.pLeatherCounter==20){
                    this.pLeatherTotal++;
                    this.pLeatherTotalStat.text(this.pLeatherTotal);
                    this.pLeatherCounter=0;
                }
            }
            if (this.pFoodMaxCap>=newFoodTotal){
                this.pFoodTotal = newFoodTotal;
            }else {
                this.pFoodTotal = this.pFoodMaxCap;
            }
            this.pFoodTotalStat.text(this.pFoodTotal.toFixed(0));

            if (this.pWoodcutterTotal>0){
                var extraWood = this.pWoodcutterTotal * this.pWoodcutterProduce;
                if(this.pWoodMaxCap>=(this.pWoodTotal+extraWood)){
                    this.pWoodTotal +=extraWood;
                }else{
                    this.pWoodTotal = this.pWoodMaxCap;
                }
            }
            this.pWoodTotalStat.text(this.pWoodTotal.toFixed(0));

            if (this.pStonecutterTotal>0){
                var extraStone = this.pStonecutterTotal * this.pStonecutterProduce;
                if(this.pStoneMaxCap>=(this.pStoneTotal+extraStone)){
                    this.pStoneTotal += extraStone;
                }else{
                    this.pStoneTotal = this.pStoneMaxCap;
                }
            }
            this.pStoneTotalStat.text(this.pStoneTotal.toFixed(0));
        }
    },
};