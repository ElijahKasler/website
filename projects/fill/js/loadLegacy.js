var LoadLegacy = {
    start: function(loadtxt) {
        var la = loadtxt.split("|");
        var saveVersion = la[0]; console.log(saveVersion);
        if((saveVersion=="v0.1")||(saveVersion=="0.1.0")){
            if (la.length!=68){
                alert("The savefile is not a correct file or is corrupt.");
                Game._waterWaves();
                Game._startTimers();
            }else{
                this._loadv010(la);
                this._loadend();
            }
        }else if ((la[0]=="0.1.1")){
            if (la.length!=69){
                alert("The savefile is not a correct file or is corrupt.");
                this.intro.fadeIn("fast");
            }else {
                this._loadv010(la);
                this._loadv011(la);
                this._loadend();
            }
        }else if ((la[0]=="0.1.2")){
            if (la.length!=71){
                alert("The savefile is not a correct file or is corrupt.");
                this.intro.fadeIn("fast");
            }else {
                this._loadv010(la);
                this._loadv011(la);
                this._loadv012(la);
                this._loadend();
            }
        }else if ((la[0]=="0.1.3")||(la[0]=="0.1.4")||(la[0]=="0.1.5")){
            if (la.length!=72){
                alert("The savefile is not a correct file or is corrupt.");
                this.intro.fadeIn("fast");
            }else {
                this._loadv010(la);
                this._loadv011(la);
                this._loadv012(la);
                this._loadend();
            }
        }else if ((la[0]=="0.1.6")||(la[0]=="0.1.7")||(la[0]=="0.1.8")||(la[0]=="0.1.9")||(la[0]=="0.1.10")||(la[0]=="0.1.11")||(la[0]=="0.1.12")){
            if (la.length!=72){
                alert("The savefile is not a correct file or is corrupt.");
                this.intro.fadeIn("fast");
            }else {
                this._loadv010after015(la);
                this._loadv011(la);
                this._loadv012(la);
                this._loadend();
            }
        }else if ((la[0]=="0.1.13")||(la[0]=="0.1.14")){
            if (la.length!=73){
                alert("The savefile is not a correct file or is corrupt.");
                this.intro.fadeIn("fast");
            }else {
                this._loadv010after015(la);
                this._loadv011(la);
                this._loadv012(la);
                this._loadv0113(la);
                this._loadend();
            }
        }else if ((la[0]=="0.1.15")||(la[0]=="0.1.16")||(la[0]=="0.1.17")||(la[0]=="0.1.18")||(la[0]=="0.1.19")||(la[0]=="0.1.20")||(la[0]=="0.2")||(la[0]=="0.2.1")||(la[0]=="0.2.2")||(la[0]=="0.2.3")||(la[0]=="0.2.4")||(la[0]=="0.2.5")){
            if (la.length!=75){
                alert("The savefile is not a correct file or is corrupt. Load not possible");
                this.intro.fadeIn("fast");
            }else {
                this._loadv010after015(la);
                this._loadv011(la);
                this._loadv012(la);
                this._loadv0113(la);
                this._loadv0115(la);
                this._loadend();
            }
        }else{
            this._loadend();
        }
    },

    _loadv010: function(la){
        var _self = this;
        Game.dropsInBank = parseFloat(la[1]);
		Game.totalDropsThisExperienceLevel = parseFloat(la[2]);
        Game.totalDropsEver = parseFloat(la[3]);
        
        Game.dropsInOcean = parseFloat(la[4]);
        Game.handmadeClicks = parseFloat(la[5]);
            Game.textOfNumberOfHandmadeClicksStats.text(Beautify(Game.handmadeClicks)); //show in stats els it only shows up after a click on the big drop
        Game.handmadeDrops = parseFloat(la[6]);
            Game.textOfNumberOfHandmadeDropsStats.text(Beautify(Game.handmadeDrops));   //show in stats els it only shows up after a click on the big drop
        
        Game.cloudsClicked = parseFloat(la[7]);
            Game.textOfNumberOfCloudsClickedStats.text(Game.cloudsClicked);

        Game.knowhow = parseFloat(la[8]);
            Game.knowhowscreenKnowhowStats.text(Beautify(Game.knowhow));
            Game.textOfKnowhowStats.text(Beautify(Game.knowhow));
        
        Game.maximumDropsInOcean = parseFloat(la[9]);
        if(Game.maximumDropsInOcean==150000000000000000000000000){
            Game.gameStage=1;
        }else if(Game.maximumDropsInOcean==150000000000000000000000000000000000){
            Game.gameStage=2;
        }else{
            Game.gameStage=3;
        }
            var perc = (Game.dropsInOcean / Game.maximumDropsInOcean)*100;
            Game.oceanPercentage = Math.floor(perc); 
                Game.textOfDropsInOcean.text(Beautify(Game.dropsInOcean.toFixed(0),0));
                Game.textOfDropsInOceanTab.text(Beautify(Game.dropsInOcean.toFixed(0),0));

            var percbar = Game._getOceanLog(Game.dropsInOcean);
                Game.textOfPercentageDropsInOcean.text(perc.toFixed(15));
                Game.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));
        
            var csstop = 100-percbar+'%';
            var cssheight = percbar + '%';
            Game.oceanProgressBar.css({'top':csstop, 'height':cssheight});
        
            if (perc>=25){
				Game._startSun();
				Game.sunActive=1;
			}else {
				Game.sunActive=0;
			}
        
        Game.experienceToSpend = parseFloat(la[10]);
            Game.knowhowscreenExpStats.text(Beautify(Game.experienceToSpend));
            Game.experiencePointsToSpendStats.text(Beautify(Game.experienceToSpend));

        $.each(Game.buildings, function(i, building) {
            if(la[11].charAt(i)=="1"){
                building.shown=1;
                building.button.css({'background':'#C5CAE9 url("images/'+ this.name +'.png") no-repeat right center'});
                building.showCalculation(building.id);
            }else{
                building.shown=0;
            }
        });   
        $.each(Game.buildings, function(i, building) {	
            building.quantity = parseFloat(la[i+12]);
            Game.totalNumberOfBuildings = Game.totalNumberOfBuildings + building.quantity;
            building.check();
            building.setButton();
        });

        Game.upgrades = Game.upgrades.sort(function(a, b){return a.id-b.id});
        $.each(Game.upgrades, function(i, upgrade) {
            if(la[26].charAt(i)=="1"){
                upgrade.bought = 1;
                Game.boughtUpgrades.push(upgrade);

                upgrade.button.fadeOut("fast");
                upgrade.buttonBought.fadeIn("fast");
                
                Game.totalNumberOfUpgrades++;

                // make sure the effect of the upgrade works
                if (upgrade.type=="mouse"){
                    Game.percentageOfDpsPerClick = Game.percentageOfDpsPerClick + upgrade.perc;
                    Game._calculateNumberOfDropsPerCLick();
                } else if (upgrade.type=="hand"){
                    Game._calculateNumberOfDropsPerCLick();
                }else if (upgrade.type=="cloud"){
                    if(upgrade.other==3){
                        // specials duration *2
                        Game.clickStormDuration *= 2;
                        Game.buildingSpecialsDuration *= 2;
                        Game.stormDuration *= 2;
                        Game.turboDuration *= 2;
                        Game.wrathDuration *= 2;
                    }else{
                        Game.cloudStart = Game.cloudStart/2;
                        Game.cloudEnd =  Game.cloudEnd/2;
                        Game.cloudDuration = Game.cloudDuration * 2;
                    }
                    }else if ((upgrade.type=="contact")||(upgrade.type=="contactb")){
                        Game.contactNumber++;
                    }else if (upgrade.type == "aliens"){
                        Game._startAliens();
                    }else if (upgrade.type == "alientech"){
                        Game.alienTechUpgrades++;
                        Game.alienTechStrength++;
                    }else if (upgrade.type == "knowhow"){
                        Game.knowhowUsePerc += 20;
                        Game.textOfKnowhowEffectivenessStats.text(Game.knowhowUsePerc + " %");
                    }else if(upgrade.type=="ocean"){
                        Game.oceanMultiplier += upgrade.perc;
                    }else if (upgrade.type == "crazyscientist"){
                        Game.numberOfCrazyscientists++;
                    }else if (upgrade.type == "poseidon"){
                        Game.poseidonImage.fadeIn(5000);
                    }
  
            }   
        });
        if((4>Game.contactNumber)&&(Game.contactNumber>0)){
            var contacttwo = Game.upgrades.find(x => x.id === 286);
            var contactthree = Game.upgrades.find(x => x.id === 287);
            var contactfour = Game.upgrades.find(x => x.id === 288);
            if((contacttwo.visible!=1)&&(contactthree.visible!=1)&&(contactfour.visible!=1)){
                Game._startContact();
            }
        }
        Game.textOfNumberOfBoughtUpgradesStats.text(Game.totalNumberOfUpgrades);
        var upgradesPerc = ((Game.totalNumberOfUpgrades/Game.upgrades.length)*100).toFixed(2);
        Game.textOfPercentageOfUpgradesBoughtStats.text(upgradesPerc);

        $.each(Game.achievements, function(i, achievement) {
            if(la[27].charAt(i)=="1"){
                achievement.unlocked = 1;
                achievement.button.fadeIn("fast");
                achievement.buttonLocked.fadeOut("fast");
                Game.numberOfAchievementsUnlocked++;
                Game.achievementsUnlocked.push(achievement); 
            }
        });
        Game.textOfNumberOfAchievementsUnlockedStats.text(Game.numberOfAchievementsUnlocked); 
        Game.achievementsPerc = Math.floor((Game.numberOfAchievementsUnlocked/Game.achievements.length)*100);
        Game.textOfPercentageOfAchievementsUnlockedStats.text(Game.achievementsPerc);
        Game._setMtnEewLvl(Game.achievementsPerc);

        if (la[28].length>1){
            Game.aliensActive = 1;
            var maxAliens = Game.aliens.length;
            for (var i=0; i<maxAliens; i++){
                var newalien = Game.aliens.pop();
                var nAlien = Alien(newalien).init();
                Game.aliensList.push(nAlien);
                Game.aliensPopList.push(nAlien);
            }

            var as = la[28].split("-");

            for(var i=0; i< (as.length-1); i++){
                if (as[i].charAt(0)=="1"){
                    Game.alienNumber++;
                    var transtxt = 'translate(0px, -111px) rotate('+ Game.aliensList[i].angle +'deg)'; 
                    
                    Game.aliensList[i].div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/alienlaser.png)', 'transform':transtxt, 'transform-origin': '45px 222px' });
                    
                    Game.aliensList[i].div.addClass(Game.aliensList[i].hover);
                    Game.aliensList[i].div.show();
                    var assplit = as[i].split("+");
                    
                    Game.aliensList[i].dropsDrained = parseFloat(assplit[1]);
                    
                    Game.aliensList[i].active = 1;
                }else {
                // put on poplist
                    Game.aliensPopList.push(Game.aliensList[i]);
                }
            }
            Game.aliensActiveList =[];
            $.each(Game.aliensList, function(i, alien) {
                if(alien.active==1){
                    Game.aliensActiveList.push(alien);
                }
            });

            if(Game.aliensActiveList.length<maxAliens){
                var end = Game.alienEnd * (1+(Game.alienNumber/10));
                var start = Game.alienStart * (1+(Game.alienNumber/10));
                var max = end-start;
                var randomnum = Math.floor((Math.random() * max) + 1);
                var nextal = randomnum + start;
            
                window.setTimeout(function(){Game._newAlien();}, nextal);
            }
        }

        //todo knowhow upgrades la29
        $.each(Game.knowhowupgrades, function(i, kupgrade) {
            if(la[29].charAt(i)=="1"){
                kupgrade.bought=1;
                kupgrade.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'border-color':'#00dd00'});
                if (kupgrade.type=="unlock"){
                    Game.useKnowhow = 1;
                 }else if(kupgrade.type=="offline"){
                     if(kupgrade.id==23){
                        Game.offlineProductionPercentage = 40;
                        Game.maximumTimeForOfflineProduction = 86400000;
                     }else if(kupgrade.id==24){
                        Game.maximumTimeForOfflineProduction = 129600000;
                     }else if(kupgrade.id==25){
                        Game.offlineProductionPercentage = 50;
                     }else if(kupgrade.id==26){
                        Game.maximumTimeForOfflineProduction = 172800000;
                     }else if(kupgrade.id==27){
                        Game.offlineProductionPercentage = 55;
                     }else if(kupgrade.id==28){
                        Game.maximumTimeForOfflineProduction = 216000000;
                     }else if(kupgrade.id==29){
                        Game.offlineProductionPercentage = 60;
                     }else if(kupgrade.id==30){
                        Game.maximumTimeForOfflineProduction = 259200000;
                     }else if(kupgrade.id==31){
                        Game.offlineProductionPercentage = 65;
                     }else if(kupgrade.id==32){
                        Game.maximumTimeForOfflineProduction = 302400000;
                     }else if(kupgrade.id==33){
                        Game.offlineProductionPercentage = 70;
                     }else if(kupgrade.id==34){
                        Game.maximumTimeForOfflineProduction = 345600000;
                     }else if(kupgrade.id==35){
                        Game.offlineProductionPercentage = 75;
                     }else if(kupgrade.id==36){
                        Game.maximumTimeForOfflineProduction = 432000000;
                     }else if(kupgrade.id==37){
                        Game.offlineProductionPercentage = 80;
                     }else if(kupgrade.id==38){
                        Game.maximumTimeForOfflineProduction = 518400000;
                     }else if(kupgrade.id==39){
                        Game.offlineProductionPercentage = 85;
                     }else if(kupgrade.id==40){
                        Game.offlineProductionPercentage = 95;
                        Game.maximumTimeForOfflineProduction = 604800000;
                     }
                 }else if (kupgrade.type=="alien"){	
                     if (kupgrade.id==12){
                        Game.alienContactDuration = Game.alienContactDuration/10;
                     }
                     else if (kupgrade.id==13){
                        Game.alienStart = Game.alienStart/4;
                        Game.alienEnd = Game.alienEnd/4;
                     }
                     else if (kupgrade.id==14||kupgrade.other==15){
                        Game.alienDrainPerc += 1;
                     }
                 }else if (kupgrade.type=="cloud"){
                     if (kupgrade.id==8||kupgrade.id==9){
                        Game.cloudStart = Game.cloudStart - (Game.cloudStart*0.05);
                        Game.cloudEnd = Game.cloudEnd - (Game.cloudEnd*0.05);
                     }
                     else if(kupgrade.id==10||kupgrade.id==11){
                        Game.stormDuration = Game.stormDuration*1.05;
                        Game.clickStormDuration = Game.clickStormDuration*1.05;
                        Game.turboDuration = Game.turboDuration * 1.05;
                        Game.wrathDuration = Game.wrathDuration * 1.05;
                        Game.buildingSpecialsDuration = Game.buildingSpecialsDuration *2;
                     }
                 }else if(kupgrade.type=="alientech"){
                    Game.alienTechStrength++;
                 }else if(kupgrade.type=="weatherstation"){
                    Game.weatherstationImage.show();
                    Game.weatherstationLevel = 1;
                    Game.weatherstationActive = 1;
                 }
            }
        });

        $.each(Game.knowhowupgrades, function(i, kupgrade) {
            if(la[30].charAt(i)=="1"){
                kupgrade.shown=1;
            }
        });

        //todo from la31
        Game.firstStarted = parseFloat(la[31]);
        if(Game.firstStarted!=0){
            var gameDuration = Date.now() - Game.firstStarted;
            Game.firstStartedStats.text(msToTime(gameDuration));
        }else{
            Game.firstStartedStats.text(msToTime(0));
        }

       var run_start_check = parseFloat(la[32]);
        if (run_start_check!=0){
            Game.lastKnowHow = run_start_check;
        }
        if(Game.lastKnowHow!=0){
            var runDuration = Date.now() - Game.lastKnowHow;
            Game.runStartedStats.text(msToTime(runDuration));
        }else{
            var gameDuration = Date.now() - Game.firstStarted;
            Game.runStartedStats.text(msToTime(gameDuration));
        }

        Game.numberOption = parseFloat(la[35]);
        if(Game.numberOption==1){
            Game.numbersSelect.val("scientific");
            $.each(Game.buildings, function(i, building) {
                building.setButton();
            });
        }

        Game.cloudSoundOption = parseFloat(la[36]);
        if(Game.cloudSoundOption==0){
            Game.cloudSoundOptionCheckbox.prop( "checked", false );
        }

        Game.volumePerc.text(parseFloat(la[37])+"%");
        Game.volumeSlider.val(parseFloat(la[37]));
            for (var a=0;a<Game.channel_max;a++) {	
                Game.audiochannels[a]['channel'].volume = parseFloat(la[37])/100;
            }

        Game.littleDropOption = parseFloat(la[38]);
        if(Game.littleDropOption==0){
            Game.littleDropOptionCheckbox.prop( "checked", false );
        }

        Game.showNumberOnScreenAfterCLickOption = parseFloat(la[39]);
        if(Game.showNumberOnScreenAfterCLickOption==0){
            Game.showNumberOnScreenAfterCLickOptionCheckbox.prop( "checked", false );
        }

        Poseidon.poseidonStarted = parseFloat(la[41]);
        if(Poseidon.poseidonStarted==2){
            Poseidon.pCongratulationsDiv.fadeIn("fast");
            self.templeImage.show("slow");
            self.poseidonImage.removeClass();
        }else if (Poseidon.poseidonStarted==1){
            Poseidon.poseidonTimer = window.setInterval(function() {  // start poseidonTimer
                Poseidon._poseidonTick();
            }, Poseidon.pInterval);
        } 

        Poseidon.pFoodTotal = parseFloat(la[42]); Poseidon.pFoodTotalStat.text(Poseidon.pFoodTotal.toFixed(0));
        Poseidon.pLeatherTotal = parseFloat(la[43]); Poseidon.pLeatherTotalStat.text(Poseidon.pLeatherTotal);
        Poseidon.pFoodMaxCap =  parseFloat(la[44]); Poseidon.pFoodBarnCapStat.text(Poseidon.pFoodMaxCap);
        Poseidon.pFoodBarnCost = parseFloat(la[45]); Poseidon.pFoodBarnCostStat.text(Poseidon.pFoodBarnCost);
        Poseidon.pWoodTotal = parseFloat(la[46]); Poseidon.pWoodTotalStat.text(Poseidon.pWoodTotal.toFixed(0));
        Poseidon.pWoodMaxCap =  parseFloat(la[47]); Poseidon.pWoodBarnCapStat.text(Poseidon.pWoodMaxCap);
        Poseidon.pWoodBarnCost = parseFloat(la[48]); Poseidon.pWoodBarnCostStat.text(Poseidon.pWoodBarnCost);
        Poseidon.pStoneTotal = parseFloat(la[49]); Poseidon.pStoneTotalStat.text(Poseidon.pStoneTotal.toFixed(0));
        Poseidon.pStoneMaxCap =  parseFloat(la[50]); Poseidon.pStoneBarnCapStat.text(Poseidon.pStoneMaxCap);
        Poseidon.pStoneBarnCostWood = parseFloat(la[51]); Poseidon.pStoneBarnCostWoodStat.text(Poseidon.pStoneBarnCostWood);
        Poseidon.pStoneBarnCostStone = parseFloat(la[52]); Poseidon.pStoneBarnCostStoneStat.text(Poseidon.pStoneBarnCostStone);
        Poseidon.pTentTotal = parseFloat(la[53]); Poseidon.pTentTotalStat.text(Poseidon.pTentTotal);
        Poseidon.pWoodenhouseTotal = parseFloat(la[54]); Poseidon.pWoodenhouseStat.text(Poseidon.pWoodenhouseTotal);
        Poseidon.pStonehouseTotal = parseFloat(la[55]); Poseidon.pStonehouseStat.text(Poseidon.pStonehouseTotal);
        Poseidon.pBuildersIdle = parseFloat(la[56]); Poseidon.pBuildersIdleStat.text(Poseidon.pBuildersIdle); Poseidon.pBuilderStat.text(Poseidon.pBuildersIdle);
        Poseidon.pWorkerTotal = parseFloat(la[57]); Poseidon.pWorkerStat.text(Poseidon.pWorkerTotal);
        Poseidon.pWorkerIdle = parseFloat(la[58]); Poseidon.pWorkerIdleStat.text(Poseidon.pWorkerIdle);
        Poseidon.pFarmerTotal = parseFloat(la[59]); Poseidon.pFarmerStat.text(Poseidon.pFarmerTotal);
        Poseidon.pWoodcutterTotal = parseFloat(la[60]); Poseidon.pWoodcutterStat.text(Poseidon.pWoodcutterTotal);
        Poseidon.pStonecutterTotal = parseFloat(la[61]); Poseidon.pStonecutterStat.text(Poseidon.pStonecutterTotal);
        Poseidon.pWorkerDie = parseFloat(la[62]); Poseidon.pWorkerDieStat.text(Poseidon.pWorkerDie);
        Poseidon.pTempleTotal = parseFloat(la[63]); Poseidon.pTempleStat.text(Poseidon.pTempleTotal);
        Poseidon.pWorkerMaxCap = parseFloat(la[64]); Poseidon.pWorkerMaxCapStat.text(Poseidon.pWorkerMaxCap);

        Game.sacrificeLevel = parseFloat(la[66]);
        if(Game.sacrificeLevel>0){
            Game._changeSacrificeText(Game.sacrificeLevel);
        }
        if (Game.sacrificeLevel>3){
            for(i=0;i<=Game.sacrificeLevel-4;i++){
                Game.prayers[i].button.show();
            }
        }
        Game._sacrificeCheck();

        $.each(Game.prayers, function(i, prayer) {
            if(la[65].charAt(i)=="1"){
                prayer.selected=1;
                Game.prayerToSelect=1;
                Game._prayerSelected(prayer.id);
                Game.firstSelectedPrayerId = prayer.id;
                if(Game.firstSelectedPrayerId!=0){var pr = Game.prayers.find(x => x.id === Game.firstSelectedPrayerId); pr.button.addClass('prayerSelected');}
                if(prayer.id==1){Game.prayerBrainpowerActive = 1; Game._activatePrayer(1);}
                else if(prayer.id==2){Game.prayerClickpowerActive = 1; Game._activatePrayer(2);}
                else if(prayer.id==3){Game.prayerPipetteliciousActive = 1; Game._activatePrayer(3);}
                else if(prayer.id==4){Game.prayerTurboActive = 1; Game._activatePrayer(4);}
                else if(prayer.id==5){Game.prayerBrainwavesActive = 1; Game._activatePrayer(5);}
                else if(prayer.id==6){Game.prayerDiscountUpgradeActive = 1; Game._activatePrayer(6);}
                else if(prayer.id==7){Game.prayerDiscountHelperActive = 1; Game._activatePrayer(7);}
                else if(prayer.id==8){Game.prayerBonusActive = 1; Game._activatePrayer(8);}
                else if(prayer.id==9){Game.prayerBadWeatherActive = 1; Game._activatePrayer(9);}
                else if(prayer.id==10){Game.prayerWrathActive = 1; Game._activatePrayer(10);}
                else if(prayer.id==11){Game.prayerHeavyRainActive = 1; Game._activatePrayer(11);}
                else if(prayer.id==12){Game.prayerBigBonusActive = 1; Game._activatePrayer(12);}
                else if(prayer.id==13){Game.prayerBraingrowthActive = 1; Game._activatePrayer(13);}
                else if(prayer.id==14){Game.prayerEnormousBonusActive = 1; Game._activatePrayer(14);}
                else {Game.prayerDoubleActive = 1; Game._activatePrayer(15);}
            }else {
                prayer.selected=0;
            }
        });

    },

    _loadv010after015:function(la){
        var _self = this;
        Game.dropsInBank = parseFloat(la[1]);
		Game.totalDropsThisExperienceLevel = parseFloat(la[2]);
        Game.totalDropsEver = parseFloat(la[3]);
        
        Game.dropsInOcean = parseFloat(la[4]);
        Game.handmadeClicks = parseFloat(la[5]);
            Game.textOfNumberOfHandmadeClicksStats.text(Beautify(Game.handmadeClicks)); //show in stats els it only shows up after a click on the big drop
        Game.handmadeDrops = parseFloat(la[6]);
            Game.textOfNumberOfHandmadeDropsStats.text(Beautify(Game.handmadeDrops));   //show in stats els it only shows up after a click on the big drop
        
        Game.cloudsClicked = parseFloat(la[7]);
            Game.textOfNumberOfCloudsClickedStats.text(Game.cloudsClicked);

        Game.knowhow = parseFloat(la[8]);
            Game.knowhowscreenKnowhowStats.text(Beautify(Game.knowhow));
            Game.textOfKnowhowStats.text(Beautify(Game.knowhow));
        
        Game.maximumDropsInOcean = parseFloat(la[9]);
        if(Game.maximumDropsInOcean==150000000000000000000000000){
            Game.gameStage=1;
        }else if(Game.maximumDropsInOcean==150000000000000000000000000000000000){
            Game.gameStage=2;
        }else{
            Game.gameStage=3;
        }
            var perc = (Game.dropsInOcean / Game.maximumDropsInOcean)*100;
            Game.oceanPercentage = Math.floor(perc); 
                Game.textOfDropsInOcean.text(Beautify(Game.dropsInOcean.toFixed(0),0));
                Game.textOfDropsInOceanTab.text(Beautify(Game.dropsInOcean.toFixed(0),0));

            var percbar = Game._getOceanLog(Game.dropsInOcean);
                Game.textOfPercentageDropsInOcean.text(perc.toFixed(15));
                Game.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));
        
            var csstop = 100-percbar+'%';
            var cssheight = percbar + '%';
            Game.oceanProgressBar.css({'top':csstop, 'height':cssheight});

            if (perc>=25){
				Game._startSun();
				Game.sunActive=1;
			}else {
				Game.sunActive=0;
			}
        
        Game.experienceToSpend = parseFloat(la[10]);
            Game.knowhowscreenExpStats.text(Beautify(Game.experienceToSpend));
            Game.experiencePointsToSpendStats.text(Beautify(Game.experienceToSpend));

        $.each(Game.buildings, function(i, building) {
            if(la[11].charAt(i)=="1"){
                building.shown=1;
                building.button.css({'background':'#C5CAE9 url("images/'+ this.name +'.png") no-repeat right center'});
                building.showCalculation(building.id);
            }else{
                building.shown=0;
            }
        });   
        $.each(Game.buildings, function(i, building) {	
            building.quantity = parseFloat(la[i+12]);
            Game.totalNumberOfBuildings = Game.totalNumberOfBuildings + building.quantity;
            building.check();
            building.setButton();
        });

        Game.upgrades = Game.upgrades.sort(function(a, b){return a.id-b.id});
        $.each(Game.upgrades, function(i, upgrade) {
            if(la[26].charAt(i)=="1"){
                upgrade.bought = 1;
                Game.boughtUpgrades.push(upgrade);

                upgrade.button.fadeOut("fast");
                upgrade.buttonBought.fadeIn("fast");
                
                Game.totalNumberOfUpgrades++;

                // make sure the effect of the upgrade works
                if (upgrade.type=="mouse"){
                    Game.percentageOfDpsPerClick = Game.percentageOfDpsPerClick + upgrade.perc;
                    Game._calculateNumberOfDropsPerCLick();
                } else if (upgrade.type=="hand"){
                    Game._calculateNumberOfDropsPerCLick();
                }else if (upgrade.type=="cloud"){
                    if(upgrade.other==3){
                        // specials duration *2
                        Game.clickStormDuration *= 2;
                        Game.buildingSpecialsDuration *= 2;
                        Game.stormDuration *= 2;
                        Game.turboDuration *= 2;
                        Game.wrathDuration *= 2;
                    }else{
                        Game.cloudStart = Game.cloudStart/2;
                        Game.cloudEnd =  Game.cloudEnd/2;
                        Game.cloudDuration = Game.cloudDuration * 2;
                    }
                    }else if ((upgrade.type=="contact")||(upgrade.type=="contactb")){
                        Game.contactNumber++;
                    }else if (upgrade.type == "aliens"){
                        Game._startAliens();
                    }else if (upgrade.type == "alientech"){
                        Game.alienTechUpgrades++;
                        Game.alienTechStrength++;
                    }else if (upgrade.type == "knowhow"){
                        Game.knowhowUsePerc += 20;
                        Game.textOfKnowhowEffectivenessStats.text(Game.knowhowUsePerc + " %");
                    }else if(upgrade.type=="ocean"){
                        Game.oceanMultiplier += upgrade.perc;
                    }else if (upgrade.type == "crazyscientist"){
                        Game.numberOfCrazyscientists++;
                    }else if (upgrade.type == "poseidon"){
                        Game.poseidonImage.fadeIn(5000);
                    }
  
            }   
        });
        if((4>Game.contactNumber)&&(Game.contactNumber>0)){
            var contacttwo = Game.upgrades.find(x => x.id === 286);
            var contactthree = Game.upgrades.find(x => x.id === 287);
            var contactfour = Game.upgrades.find(x => x.id === 288);
            if((contacttwo.visible!=1)&&(contactthree.visible!=1)&&(contactfour.visible!=1)){
                Game._startContact();
            }
        }
        Game.textOfNumberOfBoughtUpgradesStats.text(Game.totalNumberOfUpgrades);
        var upgradesPerc = ((Game.totalNumberOfUpgrades/Game.upgrades.length)*100).toFixed(2);
        Game.textOfPercentageOfUpgradesBoughtStats.text(upgradesPerc);

        $.each(Game.achievements, function(i, achievement) {
            if(la[27].charAt(i)=="1"){
                achievement.unlocked = 1;
                achievement.button.fadeIn("fast");
                achievement.buttonLocked.fadeOut("fast");
                Game.numberOfAchievementsUnlocked++;
                Game.achievementsUnlocked.push(achievement); 
            }
        });
        Game.textOfNumberOfAchievementsUnlockedStats.text(Game.numberOfAchievementsUnlocked); 
        Game.achievementsPerc = Math.floor((Game.numberOfAchievementsUnlocked/Game.achievements.length)*100);
        Game.textOfPercentageOfAchievementsUnlockedStats.text(Game.achievementsPerc);
        Game._setMtnEewLvl(Game.achievementsPerc);

        if (la[28].length>1){
            Game.aliensActive = 1;
            var maxAliens = Game.aliens.length;
            for (var i=0; i<maxAliens; i++){
                var newalien = Game.aliens.pop();
                var nAlien = Alien(newalien).init();
                Game.aliensList.push(nAlien);
                Game.aliensPopList.push(nAlien);
            }

            var as = la[28].split("-");

            for(var i=0; i< (as.length-1); i++){
                if (as[i].charAt(0)=="1"){
                    Game.alienNumber++;
                    var transtxt = 'translate(0px, -111px) rotate('+ Game.aliensList[i].angle +'deg)'; 
                    
                    Game.aliensList[i].div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/alienlaser.png)', 'transform':transtxt, 'transform-origin': '45px 222px' });
                    
                    Game.aliensList[i].div.addClass(Game.aliensList[i].hover);
                    Game.aliensList[i].div.show();
                    var assplit = as[i].split("::");
                    
                    Game.aliensList[i].dropsDrained = parseFloat(assplit[1]);
                    
                    Game.aliensList[i].active = 1;
                }else {
                // put on poplist
                    Game.aliensPopList.push(Game.aliensList[i]);
                }
            }
            Game.aliensActiveList =[];
            $.each(Game.aliensList, function(i, alien) {
                if(alien.active==1){
                    Game.aliensActiveList.push(alien);
                }
            });

            if(Game.aliensActiveList.length<maxAliens){
                var end = Game.alienEnd * (1+(Game.alienNumber/10));
                var start = Game.alienStart * (1+(Game.alienNumber/10));
                var max = end-start;
                var randomnum = Math.floor((Math.random() * max) + 1);
                var nextal = randomnum + start;
            
                window.setTimeout(function(){Game._newAlien();}, nextal);
            }
        }

        //todo knowhow upgrades la29
        $.each(Game.knowhowupgrades, function(i, kupgrade) {
            if(la[29].charAt(i)=="1"){
                kupgrade.bought=1;
                kupgrade.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'border-color':'#00dd00'});
                if (kupgrade.type=="unlock"){
                    Game.useKnowhow = 1;
                 }else if(kupgrade.type=="offline"){
                     if(kupgrade.id==23){
                        Game.offlineProductionPercentage = 40;
                        Game.maximumTimeForOfflineProduction = 86400000;
                     }else if(kupgrade.id==24){
                        Game.maximumTimeForOfflineProduction = 129600000;
                     }else if(kupgrade.id==25){
                        Game.offlineProductionPercentage = 50;
                     }else if(kupgrade.id==26){
                        Game.maximumTimeForOfflineProduction = 172800000;
                     }else if(kupgrade.id==27){
                        Game.offlineProductionPercentage = 55;
                     }else if(kupgrade.id==28){
                        Game.maximumTimeForOfflineProduction = 216000000;
                     }else if(kupgrade.id==29){
                        Game.offlineProductionPercentage = 60;
                     }else if(kupgrade.id==30){
                        Game.maximumTimeForOfflineProduction = 259200000;
                     }else if(kupgrade.id==31){
                        Game.offlineProductionPercentage = 65;
                     }else if(kupgrade.id==32){
                        Game.maximumTimeForOfflineProduction = 302400000;
                     }else if(kupgrade.id==33){
                        Game.offlineProductionPercentage = 70;
                     }else if(kupgrade.id==34){
                        Game.maximumTimeForOfflineProduction = 345600000;
                     }else if(kupgrade.id==35){
                        Game.offlineProductionPercentage = 75;
                     }else if(kupgrade.id==36){
                        Game.maximumTimeForOfflineProduction = 432000000;
                     }else if(kupgrade.id==37){
                        Game.offlineProductionPercentage = 80;
                     }else if(kupgrade.id==38){
                        Game.maximumTimeForOfflineProduction = 518400000;
                     }else if(kupgrade.id==39){
                        Game.offlineProductionPercentage = 85;
                     }else if(kupgrade.id==40){
                        Game.offlineProductionPercentage = 95;
                        Game.maximumTimeForOfflineProduction = 604800000;
                     }
                 }else if (kupgrade.type=="alien"){	
                     if (kupgrade.id==12){
                        Game.alienContactDuration = Game.alienContactDuration/10;
                     }
                     else if (kupgrade.id==13){
                        Game.alienStart = Game.alienStart/4;
                        Game.alienEnd = Game.alienEnd/4;
                     }
                     else if (kupgrade.id==14||kupgrade.other==15){
                        Game.alienDrainPerc += 1;
                     }
                 }else if (kupgrade.type=="cloud"){
                     if (kupgrade.id==8||kupgrade.id==9){
                        Game.cloudStart = Game.cloudStart - (Game.cloudStart*0.05);
                        Game.cloudEnd = Game.cloudEnd - (Game.cloudEnd*0.05);
                     }
                     else if(kupgrade.id==10||kupgrade.id==11){
                        Game.stormDuration = Game.stormDuration*1.05;
                        Game.clickStormDuration = Game.clickStormDuration*1.05;
                        Game.turboDuration = Game.turboDuration * 1.05;
                        Game.wrathDuration = Game.wrathDuration * 1.05;
                        Game.buildingSpecialsDuration = Game.buildingSpecialsDuration *2;
                     }
                 }else if(kupgrade.type=="alientech"){
                    Game.alienTechStrength++;
                 }else if(kupgrade.type=="weatherstation"){
                    Game.weatherstationImage.show();
                    Game.weatherstationLevel = 1;
                    Game.weatherstationActive = 1;
                 }
            }
        });

        $.each(Game.knowhowupgrades, function(i, kupgrade) {
            if(la[30].charAt(i)=="1"){
                kupgrade.shown=1;
            }
        });

        //todo from la31
        Game.firstStarted = parseFloat(la[31]);
        if(Game.firstStarted!=0){
            var gameDuration = Date.now() - Game.firstStarted;
            Game.firstStartedStats.text(msToTime(gameDuration));
        }else{
            Game.firstStartedStats.text(msToTime(0));
        }

       var run_start_check = parseFloat(la[32]);
        if (run_start_check!=0){
            Game.lastKnowHow = run_start_check;
        }
        if(Game.lastKnowHow!=0){
            var runDuration = Date.now() - Game.lastKnowHow;
            Game.runStartedStats.text(msToTime(runDuration));
        }else{
            var gameDuration = Date.now() - Game.firstStarted;
            Game.runStartedStats.text(msToTime(gameDuration));
        }

        Game.numberOption = parseFloat(la[35]);
        if(Game.numberOption==1){
            Game.numbersSelect.val("scientific");
            $.each(Game.buildings, function(i, building) {
                building.setButton();
            });
        }

        Game.cloudSoundOption = parseFloat(la[36]);
        if(Game.cloudSoundOption==0){
            Game.cloudSoundOptionCheckbox.prop( "checked", false );
        }

        Game.volumePerc.text(parseFloat(la[37])+"%");
        Game.volumeSlider.val(parseFloat(la[37]));
            for (var a=0;a<Game.channel_max;a++) {	
                Game.audiochannels[a]['channel'].volume = parseFloat(la[37])/100;
            }

        Game.littleDropOption = parseFloat(la[38]);
        if(Game.littleDropOption==0){
            Game.littleDropOptionCheckbox.prop( "checked", false );
        }

        Game.showNumberOnScreenAfterCLickOption = parseFloat(la[39]);
        if(Game.showNumberOnScreenAfterCLickOption==0){
            Game.showNumberOnScreenAfterCLickOptionCheckbox.prop( "checked", false );
        }

        Poseidon.poseidonStarted = parseFloat(la[41]);
        if(Poseidon.poseidonStarted==2){
            Poseidon.pCongratulationsDiv.fadeIn("fast");
            self.templeImage.show("slow");
            self.poseidonImage.removeClass();
        }else if (Poseidon.poseidonStarted==1){
            Poseidon.poseidonTimer = window.setInterval(function() {  // start poseidonTimer
                Poseidon._poseidonTick();
            }, Poseidon.pInterval);
        } 

        Poseidon.pFoodTotal = parseFloat(la[42]); Poseidon.pFoodTotalStat.text(Poseidon.pFoodTotal.toFixed(0));
        Poseidon.pLeatherTotal = parseFloat(la[43]); Poseidon.pLeatherTotalStat.text(Poseidon.pLeatherTotal);
        Poseidon.pFoodMaxCap =  parseFloat(la[44]); Poseidon.pFoodBarnCapStat.text(Poseidon.pFoodMaxCap);
        Poseidon.pFoodBarnCost = parseFloat(la[45]); Poseidon.pFoodBarnCostStat.text(Poseidon.pFoodBarnCost);
        Poseidon.pWoodTotal = parseFloat(la[46]); Poseidon.pWoodTotalStat.text(Poseidon.pWoodTotal.toFixed(0));
        Poseidon.pWoodMaxCap =  parseFloat(la[47]); Poseidon.pWoodBarnCapStat.text(Poseidon.pWoodMaxCap);
        Poseidon.pWoodBarnCost = parseFloat(la[48]); Poseidon.pWoodBarnCostStat.text(Poseidon.pWoodBarnCost);
        Poseidon.pStoneTotal = parseFloat(la[49]); Poseidon.pStoneTotalStat.text(Poseidon.pStoneTotal.toFixed(0));
        Poseidon.pStoneMaxCap =  parseFloat(la[50]); Poseidon.pStoneBarnCapStat.text(Poseidon.pStoneMaxCap);
        Poseidon.pStoneBarnCostWood = parseFloat(la[51]); Poseidon.pStoneBarnCostWoodStat.text(Poseidon.pStoneBarnCostWood);
        Poseidon.pStoneBarnCostStone = parseFloat(la[52]); Poseidon.pStoneBarnCostStoneStat.text(Poseidon.pStoneBarnCostStone);
        Poseidon.pTentTotal = parseFloat(la[53]); Poseidon.pTentTotalStat.text(Poseidon.pTentTotal);
        Poseidon.pWoodenhouseTotal = parseFloat(la[54]); Poseidon.pWoodenhouseStat.text(Poseidon.pWoodenhouseTotal);
        Poseidon.pStonehouseTotal = parseFloat(la[55]); Poseidon.pStonehouseStat.text(Poseidon.pStonehouseTotal);
        Poseidon.pBuildersIdle = parseFloat(la[56]); Poseidon.pBuildersIdleStat.text(Poseidon.pBuildersIdle); Poseidon.pBuilderStat.text(Poseidon.pBuildersIdle);
        Poseidon.pWorkerTotal = parseFloat(la[57]); Poseidon.pWorkerStat.text(Poseidon.pWorkerTotal);
        Poseidon.pWorkerIdle = parseFloat(la[58]); Poseidon.pWorkerIdleStat.text(Poseidon.pWorkerIdle);
        Poseidon.pFarmerTotal = parseFloat(la[59]); Poseidon.pFarmerStat.text(Poseidon.pFarmerTotal);
        Poseidon.pWoodcutterTotal = parseFloat(la[60]); Poseidon.pWoodcutterStat.text(Poseidon.pWoodcutterTotal);
        Poseidon.pStonecutterTotal = parseFloat(la[61]); Poseidon.pStonecutterStat.text(Poseidon.pStonecutterTotal);
        Poseidon.pWorkerDie = parseFloat(la[62]); Poseidon.pWorkerDieStat.text(Poseidon.pWorkerDie);
        Poseidon.pTempleTotal = parseFloat(la[63]); Poseidon.pTempleStat.text(Poseidon.pTempleTotal);
        Poseidon.pWorkerMaxCap = parseFloat(la[64]); Poseidon.pWorkerMaxCapStat.text(Poseidon.pWorkerMaxCap);

        Game.sacrificeLevel = parseFloat(la[66]);
        if(Game.sacrificeLevel>0){
            Game._changeSacrificeText(Game.sacrificeLevel);
        }
        if (Game.sacrificeLevel>3){
            for(i=0;i<=Game.sacrificeLevel-4;i++){
                Game.prayers[i].button.show();
            }
        }
        Game._sacrificeCheck();

        $.each(Game.prayers, function(i, prayer) {
            if(la[65].charAt(i)=="1"){
                prayer.selected=1;
                Game.prayerToSelect=1;
                Game._prayerSelected(prayer.id);
                Game.firstSelectedPrayerId = prayer.id;
                if(Game.firstSelectedPrayerId!=0){var pr = Game.prayers.find(x => x.id === Game.firstSelectedPrayerId); pr.button.addClass('prayerSelected');}
                if(prayer.id==1){Game.prayerBrainpowerActive = 1; Game._activatePrayer(1);}
                else if(prayer.id==2){Game.prayerClickpowerActive = 1; Game._activatePrayer(2);}
                else if(prayer.id==3){Game.prayerPipetteliciousActive = 1; Game._activatePrayer(3);}
                else if(prayer.id==4){Game.prayerTurboActive = 1; Game._activatePrayer(4);}
                else if(prayer.id==5){Game.prayerBrainwavesActive = 1; Game._activatePrayer(5);}
                else if(prayer.id==6){Game.prayerDiscountUpgradeActive = 1; Game._activatePrayer(6);}
                else if(prayer.id==7){Game.prayerDiscountHelperActive = 1; Game._activatePrayer(7);}
                else if(prayer.id==8){Game.prayerBonusActive = 1; Game._activatePrayer(8);}
                else if(prayer.id==9){Game.prayerBadWeatherActive = 1; Game._activatePrayer(9);}
                else if(prayer.id==10){Game.prayerWrathActive = 1; Game._activatePrayer(10);}
                else if(prayer.id==11){Game.prayerHeavyRainActive = 1; Game._activatePrayer(11);}
                else if(prayer.id==12){Game.prayerBigBonusActive = 1; Game._activatePrayer(12);}
                else if(prayer.id==13){Game.prayerBraingrowthActive = 1; Game._activatePrayer(13);}
                else if(prayer.id==14){Game.prayerEnormousBonusActive = 1; Game._activatePrayer(14);}
                else {Game.prayerDoubleActive = 1; Game._activatePrayer(15);}
            }else {
                prayer.selected=0;
            }
        });
    },

    _loadv011:function(la){
        Game.timeSaved = parseFloat(la[67]);
    },

    _loadv012: function(la){
        Game.spinningBackground = parseFloat(la[69]);
        if(Game.spinningBackground==0){
            $('#dropbackgrounda').removeClass("spinRight");
            $('#dropbackgroundb').removeClass("spinLeft");
            Game.spinningBackgroundCheckbox.prop( "checked", false );
        }
    },

    _loadv0113:function(la){
       Game.weatherstationLevel = parseFloat(la[71]);
        if(Game.weatherstationLevel>0){
            Game._changeWeatherstationText();
        }
    },

    _loadv0115:function(la){
        Game.weatherstationActive = parseFloat(la[72]);
        if(Game.weatherstationActive==0){
            Game.verbodDiv.show();
            Game.weatherstationDivActiveText.text("The weather station is disabled.");
            Game.weatherstationDivActiveButton.text("Enable");
        }
        Game.clickSoundOption = parseFloat(la[73]);
        if(Game.clickSoundOption==0){
            Game.clickSoundOptionCheckbox.prop( "checked", false );
        }
    },

    _loadend: function(){
        $.each(Game.upgrades, function(i, upgrade) { 
            upgrade.check();
        });
        $.each(Game.buildings, function(i, _building) {
            _building.calculateCurrentProduction();
			_building.check();
        });
        Game._calculateCrazyscientistsBoost();
        Game._startTimers();
        Game._updateWaterLevel(1);
        Game._waterWaves();
        Game._calculateNumberOfDropsPerCLick();
        Game._offlineProduction();

        Game.introScreen.hide();
    },
};