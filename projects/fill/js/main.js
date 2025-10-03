// Game doesn't work in IE so when IE opens the game this displays a message.

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0) // If Internet Explorer
{
    var htmltxt = "<h1 style='color:#ffffff'>Fill The Oceans</h1><p style='color:#ffffff'>Fill the oceans is a game that uses CSS3 and advanced javascript that is not supported by Internet Explorer.</p>";
	htmltxt += "<p style='color:#ffffff'>Fill The Oceans should work with all recent major other browsers like: Chrome, Firefox and Opera.</p> <p  style='color:#ffffff'>Sorry for this inconvenience.</p>";
	document.getElementById("body").innerHTML=htmltxt;
}

var Game = {

    //Variables
    version:"1.0.0",
    interval: 50,
    statsUpdateInterval: 2000,
    upgradesCheckInterval: 5000,
    reload: 0,
    gameStage:1,
    
    //timer variables
    startTime: Date.now(), 
    timeSaved:0,
    timelaga: Date.now(),
    timelagb: 0,

    firstStarted:0, 
    lastKnowHow:0,

    //timers
    mainTimer:undefined,
    updateStatsTimer: undefined,
    upgradesCheckTimer:undefined,
    saveTimer: undefined,
    showCloudTimer: undefined,
    hideCloudTimer: undefined,
    contactTimer: undefined,
    knowhowTimer: undefined,
    alienTimer: undefined,
    showSunTimer:undefined,
    hideSunTimer: undefined,
    handlebgdrops:undefined,
    
    // sun variables
    sunActive:0,
    sunStart: 120000,
    sunEnd: 240000,
    sunDuration: 15000,
    sunVisible: 0,
    sunClick: 0,
    sunLoss: 1000000000000000000000,

    //cloud variables and specials
    cloudStart:320000,
    cloudEnd:640000,
    cloudDuration:15000,
    cloudVisible:0,
    cloudsClicked:0,
    cloudUpgradeLevel: 1,
    cloudsCLickedEver:0,
    totalCloudsShownEver:0,
    stormActive:0,
    stormMultiplier:7,
    buildingSpecialsActive:0,
    clickStormActive:0,
    clickStormMultiplier:777,
    clickStormDuration:10000,
    wrathActive:0,
    wrathMultiplier:1111,
    wrathDuration:11000,
    buildingSpecialsDuration:15000,
    stormDuration:77000,
    turboActive:0,
    turboDuration:60000,
    turboMultiplier:30,
    cloudAutoclick:1,

    //alien variables
    alienNumber:0,
    alienStart:150000,
    alienEnd:300000,
    alienDrain: 0,
    totalDropsDrained: 0,
    alienTechUpgrades: 0,
	alienContact: 0,
    alienContactDuration: 1800,
    alienDrainPerc: 6,
    alienTechStrength: 1,
    contactNumber:0,
    aliensActive:0,

    //poseidonvariables
    poseidonSacrificeVisible:0,
    sacrificeDivHover:0,
    sacrificeDivActive:0,
    sacrificeLevel:0,
    prayerSelectPosition:0,
    prayerToSelect:0,
    firstSelectedPrayerId:0,
    secondSelectedPrayerId:0,

    //prayers
    prayerBrainpowerActive:0,
    prayerClickpowerActive:0,
    prayerPipetteliciousActive:0,
    prayerTurboActive:0,
    prayerBrainwavesActive:0,
    prayerDiscountUpgradeActive:0,
    prayerDiscountHelperActive:0,
    prayerBonusActive:0,
    prayerBadWeatherActive:0,
    prayerWrathActive:0,
    prayerHeavyRainActive:0,
    prayerBigBonusActive:0,
    prayerEnormousBonusActive:0,
    prayerBraingrowthActive:0,
    prayerDoubleActive:0,

    //offline production
    maximumTimeForOfflineProduction:43200000,
    offlineProductionPercentage:20,

    //weatherstation
    weatherstationLevel:0,
    weatherstationActive:1,
    upgradeWeatherstationDivActive:0,
    upgradeWeatherstationDivHover:0,

    //minigames
    rainbowActive:0,
    rainbowStartTime:0,
    allTimeGoldenCoins:0,
    numberOfGoldenCoinsToSpend:0,
    rainbowTimeToNextCoin:0,
    goldenCoinsActive:0,
    
    //DOM Variables
    bigDrop: undefined,
    noticesDiv: undefined,
    popup:undefined,
    popupr:undefined,
    popuprb:undefined,
    popupk:undefined,
    popupp: undefined,
    popupAlien:undefined,
    optionsSaveButton: undefined,
    store: undefined,
    upgradesDiv: undefined,
    boughtUpgradesDiv: undefined,
    achievementsStoreDiv: undefined,
    mtnEewLevelDiv:undefined,
    textOfNumberOfDropsInBank: undefined,
    textOfNumberOfDropsInBankStats: undefined,
    textOfNumberOfDropsPerSecond: undefined,
    textOfNumberOfDropsPerSecondStats: undefined,
    textOfNumberOfDropsProducedThisExperienceLevelStats: undefined,
    textOfNumberOfDropsProducedEverStats: undefined,
    textOfNumberOfHandmadeClicksStats: undefined,
    textOfNumberOfHandmadeDropsStats: undefined,
    textOfNumberOfAchievementsUnlockedStats: undefined,
    textOfPercentageOfAchievementsUnlockedStats:undefined,
    textOfTotalNumberOfAchievementsStats:undefined,
    textOfNumberOfBoughtUpgradesStats:undefined,
    textOfTotalNumberOfUpgradesStats:undefined,
    textOfPercentageOfUpgradesBoughtStats:undefined,
    textOfNumberOfCloudsClickedStats:undefined,
    textofNumberOfExperiencePointsStats:undefined,
    textOfDropsToNextExperiencePointStats:undefined,
    textOfAlienDrainStats:undefined,
    mntEewPercStats:undefined,
    mntEewMultStats:undefined,
    experiencePointsToSpendStats:undefined,
    firstStartedStats:undefined,
    runStartedStats:undefined,
    alertNotification:undefined,
    alertNotificationContent: undefined,
    fillTheOceansButton: undefined,
    textOfDropsInOcean: undefined,
    textOfDropsInOceanTab: undefined,
    textOfPercentageDropsInOcean: undefined,
    textOfPercentageDropsInOceanTab: undefined,
    oceanProgressBar: undefined,
    buyBuildingModeButton1: undefined,
    buyBuildingModeButton10: undefined,
    buyBuildingModeButton100: undefined,
    textOfNumberOfDropsPerClickStats: undefined,
    cloud: undefined,
    sun:undefined,
    waterContainer: undefined,

    textOfDropsInBankBoost: undefined,
    buyAllUpgradesButton: undefined,
    stormTimer:undefined,
    buildingSpecialsImage: undefined,
    buildingSpecialsTitle: undefined,
    buildingSpecialsBar:undefined,
    buildingSpecialsDiv:undefined,
    clickStormTimer:undefined,
    alienContainer: undefined,
    nextMeetingWithAliensDiv:undefined,
    textNextMeetingWithAliensStats:undefined,
    experiencePointsProgressBarLevel:undefined,
    knowhowDrag:undefined,
	dragstarDiv:undefined,
    superdragDiv:undefined,
    knowhowUpgradesDiv:undefined,
    zoominput: undefined,
    zoombuttonmin: undefined,
    zoombuttonplus: undefined,
    knowhowscreenExpStats: undefined,
    knowhowscreenKnowhowStats: undefined,
    knowhowButton:undefined,
    knowhowScreen:undefined,
    knowhowBackButton: undefined,
    restartWithKnowhowButton: undefined,
    textOfKnowhowStats:undefined,
    textOfKnowhowEffectivenessStats:undefined,
    poseidonImage:undefined,
    templeImage:undefined,
    poseidonSacrifice: undefined,
    poseidonSacrificeCloseButton: undefined,
    sacrificeDiv: undefined,
    prayerDiv:undefined,
    secondPrayerDiv: undefined,
    prayerSelectDiv:undefined,
    prayerSelectDivCloseButton:undefined,
    weatherstationImage:undefined,
    weatherstationDiv:undefined,
    upgradeWeatherstationDiv:undefined,
    weatherstationDivCloseButton:undefined,
    weatherstationDivActiveButton:undefined,
    verbodDiv:undefined,
    weatherstationDivActiveText:undefined,
    laserCanvas:undefined,
    exportButton:undefined,
    importButton:undefined,
    saveAsFileButton:undefined,
    loadFileButton:undefined,
    resetButton: undefined,
    numbersSelect:undefined,
    littleDropOptionCheckbox:undefined,
    showNumberOnScreenAfterCLickOptionCheckbox:undefined,
    spinningBackgroundCheckbox:undefined,
    movingWaterOptionCheckbox:undefined,
    animateBigDropOptionCheckbox:undefined,
    volumePerc:undefined,
    volumeSlider:undefined,
    cloudSoundOptionCheckbox:undefined,
    clickSoundOptionCheckbox:undefined,
    calculationHelpingHandHeading:undefined,
    calculationPipetteHeading:undefined,
    calculationAirDryerHeading:undefined,
    calculationBucketHeading:undefined,
    calculationRaindanceHeading:undefined,
    calculationFaucetHeading:undefined,
    calculationGardenHoseHeading:undefined,
    calculationTruckHeading:undefined,
    calculationFireHoseHeading:undefined,
    calculationIceMineHeading:undefined,
    calculationSpaceshipHeading:undefined,
    calculationWormholeHeading:undefined,
    calculationRiverHeading:undefined,
    calculationColliderHeading:undefined,
    introScreen:undefined,
    endScreenA:undefined,
    endAStartOverButton:undefined,
    endAHelpAliensButton:undefined,
    endScreenB:undefined,
    endBStartOverButton:undefined,
    endBInfinityButton:undefined,
    endScreenC:undefined,
    endCStartOverButton:undefined,
    dropContainer:undefined,
    littleBackgroundDropsCheckbox:undefined,
    carparkGame:undefined,
    rainbow:undefined,
    goldcoin:undefined,
    levelUpHelpers:undefined,
    levelUpHelpersBacktogameButton:undefined,
    levelUpGoldenCoins:undefined,
    goldcoinNumber:undefined,
           
        //level up helper buttons
        levelUpHelpinghandButton: undefined,
        levelUpPipetteButton: undefined,
        levelUpAirdryerButton: undefined,
        levelUpBucketButton: undefined,
        levelUpRaindanceButton: undefined,
        levelUpFaucetButton: undefined,
        levelUpGardenhoseButton: undefined,
        levelUpTruckButton: undefined,
        levelUpFirehoseButton: undefined,
        levelUpIcemineButton: undefined,
        levelUpSpaceshipButton: undefined,
        levelUpWormholeButton: undefined,
        levelUpRiverButton: undefined,
        levelUpColliderButton: undefined,

        //levelup minigame buttons
        levelUpHelpinghandStartMinigameButton: undefined,
        levelUpPipetteStartMinigameButton: undefined,
        levelUpAirdryerStartMinigameButton: undefined,
        levelUpBucketStartMinigameButton: undefined,
        levelUpRaindanceStartMinigameButton: undefined,
        levelUpFaucetStartMinigameButton: undefined,
        levelUpGardenhoseStartMinigameButton: undefined,
        levelUpTruckstartMinigameButton: undefined,
        levelUpFirehoseStartMinigameButton: undefined,
        levelUpIcemineStartMinigameButton: undefined,
        levelUpSpaceshipStartMinigameButton: undefined,
        levelUpWormholeStartMinigameButton: undefined,
        levelUpRiverStartMinigameButton: undefined,
        levelUpColliderStartMinigameButton: undefined,

        //calculation dom elements
        //helping hands (hh)
        chh_q:undefined,        //quantity
        chh_bp:undefined,       //basic production
        chh_bp_res:undefined,   //result of q . bp
        chh_u:undefined,        // multiplier from upgrades
        chh_u_res:undefined,    //result bp_res . multipl from upgrades
        chh_hh:undefined,       // +drops from hh upgrades
        chh_hh_res:undefined,   // result u_res +  chh_hh
        chh_l:undefined,        // +% from life upgrades
        chh_l_res:undefined,    // result hh_res + %  chh_l
        chh_bb: undefined,      // +% from drops in bank
        chh_bb_res: undefined,  // result lres + % chh_bb
        chh_at:undefined,       // +% from alien tech
        chh_at_res:undefined,   // resulte bb_res + % at
        chh_me: undefined,      // +% from achievements Mtn Eew * crazu-yscientistboost
        chh_me_sc: undefined,   // % of achievements
        chh_me_scboost:undefined,   //crazysc boost
        chh_me_res:undefined,   // results ar_res + % me
        chh_cbf_p:undefined,    // collaboration upgrades effects
        chh_cbf_q:undefined,
        chh_cbf_res:undefined,
        chh_cbl_p:undefined,
        chh_cbl_q:undefined,
        chh_cbl_res:undefined,
        chh_lvl:undefined,
        chh_lvl_pres:undefined,
        chh_lvl_res:undefined,
        chh_st:undefined,       // * storm multiplier
        chh_st_res:undefined,   // result meres * storm multiplier
        chh_tu:undefined,       // * turbo multiplier
        chh_tu_res:undefined,   // result turbomultiplier
        chh_hs:undefined,       // * helpers special mult.
        chh_hs_res:undefined,   // result stres * helper special
        chh_dio:undefined,      // +% of drops in ocean
        chh_dio_res:undefined,  // result of hs-res +% dio
        chh_kh:undefined,       // +% of effective knowhow
        chh_kh_res:undefined,   // result of diores +% effective knowhow
        chh_pb:undefined,       // +10% if prayer "bonus" is active
        chh_pb_res:undefined,   // result of + prayer "bonus" effect
        chh_pbb:undefined,       // +20% if prayer "Big bonus" is active
        chh_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        chh_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        chh_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        chh_pd:undefined,       // x2 if prayer "Double" is active
        chh_pd_res:undefined,   // result of + prayer "Double" effect
        chh_da:undefined,       // -% drained by aliens
        chh_da_res:undefined,   // result khres-drained by aliens
        chh_total:undefined,    // totaal van helping hand

        //pipettes (p)
        cp_q:undefined,        //quantity
        cp_bp:undefined,       //basic production
        cp_bp_res:undefined,   //result of q . bp
        cp_u:undefined,        // multiplier from upgrades
        cp_u_res:undefined,    //result bp_res . multipl from upgrades
        cp_hh:undefined,       // +drops from hh upgrades
        cp_hh_res:undefined,   // result u_res +  cp_hh
        cp_l:undefined,        // +% from life upgrades
        cp_l_res:undefined,    // result hh_res + %  cp_l
        cp_bb: undefined,      // +% from drops in bank
        cp_bb_res: undefined,  // result lres + % cp_bb
        cp_at:undefined,       // +% from alien tech
        cp_at_res:undefined,   // resulte bb_res + % at
        cp_me: undefined,      // +% from achievements Mtn Eew * crazu-yscientistboost
        cp_me_sc: undefined,   // % of achievements
        cp_me_scboost:undefined,   //crazysc boost
        cp_me_res:undefined,   // results ar_res + % me
        cp_cbf_p:undefined,    // collaboration upgrades effects
        cp_cbf_q:undefined,
        cp_cbf_res:undefined,
        cp_cbl_p:undefined,
        cp_cbl_q:undefined,
        cp_cbl_res:undefined,
        cp_lvl:undefined,
        cp_lvl_pres:undefined,
        cp_lvl_res:undefined,
        cp_ppl:undefined,       // pipettelicious prayer
        cp_ppl_res:undefined,
        cp_st:undefined,       // * storm multiplier
        cp_st_res:undefined,   // result meres * storm multiplier
        cp_tu:undefined,       // * turbo multiplier
        cp_tu_res:undefined,   // result turbomultiplier
        cp_hs:undefined,       // * helpers special mult.
        cp_hs_res:undefined,   // result stres * helper special
        cp_dio:undefined,      // +% of drops in ocean
        cp_dio_res:undefined,  // result of hs-res +% dio
        cp_kh:undefined,       // +% of effective knowhow
        cp_kh_res:undefined,   // result of diores +% effective knowhow
        cp_pb:undefined,       // +10% if prayer "bonus" is active
        cp_pb_res:undefined,   // result of + prayer "bonus" effect
        cp_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cp_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cp_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cp_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cp_pd:undefined,       // x2 if prayer "Double" is active
        cp_pd_res:undefined,   // result of + prayer "Double" effect
        cp_da:undefined,       // -% drained by aliens
        cp_da_res:undefined,   // result khres-drained by aliens
        cp_total:undefined,    // totaal van helping hand

        //air dryers (ad)
        cad_q:undefined,        //quantity
        cad_bp:undefined,       //basic production
        cad_bp_res:undefined,   //result of q . bp
        cad_u:undefined,        // multiplier from upgrades
        cad_u_res:undefined,    //result bp_res . multipl from upgrades
        cad_hh:undefined,       // +drops from hh upgrades
        cad_hh_res:undefined,   // result u_res +  cad_hh
        cad_l:undefined,        // +% from life upgrades
        cad_l_res:undefined,    // result hh_res + %  cad_l
        cad_bb: undefined,      // +% from drops in bank
        cad_bb_res: undefined,  // result lres + % cad_bb
        cad_at:undefined,       // +% from alien tech
        cad_at_res:undefined,   // resulte bb_res + % at
        cad_me: undefined,      // +% from achievements Mtn Eew * crazu-yscientistboost
        cad_me_sc: undefined,   // % of achievements
        cad_me_scboost:undefined,   //crazysc boost
        cad_me_res:undefined,   // results ar_res + % me
        cad_cbf_p:undefined,    // collaboration upgrades effects
        cad_cbf_q:undefined,
        cad_cbf_res:undefined,
        cad_cbl_p:undefined,
        cad_cbl_q:undefined,
        cad_cbl_res:undefined,
        cad_lvl:undefined,
        cad_lvl_pres:undefined,
        cad_lvl_res:undefined,
        cad_st:undefined,       // * storm multiplier
        cad_st_res:undefined,   // result meres * storm multiplier
        cad_tu:undefined,       // * turbo multiplier
        cad_tu_res:undefined,   // result turbomultiplier
        cad_hs:undefined,       // * helpers special mult.
        cad_hs_res:undefined,   // result stres * helper special
        cad_dio:undefined,      // +% of drops in ocean
        cad_dio_res:undefined,  // result of hs-res +% dio
        cad_kh:undefined,       // +% of effective knowhow
        cad_kh_res:undefined,   // result of diores +% effective knowhow
        cad_pb:undefined,       // +10% if prayer "bonus" is active
        cad_pb_res:undefined,   // result of + prayer "bonus" effect
        cad_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cad_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cad_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cad_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cad_pd:undefined,       // x2 if prayer "Double" is active
        cad_pd_res:undefined,   // result of + prayer "Double" effect
        cad_da:undefined,       // -% drained by aliens
        cad_da_res:undefined,   // result khres-drained by aliens
        cad_total:undefined,    // totaal van helping hand

         //bucket (bu)
         cbu_q:undefined,        //quantity
         cbu_bp:undefined,       //basic production
         cbu_bp_res:undefined,   //result of q . bp
         cbu_u:undefined,        // multiplier from upgrades
         cbu_u_res:undefined,    //result bp_res . multipl from upgrades
         cbu_hh:undefined,       // +drops from hh upgrades
         cbu_hh_res:undefined,   // result u_res +  cbu_hh
         cbu_l:undefined,        // +% from life upgrades
         cbu_l_res:undefined,    // result hh_res + %  cbu_l
         cbu_bb: undefined,      // +% from drops in bank
         cbu_bb_res: undefined,  // result lres + % cbu_bb
         cbu_at:undefined,       // +% from alien tech
         cbu_at_res:undefined,   // resulte bb_res + % at
         cbu_me: undefined,      // +% from achievements Mtn Eew * crazu-yscientistboost
         cbu_me_sc: undefined,   // % of achievements
         cbu_me_scboost:undefined,   //crazysc boost
         cbu_me_res:undefined,   // results ar_res + % me
         cbu_cbf_p:undefined,    // collaboration upgrades effects
         cbu_cbf_q:undefined,
         cbu_cbf_res:undefined,
         cbu_cbl_p:undefined,
         cbu_cbl_q:undefined,
         cbu_cbl_res:undefined,
         cbu_lvl:undefined,
         cbu_lvl_pres:undefined,
         cbu_lvl_res:undefined,
         cbu_st:undefined,       // * storm multiplier
         cbu_st_res:undefined,   // result meres * storm multiplier
         cbu_tu:undefined,       // * turbo multiplier
         cbu_tu_res:undefined,   // result turbomultiplier
         cbu_hs:undefined,       // * helpers special mult.
         cbu_hs_res:undefined,   // result stres * helper special
         cbu_dio:undefined,      // +% of drops in ocean
         cbu_dio_res:undefined,  // result of hs-res +% dio
         cbu_kh:undefined,       // +% of effective knowhow
         cbu_kh_res:undefined,   // result of diores +% effective knowhow
         cbu_pb:undefined,       // +10% if prayer "bonus" is active
         cbu_pb_res:undefined,   // result of + prayer "bonus" effect
         cbu_pbb:undefined,       // +20% if prayer "Big bonus" is active
         cbu_pbb_res:undefined,   // result of + prayer "Big bonus" effect
         cbu_eb:undefined,       // +60% if prayer "Enormous bonus" is active
         cbu_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
         cbu_pd:undefined,       // x2 if prayer "Double" is active
         cbu_pd_res:undefined,   // result of + prayer "Double" effect
         cbu_da:undefined,       // -% drained by aliens
         cbu_da_res:undefined,   // result khres-drained by aliens
         cbu_total:undefined,    // totaal van helping hand

          //raindance (ra)
          cra_q:undefined,        //quantity
          cra_bp:undefined,       //basic production
          cra_bp_res:undefined,   //result of q . bp
          cra_u:undefined,        // multiplier from upgrades
          cra_u_res:undefined,    //result bp_res . multipl from upgrades
          cra_hh:undefined,       // +drops from hh upgrades
          cra_hh_res:undefined,   // result u_res +  cra_hh
          cra_l:undefined,        // +% from life upgrades
          cra_l_res:undefined,    // result hh_res + %  cra_l
          cra_bb: undefined,      // +% from drops in bank
          cra_bb_res: undefined,  // result lres + % cra_bb
          cra_at:undefined,       // +% from alien tech
          cra_at_res:undefined,   // resulte bb_res + % at
          cra_me: undefined,      // +% from achievements Mtn Eew * crazu-yscientistboost
          cra_me_sc: undefined,   // % of achievements
          cra_me_scboost:undefined,   //crazysc boost
          cra_me_res:undefined,   // results ar_res + % me
          cra_cbf_p:undefined,    // collaboration upgrades effects
          cra_cbf_q:undefined,
          cra_cbf_res:undefined,
          cra_cbl_p:undefined,
          cra_cbl_q:undefined,
          cra_cbl_res:undefined,
          cra_lvl:undefined,
          cra_lvl_pres:undefined,
          cra_lvl_res:undefined,
          cra_st:undefined,       // * storm multiplier
          cra_st_res:undefined,   // result meres * storm multiplier
          cra_tu:undefined,       // * turbo multiplier
          cra_tu_res:undefined,   // result turbomultiplier
          cra_hs:undefined,       // * helpers special mult.
          cra_hs_res:undefined,   // result stres * helper special
          cra_dio:undefined,      // +% of drops in ocean
          cra_dio_res:undefined,  // result of hs-res +% dio
          cra_kh:undefined,       // +% of effective knowhow
          cra_kh_res:undefined,   // result of diores +% effective knowhow
          cra_pb:undefined,       // +10% if prayer "bonus" is active
          cra_pb_res:undefined,   // result of + prayer "bonus" effect
          cra_pbb:undefined,       // +20% if prayer "Big bonus" is active
          cra_pbb_res:undefined,   // result of + prayer "Big bonus" effect
          cra_eb:undefined,       // +60% if prayer "Enormous bonus" is active
          cra_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
          cra_pd:undefined,       // x2 if prayer "Double" is active
          cra_pd_res:undefined,   // result of + prayer "Double" effect
          cra_da:undefined,       // -% drained by aliens
          cra_da_res:undefined,   // result khres-drained by aliens
          cra_total:undefined,    // totaal van helping hand

        //faucet (fa)
        cfa_q:undefined,        //quantity
        cfa_bp:undefined,       //basic production
        cfa_bp_res:undefined,   //result of q . bp
        cfa_u:undefined,        // multiplier from upgrades
        cfa_u_res:undefined,    //result bp_res . multipl from upgrades
        cfa_hh:undefined,       // +drops from hh upgrades
        cfa_hh_res:undefined,   // result u_res +  cfa_hh
        cfa_l:undefined,        // +% from life upgrades
        cfa_l_res:undefined,    // result hh_res + %  cfa_l
        cfa_bb: undefined,      // +% from drops in bank
        cfa_bb_res: undefined,  // result lres + % cfa_bb
        cfa_at:undefined,       // +% from alien tech
        cfa_at_res:undefined,   // resulte bb_res + % at
        cfa_me: undefined,      // +% from achievements Mtn Eew * cfazu-yscientistboost
        cfa_me_sc: undefined,   // % of achievements
        cfa_me_scboost:undefined,   //cfazysc boost
        cfa_me_res:undefined,   // results ar_res + % me
        cfa_cbf_p:undefined,    // collaboration upgrades effects
        cfa_cbf_q:undefined,
        cfa_cbf_res:undefined,
        cfa_cbl_p:undefined,
        cfa_cbl_q:undefined,
        cfa_cbl_res:undefined,
        cfa_lvl:undefined,
        cfa_lvl_pres:undefined,
        cfa_lvl_res:undefined,
        cfa_st:undefined,       // * storm multiplier
        cfa_st_res:undefined,   // result meres * storm multiplier
        cfa_tu:undefined,       // * turbo multiplier
        cfa_tu_res:undefined,   // result turbomultiplier
        cfa_hs:undefined,       // * helpers special mult.
        cfa_hs_res:undefined,   // result stres * helper special
        cfa_dio:undefined,      // +% of drops in ocean
        cfa_dio_res:undefined,  // result of hs-res +% dio
        cfa_kh:undefined,       // +% of effective knowhow
        cfa_kh_res:undefined,   // result of diores +% effective knowhow
        cfa_pb:undefined,       // +10% if prayer "bonus" is active
        cfa_pb_res:undefined,   // result of + prayer "bonus" effect
        cfa_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cfa_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cfa_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cfa_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cfa_pd:undefined,       // x2 if prayer "Double" is active
        cfa_pd_res:undefined,   // result of + prayer "Double" effect
        cfa_da:undefined,       // -% drained by aliens
        cfa_da_res:undefined,   // result khres-drained by aliens
        cfa_total:undefined,    // totaal van helping hand

        //garden hose (gh)
        cgh_q:undefined,        //quantity
        cgh_bp:undefined,       //basic production
        cgh_bp_res:undefined,   //result of q . bp
        cgh_u:undefined,        // multiplier from upgrades
        cgh_u_res:undefined,    //result bp_res . multipl from upgrades
        cgh_hh:undefined,       // +drops from hh upgrades
        cgh_hh_res:undefined,   // result u_res +  cgh_hh
        cgh_l:undefined,        // +% from life upgrades
        cgh_l_res:undefined,    // result hh_res + %  cgh_l
        cgh_bb: undefined,      // +% from drops in bank
        cgh_bb_res: undefined,  // result lres + % cgh_bb
        cgh_at:undefined,       // +% from alien tech
        cgh_at_res:undefined,   // resulte bb_res + % at
        cgh_me: undefined,      // +% from achievements Mtn Eew * cghzu-yscientistboost
        cgh_me_sc: undefined,   // % of achievements
        cgh_me_scboost:undefined,   //cghzysc boost
        cgh_me_res:undefined,   // results ar_res + % me
        cgh_cbf_p:undefined,    // collaboration upgrades effects
        cgh_cbf_q:undefined,
        cgh_cbf_res:undefined,
        cgh_cbl_p:undefined,
        cgh_cbl_q:undefined,
        cgh_cbl_res:undefined,
        cgh_lvl:undefined,
        cgh_lvl_pres:undefined,
        cgh_lvl_res:undefined,
        cgh_st:undefined,       // * storm multiplier
        cgh_st_res:undefined,   // result meres * storm multiplier
        cgh_tu:undefined,       // * turbo multiplier
        cgh_tu_res:undefined,   // result turbomultiplier
        cgh_hs:undefined,       // * helpers special mult.
        cgh_hs_res:undefined,   // result stres * helper special
        cgh_dio:undefined,      // +% of drops in ocean
        cgh_dio_res:undefined,  // result of hs-res +% dio
        cgh_kh:undefined,       // +% of effective knowhow
        cgh_kh_res:undefined,   // result of diores +% effective knowhow
        cgh_pb:undefined,       // +10% if prayer "bonus" is active
        cgh_pb_res:undefined,   // result of + prayer "bonus" effect
        cgh_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cgh_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cgh_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cgh_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cgh_pd:undefined,       // x2 if prayer "Double" is active
        cgh_pd_res:undefined,   // result of + prayer "Double" effect
        cgh_da:undefined,       // -% drained by aliens
        cgh_da_res:undefined,   // result khres-drained by aliens
        cgh_total:undefined,    // totaal van helping hand

        //truck (tr)
        ctr_q:undefined,        //quantity
        ctr_bp:undefined,       //basic production
        ctr_bp_res:undefined,   //result of q . bp
        ctr_u:undefined,        // multiplier from upgrades
        ctr_u_res:undefined,    //result bp_res . multipl from upgrades
        ctr_hh:undefined,       // +drops from hh upgrades
        ctr_hh_res:undefined,   // result u_res +  ctr_hh
        ctr_l:undefined,        // +% from life upgrades
        ctr_l_res:undefined,    // result hh_res + %  ctr_l
        ctr_bb: undefined,      // +% from drops in bank
        ctr_bb_res: undefined,  // result lres + % ctr_bb
        ctr_at:undefined,       // +% from alien tech
        ctr_at_res:undefined,   // resulte bb_res + % at
        ctr_me: undefined,      // +% from achievements Mtn Eew * ctrzu-yscientistboost
        ctr_me_sc: undefined,   // % of achievements
        ctr_me_scboost:undefined,   //ctrzysc boost
        ctr_me_res:undefined,   // results ar_res + % me
        ctr_cbf_p:undefined,    // collaboration upgrades effects
        ctr_cbf_q:undefined,
        ctr_cbf_res:undefined,
        ctr_cbl_p:undefined,
        ctr_cbl_q:undefined,
        ctr_cbl_res:undefined,
        ctr_lvl:undefined,
        ctr_lvl_pres:undefined,
        ctr_lvl_res:undefined,
        ctr_mb:undefined,
        ctr_mb_res:undefined,
        ctr_st:undefined,       // * storm multiplier
        ctr_st_res:undefined,   // result meres * storm multiplier
        ctr_tu:undefined,       // * turbo multiplier
        ctr_tu_res:undefined,   // result turbomultiplier
        ctr_hs:undefined,       // * helpers special mult.
        ctr_hs_res:undefined,   // result stres * helper special
        ctr_dio:undefined,      // +% of drops in ocean
        ctr_dio_res:undefined,  // result of hs-res +% dio
        ctr_kh:undefined,       // +% of effective knowhow
        ctr_kh_res:undefined,   // result of diores +% effective knowhow
        ctr_pb:undefined,       // +10% if prayer "bonus" is active
        ctr_pb_res:undefined,   // result of + prayer "bonus" effect
        ctr_pbb:undefined,       // +20% if prayer "Big bonus" is active
        ctr_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        ctr_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        ctr_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        ctr_pd:undefined,       // x2 if prayer "Double" is active
        ctr_pd_res:undefined,   // result of + prayer "Double" effect
        ctr_da:undefined,       // -% drained by aliens
        ctr_da_res:undefined,   // result khres-drained by aliens
        ctr_total:undefined,    // totaal van helping hand

        //fire hose (fh)
        cfh_q:undefined,        //quantity
        cfh_bp:undefined,       //basic production
        cfh_bp_res:undefined,   //result of q . bp
        cfh_u:undefined,        // multiplier from upgrades
        cfh_u_res:undefined,    //result bp_res . multipl from upgrades
        cfh_hh:undefined,       // +drops from hh upgrades
        cfh_hh_res:undefined,   // result u_res +  cfh_hh
        cfh_l:undefined,        // +% from life upgrades
        cfh_l_res:undefined,    // result hh_res + %  cfh_l
        cfh_bb: undefined,      // +% from drops in bank
        cfh_bb_res: undefined,  // result lres + % cfh_bb
        cfh_at:undefined,       // +% from alien tech
        cfh_at_res:undefined,   // resulte bb_res + % at
        cfh_me: undefined,      // +% from achievements Mtn Eew * cfhzu-yscientistboost
        cfh_me_sc: undefined,   // % of achievements
        cfh_me_scboost:undefined,   //cfhzysc boost
        cfh_me_res:undefined,   // results ar_res + % me
        cfh_cbf_p:undefined,    // collaboration upgrades effects
        cfh_cbf_q:undefined,
        cfh_cbf_res:undefined,
        cfh_cbl_p:undefined,
        cfh_cbl_q:undefined,
        cfh_cbl_res:undefined,
        cfh_lvl:undefined,
        cfh_lvl_pres:undefined,
        cfh_lvl_res:undefined,
        cfh_st:undefined,       // * storm multiplier
        cfh_st_res:undefined,   // result meres * storm multiplier
        cfh_tu:undefined,       // * turbo multiplier
        cfh_tu_res:undefined,   // result turbomultiplier
        cfh_hs:undefined,       // * helpers special mult.
        cfh_hs_res:undefined,   // result stres * helper special
        cfh_dio:undefined,      // +% of drops in ocean
        cfh_dio_res:undefined,  // result of hs-res +% dio
        cfh_kh:undefined,       // +% of effective knowhow
        cfh_kh_res:undefined,   // result of diores +% effective knowhow
        cfh_pb:undefined,       // +10% if prayer "bonus" is active
        cfh_pb_res:undefined,   // result of + prayer "bonus" effect
        cfh_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cfh_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cfh_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cfh_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cfh_pd:undefined,       // x2 if prayer "Double" is active
        cfh_pd_res:undefined,   // result of + prayer "Double" effect
        cfh_da:undefined,       // -% drained by aliens
        cfh_da_res:undefined,   // result khres-drained by aliens
        cfh_total:undefined,    // totaal van helping hand

        //Ice mine (im)
        cim_q:undefined,        //quantity
        cim_bp:undefined,       //basic production
        cim_bp_res:undefined,   //result of q . bp
        cim_u:undefined,        // multiplier from upgrades
        cim_u_res:undefined,    //result bp_res . multipl from upgrades
        cim_hh:undefined,       // +drops from hh upgrades
        cim_hh_res:undefined,   // result u_res +  cim_hh
        cim_l:undefined,        // +% from life upgrades
        cim_l_res:undefined,    // result hh_res + %  cim_l
        cim_bb: undefined,      // +% from drops in bank
        cim_bb_res: undefined,  // result lres + % cim_bb
        cim_at:undefined,       // +% from alien tech
        cim_at_res:undefined,   // resulte bb_res + % at
        cim_me: undefined,      // +% from achievements Mtn Eew * cimzu-yscientistboost
        cim_me_sc: undefined,   // % of achievements
        cim_me_scboost:undefined,   //cimzysc boost
        cim_me_res:undefined,   // results ar_res + % me
        cim_cbf_p:undefined,    // collaboration upgrades effects
        cim_cbf_q:undefined,
        cim_cbf_res:undefined,
        cim_cbl_p:undefined,
        cim_cbl_q:undefined,
        cim_cbl_res:undefined,
        cim_lvl:undefined,
        cim_lvl_pres:undefined,
        cim_lvl_res:undefined,
        cim_st:undefined,       // * storm multiplier
        cim_st_res:undefined,   // result meres * storm multiplier
        cim_tu:undefined,       // * turbo multiplier
        cim_tu_res:undefined,   // result turbomultiplier
        cim_hs:undefined,       // * helpers special mult.
        cim_hs_res:undefined,   // result stres * helper special
        cim_dio:undefined,      // +% of drops in ocean
        cim_dio_res:undefined,  // result of hs-res +% dio
        cim_kh:undefined,       // +% of effective knowhow
        cim_kh_res:undefined,   // result of diores +% effective knowhow
        cim_pb:undefined,       // +10% if prayer "bonus" is active
        cim_pb_res:undefined,   // result of + prayer "bonus" effect
        cim_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cim_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cim_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cim_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cim_pd:undefined,       // x2 if prayer "Double" is active
        cim_pd_res:undefined,   // result of + prayer "Double" effect
        cim_da:undefined,       // -% drained by aliens
        cim_da_res:undefined,   // result khres-drained by aliens
        cim_total:undefined,    // totaal van helping hand

        //Spaceship (sp)
        csp_q:undefined,        //quantity
        csp_bp:undefined,       //basic production
        csp_bp_res:undefined,   //result of q . bp
        csp_u:undefined,        // multiplier from upgrades
        csp_u_res:undefined,    //result bp_res . multipl from upgrades
        csp_hh:undefined,       // +drops from hh upgrades
        csp_hh_res:undefined,   // result u_res +  csp_hh
        csp_l:undefined,        // +% from life upgrades
        csp_l_res:undefined,    // result hh_res + %  csp_l
        csp_bb: undefined,      // +% from drops in bank
        csp_bb_res: undefined,  // result lres + % csp_bb
        csp_at:undefined,       // +% from alien tech
        csp_at_res:undefined,   // resulte bb_res + % at
        csp_me: undefined,      // +% from achievements Mtn Eew * cspzu-yscientistboost
        csp_me_sc: undefined,   // % of achievements
        csp_me_scboost:undefined,   //cspzysc boost
        csp_me_res:undefined,   // results ar_res + % me
        csp_cbf_p:undefined,    // collaboration upgrades effects
        csp_cbf_q:undefined,
        csp_cbf_res:undefined,
        csp_cbl_p:undefined,
        csp_cbl_q:undefined,
        csp_cbl_res:undefined,
        csp_lvl:undefined,
        csp_lvl_pres:undefined,
        csp_lvl_res:undefined,
        csp_st:undefined,       // * storm multiplier
        csp_st_res:undefined,   // result meres * storm multiplier
        csp_tu:undefined,       // * turbo multiplier
        csp_tu_res:undefined,   // result turbomultiplier
        csp_hs:undefined,       // * helpers special mult.
        csp_hs_res:undefined,   // result stres * helper special
        csp_dio:undefined,      // +% of drops in ocean
        csp_dio_res:undefined,  // result of hs-res +% dio
        csp_kh:undefined,       // +% of effective knowhow
        csp_kh_res:undefined,   // result of diores +% effective knowhow
        csp_pb:undefined,       // +10% if prayer "bonus" is active
        csp_pb_res:undefined,   // result of + prayer "bonus" effect
        csp_pbb:undefined,       // +20% if prayer "Big bonus" is active
        csp_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        csp_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        csp_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        csp_pd:undefined,       // x2 if prayer "Double" is active
        csp_pd_res:undefined,   // result of + prayer "Double" effect
        csp_da:undefined,       // -% drained by aliens
        csp_da_res:undefined,   // result khres-drained by aliens
        csp_total:undefined,    // totaal van helping hand

        //Wormhole (wo)
        cwo_q:undefined,        //quantity
        cwo_bp:undefined,       //basic production
        cwo_bp_res:undefined,   //result of q . bp
        cwo_u:undefined,        // multiplier from upgrades
        cwo_u_res:undefined,    //result bp_res . multipl from upgrades
        cwo_hh:undefined,       // +drops from hh upgrades
        cwo_hh_res:undefined,   // result u_res +  cwo_hh
        cwo_l:undefined,        // +% from life upgrades
        cwo_l_res:undefined,    // result hh_res + %  cwo_l
        cwo_bb: undefined,      // +% from drops in bank
        cwo_bb_res: undefined,  // result lres + % cwo_bb
        cwo_at:undefined,       // +% from alien tech
        cwo_at_res:undefined,   // resulte bb_res + % at
        cwo_me: undefined,      // +% from achievements Mtn Eew * cwozu-yscientistboost
        cwo_me_sc: undefined,   // % of achievements
        cwo_me_scboost:undefined,   //cwozysc boost
        cwo_me_res:undefined,   // results ar_res + % me
        cwo_cbf_p:undefined,    // collaboration upgrades effects
        cwo_cbf_q:undefined,
        cwo_cbf_res:undefined,
        cwo_cbl_p:undefined,
        cwo_cbl_q:undefined,
        cwo_cbl_res:undefined,
        cwo_lvl:undefined,
        cwo_lvl_pres:undefined,
        cwo_lvl_res:undefined,
        cwo_st:undefined,       // * storm multiplier
        cwo_st_res:undefined,   // result meres * storm multiplier
        cwo_tu:undefined,       // * turbo multiplier
        cwo_tu_res:undefined,   // result turbomultiplier
        cwo_hs:undefined,       // * helpers special mult.
        cwo_hs_res:undefined,   // result stres * helper special
        cwo_dio:undefined,      // +% of drops in ocean
        cwo_dio_res:undefined,  // result of hs-res +% dio
        cwo_kh:undefined,       // +% of effective knowhow
        cwo_kh_res:undefined,   // result of diores +% effective knowhow
        cwo_pb:undefined,       // +10% if prayer "bonus" is active
        cwo_pb_res:undefined,   // result of + prayer "bonus" effect
        cwo_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cwo_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cwo_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cwo_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cwo_pd:undefined,       // x2 if prayer "Double" is active
        cwo_pd_res:undefined,   // result of + prayer "Double" effect
        cwo_da:undefined,       // -% drained by aliens
        cwo_da_res:undefined,   // result khres-drained by aliens
        cwo_total:undefined,    // totaal van helping hand

        //river (ri)
        cri_q:undefined,        //quantity
        cri_bp:undefined,       //basic production
        cri_bp_res:undefined,   //result of q . bp
        cri_u:undefined,        // multiplier from upgrades
        cri_u_res:undefined,    //result bp_res . multipl from upgrades
        cri_hh:undefined,       // +drops from hh upgrades
        cri_hh_res:undefined,   // result u_res +  cri_hh
        cri_l:undefined,        // +% from life upgrades
        cri_l_res:undefined,    // result hh_res + %  cri_l
        cri_bb: undefined,      // +% from drops in bank
        cri_bb_res: undefined,  // result lres + % cri_bb
        cri_at:undefined,       // +% from alien tech
        cri_at_res:undefined,   // resulte bb_res + % at
        cri_me: undefined,      // +% from achievements Mtn Eew * crizu-yscientistboost
        cri_me_sc: undefined,   // % of achievements
        cri_me_scboost:undefined,   //crizysc boost
        cri_me_res:undefined,   // results ar_res + % me
        cri_cbf_p:undefined,    // collaboration upgrades effects
        cri_cbf_q:undefined,
        cri_cbf_res:undefined,
        cri_cbl_p:undefined,
        cri_cbl_q:undefined,
        cri_cbl_res:undefined,
        cri_lvl:undefined,
        cri_lvl_pres:undefined,
        cri_lvl_res:undefined,
        cri_st:undefined,       // * storm multiplier
        cri_st_res:undefined,   // result meres * storm multiplier
        cri_tu:undefined,       // * turbo multiplier
        cri_tu_res:undefined,   // result turbomultiplier
        cri_hs:undefined,       // * helpers special mult.
        cri_hs_res:undefined,   // result stres * helper special
        cri_dio:undefined,      // +% of drops in ocean
        cri_dio_res:undefined,  // result of hs-res +% dio
        cri_kh:undefined,       // +% of effective knowhow
        cri_kh_res:undefined,   // result of diores +% effective knowhow
        cri_pb:undefined,       // +10% if prayer "bonus" is active
        cri_pb_res:undefined,   // result of + prayer "bonus" effect
        cri_pbb:undefined,       // +20% if prayer "Big bonus" is active
        cri_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        cri_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        cri_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        cri_pd:undefined,       // x2 if prayer "Double" is active
        cri_pd_res:undefined,   // result of + prayer "Double" effect
        cri_da:undefined,       // -% drained by aliens
        cri_da_res:undefined,   // result khres-drained by aliens
        cri_total:undefined,    // totaal van helping hand

        //large H_O collider (lc)
        clc_q:undefined,        //quantity
        clc_bp:undefined,       //basic production
        clc_bp_res:undefined,   //result of q . bp
        clc_u:undefined,        // multiplier from upgrades
        clc_u_res:undefined,    //result bp_res . multipl from upgrades
        clc_hh:undefined,       // +drops from hh upgrades
        clc_hh_res:undefined,   // result u_res +  clc_hh
        clc_l:undefined,        // +% from life upgrades
        clc_l_res:undefined,    // result hh_res + %  clc_l
        clc_bb: undefined,      // +% from drops in bank
        clc_bb_res: undefined,  // result lres + % clc_bb
        clc_at:undefined,       // +% from alien tech
        clc_at_res:undefined,   // resulte bb_res + % at
        clc_me: undefined,      // +% from achievements Mtn Eew * clczu-yscientistboost
        clc_me_sc: undefined,   // % of achievements
        clc_me_scboost:undefined,   //clczysc boost
        clc_me_res:undefined,   // results ar_res + % me
        clc_cbf_p:undefined,    // collaboration upgrades effects
        clc_cbf_q:undefined,
        clc_cbf_res:undefined,
        clc_cbl_p:undefined,
        clc_cbl_q:undefined,
        clc_cbl_res:undefined,
        clc_lvl:undefined,
        cl_lvl_pres:undefined,
        clc_lvl_res:undefined,
        clc_st:undefined,       // * storm multiplier
        clc_st_res:undefined,   // result meres * storm multiplier
        clc_tu:undefined,       // * turbo multiplier
        clc_tu_res:undefined,   // result turbomultiplier
        clc_hs:undefined,       // * helpers special mult.
        clc_hs_res:undefined,   // result stres * helper special
        clc_dio:undefined,      // +% of drops in ocean
        clc_dio_res:undefined,  // result of hs-res +% dio
        clc_kh:undefined,       // +% of effective knowhow
        clc_kh_res:undefined,   // result of diores +% effective knowhow
        clc_pb:undefined,       // +10% if prayer "bonus" is active
        clc_pb_res:undefined,   // result of + prayer "bonus" effect
        clc_pbb:undefined,       // +20% if prayer "Big bonus" is active
        clc_pbb_res:undefined,   // result of + prayer "Big bonus" effect
        clc_eb:undefined,       // +60% if prayer "Enormous bonus" is active
        clc_eb_res:undefined,   // result of + prayer "Enormous bonus" effect
        clc_pd:undefined,       // x2 if prayer "Double" is active
        clc_pd_res:undefined,   // result of + prayer "Double" effect
        clc_da:undefined,       // -% drained by aliens
        clc_da_res:undefined,   // result khres-drained by aliens
        clc_total:undefined,    // totaal van helping hand

    //number variables
    maximumDropsInOcean : 150000000000000000000000000,
    maximumDropsInOceanA : 150000000000000000000000000,
	maximumDropsInOceanB : 150000000000000000000000000000000000,
	maximumDropsInOceanC : 999999999999999999999999999999999999999999999999999,
    dps:0,
    handmadeClicks:0,
    numberOfDropsPerClick:1,
    basicNumberOfDropsPerClick:1,
    percentageOfDpsPerClick:0,
    dropsInBank:0,
    handmadeDrops:0,
    totalDropsThisExperienceLevel:0,
    totalDropsEver:0,
    totalNumberOfBuildings:0,
    totalNumberOfUpgrades:0,
    numberOfAchievementsUnlocked:0,
    achievementsPerc:0,
    dropsInOcean:0,
    oceanPercentage:0,
    waterLevel:0,
    waterLevelOld:0,
    oceanMultiplier:0,
    numberOfCrazyscientists:0,
    crazyscientistsMultiplier:1,
    oldPercBar:0,
    numberOfBgDrops:0,

    //experience and knowhow
    knowhow:0,
    experiencePoints:0,
    oldExperiencePoints:0,
    experienceToSpend:0,
    knowhowUsePerc:20,
    useKnowhow:0,
    knowhowToUndo:0,
    knowhowTouchmoved:false,

    //option variables
    numberOption:0,
    littleDropOption:1,
    showNumberOnScreenAfterCLickOption:1,
    spinningBackground:1,
    decimals:2,
    buyBuildingMode:1,
    cloudSoundOption:0,
    movingWaterOption:1,
    animateBigDropOption:1,
    cloudSoundOption:1,
    clickSoundOption:1,
    bgdropsOption:1,

    // objectlists buildings/upgrades/achievements...
    buildings: [],
    upgrades: [],
    boughtUpgrades: [],
    achievements:[],
    achievementsUnlocked:[],
    knowhowUpgrades:[],
    boughtKnowhowUpgrades: [],
    calculation: [],
    prayers: [],

    aliens: [
        {id:1, startpos:300, angle:67, hover:"hovera hovera-constant"},
        {id:2, startpos:300, angle:95, hover:"hoverb hoverb-constant"},
        {id:3, startpos:300, angle:123, hover:"hoverc hoverc-constant"},
        {id:4, startpos:300, angle:151, hover:"hoverd hoverd-constant"},
        {id:5, startpos:300, angle:180, hover:"hovere hovere-constant"},
        {id:6, startpos:-300, angle:-151, hover:"hoverf hoverf-constant"},
        {id:7, startpos:-300, angle:-123, hover:"hoverg hoverg-constant"},
        {id:8, startpos:-300, angle:-95, hover:"hoverh hoverh-constant"},
        {id:9, startpos:-300, angle:-67, hover:"hoveri hoveri-constant"}
        ],
    
    aliensList: [],
    aliensPopList: [],
    aliensActiveList: [],
    aliensSaveList:[],

    //audio
    channel_max: 10,										// number of audio channels
	audiochannels: [],
 
    init: function(_buildings, _upgrades, _achievements, _knowhowupgrades) {
        var self = this;
        document.title = "Fill The Oceans - v. "+ this.version +" beta";
        $('#version2').text(this.version);

        Poseidon.init();
        //Carpark.init();
        // -- Cache DOM elements
            
            //introscreen
            this.introScreen = $('#introScreen');
            this.introStartButton = $('#startButton');

            //endScreens
            this.endScreenA = $('#endScreenA');
            this.endScreenB = $('#endScreenB');
            this.endScreenC = $('#endScreenC');
            
            //For clicking
            this.bigDrop = $('#bigDrop'); // the big drop in the middel of the screen
            this.optionsSaveButton = $('#save'); // The save button in options
            this.fillTheOceansButton = $('#filloceanbutton'); // The fill the oceans button in the middle of the screen if screen is wide enough
            this.fillTheOceansButtonTab = $('#filloceanbuttontab');
            this.buyBuildingModeButton1 = $('#helper_1'); // The buy building mode buttons
            this.buyBuildingModeButton10 = $('#helper_10');
            this.buyBuildingModeButton100 = $('#helper_100');
            this.buyAllUpgradesButton = $('#buyAllUpgradesButton'); // The buy all button above the upgrades
            this.knowhowButton = $('#knowhow_button');
            this.exportButton = $('#export'); // the export button in the options tab
            this.importButton = $('#import'); // the import button in the options tab
            this.saveAsFileButton = $('#saveAsFile'); // the save a file button in the options tab
            this.loadFileButton = $('#loadFile'); // the Load file button in the options tab
            this.resetButton = $('#reset'); // the reset button in the option tab
            this.endAStartOverButton =$('#endastartover');
            this.endAHelpAliensButton = $('#endahelp');
            this.endBStartOverButton = $('#endbstartover');
            this.endBInfinityButton = $('#endbinfinity');
            this.endCStartOverButton = $('#endcstartover');

            //selects and checkboxes
            this.numbersSelect = $('#numbersSelect'); // The select to select the way numbers are displayed
            this.littleDropOptionCheckbox = $('#littleDropOptionCheckbox'); // the option for showing little drops after click on big drop
            this.showNumberOnScreenAfterCLickOptionCheckbox = $('#showNumberOnScreenAfterCLickOptionCheckbox'); // the option for showing the number of drops you get after clicking in the big drop
            this.spinningBackgroundCheckbox = $('#spinningBackgroundCheckbox'); // the option to stop the background behind the big drop from spinning
            this.movingWaterOptionCheckbox = $('#movingWaterOptionCheckbox'); // the option to stop the bank level water from moving
            this.animateBigDropOptionCheckbox = $('#animateBigDropOptionCheckbox'); // the option to stop the animation of the big drop
            this.cloudSoundOptionCheckbox = $('#cloudSoundOptionCheckbox'); //the option to make a sound when a cloud shows up
            this.clickSoundOptionCheckbox = $('#clickSoundOptionCheckbox'); // the option to make a sound when a clickstorm or wrath starts
            this.calculationHelpingHandHeading = $('#calculationHelpingHandHeading');
            this.calculationPipetteHeading = $('#calculationPipetteHeading');
            this.calculationAirDryerHeading = $('#calculationAirDryerHeading');
            this.calculationBucketHeading = $('#calculationBucketHeading');
            this.calculationRaindanceHeading = $('#calculationRaindanceHeading');
            this.calculationFaucetHeading = $('#calculationFaucetHeading');
            this.calculationGardenHoseHeading = $('#calculationGardenHoseHeading');
            this.calculationTruckHeading = $('#calculationTruckHeading');
            this.calculationFireHoseHeading = $('#calculationFireHoseHeading');
            this.calculationIceMineHeading = $('#calculationIceMineHeading');
            this.calculationSpaceshipHeading = $('#calculationSpaceshipHeading');
            this.calculationWormholeHeading = $('#calculationWormholeHeading');
            this.calculationRiverHeading = $('#calculationRiverHeading');
            this.calculationColliderHeading = $('#calculationColliderHeading');
            this.littleBackgroundDropsCheckbox = $('#littleBackgroundDropsCheckbox');

            // for showing on screen
            this.textOfNumberOfDropsInBank = $('#numberOfDropsInBank'); // the number of drops shown above the big drop
            this.textOfNumberOfDropsInBankStats = $('#drops_in_bank_stats'); // the number of drops in the bank in  stats
            this.textOfNumberOfDropsPerSecond = $('#dps'); // the number of drops per second shown above the big drop
            this.textOfNumberOfDropsPerSecondStats = $('#drops_per_second_stats') // the number of drops per second shown in stats
            this.textOfNumberOfDropsProducedThisExperienceLevelStats = $('#total_amount_produced_stats'); //The number of drops produced this know-how/experience level in stats
            this.textOfNumberOfDropsProducedEverStats = $('#total_ever_stats'); //The number of drops produced ever in stats
            this.textOfNumberOfHandmadeClicksStats = $('#hand-made_clicks_stats'); // The number of handmade clicks in stats
            this.textOfNumberOfHandmadeDropsStats = $('#hand-made_drops_stats'); //The number of handmade drops in stats
            this.textOfNumberOfAchievementsUnlockedStats = $('#unlocked_achievements'); // The number of unlocked achievements on achievements page
            this.textOfPercentageOfAchievementsUnlockedStats = $('#achievements_perc'); // The Percentage of achievements unlocked on achievements page
            this.textOfTotalNumberOfAchievementsStats = $('#total_achievements'); // The total number of achievements on achievementspage
            this.textOfNumberOfBoughtUpgradesStats = $('#bought_upgrades_txt'); // The number of bought upgrades on the upgrades tab in stats
            this.textOfTotalNumberOfUpgradesStats = $('#total_upgrades'); //The total number of upgrades on upgrades tab in stats
            this.textOfPercentageOfUpgradesBoughtStats = $('#upgrades_perc'); //The percentage of upgrades bought on upgrades tab in stats
            this.textOfDropsInOcean = $('#drops-in-ocean'); // The number of drops in the ocean on the tab 
            this.textOfDropsInOceanTab = $('#drops-in-ocean-tab'); // The number of drops in the ocean on the center screen 
            this.textOfPercentageDropsInOcean = $('#percentage-drops-in-ocean'); // THe percentage of drops in ocean on the center screen
            this.textOfPercentageDropsInOceanTab = $('#percentage-drops-in-ocean-tab'); // The percentage of drops in ocean on the tab
            this.oceanProgressBar = $('#progressbarinsideocean'); // THe progressbar drops in ocean not in percentage but logarithmic
            this.textOfNumberOfDropsPerClickStats = $('#drops_per_click_stats'); // The number of drops per click on the stats screen
            this.textOfDropsInBankBoost = $('#bankboost'); // The percentage of boost you get from drops in your bank
            this.textOfNumberOfCloudsClickedStats = $('#cloudclicks_stats'); // The number of clouds clicked on Stats page.
            this.textNextMeetingWithAliensStats = $('#contact_stats'); // The time to next meeting with aliens
            this.textofNumberOfExperiencePointsStats = $('#experience_num'); // The number of experience points shown in stats above progressbar
            this.textOfDropsToNextExperiencePointStats = $('#drops_to_next_exp'); //The number of drops needed for the next experience point
            this.textOfKnowhowStats = $('#knowhow_stats'); // The number of know how on teh stats screen
            this.textOfKnowhowEffectivenessStats = $('#knowhowperc_stats'); // The percentage of knowhow that gets used as multiplier
            this.textOfKnowhowEffectivenessStats.text(this.knowhowUsePerc + " %");
            this.mntEewPercStats = $('#mnteewperc_stats'); // the percent of MntEew in stats
            this.mntEewMultStats = $('#mnteewmult_stats'); // the mntEew multiplier in stats
            this.experiencePointsToSpendStats = $('#experience_stats'); // the experence points to spend in stats
            this.firstStartedStats = $('#first_start'); // when you first started playing the game
            this.runStartedStats = $('#run_start'); // wen this know how level started
            this.textOfAlienDrainStats = $('#aliendrain_stats');
            this.levelUpGoldenCoins = $('#levelUpGoldenCoins');
            this.goldcoinNumber = $('#goldcoinNumber');

            //clouds
            this.cloud = $('#cloud');
            this.stormTimer = $('#stormTimer');
            this.buildingSpecialsImage = $('#buildingSpecialsImage');
            this.buildingSpecialsTitle = $('#buildingSpecialsTitle');
            this.buildingSpecialsBar = $('#buildingSpecialsBar');
            this.buildingSpecialsDiv = $('#buildingSpecialsDiv');
            this.clickStormTimer = $('#clickStormTimer');
            this.turboTimer = $('#turboTimer');
            this.wrathTimer = $('#wrathTimer');

            //sun
            this.sun = $('#sun');

            //aliens
            this.alienContainer = $('#alienContainer');
            this.nextMeetingWithAliensDiv = $('#contactp');

            //notices Div
            this.noticesDiv = $('#noticesDiv');

            //Alert notification over whole screen
            this.alertNotification = $('#alertnotification');
            this.alertNotificationContent = $('#alertnotificationcontent');
            
            //popup
            this.popup = $('#popup');
            this.popupr = $('#popupr');
            this.popuprb = $('#popuprb');
            this.popupAlien = $('#popupAlien');
            this.popupk = $('#popupk');
            this.popupp = $('#popupp')

            //store Div
            this.store = $('#store-container');
            this.upgradesDiv = $('#upgradestore');
            this.boughtUpgradesDiv = $('#bought-upgrades');

            //mntEew Div
            this.mtnEewLevelDiv = $('#progressbarinsidemtn');

            //achievements
            this.achievementsStoreDiv = $('#achievements-store'); //Where achievements go

            //watercontainer
            this.waterContainer = $('#watercontainer'); //the waterwaves container

            //experience points progressbar
            this.experiencePointsProgressBarLevel = $('#exp_progress_level'); 

            //bg drops
            this.dropContainer = $('#dropcontainer');

            //knowhow drag layers
            this.knowhowScreen = $('#knowhowscreen');
            this.knowhowDrag = $('#knowhowdrag');
			this.dragstarDiv = $('#starsdrag');
            this.superdragDiv = $('#superdrag');
            this.knowhowUpgradesDiv = $('#knowhowupgrades');
            this.zoominput = $('#zoominput');
            this.zoombuttonmin = $('#zoombuttonmin');
            this.zoombuttonplus = $('#zoombuttonplus');
            
            this.arrowsArray5 = [$('#arrowsdiv5'),$('#arrowsdiv5b')];
			this.arrowsArray20 = [$('#arrowsdiv20a'),$('#arrowsdiv20b')];
			this.arrowsArray21 = [$('#arrowsdiv21a'),$('#arrowsdiv21b')];
			this.arrowsArray40 = [$('#arrowsdiv40a'),$('#arrowsdiv40b')];
			
			this.arrowsArray = [$('#arrowsdiv2'),$('#arrowsdiv3'),$('#arrowsdiv4'),this.arrowsArray5, 
								$('#arrowsdiv6'), $('#arrowsdiv7'), $('#arrowsdiv8'), $('#arrowsdiv9'), 
								$('#arrowsdiv10'), $('#arrowsdiv11'), $('#arrowsdiv12'), $('#arrowsdiv13'), 
								$('#arrowsdiv14'), $('#arrowsdiv15'), $('#arrowsdiv16'), $('#arrowsdiv17'), 
								$('#arrowsdiv18'), $('#arrowsdiv19'), this.arrowsArray20, this.arrowsArray21,
								$('#arrowsdiv22'),$('#arrowsdiv23'),$('#arrowsdiv24'), $('#arrowsdiv25'),
								$('#arrowsdiv26'),$('#arrowsdiv27'),$('#arrowsdiv28'),$('#arrowsdiv29'),
								$('#arrowsdiv30'),$('#arrowsdiv31'),$('#arrowsdiv32'),$('#arrowsdiv33'),
								$('#arrowsdiv34'),$('#arrowsdiv35'),$('#arrowsdiv36'),$('#arrowsdiv37'),
                                $('#arrowsdiv38'),$('#arrowsdiv39'),this.arrowsArray40, $('#arrowsdiv41')];
                                
            this.knowhowscreenExpStats = $('#knowhowscreen_exp_stats');
            this.knowhowscreenKnowhowStats = $('#knowhowscreen_knowhow_stats');
            this.knowhowBackButton = $('#knowhowbackbutton');
            this.restartWithKnowhowButton = $('#knowhowstart');

            //poseidon image
            this.poseidonImage = $('#poseidonImage'); //image of poseidon activated when poseidon upgrade and poseidon knowhow upgrade bougth

            //prayers
            this.templeImage = $('#templeImage'); // temple to click on to get prayer window
            this.poseidonSacrifice = $('#poseidonSacrifice'); // the prayer window
            this.poseidonSacrificeCloseButton = $('#poseidonSacrificeCloseButton'); // button to close the prayer window
            this.sacrificeDiv = $('#sacrificeDiv'); // click on to make a sacrifice
            this.prayerDiv = $('#prayerDiv'); // first prayer button to open prayer select window
            this.secondPrayerDiv = $('#secondPrayerDiv'); // second prayer button to open prayer select window
            this.prayerSelectDiv = $('#prayerSelectDiv'); // window to select prayer
            this.prayerSelectDivCloseButton = $('#prayerSelectDivCloseButton'); // button to close prayer select window

            //weatherstation
            this.weatherstationImage = $('#weatherstationImage');
            this.weatherstationDiv = $('#weatherstationDiv');
            this.upgradeWeatherstationDiv = $('#upgradeWeatherstationDiv');
            this.weatherstationDivCloseButton = $('#weatherstationDivCloseButton');
            this.weatherstationDivActiveButton = $('#weatherstationDivActiveButton');
            this.verbodDiv = $('#verbod');
            this.weatherstationDivActiveText = $('#weatherstationDivActiveText');

            //laserCanvas
            this.laserCanvas = document.getElementById("laserCanvas");
            this.laserCanvas.width = window.innerWidth;
            this.laserCanvas.height = window.innerHeight;

            //volume of audio
            this.volumePerc = $('#volumepercent');
            this.volumeSlider = $('#volume');

            //minigames
            this.rainbow = $('#rainbow');
            this.goldcoin = $('#goldcoin');
            this.levelUpHelpers = $('#levelUpHelpers');
            this.levelUpHelpersBacktogameButton = $('#levelUpHelpersBacktogameButton');
            this.levelUpHelpinghandButton = $('#levelUpHelpinghandButton');
            this.levelUpPipetteButton = $('#levelUpPipetteButton');
            this.levelUpAirdryerButton = $('#levelUpAirdryerButton');
            this.levelUpBucketButton = $('#levelUpBucketButton');
            this.levelUpRaindanceButton = $('#levelUpRaindanceButton');
            this.levelUpFaucetButton = $('#levelUpFaucetButton');
            this.levelUpGardenhoseButton = $('#levelUpGardenhoseButton');
            this.levelUpTruckButton = $('#levelUpTruckButton');
            this.levelUpFirehoseButton = $('#levelUpFirehoseButton');
            this.levelUpIcemineButton = $('#levelUpIcemineButton');
            this.levelUpSpaceshipButton = $('#levelUpSpaceshipButton');
            this.levelUpWormholeButton = $('#levelUpWormholeButton');
            this.levelUpRiverButton = $('#levelUpRiverButton');
            this.levelUpColliderButton = $('#levelUpColliderButton');

            //set minigame buttons non active
            this._setLevelUpButtonsNonActive();

            // start minigame buttons
            this.levelUpHelpinghandStartMinigameButton = $('#levelUpHelpinghandStartMinigameButton');
            this.levelUpPipetteStartMinigameButton = $('#levelUpPipetteStartMinigameButton');
            this.levelUpAirdryerStartMinigameButton = $('#levelUpAirdryerStartMinigameButton');
            this.levelUpBucketStartMinigameButton = $('#levelUpBucketStartMinigameButton');
            this.levelUpRaindanceStartMinigameButton = $('#levelUpRaindanceStartMinigameButton');
            this.levelUpFaucetStartMinigameButton = $('#levelUpFaucetStartMinigameButton');
            this.levelUpGardenhoseStartMinigameButton = $('#levelUpGardenhoseStartMinigameButton');
            this.levelUpTruckStartMinigameButton = $('#levelUpTruckStartMinigameButton');
            this.levelUpFirehoseStartMinigameButton = $('#levelUpFirehoseStartMinigameButton');
            this.levelUpIcemineStartMinigameButton = $('#levelUpIcemineStartMinigameButton');
            this.levelUpSpaceshipStartMinigameButton = $('#levelUpSpaceshipStartMinigameButton');
            this.levelUpWormholeStartMinigameButton = $('#levelUpWormholeStartMinigameButton');
            this.levelUpRiverStartMinigameButton = $('#levelUpRiverStartMinigameButton');
            this.levelUpColliderStartMinigameButton = $('#levelUpColliderStartMinigameButton');

            //set start minigame buttons non active
            this.levelUpHelpinghandStartMinigameButton.prop('disabled', true);
            this.levelUpPipetteStartMinigameButton.prop('disabled', true);
            this.levelUpAirdryerStartMinigameButton.prop('disabled', true);
            this.levelUpBucketStartMinigameButton.prop('disabled', true);
            this.levelUpRaindanceStartMinigameButton.prop('disabled', true);
            this.levelUpFaucetStartMinigameButton.prop('disabled', true);
            this.levelUpGardenhoseStartMinigameButton.prop('disabled', true);
            this.levelUpTruckStartMinigameButton.prop('disabled', true);
            this.levelUpFirehoseStartMinigameButton.prop('disabled', true);
            this.levelUpIcemineStartMinigameButton.prop('disabled', true);
            this.levelUpSpaceshipStartMinigameButton.prop('disabled', true);
            this.levelUpWormholeStartMinigameButton.prop('disabled', true);
            this.levelUpRiverStartMinigameButton.prop('disabled', true);
            this.levelUpColliderStartMinigameButton.prop('disabled', true);


            //carparkMinigame
            this.carparkGame = $('#carparkGame');

            // calculation dom elements
            //helping hands
            this.chh_q = $('#chh_q');           // quantity of helping hands
            this.chh_bp = $('#chh_bp');         //basic productio of helping hands
            this.chh_bp_res = $('#chh_bp_res'); // result of q . bp
            this.chh_u = $('#chh_u');           // multiplier from upgrades
            this.chh_u_res = $('#chh_u_res');   // result of bp_res . chh_u
            this.chh_hh = $('#chh_hh');         // +% from hh upgrades
            this.chh_hh_res = $('#chh_hh_res')  // result u_res + % chh_hh
            this.chh_l = $('#chh_l');           // +% from life upgrades
            this.chh_l_res = $('#chh_l_res');   // result hh_res + %  chh_l
            this.chh_bb = $('#chh_bb');         // +% from drops in bank
            this.chh_bb_res = $('#chh_bb_res'); // result lres + % chh_bb
            this.chh_at= $('#chh_at');          // +% from alien tech
            this.chh_at_res= $('#chh_at_res');  // resulte bb_res + % at
            this.chh_me = $('#chh_me');         // +% from achievements Mtn Eew
            this.chh_me_sc = $('#chh_me_sc');   // % of achievements
            this.chh_me_scboost = $('#chh_me_scboost');
            this.chh_me_res= $('#chh_me_res');  // results ar_res + % me
            this.chh_cbf_p = $('#chh_cbf_p');   //collaboration upgrade results
            this.chh_cbf_q = $('#chh_cbf_q');
            this.chh_cbf_res = $('#chh_cbf_res');
            this.chh_cbl_p = $('#chh_cbl_p');
            this.chh_cbl_q = $('#chh_cbl_q');
            this.chh_cbl_res = $('#chh_cbl_res');
            this.chh_lvl = $('#chh_lvl');
            this.chh_lvl_pres = $('#chh_lvl_pres');
            this.chh_lvl_res  = $('#chh_lvl_res');
            this.chh_st = $('#chh_st');         // * storm multiplier
            this.chh_st_res = $('#chh_st_res'); // result meres * storm multiplier
            this.chh_tu = $('#chh_tu');         // * turbo multiplier
            this.chh_tu_res = $('#chh_tu_res'); // result turbo multiplier
            this.chh_hs = $('#chh_hs');             // * helpers special mult.
            this.chh_hs_res = $('#chh_hs_res');     // result stres * helper special
            this.chh_dio = $('#chh_dio');           // +% of ocean upgrades
            this.chh_dio_res = $('#chh_dio_res');   // result of hs-res +% dio
            this.chh_kh = $('#chh_kh');             // +% of effective knowhow
            this.chh_kh_res = $('#chh_kh_res');     // result of diores +% effective knowhow
            this.chh_pb = $('#chh_pb');             // +10% if prayer "bonus" active
            this.chh_pb_res = $('#chh_pb_res');     // result of +% prayer "bonus"
            this.chh_pbb = $('#chh_pbb');             // +20% if prayer "Big bonus" active
            this.chh_pbb_res = $('#chh_pbb_res');     // result of +% prayer "Big bonus"
            this.chh_eb = $('#chh_eb');             // +60% if prayer "bonus" active
            this.chh_eb_res = $('#chh_eb_res');     // result of +% prayer "bonus"
            this.chh_pd = $('#chh_pd');             // x2 if prayer "Double" active
            this.chh_pd_res = $('#chh_pd_res');     // result of + prayer "Double"
            this.chh_da = $('#chh_da');             // -% drained by aliens
            this.chh_da_res = $('#chh_da_res');     // result khres-drained by aliens
            this.chh_total = $('#chh_total');       // totaal van helping hand

            var chh = { id:1, q:this.chh_q, bp:this.chh_bp, bp_res:this.chh_bp_res, u:this.chh_u, u_res:this.chh_u_res,
                        hh:this.chh_hh, hh_res:this.chh_hh_res, l:this.chh_l, l_res:this.chh_l_res, 
                        bb:this.chh_bb, bb_res:this.chh_bb_res, at:this.chh_at, at_res:this.chh_at_res,
                        me:this.chh_me, me_sc:this.chh_me_sc, me_scboost:this.chh_me_scboost, me_res:this.chh_me_res, 
                        cbf_p:this.chh_cbf_p, cbf_q:this.chh_cbf_q, cbf_res:this.chh_cbf_res, 
                        cbl_p:this.chh_cbl_p, cbl_q:this.chh_cbl_q, cbl_res:this.chh_cbl_res,
                        lvl:this.chh_lvl, lvl_pres:this.chh_lvl_pres, lvl_res:this.chh_lvl_res,
                        st:this.chh_st, st_res:this.chh_st_res, tu:this.chh_tu, tu_res:this.chh_tu_res,
                        hs:this.chh_hs, hs_res:this.chh_hs_res, dio:this.chh_dio, dio_res:this.chh_dio_res,
                        kh:this.chh_kh, kh_res:this.chh_kh_res, pb:this.chh_pb, pb_res:this.chh_pb_res, pbb:this.chh_pbb, pbb_res:this.chh_pbb_res,
                        eb:this.chh_eb, eb_res:this.chh_eb_res, pd:this.chh_pd, pd_res:this.chh_pd_res, 
                        da:this.chh_da, da_res:this.chh_da_res, total:this.chh_total};

            //pipettes
            this.cp_q = $('#cp_q');           // quantity 
            this.cp_bp = $('#cp_bp');         //basic production
            this.cp_bp_res = $('#cp_bp_res'); // result of q . bp
            this.cp_u = $('#cp_u');           // multiplier from upgrades
            this.cp_u_res = $('#cp_u_res');   // result of bp_res . cp_u
            this.cp_hh = $('#cp_hh');         // +% from hh upgrades
            this.cp_hh_res = $('#cp_hh_res')  // result u_res + % cp_hh
            this.cp_l = $('#cp_l');           // +% from life upgrades
            this.cp_l_res = $('#cp_l_res');   // result hh_res + %  cp_l
            this.cp_bb = $('#cp_bb');         // +% from drops in bank
            this.cp_bb_res = $('#cp_bb_res'); // result lres + % cp_bb
            this.cp_at= $('#cp_at');          // +% from alien tech
            this.cp_at_res= $('#cp_at_res');  // resulte bb_res + % at
            this.cp_me = $('#cp_me');         // +% from achievements Mtn Eew
            this.cp_me_sc = $('#cp_me_sc');   // % of achievements
            this.cp_me_scboost = $('#cp_me_scboost');
            this.cp_me_res= $('#cp_me_res');  // results ar_res + % me
            this.cp_cbf_p = $('#cp_cbf_p');   //collaboration upgrade results
            this.cp_cbf_q = $('#cp_cbf_q');
            this.cp_cbf_res = $('#cp_cbf_res');
            this.cp_cbl_p = $('#cp_cbl_p');
            this.cp_cbl_q = $('#cp_cbl_q');
            this.cp_cbl_res = $('#cp_cbl_res');
            this.cp_lvl = $('#cp_lvl');
            this.cp_lvl_pres = $('#cp_lvl_pres');
            this.cp_lvl_res  = $('#cp_lvl_res');
            this.cp_ppl = $('#cp_ppl');
            this.cp_ppl_res = $('#cp_ppl_res');
            this.cp_st = $('#cp_st');         // * storm multiplier
            this.cp_st_res = $('#cp_st_res'); // result meres * storm multiplier
            this.cp_tu = $('#cp_tu');         // * turbo multiplier
            this.cp_tu_res = $('#cp_tu_res'); // result turbo multiplier
            this.cp_hs = $('#cp_hs');             // * helpers special mult.
            this.cp_hs_res = $('#cp_hs_res');     // result stres * helper special
            this.cp_dio = $('#cp_dio');           // +% of ocean upgrades
            this.cp_dio_res = $('#cp_dio_res');   // result of hs-res +% dio
            this.cp_kh = $('#cp_kh');             // +% of effective knowhow
            this.cp_kh_res = $('#cp_kh_res');     // result of diores +% effective knowhow
            this.cp_pb = $('#cp_pb');             // +10% if prayer "bonus" active
            this.cp_pb_res = $('#cp_pb_res');     // result of +% prayer "bonus"
            this.cp_pbb = $('#cp_pbb');             // +20% if prayer "Big bonus" active
            this.cp_pbb_res = $('#cp_pbb_res');     // result of +% prayer "Big bonus"
            this.cp_eb = $('#cp_eb');             // +60% if prayer "bonus" active
            this.cp_eb_res = $('#cp_eb_res');     // result of +% prayer "bonus"
            this.cp_pd = $('#cp_pd');             // x2 if prayer "Double" active
            this.cp_pd_res = $('#cp_pd_res');     // result of + prayer "Double"
            this.cp_da = $('#cp_da');             // -% drained by aliens
            this.cp_da_res = $('#cp_da_res');     // result khres-drained by aliens
            this.cp_total = $('#cp_total');       // totaal van helping hand

            var cp = { id:1, q:this.cp_q, bp:this.cp_bp, bp_res:this.cp_bp_res, u:this.cp_u, u_res:this.cp_u_res,
                hh:this.cp_hh, hh_res:this.cp_hh_res, l:this.cp_l, l_res:this.cp_l_res, 
                bb:this.cp_bb, bb_res:this.cp_bb_res, at:this.cp_at, at_res:this.cp_at_res,
                me:this.cp_me, me_sc:this.cp_me_sc, me_scboost:this.cp_me_scboost, me_res:this.cp_me_res, 
                cbf_p:this.cp_cbf_p, cbf_q:this.cp_cbf_q, cbf_res:this.cp_cbf_res, 
                cbl_p:this.cp_cbl_p, cbl_q:this.cp_cbl_q, cbl_res:this.cp_cbl_res,
                lvl:this.cp_lvl, lvl_pres:this.cp_lvl_pres, lvl_res:this.cp_lvl_res,
                ppl:this.cp_ppl, ppl_res:this.cp_ppl_res,
                st:this.cp_st, st_res:this.cp_st_res, tu:this.cp_tu, tu_res:this.cp_tu_res,
                hs:this.cp_hs, hs_res:this.cp_hs_res, dio:this.cp_dio, dio_res:this.cp_dio_res,
                kh:this.cp_kh, kh_res:this.cp_kh_res, pb:this.cp_pb, pb_res:this.cp_pb_res, pbb:this.cp_pbb, pbb_res:this.cp_pbb_res,
                eb:this.cp_eb, eb_res:this.cp_eb_res, pd:this.cp_pd, pd_res:this.cp_pd_res, 
                da:this.cp_da, da_res:this.cp_da_res, total:this.cp_total};

            //air dryers
            this.cad_q = $('#cad_q');           // quantity 
            this.cad_bp = $('#cad_bp');         //basic productio 
            this.cad_bp_res = $('#cad_bp_res'); // result of q . bp
            this.cad_u = $('#cad_u');           // multiplier from upgrades
            this.cad_u_res = $('#cad_u_res');   // result of bp_res . cad_u
            this.cad_hh = $('#cad_hh');         // +% from hh upgrades
            this.cad_hh_res = $('#cad_hh_res')  // result u_res + % cad_hh
            this.cad_l = $('#cad_l');           // +% from life upgrades
            this.cad_l_res = $('#cad_l_res');   // result hh_res + %  cad_l
            this.cad_bb = $('#cad_bb');         // +% from drops in bank
            this.cad_bb_res = $('#cad_bb_res'); // result lres + % cad_bb
            this.cad_at= $('#cad_at');          // +% from alien tech
            this.cad_at_res= $('#cad_at_res');  // resulte bb_res + % at
            this.cad_me = $('#cad_me');         // +% from achievements Mtn Eew
            this.cad_me_sc = $('#cad_me_sc');   // % of achievements
            this.cad_me_scboost = $('#cad_me_scboost');
            this.cad_me_res= $('#cad_me_res');  // results ar_res + % me
            this.cad_cbf_p = $('#cad_cbf_p');   //collaboration upgrade results
            this.cad_cbf_q = $('#cad_cbf_q');
            this.cad_cbf_res = $('#cad_cbf_res');
            this.cad_cbl_p = $('#cad_cbl_p');
            this.cad_cbl_q = $('#cad_cbl_q');
            this.cad_cbl_res = $('#cad_cbl_res');
            this.cad_lvl = $('#cad_lvl');
            this.cad_lvl_pres = $('#cad_lvl_pres');
            this.cad_lvl_res  = $('#cad_lvl_res');
            this.cad_st = $('#cad_st');         // * storm multiplier
            this.cad_st_res = $('#cad_st_res'); // result meres * storm multiplier
            this.cad_tu = $('#cad_tu');         // * turbo multiplier
            this.cad_tu_res = $('#cad_tu_res'); // result turbo multiplier
            this.cad_hs = $('#cad_hs');             // * helpers special mult.
            this.cad_hs_res = $('#cad_hs_res');     // result stres * helper special
            this.cad_dio = $('#cad_dio');           // +% of ocean upgrades
            this.cad_dio_res = $('#cad_dio_res');   // result of hs-res +% dio
            this.cad_kh = $('#cad_kh');             // +% of effective knowhow
            this.cad_kh_res = $('#cad_kh_res');     // result of diores +% effective knowhow
            this.cad_pb = $('#cad_pb');             // +10% if prayer "bonus" active
            this.cad_pb_res = $('#cad_pb_res');     // result of +% prayer "bonus"
            this.cad_pbb = $('#cad_pbb');             // +20% if prayer "Big bonus" active
            this.cad_pbb_res = $('#cad_pbb_res');     // result of +% prayer "Big bonus"
            this.cad_eb = $('#cad_eb');             // +60% if prayer "bonus" active
            this.cad_eb_res = $('#cad_eb_res');     // result of +% prayer "bonus"
            this.cad_pd = $('#cad_pd');             // x2 if prayer "Double" active
            this.cad_pd_res = $('#cad_pd_res');     // result of + prayer "Double"
            this.cad_da = $('#cad_da');             // -% drained by aliens
            this.cad_da_res = $('#cad_da_res');     // result khres-drained by aliens
            this.cad_total = $('#cad_total');       // totaal van helping hand

            var cad = { id:1, q:this.cad_q, bp:this.cad_bp, bp_res:this.cad_bp_res, u:this.cad_u, u_res:this.cad_u_res,
                        hh:this.cad_hh, hh_res:this.cad_hh_res, l:this.cad_l, l_res:this.cad_l_res, 
                        bb:this.cad_bb, bb_res:this.cad_bb_res, at:this.cad_at, at_res:this.cad_at_res,
                        me:this.cad_me, me_sc:this.cad_me_sc, me_scboost:this.cad_me_scboost, me_res:this.cad_me_res, 
                        cbf_p:this.cad_cbf_p, cbf_q:this.cad_cbf_q, cbf_res:this.cad_cbf_res, 
                        cbl_p:this.cad_cbl_p, cbl_q:this.cad_cbl_q, cbl_res:this.cad_cbl_res,
                        lvl:this.cad_lvl, lvl_pres:this.cad_lvl_pres, lvl_res:this.cad_lvl_res,
                        st:this.cad_st, st_res:this.cad_st_res, tu:this.cad_tu, tu_res:this.cad_tu_res,
                        hs:this.cad_hs, hs_res:this.cad_hs_res, dio:this.cad_dio, dio_res:this.cad_dio_res,
                        kh:this.cad_kh, kh_res:this.cad_kh_res, pb:this.cad_pb, pb_res:this.cad_pb_res, pbb:this.cad_pbb, pbb_res:this.cad_pbb_res,
                        eb:this.cad_eb, eb_res:this.cad_eb_res, pd:this.cad_pd, pd_res:this.cad_pd_res, 
                        da:this.cad_da, da_res:this.cad_da_res, total:this.cad_total};

            //bucket
            this.cbu_q = $('#cbu_q');           // quantity 
            this.cbu_bp = $('#cbu_bp');         //basic production
            this.cbu_bp_res = $('#cbu_bp_res'); // result of q . bp
            this.cbu_u = $('#cbu_u');           // multiplier from upgrades
            this.cbu_u_res = $('#cbu_u_res');   // result of bp_res . cbu_u
            this.cbu_hh = $('#cbu_hh');         // +% from hh upgrades
            this.cbu_hh_res = $('#cbu_hh_res')  // result u_res + % cbu_hh
            this.cbu_l = $('#cbu_l');           // +% from life upgrades
            this.cbu_l_res = $('#cbu_l_res');   // result hh_res + %  cbu_l
            this.cbu_bb = $('#cbu_bb');         // +% from drops in bank
            this.cbu_bb_res = $('#cbu_bb_res'); // result lres + % cbu_bb
            this.cbu_at= $('#cbu_at');          // +% from alien tech
            this.cbu_at_res= $('#cbu_at_res');  // resulte bb_res + % at
            this.cbu_me = $('#cbu_me');         // +% from achievements Mtn Eew
            this.cbu_me_sc = $('#cbu_me_sc');   // % of achievements
            this.cbu_me_scboost = $('#cbu_me_scboost');
            this.cbu_me_res= $('#cbu_me_res');  // results ar_res + % me
            this.cbu_cbf_p = $('#cbu_cbf_p');   //collaboration upgrade results
            this.cbu_cbf_q = $('#cbu_cbf_q');
            this.cbu_cbf_res = $('#cbu_cbf_res');
            this.cbu_cbl_p = $('#cbu_cbl_p');
            this.cbu_cbl_q = $('#cbu_cbl_q');
            this.cbu_cbl_res = $('#cbu_cbl_res');
            this.cbu_lvl = $('#cbu_lvl');
            this.cbu_lvl_pres = $('#cbu_lvl_pres');
            this.cbu_lvl_res  = $('#cbu_lvl_res');
            this.cbu_st = $('#cbu_st');         // * storm multiplier
            this.cbu_st_res = $('#cbu_st_res'); // result meres * storm multiplier
            this.cbu_tu = $('#cbu_tu');         // * turbo multiplier
            this.cbu_tu_res = $('#cbu_tu_res'); // result turbo multiplier
            this.cbu_hs = $('#cbu_hs');             // * helpers special mult.
            this.cbu_hs_res = $('#cbu_hs_res');     // result stres * helper special
            this.cbu_dio = $('#cbu_dio');           // +% of ocean upgrades
            this.cbu_dio_res = $('#cbu_dio_res');   // result of hs-res +% dio
            this.cbu_kh = $('#cbu_kh');             // +% of effective knowhow
            this.cbu_kh_res = $('#cbu_kh_res');     // result of diores +% effective knowhow
            this.cbu_pb = $('#cbu_pb');             // +10% if prayer "bonus" active
            this.cbu_pb_res = $('#cbu_pb_res');     // result of +% prayer "bonus"
            this.cbu_pbb = $('#cbu_pbb');             // +20% if prayer "Big bonus" active
            this.cbu_pbb_res = $('#cbu_pbb_res');     // result of +% prayer "Big bonus"
            this.cbu_eb = $('#cbu_eb');             // +60% if prayer "bonus" active
            this.cbu_eb_res = $('#cbu_eb_res');     // result of +% prayer "bonus"
            this.cbu_pd = $('#cbu_pd');             // x2 if prayer "Double" active
            this.cbu_pd_res = $('#cbu_pd_res');     // result of + prayer "Double"
            this.cbu_da = $('#cbu_da');             // -% drained by aliens
            this.cbu_da_res = $('#cbu_da_res');     // result khres-drained by aliens
            this.cbu_total = $('#cbu_total');       // totaal van helping hand

            var cbu = { id:1, q:this.cbu_q, bp:this.cbu_bp, bp_res:this.cbu_bp_res, u:this.cbu_u, u_res:this.cbu_u_res,
                        hh:this.cbu_hh, hh_res:this.cbu_hh_res, l:this.cbu_l, l_res:this.cbu_l_res, 
                        bb:this.cbu_bb, bb_res:this.cbu_bb_res, at:this.cbu_at, at_res:this.cbu_at_res,
                        me:this.cbu_me, me_sc:this.cbu_me_sc, me_scboost:this.cbu_me_scboost, me_res:this.cbu_me_res, 
                        cbf_p:this.cbu_cbf_p, cbf_q:this.cbu_cbf_q, cbf_res:this.cbu_cbf_res, 
                        cbl_p:this.cbu_cbl_p, cbl_q:this.cbu_cbl_q, cbl_res:this.cbu_cbl_res,
                        lvl:this.cbu_lvl, lvl_pres:this.cbu_lvl_pres, lvl_res:this.cbu_lvl_res,
                        st:this.cbu_st, st_res:this.cbu_st_res, tu:this.cbu_tu, tu_res:this.cbu_tu_res,
                        hs:this.cbu_hs, hs_res:this.cbu_hs_res, dio:this.cbu_dio, dio_res:this.cbu_dio_res,
                        kh:this.cbu_kh, kh_res:this.cbu_kh_res, pb:this.cbu_pb, pb_res:this.cbu_pb_res, pbb:this.cbu_pbb, pbb_res:this.cbu_pbb_res,
                        eb:this.cbu_eb, eb_res:this.cbu_eb_res, pd:this.cbu_pd, pd_res:this.cbu_pd_res, 
                        da:this.cbu_da, da_res:this.cbu_da_res, total:this.cbu_total};

            //raindance
            this.cra_q = $('#cra_q');           // quantity 
            this.cra_bp = $('#cra_bp');         //basic production
            this.cra_bp_res = $('#cra_bp_res'); // result of q . bp
            this.cra_u = $('#cra_u');           // multiplier from upgrades
            this.cra_u_res = $('#cra_u_res');   // result of bp_res . cra_u
            this.cra_hh = $('#cra_hh');         // +% from hh upgrades
            this.cra_hh_res = $('#cra_hh_res')  // result u_res + % cra_hh
            this.cra_l = $('#cra_l');           // +% from life upgrades
            this.cra_l_res = $('#cra_l_res');   // result hh_res + %  cra_l
            this.cra_bb = $('#cra_bb');         // +% from drops in bank
            this.cra_bb_res = $('#cra_bb_res'); // result lres + % cra_bb
            this.cra_at= $('#cra_at');          // +% from alien tech
            this.cra_at_res= $('#cra_at_res');  // resulte bb_res + % at
            this.cra_me = $('#cra_me');         // +% from achievements Mtn Eew
            this.cra_me_sc = $('#cra_me_sc');   // % of achievements
            this.cra_me_scboost = $('#cra_me_scboost');
            this.cra_me_res= $('#cra_me_res');  // results ar_res + % me
            this.cra_cbf_p = $('#cra_cbf_p');   //collaboration upgrade results
            this.cra_cbf_q = $('#cra_cbf_q');
            this.cra_cbf_res = $('#cra_cbf_res');
            this.cra_cbl_p = $('#cra_cbl_p');
            this.cra_cbl_q = $('#cra_cbl_q');
            this.cra_cbl_res = $('#cra_cbl_res');
            this.cra_lvl = $('#cra_lvl');
            this.cra_lvl_pres = $('#cra_lvl_pres');
            this.cra_lvl_res  = $('#cra_lvl_res');
            this.cra_st = $('#cra_st');         // * storm multiplier
            this.cra_st_res = $('#cra_st_res'); // result meres * storm multiplier
            this.cra_tu = $('#cra_tu');         // * turbo multiplier
            this.cra_tu_res = $('#cra_tu_res'); // result turbo multiplier
            this.cra_hs = $('#cra_hs');             // * helpers special mult.
            this.cra_hs_res = $('#cra_hs_res');     // result stres * helper special
            this.cra_dio = $('#cra_dio');           // +% of ocean upgrades
            this.cra_dio_res = $('#cra_dio_res');   // result of hs-res +% dio
            this.cra_kh = $('#cra_kh');             // +% of effective knowhow
            this.cra_kh_res = $('#cra_kh_res');     // result of diores +% effective knowhow
            this.cra_pb = $('#cra_pb');             // +10% if prayer "bonus" active
            this.cra_pb_res = $('#cra_pb_res');     // result of +% prayer "bonus"
            this.cra_pbb = $('#cra_pbb');             // +20% if prayer "Big bonus" active
            this.cra_pbb_res = $('#cra_pbb_res');     // result of +% prayer "Big bonus"
            this.cra_eb = $('#cra_eb');             // +60% if prayer "bonus" active
            this.cra_eb_res = $('#cra_eb_res');     // result of +% prayer "bonus"
            this.cra_pd = $('#cra_pd');             // x2 if prayer "Double" active
            this.cra_pd_res = $('#cra_pd_res');     // result of + prayer "Double"
            this.cra_da = $('#cra_da');             // -% drained by aliens
            this.cra_da_res = $('#cra_da_res');     // result khres-drained by aliens
            this.cra_total = $('#cra_total');       // totaal van helping hand

            var cra = { id:1, q:this.cra_q, bp:this.cra_bp, bp_res:this.cra_bp_res, u:this.cra_u, u_res:this.cra_u_res,
                        hh:this.cra_hh, hh_res:this.cra_hh_res, l:this.cra_l, l_res:this.cra_l_res, 
                        bb:this.cra_bb, bb_res:this.cra_bb_res, at:this.cra_at, at_res:this.cra_at_res,
                        me:this.cra_me, me_sc:this.cra_me_sc, me_scboost:this.cra_me_scboost, me_res:this.cra_me_res, 
                        cbf_p:this.cra_cbf_p, cbf_q:this.cra_cbf_q, cbf_res:this.cra_cbf_res, 
                        cbl_p:this.cra_cbl_p, cbl_q:this.cra_cbl_q, cbl_res:this.cra_cbl_res,
                        lvl:this.cra_lvl, lvl_pres:this.cra_lvl_pres, lvl_res:this.cra_lvl_res,
                        st:this.cra_st, st_res:this.cra_st_res, tu:this.cra_tu, tu_res:this.cra_tu_res,
                        hs:this.cra_hs, hs_res:this.cra_hs_res, dio:this.cra_dio, dio_res:this.cra_dio_res,
                        kh:this.cra_kh, kh_res:this.cra_kh_res, pb:this.cra_pb, pb_res:this.cra_pb_res, pbb:this.cra_pbb, pbb_res:this.cra_pbb_res,
                        eb:this.cra_eb, eb_res:this.cra_eb_res, pd:this.cra_pd, pd_res:this.cra_pd_res, 
                        da:this.cra_da, da_res:this.cra_da_res, total:this.cra_total};

            //faucet
            this.cfa_q = $('#cfa_q');           // quantity 
            this.cfa_bp = $('#cfa_bp');         //basic production
            this.cfa_bp_res = $('#cfa_bp_res'); // result of q . bp
            this.cfa_u = $('#cfa_u');           // multiplier from upgrades
            this.cfa_u_res = $('#cfa_u_res');   // result of bp_res . cfa_u
            this.cfa_hh = $('#cfa_hh');         // +% from hh upgrades
            this.cfa_hh_res = $('#cfa_hh_res')  // result u_res + % cfa_hh
            this.cfa_l = $('#cfa_l');           // +% from life upgrades
            this.cfa_l_res = $('#cfa_l_res');   // result hh_res + %  cfa_l
            this.cfa_bb = $('#cfa_bb');         // +% from drops in bank
            this.cfa_bb_res = $('#cfa_bb_res'); // result lres + % cfa_bb
            this.cfa_at= $('#cfa_at');          // +% from alien tech
            this.cfa_at_res= $('#cfa_at_res');  // resulte bb_res + % at
            this.cfa_me = $('#cfa_me');         // +% from achievements Mtn Eew
            this.cfa_me_sc = $('#cfa_me_sc');   // % of achievements
            this.cfa_me_scboost = $('#cfa_me_scboost');
            this.cfa_me_res= $('#cfa_me_res');  // results ar_res + % me
            this.cfa_cbf_p = $('#cfa_cbf_p');   //collaboration upgrade results
            this.cfa_cbf_q = $('#cfa_cbf_q');
            this.cfa_cbf_res = $('#cfa_cbf_res');
            this.cfa_cbl_p = $('#cfa_cbl_p');
            this.cfa_cbl_q = $('#cfa_cbl_q');
            this.cfa_cbl_res = $('#cfa_cbl_res');
            this.cfa_lvl = $('#cfa_lvl');
            this.cfa_lvl_pres = $('#cfa_lvl_pres');
            this.cfa_lvl_res  = $('#cfa_lvl_res');
            this.cfa_st = $('#cfa_st');         // * storm multiplier
            this.cfa_st_res = $('#cfa_st_res'); // result meres * storm multiplier
            this.cfa_tu = $('#cfa_tu');         // * turbo multiplier
            this.cfa_tu_res = $('#cfa_tu_res'); // result turbo multiplier
            this.cfa_hs = $('#cfa_hs');             // * helpers special mult.
            this.cfa_hs_res = $('#cfa_hs_res');     // result stres * helper special
            this.cfa_dio = $('#cfa_dio');           // +% of ocean upgrades
            this.cfa_dio_res = $('#cfa_dio_res');   // result of hs-res +% dio
            this.cfa_kh = $('#cfa_kh');             // +% of effective knowhow
            this.cfa_kh_res = $('#cfa_kh_res');     // result of diores +% effective knowhow
            this.cfa_pb = $('#cfa_pb');             // +10% if prayer "bonus" active
            this.cfa_pb_res = $('#cfa_pb_res');     // result of +% prayer "bonus"
            this.cfa_pbb = $('#cfa_pbb');             // +20% if prayer "Big bonus" active
            this.cfa_pbb_res = $('#cfa_pbb_res');     // result of +% prayer "Big bonus"
            this.cfa_eb = $('#cfa_eb');             // +60% if prayer "bonus" active
            this.cfa_eb_res = $('#cfa_eb_res');     // result of +% prayer "bonus"
            this.cfa_pd = $('#cfa_pd');             // x2 if prayer "Double" active
            this.cfa_pd_res = $('#cfa_pd_res');     // result of + prayer "Double"
            this.cfa_da = $('#cfa_da');             // -% drained by aliens
            this.cfa_da_res = $('#cfa_da_res');     // result khres-drained by aliens
            this.cfa_total = $('#cfa_total');       // totaal van helping hand

            var cfa = { id:1, q:this.cfa_q, bp:this.cfa_bp, bp_res:this.cfa_bp_res, u:this.cfa_u, u_res:this.cfa_u_res,
                        hh:this.cfa_hh, hh_res:this.cfa_hh_res, l:this.cfa_l, l_res:this.cfa_l_res, 
                        bb:this.cfa_bb, bb_res:this.cfa_bb_res, at:this.cfa_at, at_res:this.cfa_at_res,
                        me:this.cfa_me, me_sc:this.cfa_me_sc, me_scboost:this.cfa_me_scboost, me_res:this.cfa_me_res, 
                        cbf_p:this.cfa_cbf_p, cbf_q:this.cfa_cbf_q, cbf_res:this.cfa_cbf_res, 
                        cbl_p:this.cfa_cbl_p, cbl_q:this.cfa_cbl_q, cbl_res:this.cfa_cbl_res,
                        lvl:this.cfa_lvl, lvl_pres:this.cfa_lvl_pres, lvl_res:this.cfa_lvl_res,
                        st:this.cfa_st, st_res:this.cfa_st_res, tu:this.cfa_tu, tu_res:this.cfa_tu_res,
                        hs:this.cfa_hs, hs_res:this.cfa_hs_res, dio:this.cfa_dio, dio_res:this.cfa_dio_res,
                        kh:this.cfa_kh, kh_res:this.cfa_kh_res, pb:this.cfa_pb, pb_res:this.cfa_pb_res, pbb:this.cfa_pbb, pbb_res:this.cfa_pbb_res,
                        eb:this.cfa_eb, eb_res:this.cfa_eb_res, pd:this.cfa_pd, pd_res:this.cfa_pd_res, 
                        da:this.cfa_da, da_res:this.cfa_da_res, total:this.cfa_total};

            //garden hose
            this.cgh_q = $('#cgh_q');           // quantity 
            this.cgh_bp = $('#cgh_bp');         //basic production
            this.cgh_bp_res = $('#cgh_bp_res'); // result of q . bp
            this.cgh_u = $('#cgh_u');           // multiplier from upgrades
            this.cgh_u_res = $('#cgh_u_res');   // result of bp_res . cgh_u
            this.cgh_hh = $('#cgh_hh');         // +% from hh upgrades
            this.cgh_hh_res = $('#cgh_hh_res')  // result u_res + % cgh_hh
            this.cgh_l = $('#cgh_l');           // +% from life upgrades
            this.cgh_l_res = $('#cgh_l_res');   // result hh_res + %  cgh_l
            this.cgh_bb = $('#cgh_bb');         // +% from drops in bank
            this.cgh_bb_res = $('#cgh_bb_res'); // result lres + % cgh_bb
            this.cgh_at= $('#cgh_at');          // +% from alien tech
            this.cgh_at_res= $('#cgh_at_res');  // resulte bb_res + % at
            this.cgh_me = $('#cgh_me');         // +% from achievements Mtn Eew
            this.cgh_me_sc = $('#cgh_me_sc');   // % of achievements
            this.cgh_me_scboost = $('#cgh_me_scboost');
            this.cgh_me_res= $('#cgh_me_res');  // results ar_res + % me
            this.cgh_cbf_p = $('#cgh_cbf_p');   //collaboration upgrade results
            this.cgh_cbf_q = $('#cgh_cbf_q');
            this.cgh_cbf_res = $('#cgh_cbf_res');
            this.cgh_cbl_p = $('#cgh_cbl_p');
            this.cgh_cbl_q = $('#cgh_cbl_q');
            this.cgh_cbl_res = $('#cgh_cbl_res');
            this.cgh_lvl = $('#cgh_lvl');
            this.cgh_lvl_pres = $('#cgh_lvl_pres');
            this.cgh_lvl_res  = $('#cgh_lvl_res');
            this.cgh_st = $('#cgh_st');         // * storm multiplier
            this.cgh_st_res = $('#cgh_st_res'); // result meres * storm multiplier
            this.cgh_tu = $('#cgh_tu');         // * turbo multiplier
            this.cgh_tu_res = $('#cgh_tu_res'); // result turbo multiplier
            this.cgh_hs = $('#cgh_hs');             // * helpers special mult.
            this.cgh_hs_res = $('#cgh_hs_res');     // result stres * helper special
            this.cgh_dio = $('#cgh_dio');           // +% of ocean upgrades
            this.cgh_dio_res = $('#cgh_dio_res');   // result of hs-res +% dio
            this.cgh_kh = $('#cgh_kh');             // +% of effective knowhow
            this.cgh_kh_res = $('#cgh_kh_res');     // result of diores +% effective knowhow
            this.cgh_pb = $('#cgh_pb');             // +10% if prayer "bonus" active
            this.cgh_pb_res = $('#cgh_pb_res');     // result of +% prayer "bonus"
            this.cgh_pbb = $('#cgh_pbb');             // +20% if prayer "Big bonus" active
            this.cgh_pbb_res = $('#cgh_pbb_res');     // result of +% prayer "Big bonus"
            this.cgh_eb = $('#cgh_eb');             // +60% if prayer "bonus" active
            this.cgh_eb_res = $('#cgh_eb_res');     // result of +% prayer "bonus"
            this.cgh_pd = $('#cgh_pd');             // x2 if prayer "Double" active
            this.cgh_pd_res = $('#cgh_pd_res');     // result of + prayer "Double"
            this.cgh_da = $('#cgh_da');             // -% drained by aliens
            this.cgh_da_res = $('#cgh_da_res');     // result khres-drained by aliens
            this.cgh_total = $('#cgh_total');       // totaal van helping hand

            var cgh = { id:1, q:this.cgh_q, bp:this.cgh_bp, bp_res:this.cgh_bp_res, u:this.cgh_u, u_res:this.cgh_u_res,
                        hh:this.cgh_hh, hh_res:this.cgh_hh_res, l:this.cgh_l, l_res:this.cgh_l_res, 
                        bb:this.cgh_bb, bb_res:this.cgh_bb_res, at:this.cgh_at, at_res:this.cgh_at_res,
                        me:this.cgh_me, me_sc:this.cgh_me_sc, me_scboost:this.cgh_me_scboost, me_res:this.cgh_me_res, 
                        cbf_p:this.cgh_cbf_p, cbf_q:this.cgh_cbf_q, cbf_res:this.cgh_cbf_res, 
                        cbl_p:this.cgh_cbl_p, cbl_q:this.cgh_cbl_q, cbl_res:this.cgh_cbl_res,
                        lvl:this.cgh_lvl, lvl_pres:this.cgh_lvl_pres, lvl_res:this.cgh_lvl_res,
                        st:this.cgh_st, st_res:this.cgh_st_res, tu:this.cgh_tu, tu_res:this.cgh_tu_res,
                        hs:this.cgh_hs, hs_res:this.cgh_hs_res, dio:this.cgh_dio, dio_res:this.cgh_dio_res,
                        kh:this.cgh_kh, kh_res:this.cgh_kh_res, pb:this.cgh_pb, pb_res:this.cgh_pb_res, pbb:this.cgh_pbb, pbb_res:this.cgh_pbb_res,
                        eb:this.cgh_eb, eb_res:this.cgh_eb_res, pd:this.cgh_pd, pd_res:this.cgh_pd_res, 
                        da:this.cgh_da, da_res:this.cgh_da_res, total:this.cgh_total};

            //Truck
            this.ctr_q = $('#ctr_q');           // quantity 
            this.ctr_bp = $('#ctr_bp');         //basic production
            this.ctr_bp_res = $('#ctr_bp_res'); // result of q . bp
            this.ctr_u = $('#ctr_u');           // multiplier from upgrades
            this.ctr_u_res = $('#ctr_u_res');   // result of bp_res . ctr_u
            this.ctr_hh = $('#ctr_hh');         // +% from hh upgrades
            this.ctr_hh_res = $('#ctr_hh_res')  // result u_res + % ctr_hh
            this.ctr_l = $('#ctr_l');           // +% from life upgrades
            this.ctr_l_res = $('#ctr_l_res');   // result hh_res + %  ctr_l
            this.ctr_bb = $('#ctr_bb');         // +% from drops in bank
            this.ctr_bb_res = $('#ctr_bb_res'); // result lres + % ctr_bb
            this.ctr_at= $('#ctr_at');          // +% from alien tech
            this.ctr_at_res= $('#ctr_at_res');  // resulte bb_res + % at
            this.ctr_me = $('#ctr_me');         // +% from achievements Mtn Eew
            this.ctr_me_sc = $('#ctr_me_sc');   // % of achievements
            this.ctr_me_scboost = $('#ctr_me_scboost');
            this.ctr_me_res= $('#ctr_me_res');  // results ar_res + % me
            this.ctr_cbf_p = $('#ctr_cbf_p');   //collaboration upgrade results
            this.ctr_cbf_q = $('#ctr_cbf_q');
            this.ctr_cbf_res = $('#ctr_cbf_res');
            this.ctr_cbl_p = $('#ctr_cbl_p');
            this.ctr_cbl_q = $('#ctr_cbl_q');
            this.ctr_cbl_res = $('#ctr_cbl_res');
            this.ctr_lvl = $('#ctr_lvl');
            this.ctr_lvl_pres = $('#ctr_lvl_pres');
            this.ctr_lvl_res  = $('#ctr_lvl_res');
            this.ctr_mb = $('#ctr_mb');
            this.ctr_mb_res = $('#ctr_mb_res');
            this.ctr_st = $('#ctr_st');         // * storm multiplier
            this.ctr_st_res = $('#ctr_st_res'); // result meres * storm multiplier
            this.ctr_tu = $('#ctr_tu');         // * turbo multiplier
            this.ctr_tu_res = $('#ctr_tu_res'); // result turbo multiplier
            this.ctr_hs = $('#ctr_hs');             // * helpers special mult.
            this.ctr_hs_res = $('#ctr_hs_res');     // result stres * helper special
            this.ctr_dio = $('#ctr_dio');           // +% of ocean upgrades
            this.ctr_dio_res = $('#ctr_dio_res');   // result of hs-res +% dio
            this.ctr_kh = $('#ctr_kh');             // +% of effective knowhow
            this.ctr_kh_res = $('#ctr_kh_res');     // result of diores +% effective knowhow
            this.ctr_pb = $('#ctr_pb');             // +10% if prayer "bonus" active
            this.ctr_pb_res = $('#ctr_pb_res');     // result of +% prayer "bonus"
            this.ctr_pbb = $('#ctr_pbb');             // +20% if prayer "Big bonus" active
            this.ctr_pbb_res = $('#ctr_pbb_res');     // result of +% prayer "Big bonus"
            this.ctr_eb = $('#ctr_eb');             // +60% if prayer "bonus" active
            this.ctr_eb_res = $('#ctr_eb_res');     // result of +% prayer "bonus"
            this.ctr_pd = $('#ctr_pd');             // x2 if prayer "Double" active
            this.ctr_pd_res = $('#ctr_pd_res');     // result of + prayer "Double"
            this.ctr_da = $('#ctr_da');             // -% drained by aliens
            this.ctr_da_res = $('#ctr_da_res');     // result khres-drained by aliens
            this.ctr_total = $('#ctr_total');       // totaal van helping hand

            var ctr = { id:1, q:this.ctr_q, bp:this.ctr_bp, bp_res:this.ctr_bp_res, u:this.ctr_u, u_res:this.ctr_u_res,
                        hh:this.ctr_hh, hh_res:this.ctr_hh_res, l:this.ctr_l, l_res:this.ctr_l_res, 
                        bb:this.ctr_bb, bb_res:this.ctr_bb_res, at:this.ctr_at, at_res:this.ctr_at_res,
                        me:this.ctr_me, me_sc:this.ctr_me_sc, me_scboost:this.ctr_me_scboost, me_res:this.ctr_me_res, 
                        cbf_p:this.ctr_cbf_p, cbf_q:this.ctr_cbf_q, cbf_res:this.ctr_cbf_res, 
                        cbl_p:this.ctr_cbl_p, cbl_q:this.ctr_cbl_q, cbl_res:this.ctr_cbl_res,
                        lvl:this.ctr_lvl, lvl_pres:this.ctr_lvl_pres, lvl_res:this.ctr_lvl_res, mb:this.ctr_mb, mb_res:this.ctr_mb_res,
                        st:this.ctr_st, st_res:this.ctr_st_res, tu:this.ctr_tu, tu_res:this.ctr_tu_res,
                        hs:this.ctr_hs, hs_res:this.ctr_hs_res, dio:this.ctr_dio, dio_res:this.ctr_dio_res,
                        kh:this.ctr_kh, kh_res:this.ctr_kh_res, pb:this.ctr_pb, pb_res:this.ctr_pb_res, pbb:this.ctr_pbb, pbb_res:this.ctr_pbb_res,
                        eb:this.ctr_eb, eb_res:this.ctr_eb_res, pd:this.ctr_pd, pd_res:this.ctr_pd_res, 
                        da:this.ctr_da, da_res:this.ctr_da_res, total:this.ctr_total};

            //Fire hose (fh)
            this.cfh_q = $('#cfh_q');           // quantity 
            this.cfh_bp = $('#cfh_bp');         //basic production
            this.cfh_bp_res = $('#cfh_bp_res'); // result of q . bp
            this.cfh_u = $('#cfh_u');           // multiplier from upgrades
            this.cfh_u_res = $('#cfh_u_res');   // result of bp_res . cfh_u
            this.cfh_hh = $('#cfh_hh');         // +% from hh upgrades
            this.cfh_hh_res = $('#cfh_hh_res')  // result u_res + % cfh_hh
            this.cfh_l = $('#cfh_l');           // +% from life upgrades
            this.cfh_l_res = $('#cfh_l_res');   // result hh_res + %  cfh_l
            this.cfh_bb = $('#cfh_bb');         // +% from drops in bank
            this.cfh_bb_res = $('#cfh_bb_res'); // result lres + % cfh_bb
            this.cfh_at= $('#cfh_at');          // +% from alien tech
            this.cfh_at_res= $('#cfh_at_res');  // resulte bb_res + % at
            this.cfh_me = $('#cfh_me');         // +% from achievements Mtn Eew
            this.cfh_me_sc = $('#cfh_me_sc');   // % of achievements
            this.cfh_me_scboost = $('#cfh_me_scboost');
            this.cfh_me_res= $('#cfh_me_res');  // results ar_res + % me
            this.cfh_cbf_p = $('#cfh_cbf_p');   //collaboration upgrade results
            this.cfh_cbf_q = $('#cfh_cbf_q');
            this.cfh_cbf_res = $('#cfh_cbf_res');
            this.cfh_cbl_p = $('#cfh_cbl_p');
            this.cfh_cbl_q = $('#cfh_cbl_q');
            this.cfh_cbl_res = $('#cfh_cbl_res');
            this.cfh_lvl = $('#cfh_lvl');
            this.cfh_lvl_pres = $('#cfh_lvl_pres');
            this.cfh_lvl_res  = $('#cfh_lvl_res');
            this.cfh_st = $('#cfh_st');         // * storm multiplier
            this.cfh_st_res = $('#cfh_st_res'); // result meres * storm multiplier
            this.cfh_tu = $('#cfh_tu');         // * turbo multiplier
            this.cfh_tu_res = $('#cfh_tu_res'); // result turbo multiplier
            this.cfh_hs = $('#cfh_hs');             // * helpers special mult.
            this.cfh_hs_res = $('#cfh_hs_res');     // result stres * helper special
            this.cfh_dio = $('#cfh_dio');           // +% of ocean upgrades
            this.cfh_dio_res = $('#cfh_dio_res');   // result of hs-res +% dio
            this.cfh_kh = $('#cfh_kh');             // +% of effective knowhow
            this.cfh_kh_res = $('#cfh_kh_res');     // result of diores +% effective knowhow
            this.cfh_pb = $('#cfh_pb');             // +10% if prayer "bonus" active
            this.cfh_pb_res = $('#cfh_pb_res');     // result of +% prayer "bonus"
            this.cfh_pbb = $('#cfh_pbb');             // +20% if prayer "Big bonus" active
            this.cfh_pbb_res = $('#cfh_pbb_res');     // result of +% prayer "Big bonus"
            this.cfh_eb = $('#cfh_eb');             // +60% if prayer "bonus" active
            this.cfh_eb_res = $('#cfh_eb_res');     // result of +% prayer "bonus"
            this.cfh_pd = $('#cfh_pd');             // x2 if prayer "Double" active
            this.cfh_pd_res = $('#cfh_pd_res');     // result of + prayer "Double"
            this.cfh_da = $('#cfh_da');             // -% drained by aliens
            this.cfh_da_res = $('#cfh_da_res');     // result khres-drained by aliens
            this.cfh_total = $('#cfh_total');       // totaal van helping hand

            var cfh = { id:1, q:this.cfh_q, bp:this.cfh_bp, bp_res:this.cfh_bp_res, u:this.cfh_u, u_res:this.cfh_u_res,
                        hh:this.cfh_hh, hh_res:this.cfh_hh_res, l:this.cfh_l, l_res:this.cfh_l_res, 
                        bb:this.cfh_bb, bb_res:this.cfh_bb_res, at:this.cfh_at, at_res:this.cfh_at_res,
                        me:this.cfh_me, me_sc:this.cfh_me_sc, me_scboost:this.cfh_me_scboost, me_res:this.cfh_me_res, 
                        cbf_p:this.cfh_cbf_p, cbf_q:this.cfh_cbf_q, cbf_res:this.cfh_cbf_res, 
                        cbl_p:this.cfh_cbl_p, cbl_q:this.cfh_cbl_q, cbl_res:this.cfh_cbl_res,
                        lvl:this.cfh_lvl, lvl_pres:this.cfh_lvl_pres, lvl_res:this.cfh_lvl_res,
                        st:this.cfh_st, st_res:this.cfh_st_res, tu:this.cfh_tu, tu_res:this.cfh_tu_res,
                        hs:this.cfh_hs, hs_res:this.cfh_hs_res, dio:this.cfh_dio, dio_res:this.cfh_dio_res,
                        kh:this.cfh_kh, kh_res:this.cfh_kh_res, pb:this.cfh_pb, pb_res:this.cfh_pb_res, pbb:this.cfh_pbb, pbb_res:this.cfh_pbb_res,
                        eb:this.cfh_eb, eb_res:this.cfh_eb_res, pd:this.cfh_pd, pd_res:this.cfh_pd_res, 
                        da:this.cfh_da, da_res:this.cfh_da_res, total:this.cfh_total};

            //Ice mine (im)
            this.cim_q = $('#cim_q');           // quantity 
            this.cim_bp = $('#cim_bp');         //basic production
            this.cim_bp_res = $('#cim_bp_res'); // result of q . bp
            this.cim_u = $('#cim_u');           // multiplier from upgrades
            this.cim_u_res = $('#cim_u_res');   // result of bp_res . cim_u
            this.cim_hh = $('#cim_hh');         // +% from hh upgrades
            this.cim_hh_res = $('#cim_hh_res')  // result u_res + % cim_hh
            this.cim_l = $('#cim_l');           // +% from life upgrades
            this.cim_l_res = $('#cim_l_res');   // result hh_res + %  cim_l
            this.cim_bb = $('#cim_bb');         // +% from drops in bank
            this.cim_bb_res = $('#cim_bb_res'); // result lres + % cim_bb
            this.cim_at= $('#cim_at');          // +% from alien tech
            this.cim_at_res= $('#cim_at_res');  // resulte bb_res + % at
            this.cim_me = $('#cim_me');         // +% from achievements Mtn Eew
            this.cim_me_sc = $('#cim_me_sc');   // % of achievements
            this.cim_me_scboost = $('#cim_me_scboost');
            this.cim_me_res= $('#cim_me_res');  // results ar_res + % me
            this.cim_cbf_p = $('#cim_cbf_p');   //collaboration upgrade results
            this.cim_cbf_q = $('#cim_cbf_q');
            this.cim_cbf_res = $('#cim_cbf_res');
            this.cim_cbl_p = $('#cim_cbl_p');
            this.cim_cbl_q = $('#cim_cbl_q');
            this.cim_cbl_res = $('#cim_cbl_res');
            this.cim_lvl = $('#cim_lvl');
            this.cim_lvl_pres = $('#cim_lvl_pres');
            this.cim_lvl_res  = $('#cim_lvl_res');
            this.cim_st = $('#cim_st');         // * storm multiplier
            this.cim_st_res = $('#cim_st_res'); // result meres * storm multiplier
            this.cim_tu = $('#cim_tu');         // * turbo multiplier
            this.cim_tu_res = $('#cim_tu_res'); // result turbo multiplier
            this.cim_hs = $('#cim_hs');             // * helpers special mult.
            this.cim_hs_res = $('#cim_hs_res');     // result stres * helper special
            this.cim_dio = $('#cim_dio');           // +% of ocean upgrades
            this.cim_dio_res = $('#cim_dio_res');   // result of hs-res +% dio
            this.cim_kh = $('#cim_kh');             // +% of effective knowhow
            this.cim_kh_res = $('#cim_kh_res');     // result of diores +% effective knowhow
            this.cim_pb = $('#cim_pb');             // +10% if prayer "bonus" active
            this.cim_pb_res = $('#cim_pb_res');     // result of +% prayer "bonus"
            this.cim_pbb = $('#cim_pbb');             // +20% if prayer "Big bonus" active
            this.cim_pbb_res = $('#cim_pbb_res');     // result of +% prayer "Big bonus"
            this.cim_eb = $('#cim_eb');             // +60% if prayer "bonus" active
            this.cim_eb_res = $('#cim_eb_res');     // result of +% prayer "bonus"
            this.cim_pd = $('#cim_pd');             // x2 if prayer "Double" active
            this.cim_pd_res = $('#cim_pd_res');     // result of + prayer "Double"
            this.cim_da = $('#cim_da');             // -% drained by aliens
            this.cim_da_res = $('#cim_da_res');     // result khres-drained by aliens
            this.cim_total = $('#cim_total');       // totaal van helping hand

            var cim = { id:1, q:this.cim_q, bp:this.cim_bp, bp_res:this.cim_bp_res, u:this.cim_u, u_res:this.cim_u_res,
                        hh:this.cim_hh, hh_res:this.cim_hh_res, l:this.cim_l, l_res:this.cim_l_res, 
                        bb:this.cim_bb, bb_res:this.cim_bb_res, at:this.cim_at, at_res:this.cim_at_res,
                        me:this.cim_me, me_sc:this.cim_me_sc, me_scboost:this.cim_me_scboost, me_res:this.cim_me_res, 
                        cbf_p:this.cim_cbf_p, cbf_q:this.cim_cbf_q, cbf_res:this.cim_cbf_res, 
                        cbl_p:this.cim_cbl_p, cbl_q:this.cim_cbl_q, cbl_res:this.cim_cbl_res,
                        lvl:this.cim_lvl, lvl_pres:this.cim_lvl_pres, lvl_res:this.cim_lvl_res,
                        st:this.cim_st, st_res:this.cim_st_res, tu:this.cim_tu, tu_res:this.cim_tu_res,
                        hs:this.cim_hs, hs_res:this.cim_hs_res, dio:this.cim_dio, dio_res:this.cim_dio_res,
                        kh:this.cim_kh, kh_res:this.cim_kh_res, pb:this.cim_pb, pb_res:this.cim_pb_res, pbb:this.cim_pbb, pbb_res:this.cim_pbb_res,
                        eb:this.cim_eb, eb_res:this.cim_eb_res, pd:this.cim_pd, pd_res:this.cim_pd_res, 
                        da:this.cim_da, da_res:this.cim_da_res, total:this.cim_total};

            //Spaceship (sp)
            this.csp_q = $('#csp_q');           // quantity 
            this.csp_bp = $('#csp_bp');         //basic production
            this.csp_bp_res = $('#csp_bp_res'); // result of q . bp
            this.csp_u = $('#csp_u');           // multiplier from upgrades
            this.csp_u_res = $('#csp_u_res');   // result of bp_res . csp_u
            this.csp_hh = $('#csp_hh');         // +% from hh upgrades
            this.csp_hh_res = $('#csp_hh_res')  // result u_res + % csp_hh
            this.csp_l = $('#csp_l');           // +% from life upgrades
            this.csp_l_res = $('#csp_l_res');   // result hh_res + %  csp_l
            this.csp_bb = $('#csp_bb');         // +% from drops in bank
            this.csp_bb_res = $('#csp_bb_res'); // result lres + % csp_bb
            this.csp_at= $('#csp_at');          // +% from alien tech
            this.csp_at_res= $('#csp_at_res');  // resulte bb_res + % at
            this.csp_me = $('#csp_me');         // +% from achievements Mtn Eew
            this.csp_me_sc = $('#csp_me_sc');   // % of achievements
            this.csp_me_scboost = $('#csp_me_scboost');
            this.csp_me_res= $('#csp_me_res');  // results ar_res + % me
            this.csp_cbf_p = $('#csp_cbf_p');   //collaboration upgrade results
            this.csp_cbf_q = $('#csp_cbf_q');
            this.csp_cbf_res = $('#csp_cbf_res');
            this.csp_cbl_p = $('#csp_cbl_p');
            this.csp_cbl_q = $('#csp_cbl_q');
            this.csp_cbl_res = $('#csp_cbl_res');
            this.csp_lvl = $('#csp_lvl');
            this.csp_lvl_pres = $('#csp_lvl_pres');
            this.csp_lvl_res  = $('#csp_lvl_res');
            this.csp_st = $('#csp_st');         // * storm multiplier
            this.csp_st_res = $('#csp_st_res'); // result meres * storm multiplier
            this.csp_tu = $('#csp_tu');         // * turbo multiplier
            this.csp_tu_res = $('#csp_tu_res'); // result turbo multiplier
            this.csp_hs = $('#csp_hs');             // * helpers special mult.
            this.csp_hs_res = $('#csp_hs_res');     // result stres * helper special
            this.csp_dio = $('#csp_dio');           // +% of ocean upgrades
            this.csp_dio_res = $('#csp_dio_res');   // result of hs-res +% dio
            this.csp_kh = $('#csp_kh');             // +% of effective knowhow
            this.csp_kh_res = $('#csp_kh_res');     // result of diores +% effective knowhow
            this.csp_pb = $('#csp_pb');             // +10% if prayer "bonus" active
            this.csp_pb_res = $('#csp_pb_res');     // result of +% prayer "bonus"
            this.csp_pbb = $('#csp_pbb');             // +20% if prayer "Big bonus" active
            this.csp_pbb_res = $('#csp_pbb_res');     // result of +% prayer "Big bonus"
            this.csp_eb = $('#csp_eb');             // +60% if prayer "bonus" active
            this.csp_eb_res = $('#csp_eb_res');     // result of +% prayer "bonus"
            this.csp_pd = $('#csp_pd');             // x2 if prayer "Double" active
            this.csp_pd_res = $('#csp_pd_res');     // result of + prayer "Double"
            this.csp_da = $('#csp_da');             // -% drained by aliens
            this.csp_da_res = $('#csp_da_res');     // result khres-drained by aliens
            this.csp_total = $('#csp_total');       // totaal van helping hand

            var csp = { id:1, q:this.csp_q, bp:this.csp_bp, bp_res:this.csp_bp_res, u:this.csp_u, u_res:this.csp_u_res,
                        hh:this.csp_hh, hh_res:this.csp_hh_res, l:this.csp_l, l_res:this.csp_l_res, 
                        bb:this.csp_bb, bb_res:this.csp_bb_res, at:this.csp_at, at_res:this.csp_at_res,
                        me:this.csp_me, me_sc:this.csp_me_sc, me_scboost:this.csp_me_scboost, me_res:this.csp_me_res, 
                        cbf_p:this.csp_cbf_p, cbf_q:this.csp_cbf_q, cbf_res:this.csp_cbf_res, 
                        cbl_p:this.csp_cbl_p, cbl_q:this.csp_cbl_q, cbl_res:this.csp_cbl_res,
                        lvl:this.csp_lvl, lvl_pres:this.csp_lvl_pres, lvl_res:this.csp_lvl_res,
                        st:this.csp_st, st_res:this.csp_st_res, tu:this.csp_tu, tu_res:this.csp_tu_res,
                        hs:this.csp_hs, hs_res:this.csp_hs_res, dio:this.csp_dio, dio_res:this.csp_dio_res,
                        kh:this.csp_kh, kh_res:this.csp_kh_res, pb:this.csp_pb, pb_res:this.csp_pb_res, pbb:this.csp_pbb, pbb_res:this.csp_pbb_res,
                        eb:this.csp_eb, eb_res:this.csp_eb_res, pd:this.csp_pd, pd_res:this.csp_pd_res, 
                        da:this.csp_da, da_res:this.csp_da_res, total:this.csp_total};

            //Wormhole (wo)
            this.cwo_q = $('#cwo_q');           // quantity 
            this.cwo_bp = $('#cwo_bp');         //basic production
            this.cwo_bp_res = $('#cwo_bp_res'); // result of q . bp
            this.cwo_u = $('#cwo_u');           // multiplier from upgrades
            this.cwo_u_res = $('#cwo_u_res');   // result of bp_res . cwo_u
            this.cwo_hh = $('#cwo_hh');         // +% from hh upgrades
            this.cwo_hh_res = $('#cwo_hh_res')  // result u_res + % cwo_hh
            this.cwo_l = $('#cwo_l');           // +% from life upgrades
            this.cwo_l_res = $('#cwo_l_res');   // result hh_res + %  cwo_l
            this.cwo_bb = $('#cwo_bb');         // +% from drops in bank
            this.cwo_bb_res = $('#cwo_bb_res'); // result lres + % cwo_bb
            this.cwo_at= $('#cwo_at');          // +% from alien tech
            this.cwo_at_res= $('#cwo_at_res');  // resulte bb_res + % at
            this.cwo_me = $('#cwo_me');         // +% from achievements Mtn Eew
            this.cwo_me_sc = $('#cwo_me_sc');   // % of achievements
            this.cwo_me_scboost = $('#cwo_me_scboost');
            this.cwo_me_res= $('#cwo_me_res');  // results ar_res + % me
            this.cwo_cbf_p = $('#cwo_cbf_p');   //collaboration upgrade results
            this.cwo_cbf_q = $('#cwo_cbf_q');
            this.cwo_cbf_res = $('#cwo_cbf_res');
            this.cwo_cbl_p = $('#cwo_cbl_p');
            this.cwo_cbl_q = $('#cwo_cbl_q');
            this.cwo_cbl_res = $('#cwo_cbl_res');
            this.cwo_lvl = $('#cwo_lvl');
            this.cwo_lvl_pres = $('#cwo_lvl_pres');
            this.cwo_lvl_res  = $('#cwo_lvl_res');
            this.cwo_st = $('#cwo_st');         // * storm multiplier
            this.cwo_st_res = $('#cwo_st_res'); // result meres * storm multiplier
            this.cwo_tu = $('#cwo_tu');         // * turbo multiplier
            this.cwo_tu_res = $('#cwo_tu_res'); // result turbo multiplier
            this.cwo_hs = $('#cwo_hs');             // * helpers special mult.
            this.cwo_hs_res = $('#cwo_hs_res');     // result stres * helper special
            this.cwo_dio = $('#cwo_dio');           // +% of ocean upgrades
            this.cwo_dio_res = $('#cwo_dio_res');   // result of hs-res +% dio
            this.cwo_kh = $('#cwo_kh');             // +% of effective knowhow
            this.cwo_kh_res = $('#cwo_kh_res');     // result of diores +% effective knowhow
            this.cwo_pb = $('#cwo_pb');             // +10% if prayer "bonus" active
            this.cwo_pb_res = $('#cwo_pb_res');     // result of +% prayer "bonus"
            this.cwo_pbb = $('#cwo_pbb');             // +20% if prayer "Big bonus" active
            this.cwo_pbb_res = $('#cwo_pbb_res');     // result of +% prayer "Big bonus"
            this.cwo_eb = $('#cwo_eb');             // +60% if prayer "bonus" active
            this.cwo_eb_res = $('#cwo_eb_res');     // result of +% prayer "bonus"
            this.cwo_pd = $('#cwo_pd');             // x2 if prayer "Double" active
            this.cwo_pd_res = $('#cwo_pd_res');     // result of + prayer "Double"
            this.cwo_da = $('#cwo_da');             // -% drained by aliens
            this.cwo_da_res = $('#cwo_da_res');     // result khres-drained by aliens
            this.cwo_total = $('#cwo_total');       // totaal van helping hand

            var cwo = { id:1, q:this.cwo_q, bp:this.cwo_bp, bp_res:this.cwo_bp_res, u:this.cwo_u, u_res:this.cwo_u_res,
                        hh:this.cwo_hh, hh_res:this.cwo_hh_res, l:this.cwo_l, l_res:this.cwo_l_res, 
                        bb:this.cwo_bb, bb_res:this.cwo_bb_res, at:this.cwo_at, at_res:this.cwo_at_res,
                        me:this.cwo_me, me_sc:this.cwo_me_sc, me_scboost:this.cwo_me_scboost, me_res:this.cwo_me_res, 
                        cbf_p:this.cwo_cbf_p, cbf_q:this.cwo_cbf_q, cbf_res:this.cwo_cbf_res, 
                        cbl_p:this.cwo_cbl_p, cbl_q:this.cwo_cbl_q, cbl_res:this.cwo_cbl_res,
                        lvl:this.cwo_lvl, lvl_pres:this.cwo_lvl_pres, lvl_res:this.cwo_lvl_res,
                        st:this.cwo_st, st_res:this.cwo_st_res, tu:this.cwo_tu, tu_res:this.cwo_tu_res,
                        hs:this.cwo_hs, hs_res:this.cwo_hs_res, dio:this.cwo_dio, dio_res:this.cwo_dio_res,
                        kh:this.cwo_kh, kh_res:this.cwo_kh_res, pb:this.cwo_pb, pb_res:this.cwo_pb_res, pbb:this.cwo_pbb, pbb_res:this.cwo_pbb_res,
                        eb:this.cwo_eb, eb_res:this.cwo_eb_res, pd:this.cwo_pd, pd_res:this.cwo_pd_res, 
                        da:this.cwo_da, da_res:this.cwo_da_res, total:this.cwo_total};

            //River (ri)
            this.cri_q = $('#cri_q');           // quantity 
            this.cri_bp = $('#cri_bp');         //basic production
            this.cri_bp_res = $('#cri_bp_res'); // result of q . bp
            this.cri_u = $('#cri_u');           // multiplier from upgrades
            this.cri_u_res = $('#cri_u_res');   // result of bp_res . cri_u
            this.cri_hh = $('#cri_hh');         // +% from hh upgrades
            this.cri_hh_res = $('#cri_hh_res')  // result u_res + % cri_hh
            this.cri_l = $('#cri_l');           // +% from life upgrades
            this.cri_l_res = $('#cri_l_res');   // result hh_res + %  cri_l
            this.cri_bb = $('#cri_bb');         // +% from drops in bank
            this.cri_bb_res = $('#cri_bb_res'); // result lres + % cri_bb
            this.cri_at= $('#cri_at');          // +% from alien tech
            this.cri_at_res= $('#cri_at_res');  // resulte bb_res + % at
            this.cri_me = $('#cri_me');         // +% from achievements Mtn Eew
            this.cri_me_sc = $('#cri_me_sc');   // % of achievements
            this.cri_me_scboost = $('#cri_me_scboost');
            this.cri_me_res= $('#cri_me_res');  // results ar_res + % me
            this.cri_cbf_p = $('#cri_cbf_p');   //collaboration upgrade results
            this.cri_cbf_q = $('#cri_cbf_q');
            this.cri_cbf_res = $('#cri_cbf_res');
            this.cri_cbl_p = $('#cri_cbl_p');
            this.cri_cbl_q = $('#cri_cbl_q');
            this.cri_cbl_res = $('#cri_cbl_res');
            this.cri_lvl = $('#cri_lvl');
            this.cri_lvl_pres = $('#cri_lvl_pres');
            this.cri_lvl_res  = $('#cri_lvl_res');
            this.cri_st = $('#cri_st');         // * storm multiplier
            this.cri_st_res = $('#cri_st_res'); // result meres * storm multiplier
            this.cri_tu = $('#cri_tu');         // * turbo multiplier
            this.cri_tu_res = $('#cri_tu_res'); // result turbo multiplier
            this.cri_hs = $('#cri_hs');             // * helpers special mult.
            this.cri_hs_res = $('#cri_hs_res');     // result stres * helper special
            this.cri_dio = $('#cri_dio');           // +% of ocean upgrades
            this.cri_dio_res = $('#cri_dio_res');   // result of hs-res +% dio
            this.cri_kh = $('#cri_kh');             // +% of effective knowhow
            this.cri_kh_res = $('#cri_kh_res');     // result of diores +% effective knowhow
            this.cri_pb = $('#cri_pb');             // +10% if prayer "bonus" active
            this.cri_pb_res = $('#cri_pb_res');     // result of +% prayer "bonus"
            this.cri_pbb = $('#cri_pbb');             // +20% if prayer "Big bonus" active
            this.cri_pbb_res = $('#cri_pbb_res');     // result of +% prayer "Big bonus"
            this.cri_eb = $('#cri_eb');             // +60% if prayer "bonus" active
            this.cri_eb_res = $('#cri_eb_res');     // result of +% prayer "bonus"
            this.cri_pd = $('#cri_pd');             // x2 if prayer "Double" active
            this.cri_pd_res = $('#cri_pd_res');     // result of + prayer "Double"
            this.cri_da = $('#cri_da');             // -% drained by aliens
            this.cri_da_res = $('#cri_da_res');     // result khres-drained by aliens
            this.cri_total = $('#cri_total');       // totaal van helping hand

            var cri = { id:1, q:this.cri_q, bp:this.cri_bp, bp_res:this.cri_bp_res, u:this.cri_u, u_res:this.cri_u_res,
                        hh:this.cri_hh, hh_res:this.cri_hh_res, l:this.cri_l, l_res:this.cri_l_res, 
                        bb:this.cri_bb, bb_res:this.cri_bb_res, at:this.cri_at, at_res:this.cri_at_res,
                        me:this.cri_me, me_sc:this.cri_me_sc, me_scboost:this.cri_me_scboost, me_res:this.cri_me_res, 
                        cbf_p:this.cri_cbf_p, cbf_q:this.cri_cbf_q, cbf_res:this.cri_cbf_res, 
                        cbl_p:this.cri_cbl_p, cbl_q:this.cri_cbl_q, cbl_res:this.cri_cbl_res,
                        lvl:this.cri_lvl, lvl_pres:this.cri_lvl_pres, lvl_res:this.cri_lvl_res,
                        st:this.cri_st, st_res:this.cri_st_res, tu:this.cri_tu, tu_res:this.cri_tu_res,
                        hs:this.cri_hs, hs_res:this.cri_hs_res, dio:this.cri_dio, dio_res:this.cri_dio_res,
                        kh:this.cri_kh, kh_res:this.cri_kh_res, pb:this.cri_pb, pb_res:this.cri_pb_res, pbb:this.cri_pbb, pbb_res:this.cri_pbb_res,
                        eb:this.cri_eb, eb_res:this.cri_eb_res, pd:this.cri_pd, pd_res:this.cri_pd_res, 
                        da:this.cri_da, da_res:this.cri_da_res, total:this.cri_total};

            //Large H_O collider (lc)
            this.clc_q = $('#clc_q');           // quantity 
            this.clc_bp = $('#clc_bp');         //basic production
            this.clc_bp_res = $('#clc_bp_res'); // result of q . bp
            this.clc_u = $('#clc_u');           // multiplier from upgrades
            this.clc_u_res = $('#clc_u_res');   // result of bp_res . clc_u
            this.clc_hh = $('#clc_hh');         // +% from hh upgrades
            this.clc_hh_res = $('#clc_hh_res')  // result u_res + % clc_hh
            this.clc_l = $('#clc_l');           // +% from life upgrades
            this.clc_l_res = $('#clc_l_res');   // result hh_res + %  clc_l
            this.clc_bb = $('#clc_bb');         // +% from drops in bank
            this.clc_bb_res = $('#clc_bb_res'); // result lres + % clc_bb
            this.clc_at= $('#clc_at');          // +% from alien tech
            this.clc_at_res= $('#clc_at_res');  // resulte bb_res + % at
            this.clc_me = $('#clc_me');         // +% from achievements Mtn Eew
            this.clc_me_sc = $('#clc_me_sc');   // % of achievements
            this.clc_me_scboost = $('#clc_me_scboost');
            this.clc_me_res= $('#clc_me_res');  // results ar_res + % me
            this.clc_cbf_p = $('#clc_cbf_p');   //collaboration upgrade results
            this.clc_cbf_q = $('#clc_cbf_q');
            this.clc_cbf_res = $('#clc_cbf_res');
            this.clc_cbl_p = $('#clc_cbl_p');
            this.clc_cbl_q = $('#clc_cbl_q');
            this.clc_cbl_res = $('#clc_cbl_res');
            this.clc_lvl = $('#clc_lvl');
            this.clc_lvl_pres = $('#clc_lvl_pres');
            this.clc_lvl_res  = $('#clc_lvl_res');
            this.clc_st = $('#clc_st');         // * storm multiplier
            this.clc_st_res = $('#clc_st_res'); // result meres * storm multiplier
            this.clc_tu = $('#clc_tu');         // * turbo multiplier
            this.clc_tu_res = $('#clc_tu_res'); // result turbo multiplier
            this.clc_hs = $('#clc_hs');             // * helpers special mult.
            this.clc_hs_res = $('#clc_hs_res');     // result stres * helper special
            this.clc_dio = $('#clc_dio');           // +% of ocean upgrades
            this.clc_dio_res = $('#clc_dio_res');   // result of hs-res +% dio
            this.clc_kh = $('#clc_kh');             // +% of effective knowhow
            this.clc_kh_res = $('#clc_kh_res');     // result of diores +% effective knowhow
            this.clc_pb = $('#clc_pb');             // +10% if prayer "bonus" active
            this.clc_pb_res = $('#clc_pb_res');     // result of +% prayer "bonus"
            this.clc_pbb = $('#clc_pbb');             // +20% if prayer "Big bonus" active
            this.clc_pbb_res = $('#clc_pbb_res');     // result of +% prayer "Big bonus"
            this.clc_eb = $('#clc_eb');             // +60% if prayer "bonus" active
            this.clc_eb_res = $('#clc_eb_res');     // result of +% prayer "bonus"
            this.clc_pd = $('#clc_pd');             // x2 if prayer "Double" active
            this.clc_pd_res = $('#clc_pd_res');     // result of + prayer "Double"
            this.clc_da = $('#clc_da');             // -% drained by aliens
            this.clc_da_res = $('#clc_da_res');     // result khres-drained by aliens
            this.clc_total = $('#clc_total');       // totaal van helping hand

            var clc = { id:1, q:this.clc_q, bp:this.clc_bp, bp_res:this.clc_bp_res, u:this.clc_u, u_res:this.clc_u_res,
                        hh:this.clc_hh, hh_res:this.clc_hh_res, l:this.clc_l, l_res:this.clc_l_res, 
                        bb:this.clc_bb, bb_res:this.clc_bb_res, at:this.clc_at, at_res:this.clc_at_res,
                        me:this.clc_me, me_sc:this.clc_me_sc, me_scboost:this.clc_me_scboost, me_res:this.clc_me_res, 
                        cbf_p:this.clc_cbf_p, cbf_q:this.clc_cbf_q, cbf_res:this.clc_cbf_res, 
                        cbl_p:this.clc_cbl_p, cbl_q:this.clc_cbl_q, cbl_res:this.clc_cbl_res,
                        lvl:this.clc_lvl, lvl_pres:this.clc_lvl_pres, lvl_res:this.clc_lvl_res,
                        st:this.clc_st, st_res:this.clc_st_res, tu:this.clc_tu, tu_res:this.clc_tu_res,
                        hs:this.clc_hs, hs_res:this.clc_hs_res, dio:this.clc_dio, dio_res:this.clc_dio_res,
                        kh:this.clc_kh, kh_res:this.clc_kh_res, pb:this.clc_pb, pb_res:this.clc_pb_res, pbb:this.clc_pbb, pbb_res:this.clc_pbb_res,
                        eb:this.clc_eb, eb_res:this.clc_eb_res, pd:this.clc_pd, pd_res:this.clc_pd_res, 
                        da:this.clc_da, da_res:this.clc_da_res, total:this.clc_total};

            this.calculation.push(chh);
            this.calculation.push(cp);
            this.calculation.push(cad);
            this.calculation.push(cbu);
            this.calculation.push(cra);
            this.calculation.push(cfa);
            this.calculation.push(cgh);
            this.calculation.push(ctr);
            this.calculation.push(cfh);
            this.calculation.push(cim);
            this.calculation.push(csp);
            this.calculation.push(cwo);
            this.calculation.push(cri);
            this.calculation.push(clc);

        //initialise audio channels
        for (var a=0;a<this.channel_max;a++) {			
            this.audiochannels[a] = new Array();
            this.audiochannels[a]['channel'] = new Audio();		
            this.audiochannels[a]['channel'].volume = 0.5;
            this.volumePerc.text("50%");
            this.volumeSlider.value="50";
            this.audiochannels[a]['finished'] = -1;		
        }

        // click functions

        this.introStartButton.on('click', function(){
            self.introScreen.hide();
        });

        this.bigDrop.on('click', function() {     // clicking the big drop
            self._bigDropClick(); 
        });

        this.optionsSaveButton.on('click', function(){    //clicking the save button in options
            self._save();
        });

        this.fillTheOceansButton.on('click', function(){
            self._fillTheOceans();
        });

        this.fillTheOceansButtonTab.on('click', function(){
            self._fillTheOceans();
        });

        this.buyBuildingModeButton1.on('click', function(){
            self.buyBuildingMode = 1;
            self._setBuyBuildingModeButtons();
            $.each(self.buildings, function(i, building) {
                building.setButton();
            });
        });

        this.buyBuildingModeButton10.on('click', function(){
            self.buyBuildingMode = 10;
            self._setBuyBuildingModeButtons();
            $.each(self.buildings, function(i, building) {
                building.setButton();
            });
        });

        this.buyBuildingModeButton100.on('click', function(){
            self.buyBuildingMode = 100;
            self._setBuyBuildingModeButtons();
            $.each(self.buildings, function(i, building) {
                building.setButton();
            });
        });

        this.cloud.on('click', function(){
            self._cloudClicked();               
        });

        this.buyAllUpgradesButton.on('click', function(){
            self._buyAllUpgrades();
        });

        this.knowhowButton.on('click', function() {
            var cont = "<h2 style='margin:0; text-align:center;'>Know-how</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to turn your experience points into know-how?</br>Everything will go faster, but you'll have to start over.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._startKnowhow();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNotification.fadeOut(\"fast\");'>No</button></p>";
            Game._makeAlertNotification(cont, 0);
        });
        
        this.knowhowBackButton.on('click', function(){
			self.experienceToSpend -= self.knowhowToUndo;
            self.knowhow = self.knowhow - self.knowhowToUndo;
            self.knowhowscreenExpStats.text(Beautify(self.experienceToSpend));
            self.experiencePointsToSpendStats.text(Beautify(self.experienceToSpend));
            self.knowhowscreenKnowhowStats.text(Beautify(self.knowhow));
            self.textOfKnowhowStats.text(Beautify(self.knowhow));
            self._startTimers();
            if(self.aliensActive==1){
                var end = self.alienEnd * (1+(self.alienNumber/10));
                var start = self.alienStart * (1+(self.alienNumber/10));
                var max = end-start;
                var randomnum = Math.floor((Math.random() * max) + 1);
                var nextal = randomnum + start;
                self.alienTimer = window.setTimeout(function(){self._newAlien();}, nextal);
            }
            self.knowhowScreen.fadeOut("fast");
        });

        this.restartWithKnowhowButton.on('click', function(){
            self._resetWithKnowhow();
        });

        this.alertNotification.on('click', function(){
            self.alertNotification.fadeOut("fast");
        }).children().on('click', function(e) {
            return false;
        });

        this.poseidonImage.on('click', function(){
            if(Poseidon.poseidonStarted==1){
                Poseidon.poseidonMinigame.show("slow");
            } else if (Poseidon.poseidonStarted==0){
                Poseidon.poseidonStart.toggle("slow");
            } else{
                Poseidon.poseidonEnd.toggle("slow");
            }
        });

        this.templeImage.on('click', function(){
            self.poseidonSacrifice.toggle("slow");
            if(self.poseidonSacrificeVisible==0){
                self.poseidonSacrificeVisible=1;
            } else {
                self.poseidonSacrificeVisible=0;
            }
            self._sacrificeCheck();
        });

        this.poseidonSacrificeCloseButton.on('click', function(){
            self.poseidonSacrifice.hide("slow");
            self.poseidonSacrificeVisible=0;
        });

        this.sacrificeDiv.on('click', function(){
            self._sacrificeClick();
        });

        this.prayerDiv.on('click', function(){
            self.prayerToSelect=1;
            if(self.prayerSelectPosition==0){
                var x = document.getElementById("poseidonSacrifice").getBoundingClientRect();
                var sw = x.left+30;
                var sh = x.top-self.prayerSelectDiv.height()+30;if(sh<0){sh=2;}
                var posX = sw;
                var posY = sh +"px";
                self.prayerSelectDiv.css({'top':posY, 'left':posX});
                self.prayerSelectPosition=1;
            }
            self.prayerSelectDiv.toggle("slow");
        });

        this.secondPrayerDiv.on('click', function(){
            self.prayerToSelect=2;
            if(self.prayerSelectPosition==0){
                var x = document.getElementById("poseidonSacrifice").getBoundingClientRect();
                var sw = x.left+30;
                var sh = x.top-self.prayerSelectDiv.height()+30;if(sh<0){sh=2;}
                var posX = sw;
                var posY = sh +"px";
                self.prayerSelectDiv.css({'top':posY, 'left':posX});
                self.prayerSelectPosition=1;
            }
            self.prayerSelectDiv.toggle("slow");
        });

        this.prayerSelectDivCloseButton.on('click', function(){
            self.prayerSelectDiv.toggle("slow");
        });

        this.weatherstationImage.on('click', function(){
            self.weatherstationDiv.toggle("slow");
        });

        this.weatherstationDivCloseButton.on('click', function(){
            self.weatherstationDiv.toggle("slow");
        });

        this.weatherstationDivActiveButton.on('click', function(){
            if(self.weatherstationActive==0){
                self.weatherstationActive=1;
                self.weatherstationDivActiveButton.text("Disable");
                self.weatherstationDivActiveText.text("The weather station is enabled.");
                self.verbodDiv.hide();
            }else {
                self.weatherstationActive=0;
                self.weatherstationDivActiveButton.text("Enable");
                self.weatherstationDivActiveText.text("The weather station is disabled.");
                self.verbodDiv.show();
            }
        });

        this.verbodDiv.on('click', function(){
            self.weatherstationDiv.toggle("slow");
        });

        this.upgradeWeatherstationDiv.on('click', function(){
            self._upgradeWeatherstationClick();
        });

        this.exportButton.on('click', function(){
            self._exportSave();
        });

        this.importButton.on('click', function(){
            self._importSave();
        });

        this.resetButton.on('click', function() {
            var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to reset?</br>You will loose all your progress</br>and have to start over.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNotification.fadeOut(\"fast\");'>No</button></p>";
            self._makeAlertNotification(cont, 0);
            
        });

        this.endAStartOverButton.on('click', function(){
            var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to start over?</br>You will loose all your progress</br>and have to start over from scratch.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNotification.fadeOut(\"fast\");'>No</button></p>";
            self._makeAlertNotification(cont, 0);
        });
       
        this.endAHelpAliensButton.on('click', function(){
            self.maximumDropsInOcean = self.maximumDropsInOceanB;
            self.gameStage = 2;
                var perc = (self.dropsInOcean / self.maximumDropsInOcean)*100;
                self.oceanPercentage = Math.floor(perc); 
                self.textOfDropsInOcean.text(Beautify(self.dropsInOcean.toFixed(0),0));
                self.textOfDropsInOceanTab.text(Beautify(self.dropsInOcean.toFixed(0),0));

                var percbar = self._getOceanLog(self.dropsInOcean);
                self.textOfPercentageDropsInOcean.text(perc.toFixed(15));
                self.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));
                
                var csstop = 100-percbar+'%';
                var cssheight = percbar + '%';
                self.oceanProgressBar.css({'top':csstop, 'height':cssheight});

            self.endScreenA.hide();
        });

        this.endBStartOverButton.on('click', function(){
            var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to start over?</br>You will loose all your progress</br>and have to start over from scratch.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNotification.fadeOut(\"fast\");'>No</button></p>";
            self._makeAlertNotification(cont, 0);
        });

        this.endBInfinityButton.on('click', function(){
            self.maximumDropsInOcean = self.maximumDropsInOceanC;
            self.gameStage = 3;
                var perc = (self.dropsInOcean / self.maximumDropsInOcean)*100;
                self.oceanPercentage = Math.floor(perc); 
                self.textOfDropsInOcean.text(Beautify(self.dropsInOcean.toFixed(0),0));
                self.textOfDropsInOceanTab.text(Beautify(self.dropsInOcean.toFixed(0),0));

                var percbar = self._getOceanLog(self.dropsInOcean);
                self.textOfPercentageDropsInOcean.text(perc.toFixed(15));
                self.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));
                
                var csstop = 100-percbar+'%';
                var cssheight = percbar + '%';
                self.oceanProgressBar.css({'top':csstop, 'height':cssheight});

            self.endScreenB.hide();
        });

        this.endCStartOverButton.on('click', function(){
            var cont = "<h2 style='margin:0; text-align:center;'>Reset</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to start over?</br>You will loose all your progress</br>and have to start over from scratch.</br></br><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._reset();'>Yes</button>&nbsp;<button class='optionbutton' onclick='Game.alertNotification.fadeOut(\"fast\");'>No</button></p>";
            self._makeAlertNotification(cont, 0);
        });

        this.sun.on('click', function(){
            self._sunClicked();
        });

        this.saveAsFileButton.on('click', function(){
            self._saveAsFile();
        });

        this.goldcoin.on('click', function(){
            self.levelUpHelpers.toggle('slow');
        });

        this.levelUpHelpersBacktogameButton.on('click', function(){
            self.levelUpHelpers.toggle('slow');
        }); 

        //click on level up buttons
        this.levelUpHelpinghandButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[0].level++; 
                $('#levelHelpinghand').text(self.buildings[0].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[0].level>1){
                    self.levelUpHelpinghandStartMinigameButton.prop('disabled', false);
                }
                self.buildings[0].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpPipetteButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[1].level++; 
                $('#levelPipette').text(self.buildings[1].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[1].level>1){
                    self.levelUpPipetteStartMinigameButton.prop('disabled', false);
                }
                self.buildings[1].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpAirdryerButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[2].level++; 
                $('#levelAirdryer').text(self.buildings[2].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[2].level>1){
                    self.levelUpAirdryerStartMinigameButton.prop('disabled', false);
                }
                self.buildings[2].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpBucketButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[3].level++; 
                $('#levelBucket').text(self.buildings[3].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[3].level>1){
                    self.levelUpBucketStartMinigameButton.prop('disabled', false);
                }
                self.buildings[3].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpRaindanceButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[4].level++; 
                $('#levelRaindance').text(self.buildings[4].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[4].level>1){
                    self.levelUpRaindanceStartMinigameButton.prop('disabled', false);
                }
                self.buildings[4].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpFaucetButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[5].level++; 
                $('#levelFaucet').text(self.buildings[5].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[5].level>1){
                    self.levelUpFaucetStartMinigameButton.prop('disabled', false);
                }
                self.buildings[5].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpGardenhoseButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[6].level++; 
                $('#levelGardenhose').text(self.buildings[6].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[6].level>1){
                    self.levelUpGardenhoseStartMinigameButton.prop('disabled', false);
                }
                self.buildings[6].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpTruckButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[7].level++; 
                $('#levelTruck').text(self.buildings[7].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[7].level>1){
                    self.levelUpTruckStartMinigameButton.prop('disabled', false);
                    Carpark.active = 1;
                }
                self.buildings[7].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpFirehoseButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[8].level++; 
                $('#levelFirehose').text(self.buildings[8].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[8].level>1){
                    self.levelUpFirehoseStartMinigameButton.prop('disabled', false);
                }
                self.buildings[8].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpIcemineButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[9].level++; 
                $('#levelIcemine').text(self.buildings[9].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[9].level>1){
                    self.levelUpIcemineStartMinigameButton.prop('disabled', false);
                }self.buildings[9].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpSpaceshipButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[10].level++; 
                $('#levelSpaceship').text(self.buildings[10].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[10].level>1){
                    self.levelUpSpaceshipStartMinigameButton.prop('disabled', false);
                }
                self.buildings[10].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpWormholeButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[11].level++; 
                $('#levelWormhole').text(self.buildings[11].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[11].level>1){
                    self.levelUpWormholeStartMinigameButton.prop('disabled', false);
                }
                self.buildings[11].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpRiverButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[12].level++; 
                $('#levelRiver').text(self.buildings[12].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[12].level>1){
                    self.levelUpRiverStartMinigameButton.prop('disabled', false);
                }
                self.buildings[12].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });
        this.levelUpColliderButton.on('click', function(){
            if(self.numberOfGoldenCoinsToSpend>0){
                self.numberOfGoldenCoinsToSpend--;
                self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
                self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
                self.buildings[13].level++; 
                $('#levelCollider').text(self.buildings[13].level);
                if(self.numberOfGoldenCoinsToSpend==0){
                    self._setLevelUpButtonsNonActive();
                }
                if(self.buildings[13].level>1){
                    self.levelUpColliderStartMinigameButton.prop('disabled', false);
                }
                self.buildings[13].calculateCurrentProduction();
                self._calculateNumberOfDropsPerCLick();
                self._calculateDps();
            }
        });

        //click minigamebuttons
        this.levelUpHelpinghandStartMinigameButton.on('click', function(){
        });
        this.levelUpPipetteStartMinigameButton.on('click', function(){
        });
        this.levelUpAirdryerStartMinigameButton.on('click', function(){
        });
        this.levelUpBucketStartMinigameButton.on('click', function(){
        });
        this.levelUpRaindanceStartMinigameButton.on('click', function(){
        });
        this.levelUpFaucetStartMinigameButton.on('click', function(){
        });
        this.levelUpGardenhoseStartMinigameButton.on('click', function(){
        });
        this.levelUpTruckStartMinigameButton.on('click', function(){
            self.carparkGame.show("slow", Carpark._loadInit());
        });
        this.levelUpFirehoseStartMinigameButton.on('click', function(){
        });
        this.levelUpIcemineStartMinigameButton.on('click', function(){
        });
        this.levelUpSpaceshipStartMinigameButton.on('click', function(){
        });
        this.levelUpWormholeStartMinigameButton.on('click', function(){
        });
        this.levelUpRiverStartMinigameButton.on('click', function(){
        });
        this.levelUpColliderStartMinigameButton.on('click', function(){
        });

        // on change functions

        document.getElementById('loadFile').addEventListener('change', self._loadFile, false);

        this.numbersSelect.on('change', function(){
            if(this.value=="shortened"){
                self.numberOption = 0;
            }else if(this.value=="scientific"){
                self.numberOption = 1;
            }
            $.each(self.buildings, function(i, building) {
                building.setButton();
            });
        });

        this.littleDropOptionCheckbox.on('change', function(){
            if(this.checked){
                self.littleDropOption = 1;
            }else {
                self.littleDropOption = 0;
            }
        });

        this.showNumberOnScreenAfterCLickOptionCheckbox.on('change', function(){
            if(this.checked){
                self.showNumberOnScreenAfterCLickOption = 1;
            }else {
                self.showNumberOnScreenAfterCLickOption = 0;
            }
        });

        this.spinningBackgroundCheckbox.on('change', function(){
            if(this.checked){
                self.spinningBackground = 1;
                $('#dropbackgrounda').addClass("spinRight");
                $('#dropbackgroundb').addClass("spinLeft");
            }else {
                self.spinningBackground = 0;
                $('#dropbackgrounda').removeClass("spinRight");
                $('#dropbackgroundb').removeClass("spinLeft");
            }
        });

        this.movingWaterOptionCheckbox.on('change', function(){
            if(this.checked){
                self.movingWaterOption=1;
                self._waterWaves();
                self._updateWaterLevel(1);
            }else {
                self.movingWaterOption=0;
                
                self._updateWaterLevel(1);
            }
        });

        this.animateBigDropOptionCheckbox.on('change', function(){
            if(this.checked){
                self.animateBigDropOption=1;
                self.bigDrop.addClass("animateBigDrop");
            }else {
                self.animateBigDropOption=0;
                self.bigDrop.removeClass("animateBigDrop");
            }
        });

        this.volumeSlider.on("change mousemove", function() {
            self.volumePerc.text(self.volumeSlider.val()+"%");
            for (var a=0;a<self.channel_max;a++) {	
                self.audiochannels[a]['channel'].volume = self.volumeSlider.val()/100;
            }
        });

        this.cloudSoundOptionCheckbox.on('change', function(){
            if(this.checked){
               self.cloudSoundOption=1;
            }else {
                self.cloudSoundOption=0;
            }
        });

        this.clickSoundOptionCheckbox.on('change', function(){
            if(this.checked){
               self.clickSoundOption=1;
            }else {
                self.clickSoundOption=0;
            }
        });

        this.littleBackgroundDropsCheckbox.on('change', function(){
            if(this.checked){
               self.bgdropsOption=1;
               self._calculateDps();
            }else {
                self.bgdropsOption=0;
                self._calculateDps();
            }
        });

        this.calculationHelpingHandHeading.on('change', function(){
            if(this.checked){
                self.buildings[0].calculationVisible = 1;
                self.buildings[0].calculateCurrentProduction();
            }else {
                self.buildings[0].calculationVisible = 0;
            }
        });

        this.calculationPipetteHeading.on('change', function(){
            if(this.checked){
                self.buildings[1].calculationVisible = 1;
                self.buildings[1].calculateCurrentProduction();
            }else {
                self.buildings[1].calculationVisible = 0;
            }
        });

        this.calculationAirDryerHeading.on('change', function(){
            if(this.checked){
                self.buildings[2].calculationVisible = 1;
                self.buildings[2].calculateCurrentProduction();
            }else {
                self.buildings[2].calculationVisible = 0;
            }
        });

        this.calculationBucketHeading.on('change', function(){
            if(this.checked){
                self.buildings[3].calculationVisible = 1;
                self.buildings[3].calculateCurrentProduction();
            }else {
                self.buildings[3].calculationVisible = 0;
            }
        });

        this.calculationRaindanceHeading.on('change', function(){
            if(this.checked){
                self.buildings[4].calculationVisible = 1;
                self.buildings[4].calculateCurrentProduction();
            }else {
                self.buildings[4].calculationVisible = 0;
            }
        });

        this.calculationFaucetHeading.on('change', function(){
            if(this.checked){
                self.buildings[5].calculationVisible = 1;
                self.buildings[5].calculateCurrentProduction();
            }else {
                self.buildings[5].calculationVisible = 0;
            }
        });

        this.calculationGardenHoseHeading.on('change', function(){
            if(this.checked){
                self.buildings[6].calculationVisible = 1;
                self.buildings[6].calculateCurrentProduction();
            }else {
                self.buildings[6].calculationVisible = 0;
            }
        });

        this.calculationTruckHeading.on('change', function(){
            if(this.checked){
                self.buildings[7].calculationVisible = 1;
                self.buildings[7].calculateCurrentProduction();
            }else {
                self.buildings[7].calculationVisible = 0;
            }
        });

        this.calculationFireHoseHeading.on('change', function(){
            if(this.checked){
                self.buildings[8].calculationVisible = 1;
                self.buildings[8].calculateCurrentProduction();
            }else {
                self.buildings[8].calculationVisible = 0;
            }
        });

        this.calculationIceMineHeading.on('change', function(){
            if(this.checked){
                self.buildings[9].calculationVisible = 1;
                self.buildings[9].calculateCurrentProduction();
            }else {
                self.buildings[9].calculationVisible = 0;
            }
        });

        this.calculationSpaceshipHeading.on('change', function(){
            if(this.checked){
                self.buildings[10].calculationVisible = 1;
                self.buildings[10].calculateCurrentProduction();
            }else {
                self.buildings[10].calculationVisible = 0;
            }
        });

        this.calculationWormholeHeading.on('change', function(){
            if(this.checked){
                self.buildings[11].calculationVisible = 1;
                self.buildings[11].calculateCurrentProduction();
            }else {
                self.buildings[11].calculationVisible = 0;
            }
        });

        this.calculationRiverHeading.on('change', function(){
            if(this.checked){
                self.buildings[12].calculationVisible = 1;
                self.buildings[12].calculateCurrentProduction();
            }else {
                self.buildings[12].calculationVisible = 0;
            }
        });

        this.calculationColliderHeading.on('change', function(){
            if(this.checked){
                self.buildings[13].calculationVisible = 1;
                self.buildings[13].calculateCurrentProduction();
            }else {
                self.buildings[13].calculationVisible = 0;
            }
        });


        // hover functions

        this.poseidonSacrifice.on({
            mouseenter: function () {
                self.sacrificeDivHover=1;
                if(self.sacrificeDivActive==1){ 
                    self.sacrificeDiv.css({'background-color':'#01a2d7', '-moz-box-shadow':'inset 0 0 20px #55ffff', '-webkit-box-shadow':'inset 0 0 20px #55ffff', 'box-shadow':'inset 0 0 20px #55ffff'});
                }
            },
            mouseleave: function () { 
                self.sacrificeDivHover=0;
                if(self.sacrificeDivActive==1){ 
                    self.sacrificeDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
                }
            }
        }, ".hoverSel");

        this.weatherstationDiv.on({
            mouseenter: function () {
                self.upgradeWeatherstationDivHover=1;
                if(self.upgradeWeatherstationDivActive==1){ 
                    self.upgradeWeatherstationDiv.css({'background-color':'#01a2d7', '-moz-box-shadow':'inset 0 0 20px #55ffff', '-webkit-box-shadow':'inset 0 0 20px #55ffff', 'box-shadow':'inset 0 0 20px #55ffff'});
                }
            },
            mouseleave: function () { 
                self.upgradeWeatherstationDivHover=0;
                if(self.upgradeWeatherstationDivActive==1){ 
                    self.upgradeWeatherstationDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
                }
            }
        }, ".hoverSel");


        this.rainbow.hover(function(){
                // show popup
                addMouseListener();
                Game.popuprb.html('<table><tr><td><img src="images/rainbow.png"></td><td><p class="popuptitle">Rainbow</p><p>A rainbow is slowly showing up here.</p><p>At the end of the rainbow there is a gold coin, each time a rainbow is complete you get one gold coin. With this coin you can level up Helpers and unlock minigames.</p><p>Time to next golden coin: '+msToTime(self.rainbowTimeToNextCoin)+'</p></td></tr></table>');          
                Game.popuprb.show();
            }, function() {
                // on mouseout
                removeMouseListener();
                Game.popuprb.hide();
            }
        );

        // drag functions
        
        this.knowhowDrag.draggable({
            helper: function(){
                // Create an invisible div as the helper. It will move and
                // follow the cursor as usual.
                return $('<div></div>').css('opacity',0);
            },
            drag: function(event, ui){
                // During dragging, animate the original object to
                // follow the invisible helper with custom easing.
                var p = ui.helper.position();
                $(this).stop().animate({
                    top: p.top,
                    left: p.left
                },1000,'easeOutCirc');
            }
        });

        this.poseidonSacrifice.draggable();

        this.prayerSelectDiv.draggable();

        this.weatherstationDiv.draggable();

        //scroll scale functions
        this.knowhowUpgradesDiv.bind('mousewheel DOMMouseScroll', function(e) {

            if( e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) {
                var current_scale = parseFloat(self.knowhowUpgradesDiv.css('transform').split(',')[3]);
                if (current_scale>0.15){
                var scalenum = current_scale-0.05; 
                    var scaletxt = "scale("+scalenum+")";
                    self.knowhowUpgradesDiv.css({'transform':scaletxt});
                    var cur2 = ((scalenum -1)/100*30)+1;
                    var scaletxtb = "scale("+cur2+")";
                    self.dragstarDiv.css({'transform':scaletxtb});
                    var cur3 = ((scalenum -1)/100*60)+1;
                    var scaletxtc = "scale("+cur3+")";
                    self.superdragDiv.css({'transform':scaletxtc});
                    var zoomnum = 17+Math.round((scalenum-1)/0.05); 
                    self.zoominput.val(zoomnum);
                }	
                
            } else {
                var current_scale = parseFloat(self.knowhowUpgradesDiv.css('transform').split(',')[3]);
                if (current_scale<1.85){
                    var scalenum = current_scale+0.05;
                    var scaletxt = "scale("+scalenum+")";
                    self.knowhowUpgradesDiv.css({'transform':scaletxt});
                    var cur2 = ((scalenum -1)/100*30)+1;
                    var scaletxtb = "scale("+cur2+")";
                    self.dragstarDiv.css({'transform':scaletxtb});
                    var cur3 = ((scalenum -1)/100*60)+1;
                    var scaletxtc = "scale("+cur3+")";
                    self.superdragDiv.css({'transform':scaletxtc});
                    var zoomnum = 17+Math.round((scalenum-1)/0.05); 
                    self.zoominput.val(zoomnum);
                }
            }
        });

        this.zoombuttonplus.click(function(){
            var current_scale = parseFloat(self.knowhowUpgradesDiv.css('transform').split(',')[3]);
            if (current_scale<1.85){
                var scalenum = current_scale+0.05;
                var scaletxt = "scale("+scalenum+")";
                self.knowhowUpgradesDiv.css({'transform':scaletxt});
                var cur2 = ((scalenum -1)/100*30)+1;
                var scaletxtb = "scale("+cur2+")";
                self.dragstarDiv.css({'transform':scaletxtb});
                var cur3 = ((scalenum -1)/100*60)+1;
                var scaletxtc = "scale("+cur3+")";
                self.superdragDiv.css({'transform':scaletxtc});
                var zoomnum = 17+Math.round((scalenum-1)/0.05); 
                self.zoominput.val(zoomnum); 
            }
        });
        
        
        this.zoombuttonmin.click(function(){
            var current_scale = parseFloat(self.knowhowUpgradesDiv.css('transform').split(',')[3]);
            if (current_scale>0.15){
                var scalenum = current_scale-0.05; 
                var scaletxt = "scale("+scalenum+")";
                self.knowhowUpgradesDiv.css({'transform':scaletxt});
                var cur2 = ((scalenum -1)/100*30)+1;
                var scaletxtb = "scale("+cur2+")";
                self.dragstarDiv.css({'transform':scaletxtb});
                var cur3 = ((scalenum -1)/100*60)+1;
                var scaletxtc = "scale("+cur3+")";
                self.superdragDiv.css({'transform':scaletxtc});
                var zoomnum = 17+Math.round((scalenum-1)/0.05); 
                self.zoominput.val(zoomnum);
            }	
        });
        
        this.zoominput.on("change mousemove", function() {
            var zoomval = self.zoominput.val();
            var difFromCenter = zoomval-17;
            
                var scalenum = 0.05 * difFromCenter + 1;
                var scaletxt = "scale("+scalenum+")";
                self.knowhowUpgradesDiv.css({'transform':scaletxt});
                var cur2 = ((scalenum -1)/100*30)+1;
                var scaletxtb = "scale("+cur2+")";
                self.dragstarDiv.css({'transform':scaletxtb});
                var cur3 = ((scalenum -1)/100*60)+1;
                var scaletxtc = "scale("+cur3+")";
                self.superdragDiv.css({'transform':scaletxtc});
            
        });

        //initailaise prayers

        $.each(_prayers, function(i, _prayer) {
            var newPrayer = Prayer(_prayer).init();
            self.prayers.push(newPrayer);
        });

        // initialise buildings (helpers)
         // initialise 
        
         
        $.each(_buildings, function(i, _building) {		
            var newBuilding = Building(_building).init();
            self.buildings.push(newBuilding);  
        });
        this.buyBuildingMode = 1;
        this._setBuyBuildingModeButtons();
         $.each(self.buildings, function(i, building) {
             building.setButton();
         });

          //initialise knowhowupgrades
        
        $.each(_knowhowupgrades, function(i, _knowhowupgrade) {
            var newknowhowUpgrade = KnowhowUpgrade(_knowhowupgrade).init();
            self.knowhowUpgrades.push(newknowhowUpgrade);
        });	

        // initialise upgrades
        $.each(_upgrades, function(i, _upgrade) {		
            var newUpgrade = Upgrade(_upgrade).init();
            self.upgrades.push(newUpgrade);  
        });
        this.textOfTotalNumberOfUpgradesStats.text(self.upgrades.length);
        self.upgrades = self.upgrades.sort(function(a, b){return a.cost-b.cost}); // type upgrades on cost
        $.each(self.upgrades, function(i, _upgrade) {
            self.upgradesDiv.append(_upgrade.button);
        });

        // initialise achievements
        $.each(_achievements, function(i, _achievement) {
            var newAchievement = Achievement(_achievement).init();
            self.achievements.push(newAchievement);
        });	
        self.textOfTotalNumberOfAchievementsStats.text(self.achievements.length); // show number of total achievements on achievements page in stats

       


        self._load();
    },

    // Main tick
    _tick: function(diff) { //console.log(diff); // not for production, for testing lag
        var self = this;

        // let buildings produce and check for visibility
        $.each(this.buildings, function(i, building) {
            building.produce(diff);
            building.check();
        });
        
        //check for visibility of upgrades
        $.each(this.upgrades, function(i, upgrade) { 
            upgrade.checkstyle();
        });

        // check for unlocking of achievements
        $.each(this.achievements, function(i, achievement) {
            achievement.check();
        });

        $.each(this.aliensActiveList, function(i, alien) {
            alien.drain(diff);
        });

        // change number of drops in bank on screen 
        this.textOfNumberOfDropsInBank.text(Beautify(Math.floor(this.dropsInBank)));
        
        if((this.weatherstationLevel>0)&&(this.weatherstationLevel<9)){
            this._weatherstationCheck();
        }

        if ((this.sunVisible==1)&&(this.dropsInOcean>(this.sunLoss/1000*diff))){
            this.dropsInOcean = this.dropsInOcean - (this.sunLoss/1000*diff);
            var perc = (this.dropsInOcean / this.maximumDropsInOcean)*100;
            if (perc<25){
				this.sunActive=0;
			}
            this.textOfDropsInOcean.text(Beautify(this.dropsInOcean.toFixed(0),0));
            this.textOfDropsInOceanTab.text(Beautify(this.dropsInOcean.toFixed(0),0));
            this.textOfPercentageDropsInOcean.text(perc.toFixed(15));
            this.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));

            var percbar = this._getOceanLog(this.dropsInOcean);
                        
            if(percbar!=this.oldPercBar){
                var csstop = 100-percbar+'%';
                var cssheight = percbar + '%';
                this.oceanProgressBar.css({'top':csstop, 'height':cssheight});
                this.oldPercBar=percbar;
            }
        }
    },

    _backgroundDrop: function(){
        var self = this;
        if(this.numberOfBgDrops<40){
            this.numberOfBgDrops++;
            var littledropDiv = $("<div class='littledropbg'></div>");
            self.dropContainer.append(littledropDiv);
            var dc = document.getElementById('dropcontainer').getBoundingClientRect();
            var posX = randomIntFromInterval(0,(dc.width-20));
            littledropDiv.css({'display':'block','top':'0', 'left':posX});
            littledropDiv.addClass('bgdropanimation');
            littledropDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                    littledropDiv.remove();
                    self.numberOfBgDrops--;
                });
        }
    },

    // CLick Big Drop
    _bigDropClick: function() {	
        var self = this;
        // add one to the number of clicks on the big drop
        this.handmadeClicks++;
            //update text of number of handmade clicks in stats
            this.textOfNumberOfHandmadeClicksStats.text(Beautify(this.handmadeClicks));
        
        //calculate number of drops you get with the click
        // this.numberOfDropsPerClick = 1;  // trying to not calculate everytime is clicked but only when changes to number of drops per click are made
        
        // add number of drops to bank
        this.dropsInBank = this.dropsInBank + this.numberOfDropsPerClick; 
        if(this.dropsInBank<0){this.dropsInBank=0;} // Number of drops in bank must always be positive

        // add number of drops to total of drops made by clicking
        this.handmadeDrops = this.handmadeDrops + this.numberOfDropsPerClick;
            //update text of number of handmade drops in stats
            this.textOfNumberOfHandmadeDropsStats.text(Beautify(this.handmadeDrops.toFixed(0)));

        // add number of drops to total of drops made this experiencelevel
        this.totalDropsThisExperienceLevel = this.totalDropsThisExperienceLevel + this.numberOfDropsPerClick;

        // add number of drops to total of drops made ever
        this.totalDropsEver += this.numberOfDropsPerClick; 

        // show jumping drop on screen if option is chosen
        if (this.littleDropOption==1){
            self._showLittleDrop();
        }

        // show number of drops you get with click on screen
        if(this.showNumberOnScreenAfterCLickOption==1){
            this._showNumberOnScreenAfterCLick(this.numberOfDropsPerClick);
        }

        $.each(this.upgrades, function(i, upgrade) { 
            upgrade.check();
        });
    },

    _calculateNumberOfDropsPerCLick: function(){
        var self = this;
        this._calculateDps();
        var multiplier = 1;
        var numberToAdd = 0;
        this.percentageOfDpsPerClick = 0;
        $.each(this.boughtUpgrades, function(i, _upgrade) {
            if(_upgrade.type=="hand"){
                if(_upgrade.other==0){
                    multiplier *= _upgrade.multiplier;
                }else{
                    numberToAdd = numberToAdd + (self.totalNumberOfBuildings*_upgrade.multiplier);
                }
            }else if(_upgrade.type=="mouse"){
                self.percentageOfDpsPerClick = self.percentageOfDpsPerClick + _upgrade.perc;
                
            }
        });
        this.basicNumberOfDropsPerClick = (1 * multiplier)+numberToAdd;
        this.numberOfDropsPerClick = this.basicNumberOfDropsPerClick + (this.dps*this.percentageOfDpsPerClick/100);
        if(this.clickStormActive==1){   
            this.numberOfDropsPerClick = this.numberOfDropsPerClick * this.clickStormMultiplier;
        }

        if(this.prayerClickpowerActive==1){
            this.numberOfDropsPerClick = this.numberOfDropsPerClick * 1.5;
        }
        if(this.wrathActive==1){
            this.numberOfDropsPerClick = this.numberOfDropsPerClick * this.wrathMultiplier;
        }
        this.textOfNumberOfDropsPerClickStats.text(Beautify(this.numberOfDropsPerClick.toFixed(0)));
    },

    //cloud functions
    _cloudClicked:function(){
        var self = this;
        this.cloud.css("pointer-events", "none");
        
        this.cloudAutoclick=0;

        this.cloudsClicked++;
        this.textOfNumberOfCloudsClickedStats.text(this.cloudsClicked);
        this.cloudsClickedEver++;

        clearTimeout(this.showCloudTimer);
		clearTimeout(this.hideCloudTimer);
        
        this._startCloudTimer();

        //randomize what happens
        var randOutcome = Math.floor((Math.random() * 100) + 1); // number between 1 and 100
        if ((randOutcome>=1)&&(randOutcome<=96)){
            //96% to divide
            if ((randOutcome>=1)&&(randOutcome<=35)){ //38% to give drops
                this._cloudGivesDrops();
            }else if ((randOutcome>=36)&&(randOutcome<=70)){ //38% to give storm
                this._cloudGivesStorm();
            }else if ((randOutcome>=71)&&(randOutcome<=76)){ //if wrath + turbo active together
                if((this.prayerTurboActive==1)&&(this.prayerWrathActive==1)){
                    this._cloudGivesWrath();
                }else{
                    if((randOutcome>=71)&&(randOutcome<=73)){
                        this._cloudGivesStorm();
                    }else{
                        this._cloudGivesDrops();
                    }
                }
            }else if ((randOutcome>=77)&&(randOutcome<=90)){ // each building 1% chance for a building special
                if (self.buildings[randOutcome-77].quantity>=100){
                    self._buildingSpecial(randOutcome-77);
                    self.cloud.hide();
                    self.cloud.css("pointer-events", "auto");
                }else {
                    this._cloudGivesDrops();
                }   
            }else if ((randOutcome>=91)&&(randOutcome<=96)){ // if certain prayer selected it gives certain special, if no prayer 50/50 drops or storm
                if((this.prayerTurboActive==1)&&(this.prayerWrathActive==1)){
                    this._cloudGivesTurbo();
                }else if(this.prayerTurboActive==1){
                    this._cloudGivesTurbo();
                }else if(this.prayerWrathActive==1){
                    this._cloudGivesWrath();
                }else{
                    if((randOutcome>=91)&&(randOutcome<=93)){
                        this._cloudGivesStorm();
                    }else{
                        this._cloudGivesDrops();
                    }
                }
            }
        } else { 
            // 4% clickstorm
            this._cloudGivesClickStorm(); 
        }

        $.each(self.upgrades, function(i, upgrade) { 
            upgrade.check();
        });
    },

    //sun
    _startSun: function(){
        var self = this;
        
        var max = this.sunEnd-this.sunStart;
        var randomnum = Math.floor((Math.random() * max) + 1);

        var nextSun = this.sunStart + randomnum;
        this.showSunTimer = window.setTimeout(function(){self._showSun();}, nextSun);
    },

    _showSun:function(){
        var self = this;

        clearTimeout(this.showSunTimer);
        clearTimeout(this.hideSunTimer);
        
        if (this.sunActive==1){

            this.hideSunTimer = window.setTimeout(function(){self._hideSun();}, self.sunDuration);

            this.sunClick = 0;
            var i = 0;
           
            var randomw = Math.floor((Math.random() * (vw-200))) + "px";
            var randomh = Math.floor((Math.random() * (vh-200))) + "px";
            self.sun.css({'left':randomw, 'top':randomh});
            this.cloud.fadeIn(2000);
            this.sunVisible=1;
        }
    },

    _hideSun: function(){ 
        var self = this;
        clearTimeout(this.showSunTimer);
        clearTimeout(this.hideSunTimer);
        if (this.sunVisible==1){
            this.sun.fadeOut(2000, function(){
                if(self.sunActive==1){
                    self._startSun();
                }
            });
            this.sunVisible=0;
        }
    },

    _sunClicked: function(){
        var self = this;
        this.sunClick++;
        this.sunClicks.text(this.sunClick);
        if (this.sunClick==3){
            clearTimeout(this.showSunTimer);
            clearTimeout(this.hideSunTimer);
            this.sunClick=0; this.sunClicks.text(this.sunClick);
            this.sun.css({'display':'none'});
            this.sunVisible=0;
            if(self.sunActive==1){
                self._startSun();
            }
        }
    },

    //cloud
    _showCloud:function(){
        var self = this;
        this.cloudAutoclick=1;
        clearTimeout(this.showCloudTimer);
		clearTimeout(this.hideCloudTimer);
        this.hideCloudTimer = window.setTimeout(function(){self._hideCloud();}, self.cloudDuration);
        
        this.cloudVisible = 1;
        if((this.weatherstationLevel>0)&&(this.weatherstationActive==1)){
            window.setTimeout(function(){self._autoclickCloud();}, 3000);
        }
        this.totalCloudsShownEver++;

        var randomw = Math.floor((Math.random() * (vw-200))) + "px";
        var randomh = Math.floor((Math.random() * (vh-200))) + "px";
        self.cloud.css({'left':randomw, 'top':randomh});

        if (this.cloudSoundOption == 1){
            this._playSound("cloudping");
        }

        this.cloud.fadeIn(5000);
    },

    _hideCloud: function(){ 
        var self = this;
        clearTimeout(this.showCloudTimer);
        clearTimeout(this.hideCloudTimer);
        if (this.cloudVisible==1){
            this.cloud.fadeOut(5000, function(){
                self._startCloudTimer();
            });
        }
    },

    _autoclickCloud:function(){
        var self = this;
        if(this.weatherstationLevel==1){
            var autoclick = randomIntFromInterval(1,5);
            if (autoclick==1){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==2){
            var autoclick = randomIntFromInterval(1,3);
            if (autoclick==1){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==3){
            var autoclick = randomIntFromInterval(1,10);
            if (autoclick<5){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==4){
            var autoclick = randomIntFromInterval(1,10);
            if (autoclick<6){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==5){
            var autoclick = randomIntFromInterval(1,10);
            if (autoclick<7){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==6){
            var autoclick = randomIntFromInterval(1,10);
            if (autoclick<8){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==7){
            var autoclick = randomIntFromInterval(1,10);
            if (autoclick<9){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==8){
            var autoclick = randomIntFromInterval(1,10);
            if (autoclick<10){
                if(this.cloudAutoclick==1){
                    self._shootLaserAtCloud();
                    self.cloud.click();
                }
            }
        }else if(this.weatherstationLevel==9){
            if(this.cloudAutoclick==1){
                self._shootLaserAtCloud();
                self.cloud.click();
            }
        }
    },

    _shootLaserAtCloud: function(){
        var context = this.laserCanvas.getContext("2d");
        context.clearRect(0, 0, this.laserCanvas.width, this.laserCanvas.height);

        context.strokeStyle   = "#1EFF00";
        context.lineWidth     = 3;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur    = 15;
        context.shadowColor   = "#1EFF00";

        var startPos = document.getElementById("weatherstationImage").getBoundingClientRect();
        var xStart = startPos.left+33;
        var yStart = startPos.top+3;

        var endPos = document.getElementById("cloud").getBoundingClientRect();
        var xEnd = endPos.left + 100;
        var yEnd = endPos.top + 50;
        
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(xStart, yStart);
        context.lineTo(xEnd, yEnd);
        context.stroke();
        window.setTimeout(function() {  
             context.clearRect(0, 0, this.laserCanvas.width, this.laserCanvas.height);
        }, 100);
    },

    _buildingSpecial: function(id){
        var self = this;
        this.buildingSpecialsImage.css({'background':'transparent url("images/'+ this.buildings[id].name +'.png") no-repeat right center'});
        if(id!=13){
            this.buildingSpecialsTitle.text(this.buildings[id].name+" overdrive");
        }else{
            this.buildingSpecialsTitle.text("Collider overdrive");
        }
        this.buildingSpecialsBar.css({'width':'150'});
		this.buildingSpecialsDiv.show();
        if (this.buildingSpecialsActive==0){
            this.buildingSpecialsActive=id+1;
            var buildingMultiplier = this.buildings[id].quantity
            if ((this.buildings[id].quantity>=100)&&(this.buildings[id].quantity<200)){
                buildingMultiplier = buildingMultiplier *50;
            }else if (this.buildings[id].quantity>=200){
                buildingMultiplier = buildingMultiplier *500;
            }
            this._makeNotice(this.buildings[id].name, "Special!", this.buildings[id].name+"s are in overdrive and give you "+buildingMultiplier+" times your drops per second for "+ this.buildingSpecialsDuration/1000+" seconds!",0,0,0);
            this.buildings[id].calculateCurrentProduction();
            var i = 0;
			var interv = setInterval(frame, 10);
            this._calculateDps();
            this._calculateNumberOfDropsPerCLick();
			function frame() { 
				if (i>=(self.buildingSpecialsDuration/10)){
					clearInterval(interv);
					self.buildingSpecialsActive=0;
					self.buildingSpecialsBar.css({'width':'150px'});
                    self.buildingSpecialsDiv.hide();
                    self.buildings[id].calculateCurrentProduction();
                    self._calculateDps();
                    self._calculateNumberOfDropsPerCLick();
				} else{
					var w = 150-(150/(self.buildingSpecialsDuration/10)*i)+"px";
					self.buildingSpecialsBar.css({'width':w});
					i++;
				}
			}
        }
    },

    // cloud specials

    _cloudGivesDrops: function(){
        var self = this;
        var cloudpos = document.getElementById("cloud").getBoundingClientRect();
        var rainDiv = $("<div class='rain'></div>");
        $("body").append(rainDiv);
        
        var posX = cloudpos.left+50;
        var posY = cloudpos.top+85;
        rainDiv.css({'left':posX,'top':posY});
        rainDiv.show();
        window.setTimeout(function() {  
            rainDiv.remove();
            self.cloud.css("pointer-events", "auto");
            self.cloud.hide();   
        }, 2000);

        this._calculateDps();
        var partdib = Math.round(this.drops_in_bank*15/100);
        var dpsMultiple = this.dps * 900;

        if (partdib<dpsMultiple){ // if 15% of drops in bank is less than 900 times the dps get 15% of drops in bank extra
            if(partdib>0){
                if(this.prayerHeavyRainActive==1){
                    partdib = partdib*1.5;
                }
                this.totalDropsThisExperienceLevel += partdib;
				this.totalDropsEver += partdib; 
                this.dropsInBank += partdib; if(this.dropsInBank<0){this.dropsInBank=0;}
                var txt = "You got lucky with rain and got "+ Beautify(partdib) + " extra drops!";  
				this._makeNotice("rain", "Rain!",txt,0,0,0);
            }
        }else {
            if (dpsMultiple>0){ //if 15% of drops in bank is more than 900 times the dps get 900 times the dps extra
                if(this.prayerHeavyRainActive==1){
                    dpsMultiple = dpsMultiple*1.5;
                }
                this.totalDropsThisExperienceLevel += dpsMultiple;
                this.totalDropsEver += dpsMultiple; 
                this.dropsInBank += dpsMultiple; if(this.dropsInBank<0){this.dropsInBank=0;}
                var txt = "You got lucky with rain and got "+ Beautify(dpsMultiple) + " extra drops!";  
                this._makeNotice("rain", "Rain!",txt,0,0,0);
            }
        }
    },

    _cloudGivesStorm: function(){
        var self = this;
        var cloudpos = document.getElementById("cloud").getBoundingClientRect();
        var stormDiv = $("<div class='storm'></div>");
        $("body").append(stormDiv);
        var posX = cloudpos.left+20;
        var posY = cloudpos.top+65;
        stormDiv.css({'left':posX,'top':posY});
        stormDiv.show();
        window.setTimeout(function() {  
            stormDiv.remove();
            self.cloud.css("pointer-events", "auto");
            self.cloud.hide();   
        }, 2000);

        if (this.stormActive==0){
            this.stormActive=1;
            $.each(self.buildings, function(i, _building) {
                _building.calculateCurrentProduction();
            });
            this._calculateDps();
            this._calculateNumberOfDropsPerCLick();
            this._stormCountDown();
            this._makeNotice("storm", "Storm!","Drops per second times 7 for "+ this.stormDuration/1000 +" seconds",0,0,0);
        }else{
            this.stormActive=2;
        }
    },

    _stormCountDown:function(){
        var self = this;
        var i = 0;
        var interv = setInterval(frame, 10);
        function frame() { 
            if (i>=(self.stormDuration/10)){
                clearInterval(interv);
                self.stormActive=0;
                $.each(self.buildings, function(i, _building) {
                    _building.calculateCurrentProduction();
                });
                self._calculateDps();
                self._calculateNumberOfDropsPerCLick();
                self.stormTimer.css({'display':'none', 'width':'100%'});
            } else{
                var w = 100-(100/(self.stormDuration/10)*i) + '%';
                self.stormTimer.css({'display':'block', 'width':w});
                i++;
            }
            if (self.stormActive==2){
                clearInterval(interv);
                self.stormActive=0;
                self.stormTimer.css({'display':'none', 'width':'100%'});
                self._cloudGivesStorm();
            }
        }
    },

    _cloudGivesTurbo:function(){
        var self = this;
        self.cloud.css("pointer-events", "auto");
        self.cloud.hide(); 
        if (this.turboActive==0){
            this.turboActive=1;
            $.each(this.buildings, function(i, _building) {
                _building.calculateCurrentProduction();
            });
            this._calculateDps();
            this._calculateNumberOfDropsPerCLick();
            this._turboCountDown();
            this._makeNotice("turbo", "Turbo!","Drops per second times "+ this.turboMultiplier +" for "+ this.turboDuration/1000 +" seconds",0,0,0);
        }else{
            this.turboActive=2;
        }
    },

    _turboCountDown:function(){
        var self = this;
        var i = 0;
        var interv = setInterval(frame, 10);
        function frame() { 
            if (i>=(self.turboDuration/10)){
                clearInterval(interv);
                self.turboActive=0;
                $.each(self.buildings, function(i, _building) {
                    _building.calculateCurrentProduction();
                });
                self._calculateDps();
                self._calculateNumberOfDropsPerCLick();
                self.turboTimer.css({'display':'none', 'width':'100%'});
            } else{
                var w = 100-(100/(self.turboDuration/10)*i) + '%';
                self.turboTimer.css({'display':'block', 'width':w});
                i++;
            }
            if (self.turboActive==2){
                clearInterval(interv);
                self.turboActive=0;
                self.turboTimer.css({'display':'none', 'width':'100%'});
                self._cloudGivesTurbo();
            }
        }
    },

    _cloudGivesWrath:function(){
        var self = this;
        self.cloud.css("pointer-events", "auto");
        self.cloud.hide(); 
        if (this.wrathActive==0){
            if (self.clickSoundOption == 1){
				self._playSound("clickping");
			}
            this.wrathActive=1;
            this._calculateNumberOfDropsPerCLick();
            this._wrathCountDown();
            this._makeNotice("wrath", "Wrath!","Clicking times "+this.wrathMultiplier+" for "+ this.wrathDuration/1000+" seconds!",0,0,0);
        }else{
            this.wrathActive=2;
        }
    },

    _wrathCountDown:function(){
        var self = this;
        var i = 0;
        var interv = setInterval(frame, 10);
        self.wrathTimer.css({'display':'none', 'width':'100%'});
        function frame() { 
            if (i>=(self.wrathDuration/10)){
                clearInterval(interv);
                self.wrathActive=0;
                self._calculateNumberOfDropsPerCLick();
                self.wrathTimer.css({'display':'none', 'width':'100%'});
            } else{
                var w = 100-(100/(self.wrathDuration/10)*i) + '%';
                self.wrathTimer.css({'display':'block', 'width':w});
                i++;
            }
            if (self.wrathActive==2){
                clearInterval(interv);
                self.wrathActive=0;
                self.wrathTimer.css({'display':'none', 'width':'100%'});
                self._cloudGivesWrath();
            }
        }
    },

    _cloudGivesClickStorm: function(){
        var self = this;
        self.cloud.css("pointer-events", "auto");
        self.cloud.hide(); 
        if (this.clickStormActive==0){
            if (self.clickSoundOption == 1){
				self._playSound("clickping");
			}
            this.clickStormActive=1;
            this._calculateNumberOfDropsPerCLick();
            this._clickStormCountDown();
            this._makeNotice("clickstorm", "Click storm!","Clicking times "+this.clickStormMultiplier+" for "+ this.clickStormDuration/1000+" seconds!",0,0,0);
        }else{
            this.clickStormActive=2;
        }
    },

    _clickStormCountDown:function(){
        var self = this;
        var i = 0;
        var interv = setInterval(frame, 10);
        self.clickStormTimer.css({'display':'none', 'width':'100%'});
        function frame() { 
            if (i>=(self.clickStormDuration/10)){
                clearInterval(interv);
                self.clickStormActive=0;
                self._calculateNumberOfDropsPerCLick();
                self.clickStormTimer.css({'display':'none', 'width':'100%'});
            } else{
                var w = 100-(100/(self.clickStormDuration/10)*i) + '%';
                self.clickStormTimer.css({'display':'block', 'width':w});
                i++;
            }
            if (self.clickStormActive==2){
                clearInterval(interv);
                self.clickStormActive=0;
                self.clickStormTimer.css({'display':'none', 'width':'100%'});
                self._cloudGivesClickStorm();
            }
        }
    },

    // aliens

    _startAliens: function(){
		
        var self = this;
        var end = self.alienEnd * (1+(self.alienNumber/10));
        var start = self.alienStart * (1+(self.alienNumber/10));
        var max = end-start;
        var randomnum = Math.floor((Math.random() * max) + 1);
        var nextal = randomnum + start;
        var maxAliens = this.aliens.length;
        for (var i=0; i<maxAliens; i++){
            var newalien = this.aliens.pop();
            var nAlien = Alien(newalien).init();
            this.aliensList.push(nAlien);
            this.aliensPopList.push(nAlien);
        }
        this.aliensActive=1;
        this.alienTimer = window.setTimeout(function(){self._newAlien();}, nextal);
    },

    _newAlien: function(){
			
        var self = this;
        this.aliensPopList = this.aliensPopList.sort(function() { return 0.5 - Math.random() });

        if (this.aliensPopList.length>0){
            var nAlien = this.aliensPopList.pop();
        
            var starttxt = 'translate('+nAlien.startpos+'px, -411px) rotate(0.0deg)'; 
           
            nAlien.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/alien.png)', 'transform': starttxt, 'transform-origin': '45px 222px' });
            nAlien.div.fadeIn("fast");
            nAlien.div.show();	
            nAlien.div.css("pointer-events", "none");
            
            var i = -411;
            var ia = 0;
            var interv = setInterval(frame, 10);
            nAlien.moving=1;
            function frame() { 
                if (i>=-111){
                    clearInterval(interv);
                    var interva = setInterval(framea, 5);
                        function framea(){
                            if (ia==(nAlien.angle*10)){
                                var txt ='';
                                if (nAlien.startpos>0){
                                    txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
                                    
                                }else{
                                    txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
                                }
                                
                                nAlien.div.css({'transform': txt});
                                clearInterval(interva);
                               
                                    nAlien.div.css({'background-image':'url(images/alienlaser.png)'});
                                    nAlien.div.css("pointer-events", "auto");
                                    nAlien.div.addClass(nAlien.hover);
                                    nAlien.active=1;
                                    nAlien.moving=0;
                                    self.alienNumber++;
                                    self.aliensActiveList.push(nAlien);
                                
                                    $.each(self.buildings, function(i, _building) {
                                        _building.calculateCurrentProduction();
                                    });
                                    self._calculateDps();

                                    var end = self.alienEnd * (1+(self.alienNumber/10));
                                    var start = self.alienStart * (1+(self.alienNumber/10));
                                    var max = end-start;
                                    var randomnum = Math.floor((Math.random() * max) + 1);
                                    var nextal = randomnum + start;
                                    self.alienTimer = window.setTimeout(function(){self._newAlien();}, nextal);
                            }
                            else {
                                var txt = '';
                                if (nAlien.startpos>0){
                                    txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";   
                                }else{
                                    txt = "translate("+(nAlien.startpos-((ia/(nAlien.angle*10))*nAlien.startpos))+"px, "+i+"px) rotate(" + ia/10 + "deg)";
                                }
                                
                                nAlien.div.css({'transform': txt});
                                if (nAlien.moving==0){
                                    clearInterval(interva);
                                    var end = self.alienEnd * (1+(self.alienNumber/10));
                                    var start = self.alienStart * (1+(self.alienNumber/10));
                                    var max = end-start;
                                    var randomnum = Math.floor((Math.random() * max) + 1);
                                    var nextal = randomnum + start;
                                
                                    self.alienTimer = window.setTimeout(function(){self._newAlien();}, nextal);
                                }
                            }
                            if (nAlien.angle>0){
                                ia++;
                            }else{
                                ia--;
                            }
                        }
                }
                else {
                    var txt = "translate("+nAlien.startpos+"px, "+i+"px) rotate(0.0deg)";
                    
                    nAlien.div.css({'transform': txt});
                    
                    if(nAlien.moving==0){
                        clearInterval(interv);
                        var end = self.alienEnd * (1+(self.alienNumber/10));
                        var start = self.alienStart * (1+(self.alienNumber/10));
                        var max = end-start;
                        var randomnum = Math.floor((Math.random() * max) + 1);
                        var nextal = randomnum + start;
                            
                        self.alienTimer = window.setTimeout(function(){self._newAlien();}, nextal);
                    }
                }
                i++;
            }
        }
        else {
            var end = self.alienEnd * (1+(self.alienNumber/10));
            var start = self.alienStart * (1+(self.alienNumber/10));
            var max = end-start;
            var randomnum = Math.floor((Math.random() * max) + 1);
            var nextal = randomnum + start;
            
            self.alienTimer = window.setTimeout(function(){self._newAlien();}, nextal);
        }             
    },

    _startContact: function(){ 
        var self = this;
        var i = 0;
        this.contactTimer = setInterval(countDown, 1000);
        //this.contactTimer = setInterval(countDown, 10);
        function countDown(){
            if (i>=self.alienContactDuration){
                clearInterval(self.contactTimer);
                self.textNextMeetingWithAliensStats.text("0 minutes 0 seconds");
                self.nextMeetingWithAliensDiv.fadeOut("slow");
   
                if (self.contactNumber==1){
                    var ncontact = $.grep(self.upgrades, function(e){ if (e.name == "Friendly aliens"){ return e;} });
                    ncontact[0].button.fadeIn("fast");
                    ncontact[0].visible=1;
                    self.alienContact++;
                }else if (self.contactNumber==2){
                    var ncontact = $.grep(self.upgrades, function(e){ if (e.name == "Reluctant aliens"){ return e;} });
                    ncontact[0].button.fadeIn("fast");
                    ncontact[0].visible=1;
                    self.alienContact++;
                }else if (self.contactNumber==3){
                    var ncontact = $.grep(self.upgrades, function(e){ if (e.name == "Aliens are mad"){ return e;} });
                    ncontact[0].button.fadeIn("fast");
                    ncontact[0].visible=1;
                    self.alienContact++;
                }
            }else{
                self.nextMeetingWithAliensDiv.show();
                var t = self.alienContactDuration-i;
                var min = Math.floor(t/60);
                var sec = t%60;
                var txt = min + " minutes " + sec + " seconds"
                self.textNextMeetingWithAliensStats.text(txt);
            }
            i++;
        }
    },

    // Fill The Ocean Button clicked
    _oceanClickGo: function(percd){
        var self = this;
        this.alertNotification.fadeOut("fast");
        if (this.dropsInBank>0){
            if (percd<=100){
                this.dropsInOcean = this.dropsInOcean + (this.dropsInBank/100*percd);
                this.dropsInBank = this.dropsInBank - (this.dropsInBank/100*percd); 
                if(this.dropsInBank<0){this.dropsInBank=0;}
                var perc = (this.dropsInOcean / this.maximumDropsInOcean)*100;
                this.oceanPercentage = Math.floor(perc); 
                this.textOfDropsInOcean.text(Beautify(this.dropsInOcean.toFixed(0),0));
                this.textOfDropsInOceanTab.text(Beautify(this.dropsInOcean.toFixed(0),0));

                var percbar = this._getOceanLog(this.dropsInOcean);
                this.textOfPercentageDropsInOcean.text(perc.toFixed(15));
                this.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));
                
                var csstop = 100-percbar+'%';
                var cssheight = percbar + '%';
                this.oceanProgressBar.css({'top':csstop, 'height':cssheight});

                this.oceanProgressBar.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(){  
                    if (self.dropsInOcean>=self.maximumDropsInOcean){
                        if(self.gameStage==1){
                            self.endScreenA.show("scale", 2000);  
                        }else if(self.gameStage==2){
                            self.endScreenB.show("scale", 2000); 
                        }else{
                            self.endScreenC.show("scale", 2000); 
                        }
                    }
                });
                
                if (perc>=25){
                    this._startSun();
                    this.sunActive=1;
                } else {
                    this.sunActive=0;
                } 
            }
            $.each(self.upgrades, function(i, upgrade) { 
                upgrade.check();
            });
        }
    },

    // calculate crazyscientistsMultiplier
    _calculateCrazyscientistsBoost: function(){
        this.crazyscientistsMultiplier = 1 +(this.numberOfCrazyscientists*0.2);
        if(this.prayerBrainpowerActive==1){
            this.crazyscientistsMultiplier = this.crazyscientistsMultiplier + (this.crazyscientistsMultiplier /100 *10);
        }
        if(this.prayerBrainwavesActive==1){
            this.crazyscientistsMultiplier = this.crazyscientistsMultiplier + (this.crazyscientistsMultiplier /100 *20);
        }
        if(this.prayerBraingrowthActive==1){
            this.crazyscientistsMultiplier = this.crazyscientistsMultiplier + (this.crazyscientistsMultiplier /100 *40);
        }
        this.mntEewMultStats.text(this.crazyscientistsMultiplier);
    },

    _getOceanLog: function(dio){
        var self = this;
        if(this.gameStage==1){
            var ret = 0;
            if (dio>=9.34279E+25){ret=99;} else if (dio>=5.73177E+25){ret=98} else if (dio>=3.51642E+25){ret=97} else if (dio>=2.15732E+25){ret=96}
            else if (dio>=1.32351E+25){ret=95} else if (dio>=8.11967E+24){ret=94} else if (dio>=4.98139E+24){ret=93} else if (dio>=3.05607E+24){ret=92}
            else if (dio>=1.87489E+24){ret=91} else if (dio>=1.15024E+24){ret=90} else if (dio>=7.05668E+23){ret=89} else if (dio>=4.32925E+23){ret=88}
            else if (dio>=2.65598E+23){ret=87} else if (dio>=1.62944E+23){ret=86} else if (dio>=9.99655E+22){ret=85} else if (dio>=6.13285E+22){ret=84}
            else if (dio>=3.76249E+22){ret=83} else if (dio>=2.30827E+22){ret=82} else if (dio>=1.41612E+22){ret=81} else if (dio>=8.68784E+21){ret=80}
            else if (dio>=5.32997E+21){ret=79} else if (dio>=3.26992E+21){ret=78} else if (dio>=2.00608E+21){ret=77} else if (dio>=1.23073E+21){ret=76}
            else if (dio>=7.55047E+20){ret=75} else if (dio>=4.63219E+20){ret=74} else if (dio>=2.84183E+20){ret=73} else if (dio>=1.74346E+20){ret=72}
            else if (dio>=1.06961E+20){ret=71} else if (dio>=6.562E+19){ret=70} else if (dio>=4.02576E+19){ret=69} else if (dio>=2.46979E+19){ret=68}
            else if (dio>=1.51521E+19){ret=67} else if (dio>=9.29577E+18){ret=66} else if (dio>=5.70293E+18){ret=65} else if (dio>=3.49873E+18){ret=64}
            else if (dio>=2.14646E+18){ret=63} else if (dio>=1.31685E+18){ret=62} else if (dio>=8.07881E+17){ret=61} else if (dio>=4.95633E+17){ret=60}
            else if (dio>=3.04069E+17){ret=59} else if (dio>=1.86545E+17){ret=58} else if (dio>=1.14445E+17){ret=57} else if (dio>=7.02117E+16){ret=56}
            else if (dio>=4.30747E+16){ret=55} else if (dio>=2.64262E+16){ret=54} else if (dio>=1.62124E+16){ret=53} else if (dio>=9.94624E+15){ret=52}
            else if (dio>=6.10199E+15){ret=51} else if (dio>=3.74355E+15){ret=50} else if (dio>=2.29666E+15){ret=49} else if (dio>=1.40899E+15){ret=48}
            else if (dio>=8.64413E+14){ret=47} else if (dio>=5.30314E+14){ret=46} else if (dio>=3.25346E+14){ret=45} else if (dio>=1.99599E+14){ret=44}
            else if (dio>=1.22453E+14){ret=43} else if (dio>=7.51247E+13){ret=42} else if (dio>=4.60888E+13){ret=41} else if (dio>=2.82753E+13){ret=40}
            else if (dio>=1.73468E+13){ret=39} else if (dio>=1.06422E+13){ret=38} else if (dio>=6.52898E+12){ret=37} else if (dio>=4.00551E+12){ret=36}
            else if (dio>=2.45737E+12){ret=35} else if (dio>=1.50759E+12){ret=34} else if (dio>=9.249E+11){ret=33} else if (dio>=5.67423E+11){ret=32}
            else if (dio>=3.48112E+11){ret=31} else if (dio>=2.13566E+11){ret=30} else if (dio>=1.31022E+11){ret=29} else if (dio>=80381587297){ret=28}
            else if (dio>=49313857237){ret=27} else if (dio>=30253900146){ret=26} else if (dio>=18560674936){ret=25} else if (dio>=11386917139){ret=24}
            else if (dio>=6985838735){ret=23} else if (dio>=4285790635){ret=22} else if (dio>=2629319408){ret=21} else if (dio>=1613079391){ret=20}
            else if (dio>=989619258){ret=19} else if (dio>=607128379){ret=18} else if (dio>=372471398){ret=17} else if (dio>=228510060){ret=16}
            else if (dio>=140190221){ret=15} else if (dio>=86006270){ret=14} else if (dio>=52764583){ret=13} else if (dio>=32370909){ret=12}
            else if (dio>=19859453){ret=11} else if (dio>=12183714){ret=10} else if (dio>=7474671){ret=9} else if (dio>=4585687){ret=8}
            else if (dio>=2813305){ret=7} else if (dio>=1725954){ret=6} else if (dio>=1058867){ret=5} else if (dio>=649612){ret=4}
            else if (dio>=398535){ret=3} else if (dio>=244500){ret=2} else if (dio>=150000){ret=1}
            return ret;
        }
        /*if(this.gameStage==1){
            var ret = getBaseLog(1.82, self.dropsInOcean).toFixed(0); 
            if(ret>100){
                ret=100;
            }else if (ret<0){
                ret=0;
            }
           return ret;
        }*/else if (this.gameStage==2){
            var ret = getBaseLog(2.247, self.dropsInOcean).toFixed(0); 
            if(ret>100){
                ret=100;
            }else if (ret<0){
                ret=0;
            }
            return ret;
        }else{
            var ret = getBaseLog(3.235, self.dropsInOcean).toFixed(0); 
            if(ret>100){
                ret=100;
            }else if (ret<0){
                ret=0;
            }
            return ret;
        }
    },

    _fillTheOceans: function(){
        var cont = "<h2 style='margin:0; text-align:center;'>Fill the ocean</h2><p style='margin:0; padding:0; text-align:center;' >Do you really want to use your drops to fill the ocean?<br />How many drops would you like to use?<br /><br /><p style='text-align:center; margin:0; padding:0;'><button class='button' onclick='Game._oceanClickGo(100);'>All</button>&nbsp;<button class='button' onclick='Game._oceanClickGo(90);'>90%</button>&nbsp;<button class='button' onclick='Game._oceanClickGo(75);'>75%</button>&nbsp;<button class='button' onclick='Game._oceanClickGo(50);'>50%</button>&nbsp;<button class='button' onclick='Game._oceanClickGo(25);'>25%</button>&nbsp;<button class='button' onclick='Game._oceanClickGo(10);'>10%</button>&nbsp;<button class='button' onclick='Game.alertNotification.fadeOut(\"fast\");'>None</button></p>";
        this._makeAlertNotification(cont);
    },

    // Update stats on screen
    _updateStats: function(){
        var self = this;
        // update text in stats of number of drops in bank
        this.textOfNumberOfDropsInBankStats.text(Beautify(Math.floor(this.dropsInBank))); 
        // update text in stats of total of drops made this experiencelevel
        this.textOfNumberOfDropsProducedThisExperienceLevelStats.text(Beautify(Math.floor(this.totalDropsThisExperienceLevel))); 
        // update text in stats of total of drops made ever
        this.textOfNumberOfDropsProducedEverStats.text(Beautify(Math.floor(this.totalDropsEver)));

        //update alien drains stats
        this.textOfAlienDrainStats.text(Beautify(Math.floor(this.totalDropsDrained)));
        //update waterlevel
        this._updateWaterLevel(0);

        //experience points
        var exp = Math.pow(Math.abs(this.totalDropsEver/1000000000000), 1/3)-this.knowhow;
        this.experiencePoints = Math.floor(exp);
        this.textofNumberOfExperiencePointsStats.text(Beautify(this.experiencePoints));

        var expa = this.experiencePoints + this.knowhow;
        var lasttot = expa*expa*expa*1000000000000;
		var nexttot = (expa+1)*(expa+1)*(expa+1)*1000000000000;
        var difneeded = nexttot - this.totalDropsEver;
        this.textOfDropsToNextExperiencePointStats.text(Beautify(difneeded));
        var totneeded = nexttot - lasttot;
        var percentageToNextExpP = (totneeded-difneeded)/totneeded*100;
        var percString = percentageToNextExpP + '%';
        this.experiencePointsProgressBarLevel.css({'width': percString});
        
        if(this.firstStarted!=0){
            var gameDuration = Date.now() - this.firstStarted;
            this.firstStartedStats.text(msToTime(gameDuration));
            if(this.lastKnowHow!=0){
                var runDuration = Date.now() - this.lastKnowHow;
                this.runStartedStats.text(msToTime(runDuration));
            }else{
                var gameDuration = Date.now() - this.firstStarted;
                this.runStartedStats.text(msToTime(gameDuration));
            }
        }else{
            var gameDuration = Date.now() - this.startTime;
            this.firstStartedStats.text(msToTime(gameDuration));
            if(this.lastKnowHow!=0){
                var runDuration = Date.now() - this.lastKnowHow;
                this.runStartedStats.text(msToTime(runDuration));
            }else{
                var gameDuration = Date.now() - this.startTime;
                this.runStartedStats.text(msToTime(gameDuration));
            }
        }
    },

    _updateWaterLevel: function(force){
        //update waterlevel
        this.waterLevelOld = this.waterLevel;
        var perc = this._getBankBoostPerc();
        if(perc>100){
            perc=100;
        }
        this.waterLevel = perc; 
        if((this.waterLevel!=this.waterLevelOld)||(force==1)){
            var hpos=0;
            if ((perc>0)&&(perc<=2)){    //else the waves don't show up untill 3%
                hpos = 0.3;
            }else {
                hpos = (perc/2)-0.95;
            }
            if(this.movingWaterOption==0){
                hpos = perc/2;
            }
          //  var hposperc = hpos +"%";
            if (hpos <=0){
               this.waterContainer.hide();
				$("#waterfill").hide();
            }else {
				if(this.movingWaterOption==0){
					this.waterContainer.hide();
					$("#waterfill").hide();
				}else{
					let parentHeight = $("#waterdiv").height(); 
					let calculatedpx = (parentHeight/100*hpos)-31;
		
					this.waterContainer.css({'bottom': Math.round(calculatedpx) +'px'});
					this.waterContainer.show();
					$("#waterfill").css({'height': Math.round(calculatedpx+5) + 'px'});
					$("#waterfill").show();
				}
            }
            this.textOfDropsInBankBoost.text(perc);
            $.each(this.buildings, function(i, _building) {
                _building.calculateCurrentProduction();
            });
            this._calculateDps();
            this._calculateNumberOfDropsPerCLick();
        }
    }, 
    // Show little drop jump after clicking big drop
    _showLittleDrop: function(){
        var self = this;
        var littledropDiv = $("<div class='littledrop'></div>"); // make the div for the drop
        littledropDiv.css({'cursor':'pointer'});
        littledropDiv.on('click', function(){ // make it clickable and if clicked like big drop is clicked
            self._bigDropClick();
        });
        $("body").append(littledropDiv); //add the div to the body
        var w = littledropDiv.width();
        
        
        var bdpos = document.getElementById("drop").getBoundingClientRect();
        /*var posX = tempX-(w/2);
        var posY = tempY+30;*/
        var posX = bdpos.left + (this.bigDrop.width()/2);
        var posY = bdpos.top + (this.bigDrop.height()/4*3);
        littledropDiv.css({'left':posX,'top':posY}); // position the div with the position of the mouse click
        if (Math.random() >= 0.5){  
            littledropDiv.addClass('littledropanimationleft');  //animate the drop randomly to the left or right
        }else {
            littledropDiv.addClass('littledropanimationright');
        }
        //remove drop after animation
        littledropDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
            littledropDiv.remove();
        });
    },

    // show number of drops you get with click on screen
    _showNumberOnScreenAfterCLick: function(num){
        var self = this; 
        var textDiv = $("<div class='textclick'>&nbsp;</div>"); // make div for text
        $("body").append(textDiv);                              // add div to the body
        textDiv.html('+ ' + Beautify(num.toFixed(0)) );         //add the text to the div
        textDiv.css({'cursor':'pointer'});                      //make it clickable and if clicked like big drop is clicked
        textDiv.on('click', function(){
            self._bigDropClick();
        });
        var w = textDiv.width();
        var bdpos = document.getElementById("drop").getBoundingClientRect();
        /*var posX = tempX-(w/2);
        var posY = tempY+30;*/
        var posX = bdpos.left + (this.bigDrop.width()/2)-(w/2);
        var posY = bdpos.top + (this.bigDrop.height()/4*3);
        textDiv.css({'display':'block','top':posY, 'left':posX});  //position the text at the cursor
        textDiv.addClass("textanimation");                         // animate div
        //remove div at end of animation
        textDiv.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                textDiv.remove();
            });
    },

    // buy all upgrades possible
    _buyAllUpgrades:function(){
        var self = this;
        var toSpend = self.dropsInBank;
        var notBoughtUpgrades = self.upgrades.filter(function( obj ) { return ((obj.bought == 0)); });//&&(obj.active == 1)); });
        notBoughtUpgrades = notBoughtUpgrades.sort(function(a, b){return a.cost-b.cost}); 
        $.each(notBoughtUpgrades, function(i, upgrade) {
            if((upgrade.cost<=toSpend)&&(upgrade.visible==1)){
                upgrade.buy();
                toSpend -= upgrade.cost;
            }
        });
    },

    // Saving the game
    _save: function(){
		var saveJSON = this._getJSON();     //get the JSON to save the game
        saveJSON = btoa(saveJSON);

		if(typeof(Storage) !== "undefined") {           //if localstorage save
			window.localStorage.FtOBetaSave = saveJSON;
			this._makeNotice(0,"Game saved", 0,0,0,0);
		} else {
			this._makeNotice(0,"Game save failed", 0,0,0,0);
		}
    },

    _saveAsFile: function(){
        var saveJSON = this._getJSON();     //get the JSON to save the game
        saveJSON = btoa(saveJSON);
        var blob=new Blob([saveJSON],{type:'text/plain;charset=utf-8'});
        var dt = new Date();
        var time = dt.getHours() + "-" + dt.getMinutes() + "-" + dt.getSeconds();
        var month = dt.getMonth()+1;
        var date = dt.getFullYear() + "-" + month + "-"+ dt.getDate(); 
        var filename=date + "-"+time+"-FillTheOceansSave"; 
        saveAs(blob,filename+'.txt');
    },

    _loadFile: function(e){
        var self = this;
        var file = e.target.files[0];
        if (!file) {
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          var contents = e.target.result;
            if (contents){
                if(typeof(Storage) !== "undefined") {
                    window.localStorage.FtOBetaSave = contents;
                } 
            
                Game.reload=1;
                location.reload();
            } 
        };
        reader.readAsText(file);
    },
    
    _getJSON: function(){   //make a jason object of the variables needed to save game
        var buildingsToSave=[]; // make a list of the builings
        $.each(this.buildings, function(i, _building) {
			var curBuilding = {id:_building.id, shown:_building.shown, quantity:_building.quantity, level:_building.level};
			buildingsToSave.push(curBuilding);
		});

        var upgradesToSave=[]; // make a list of bought upgrades
        $.each(this.boughtUpgrades, function(i, _upgrade) {
			var curUpgrade = {id:_upgrade.id};
			upgradesToSave.push(curUpgrade);
        });

        var achievementsToSave=[]; // make a list of unlocked achievements
        $.each(this.achievementsUnlocked, function(i, _achievement) {
			var curAchievement = {id:_achievement.id};
			achievementsToSave.push(curAchievement);
        });

        var saveObj = {
			version:this.version,
            timeSaved: Date.now(),
            firstStarted:this.firstStarted,
            lastKnowHow:this.lastKnowHow,
            dropsInBank: this.dropsInBank,
            handmadeClicks: this.handmadeClicks,
            handmadeDrops: this.handmadeDrops,
            totalDropsThisExperienceLevel: this.totalDropsThisExperienceLevel,
            totalDropsEver:this.totalDropsEver,
            totalNumberOfBuildings:this.totalNumberOfBuildings,
            buildings:buildingsToSave,
            upgrades:upgradesToSave,
            achievements:achievementsToSave,
            dropsInOcean:this.dropsInOcean,
            buyBuildingMode:this.buyBuildingMode,
            cloudsClicked:this.cloudsClicked,
            cloudsClickedEver:this.cloudsCLickedEver,
            totalCloudsShownEver:this.totalCloudsShownEver,
            alienSaveList:this.aliensActiveList,
            aliensActive:this.aliensActive,
            boughtKnowhowUpgrades: this.boughtKnowhowUpgrades,
            knowhow:this.knowhow,
            experienceToSpend:this.experienceToSpend,
            totalDropsDrained:this.totalDropsDrained,

            poseidonStarted:Poseidon.poseidonStarted,
            pFoodTotal:Poseidon.pFoodTotal,
            pFoodMaxCap:Poseidon.pFoodMaxCap,
            pLeatherCounter:Poseidon.pLeatherCounter,
            pLeatherTotal:Poseidon.pLeatherTotal,
            pFoodBarnCost:Poseidon.pFoodBarnCost,
            pWoodTotal:Poseidon.pWoodTotal,
            pWoodMaxCap:Poseidon. pWoodMaxCap,
            pWoodBarnCost:Poseidon.pWoodBarnCost,
            pStoneTotal:Poseidon.pStoneTotal,
            pStoneMaxCap:Poseidon.pStoneMaxCap,
            pStoneBarnCostWood:Poseidon.pStoneBarnCostWood,
            pStoneBarnCostStone:Poseidon.pStoneBarnCostStone,
            pWorkerMaxCap:Poseidon.pWorkerMaxCap,
            pTentTotal:Poseidon.pTentTotal,
            pBuildersIdle:Poseidon.pBuildersIdle+Poseidon.pBuildersWorking,
            pWoodenhouseTotal:Poseidon.pWoodenhouseTotal,
            pStonehouseTotal:Poseidon.pStonehouseTotal,
            pWorkerTotal:Poseidon.pWorkerTotal,
            pWorkerIdle:Poseidon.pWorkerIdle,
            pFarmerTotal:Poseidon.pFarmerTotal,
            pWoodcutterTotal:Poseidon.pWoodcutterTotal,
            pStonecutterTotal:Poseidon.pStonecutterTotal,
            pTempleTotal:Poseidon.pTempleTotal,
            pWorkerDie:Poseidon.pWorkerDie,

            sacrificeLevel:this.sacrificeLevel,
            firstSelectedPrayerId:this.firstSelectedPrayerId,
            secondSelectedPrayerId:this.secondSelectedPrayerId,
            prayerBrainpowerActive:this.prayerBrainpowerActive,
            prayerClickpowerActive:this.prayerClickpowerActive,
            prayerPipetteliciousActive:this.prayerPipetteliciousActive,
            prayerTurboActive:this.prayerTurboActive,
            prayerBrainwavesActive:this.prayerBrainwavesActive,
            prayerDiscountUpgradeActive:this.prayerDiscountUpgradeActive,
            prayerDiscountHelperActive:this.prayerDiscountHelperActive,
            prayerBonusActive:this.prayerBonusActive,
            prayerBadWeatherActive:this.prayerBadWeatherActive,
            prayerWrathActive:this.prayerWrathActive,
            prayerHeavyRainActive:this.prayerHeavyRainActive,
            prayerBigBonusActive:this.prayerBigBonusActive,
            prayerBraingrowthActive:this.prayerBraingrowthActive,
            prayerEnormousBonusActive:this.prayerEnormousBonusActive,
            prayerDoubleActive:this.prayerDoubleActive,
            weatherstationActive:this.weatherstationActive,
            weatherstationLevel:this.weatherstationLevel,

            gameStage:this.gameStage,
            maximumDropsInOcean:this.maximumDropsInOcean,
            sunActive:this.sunActive,

            //minigames
            rainbowActive:this.rainbowActive,
            rainbowStartTime:this.rainbowStartTime,
            allTimeGoldenCoins:this.allTimeGoldenCoins,
            numberOfGoldenCoinsToSpend:this.numberOfGoldenCoinsToSpend,

            carparkLevel:Carpark.level,
            carparkLevelLocked:Carpark.levelLocked,
            carparkActive:Carpark.active,

            //options
            numberOption:this.numberOption,
            littleDropOption:this.littleDropOption,
            showNumberOnScreenAfterCLickOption:this.showNumberOnScreenAfterCLickOption,
            spinningBackground:this.spinningBackground,
            movingWaterOption:this.movingWaterOption,
            animateBigDropOption:this.animateBigDropOption,
            volumeOption:this.volumeSlider.val(),
            cloudSoundOption:this.cloudSoundOption,
            clickSoundOption:this.clickSoundOption,
            bgdropsOption:this.bgdropsOption,
        }
        if(this.firstStarted==0){
            saveObj.firstStarted = this.startTime;
        }
        var saveJSON = JSON.stringify(saveObj);
		return saveJSON;
    },

    //export save
    _exportSave: function(){
        var savetxt = this._getJSON();
        savetxt = btoa(savetxt);
        var cont = "<h2 style='margin:0; text-align:center;'>Export save</h2><p style='margin:0; padding:0; text-align:center;' >This is your save.</br>Copy it and save it.</br>You can import this text to retrieve this save</br></br><form><textarea rows='10' cols='50' onclick='this.select();document.execCommand(\"copy\");'>"+savetxt+"</textarea></form><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game.alertNotification.fadeOut(\"fast\");'>Done</button></p>";
        this._makeAlertNotification(cont);
    },

    // import save
    _importSave: function(){
        var cont = "<h2 style='margin:0; text-align:center;'>Import save</h2><p style='margin:0; padding:0; text-align:center;' >Paste your save below and click import</br></br><form><textarea rows='10' cols='50' id='importtxt'></textarea></form><p style='text-align:center; margin:0; padding:0;'><button class='optionbutton' onclick='Game._loadImport();'>Import</button></p>";
        this._makeAlertNotification(cont);
    },

    _loadImport: function(){
        document.getElementById("importtxt").focus();
			var loadtxt = document.getElementById("importtxt").value;
			if (loadtxt){
				if(typeof(Storage) !== "undefined") {
					window.localStorage.FtOBetaSave = loadtxt;
				} 
				this.alertNotification.fadeOut("fast");
				this.reload=1;
				location.reload();
			} else {
				this.alertNotification.fadeOut("fast");
			}
    },

    // loading the game
    _load: function(){
        var self = this;
		var loadJSON = "0";
		
		if(typeof(Storage) !== "undefined") { 
            loadJSON = window.localStorage.FtOBetaSave;
           
			if (loadJSON!="0"&&loadJSON!=undefined){
                loadJSON = atob(loadJSON);
				var n = loadJSON.indexOf("|");
				if (n==-1){
					var loadObj = JSON.parse(loadJSON);
					self._loadversion(loadObj);
				}else {
                    //loadlegacy
                    //alert("legacysave");
                    LoadLegacy.start(loadJSON);
				}
			} else{
                //no save file
                this._waterWaves();
                this._startTimers();
            }
			
		} else {
            // Sorry! No Web Storage support..
            alert("no webstorage");
            this._waterWaves();
            this._startTimers();
		}
    },

    _loadversion: function(loadObj){
        var self = this;
        var version = loadObj.version;
		if (version=="1.0.0"){
            self._loadversion100(loadObj);
        }
		else {//other versions or the save file is corrupt
		}
    },

    _loadversion100:function(loadObj){
        var self = this;

        this.timeSaved = loadObj.timeSaved;
        this.firstStarted = loadObj.firstStarted;
        if(this.firstStarted!=0){
            var gameDuration = Date.now() - this.firstStarted;
            this.firstStartedStats.text(msToTime(gameDuration));
        }else{
            this.firstStartedStats.text(msToTime(0));
        }
        this.lastKnowHow = loadObj.lastKnowHow;
        if(this.lastKnowHow!=0){
            var runDuration = Date.now() - this.lastKnowHow;
            this.runStartedStats.text(msToTime(runDuration));
        }else{
            var gameDuration = Date.now() - this.firstStarted;
            this.runStartedStats.text(msToTime(gameDuration));
        }

        this.dropsInBank= loadObj.dropsInBank;
        this.handmadeClicks = loadObj.handmadeClicks;
            this.textOfNumberOfHandmadeClicksStats.text(Beautify(this.handmadeClicks)); //show in stats els it only shows up after a click on the big drop
        this.handmadeDrops = loadObj.handmadeDrops;
            this.textOfNumberOfHandmadeDropsStats.text(Beautify(this.handmadeDrops));   //show in stats els it only shows up after a click on the big drop
        this.totalDropsThisExperienceLevel = loadObj.totalDropsThisExperienceLevel;
        this.totalDropsEver = loadObj.totalDropsEver;
        this.totalNumberOfBuildings = loadObj.totalNumberOfBuildings;
        
        this.BuildingMode = loadObj.buyBuildingMode;
        this._setBuyBuildingModeButtons();

         // upgrades
         var savedUpgrades = loadObj.upgrades; 
         // for each bought upgrade put the upgrade var bougth 1
         $.each(savedUpgrades, function(i, _savedUpgrade) {
             //find the upgrade with id of saved upgrade and set property bought to 1
             var bu = self.upgrades.find(x => x.id === _savedUpgrade.id);
             bu.bought = 1;
             self.boughtUpgrades.push(bu);
             bu.button.fadeOut("fast");
             bu.buttonBought.fadeIn("fast");
                 
             self.totalNumberOfUpgrades++;

             // make sure the effect of the upgrade works
             if (bu.type=="mouse"){
                 self.percentageOfDpsPerClick = self.percentageOfDpsPerClick + bu.perc;
                 self._calculateNumberOfDropsPerCLick();
             } else if (bu.type=="hand"){
                 self._calculateNumberOfDropsPerCLick();
             }else if (bu.type=="cloud"){
                if(bu.other==3){
                    // specials duration *2
                    self.clickStormDuration *= 2;
                    self.buildingSpecialsDuration *= 2;
                    self.stormDuration *= 2;
                    self.turboDuration *= 2;
                    self.wrathDuration *= 2;
                }else{
                    self.cloudStart = self.cloudStart/2;
                    self.cloudEnd =  self.cloudEnd/2;
                    self.cloudDuration = self.cloudDuration * 2;
                }
            }else if ((bu.type=="contact")||(bu.type=="contactb")){
                self.contactNumber++;
            }else if (bu.type == "aliens"){
                self._startAliens();
            }else if (bu.type == "alientech"){
                self.alienTechUpgrades++;
                self.alienTechStrength++;
            }else if (bu.type == "knowhow"){
               self.knowhowUsePerc += 20;
                self.textOfKnowhowEffectivenessStats.text(self.knowhowUsePerc + " %");
            }else if(bu.type=="ocean"){
                self.oceanMultiplier += bu.perc;
            }else if (bu.type == "crazyscientist"){
                self.numberOfCrazyscientists++;
            }else if (bu.type == "poseidon"){
                self.poseidonImage.fadeIn(5000);
            }
         });
         if((3>self.contactNumber)&&(self.contactNumber>0)){
            var contacttwo = self.upgrades.find(x => x.id === 286);
            var contactthree = self.upgrades.find(x => x.id === 287);
            var contactfour = self.upgrades.find(x => x.id === 288);
            if((contacttwo.visible!=1)&&(contactthree.visible!=1)&&(contactfour.visible!=1)){
                self._startContact();
            }
         }
         this.textOfNumberOfBoughtUpgradesStats.text(self.totalNumberOfUpgrades);
         var upgradesPerc = ((self.totalNumberOfUpgrades/self.upgrades.length)*100).toFixed(2);
         this.textOfPercentageOfUpgradesBoughtStats.text(upgradesPerc);
         
        //buildings
        var savedBuildings = loadObj.buildings;
        $.each(this.buildings, function(i, _building) {
            _building.shown = savedBuildings[i].shown;
            _building.level = savedBuildings[i].level;
            if (_building.shown==1){
                _building.button.css({'background':'#C5CAE9 url("images/'+ this.name +'.png") no-repeat right center'});
                _building.showCalculation(_building.id);
			}
            _building.quantity = savedBuildings[i].quantity;
            _building.currentProduction = _building.quantity*_building.startProduction;
            _building.currentCost = Math.ceil(_building.startCost * Math.pow(_building.increaseCost,_building.quantity));
            var totcost = Math.floor((_building.currentCost*(1-Math.pow(_building.increaseCost, self.buyBuildingMode)))/(1-_building.increaseCost));
            if(_building.shown==1){
				_building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+self.buyBuildingMode+"x = "+Beautify(totcost)+"</span>");
			} else{
				_building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+self.buyBuildingMode+"x = "+Beautify(totcost)+"</span>");
            }
            $(_building.levelName).text(_building.level);
            _building.calculateCurrentProduction();
			_building.check();
        });


        //achievements
        var savedAchievements = loadObj.achievements; 
        $.each(savedAchievements, function(i, _savedAchievement) {
            var ach = self.achievements.find(x => x.id === _savedAchievement.id);
            ach.unlocked = 1;
			ach.buttonLocked.hide();
            ach.button.fadeIn("fast");
            self.numberOfAchievementsUnlocked++;
            self.achievementsUnlocked.push(ach); 
        });
        self.textOfNumberOfAchievementsUnlockedStats.text(self.numberOfAchievementsUnlocked); 
        self.achievementsPerc = Math.floor((self.numberOfAchievementsUnlocked/self.achievements.length)*100);
        self.textOfPercentageOfAchievementsUnlockedStats.text(self.achievementsPerc);
        self._setMtnEewLvl(self.achievementsPerc);

        this.dropsInOcean = loadObj.dropsInOcean;
        this.maximumDropsInOcean = loadObj.maximumDropsInOcean;
        var perc = (this.dropsInOcean / this.maximumDropsInOcean)*100;
        this.oceanPercentage = Math.floor(perc); 
        this.textOfDropsInOcean.text(Beautify(this.dropsInOcean.toFixed(0),0));
        this.textOfDropsInOceanTab.text(Beautify(this.dropsInOcean.toFixed(0),0));

        var percbar = this._getOceanLog(this.dropsInOcean);
        this.textOfPercentageDropsInOcean.text(perc.toFixed(15));
        this.textOfPercentageDropsInOceanTab.text(perc.toFixed(15));
        
        var csstop = 100-percbar+'%';
        var cssheight = percbar + '%';
        this.oceanProgressBar.css({'top':csstop, 'height':cssheight});

        this.cloudsClicked = loadObj.cloudsClicked;
        this.textOfNumberOfCloudsClickedStats.text(this.cloudsClicked);

        this.cloudsCLickedEver = loadObj.cloudsClickedEver;

        this.totalCloudsShownEver = loadObj.totalCloudsShownEver;

        this.aliensActive = loadObj.aliensActive;
        this.aliensActiveList = loadObj.alienSaveList;
       
        if (this.aliensActive==1){
            var maxAliens = this.aliens.length;
            for (var i=0; i<maxAliens; i++){
                var newalien = this.aliens.pop();
                var nAlien = Alien(newalien).init();
                self.aliensList.push(nAlien);
                self.aliensPopList.push(nAlien);
            }
            
           
            $.each(self.aliensActiveList, function(i, activeAlien) {
                self.alienNumber++;
                var transtxt = 'translate(0px, -111px) rotate('+ activeAlien.angle +'deg)';
                var al = self.aliensList.find(x => x.id === activeAlien.id); 
                al.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/alienlaser.png)', 'transform':transtxt, 'transform-origin': '45px 222px' });
                al.div.addClass(activeAlien.hover);
                al.div.show();
                al.active=1;
                al.dropsDrained = activeAlien.dropsDrained;
                var spal = self.aliensPopList.find(x => x.id === activeAlien.id); 
                var spalrem = self.aliensPopList.indexOf(spal);
                self.aliensPopList.splice(spalrem, 1);
            });
            self.aliensActiveList =[];
            $.each(self.aliensList, function(i, alien) {
                if(alien.active==1){
                    self.aliensActiveList.push(alien);
                }
            });

            if(self.aliensActiveList.length<maxAliens){
                var end = self.alienEnd * (1+(self.alienNumber/10));
                var start = self.alienStart * (1+(self.alienNumber/10));
                var max = end-start;
                var randomnum = Math.floor((Math.random() * max) + 1);
                var nextal = randomnum + start;
            
                window.setTimeout(function(){self._newAlien();}, nextal);
            }
        }
        this.totalDropsDrained = loadObj.totalDropsDrained;
        this.textOfAlienDrainStats.text(Beautify(Math.floor(this.totalDropsDrained)));

        this.knowhow = loadObj.knowhow;
        this.experienceToSpend = loadObj.experienceToSpend;
        this.knowhowscreenExpStats.text(Beautify(self.experienceToSpend));
        this.experiencePointsToSpendStats.text(Beautify(self.experienceToSpend));
        this.knowhowscreenKnowhowStats.text(Beautify(self.knowhow));
        this.textOfKnowhowStats.text(Beautify(self.knowhow));

        this.boughtKnowhowUpgrades = loadObj.boughtKnowhowUpgrades;

        $.each(self.boughtKnowhowUpgrades, function(i, upgrade) {
            var u = self.knowhowUpgrades.find(x => x.id === upgrade.id);
            u.bought = 1;
            u.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'border-color':'#00dd00'});
            if (upgrade.type=="unlock"){
               self.useKnowhow = 1;
            }else if(this.type=="offline"){
                if(this.id==23){
                    self.offlineProductionPercentage = 40;
                    self.maximumTimeForOfflineProduction = 86400000;
                }else if(this.id==24){
                    self.maximumTimeForOfflineProduction = 129600000;
                }else if(this.id==25){
                    self.offlineProductionPercentage = 50;
                }else if(this.id==26){
                    self.maximumTimeForOfflineProduction = 172800000;
                }else if(this.id==27){
                    self.offlineProductionPercentage = 55;
                }else if(this.id==28){
                    self.maximumTimeForOfflineProduction = 216000000;
                }else if(this.id==29){
                    self.offlineProductionPercentage = 60;
                }else if(this.id==30){
                    self.maximumTimeForOfflineProduction = 259200000;
                }else if(this.id==31){
                    self.offlineProductionPercentage = 65;
                }else if(this.id==32){
                    self.maximumTimeForOfflineProduction = 302400000;
                }else if(this.id==33){
                    self.offlineProductionPercentage = 70;
                }else if(this.id==34){
                    self.maximumTimeForOfflineProduction = 345600000;
                }else if(this.id==35){
                    self.offlineProductionPercentage = 75;
                }else if(this.id==36){
                    self.maximumTimeForOfflineProduction = 432000000;
                }else if(this.id==37){
                    self.offlineProductionPercentage = 80;
                }else if(this.id==38){
                    self.maximumTimeForOfflineProduction = 518400000;
                }else if(this.id==39){
                    self.offlineProductionPercentage = 85;
                }else if(this.id==40){
                    self.offlineProductionPercentage = 95;
                    self.maximumTimeForOfflineProduction = 604800000;
                }
            }else if (this.type=="alien"){	
                if (this.id==12){
                    self.alienContactDuration = self.alienContactDuration/10;
                }
                else if (this.id==13){
                    self.alienStart = self.alienStart/4;
                    self.alienEnd = self.alienEnd/4;
                }
                else if (this.id==14||this.other==15){
                    self.alienDrainPerc += 1;
                }
            }else if (this.type=="cloud"){
                if (this.id==8||this.id==9){
                    self.cloudStart = self.cloudStart - (self.cloudStart*0.05);
                    self.cloudEnd = self.cloudEnd - (self.cloudEnd*0.05);
                }
                else if(this.id==10||this.id==11){
                    self.stormDuration = self.stormDuration*1.05;
                    self.clickStormDuration = self.clickStormDuration*1.05;
                    self.turboDuration = self.turboDuration * 1.05;
                    self.wrathDuration = self.wrathDuration * 1.05;
                    self.buildingSpecialsDuration = self.buildingSpecialsDuration *2;
                }
            }else if(this.type=="alientech"){
                self.alienTechStrength++;
            }else if(this.type=="weatherstation"){
                self.weatherstationImage.show();
                self.weatherstationLevel = 1;
            }
        });

        Poseidon.poseidonStarted = loadObj.poseidonStarted; 
        Poseidon.pFoodTotal = loadObj.pFoodTotal; Poseidon.pFoodTotalStat.text(Poseidon.pFoodTotal.toFixed(0));
        Poseidon.pFoodMaxCap = loadObj.pFoodMaxCap; Poseidon.pFoodBarnCapStat.text(Poseidon.pFoodMaxCap);
        Poseidon.pLeatherCounter = loadObj.pLeatherCounter;
        Poseidon.pLeatherTotal = loadObj.pLeatherTotal; Poseidon.pLeatherTotalStat.text(Poseidon.pLeatherTotal);
        Poseidon.pFoodBarnCost = loadObj.pFoodBarnCost; Poseidon.pFoodBarnCostStat.text(Poseidon.pFoodBarnCost);
        Poseidon.pWoodTotal = loadObj.pWoodTotal; Poseidon.pWoodTotalStat.text(Poseidon.pWoodTotal.toFixed(0));
        Poseidon.pWoodMaxCap = loadObj.pWoodMaxCap; Poseidon.pWoodBarnCapStat.text(Poseidon.pWoodMaxCap);
        Poseidon.pWoodBarnCost = loadObj.pWoodBarnCost; Poseidon.pWoodBarnCostStat.text(Poseidon.pWoodBarnCost);
        Poseidon.pStoneTotal = loadObj.pStoneTotal; Poseidon.pStoneTotalStat.text(Poseidon.pStoneTotal.toFixed(0));
        Poseidon.pStoneMaxCap = loadObj.pStoneMaxCap; Poseidon.pStoneBarnCapStat.text(Poseidon.pStoneMaxCap);
        Poseidon.pStoneBarnCostWood = loadObj.pStoneBarnCostWood; Poseidon.pStoneBarnCostWoodStat.text(Poseidon.pStoneBarnCostWood);
        Poseidon.pStoneBarnCostStone = loadObj.pStoneBarnCostStone; Poseidon.pStoneBarnCostStoneStat.text(Poseidon.pStoneBarnCostStone);
        Poseidon.pWorkerMaxCap = loadObj.pWorkerMaxCap; Poseidon.pWorkerMaxCapStat.text(Poseidon.pWorkerMaxCap);
        Poseidon.pTentTotal = loadObj.pTentTotal; Poseidon.pTentTotalStat.text(Poseidon.pTentTotal);
        Poseidon.pBuildersIdle = loadObj.pBuildersIdle; Poseidon.pBuildersIdleStat.text(Poseidon.pBuildersIdle); Poseidon.pBuilderStat.text(Poseidon.pBuildersIdle); 
        Poseidon.pWoodenhouseTotal = loadObj.pWoodenhouseTotal; Poseidon.pWoodenhouseStat.text(Poseidon.pWoodenhouseTotal);
        Poseidon.pStonehouseTotal = loadObj.pStonehouseTotal; Poseidon.pStonehouseStat.text(Poseidon.pStonehouseTotal);
        Poseidon.pWorkerTotal = loadObj.pWorkerTotal; Poseidon.pWorkerStat.text(Poseidon.pWorkerTotal);
        Poseidon.pWorkerIdle = loadObj.pWorkerIdle; Poseidon.pWorkerIdleStat.text(Poseidon.pWorkerIdle);
        Poseidon.pFarmerTotal = loadObj.pFarmerTotal; Poseidon.pFarmerStat.text(Poseidon.pFarmerTotal);
        Poseidon.pWoodcutterTotal = loadObj.pWoodcutterTotal; Poseidon.pWoodcutterStat.text(Poseidon.pWoodcutterTotal);
        Poseidon.pStonecutterTotal = loadObj.pStonecutterTotal; Poseidon.pStonecutterStat.text(Poseidon.pStonecutterTotal);
        Poseidon.pTempleTotal = loadObj.pTempleTotal; Poseidon.pTempleStat.text(Poseidon.pTempleTotal);
        Poseidon.pWorkerDie = loadObj.pWorkerDie; Poseidon.pWorkerDieStat.text(Poseidon.pWorkerDie);

        if(Poseidon.poseidonStarted==2){
            Poseidon.pCongratulationsDiv.fadeIn("fast");
            self.templeImage.show("slow");
            self.poseidonImage.removeClass();
        }else if (Poseidon.poseidonStarted==1){
            Poseidon.poseidonTimer = window.setInterval(function() {  // start poseidonTimer
                Poseidon._poseidonTick();
            }, Poseidon.pInterval);
        }

        this.sacrificeLevel = loadObj.sacrificeLevel;
        if(this.sacrificeLevel>0){
            this._changeSacrificeText(this.sacrificeLevel);
        }
        if (this.sacrificeLevel>3){
            for(i=0;i<=this.sacrificeLevel-4;i++){
                this.prayers[i].button.show();
            }
        }
        this._sacrificeCheck();

        this.firstSelectedPrayerId = loadObj.firstSelectedPrayerId; this.prayerToSelect=1; this._prayerSelected(this.firstSelectedPrayerId); 
        if(this.firstSelectedPrayerId!=0){var pr = this.prayers.find(x => x.id === this.firstSelectedPrayerId); pr.button.addClass('prayerSelected');}
        this.secondSelectedPrayerId = loadObj.secondSelectedPrayerId; this.prayerToSelect=2; this._prayerSelected(this.secondSelectedPrayerId);this.prayerToSelect=0; 
        if(this.secondSelectedPrayerId!=0){var pr = this.prayers.find(x => x.id === this.secondSelectedPrayerId); pr.button.addClass('prayerSelected');}
        this.prayerBrainpowerActive = loadObj.prayerBrainpowerActive; if(this.prayerBrainpowerActive==1){this._activatePrayer(1);}
        this.prayerClickpowerActive = loadObj.prayerClickpowerActive; if(this.prayerBraingrowthActive==1){this._activatePrayer(2);}
        this.prayerPipetteliciousActive = loadObj.prayerPipetteliciousActive; if(this.prayerPipetteliciousActive==1){this._activatePrayer(3);}
        this.prayerTurboActive = loadObj.prayerTurboActive; if(this.prayerTurboActive==1){this._activatePrayer(4);}
        this.prayerBrainwavesActive = loadObj.prayerBrainwavesActive; if(this.prayerBrainwavesActive==1){this._activatePrayer(5);}
        this.prayerDiscountUpgradeActive = loadObj.prayerDiscountUpgradeActive; if(this.prayerDiscountUpgradeActive==1){this._activatePrayer(6);}
        this.prayerDiscountHelperActive = loadObj.prayerDiscountHelperActive; if(this.prayerDiscountHelperActive==1){this._activatePrayer(7);}
        this.prayerBonusActive = loadObj.prayerBonusActive; if(this.prayerBonusActive==1){this._activatePrayer(8);}
        this.prayerBadWeatherActive = loadObj.prayerBadWeatherActive; if(this.prayerBadWeatherActive==1){this._activatePrayer(9);}
        this.prayerWrathActive = loadObj.prayerWrathActive; if(this.prayerWrathActive==1){this._activatePrayer(10);}
        this.prayerHeavyRainActive = loadObj.prayerHeavyRainActive; if(this.prayerHeavyRainActive==1){this._activatePrayer(11);}
        this.prayerBigBonusActive = loadObj.prayerBigBonusActive; if(this.prayerBigBonusActive==1){this._activatePrayer(12);}
        this.prayerBraingrowthActive = loadObj.prayerBraingrowthActive; if(this.prayerBraingrowthActive==1){this._activatePrayer(13);}
        this.prayerEnormousBonusActive = loadObj.prayerEnormousBonusActive; if(this.prayerEnormousBonusActive==1){this._activatePrayer(14);}
        this.prayerDoubleActive = loadObj.prayerDoubleActive; if(this.prayerDoubleActive==1){this._activatePrayer(15);}

        this.weatherstationActive = loadObj.weatherstationActive;
        this.weatherstationLevel = loadObj.weatherstationLevel;
        if(this.weatherstationLevel>0){
            if(this.weatherstationActive==0){
                this.verbodDiv.show();
                this.weatherstationDivActiveText.text("The weather station is disabled.");
                this.weatherstationDivActiveButton.text("Enable");
            }
            this._changeWeatherstationText();
        }

        //options
        this.numberOption = loadObj.numberOption;
        if(this.numberOption==1){
            self.numbersSelect.val("scientific");
            $.each(self.buildings, function(i, building) {
                building.setButton();
            });
        }
        this.littleDropOption = loadObj.littleDropOption;
        if(this.littleDropOption==0){
            self.littleDropOptionCheckbox.prop( "checked", false );
        }
        this.showNumberOnScreenAfterCLickOption = loadObj.showNumberOnScreenAfterCLickOption;
        if(this.showNumberOnScreenAfterCLickOption==0){
            self.showNumberOnScreenAfterCLickOptionCheckbox.prop( "checked", false );
        }
        this.spinningBackground = loadObj.spinningBackground;
        if(this.spinningBackground==0){
            $('#dropbackgrounda').removeClass("spinRight");
            $('#dropbackgroundb').removeClass("spinLeft");
            self.spinningBackgroundCheckbox.prop( "checked", false );
        }
        this.movingWaterOption = loadObj.movingWaterOption;
        if(this.movingWaterOption==0){
            self.movingWaterOptionCheckbox.prop( "checked", false );
        }
        this.animateBigDropOption = loadObj.animateBigDropOption;
        if(this.animateBigDropOption==0){
            self.animateBigDropOptionCheckbox.prop( "checked", false );
            self.bigDrop.removeClass("animateBigDrop");
        }

        this.volumePerc.text(loadObj.volumeOption+"%");
        this.volumeSlider.val(loadObj.volumeOption);
            for (var a=0;a<self.channel_max;a++) {	
                self.audiochannels[a]['channel'].volume = loadObj.volumeOption/100;
            }
        this.cloudSoundOption = loadObj.cloudSoundOption;
        if(this.cloudSoundOption==0){
            self.cloudSoundOptionCheckbox.prop( "checked", false );
        }
        this.clickSoundOption = loadObj.clickSoundOption;
        if(this.clickSoundOption==0){
            self.clickSoundOptionCheckbox.prop( "checked", false );
        }
        this.bgdropsOption = loadObj.bgdropsOption;
        if(this.bgdropsOption==0){
            self.littleBackgroundDropsCheckbox.prop( "checked", false );
        }

        $.each(this.upgrades, function(i, upgrade) { 
            upgrade.check();
        });

        this.gameStage = loadObj.gameStage;
        

        this.sunActive = loadObj.sunActive;
        if(this.sunActive==1){
            self._startSun();
        }

        this.rainbowActive = loadObj.rainbowActive;
        this.rainbowStartTime = loadObj.rainbowStartTime;
        this.allTimeGoldenCoins = loadObj.allTimeGoldenCoins;
        this.numberOfGoldenCoinsToSpend = loadObj.numberOfGoldenCoinsToSpend;
        if(this.numberOfGoldenCoinsToSpend>0){
            this._setLevelUpButtonsActive();
        }
        this.levelUpGoldenCoins.text(this.numberOfGoldenCoinsToSpend);
        this.goldcoinNumber.text(this.numberOfGoldenCoinsToSpend);
        if(this.rainbowActive==1){
            this.rainbow.show();
            this._rainbowUpdate();
        }

        Carpark.level = loadObj.carparkLevel;
        Carpark.levelLocked = loadObj.carparkLevelLocked;
        Carpark.active = loadObj.carparkActive;
        if(Carpark.active==1){
            self.levelUpTruckStartMinigameButton.prop('disabled', false);
        }

        this._calculateCrazyscientistsBoost();
        this._startTimers();
        this._updateWaterLevel(1);
        this._waterWaves();
        this._calculateNumberOfDropsPerCLick();
        this._offlineProduction();

        this.introScreen.hide();
    },

    //reset the game

    _reset:function(){
        this.alertNotification.fadeOut("fast");
        if(typeof(Storage) !== "undefined") {
            localStorage.removeItem("FtOBetaSave");
            this.reload=1;
            location.reload(false);
        } else {
            // Sorry! No Web Storage support..
        }
    },

    // start the timers of the game
    _startTimers: function(){
        // Timers
        var self = this;

        this.mainTimer = window.setInterval(function() {  // start maintimer of game
            self.timelagb = Date.now();
            var diff = self.timelagb - self.timelaga;
            self._tick(diff);
            self.timelaga = self.timelagb;
        }, this.interval);

        this.upgradesCheckTimer =window.setInterval(function() {  // start upgradetimer of game
            $.each(self.upgrades, function(i, upgrade) { 
                upgrade.timerCheck();
            });
            if((self.rainbowActive==0)&&(self.totalDropsEver>1000000000000000)){
                self.rainbowActive = 1;
                self.rainbow.fadeIn(5000);
                self.rainbowStartTime = Date.now();
                self._rainbowUpdate();
            }
        }, this.upgradesCheckInterval);

        this.saveTimer = window.setInterval(function() {
            self._save();
        }, 60000);

        this._startCloudTimer();
       

        $.each(this.buildings, function(i, building) {
            building.startstyle();
        });

        this.updateStatsTimer = window.setInterval(function() { // start timer to update stats that not need to be updated every tick of game
            self._updateStats();
            if(self.rainbowActive==1){
                self._rainbowUpdate();
            }
        }, this.statsUpdateInterval);

        var perc = this._getBankBoostPerc();
        if(perc>100){
            perc=100;
        }
        this.waterLevel = perc;
        var hpos=0;
        if ((perc>0)&&(perc<2)){    //else the waves don't show up untill 3%
            hpos = 0.05;
        }else {
            hpos = (perc/2);
        }
      //  var hposperc = hpos +"%";
        if (hpos <=0){
            this.waterContainer.hide();
			$("#waterfill").hide();
        }else { 
				if(this.movingWaterOption==0){
					this.waterContainer.hide();
					$("#waterfill").hide();
				}else{
					let parentHeight = $("#waterdiv").height(); 
					let calculatedpx = (parentHeight/100*hpos)-31; 
		//			calculatedpx = 80.6;
					this.waterContainer.css({'bottom': Math.round(calculatedpx) +'px'});
					this.waterContainer.show();
					$("#waterfill").css({'height': Math.round(calculatedpx+5) + 'px'});
				}
        }
        this.textOfDropsInBankBoost.text(perc);
        $.each(this.buildings, function(i, _building) {
            _building.calculateCurrentProduction();
        });
        this._calculateDps();
        window.setTimeout(function() {  
            $('#loading').fadeOut('fast');
        }, 1000);
       
    },

    //rainbow
    _rainbowUpdate: function(){
        var self= this;

        var timeProgress = Date.now() - this.rainbowStartTime; 

        var totalExpectedGoldCoins = Math.floor(timeProgress/86400000);
        if((totalExpectedGoldCoins>0)&&(this.goldenCoinsActive==0)){
            this.goldenCoinsActive=1;
            this.goldcoin.fadeIn(2000);
        }

        var extraGoldcoins = totalExpectedGoldCoins - self.allTimeGoldenCoins;
        self.allTimeGoldenCoins += extraGoldcoins;

        this.rainbowTimeToNextCoin = (86400000-(timeProgress%86400000));
        this.popuprb.html('<table><tr><td><img src="images/rainbow.png"></td><td><p class="popuptitle">Rainbow</p><p>A rainbow is slowly showing up here.</p><p>At the end of the rainbow there is a gold coin, each time a rainbow is complete you get one gold coin. With this coin you can level up Helpers and unlock minigames.</p><p>Time to next golden coin: '+msToTime(self.rainbowTimeToNextCoin)+'</p></td></tr></table>');

        
        
        if(extraGoldcoins>0){
            self.numberOfGoldenCoinsToSpend += extraGoldcoins;
            if(self.numberOfGoldenCoinsToSpend>0){
                self._setLevelUpButtonsActive();
            }
            self.levelUpGoldenCoins.text(self.numberOfGoldenCoinsToSpend);
            self.goldcoinNumber.text(self.numberOfGoldenCoinsToSpend);
            Game._makeNotice("goldcoin", "Golden coin", "You got "+extraGoldcoins+" golden coins extra.", 0, 0,10000);
            self._save();
        }

     
        
        var deg = ((timeProgress%86400000)/480000)+135; 

        var csstext = "translate(-50%,-50%) rotate("+deg+"deg)";

        $('.rainbowli').css({'transform':csstext});

        
    },

    _setLevelUpButtonsActive: function(){
        this.levelUpHelpinghandButton.prop('disabled', false);
        this.levelUpPipetteButton.prop('disabled', false);
        this.levelUpAirdryerButton.prop('disabled', false);
        this.levelUpBucketButton.prop('disabled', false);
        this.levelUpRaindanceButton.prop('disabled', false);
        this.levelUpFaucetButton.prop('disabled', false);
        this.levelUpGardenhoseButton.prop('disabled', false);
        this.levelUpTruckButton.prop('disabled', false);
        this.levelUpFirehoseButton.prop('disabled', false);
        this.levelUpIcemineButton.prop('disabled', false);
        this.levelUpSpaceshipButton.prop('disabled', false);
        this.levelUpWormholeButton.prop('disabled', false);
        this.levelUpRiverButton.prop('disabled', false);
        this.levelUpColliderButton.prop('disabled', false);
    },

    _setLevelUpButtonsNonActive: function(){
        this.levelUpHelpinghandButton.prop('disabled', true);
        this.levelUpPipetteButton.prop('disabled', true);
        this.levelUpAirdryerButton.prop('disabled', true);
        this.levelUpBucketButton.prop('disabled', true);
        this.levelUpRaindanceButton.prop('disabled', true);
        this.levelUpFaucetButton.prop('disabled', true);
        this.levelUpGardenhoseButton.prop('disabled', true);
        this.levelUpTruckButton.prop('disabled', true);
        this.levelUpFirehoseButton.prop('disabled', true);
        this.levelUpIcemineButton.prop('disabled', true);
        this.levelUpSpaceshipButton.prop('disabled', true);
        this.levelUpWormholeButton.prop('disabled', true);
        this.levelUpRiverButton.prop('disabled', true);
        this.levelUpColliderButton.prop('disabled', true);
    },

    //offline production
    _offlineProduction:function(){
        var dif = this.startTime - this.timeSaved;
        var realOfflineTime = msToTime(dif);
        var toolong = 0;
        if(dif>this.maximumTimeForOfflineProduction){
            dif = this.maximumTimeForOfflineProduction;
            toolong = 1;
        }
        var dropsProducedOffline = 0;
        this._calculateDps();
        $.each(this.buildings, function(i, _building) {
            _building.calculateCurrentProduction();
            dropsProducedOffline += _building.produceOffline(dif);
        });
        dropsProducedOffline = dropsProducedOffline /100 * this.offlineProductionPercentage;

        var maxAllowedOfflineTime = msToTime(dif);

        this.dropsInBank += dropsProducedOffline;
        this.totalDropsEver += dropsProducedOffline;
        this.totalDropsThisExperienceLevel += dropsProducedOffline;

        
        var alienDrainOffline = 0;
        
        $.each(this.aliensActiveList, function(i, alien) {
            alienDrainOffline += alien.drainOffline(dif);
        });
        alienDrainOffline = alienDrainOffline /100 * this.offlineProductionPercentage;

        if(toolong==0){
            Game._makeNotice("clock", "Offline production", "You were offline for " +realOfflineTime+ ". While you were offline you gained " + Beautify(Math.floor(dropsProducedOffline.toFixed(0))) + " drops ("+ this.offlineProductionPercentage+"% of drops per second) and aliens drained " + Beautify(Math.floor(alienDrainOffline.toFixed(0))) + " drops", 0, 0,15000);
        }else{
            Game._makeNotice("clock", "Offline production", "You were offline for " +realOfflineTime+ ", but you can only get drops for "+maxAllowedOfflineTime+". While you were offline you gained " + Beautify(Math.floor(dropsProducedOffline.toFixed(0))) + " drops ("+ this.offlineProductionPercentage+"% of drops per second) and aliens drained " + Beautify(Math.floor(alienDrainOffline.toFixed(0))) + " drops", 0, 0,15000);
        }

    },

    _startCloudTimer: function(){
        var self = this;
        this.cloudVisible=0;
        var max = this.cloudEnd-this.cloudStart;
        var randomnum = Math.floor((Math.random() * max) + 1);
        var nextcl = this.cloudStart + randomnum;
        this.showCloudTimer = window.setTimeout(function(){self._showCloud();}, nextcl);
    },

    //water waves in bank
    _waterWaves: function(){
        var self = this;
        if(this.movingWaterOption==1){
         
        }
    },

    _getBankBoostPerc:function(){ 
        var dio = this.dropsInBank;
        var ret=0;
        if (dio>=895429615305069300000000){ret=100;}else if(dio>=792806586866086600000000){ret=99}else if(dio>=701069885589140500000000){ret=98}else if(dio>=619159333722712200000000){ret=97}else if(dio>=546108599233516100000000){ret=96}
        else if(dio>=481037737554191600000000){ret=95}else if(dio>=423146257234581240000000){ret=94}else if(dio>=371706677629111700000000){ret=93}else if(dio>=326058548384867100000000){ret=92}else if(dio>=285602902059438200000000){ret=91}
        else if(dio>=249797112696685560000000){ret=90}else if(dio>=218150134624229060000000){ret=89}else if(dio>=190218097110817420000000){ret=88}else if(dio>=165600231836712060000000){ret=87}else if(dio>=143935111387793220000000){ret=86}
        else if(dio>=124897178186158980000000){ret=85}else if(dio>=108193544418400890000000){ret=84}else if(dio>=93561044619315940000000){ret=83}else if(dio>=80763523615333430000000){ret=82}else if(dio>=69589343530126590000000){ret=81}
        else if(dio>=59849094506439210000000){ret=80}else if(dio>=51373494704737670000000){ret=79}else if(dio>=44011466002515740000000){ret=78}else if(dio>=3762837263950477400000077){ret=77}else if(dio>=32104410835214565000000){ret=76}
        else if(dio>=27333138147645726000000){ret=75}else if(dio>=23220132047135960000000){ret=74}else if(dio>=19681767848550770000000){ret=73}else if(dio>=16644106779792821000000){ret=72}else if(dio>=14041885566231883000000){ret=71}
        else if(dio>=11817599480465212000000){ret=70}else if(dio>=9920671346084658000000){ret=69} else if(dio>=8306699494096991000000){ret=68}else if(dio>=6936778152528157000000){ret=67}else if(dio>=5776884204716740000000){ret=66}
        else if(dio>=4797324681010433000000){ret=65}else if(dio>=3972239753131712300000){ret=64}else if(dio>=3279156381453603300000){ret=63}else if(dio>=2698588123869216000000){ret=62}else if(dio>=2213676951864406700000){ret=61}
        else if(dio>=1809873235795386800000){ret=60}else if(dio>=1474650358185208300000){ret=59}else if(dio>=1197250692008858400000){ret=58}else if(dio>=968459941329148800000){ret=57}else if(dio>=780407085140222500000){ret=56}
        else if(dio>=626387392708140700000){ret=55}else if(dio>=500706190877047850000){ret=54}else if(dio>=398541261515392350000){ret=53}else if(dio>=315821931263133900000){ret=52}else if(dio>=249123086734693860000){ret=51}
        else if(dio>=195572507034328200000){ret=50}else if(dio>=152770052525706600000){ret=49}else if(dio>=118717384915664850000){ret=48}else if(dio>=91757019488523120000){ret=47}else if(dio>=70519626362998270000){ret=46}
        else if(dio>=53878604515772420000){ret=45}else if(dio>=40911050578149786000){ret=44}else if(dio>=53878604515772420000){ret=43}else if(dio>=23127577557875340000){ret=42}else if(dio>=17207401025641026000){ret=41}
        else if(dio>=12707388120196856000){ret=40}else if(dio>=9310757851967834000){ret=39}else if(dio>=6765811783780036000){ret=38}else if(dio>=4873763662273663000){ret=37}else if(dio>=3478609346528894500){ret=36}
        else if(dio>=2458736461986831400){ret=35}else if(dio>=1720011062295265800){ret=34}else if(dio>=1190112520884487200){ret=33}else if(dio>=813918209914834700){ret=32}else if(dio>=549766551724137900){ret=31}
        else if(dio>=366451025462807230){ret=30}else if(dio>=240818941573998050){ret=29}else if(dio>=155867505885345250){ret=28}else if(dio>=99246114928149460){ret=27}else if(dio>=62088171641031896){ret=26}
        else if(dio>=38108188628928600){ret=25}else if(dio>=22910743724384880){ret=24}else if(dio>=13467145613480130){ret=23}else if(dio>=7723618886955972){ret=22}else if(dio>=4311578947368420){ret=21}
        else if(dio>=2336276859014280){ret=20}else if(dio>=1224880286215950){ret=19}else if(dio>=619036127056620){ret=18}else if(dio>=300239975158032){ret=17}else if(dio>=139013933454240){ret=16}
        else if(dio>=61054982558010){ret=15}else if(dio>=25239592216020){ret=14}else if(dio>=9726655034460){ret=13}else if(dio>=3452271214392){ret=12}else if(dio>=1111111111110){ret=11}
        else if(dio>=317733228540){ret=10}else if(dio>=78536544840){ret=9}else if(dio>=16148168400){ret=8}else if(dio>=2612138802){ret=7}else if(dio>=305175780){ret=6}
        else if(dio>=22369620){ret=5}else if(dio>=797160){ret=4}else if(dio>=25000){ret=3}else if(dio>=10000){ret=2}else if(dio>=1500){ret=1}
       
        return ret;
    },

    //show info on screen in notice
    _makeNotice: function(imagename, title, text, x, y, time){ // x and y  are for background position of image to show the right sprite 
        var notice = '';
        if (imagename!=0){
                var filen = "url('images/" + imagename +".png')";
                var pos = x +"px "+ y + "px";
                notice = $('<div class="notice" ><table><tr><td><div class="noticeimage" style="border:2px solid white; border-radius:4px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="noticeTitle">'+title+'</p><p>'+text+'</p></td></tr></table></div>');
        } else {
            notice = $('<div class="notice" ><p style="text-align:center; margin:0; padding:0;">'+title+'</p></div>');
        }
        this.noticesDiv.append(notice);
        notice.on('click', function(){
            this.remove();
        });
        var dur = 10000;
        if (time!=0){
            dur=time;
        }
        window.setTimeout(function(){notice.remove();}, dur);
    },

    // set the MntEewLevel
    _setMtnEewLvl: function(lvl){
        var alvl = lvl + "%";
        var clvl = (100 - lvl) + "%";
        this.mtnEewLevelDiv.css({'height':alvl, 'top':clvl});
        this.mntEewPercStats.text(lvl);
    },


    // Make an alert notification over whole screen
    _makeAlertNotification:function(content){ 
        this.alertNotificationContent.html(content);
        this.alertNotification.fadeIn("fast");
    },

    //set buttons to correct buy building mode
    _setBuyBuildingModeButtons: function(){
        var self = this;
        if(this.buyBuildingMode==1){
            self.buyBuildingModeButton1.addClass("helperbuybuttonactive");
            self.buyBuildingModeButton1.removeClass("helperbuybutton");
            self.buyBuildingModeButton10.removeClass("helperbuybuttonactive");
            self.buyBuildingModeButton10.addClass("helperbuybutton");
            self.buyBuildingModeButton100.removeClass("helperbuybuttonactive");
            self.buyBuildingModeButton100.addClass("helperbuybutton");
        }else if (this.buyBuildingMode==10){
            self.buyBuildingModeButton10.addClass("helperbuybuttonactive");
            self.buyBuildingModeButton1.removeClass("helperbuybuttonactive");
            self.buyBuildingModeButton100.removeClass("helperbuybuttonactive");
            self.buyBuildingModeButton10.removeClass("helperbuybutton");
            self.buyBuildingModeButton1.addClass("helperbuybutton");
            self.buyBuildingModeButton100.addClass("helperbuybutton");
        }else if (this.buyBuildingMode==100){
            self.buyBuildingModeButton100.addClass("helperbuybuttonactive");
            self.buyBuildingModeButton1.removeClass("helperbuybuttonactive");
            self.buyBuildingModeButton10.removeClass("helperbuybuttonactive");
            self.buyBuildingModeButton100.removeClass("helperbuybutton");
            self.buyBuildingModeButton1.addClass("helperbuybutton");
            self.buyBuildingModeButton10.addClass("helperbuybutton");
        }
    },

    // experience and know how
    _checkKnowhowScreen: function(){
        $.each(this.knowhowUpgrades, function(i, upgrade) {
            upgrade.check();
        });
    },

    _startKnowhow: function(){
        var self = this;

        //stop timers
        clearInterval(this.mainTimer);
        clearInterval(this.upgradesCheckTimer);
        clearInterval(this.saveTimer);
        clearInterval(this.updateStatsTimer);
        clearInterval(this.showCloudTimer);
        clearInterval(this.hideCloudTimer);
        clearInterval(this.contactTimer);
        clearInterval(this.knowhowTimer);
        clearInterval(this.alienTimer);

        this._save();

        this.knowhowToUndo = this.experiencePoints;
        this.experienceToSpend += this.experiencePoints;
        this.knowhow = this.knowhow + this.experiencePoints;
        this.knowhowscreenExpStats.text(Beautify(this.experienceToSpend));
        this.experiencePointsToSpendStats.text(Beautify(this.experienceToSpend));
        this.knowhowscreenKnowhowStats.text(Beautify(this.knowhow));
        this.textOfKnowhowStats.text(Beautify(this.knowhow));
        
        $.each(this.knowhowUpgrades, function(i, upgrade) {
            upgrade.check();
        });

        this.knowhowScreen.fadeIn("fast");
		this.alertNotification.fadeOut("fast");

        this.knowhowTimer = window.setInterval(function() {
            var posx = self.knowhowDrag.position().left;
            var posy = self.knowhowDrag.position().top;
            if((self.dragstarposx!=posx)||(self.dragstarposy!=posy)){
                var scrw = $(window).width();
                var scrh = $(window).height();
                self.dragstarDiv.css({'left':posx/3-scrw,'top':posy/3-scrh});
                self.superdragDiv.css({'left':posx/1.5-scrw,'top':posy/1.5-scrh});
                self.dragstarposx = posx;
                self.dragstarposy = posy;
            }
        }, this.interval);
    },

    _resetWithKnowhow: function(){
        var self = this;
        //Reset complete game
            this.lastKnowHow = Date.now();
            this.knowhowBackButton.prop('disabled', false);
            //reset buildings
            $.each(this.buildings, function(i, building) {
				building.shown = 0;
				building.quantity = 0;
				building.cost = building.startcost;
				building.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>???</span>");
			    building.button.css({'background':'#C5CAE9 url("images/question.png") no-repeat right center'});
				if(building.id>3){
					building.button.hide();
				}
            });
            
           

            // reset cloud variables and specials
            this.cloudStart=320000;
            this.cloudEnd=640000;
            this.cloudDuration=15000;
            this.cloudVisible=0;
            this.cloudsClicked=0;
            this.cloudUpgradeLevel= 1;
            this.cloudsCLickedEver=0;
            this.totalCloudsShownEver=0;
            this.stormActive=0;
            this.stormMultiplier=7;
            this.buildingSpecialsActive=0;
            this.clickStormActive=0;
            this.clickStormMultiplier=777;
            this.clickStormDuration=10000;
            this.buildingSpecialsDuration=15000;
            this.stormDuration=77000;

            // reset alien variables
            this.alienNumber=0;
            this.alienStart=150000;
            this.alienEnd=300000;
            this.alienDrain= 0;
            this.totalDropsDrained= 0;
            this.alienTechUpgrades= 0;
            this.alienContact= 0;
            this.alienContactDuration= 1800;
            this.alienDrainPerc= 6;
            this.alienTechStrength= 1;
            this.contactNumber=0;
            this.aliensActive=0;

            // reset alien lists
            this.aliensList= [];
            this.aliensPopList= [];
            this.aliensActiveList= [];
            this.aliensSaveList=[];

            //remove aliens from container
            this.alienContainer.empty();

            // reset number variables
            this.maximumDropsInOcean = 150000000000000000000000000;
            this.dps=0;
            this.handmadeClicks=0;
            this.numberOfDropsPerClick=1;
            this.basicNumberOfDropsPerClick=1;
            this.percentageOfDpsPerClick=0;
            this.dropsInBank=0;
            this.handmadeDrops=0;
            this.totalDropsThisExperienceLevel=0;
            this.totalNumberOfBuildings=0;
            this.totalNumberOfUpgrades=0;
            this.numberOfAchievementsUnlocked=0;
            this.achievementsPerc=0;
            this.dropsInOcean=0;
            this.oceanPercentage=0;
            this.waterLevel=0;
            this.waterLevelOld=0;
            
            //reset upgrades
             $.each(this.upgrades, function(i, upgrade) {
				if(upgrade.name!="poseidon"){
					upgrade.bought = 0;
					upgrade.button.hide();
                    upgrade.buttonBought.hide();
                    upgrade.check();
				}
            });
            this.boughtUpgrades= [];

            //reset prayers to non active
            this.prayerToSelect = 1;
            this._prayerSelected(0);
            this.prayerToSelect = 2;
            this._prayerSelected(0);
            this.prayerToSelect = 0;
            
            $.each(self.prayers, function(i, prayer) {
                if(prayer.id!=0){
                    self._deactivatePrayer(prayer.id);
                } 
            });

            //reload knowhow upgrades
            $.each(self.boughtKnowhowUpgrades, function(i, upgrade) {
                var u = self.knowhowUpgrades.find(x => x.id === upgrade.id);
                u.bought = 1;
                u.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'border-color':'#00dd00'});
                if (upgrade.type=="unlock"){
                   self.useKnowhow = 1;
                }else if(this.type=="offline"){
                    if(this.id==23){
                        self.offlineProductionPercentage = 40;
                        self.maximumTimeForOfflineProduction = 86400000;
                    }else if(this.id==24){
                        self.maximumTimeForOfflineProduction = 129600000;
                    }else if(this.id==25){
                        self.offlineProductionPercentage = 50;
                    }else if(this.id==26){
                        self.maximumTimeForOfflineProduction = 172800000;
                    }else if(this.id==27){
                        self.offlineProductionPercentage = 55;
                    }else if(this.id==28){
                        self.maximumTimeForOfflineProduction = 216000000;
                    }else if(this.id==29){
                        self.offlineProductionPercentage = 60;
                    }else if(this.id==30){
                        self.maximumTimeForOfflineProduction = 259200000;
                    }else if(this.id==31){
                        self.offlineProductionPercentage = 65;
                    }else if(this.id==32){
                        self.maximumTimeForOfflineProduction = 302400000;
                    }else if(this.id==33){
                        self.offlineProductionPercentage = 70;
                    }else if(this.id==34){
                        self.maximumTimeForOfflineProduction = 345600000;
                    }else if(this.id==35){
                        self.offlineProductionPercentage = 75;
                    }else if(this.id==36){
                        self.maximumTimeForOfflineProduction = 432000000;
                    }else if(this.id==37){
                        self.offlineProductionPercentage = 80;
                    }else if(this.id==38){
                        self.maximumTimeForOfflineProduction = 518400000;
                    }else if(this.id==39){
                        self.offlineProductionPercentage = 85;
                    }else if(this.id==40){
                        self.offlineProductionPercentage = 95;
                        self.maximumTimeForOfflineProduction = 604800000;
                    }
                }else if (this.type=="alien"){	
                    if (this.id==12){
                        self.alienContactDuration = self.alienContactDuration/10;
                    }
                    else if (this.id==13){
                        self.alienStart = self.alienStart/4;
                        self.alienEnd = self.alienEnd/4;
                    }
                    else if (this.id==14||this.other==15){
                        self.alienDrainPerc += 1;
                    }
                }else if (this.type=="cloud"){
                    if (this.id==8||this.id==9){
                        self.cloudStart = self.cloudStart - (self.cloudStart*0.05);
                        self.cloudEnd = self.cloudEnd - (self.cloudEnd*0.05);
                    }
                    else if(this.id==10||this.id==11){
                        self.stormDuration = self.stormDuration*1.05;
                        self.clickStormDuration = self.clickStormDuration*1.05;
                        self.turboDuration = self.turboDuration * 1.05;
                        self.wrathDuration = self.wrathDuration * 1.05;
                        self.buildingSpecialsDuration = self.buildingSpecialsDuration *2;
                    }
                }else if(this.type=="alientech"){
					self.alienTechStrength++;
				}else if(this.type=="weatherstation"){
					self.weatherstationImage.show();
					self.weatherstationLevel = 1;
				}
            });

            this._calculateNumberOfDropsPerCLick();
            this._startTimers();
            this._updateWaterLevel(1);
            this._waterWaves();

            this.knowhowScreen.fadeOut("fast");
    },

    // Sacrifices
    _sacrificeClick: function(){
        var self = this;
        if (self.sacrificeDivActive==1){
            if (self.sacrificeLevel==0){
                if (self.dropsInBank>=1000000){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.dropsInBank = self.dropsInBank - 1000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.sacrificeDivActive=0;
                }
            }
            else if (self.sacrificeLevel==1){
                if (self.dropsInBank>=2000000){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.dropsInBank = self.dropsInBank - 2000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.sacrificeDivActive=0;
                }
            }
            else if (self.sacrificeLevel==2){
                if (self.dropsInBank>=4000000){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.dropsInBank = self.dropsInBank - 4000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.sacrificeDivActive=0;
                }
            }
            else if (self.sacrificeLevel==3){
                if (self.dropsInBank>=8000000){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.dropsInBank = self.dropsInBank - 8000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.sacrificeDivActive=0;
                }
            }
            else if (self.sacrificeLevel==4){
                if (self.dropsInBank>=16000000){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.dropsInBank = self.dropsInBank - 16000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.sacrificeDivActive=0;
                    self.prayers[1].button.show();
                }
            }
            else if (self.sacrificeLevel==5){
                if(self.buildings[0].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[0].quantity = self.buildings[0].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[0].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[2].button.show();
                }
            }
            else if (self.sacrificeLevel==6){
                if(self.buildings[1].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[1].quantity = self.buildings[1].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[1].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[3].button.show();
                }
            }
            else if (self.sacrificeLevel==7){
                if(self.buildings[2].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[2].quantity = self.buildings[2].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[2].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[4].button.show();
                }
            }
            else if (self.sacrificeLevel==8){
                if(self.buildings[3].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[3].quantity = self.buildings[3].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[3].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[5].button.show();
                }
            }
            else if (self.sacrificeLevel==9){
                if(self.buildings[4].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[4].quantity = self.buildings[4].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[4].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[6].button.show();
                }
            }
            else if (self.sacrificeLevel==10){
                if(self.buildings[5].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[5].quantity = self.buildings[5].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[5].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[7].button.show();
                }
            }
            else if (self.sacrificeLevel==11){
                if(self.buildings[6].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[6].quantity = self.buildings[6].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[6].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[8].button.show();
                }
            }
            else if (self.sacrificeLevel==12){
                if(self.buildings[7].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[7].quantity = self.buildings[7].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[7].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[9].button.show();
                }
            }
            else if (self.sacrificeLevel==13){
                if(self.buildings[8].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[8].quantity = self.buildings[8].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[8].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[10].button.show();
                }
            }
            else if (self.sacrificeLevel==14){
                if(self.buildings[9].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[9].quantity = self.buildings[9].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[9].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[11].button.show();
                }
            }
            else if (self.sacrificeLevel==15){
                if(self.buildings[10].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[10].quantity = self.buildings[10].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[10].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[12].button.show();
                }
            }
            else if (self.sacrificeLevel==16){
                if(self.buildings[11].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[11].quantity = self.buildings[11].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[11].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[13].button.show();
                }
            }
            else if (self.sacrificeLevel==17){
                if(self.buildings[12].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[12].quantity = self.buildings[12].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[12].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[14].button.show();
                }
            }
            else if (self.sacrificeLevel==18){
                if(self.buildings[13].quantity>=100){
                    self.sacrificeLevel++;
                    self._changeSacrificeText(self.sacrificeLevel);
                    self.buildings[13].quantity = self.buildings[13].quantity - 100;
                    self.totalNumberOfBuildings-=100;
                    self.buildings[13].setButton();
                    self.sacrificeDivActive=0;
                    self.prayers[15].button.show();
                }
            }
        }
        self._sacrificeCheck();
        $.each(this.buildings, function(i, _building) {
            _building.calculateCurrentProduction();
        });
        this._calculateDps();
        this._calculateNumberOfDropsPerCLick();
    },

    _sacrificeCheck:function(){ 
        var self = this;
        if (self.sacrificeLevel==0){
            if (self.dropsInBank >= 1000000){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==1){
            if (self.dropsInBank >= 2000000){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==2){
            if (self.dropsInBank >= 4000000){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==3){
            if (self.dropsInBank >= 8000000){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==4){
            if (self.dropsInBank >= 16000000){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==5){
            if (self.buildings[0].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==6){
            if (self.buildings[1].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==7){
            if (self.buildings[2].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==8){
            if (self.buildings[3].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==9){
            if (self.buildings[4].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==10){
            if (self.buildings[5].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==11){
            if (self.buildings[6].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==12){
            if (self.buildings[7].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==13){
            if (self.buildings[8].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==14){
            if (self.buildings[9].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==15){
            if (self.buildings[10].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==16){
            if (self.buildings[11].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==17){
            if (self.buildings[12].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }else if(self.sacrificeLevel==18){
            if (self.buildings[13].quantity >= 100){ 
                self._setSacrificeActive();
            }else {
                self._setSacrificeDeactive();
            }
        }
    },

    _setSacrificeActive:function(){
        var self = this;
        self.sacrificeDivActive=1;
        if (self.sacrificeDivHover==0){
            self.sacrificeDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
        }
    },
    
    _setSacrificeDeactive:function(){
        var self = this;
        self.sacrificeDiv.css({'background-color':'#002558', '-moz-box-shadow':'inset 0 0 20px #0090cf', '-webkit-box-shadow':'inset 0 0 20px #0090cf', 'box-shadow':'inset 0 0 20px #0090cf'});
        self.sacrificeDivActive=0;
    },

    _changeSacrificeText: function(level){
        var self = this;
        if (self.sacrificeLevel==0){
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />1 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon will get a little less grumpy.</p>');
        } else if (self.sacrificeLevel==1) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />2 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon will get a little bit more favorable.</p>');
        } else if (self.sacrificeLevel==2) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />4 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon is getting happy with us.</p>');
        }else if (self.sacrificeLevel==3) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />8 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">One more and Poseidon will consider helping us.</p>');
        }else if (self.sacrificeLevel==4) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />16 million drops</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Brainpower prayer<br />Crazy scientists are 10% more powerful</p>');
        }else if (self.sacrificeLevel==5) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Helping hands</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Clickpower prayer<br />50% more clicking power</p>');
        }else if (self.sacrificeLevel==6) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Pipettes</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Pipettelicious<br />Each pipette is 2% more powerful for every helper you have</p>');
        }else if (self.sacrificeLevel==7) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Air dryers</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Turbo prayer<br />Chance of drops per second x30 for 60 seconds when you click on a cloud.</p>');
        }else if (self.sacrificeLevel==8) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Buckets</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Brainwaves prayer<br />Crazy scientists are 20% more powerful.</p>');
        }else if (self.sacrificeLevel==9) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Raindances</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Discount upgrade prayer<br />All upgrades are 5% cheaper.</p>');
        }else if (self.sacrificeLevel==10) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Faucets</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Discount helper prayer<br />All helpers are 5% cheaper.</p>');
        }else if (self.sacrificeLevel==11) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Garden hoses</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Bonus prayer<br />10% bonus drops per second.</p>');
        }else if (self.sacrificeLevel==12) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Trucks</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Bad weather prayer<br />Clouds show up 50% more often.</p>');
        }else if (self.sacrificeLevel==13) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Fire hoses</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Poseidon Wrath prayer<br />Chance of clicking power times 1111 for 11 seconds when you click on a cloud.</p>');
        }else if (self.sacrificeLevel==14) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Ice mines</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Heavy rain prayer<br />Clouds give 50% more drops</p>');
        }else if (self.sacrificeLevel==15) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Space ships</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Big bonus prayer<br />20% bonus drops per second.</p>');
        }else if (self.sacrificeLevel==16) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Worm holes</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Braingrowth prayer<br />Crazy scientists are 40% more powerful</p>');
        }else if (self.sacrificeLevel==17) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Rivers</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Enormous bonus prayer<br />60% bonus drops per second.</p>');
        }else if (self.sacrificeLevel==18) {
            self.sacrificeDiv.html('<p class="sacrificetext">Sacrifice<br />100 Colliders</p><hr style="width:20%" /><p class="sacrificeexpl">Poseidon grants you:<br />Double prayer<br />Double your drops per second.</p>');
        }else if (self.sacrificeLevel==19) {
            self.sacrificeDiv.html('<p class="sacrificetext">You have sacrificed enough!</p>');
        }
    },

    //prayer select
    _prayerSelected: function(id){
        //set selected prayer in prayer div
        var cx = this.prayers[id].cx;
        var cy = this.prayers[id].cy;
        var bgpos = cx + "px " + cy + "px";
        if(this.prayerToSelect==1){
            this.prayerDiv.css({'background-image':'url("images/prayers.png")', 'background-position':bgpos});
        }else{
            this.secondPrayerDiv.css({'background-image':'url("images/prayers.png")', 'background-position':bgpos});
        }
    },

    _deactivatePrayer:function(id){
        if(id==1){
            this.prayerBrainpowerActive = 0;
            this._calculateCrazyscientistsBoost();
        }else if(id==2){
            this.prayerClickpowerActive = 0;
        }else if(id==3){
            this.prayerPipetteliciousActive = 0;
        }else if(id==4){
            this.prayerTurboActive = 0;
        }else if(id==5){
            this.prayerBrainwavesActive = 0;
            this._calculateCrazyscientistsBoost();
        }else if(id==6){
            this.prayerDiscountUpgradeActive = 0;
        }else if(id==7){
            this.prayerDiscountHelperActive = 0;
            $.each(this.buildings, function(i, building) {
                building.setButton();
            });
        }else if(id==8){
            this.prayerBonusActive = 0;
        }else if(id==9){
            this.prayerBadWeatherActive = 0;
            this.cloudStart = Math.ceil(this.cloudStart/2*3);
            this.cloudEnd = Math.ceil(this.cloudEnd/2*3);
        }else if(id==10){
            this.prayerWrathActive = 0;
        }else if(id==11){
            this.prayerHeavyRainActive = 0;
        }else if(id==12){
            this.prayerBigBonusActive = 0;
        }else if(id==13){
            this.prayerBraingrowthActive = 0;
            this._calculateCrazyscientistsBoost();
        }else if(id==14){
            this.prayerEnormousBonusActive = 0;
        }else if(id==15){
            this.prayerDoubleActive = 0;
        }
    },

    _activatePrayer:function(id){
        if(id==1){
            this.prayerBrainpowerActive = 1;
            this._calculateCrazyscientistsBoost();
        }else if(id==2){
            this.prayerClickpowerActive = 1;
        }else if(id==3){
            this.prayerPipetteliciousActive = 1;
        }else if(id==4){
            this.prayerTurboActive = 1;
        }else if(id==5){
            this.prayerBrainwavesActive = 1;
            this._calculateCrazyscientistsBoost();
        }else if(id==6){
            this.prayerDiscountUpgradeActive = 1;
        }else if(id==7){
            this.prayerDiscountHelperActive = 1;
            $.each(this.buildings, function(i, building) {
                building.setButton();
            });
        }else if(id==8){
            this.prayerBonusActive = 1;
        }else if(id==9){
            this.prayerBadWeatherActive = 1;
            this.cloudStart = Math.floor(this.cloudStart/3*2);
            this.cloudEnd = Math.floor(this.cloudEnd/3*2);
        }else if(id==10){
            this.prayerWrathActive = 1;
        }else if(id==11){
            this.prayerHeavyRainActive = 1;
        }else if(id==12){
            this.prayerBigBonusActive = 1;
        }else if(id==13){
            this.prayerBraingrowthActive = 1;
            this._calculateCrazyscientistsBoost();
        }else if(id==14){
            this.prayerEnormousBonusActive = 1;
        }else if(id==15){
            this.prayerDoubleActive = 1;
        }
        $.each(this.buildings, function(i, _building) {
            _building.calculateCurrentProduction();
        });
        this._calculateDps();
        this._calculateNumberOfDropsPerCLick();
    },

    //weatherstation

    _weatherstationCheck:function(){
        var self = this;
        if (self.upgradeWeatherstationDivActive==0){
            if (self.weatherstationLevel==1){
                if (self.dropsInBank >= 1000000000000){
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==2){
                if (self.dropsInBank >= 100000000000000){ 
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==3){
                if (self.dropsInBank >= 1000000000000000){ 
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==4){
                if (self.dropsInBank >= 100000000000000000){ 
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==5){
                if (self.dropsInBank >= 1000000000000000000){ 
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==6){
                if (self.dropsInBank >= 100000000000000000000){ 
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==7){
                if (self.dropsInBank >= 1000000000000000000000){ 
                    self._setWeatherstationActive();
                }
            } else if (self.weatherstationLevel==8){
                if (self.dropsInBank >= 100000000000000000000000){ 
                    self._setWeatherstationActive();
                }
            }
        } else {
            if (self.weatherstationLevel==1){
                if (self.dropsInBank < 1000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==2){
                if (self.dropsInBank < 100000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==3){
                if (self.dropsInBank < 1000000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==4){
                if (self.dropsInBank < 100000000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==5){
                if (self.dropsInBank < 1000000000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==6){
                if (self.dropsInBank < 100000000000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==7){
                if (self.dropsInBank < 1000000000000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } else if (self.weatherstationLevel==8){
                if (self.dropsInBank < 100000000000000000000000){ 
                    self._setWeatherstationDeactive();
                } 
            } 
        }
    },

    _setWeatherstationActive:function(){
        var self = this; 
        self.upgradeWeatherstationDivActive=1; 
        if (self.upgradeWeatherstationDivHover==0){
            self.upgradeWeatherstationDiv.css({'background-color':'#005588', '-moz-box-shadow':'inset 0 0 20px #00c0ff', '-webkit-box-shadow':'inset 0 0 20px #00c0ff', 'box-shadow':'inset 0 0 20px #00c0ff'});
        }
    },
    
    _setWeatherstationDeactive:function(){
        var self = this; 
        self.upgradeWeatherstationDiv.css({'background-color':'#002558', '-moz-box-shadow':'inset 0 0 20px #0090cf', '-webkit-box-shadow':'inset 0 0 20px #0090cf', 'box-shadow':'inset 0 0 20px #0090cf'});
        self.upgradeWeatherstationDivActive=0;
    },

    _upgradeWeatherstationClick:function(){
        var self = this;
        if (self.upgradeWeatherstationDivActive==1){
            if (self.weatherstationLevel==1){
                if (self.dropsInBank>=1000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 1000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            } else if (self.weatherstationLevel==2){
                if (self.dropsInBank>=100000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 100000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            }  else if (self.weatherstationLevel==3){
                if (self.dropsInBank>=1000000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 1000000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            } else if (self.weatherstationLevel==4){
                if (self.dropsInBank>=100000000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 100000000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            } else if (self.weatherstationLevel==5){
                if (self.dropsInBank>=1000000000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 1000000000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            }  else if (self.weatherstationLevel==6){
                if (self.dropsInBank>=100000000000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 100000000000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            }  else if (self.weatherstationLevel==7){
                if (self.dropsInBank>=1000000000000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 1000000000000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            }  else if (self.weatherstationLevel==8){
                if (self.dropsInBank>=100000000000000000000000){
                    self.weatherstationLevel++;
                    self._changeWeatherstationText();
                    self.dropsInBank = self.dropsInBank - 100000000000000000000000; if(self.dropsInBank<0){self.dropsInBank=0;}
                    self.upgradeWeatherstationDivActive=0;
                }
            }
            self._setWeatherstationDeactive();
        }
    },

    _changeWeatherstationText: function(){
        var self = this;
        if (self.weatherstationLevel==0){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 trillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 20% of the clouds for you. After you buy this upgrade the weather station will click on 30% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==1){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 trillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 20% of the clouds for you. After you buy this upgrade the weather station will click on 30% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==2){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 trillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 30% of the clouds for you. After you buy this upgrade the weather station will click on 40% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==3){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 quadrillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 40% of the clouds for you. After you buy this upgrade the weather station will click on 50% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==4){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 quadrillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 50% of the clouds for you. After you buy this upgrade the weather station will click on 60% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==5){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 quintillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 60% of the clouds for you. After you buy this upgrade the weather station will click on 70% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==6){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 quintillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 70% of the clouds for you. After you buy this upgrade the weather station will click on 80% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==7){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />1 sextillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 80% of the clouds for you. After you buy this upgrade the weather station will click on 90% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==8){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Upgrade<br />100 sextillion drops</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 90% of the clouds for you. After you buy this upgrade the weather station will click on 100% of the clouds for you.</p>');
        } else if (self.weatherstationLevel==9){
            self.upgradeWeatherstationDiv.html('<p class="sacrificetext">Fully upgraded</p><hr style="width:20%" /><p class="sacrificeexpl">The weather station clicks on 100% of the clouds for you.</p>');
        } 
    },

    //play a sound function
    _playSound: function(s){
        for (var a=0;a<this.audiochannels.length;a++) {
            var thistime = new Date();
            if (this.audiochannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
                this.audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
                this.audiochannels[a]['channel'].src = document.getElementById(s).src;
                this.audiochannels[a]['channel'].load();
                this.audiochannels[a]['channel'].play();
                break;
            }
        }
    },

    //recalculate
    _recalculateAll:function(){
        $.each(this.buildings, function(i, building) {
            building.calculateCurrentProduction();
        });
        this._calculateNumberOfDropsPerCLick();
        this._calculateDps();
    },

    //Calculate the number of drops per second

    _calculateDps:function(){
        var self=this;
        var dpsl = 0;
        $.each(this.buildings, function(i, building) {
            dpsl += building.currentProduction; 
        });
        this.dps = dpsl;
        if(this.alienNumber!=0){
            this.alienDrain = this.alienNumber*this.alienDrainPerc;
            var txt = Beautify(+dpsl.toFixed(2)) + " (drained by: " + this.alienDrain +"%)";
            this.textOfNumberOfDropsPerSecond.text(txt); 
            this.textOfNumberOfDropsPerSecondStats.text(txt); 
            this.textOfNumberOfDropsPerSecond.css({'color':'#ff0000'});
        }else{
            this.textOfNumberOfDropsPerSecond.text(Beautify(+dpsl.toFixed(2))); 
            this.textOfNumberOfDropsPerSecondStats.text(Beautify(+dpsl.toFixed(2))); 
            this.textOfNumberOfDropsPerSecond.css({'color':'#ffffff'});
        }

        if(self.bgdropsOption==1){
            if (self.dps>=1000000000000000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 50);
            }else if (self.dps>=1000000000000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 80);
            }else if (self.dps>=1000000000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 100);
            }else if (self.dps>=1000000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 250);
            }else if (self.dps>=100000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 500);
            }else if(self.dps>=10000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 600);
            }else if(self.dps>=1000){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 700);
            }else if (self.dps>=100){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 800);
            }else if (self.dps>=10){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 900);
            }else if (self.dps>=1){
                window.clearInterval(self.handlebgdrops);
                self.handlebgdrops = window.setInterval(function() {
                    self._backgroundDrop();
                }, 1000);
            }
        }else {
            window.clearInterval(this.handlebgdrops);
        }
    }
};

// buildings (helpers)

var Building = function(options) {
    return $.extend({
        quantity: 0,            // number of buildings of this type bought
        startCost: 0,           // cost of first building of this type
        increaseCost: 1.15,     // cost of next building is cost last building * 1.15
        currentCost:0,
        
        startProduction: 0,
        currentProduction: 0,   // how much one building of this type produces
        totalProduction: 0,     // how much all buildings of this type have produced this experience level
        prodMultiplier: 1,

        button: undefined,      
		active:0,
		shown:0,
        visible:0,
        calculationVisible:0,
        popup:0,

        level:0,
        
        init: function() {
            var self = this;
            this.startCost = this.cost; 
            
            this.startProduction = this.production;
            var totcost = Math.floor((this.startCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost));
            if(Game.prayerDiscountHelperActive==1){
                totcost = totcost - (totcost/100*5);
            }
            this.button = $("<button class='building'><span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Game.buyBuildingMode+"x = "+ Beautify(totcost)+"</span></button></br>").css({'background':'#C5CAE9 url("images/question.png") no-repeat right center'});
            this.button.on('click', function() {
                            self.buy();
                        })      
                    .hover(function() {
                        // show popup
                        addMouseListener();
                        self.popup=1;
                        var produces = 0;
                        if (self.quantity!=0){
                            produces = Beautify((self.currentProduction/self.quantity).toFixed(2));
                        } else {
                            produces = Beautify((self.startProduction).toFixed(2));
                        }
                        var totprod = 0;
                        if (Game.dps!=0){
                            totprod = ((self.currentProduction)/Game.dps*100).toFixed(2);
                        }
                        Game.popup.html('<table><tr><td><img src="images/'+self.name+'.png"></td><td><p class="popuptitle">'+self.name+'</p><p>Cost: '+Beautify(self.currentCost)+' drops</p><p>Each '+self.name+' produces '+ produces +' drops per second.</p><p>'+self.quantity+' '+ self.name +'s producing '+ Beautify((self.currentProduction).toFixed(2)) +' drops per second. ('+ totprod +' % of total production)</p></td></tr></table>');
                        		
						Game.popup.show();
                    }, function() {
                        // on mouseout
                        removeMouseListener();
                        self.popup=0;
                        Game.popup.hide();
                    });
                    
            this.button.prop('disabled', true);
            Game.store.append(this.button); // append the button to the store
            
            if (this.id>3){                 // initially only show first three buttons
                this.button.hide();
            } else{
                this.visible = 1;
            }
            if(self.id==1){
                Game.calculation[self.id-1].bp.text(this.startProduction);
            }
			this.check();
			return this;
        },

        startstyle: function(){
			this.currentCost = Math.ceil(this.startCost * Math.pow(this.increaseCost,this.quantity));
            var totcost = Math.floor((this.currentCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost)); 
            if(Game.prayerDiscountHelperActive==1){
                totcost = totcost - (totcost/100*5);
            }

            if (totcost > Game.dropsInBank) { 
                    this.button.removeClass('buildingactive');
                    this.button.addClass('buildingnonactive');
                    this.active=0;
                    this.style=0;
                    
            } else {
                    this.button.removeClass('buildingnonactive');
                    this.button.addClass('buildingactive');
                    this.active=1;
                    this.style=1;
                    
            }
        },
        
        produce: function(diff) {
            var countplus = 0;
			countplus = (this.currentProduction / 1000 * diff);
			if(countplus>0){
				Game.dropsInBank += countplus; 
				Game.totalDropsThisExperienceLevel += countplus;
				Game.totalDropsEver += countplus; 
				this.totalProduction += countplus;
			}
        },

        produceOffline: function(diff){
            var countplus = 0;
            countplus = (this.currentProduction / 1000 * diff);
            if(countplus>0){
                this.totalProduction += countplus/100*Game.offlineProductionPercentage;
            }
            return countplus;
        },
            
        check: function(){
            var self = this;
            this.currentCost = Math.ceil(this.startCost * Math.pow(this.increaseCost,this.quantity));
            var totcost = Math.floor((this.currentCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost));
            if(Game.prayerDiscountHelperActive==1){
                totcost = totcost - (totcost/100*5);
            }
            if (totcost > Game.dropsInBank) {
                this.active=0;
                
                if (this.style!=0){
                    this.button.removeClass('buildingactive');
                    this.button.addClass('buildingnonactive');
                    this.style=0;
                }
            } else {
                this.active=1;
                
                if (this.style!=1){
                    this.button.removeClass('buildingnonactive');
                    this.button.addClass('buildingactive');
                    this.style=1;
                    
                }
            }

            if (Game.dropsInBank>=(totcost/10*9)){
                this.button.prop('disabled', false);
                if (this.shown==0){
                    var totcost = Math.floor((this.currentCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost));
                    this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Game.buyBuildingMode+"x = "+Beautify(totcost)+"</span>");
                    this.button.css({'background':'#C5CAE9 url("images/'+ this.name +'.png") no-repeat right center'});
                    this.shown = 1;
                    this.showCalculation(this.id);
                }
            }

            if(this.id>3){
                if (Game.buildings[this.id-3].shown==1){
					this.visible=1;
					this.button.show();
				}
            }
        },

        showCalculation: function(id){
            if(id==1){
                $('#calculationHelpingHandHeadingLabel').show();
            }else if(id==2){
                $('#calculationPipetteHeadingLabel').show();
            }else if(id==3){
                $('#calculationAirDryerHeadingLabel').show();
            }else if(id==4){
                $('#calculationBucketHeadingLabel').show();
            }else if(id==5){
                $('#calculationRaindanceHeadingLabel').show();
            }else if(id==6){
                $('#calculationFaucetHeadingLabel').show();
            }else if(id==7){
                $('#calculationGardenHoseHeadingLabel').show();
            }else if(id==8){
                $('#calculationTruckHeadingLabel').show();
            }else if(id==9){
                $('#calculationFireHoseHeadingLabel').show();
            }else if(id==10){
                $('#calculationIceMineHeadingLabel').show();
            }else if(id==11){
                $('#calculationSpaceshipHeadingLabel').show();
            }else if(id==12){
                $('#calculationWormholeHeadingLabel').show();
            }else if(id==13){
                $('#calculationRiverHeadingLabel').show();
            }else{
                $('#calculationColliderHeadingLabel').show();
            }
        },

        setButton: function(){
            var totcost = Math.floor((this.currentCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost));
            if(Game.prayerDiscountHelperActive==1){
                totcost = totcost - (totcost/100*5);
            }
            if (this.shown==1){
                this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Game.buyBuildingMode+"x = "+Beautify(totcost.toFixed(0))+"</span>");
                this.button.css({'background':'#C5CAE9 url("images/'+ this.name +'.png") no-repeat right center'});                
            }else {
                this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>???</span>\n<span class='buildingcost'>"+Game.buyBuildingMode+"x = "+ Beautify(totcost.toFixed(0))+"</span>")
                this.button.css({'background':'#C5CAE9 url("images/question.png") no-repeat right center'});
            }
            self.currentCost = totcost;
        },

        buy: function() {
            if(this.active==1){
                var self = this;
                this.active=0;
                
                this.currentCost = Math.ceil(this.startCost * Math.pow(this.increaseCost,this.quantity));
                var totcost = Math.floor((this.currentCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost));
                if(Game.prayerDiscountHelperActive==1){
                    totcost = totcost - (totcost/100*5);
                }
                if(Game.dropsInBank>=totcost){
                    Game.dropsInBank -= totcost; 
                    if (Game.dropsInBank<0){Game.dropsInBank=0;}
                    this.quantity = this.quantity + Game.buyBuildingMode;
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();      // recalculate production for all helpers, buying one can affect others because of upgrades
                    });
                    Game._calculateNumberOfDropsPerCLick(); // recalculate drops per click, buying building can affect this because of upgrades
                    Game.totalNumberOfBuildings = Game.totalNumberOfBuildings + Game.buyBuildingMode;
                    this.currentCost = Math.ceil(this.startCost * Math.pow(this.increaseCost,this.quantity));
                    totcost = Math.floor((this.currentCost*(1-Math.pow(this.increaseCost, Game.buyBuildingMode)))/(1-this.increaseCost));
                    this.button.html("<span class='buildingquantity'>"+this.quantity+"</span> <span class='buildingname'>"+this.name+"</span>\n<span class='buildingcost'>"+Game.buyBuildingMode+"x = "+Beautify(totcost)+"</span>");
                }
               
                $.each(Game.upgrades, function(i, upgrade) { 
                    upgrade.check();
                });

                //update waterlevel
                Game._updateWaterLevel(0);
                Game._calculateDps();
            }
        },

        calculateCurrentProduction: function(){
            var self = this;
            //todo aanpassen voor upgrades
            this.prodMultiplier = 1;
            var prodToAdd = 0;

            var lifeMultiplier = 100;
            var alienTechMultiplier = 0;
            var collaborationFirst = 0;
            var collaborationLast = 0;

            $.each(Game.boughtUpgrades, function(i, _upgrade) {
                if ((_upgrade.type=="hand")&&(self.id==1)){
                    if (_upgrade.other==0){
                        self.prodMultiplier *= _upgrade.multiplier;
                    } else {
                        prodToAdd = prodToAdd + (Game.totalNumberOfBuildings*_upgrade.multiplier);
                    }
                }else if ((_upgrade.type=="pipette")&&(self.id==2)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="air_dryer")&&(self.id==3)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="bucket")&&(self.id==4)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="raindance")&&(self.id==5)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="faucet")&&(self.id==6)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="garden_hose")&&(self.id==7)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="truck")&&(self.id==8)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="fire_hose")&&(self.id==9)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="ice_mine")&&(self.id==10)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="spaceship")&&(self.id==11)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="wormhole")&&(self.id==12)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="river")&&(self.id==13)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="collider")&&(self.id==14)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="life")||(_upgrade.type=="lifeknowhow")){
                   lifeMultiplier += _upgrade.perc;
                }else if((_upgrade.type=="alientech")&&((_upgrade.pip+1) == self.id)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else if ((_upgrade.type=="alientech")&&(_upgrade.building == self.id)){
                    alienTechMultiplier = (Game.buildings[_upgrade.pip].quantity/_upgrade.pipnum)/100*Game.alienTechStrength;
                }else if(((_upgrade.type=="contact")||(_upgrade.type=="contactb"))&&(self.id==2)){
                    self.prodMultiplier *= _upgrade.multiplier;
                }else  if(_upgrade.type=="collaboration"){
                    if (_upgrade.building==self.id){
                        collaborationFirst += Game.buildings[_upgrade.pipnum-1].quantity;
                    }else if (_upgrade.pipnum==self.id){
                        collaborationLast += Game.buildings[_upgrade.building-1].quantity;
                    }
                }
            });
            
            this.currentProduction = (((this.quantity*this.startProduction*this.prodMultiplier)+prodToAdd)*(lifeMultiplier/100)*((Game.waterLevel+100)/100)); 
            this.currentProduction += this.currentProduction*alienTechMultiplier;
            this.currentProduction += this.currentProduction/100*(Game.achievementsPerc*Game.crazyscientistsMultiplier);
            this.currentProduction += (this.currentProduction/100*5)*collaborationFirst;
            this.currentProduction += (this.currentProduction/100*0.1)*collaborationLast; 

            this.currentProduction += (this.currentProduction/100)*(this.level);//console.log(this.currentProduction);

            if(this.id==8){
                this.currentProduction = this.currentProduction * (Math.pow(2, (Carpark.level-1)));
            }
            if((this.id==2)&&(Game.prayerPipetteliciousActive==1)){
                this.currentProduction += this.currentProduction/100*(Game.totalNumberOfBuildings*2);
            }
            if(Game.stormActive==1){
                this.currentProduction = this.currentProduction*Game.stormMultiplier;
            }
            if(Game.turboActive==1){
                this.currentProduction = this.currentProduction*Game.turboMultiplier;
            }
            var buildingMultiplier = 1;
            if ((Game.buildingSpecialsActive!=0)&&(Game.buildings[Game.buildingSpecialsActive-1].name==this.name)){
                buildingMultiplier = Game.buildings[Game.buildingSpecialsActive-1].quantity; 
                if ((Game.buildings[Game.buildingSpecialsActive-1].quantity>=100)&&(Game.buildings[Game.buildingSpecialsActive-1].quantity<200)){
                    buildingMultiplier = buildingMultiplier * 10;
                }else if(Game.buildings[Game.buildingSpecialsActive-1].quantity>=200){
                    buildingMultiplier = buildingMultiplier * 100;
                }
                this.currentProduction = this.currentProduction*buildingMultiplier;
            }
                      
            this.currentProduction += this.currentProduction/100*Game.oceanMultiplier;
            
            if((Game.knowhow>0)&&(Game.useKnowhow==1)){
                this.currentProduction += (this.currentProduction/100*(Game.knowhow/100*Game.knowhowUsePerc));
            }

            if(Game.prayerBonusActive==1){
                this.currentProduction += this.currentProduction/100*10;
            }

            if(Game.prayerBigBonusActive==1){
                this.currentProduction += this.currentProduction/100*20;
            }

            if(Game.prayerEnormousBonusActive==1){
                this.currentProduction += this.currentProduction/100*60;
            }

            if(Game.prayerDoubleActive==1){
                this.currentProduction *= 2;
            }

            if(Game.alienNumber!=0){
                Game.alienDrain = Game.alienNumber*Game.alienDrainPerc;
                this.currentProduction = this.currentProduction-(this.currentProduction/100*Game.alienDrain);
            }      
            
            // show in calculation stats
            if(this.calculationVisible==1){
                Game.calculation[this.id-1].q.text(this.quantity);
                Game.calculation[this.id-1].bp.text(Beautify(this.startProduction));
                var bpres = this.quantity*this.startProduction;
                Game.calculation[this.id-1].bp_res.text(Beautify(bpres.toFixed(2)));
                Game.calculation[this.id-1].u.text(Beautify(this.prodMultiplier));
                var ures = bpres * this.prodMultiplier;
                Game.calculation[this.id-1].u_res.text(Beautify(ures.toFixed(2)));
                var hhres = 0;
                if(this.id==1){
                    Game.calculation[this.id-1].hh.text(Beautify(prodToAdd.toFixed(2)));
                    hhres = ures + prodToAdd;
                    Game.calculation[this.id-1].hh_res.text(Beautify(hhres.toFixed(2)));
                }else{
                    hhres = ures;
                    Game.calculation[this.id-1].hh_res.text(Beautify(hhres.toFixed(2)));
                }
                Game.calculation[this.id-1].l.text(Beautify(lifeMultiplier-100));
                var lres = hhres * lifeMultiplier /100;
                Game.calculation[this.id-1].l_res.text(Beautify(lres.toFixed(2)));
                Game.calculation[this.id-1].bb.text(Beautify(Game.waterLevel));
                var bbres = lres * (Game.waterLevel+100)/100;
                Game.calculation[this.id-1].bb_res.text(Beautify(bbres.toFixed(2)));
                Game.calculation[this.id-1].at.text(Beautify((alienTechMultiplier*100).toFixed(0)));
                var atres = bbres + (bbres*alienTechMultiplier);
                Game.calculation[this.id-1].at_res.text(Beautify(atres.toFixed(2)));
                Game.calculation[this.id-1].me_sc.text(Beautify(Game.achievementsPerc));
                Game.calculation[this.id-1].me_scboost.text(Beautify(Game.crazyscientistsMultiplier.toFixed(2)));
                Game.calculation[this.id-1].me.text(Beautify((Game.achievementsPerc*Game.crazyscientistsMultiplier).toFixed(1)));
                var meres = atres + (atres/100*Game.achievementsPerc*Game.crazyscientistsMultiplier);
                Game.calculation[this.id-1].me_res.text(Beautify(meres.toFixed(2)));
                Game.calculation[this.id-1].cbf_q.text(Beautify(collaborationFirst.toFixed(0)));
                var cbfres = meres + ((meres/100*5)*collaborationFirst);
                Game.calculation[this.id-1].cbf_res.text(Beautify(cbfres.toFixed(2)));
                Game.calculation[this.id-1].cbl_q.text(Beautify(collaborationLast.toFixed(0)));
                var cblres = cbfres + ((cbfres/100*0.1)*collaborationLast);
                Game.calculation[this.id-1].cbl_res.text(Beautify(cblres.toFixed(2)));
                Game.calculation[this.id-1].lvl.text(this.level);
                Game.calculation[this.id-1].lvl_pres.text(this.level);
                var lvlres = cblres + (cblres/100)*(this.level);
                Game.calculation[this.id-1].lvl_res.text(Beautify(lvlres.toFixed(2)));
                if(this.id==8){
                    Game.calculation[this.id-1].mb.text((Math.pow(2, (Carpark.level-1))));
                    lvlres = lvlres*(Math.pow(2, (Carpark.level-1)));
                    Game.calculation[this.id-1].mb_res.text(Beautify(lvlres.toFixed(2)));
                }
                if(this.id==2){
                    if(Game.prayerPipetteliciousActive==1){
                        lvlres += lvlres/100*(Game.totalNumberOfBuildings*2);
                        Game.calculation[this.id-1].ppl.text(Beautify(Game.totalNumberOfBuildings*2));
                    }else{
                        Game.calculation[this.id-1].ppl.text("0");
                    }
                    Game.calculation[this.id-1].ppl_res.text(Beautify(lvlres.toFixed(2)));
                }
                var smult = 1;
                if (Game.stormActive==1){
                    smult = Game.stormMultiplier;
                }
                Game.calculation[this.id-1].st.text(Beautify(smult));
                var stres = lvlres * smult;
                Game.calculation[this.id-1].st_res.text(Beautify(stres.toFixed(2)));
                var tmult = 1;
                if (Game.turboActive==1){
                    tmult = Game.turboMultiplier;
                }
                Game.calculation[this.id-1].tu.text(Beautify(tmult));
                var tures = stres * tmult;
                Game.calculation[this.id-1].tu_res.text(Beautify(tures.toFixed(2)));
                Game.calculation[this.id-1].hs.text(Beautify(buildingMultiplier));
                var hsres = tures * buildingMultiplier;
                Game.calculation[this.id-1].hs_res.text(Beautify(hsres.toFixed(2)));
                Game.calculation[this.id-1].dio.text(Beautify(Game.oceanMultiplier));
                var diores = hsres+ (hsres /100 * Game.oceanMultiplier);
                Game.calculation[this.id-1].dio_res.text(Beautify(diores.toFixed(2)));
                var knowhowused = 0;
                if((Game.knowhow>0)&&(Game.useKnowhow==1)){
                    knowhowused = Game.knowhow/100*Game.knowhowUsePerc;
                }
                Game.calculation[this.id-1].kh.text(knowhowused.toFixed(2));
                var khres = diores + (diores/100*knowhowused);
                Game.calculation[this.id-1].kh_res.text(Beautify(khres.toFixed(2)));
                var pbres=khres;
                if(Game.prayerBonusActive==1){
                    Game.calculation[this.id-1].pb.text(10);
                    pbres = khres + (khres/100*10);
                    Game.calculation[this.id-1].pb_res.text(Beautify(pbres.toFixed(2)));
                }else{
                    Game.calculation[this.id-1].pb.text(0);
                    Game.calculation[this.id-1].pb_res.text(Beautify(pbres.toFixed(2)));
                }
                var pbbres=pbres;
                if(Game.prayerBigBonusActive==1){
                    Game.calculation[this.id-1].pbb.text(20);
                    pbbres = pbres + (pbres/100*20);
                    Game.calculation[this.id-1].pbb_res.text(Beautify(pbbres.toFixed(2)));
                }else{
                    Game.calculation[this.id-1].pbb.text(0);
                    Game.calculation[this.id-1].pbb_res.text(Beautify(pbbres.toFixed(2)));
                }
                var ebres=pbbres;
                if(Game.prayerEnormousBonusActive==1){
                    Game.calculation[this.id-1].eb.text(60);
                    ebres = pbbres + (pbbres/100*60);
                    Game.calculation[this.id-1].eb_res.text(Beautify(ebres.toFixed(2)));
                }else{
                    Game.calculation[this.id-1].eb.text(0);
                    Game.calculation[this.id-1].eb_res.text(Beautify(ebres.toFixed(2)));
                }
                var pdres=ebres;
                if(Game.prayerDoubleActive==1){
                    Game.calculation[this.id-1].pd.text(2);
                    pdres = ebres * 2;
                    Game.calculation[this.id-1].pd_res.text(Beautify(pdres.toFixed(2)));
                }else{
                    Game.calculation[this.id-1].pd.text(1);
                    Game.calculation[this.id-1].pd_res.text(Beautify(pdres.toFixed(2)));
                }
                var dba = 0;
                if(Game.alienNumber!=0){   
                    dba = Game.alienNumber*Game.alienDrainPerc;
                }
                Game.calculation[this.id-1].da.text(dba);
                var dares = pdres - (pdres/100*dba);
                Game.calculation[this.id-1].da_res.text(Beautify(dares.toFixed(2)));
                var total = dares;
                Game.calculation[this.id-1].total.text(Beautify(total.toFixed(2)));
            }

            if(this.popup==1){
                var produces = 0;
                if (self.quantity!=0){
                    produces = Beautify((self.currentProduction/self.quantity).toFixed(2));
                } else {
                    produces = Beautify((self.startProduction).toFixed(2));
                }
                var totprod = 0;
                if (Game.dps!=0){
                    totprod = ((self.currentProduction)/Game.dps*100).toFixed(2);
                }
                Game.popup.html('<table><tr><td><img src="images/'+self.name+'.png"></td><td><p class="popuptitle">'+self.name+'</p><p>Cost: '+Beautify(self.currentCost)+' drops</p><p>Each '+self.name+' produces '+ produces +' drops per second.</p><p>'+self.quantity+' '+ self.name +'s producing '+ Beautify((self.currentProduction).toFixed(2)) +' drops per second. ('+ totprod +' % of total production)</p></td></tr></table>');
            }
        },
    }, options);
};

//list of buildings
var _buildings = [
	{id: 1, name: "Helping hand", cost: 15, production: 0.1, levelName: "#levelHelpinghand"},
	{id: 2, name: "Pipette", cost: 100, production: 1, levelName: "#levelPipette"},
	{id: 3, name: "Air dryer", cost: 1100, production: 10, levelName: "#levelAirdryer"},
	{id: 4, name: "Bucket", cost: 12000, production: 50, levelName: "#levelBucket"},
	{id: 5, name: "Raindance", cost: 130000, production: 250, levelName: "#levelRaindance"},
	{id: 6, name: "Faucet", cost: 1400000,	production: 1500, levelName: "#levelFaucet"},
	{id: 7, name: "Garden hose", cost: 20000000, production: 8000, levelName: "#levelGardenhose"},
	{id: 8, name: "Truck", cost: 330000000, production: 50000, levelName: "#levelTruck"},
	{id: 9, name: "Fire hose", cost: 5100000000, production: 250000, levelName: "#levelFirehose"},
	{id: 10, name: "Ice mine", cost: 75000000000, production: 1500000, levelName: "#levelIcemine"},
	{id: 11, name: "Spaceship", cost: 1000000000000, production: 10000000, levelName: "#levelSpaceship"},
	{id: 12, name: "Wormhole", cost: 14000000000000, production: 65000000, levelName: "#levelWormhole"},
	{id: 13, name: "River", cost: 170000000000000, production: 450000000, levelName: "#levelRiver"},
	{id: 14, name: "Large H-O collider", cost: 2100000000000000, production: 3000000000, levelName: "#levelCollider"}
];


// Upgrades
var Upgrade = function(options) {
	return $.extend({
        bought: 0,   
		button: undefined, 
		buttonBought: undefined,
		active:0,
		hover:0,
		startCost: undefined,
		discounted:0,
        style:0,
        visible:0,
        
        timerCheck:function(){  
            if (this.bought==0){
                if (this.type=="life"){ /*+timer*/ 
					if ((this.required <= Game.totalDropsThisExperienceLevel)&&((this.startCost*0.8)<=Game.dropsInOcean)){
                        this.button.fadeIn("fast");
                        this.visible=1;
					}
				}else if (this.type=="cloud"){/*+timer*/ 
					if ((this.required<=Game.cloudsClicked)&&((this.cost/100*90) <= Game.dropsInBank)){
                        this.button.fadeIn("fast");
                        this.visible=1;
					}					
				}else if ((this.type=="knowhow")&&(this.required==0)&&(Game.knowhow>0)){;
                    if (Game.totalDropsThisExperienceLevel>=1000){/* +timer */
                        this.button.fadeIn("fast");
                        this.visible=1;
                    }
                }else if(this.type=="crazyscientist"){/*timer*/
					if((this.required <= Game.numberOfAchievementsUnlocked)&&((this.cost/100*90) <= Game.dropsInBank)){
                        this.button.fadeIn("fast");
                        this.visible=1;
					}
				}else if(this.type=="poseidon"){/*timer*/
                    if ( (Game.knowhowUpgrades[this.required-1].bought==1) && ((this.cost/100*90) <= Game.dropsInBank)){
                        this.button.fadeIn("fast");
                        this.visible=1;
                    }
                }else if(this.type=="lifeknowhow"){/*timer*/
					if ((Game.knowhowUpgrades[this.required].bought==1)&&((this.cost/100*90)<=Game.dropsInBank)&&((this.cost*0.8)<=Game.dropsInOcean)){
							this.button.fadeIn("fast");
						}
				}
            }
        },

        check: function(){                    //check if upgrade should become available depending on what is required for the upgrade
            if (this.bought==0){
                if (this.type=="mouse"){
					if (this.required<=Game.handmadeDrops){
                        this.button.fadeIn("fast");
                        this.visible=1;
                       // this.checkstyle();
					}
                }else if ((this.type=="hand")||(this.type=="pipette")||(this.type=="air_dryer")||(this.type=="bucket")||(this.type=="raindance")||(this.type=="faucet")||(this.type=="garden_hose")||(this.type=="truck")||(this.type=="fire_hose")||(this.type=="ice_mine")||(this.type=="spaceship")||(this.type=="wormhole")||(this.type=="river")||(this.type=="collider")){ 
					if (this.required <= Game.buildings[this.effect].quantity){
                        this.button.fadeIn("fast");
                        this.visible=1;
                       // this.checkstyle();
					}
				}else if (this.type=="life"){ /*+timer*/ 
					if ((this.required <= Game.totalDropsThisExperienceLevel)&&((this.startCost*0.8)<=Game.dropsInOcean)){
                        this.button.fadeIn("fast");
                        this.visible=1;
                       // this.checkstyle();
						}
				}else if (this.type=="cloud"){/*+timer*/ 
					if ((this.required<=Game.cloudsClicked)&&((this.cost/100*90) <= Game.dropsInBank)){
                        this.button.fadeIn("fast");
                        this.visible=1;
                       // this.checkstyle();
					}					
				}else if(this.type=="contact"){
					if (this.required <= Game.alienTechUpgrades){
                        this.button.fadeIn("fast");
                        this.visible=1;
					}
					//this.checkstyle();	
				}else if(this.type=="contactb"){
					//this.checkstyle();
				}else if(this.type=="aliens"){
					//this.checkstyle();
				}else if(this.type=="alientech"){
					if ((this.required <= Game.buildings[this.building-1].quantity)&&(Game.buildings[this.pip].quantity>=1)){
                        this.button.fadeIn("fast");
                        this.visible=1;
						}
						//this.checkstyle();
				}else if (this.type=="knowhow"){
					if (Game.knowhow!=0){ 
						if (this.required==0){
							if (Game.totalDropsThisExperienceLevel>=1000){/* +timer */
                                this.button.fadeIn("fast");
                                this.visible=1;
							}
						//	this.checkstyle();
						} else if (this.required==1){
                            var a = Game.upgrades.find(x => x.id === 169);
							if (a.bought==1){
                                this.button.fadeIn("fast");
                                this.visible=1;
							}
						//	this.checkstyle();
							
						}else if (this.required==2){
                            var a = Game.upgrades.find(x => x.id === 169);
                            var b = Game.upgrades.find(x => x.id === 170);
							if ((a.bought==1)&&(b.bought==1)){
                                this.button.fadeIn("fast");
                                this.visible=1;
								}
						//	this.checkstyle();
							
						}else if (this.required==3){
                            var a = Game.upgrades.find(x => x.id === 169);
                            var b = Game.upgrades.find(x => x.id === 170);
                            var c = Game.upgrades.find(x => x.id === 171);
							if ((a.bought==1)&&(b.bought==1)&&(c.bought==1)){
                                this.button.fadeIn("fast");
                                this.visible=1;
								}
						//	this.checkstyle();
						}
					}
				}else if(this.type=="ocean"){
					if (this.required <= Game._getOceanLog(Game.dropsInOcean)){
                        this.button.fadeIn("fast");
                        this.visible=1;
					}
					//this.checkstyle();
				}else if(this.type=="crazyscientist"){/*timer*/
					if((this.required <= Game.numberOfAchievementsUnlocked)&&((this.cost/100*90) <= Game.dropsInBank)){
                        this.button.fadeIn("fast");
                        this.visible=1;
					}
					//this.checkstyle();
				}else if(this.type=="poseidon"){/*timer*/
                    if ( (Game.knowhowUpgrades[this.required-1].bought==1) && ((this.cost/100*90) <= Game.dropsInBank)){
                        this.button.fadeIn("fast");
                        this.visible=1;
                    }
                    //this.checkstyle();
                }else if(this.type=="lifeknowhow"){/*timer*/
					if ((Game.knowhowUpgrades[this.required].bought==1)&&((this.cost/100*90)<=Game.dropsInBank)&&((this.cost*0.8)<=Game.dropsInOcean)){
							this.button.fadeIn("fast");
						}
					//	this.checkstyle();
				}else if(this.type=="collaboration"){	
                    if ((this.required <= Game.buildings[this.building-1].quantity)&&(this.required <= Game.buildings[this.pipnum-1].quantity)&&(Game.knowhowUpgrades[this.other-1].bought==1)){
                        this.button.fadeIn("fast");
                    }
                    //this.checkstyle();
                }
            }
        },

        checkstyle: function(){          //change style of button depending on of you have enough drops to buy the upgrade
            var effectiveCost = this.startCost;
            if (Game.prayerDiscountUpgradeActive==1){
                effectiveCost = effectiveCost - (effectiveCost/100*5);
            }
            if(effectiveCost <= Game.dropsInBank){
				if(this.style!=1){ 
                    this.button.removeClass('upgradenonactive');
                    this.button.removeClass('upgrade');
					this.button.addClass('upgradeactive');
					this.active=1;
					this.style=1; 
				}	else{
                    this.button.removeClass('upgrade');
                    this.button.removeClass('upgradenonactive');
					this.button.addClass('upgradeactive');
					this.active=1;
                }
			} else{
				if(this.style!=0){
					this.button.removeClass('upgradeactive');
                    this.button.addClass('upgrade');
                    this.button.addClass('upgradenonactive');
					this.active=0; 
					this.style=0;
				}else{
                    this.button.removeClass('upgradeactive');
					this.button.addClass('upgrade');
                    this.button.addClass('upgradenonactive');
					this.active=0; 
                }
			}
        },

        buy: function() {     //buy the upgrade
            var effectiveCost = this.cost;
            if (Game.prayerDiscountUpgradeActive==1){
                effectiveCost = effectiveCost - (effectiveCost/100*5);
            }
            if((this.active==1)&&(this.bought==0)&&(Game.dropsInBank>=effectiveCost)){
                this.active=0;
                this.bought=1;
                this.visible=0;
                Game.boughtUpgrades.push(this); 
				this.button.fadeOut("fast");
                this.buttonBought.fadeIn("fast");
                
                Game.totalNumberOfUpgrades++;
                Game.textOfNumberOfBoughtUpgradesStats.text(Game.totalNumberOfUpgrades);
                var upgradesPerc = ((Game.totalNumberOfUpgrades/Game.upgrades.length)*100).toFixed(2);
                Game.textOfPercentageOfUpgradesBoughtStats.text(upgradesPerc);
                Game.dropsInBank -= this.cost; if(Game.dropsInBank<0){Game.dropsInBank=0;}

                if (this.type=="mouse"){
                    Game._calculateNumberOfDropsPerCLick();
				} else if (this.type=="hand"){
                    Game._calculateNumberOfDropsPerCLick();
                    var b = Game.buildings.find(x => x.id === 1);
                    b.calculateCurrentProduction();
                } else if (this.type=="pipette"){
                    var b = Game.buildings.find(x => x.id === 2);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                } else if (this.type=="air_dryer"){
                    var b = Game.buildings.find(x => x.id === 3);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                } else if (this.type=="bucket"){
                    var b = Game.buildings.find(x => x.id === 4);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="raindance"){
                    var b = Game.buildings.find(x => x.id === 5);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="faucet"){
                    var b = Game.buildings.find(x => x.id === 6);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="garden_hose"){
                    var b = Game.buildings.find(x => x.id === 7);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="truck"){
                    var b = Game.buildings.find(x => x.id === 8);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="fire_hose"){
                    var b = Game.buildings.find(x => x.id === 9);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="ice_mine"){
                    var b = Game.buildings.find(x => x.id === 10);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="spaceship"){
                    var b = Game.buildings.find(x => x.id === 11);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="wormhole"){
                    var b = Game.buildings.find(x => x.id === 12);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="river"){
                    var b = Game.buildings.find(x => x.id === 13);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="collider"){
                    var b = Game.buildings.find(x => x.id === 14);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                }else if ((this.type=="life")||(this.type=="lifeknowhow")){
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();
                    });
                    Game._calculateNumberOfDropsPerCLick();
                }else if (this.type=="cloud"){
                    if(this.other==3){
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
                }else if ((this.type=="contact")||(this.type=="contactb")){
                    Game.contactNumber++;
                    var b = Game.buildings.find(x => x.id === 2);
                    b.calculateCurrentProduction();
                    Game._calculateNumberOfDropsPerCLick();
                    Game._startContact();
                }else if (this.type == "aliens"){
					Game._startAliens();
				}else if (this.type == "alientech"){
                    Game.alienTechUpgrades++;
                    Game.alienTechStrength++;
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();
                    });
                    Game._calculateNumberOfDropsPerCLick();
				} else if (this.type == "knowhow"){
                    Game.knowhowUsePerc += 20;
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();
                    });
                    Game.textOfKnowhowEffectivenessStats.text(Game.knowhowUsePerc + " %");
				}else if(this.type=="ocean"){
                    Game.oceanMultiplier += this.perc;
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();
                    });
                }else if (this.type == "crazyscientist"){
                    Game.numberOfCrazyscientists++;
                    Game._calculateCrazyscientistsBoost();
                    
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();
                    });
                    Game._calculateNumberOfDropsPerCLick();
				}else if (this.type == "poseidon"){
					Game.poseidonImage.fadeIn(5000);
				}else if (this.type=="collaboration"){
                    $.each(Game.buildings, function(i, building) {
                        building.calculateCurrentProduction();
                    });
                    Game._calculateNumberOfDropsPerCLick();
                }

                $.each(Game.upgrades, function(i, upgrade) { 
                    upgrade.check();
                });
                //update waterlevel
                Game._updateWaterLevel(0);
                Game._calculateDps();
            }
        },

        init: function() {
            var self = this;
            this.startCost = this.cost;
            if (this.type=="ocean"){
                this.button = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' >"+ this.filename+"</button>").css({'background-image':'url(images/oceanbg.png)'})
										.hover(function() {
                                            addMouseListener();
                                            var effectiveCost = self.cost;
                                            if(Game.prayerDiscountUpgradeActive==1){
                                                effectiveCost = effectiveCost - (effectiveCost/100*5);
                                            }
                                            Game.popup.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(\'images/oceanbg.png\');  "><table style="width:100%; height:100%;":><tr><td class="popupperc" style="font-size:2rem; font-weight:bold; text-align:center; color:#221947; font-family:sans-serif;">'+self.filename+'</td></tr></table></div></td><td><p class="popuptitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(effectiveCost))+' drops</p><p>'+self.description+'</p></td></tr></table>');
                                            Game.popup.show();
                                        }, function(){
                                            removeMouseListener();
                                            Game.popup.hide();
										}).on('click', function() {
											self.buy();
                                        });
                this.buttonBought = $("<button class='upgradeb' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' style='background-image:url(\'images/oceanbg.png\');'><div style='font-size:1em;  color:#221947;'>"+ this.filename+"</div></button>").css({'background-image':'url(images/oceanbg.png)'})
										.hover(function() {
                                            addMouseListener();
                                            
                                            Game.popupr.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(\'images/oceanbg.png\'); "><table style="width:100%; height:100%;":><tr><td class="popupperc" style="font-size:2rem; font-weight:bold; text-align:center; color:#221947;  font-family:sans-serif;">'+self.filename+'</td></tr></table></div></td><td><p class="popuptitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' drops</p><p>'+self.description+'</p></td></tr></table>');
                                            Game.popupr.show();
										}, function(){
											removeMouseListener();
                                            Game.popupr.hide();
										});
            }else{
                var pos = this.cx + "px " + this.cy + "px";	            // backgroundposition comes from object in list of upgrades
                var filen = 'url(images/' + this.filename + '.png)';    // beackground filename comes from object in list of upgrades

                this.button = $("<button class='upgrade' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' >&nbsp;</button>").css({'background-image':filen, 'background-position':pos })
                        .hover(function() {
                            addMouseListener();
                            var effectiveCost = self.cost;
                            if(Game.prayerDiscountUpgradeActive==1){
                                effectiveCost = effectiveCost - (effectiveCost/100*5);
                            }
                            Game.popup.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+' "></div></td><td><p class="popuptitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(effectiveCost))+' drops</p><p>'+self.description+'</p></td></tr></table>');		
                            Game.popup.show();
                        }, function() {
                            // on mouseout
                            removeMouseListener();
                            Game.popup.hide();
                        })
                        .on('click', function() {	
                            self.buy(); 
                        });
                    
                this.buttonBought = $("<button class='upgradeb' id='" + this.name + "' title='" + this.name + " \n " + Beautify(Math.floor(this.cost)) + "' >&nbsp;</button>").css({'background-image':filen, 'background-position':pos })
                        .hover(function() {
                            // show popup
                            addMouseListener();
                            Game.popupr.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+' "></div></td><td><p class="popuptitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.startCost))+' drops</p><p>'+self.description+'</p></td></tr></table>');		
                            Game.popupr.show();
                        }, function() {
                            // on mouseout
                            removeMouseListener();
                            Game.popupr.hide();
                        });
            }
            this.active=0;
            this.style=0;
            this.button.hide();
            this.buttonBought.hide();

            Game.boughtUpgradesDiv.append(this.buttonBought);
            //Game.upgradesDiv.append(this.button); Upgrades get appended in init after typeing by cost.
			
			this.check();
			
			return this;
        },
    }, options);
};

// List of upgrades

var _upgrades = [
    //upgrades that affect clicks on big drop and drops you get per click, these give a percentage of your dps as drops per click
    {id:1, type: "mouse", name: "Paper Mouse", filename: "upgrades", cx:0 , cy:0, cost: 50000, required: 1000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
    {id:2, type: "mouse", name: "Cotton Mouse", filename: "upgrades", cx:-60 , cy:0, cost: 5000000, required: 100000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:3, type: "mouse", name: "Leather Mouse", filename: "upgrades", cx:-120 , cy:0, cost: 500000000, required: 10000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:4, type: "mouse", name: "Wooden Mouse",  filename: "upgrades", cx:-180 , cy:0, cost: 50000000000, required: 1000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:5, type: "mouse", name: "Iron Mouse", filename: "upgrades", cx:-240 , cy:0, cost: 5000000000000, required: 100000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:6, type: "mouse", name: "Silver Mouse", filename: "upgrades", cx:-300 , cy:0, cost: 500000000000000, required: 10000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:7, type: "mouse", name: "Golden Mouse", filename: "upgrades", cx:-360 , cy:0, cost: 50000000000000000, required: 1000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:8, type: "mouse", name: "Diamond Mouse", filename: "upgrades", cx:-420 , cy:0, cost: 5000000000000000000, required: 100000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
	{id:9, type: "mouse", name: "Platinum Mouse", filename: "upgrades", cx:-480 , cy:0, cost: 500000000000000000000, required: 10000000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 1, other:0, description:"Clicking gains +1% of your drops per second."},
    
    //upgrades that affect clicks on big drop, multiply the number of drops per click
    {id:10, type: "hand", name: "Two Hands", filename: "upgrades", cx:0 , cy:-60, cost: 100, required: 1, effecton: "Helping hand", effect: 0, multiplier: 2, perc: 0,  other:0, description:"Each click and Helping Hand is twice as efficient."},
    {id:11, type: "hand", name: "Injury Prevention", filename: "upgrades", cx:-60 , cy:-60, cost: 500, required: 1, effecton: "Helping hand", effect: 0, multiplier: 2, perc: 0,  other:0, description:"Each click and Helping Hand is twice as efficient."},
	{id:12, type: "hand", name: "Clicking With All Fingers", filename: "upgrades", cx:-120 , cy:-60, cost: 10000, required: 10, effecton: "Helping hand", effect: 0, multiplier: 2, perc: 0,  other:0, description:"Each click and Helping Hand is twice as efficient."},
	{id:13, type: "hand", name: "A Lot Of Fingers", filename: "upgrades", cx:-180 , cy:-60, cost: 100000, required: 20, effecton: "Helping hand", effect: 0, multiplier: 0.1, perc: 0,  other: "all", description:"Each click and Helping Hand gain 0.1 drops per click or second for each building owned."},
	{id:14, type: "hand", name: "Even More Fingers", filename: "upgrades", cx:-240 , cy:-60, cost: 10000000, required: 40, effecton: "Helping hand", effect: 0, multiplier: 0.5, perc: 0,  other: "all", description:"Each click and Helping Hand gain 0.5 drops per click or second for each building owned."},
	{id:15, type: "hand", name: "Billions Of Fingers", filename: "upgrades", cx:-300 , cy:-60, cost: 100000000, required: 80, effecton: "Helping hand", effect: 0, multiplier: 5, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5 drops per click or second for each building owned."},
	{id:16, type: "hand", name: "Trillions Of Fingers", filename: "upgrades", cx:-360 , cy:-60, cost: 1000000000, required: 120, effecton: "Helping hand", effect: 0, multiplier: 50, perc: 0,  other: "all", description:"Each click and Helping Hand gain 50 drops per click or second for each building owned."},
	{id:17, type: "hand", name: "Quadrillions Of Fingers", filename: "upgrades", cx:-420 , cy:-60, cost: 10000000000, required: 160, effecton: "Helping hand", effect: 0, multiplier: 500, perc: 0,  other: "all", description:"Each click and Helping Hand gain 500 drops per click or second for each building owned."},
	{id:18, type: "hand", name: "Where Do These Fingers Come From?", filename: "upgrades", cx:-480 , cy:-60, cost: 10000000000000, required: 200, effecton: "Helping hand", effect: 0, multiplier: 5000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000 drops per click or second for each building owned."},
	{id:19, type: "hand", name: "The Fingers Just Keep Coming!", filename: "upgrades", cx:-480 , cy:-120, cost: 100000000000000, required: 240, effecton: "Helping hand", effect: 0, multiplier: 50000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 50,000 drops per click or second for each building owned."},
	{id:20, type: "hand", name: "These Fingers Are Becoming A Plague!", filename: "upgrades", cx:-480 , cy:-180, cost: 1000000000000000, required: 280, effecton: "Helping hand", effect: 0, multiplier: 500000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 500,000 drops per click or second for each building owned."},
    {id:21, type: "hand", name: "AARGH I'm Drowning In Fingers!", filename: "upgrades", cx:-480 , cy:-240, cost: 10000000000000000, required: 320, effecton: "Helping hand", effect: 0, multiplier: 5000000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000,000 drops per click or second for each building owned."},
    
    //pipette
    {id:22, type: "pipette", name: "Bigger Pipette", filename: "upgrades", cx:0 , cy:-120, cost:1000, required: 1, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:23, type: "pipette", name: "Longer Pipette", filename: "upgrades", cx:-60 , cy:-120, cost:5000, required: 5, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:24, type: "pipette", name: "Faster Pipette", filename: "upgrades", cx:-120 , cy:-120, cost:50000, required: 25, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:25, type: "pipette", name: "Better Pipette", filename: "upgrades", cx:-180 , cy:-120, cost:5000000, required: 50, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:26, type: "pipette", name: "Stronger Pipette", filename: "upgrades", cx:-240 , cy:-120, cost:500000000, required: 100, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:27, type: "pipette", name: "Larger Pipette", filename: "upgrades", cx:-300 , cy:-120, cost:50000000000, required: 150, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:28, type: "pipette", name: "Giant Pipette", filename: "upgrades", cx:-360 , cy:-120, cost:50000000000000, required: 200, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
    {id:29, type: "pipette", name: "Atomic Pipette", filename: "upgrades", cx:-420 , cy:-120, cost:50000000000000000, required: 250, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
    
    //air dryer
    {id:30, type: "air_dryer", name: "Bigger Air Dryer", filename: "upgrades", cx:0 , cy:-180, cost:11000, required: 1, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:31, type: "air_dryer", name: "Longer Air Dryer", filename: "upgrades", cx:-60 , cy:-180, cost:55000, required: 5, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:32, type: "air_dryer", name: "Faster Air Dryer", filename: "upgrades", cx:-120 , cy:-180, cost:550000, required: 25, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:33, type: "air_dryer", name: "Better Air Dryer", filename: "upgrades", cx:-180 , cy:-180, cost:55000000, required: 50, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:34, type: "air_dryer", name: "Stronger Air Dryer", filename: "upgrades", cx:-240 , cy:-180, cost:5500000000, required: 100, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:35, type: "air_dryer", name: "Larger Air Dryer", filename: "upgrades", cx:-300 , cy:-180, cost:550000000000, required: 150, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:36, type: "air_dryer", name: "Giant Air Dryer", filename: "upgrades", cx:-360 , cy:-180, cost:550000000000000, required: 200, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:37, type: "air_dryer", name: "Atomic Air Dryer", filename: "upgrades", cx:-420 , cy:-180, cost:550000000000000000, required: 250, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},

    //bucket
    {id:38, type: "bucket", name: "Bigger Bucket", filename: "upgrades", cx:0 , cy:-240, cost:120000, required: 1, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:39, type: "bucket", name: "Longer Bucket", filename: "upgrades", cx:-60 , cy:-240, cost:600000, required: 5, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:40, type: "bucket", name: "Faster Bucket", filename: "upgrades", cx:-120 , cy:-240, cost:6000000, required: 25, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:41, type: "bucket", name: "Better Bucket", filename: "upgrades", cx:-180 , cy:-240, cost:600000000, required: 50, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:42, type: "bucket", name: "Stronger Bucket", filename: "upgrades", cx:-240 , cy:-240, cost:60000000000, required: 100, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:43, type: "bucket", name: "Larger Bucket", filename: "upgrades", cx:-300 , cy:-240, cost:6000000000000, required: 150, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:44, type: "bucket", name: "Giant Bucket", filename: "upgrades", cx:-360 , cy:-240, cost:6000000000000000, required: 200, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:45, type: "bucket", name: "Atomic Bucket", filename: "upgrades", cx:-420 , cy:-240, cost:6000000000000000000, required: 250, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
    
    //raindance
    {id:46, type: "raindance", name: "Bigger Raindance", filename: "upgrades", cx:0 , cy:-300, cost:1300000, required: 1, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:47, type: "raindance", name: "Longer Raindance", filename: "upgrades", cx:-60 , cy:-300, cost:6500000, required: 5, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:48, type: "raindance", name: "Faster Raindance", filename: "upgrades", cx:-120 , cy:-300, cost:65000000, required: 25, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:49, type: "raindance", name: "Better Raindance", filename: "upgrades", cx:-180 , cy:-300, cost:6500000000, required: 50, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:50, type: "raindance", name: "Stronger Raindance", filename: "upgrades", cx:-240 , cy:-300, cost:650000000000, required: 100, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:51, type: "raindance", name: "Larger Raindance", filename: "upgrades", cx:-300 , cy:-300, cost:65000000000000, required: 150, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:52, type: "raindance", name: "Giant Raindance", filename: "upgrades", cx:-360 , cy:-300, cost:65000000000000000, required: 200, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:53, type: "raindance", name: "Atomic Raindance", filename: "upgrades", cx:-420 , cy:-300, cost:65000000000000000000, required: 250, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
    
    //faucet
    {id:54, type: "faucet", name: "Bigger Faucet", filename: "upgrades", cx:0 , cy:-360, cost:14000000, required: 1, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:55, type: "faucet", name: "Longer Faucet", filename: "upgrades", cx:-60 , cy:-360, cost:70000000, required: 5, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:56, type: "faucet", name: "Faster Faucet", filename: "upgrades", cx:-120 , cy:-360, cost:700000000, required: 25, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:57, type: "faucet", name: "Better Faucet", filename: "upgrades", cx:-180 , cy:-360, cost:70000000000, required: 50, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:58, type: "faucet", name: "Stronger Faucet", filename: "upgrades", cx:-240 , cy:-360, cost:7000000000000, required: 100, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:59, type: "faucet", name: "Larger Faucet", filename: "upgrades", cx:-300 , cy:-360, cost:700000000000000, required: 150, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:60, type: "faucet", name: "Giant Faucet", filename: "upgrades", cx:-360 , cy:-360, cost:700000000000000000, required: 200, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:61, type: "faucet", name: "Atomic Faucet", filename: "upgrades", cx:-420 , cy:-360, cost:700000000000000000000, required: 250, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
    
    //garden hose
    {id:62, type: "garden_hose", name: "Bigger Garden Hose", filename: "upgrades", cx:0 , cy:-420, cost:200000000, required: 1, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:63, type: "garden_hose", name: "Longer Garden Hose", filename: "upgrades", cx:-60 , cy:-420, cost:1000000000, required: 5, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:64, type: "garden_hose", name: "Faster Garden Hose", filename: "upgrades", cx:-120 , cy:-420, cost:10000000000, required: 25, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:65, type: "garden_hose", name: "Better Garden Hose", filename: "upgrades", cx:-180 , cy:-420, cost:1000000000000, required: 50, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:66, type: "garden_hose", name: "Stronger Garden Hose", filename: "upgrades", cx:-240 , cy:-420, cost:100000000000000, required: 100, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:67, type: "garden_hose", name: "Larger Garden Hose", filename: "upgrades", cx:-300 , cy:-420, cost:10000000000000000, required: 150, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:68, type: "garden_hose", name: "Giant Garden Hose", filename: "upgrades", cx:-360 , cy:-420, cost:10000000000000000000, required: 200, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:69, type: "garden_hose", name: "Atomic Garden Hose", filename: "upgrades", cx:-420 , cy:-420, cost:10000000000000000000000, required: 250, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
    
    //truck
    {id:70, type: "truck", name: "Bigger Truck", filename: "upgrades", cx:0 , cy:-480, cost:3300000000, required: 1, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:71, type: "truck", name: "Longer Truck", filename: "upgrades", cx:-60 , cy:-480, cost:16500000000, required: 5, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:72, type: "truck", name: "Faster Truck", filename: "upgrades", cx:-120 , cy:-480, cost:165000000000, required: 25, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:73, type: "truck", name: "Better Truck", filename: "upgrades", cx:-180 , cy:-480, cost:16500000000000, required: 50, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:74, type: "truck", name: "Stronger Truck", filename: "upgrades", cx:-240 , cy:-480, cost:1650000000000000, required: 100, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:75, type: "truck", name: "Larger Truck", filename: "upgrades", cx:-300 , cy:-480, cost:165000000000000000, required: 150, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:76, type: "truck", name: "Giant Truck", filename: "upgrades", cx:-360 , cy:-480, cost:165000000000000000000, required: 200, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:77, type: "truck", name: "Atomic Truck", filename: "upgrades", cx:-420 , cy:-480, cost:165000000000000000000000, required: 250, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
    
    //fire hose
    {id:78, type: "fire_hose", name: "Bigger Fire Hose", filename: "upgrades", cx:0 , cy:-540, cost:51000000000, required: 1, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:79, type: "fire_hose", name: "Longer Fire Hose", filename: "upgrades", cx:-60 , cy:-540, cost:255000000000, required: 5, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:80, type: "fire_hose", name: "Faster Fire Hose", filename: "upgrades", cx:-120 , cy:-540, cost:2550000000000, required: 25, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:81, type: "fire_hose", name: "Better Fire Hose", filename: "upgrades", cx:-180 , cy:-540, cost:255000000000000, required: 50, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:82, type: "fire_hose", name: "Stronger Fire Hose", filename: "upgrades", cx:-240 , cy:-540, cost:25500000000000000, required: 100, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:83, type: "fire_hose", name: "Larger Fire Hose", filename: "upgrades", cx:-300 , cy:-540, cost:2550000000000000000, required: 150, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:84, type: "fire_hose", name: "Giant Fire Hose", filename: "upgrades", cx:-360 , cy:-540, cost:2550000000000000000000, required: 200, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:85, type: "fire_hose", name: "Atomic Fire Hose", filename: "upgrades", cx:-420 , cy:-540, cost:2550000000000000000000000, required: 250, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
    
    //Ice mine
    {id:86, type: "ice_mine", name: "Bigger Mine", filename: "upgrades", cx:0 , cy:-600, cost:750000000000, required: 1, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:87, type: "ice_mine", name: "Longer Mine", filename: "upgrades", cx:-60 , cy:-600, cost:3750000000000, required: 5, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:88, type: "ice_mine", name: "Faster Mine", filename: "upgrades", cx:-120 , cy:-600, cost:37500000000000, required: 25, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:89, type: "ice_mine", name: "Better Mine", filename: "upgrades", cx:-180 , cy:-600, cost:3750000000000000, required: 50, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:90, type: "ice_mine", name: "Stronger Mine", filename: "upgrades", cx:-240 , cy:-600, cost:375000000000000000, required: 100, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:91, type: "ice_mine", name: "Larger Mine", filename: "upgrades", cx:-300 , cy:-600, cost:37500000000000000000, required: 150, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:92, type: "ice_mine", name: "Giant Mine", filename: "upgrades", cx:-360 , cy:-600, cost:37500000000000000000000, required: 200, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:93, type: "ice_mine", name: "Atomic Mine", filename: "upgrades", cx:-420 , cy:-600, cost:37500000000000000000000000, required: 250, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
    
    //spaceship
    {id:94, type: "spaceship", name: "Bigger Spaceship", filename: "upgrades", cx:0 , cy:-660, cost:10000000000000, required: 1, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:95, type: "spaceship", name: "Longer Spaceship", filename: "upgrades", cx:-60 , cy:-660, cost:50000000000000, required: 5, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:96, type: "spaceship", name: "Faster Spaceship", filename: "upgrades", cx:-120 , cy:-660, cost:500000000000000, required: 25, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:97, type: "spaceship", name: "Better Spaceship", filename: "upgrades", cx:-180 , cy:-660, cost:50000000000000000, required: 50, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:98, type: "spaceship", name: "Stronger Spaceship", filename: "upgrades", cx:-240 , cy:-660, cost:5000000000000000000, required: 100, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:99, type: "spaceship", name: "Larger Spaceship", filename: "upgrades", cx:-300 , cy:-660, cost:500000000000000000000, required: 150, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:100, type: "spaceship", name: "Giant Spaceship", filename: "upgrades", cx:-360 , cy:-660, cost:500000000000000000000000, required: 200, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:101, type: "spaceship", name: "Atomic Spaceship", filename: "upgrades", cx:-420 , cy:-660, cost:500000000000000000000000000, required: 250, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
    
    //wormhole
    {id:102, type: "wormhole", name: "Bigger Wormhole", filename: "upgrades", cx:0 , cy:-720, cost:140000000000000, required: 1, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:103, type: "wormhole", name: "Longer Wormhole", filename: "upgrades", cx:-60 , cy:-720, cost:700000000000000, required: 5, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:104, type: "wormhole", name: "Faster Wormhole", filename: "upgrades", cx:-120 , cy:-720, cost:7000000000000000, required: 25, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:105, type: "wormhole", name: "Better Wormhole", filename: "upgrades", cx:-180 , cy:-720, cost:700000000000000000, required: 50, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:106, type: "wormhole", name: "Stronger Wormhole", filename: "upgrades", cx:-240 , cy:-720, cost:70000000000000000000, required: 100, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:107, type: "wormhole", name: "Larger Wormhole", filename: "upgrades", cx:-300 , cy:-720, cost:7000000000000000000000, required: 150, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:108, type: "wormhole", name: "Giant Wormhole", filename: "upgrades", cx:-360 , cy:-720, cost:7000000000000000000000000, required: 200, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:109, type: "wormhole", name: "Atomic Wormhole", filename: "upgrades", cx:-420 , cy:-720, cost:7000000000000000000000000000, required: 250, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
    
    //river
    {id:110, type: "river", name: "Bigger River", filename: "upgrades", cx:0 , cy:-780, cost:1700000000000000, required: 1, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:111, type: "river", name: "Longer River", filename: "upgrades", cx:-60 , cy:-780, cost:8500000000000000, required: 5, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:112, type: "river", name: "Faster River", filename: "upgrades", cx:-120 , cy:-780, cost:85000000000000000, required: 25, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:113, type: "river", name: "Better River", filename: "upgrades", cx:-180 , cy:-780, cost:8500000000000000000, required: 50, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:114, type: "river", name: "Stronger River", filename: "upgrades", cx:-240 , cy:-780, cost:850000000000000000000, required: 100, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:115, type: "river", name: "Larger River", filename: "upgrades", cx:-300 , cy:-780, cost:85000000000000000000000, required: 150, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:116, type: "river", name: "Giant River", filename: "upgrades", cx:-360 , cy:-780, cost:85000000000000000000000000, required: 200, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:117, type: "river", name: "Atomic River", filename: "upgrades", cx:-420 , cy:-780, cost:85000000000000000000000000000, required: 250, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
    
    //collider
    {id:118, type: "collider", name: "Bigger Collider", filename: "upgrades", cx:0 , cy:-840, cost:21000000000000000, required: 1, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:119, type: "collider", name: "Longer Collider", filename: "upgrades", cx:-60 , cy:-840, cost:105000000000000000, required: 5, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:120, type: "collider", name: "Faster Collider", filename: "upgrades", cx:-120 , cy:-840, cost:1050000000000000000, required: 25, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:121, type: "collider", name: "Better Collider", filename: "upgrades", cx:-180 , cy:-840, cost:105000000000000000000, required: 50, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:122, type: "collider", name: "Stronger Collider", filename: "upgrades", cx:-240 , cy:-840, cost:10500000000000000000000, required: 100, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:123, type: "collider", name: "Larger Collider", filename: "upgrades", cx:-300 , cy:-840, cost:1050000000000000000000000, required: 150, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:124, type: "collider", name: "Giant Collider", filename: "upgrades", cx:-360 , cy:-840, cost:1050000000000000000000000000, required: 200, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:125, type: "collider", name: "Atomic Collider", filename: "upgrades", cx:-420 , cy:-840, cost:1050000000000000000000000000000, required: 250, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},

    //life
    {id:126, type: "life", name: "First Life in ocean!", filename: "upgrades", cx:0 , cy:-900, cost: 1000000, required: 50000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
    {id:127, type: "life", name: "First Cell", filename: "upgrades", cx:-60 , cy:-900, cost: 5000000, required: 250000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:128, type: "life", name: "Bacteria", filename: "upgrades", cx:-120 , cy:-900, cost: 10000000, required: 500000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:129, type: "life", name: "Archaea", filename: "upgrades", cx:-180 , cy:-900, cost: 50000000, required: 2500000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:130, type: "life", name: "Protozoa", filename: "upgrades", cx:-240 , cy:-900, cost: 100000000, required: 5000000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:131, type: "life", name: "Amoebe", filename: "upgrades", cx:-300 , cy:-900, cost: 500000000, required: 25000000, effecton: 0, effect: 0, multiplier: 0, perc: 1,  other: 0, description:"Extra drop production: +1%"},
	{id:132, type: "life", name: "Algae", filename: "upgrades", cx:-360 , cy:-900, cost: 1000000000, required: 50000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:133, type: "life", name: "Fungi", filename: "upgrades", cx:-420 , cy:-900, cost: 5000000000, required: 250000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:134, type: "life", name: "Flagellated Cells", filename: "upgrades", cx:-480 , cy:-900, cost: 10000000000, required: 500000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:135, type: "life", name: "First Multicellular Life!", filename: "upgrades", cx:0 , cy:-960, cost: 50000000000, required: 2500000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},	
	{id:136, type: "life", name: "Plankton", filename: "upgrades", cx:-60 , cy:-960, cost: 100000000000, required: 5000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:137, type: "life", name: "Black Sea Rod Coral", filename: "upgrades", cx:-120 , cy:-960, cost: 100000000000, required: 5000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:138, type: "life", name: "Sea Plume Coral", filename: "upgrades", cx:-180 , cy:-960, cost: 500000000000, required: 25000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:139, type: "life", name: "Sea Fan Coral", filename: "upgrades", cx:-240 , cy:-960, cost: 1000000000000, required: 50000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:140, type: "life", name: "Ivory Bush Coral", filename: "upgrades", cx:-300 , cy:-960, cost: 5000000000000, required: 250000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:141, type: "life", name: "Grooved Brain Coral", filename: "upgrades", cx:-360 , cy:-960, cost: 10000000000000, required: 500000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:142, type: "life", name: "Pillar Coral", filename: "upgrades", cx:-420 , cy:-960, cost: 50000000000000, required: 2500000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:143, type: "life", name: "Thick Finger Coral", filename: "upgrades", cx:-480 , cy:-960, cost: 500000000000000, required: 25000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:144, type: "life", name: "Wire Coral", filename: "upgrades", cx:0 , cy:-1020, cost: 500000000000000, required: 25000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:145, type: "life", name: "Blade Fire Coral", filename: "upgrades", cx:-60 , cy:-1020, cost: 1000000000000000, required: 50000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:146, type: "life", name: "Boulder Star Coral", filename: "upgrades", cx:-120 , cy:-1020, cost: 1000000000000000, required: 50000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:147, type: "life", name: "Jewel Anemone", filename: "upgrades", cx:-180 , cy:-1020, cost: 10000000000000000, required: 500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:148, type: "life", name: "Condy Anemone", filename: "upgrades", cx:-240 , cy:-1020, cost: 10000000000000000, required: 500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:149, type: "life", name: "Sand-rose Anemone", filename: "upgrades", cx:-300 , cy:-1020, cost: 50000000000000000, required: 2500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:150, type: "life", name: "White Anemone", filename: "upgrades", cx:-360 , cy:-1020, cost: 50000000000000000, required: 2500000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:151, type: "life", name: "Striped Colonial Anemone", filename: "upgrades", cx:-420 , cy:-1020, cost: 100000000000000000, required: 5000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:152, type: "life", name: "Christmas Tree Worm", filename: "upgrades", cx:-480 , cy:-1020, cost: 500000000000000000, required: 25000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:153, type: "life", name: "Orange Fire Worm", filename: "upgrades", cx:0 , cy:-1080, cost: 1000000000000000000, required: 50000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:154, type: "life", name: "Peanut Worm", filename: "upgrades", cx:-60 , cy:-1080, cost: 5000000000000000000, required: 250000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:155, type: "life", name: "Flat Worm", filename: "upgrades", cx:-120 , cy:-1080, cost: 10000000000000000000, required: 500000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:156, type: "life", name: "Spaghetti Worm", filename: "upgrades", cx:-180 , cy:-1080, cost: 50000000000000000000, required: 2500000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:157, type: "life", name: "Many Ribbed Jellyfish", filename: "upgrades", cx:-240 , cy:-1080, cost: 100000000000000000000, required: 5000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:158, type: "life", name: "Moon Jellyfish", filename: "upgrades", cx:-300 , cy:-1080, cost: 500000000000000000000, required: 25000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:159, type: "life", name: "Compass Jellyfish", filename: "upgrades", cx:-360 , cy:-1080, cost: 1000000000000000000000, required: 50000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:160, type: "life", name: "Mauve Stinger Jellyfish", filename: "upgrades", cx:-420 , cy:-1080, cost: 5000000000000000000000, required: 250000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:161, type: "life", name: "Barrel Jellyfish", filename: "upgrades", cx:-480 , cy:-1080, cost: 10000000000000000000000, required: 500000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:162, type: "life", name: "Common Starfish", filename: "upgrades", cx:0 , cy:-1140, cost: 50000000000000000000000, required: 2500000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:163, type: "life", name: "Red Knobbed Starfish", filename: "upgrades", cx:-60 , cy:-1140, cost: 100000000000000000000000, required: 5000000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:164, type: "life", name: "Magnificent Starfish", filename: "upgrades", cx:-120 , cy:-1140, cost: 500000000000000000000000, required: 25000000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:165, type: "life", name: "Royal Starfish", filename: "upgrades", cx:-180 , cy:-1140, cost: 1000000000000000000000000, required: 50000000000000000000000, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},

    //cloud upgrades
    {id:166, type:"cloud", name:"Rainy day", filename: "upgrades", cx:-480 , cy:-300, cost: 777777777, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 1, description:"Clouds show up twice as often and stay twice as long."},
	{id:167, type:"cloud", name:"A lot of rain expected", filename: "upgrades", cx:-480 , cy:-300, cost: 77777777777, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 2, description:"Clouds show up twice as often and stay twice as long."},
    {id:168, type:"cloud", name:"Worst weather ever", filename: "upgrades", cx:-480 , cy:-300, cost: 77777777777777, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 3, description:"Cloud effects last twice as long."},
    
    // knowhow effectiveness upgrades
    {id:169, type:"knowhow", name:"Use Your Know-how", filename: "upgrades", cx:-480 , cy:-360, cost: 1000, required: 0, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 40% in total"},
	{id:170, type:"knowhow", name:"Get better with know-how", filename: "upgrades", cx:-480 , cy:-420, cost: 100000, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 60% in total"},
	{id:171, type:"knowhow", name:"Expert at using know-how", filename: "upgrades", cx:-480 , cy:-480, cost: 10000000, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 80% in total"},
    {id:172, type:"knowhow", name:"Use your know-how perfectly", filename: "upgrades", cx:-480 , cy:-540, cost: 1000000000, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 0, other: 0, description:"Unlocks 20% extra of the potential of your know-how: 100% in total"},
    
    //ocean upgrades
    {id:173, type: "ocean", name: "1st milestone reached", filename: "1", cost: 100000, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:174, type: "ocean", name: "2nd milestone reached", filename: "2", cost: 300000, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:175, type: "ocean", name: "3th milestone reached", filename: "3", cost: 500000, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:176, type: "ocean", name: "4th milestone reached", filename: "4", cost: 700000, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:177, type: "ocean", name: "5th milestone reached", filename: "5", cost: 900000, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:178, type: "ocean", name: "6th milestone reached", filename: "6", cost: 1000000, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:179, type: "ocean", name: "7th milestone reached", filename: "7", cost: 3000000, required: 7, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:180, type: "ocean", name: "8th milestone reached", filename: "8", cost: 5000000, required: 8, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:181, type: "ocean", name: "9th milestone reached", filename: "9", cost: 7000000, required: 9, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:182, type: "ocean", name: "10th milestone reached", filename: "10", cost: 9000000, required: 10, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:183, type: "ocean", name: "11th milestone reached", filename: "11", cost: 10000000, required: 11, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:184, type: "ocean", name: "12th milestone reached", filename: "12", cost: 30000000, required: 12, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:185, type: "ocean", name: "13th milestone reached", filename: "13", cost: 50000000, required: 13, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:186, type: "ocean", name: "14th milestone reached", filename: "14", cost: 70000000, required: 14, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:187, type: "ocean", name: "15th milestone reached", filename: "15", cost: 90000000, required: 15, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:188, type: "ocean", name: "16th milestone reached", filename: "16", cost: 100000000, required: 16, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:189, type: "ocean", name: "17th milestone reached", filename: "17", cost: 300000000, required: 17, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:190, type: "ocean", name: "18th milestone reached", filename: "18", cost: 500000000, required: 18, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:191, type: "ocean", name: "19th milestone reached", filename: "19", cost: 700000000, required: 19, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:192, type: "ocean", name: "20th milestone reached", filename: "20", cost: 900000000, required: 20, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:193, type: "ocean", name: "21st milestone reached", filename: "21", cost: 1000000000, required: 21, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:194, type: "ocean", name: "22nd milestone reached", filename: "22", cost: 3000000000, required: 22, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:195, type: "ocean", name: "23th milestone reached", filename: "23", cost: 5000000000, required: 23, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:196, type: "ocean", name: "24th milestone reached", filename: "24", cost: 7000000000, required: 24, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:197, type: "ocean", name: "25th milestone reached", filename: "25", cost: 9000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:198, type: "ocean", name: "26th milestone reached", filename: "26", cost: 10000000000, required: 26, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:199, type: "ocean", name: "27th milestone reached", filename: "27", cost: 30000000000, required: 27, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
//forgot an id -> extra upgrade 
    {id:200, type: "ocean", name: "One extra", filename: "??", cost: 40000000000, required: 27, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:201, type: "ocean", name: "28th milestone reached", filename: "28", cost: 50000000000, required: 28, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:202, type: "ocean", name: "29th milestone reached", filename: "29", cost: 70000000000, required: 29, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:203, type: "ocean", name: "30th milestone reached", filename: "30", cost: 90000000000, required: 30, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:204, type: "ocean", name: "31st milestone reached", filename: "31", cost: 100000000000, required: 31, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:205, type: "ocean", name: "32nd milestone reached", filename: "32", cost: 300000000000, required: 32, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:206, type: "ocean", name: "33th milestone reached", filename: "33", cost: 500000000000, required: 33, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:207, type: "ocean", name: "34th milestone reached", filename: "34", cost: 700000000000, required: 34, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:208, type: "ocean", name: "35th milestone reached", filename: "35", cost: 900000000000, required: 35, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:209, type: "ocean", name: "36th milestone reached", filename: "36", cost: 1000000000000, required: 36, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:210, type: "ocean", name: "37th milestone reached", filename: "37", cost: 3000000000000, required: 37, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:211, type: "ocean", name: "38th milestone reached", filename: "38", cost: 5000000000000, required: 38, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:212, type: "ocean", name: "39th milestone reached", filename: "39", cost: 7000000000000, required: 39, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:213, type: "ocean", name: "40th milestone reached", filename: "40", cost: 9000000000000, required: 40, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:214, type: "ocean", name: "41st milestone reached", filename: "41", cost: 10000000000000, required: 41, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:215, type: "ocean", name: "42nd milestone reached", filename: "42", cost: 30000000000000, required: 42, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:216, type: "ocean", name: "43th milestone reached", filename: "43", cost: 50000000000000, required: 43, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:217, type: "ocean", name: "44th milestone reached", filename: "44", cost: 70000000000000, required: 44, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:218, type: "ocean", name: "45th milestone reached", filename: "45", cost: 90000000000000, required: 45, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:219, type: "ocean", name: "46th milestone reached", filename: "46", cost: 100000000000000, required: 46, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:220, type: "ocean", name: "47th milestone reached", filename: "47", cost: 300000000000000, required: 47, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:221, type: "ocean", name: "48th milestone reached", filename: "48", cost: 500000000000000, required: 48, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:222, type: "ocean", name: "49th milestone reached", filename: "49", cost: 700000000000000, required: 49, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:223, type: "ocean", name: "50th milestone reached", filename: "50", cost: 900000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:224, type: "ocean", name: "51st milestone reached", filename: "51", cost: 1000000000000000, required: 51, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:225, type: "ocean", name: "52nd milestone reached", filename: "52", cost: 3000000000000000, required: 52, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:226, type: "ocean", name: "53th milestone reached", filename: "53", cost: 5000000000000000, required: 53, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:227, type: "ocean", name: "54th milestone reached", filename: "54", cost: 7000000000000000, required: 54, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:228, type: "ocean", name: "55th milestone reached", filename: "55", cost: 9000000000000000, required: 55, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:229, type: "ocean", name: "56th milestone reached", filename: "56", cost: 10000000000000000, required: 56, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:230, type: "ocean", name: "57th milestone reached", filename: "57", cost: 30000000000000000, required: 57, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:231, type: "ocean", name: "58th milestone reached", filename: "58", cost: 50000000000000000, required: 58, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:232, type: "ocean", name: "59th milestone reached", filename: "59", cost: 70000000000000000, required: 59, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:233, type: "ocean", name: "60th milestone reached", filename: "60", cost: 90000000000000000, required: 60, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:234, type: "ocean", name: "61st milestone reached", filename: "61", cost: 100000000000000000, required: 61, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:235, type: "ocean", name: "62nd milestone reached", filename: "62", cost: 300000000000000000, required: 62, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:236, type: "ocean", name: "63th milestone reached", filename: "63", cost: 500000000000000000, required: 63, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:237, type: "ocean", name: "64th milestone reached", filename: "64", cost: 700000000000000000, required: 64, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:238, type: "ocean", name: "65th milestone reached", filename: "65", cost: 900000000000000000, required: 65, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:239, type: "ocean", name: "66th milestone reached", filename: "66", cost: 1000000000000000000, required: 66, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:240, type: "ocean", name: "67th milestone reached", filename: "67", cost: 3000000000000000000, required: 67, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:241, type: "ocean", name: "68th milestone reached", filename: "68", cost: 5000000000000000000, required: 68, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:242, type: "ocean", name: "69th milestone reached", filename: "69", cost: 7000000000000000000, required: 69, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:243, type: "ocean", name: "70th milestone reached", filename: "70", cost: 9000000000000000000, required: 70, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:244, type: "ocean", name: "71th milestone reached", filename: "71", cost: 10000000000000000000, required: 71, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:245, type: "ocean", name: "72th milestone reached", filename: "72", cost: 30000000000000000000, required: 72, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:246, type: "ocean", name: "73th milestone reached", filename: "73", cost: 50000000000000000000, required: 73, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:247, type: "ocean", name: "74th milestone reached", filename: "74", cost: 70000000000000000000, required: 74, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:248, type: "ocean", name: "75th milestone reached", filename: "75", cost: 90000000000000000000, required: 75, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:249, type: "ocean", name: "76th milestone reached", filename: "76", cost: 100000000000000000000, required: 76, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:250, type: "ocean", name: "77th milestone reached", filename: "77", cost: 300000000000000000000, required: 77, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:251, type: "ocean", name: "78th milestone reached", filename: "78", cost: 500000000000000000000, required: 78, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:252, type: "ocean", name: "79th milestone reached", filename: "79", cost: 700000000000000000000, required: 79, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:253, type: "ocean", name: "80th milestone reached", filename: "80", cost: 900000000000000000000, required: 80, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:254, type: "ocean", name: "81st milestone reached", filename: "81", cost: 1000000000000000000000, required: 81, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:255, type: "ocean", name: "82nd milestone reached", filename: "82", cost: 3000000000000000000000, required: 82, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:256, type: "ocean", name: "83th milestone reached", filename: "83", cost: 5000000000000000000000, required: 83, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:257, type: "ocean", name: "84th milestone reached", filename: "84", cost: 7000000000000000000000, required: 84, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:258, type: "ocean", name: "85th milestone reached", filename: "85", cost: 9000000000000000000000, required: 85, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:259, type: "ocean", name: "86th milestone reached", filename: "86", cost: 1000000000000000000000, required: 86, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:260, type: "ocean", name: "87th milestone reached", filename: "87", cost: 3000000000000000000000, required: 87, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:261, type: "ocean", name: "88th milestone reached", filename: "88", cost: 5000000000000000000000, required: 88, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:262, type: "ocean", name: "89th milestone reached", filename: "89", cost: 7000000000000000000000, required: 89, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:263, type: "ocean", name: "90th milestone reached", filename: "90", cost: 9000000000000000000000, required: 90, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:264, type: "ocean", name: "91st milestone reached", filename: "91", cost: 1000000000000000000000, required: 91, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:265, type: "ocean", name: "92nd milestone reached", filename: "92", cost: 1000000000000000000000, required: 92, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:266, type: "ocean", name: "93th milestone reached", filename: "93", cost: 1000000000000000000000, required: 93, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:267, type: "ocean", name: "94th milestone reached", filename: "94", cost: 1000000000000000000000, required: 94, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:268, type: "ocean", name: "95th milestone reached", filename: "95", cost: 1000000000000000000000, required: 95, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:269, type: "ocean", name: "96th milestone reached", filename: "96", cost: 1000000000000000000000, required: 96, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:270, type: "ocean", name: "97th milestone reached", filename: "97", cost: 1000000000000000000000, required: 97, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:271, type: "ocean", name: "98th milestone reached", filename: "98", cost: 1000000000000000000000, required: 98, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
	{id:272, type: "ocean", name: "99th milestone reached", filename: "99", cost: 1000000000000000000000, required: 99, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: 2%"},
    
    //alien technology pipettes
    {id:273, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for each pipette you have, each air dryer gains 1% extra of its drops per second.", building: 3, pipnum: 1, pip:1},
	{id:274, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 2 pipettes you have, each bucket gains 1% extra of its drops per second.", building: 4, pipnum: 2, pip:1},
	{id:275, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 3 pipettes you have, each raindance gains 1% extra of its drops per second.", building: 5, pipnum: 3, pip:1},
	{id:276, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 4 pipettes you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 4, pip:1},
	{id:277, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 5 pipettes you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 5, pip:1},
	{id:278, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 6 pipettes you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 6, pip:1},
	{id:279, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 7 pipettes you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 7, pip:1},
	{id:280, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 8 pipettes you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 8, pip:1},
	{id:281, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 9 pipettes you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 9, pip:1},
	{id:282, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 60000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 10 pipettes you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 10, pip:1},
	{id:283, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 600000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 11 pipettes you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 11, pip:1},
	{id:284, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-480 , cy:-600, cost: 6000000000000000, required: 20, effecton: "Pipette", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Pipettes are twice as efficient and for every 12 pipettes you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 12, pip:1},

    //alien upgrades
    {id:285, type: "contact", name: "First contact", filename: "upgrades", cx:-480 , cy:-660, cost: 60000000000000000, required: 10, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Amazing! We got in touch with the aliens!<br/>And because they are close the alien technology works better.<br/>Pipettes are twice as efficient."},
	{id:286, type: "contactb", name: "Friendly aliens", filename: "upgrades", cx:-480 , cy:-660, cost: 60000000000, required: 0, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"The aliens seem friendly! The alien technology works better.<br/>Pipettes are twice as efficient."},
	{id:287, type: "contactb", name: "Reluctant aliens", filename: "upgrades", cx:-480 , cy:-660, cost: 600000000000, required: 0, effecton: 0, effect: 0, multiplier: 1, perc: 0,  other: 0, description:"The aliens don't think we're ready for their technology."},
	
	{id:288, type: "aliens", name: "Aliens are mad", filename: "upgrades", cx:-480 , cy:-660, cost: 600000000000, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"Aliens found out we already use their technology and want water back."},

    //Crazy scientists Mnt Eew upgrades 
    {id:289, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000, required: 15, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:290, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000, required: 30, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:291, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:292, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000, required: 70, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:293, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000000, required: 90, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:294, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000000000, required: 110, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:295, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 1000000000000000000000000, required: 130, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:296, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 10000000000000000000000000, required: 150, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:297, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 100000000000000000000000000, required: 170, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
	{id:298, type: "crazyscientist", name: "A crazy scientist", filename: "upgrades", cx:-480 , cy:-720, cost: 1000000000000000000000000000, required: 190, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description:"You gain more drops per second the more Mtn Eew you've got."},
    
    //extra life upgrades through knowhow
    {id:299, type: "lifeknowhow", name: "Common seahorse", filename: "upgrades", cx:-240 , cy:-1140, cost: 10000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:300, type: "lifeknowhow", name: "Big belly seahorse", filename: "upgrades", cx:-300 , cy:-1140, cost: 10000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:301, type: "lifeknowhow", name: "Pacific seahorse", filename: "upgrades", cx:-360 , cy:-1140, cost: 10000000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:302, type: "lifeknowhow", name: "Pipefish", filename: "upgrades", cx:-420 , cy:-1140, cost: 10000000000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:303, type: "lifeknowhow", name: "Leafy Seadragon", filename: "upgrades", cx:-480 , cy:-1140, cost: 10000000000000000001, required: 1, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},

	{id:304, type: "lifeknowhow", name: "Shrimp", filename: "upgrades", cx:0 , cy:-1200, cost: 10000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:305, type: "lifeknowhow", name: "Tiger prawn", filename: "upgrades", cx:-60 , cy:-1200, cost: 10000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:306, type: "lifeknowhow", name: "Red King Crab", filename: "upgrades", cx:-120 , cy:-1200, cost: 10000000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:307, type: "lifeknowhow", name: "Japanese Spider Crab", filename: "upgrades", cx:-180 , cy:-1200, cost: 10000000000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:308, type: "lifeknowhow", name: "Lobster", filename: "upgrades", cx:-240 , cy:-1200, cost: 10000000000000000002, required: 2, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	
	{id:309, type: "lifeknowhow", name: "Dumbo Octopus", filename: "upgrades", cx:-300 , cy:-1200, cost: 10000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:310, type: "lifeknowhow", name: "Carribean reef octopus", filename: "upgrades", cx:-360 , cy:-1200, cost: 10000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:311, type: "lifeknowhow", name: "Vampire Squid", filename: "upgrades", cx:-420 , cy:-1200, cost: 10000000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:312, type: "lifeknowhow", name: "Argentine Shortfin Squid", filename: "upgrades", cx:-480 , cy:-1200, cost: 10000000000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},
	{id:313, type: "lifeknowhow", name: "Striped Pyjama Squid", filename: "upgrades", cx:0 , cy:-1260, cost: 10000000000000000003, required: 3, effecton: 0, effect: 0, multiplier: 0, perc: 2,  other: 0, description:"Extra drop production: +2%"},

	{id:314, type: "lifeknowhow", name: "Atlantic Bluefin Tuna", filename: "upgrades", cx:-60 , cy:-1260, cost: 100000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:315, type: "lifeknowhow", name: "Blue Marlin", filename: "upgrades", cx:-120 , cy:-1260, cost: 100000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:316, type: "lifeknowhow", name: "Atlantic Salmon", filename: "upgrades", cx:-180 , cy:-1260, cost: 100000000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:317, type: "lifeknowhow", name: "Swordfish", filename: "upgrades", cx:-240 , cy:-1260, cost: 100000000000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},
	{id:318, type: "lifeknowhow", name: "Pacific Halibut", filename: "upgrades", cx:-300 , cy:-1260, cost: 100000000000000000001, required: 4, effecton: 0, effect: 0, multiplier: 0, perc: 3,  other: 0, description:"Extra drop production: +3%"},

	{id:319, type: "lifeknowhow", name: "Blue Tang", filename: "upgrades", cx:-360 , cy:-1260, cost: 1000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:320, type: "lifeknowhow", name: "Angel Fish", filename: "upgrades", cx:-420 , cy:-1260, cost: 1000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:321, type: "lifeknowhow", name: "Clown Fish", filename: "upgrades", cx:-480 , cy:-1260, cost: 1000000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:322, type: "lifeknowhow", name: "Blue Devil", filename: "upgrades", cx:0 , cy:-1320, cost: 1000000000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},
	{id:323, type: "lifeknowhow", name: "Butterfly Fish", filename: "upgrades", cx:-60 , cy:-1320, cost: 1000000000000000000001, required: 5, effecton: 0, effect: 0, multiplier: 0, perc: 4,  other: 0, description:"Extra drop production: +4%"},

	{id:324, type: "lifeknowhow", name: "Humpback Angler Fish", filename: "upgrades", cx:-120 , cy:-1320, cost: 1000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:325, type: "lifeknowhow", name: "Common Fangtooth", filename: "upgrades", cx:-180 , cy:-1320, cost: 1000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:326, type: "lifeknowhow", name: "Red Lion Fish", filename: "upgrades", cx:-240 , cy:-1320, cost: 1000000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:327, type: "lifeknowhow", name: "Sarcastic Fringehead", filename: "upgrades", cx:-300 , cy:-1320, cost: 1000000000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},
	{id:328, type: "lifeknowhow", name: "Black Dragon Fish", filename: "upgrades", cx:-360 , cy:-1320, cost: 1000000000000000000002, required: 6, effecton: 0, effect: 0, multiplier: 0, perc: 5,  other: 0, description:"Extra drop production: +5%"},

    //collaboration upgrades after unlocked by know how upgrade
    {id:329, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 50000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Air dryers gain +5% per faucet, and faucets gain +0.1% per air dryer.", building: 3, pipnum: 6},
	{id:330, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 700000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Buckets gain +5% per garden hose, and garden hoses gain +0.1% per bucket.", building: 4, pipnum: 7},
	{id:331, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 11000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Rain dances gain +5% per truck, and trucks gain +0.1% per rain dance.", building: 5, pipnum: 8},
	{id:332, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 170000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Air dryers gain +5% per fire hose, and fire hoses gain +0.1% per air dryer.", building: 3, pipnum: 9},
	{id:333, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 2500000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Buckets gain +5% per ice mine, and ice mines gain +0.1% per bucket.", building: 4, pipnum: 10},
	{id:334, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 35000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Rain dances gain +5% per space ship, and space ships gain +0.1% per rain dance.", building: 5, pipnum: 11},
	{id:335, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 470000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Air dryers gain +5% per wormhole, and wormholes gain +0.1% per air dryer.", building: 3, pipnum: 12},
	{id:336, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 6000000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Buckets gain +5% per river, and rivers gain +0.1% per bucket.", building: 4, pipnum: 13},
	{id:337, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-780, cost: 70000000000000000, required: 25, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 20, description: "Helpers are collaborating. Rain dances gain +5% per collider, and colliders gain +0.1% per rain dance.", building: 5, pipnum: 14},
	
	{id:338, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 6000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Faucets gain +5% per fire hose, and fire hoses gain +0.1% per faucet.", building: 6, pipnum: 9},
	{id:339, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 82000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Garden hoses gain +5% per ice mine, and ice mines gain +0.1% per garden hose.", building: 7, pipnum: 10},
	{id:340, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 1100000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Trucks gain +5% per space ship, and space ships gain +0.1% per truck.", building: 8, pipnum: 11},
	{id:341, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 15500000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Faucets gain +5% per wormhole, and wormholes gain +0.1% per faucet.", building: 6, pipnum: 12},
	{id:342, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 185000000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Garden hoses gain +5% per river, and rivers gain +0.1% per garden hose.", building: 7, pipnum: 13},
	{id:343, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 2500000000000000000, required: 50, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Trucks gain +5% per colledir, and colliders gain +0.1% per truck.", building: 8, pipnum: 14},
	{id:344, type: "collaboration", name: "Collaboration", filename: "upgrades", cx:-480 , cy:-840, cost: 50000000000000000000, required: 70, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 21, description: "Helpers are collaborating. Helping hands gain +5% per collider, and colliders gain +0.1% per helping hand.", building: 1, pipnum: 14},

    //poseidon upgrade
    {id:345, type: "poseidon", name: "poseidon", filename: "poseidonsmall", cx:0 , cy:0, cost: 10000000, required: 22, effecton: 0, effect: 0, multiplier: 0, perc: 0,  other: 0, description: "Worship poseidon, God of the seas.", building: 0, pipnum: 0},

    // alien technology others than pipettes
    {id:346, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 20 air dryers you have, each bucket gains 1% extra of its drops per second.", building: 4, pipnum: 20, pip:2},
	{id:347, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 30 air dryers you have, each raindance gains 1% extra of its drops per second.", building: 5, pipnum: 30, pip:2},
	{id:348, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 70000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 40 air dryers you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 40, pip:2},
	{id:349, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 50 air dryers you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:2},
	{id:350, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 60 air dryers you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:2},
	{id:351, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 70000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 70 air dryers you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:2},
	{id:352, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 80 air dryers you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:2},
	{id:353, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 90 air dryers you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:2},
	{id:354, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 70000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 100 air dryers you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:2},
	{id:355, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 700000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 110 air dryers you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:2},
	{id:356, type: "alientech", name: "Alien tech", filename: "upgrades", cx:0 , cy:-1440, cost: 7000000000000000, required: 25, effecton: "Air dryer", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Air dryers are twice as efficient and for every 120 air dryers you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:2},

	{id:357, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 30 buckets you have, each raindance gains 1% extra of its drops per second.", building: 5, pipnum: 30, pip:3},
	{id:358, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 80000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 40 buckets you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 40, pip:3},
	{id:359, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 800000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 50 buckets you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:3},
	{id:360, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 60 buckets you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:3},
	{id:361, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 80000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 70 buckets you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:3},
	{id:362, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 800000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 80 buckets you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:3},
	{id:363, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 90 buckets you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:3},
	{id:364, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 80000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 100 buckets you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:3},
	{id:365, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 800000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 110 buckets you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:3},
	{id:366, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-60 , cy:-1440, cost: 8000000000000000, required: 30, effecton: "Bucket", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Buckets are twice as efficient and for every 120 buckets you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:3},

	{id:367, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 90000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 40 raindances you have, each faucet gains 1% extra of its drops per second.", building: 6, pipnum: 40, pip:4},
	{id:368, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 900000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 50 raindances you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:4},
	{id:369, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 9000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 60 raindances you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:4},
	{id:370, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 90000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 70 raindances you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:4},
	{id:371, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 900000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 80 raindances you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:4},
	{id:372, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 9000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 90 raindances you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:4},
	{id:373, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 90000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 100 raindances you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:4},
	{id:374, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 900000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 110 raindances you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:4},
	{id:375, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-120 , cy:-1440, cost: 9000000000000000, required: 35, effecton: "Raindance", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Raindances are twice as efficient and for every 120 raindances you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:4},
	
	{id:376, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 1000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 50 faucets you have, each garden hose gains 1% extra of its drops per second.", building: 7, pipnum: 50, pip:5},
	{id:377, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 10000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 60 faucets you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:5},
	{id:378, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 100000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 70 faucets you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:5},
	{id:379, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 1000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 80 faucets you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:5},
	{id:380, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 10000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 90 faucets you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:5},
	{id:381, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 100000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 100 faucets you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:5},
	{id:382, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 1000000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 110 faucets you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:5},
	{id:383, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-180 , cy:-1440, cost: 10000000000000000, required: 40, effecton: "Faucet", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Faucets are twice as efficient and for every 120 faucets you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:5},

	{id:384, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 20000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 60 garden hoses you have, each truck gains 1% extra of its drops per second.", building: 8, pipnum: 60, pip:6},
	{id:385, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 200000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 70 garden hoses you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:6},
	{id:386, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 2000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 80 garden hoses you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:6},
	{id:387, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 20000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 90 garden hoses you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:6},
	{id:388, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 200000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 100 garden hoses you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:6},
	{id:389, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 2000000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 110 garden hoses you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:6},
	{id:390, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-240 , cy:-1440, cost: 20000000000000000, required: 45, effecton: "Garden hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Garden hoses are twice as efficient and for every 120 garden hoses you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:6},

	{id:391, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 300000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 70 trucks you have, each fire hose gains 1% extra of its drops per second.", building: 9, pipnum: 70, pip:7},
	{id:392, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 3000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 80 trucks you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:7},
	{id:393, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 30000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 90 trucks you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:7},
	{id:394, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 300000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 100 trucks you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:7},
	{id:395, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 3000000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 110 trucks you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:7},
	{id:396, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-300 , cy:-1440, cost: 30000000000000000, required: 50, effecton: "Truck", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Trucks are twice as efficient and for every 120 trucks you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:7},

	{id:397, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 4000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 80 fire hoses you have, each ice mine gains 1% extra of its drops per second.", building: 10, pipnum: 80, pip:8},
	{id:398, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 40000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 90 fire hoses you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:8},
	{id:399, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 400000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 100 fire hoses you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:8},
	{id:400, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 4000000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 110 fire hoses you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:8},
	{id:401, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-360 , cy:-1440, cost: 40000000000000000, required: 55, effecton: "Fire hose", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Fire hoses are twice as efficient and for every 120 fire hoses you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:8},

	{id:402, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 50000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 90 ice mines you have, each spaceship gains 1% extra of its drops per second.", building: 11, pipnum: 90, pip:9},
	{id:403, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 500000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 100 ice mines you have, each wormhole gains 1% extra of its drops per second.", building: 12, pipnum: 100, pip:9},
	{id:404, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 5000000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 110 ice mines you have, each river gains 1% extra of its drops per second.", building: 13, pipnum: 110, pip:9},
    {id:405, type: "alientech", name: "Alien tech", filename: "upgrades", cx:-420 , cy:-1440, cost: 50000000000000000, required: 60, effecton: "Ice mine", effect: 1, multiplier: 2, perc: 1,  other: 0, description: "Alien technology found that links helpers.<br/>Ice mines are twice as efficient and for every 120 ice mines you have, each collider gains 1% extra of its drops per second.", building: 14, pipnum: 120, pip:9},
    
    //extra building upgrades added with update
    {id:406, type: "mouse", name: "Air Mouse", filename: "upgrades", cx:0 , cy:-1500, cost: 50000000000000000000000, required: 100000000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 2, other:0, description:"Clicking gains +2% of your drops per second."},
	{id:407, type: "mouse", name: "Water Mouse", filename: "upgrades", cx:-60 , cy:-1500, cost: 5000000000000000000000000, required: 1000000000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 2, other:0, description:"Clicking gains +2% of your drops per second."},
	{id:408, type: "mouse", name: "Fire Mouse", filename: "upgrades", cx:-120 , cy:-1500, cost: 500000000000000000000000000, required: 10000000000000000000000, effecton: "mouse", effect: -1, multiplier: 0, perc: 2, other:0, description:"Clicking gains +2% of your drops per second."},
	
	{id:409, type: "hand", name: "Too many fingers!", filename: "upgrades", cx:-180 , cy:-1500, cost: 100000000000000000, required: 340, effecton: "Helping hand", effect: 0, multiplier: 5000000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000,000 drops per click or second for each building owned."},
	{id:409, type: "hand", name: "I can't look at those fingers any more!", filename: "upgrades", cx:-240 , cy:-1500, cost: 1000000000000000000, required: 380, effecton: "Helping hand", effect: 0, multiplier: 5000000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000,000 drops per click or second for each building owned."},
	{id:410, type: "hand", name: "I'm a finger addict!", filename: "upgrades", cx:-300 , cy:-1500, cost: 10000000000000000000, required: 420, effecton: "Helping hand", effect: 0, multiplier: 5000000, perc: 0,  other: "all", description:"Each click and Helping Hand gain 5,000,000 drops per click or second for each building owned."},
	
	{id:411, type: "pipette", name: "Colossal Pipette", filename: "upgrades", cx:-360 , cy:-1500, cost:5000000000000000000, required: 300, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:412, type: "pipette", name: "Massive Pipette", filename: "upgrades", cx:-420 , cy:-1500, cost:500000000000000000000, required: 350, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	{id:413, type: "pipette", name: "Gigantic Pipette", filename: "upgrades", cx:-480 , cy:-1500, cost:50000000000000000000000, required: 400, effecton: "Pipette", effect: 1, multiplier: 2, perc: 0,  other: 0, description:"Each pipette will produce twice as many drops."},
	
	{id:414, type: "air_dryer", name: "Colossal Air Dryer", filename: "upgrades", cx:0 , cy:-1560, cost:55000000000000000000, required: 300, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:415, type: "air_dryer", name: "Massive Air Dryer", filename: "upgrades", cx:-60 , cy:-1560, cost:5500000000000000000000, required: 350, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	{id:416, type: "air_dryer", name: "Gigantic Air Dryer", filename: "upgrades", cx:-120 , cy:-1560, cost:550000000000000000000000, required: 400, effecton: "Air dryer", effect: 2, multiplier: 2, perc: 0,  other: 0, description:"Each air dryer will produce twice as many drops."},
	
	{id:417, type: "bucket", name: "Colossal Bucket", filename: "upgrades", cx:-180 , cy:-1560, cost:600000000000000000000, required: 300, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:418, type: "bucket", name: "Massive Bucket", filename: "upgrades", cx:-240 , cy:-1560, cost:60000000000000000000000, required: 350, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},
	{id:419, type: "bucket", name: "Gigantic Bucket", filename: "upgrades", cx:-300 , cy:-1560, cost:6000000000000000000000000, required: 400, effecton: "Bucket", effect: 3, multiplier: 2, perc: 0,  other: 0, description:"Each bucket will produce twice as many drops."},

	{id:420, type: "raindance", name: "Colossal Raindance", filename: "upgrades", cx:-360 , cy:-1560, cost:6500000000000000000000, required: 300, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:421, type: "raindance", name: "Massive Raindance", filename: "upgrades", cx:-420 , cy:-1560, cost:650000000000000000000000, required: 350, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	{id:422, type: "raindance", name: "Gigantic Raindance", filename: "upgrades", cx:-480 , cy:-1560, cost:65000000000000000000000000, required: 400, effecton: "Raindance", effect: 4, multiplier: 2, perc: 0,  other: 0, description:"Each raindance will produce twice as many drops."},
	
	{id:423, type: "faucet", name: "Colossal Faucet", filename: "upgrades", cx:0 , cy:-1620, cost:70000000000000000000000, required: 300, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:424, type: "faucet", name: "Massive Faucet", filename: "upgrades", cx:-60 , cy:-1620, cost:7000000000000000000000000, required: 350, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	{id:425, type: "faucet", name: "Gigantic Faucet", filename: "upgrades", cx:-120 , cy:-1620, cost:700000000000000000000000000, required: 400, effecton: "Faucet", effect: 5, multiplier: 2, perc: 0,  other: 0, description:"Each faucet will produce twice as many drops."},
	
	{id:426, type: "garden_hose", name: "Colossal Garden Hose", filename: "upgrades", cx:-180 , cy:-1620, cost:1000000000000000000000000, required: 300, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:427, type: "garden_hose", name: "Massive Garden Hose", filename: "upgrades", cx:-240 , cy:-1620, cost:100000000000000000000000000, required: 350, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	{id:428, type: "garden_hose", name: "Gigantic Garden Hose", filename: "upgrades", cx:-300 , cy:-1620, cost:10000000000000000000000000000, required: 400, effecton: "Garden hose", effect: 6, multiplier: 2, perc: 0,  other: 0, description:"Each garden hose will produce twice as many drops."},
	
	{id:429, type: "truck", name: "Colossal Truck", filename: "upgrades", cx:-360 , cy:-1620, cost:16500000000000000000000000, required: 300, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:430, type: "truck", name: "Massive Truck", filename: "upgrades", cx:-420 , cy:-1620, cost:1650000000000000000000000000, required: 350, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	{id:431, type: "truck", name: "Gigantic Truck", filename: "upgrades", cx:-480 , cy:-1620, cost:165000000000000000000000000000, required: 400, effecton: "Truck", effect: 7, multiplier: 2, perc: 0,  other: 0, description:"Each truck will produce twice as many drops."},
	
	{id:432, type: "fire_hose", name: "Colossal Fire Hose", filename: "upgrades", cx:0 , cy:-1680, cost:255000000000000000000000000, required: 300, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:433, type: "fire_hose", name: "Massive Fire Hose", filename: "upgrades", cx:-60 , cy:-1680, cost:25500000000000000000000000000, required: 350, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	{id:434, type: "fire_hose", name: "Gigantic Fire Hose", filename: "upgrades", cx:-120 , cy:-1680, cost:2550000000000000000000000000000, required: 400, effecton: "Fire hose", effect: 8, multiplier: 2, perc: 0,  other: 0, description:"Each fire hose will produce twice as many drops."},
	
	{id:435, type: "ice_mine", name: "Colossal Mine", filename: "upgrades", cx:-180 , cy:-1680, cost:3750000000000000000000000000, required: 300, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:436, type: "ice_mine", name: "Massive Mine", filename: "upgrades", cx:-240 , cy:-1680, cost:375000000000000000000000000000, required: 350, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	{id:437, type: "ice_mine", name: "Gigantic Mine", filename: "upgrades", cx:-300 , cy:-1680, cost:37500000000000000000000000000000, required: 400, effecton: "Ice mine", effect: 9, multiplier: 2, perc: 0,  other: 0, description:"Each ice mine will produce twice as many drops."},
	
	{id:438, type: "spaceship", name: "Colossal Spaceship", filename: "upgrades", cx:-360 , cy:-1680, cost:50000000000000000000000000000, required: 300, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:439, type: "spaceship", name: "Massive Spaceship", filename: "upgrades", cx:-420 , cy:-1680, cost:5000000000000000000000000000000, required: 350, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	{id:440, type: "spaceship", name: "Gigantic Spaceship", filename: "upgrades", cx:-480 , cy:-1680, cost:500000000000000000000000000000000, required: 400, effecton: "Spaceship", effect: 10, multiplier: 2, perc: 0,  other: 0, description:"Each spaceship will produce twice as many drops."},
	
	{id:441, type: "wormhole", name: "Colossal Wormhole", filename: "upgrades", cx:0 , cy:-1740, cost:700000000000000000000000000000, required: 300, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:442, type: "wormhole", name: "Massive Wormhole", filename: "upgrades", cx:-60 , cy:-1740, cost:70000000000000000000000000000000, required: 350, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	{id:443, type: "wormhole", name: "Gigantic Wormhole", filename: "upgrades", cx:-120 , cy:-1740, cost:7000000000000000000000000000000000, required: 400, effecton: "Wormhole", effect: 11, multiplier: 2, perc: 0,  other: 0, description:"Each wormhole will produce twice as many drops."},
	
	{id:444, type: "river", name: "Colossal River", filename: "upgrades", cx:-180 , cy:-1740, cost:8500000000000000000000000000000, required: 300, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:445, type: "river", name: "Massive River", filename: "upgrades", cx:-240 , cy:-1740, cost:850000000000000000000000000000000, required: 350, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	{id:446, type: "river", name: "Gigantic River", filename: "upgrades", cx:-300 , cy:-1740, cost:85000000000000000000000000000000000, required: 400, effecton: "River", effect: 12, multiplier: 2, perc: 0,  other: 0, description:"Each river will produce twice as many drops."},
	
	{id:447, type: "collider", name: "Colossal Collider", filename: "upgrades", cx:-360 , cy:-1740, cost:105000000000000000000000000000000, required: 300, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:448, type: "collider", name: "Massive Collider", filename: "upgrades", cx:-420 , cy:-1740, cost:10500000000000000000000000000000000, required: 350, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."},
	{id:449, type: "collider", name: "Gigantic Collider", filename: "upgrades", cx:-480 , cy:-1740, cost:1050000000000000000000000000000000000, required: 400, effecton: "Large H-O collider", effect: 13, multiplier: 2, perc: 0,  other: 0, description:"Each large H-O collider will produce twice as many drops."}
];

// Achievements
var Achievement = function(options) {
	return $.extend({
        unlocked: 0,   
		button: undefined, 
        buttonLocked: undefined,
        
        init: function() {
            var self = this;

            var pos = this.cx + "px " + this.cy + "px";	// backgroundposition for sprite comes from object
            var filen = 'url(images/' + this.filename + '.png)'; 

            this.button = $("<button class='achievement' />").css({'background-color':'#221947', 'cursor': 'default', 'background-image':filen, 'background-position':pos})
                            .hover(function() {
                                // show popup, 
                                addMouseListener();
                                Game.popupr.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popuptitle">'+self.name+'</p><p>'+self.description+'</p></td></tr></table>');
                                Game.popupr.show();
                            }, function() {
                                // on mouseout
                                removeMouseListener();
                                Game.popupr.hide();
                            });

            this.buttonLocked = $("<button class='achievement' />").css({'background-color':'#221947', 'cursor': 'default', 'background-image':'url(images/question.png)', 'background-position':'0px 0px'})
                            .hover(function() {
                                // show popup
                                addMouseListener();
                                Game.popupr.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(images/question.png); background-position:5px 5px; background-repeat:no-repeat;">&nbsp;</div></td><td><p class="popuptitle">???</p><p>???</p></td></tr></table>');
                                Game.popupr.show();
                            }, function() {
                                // on mouseout
                                removeMouseListener();
                                Game.popupr.hide();
                            });
            
            Game.achievementsStoreDiv.append(this.button);
			this.button.fadeOut("fast");
			
			Game.achievementsStoreDiv.append(this.buttonLocked);
            this.buttonLocked.fadeIn("fast");
            
			this.check();
			
			return this;
        },

        check: function() {
			if (this.unlocked==0){
                if (this.type=="drops"){
					if (this.required<=Game.totalDropsThisExperienceLevel){
						this.unlock();
					}
				}else if (this.type=="persecond"){
                    if(this.required<=Game.dps){
                        this.unlock();
                    }
                }else if (this.type=="clicking"){
                    if(this.required<=Game.handmadeDrops){
                        this.unlock();
                    }
                }else if (this.type=="building"){
                    if (this.subtype=="helpinghand"){
                        if (this.required<=Game.buildings[0].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="pipette"){
                        if (this.required<=Game.buildings[1].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="airdryer"){
                        if (this.required<=Game.buildings[2].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="bucket"){
                        if (this.required<=Game.buildings[3].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="raindance"){
                        if (this.required<=Game.buildings[4].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="faucet"){
                        if (this.required<=Game.buildings[5].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="gardenhose"){
                        if (this.required<=Game.buildings[6].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="truck"){
                        if (this.required<=Game.buildings[7].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="firehose"){
                        if (this.required<=Game.buildings[8].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="icemine"){
                        if (this.required<=Game.buildings[9].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="spaceship"){
                        if (this.required<=Game.buildings[10].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="wormhole"){
                        if (this.required<=Game.buildings[11].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="river"){
                        if (this.required<=Game.buildings[12].quantity){
                            this.unlock();
                        }
                    }else if (this.subtype=="collider"){
                        if (this.required<=Game.buildings[13].quantity){
                            this.unlock();
                        }
                    }
                }else if (this.type=="totalbuildings"){
                    if(this.required<=Game.totalNumberOfBuildings){
                        this.unlock();
                    }
                }else if (this.type=="buildingprod"){
                    if(this.required<=Game.buildings[this.other].totalProduction){
                        this.unlock();
                    } 
                }else if (this.type=="totalupgrades"){
                    if(this.required<=Game.totalNumberOfUpgrades){
                        this.unlock();
                    } 
                }else if (this.type=="totalcloudclicks"){
                    if(this.required<=Game.cloudsClicked){
                        this.unlock();
                    } 
                }
            }
        },

        unlock: function(){
            this.unlocked = 1;
			this.buttonLocked.hide();
            this.button.fadeIn("fast");
            Game._makeNotice(this.filename, this.name, this.description, this.cx, this.cy,0);
            Game.numberOfAchievementsUnlocked++;
            Game.textOfNumberOfAchievementsUnlockedStats.text(Game.numberOfAchievementsUnlocked); 
            Game.achievementsPerc = Math.floor((Game.numberOfAchievementsUnlocked/Game.achievements.length)*100);
            Game.textOfPercentageOfAchievementsUnlockedStats.text(Game.achievementsPerc);
            Game.achievementsUnlocked.push(this); 
            Game._setMtnEewLvl(Game.achievementsPerc);
            $.each(Game.buildings, function(i, building) {
                building.calculateCurrentProduction();
            });
            $.each(Game.upgrades, function(i, upgrade) { 
                upgrade.check();
            });
        },

    }, options);
};

// List of achievements
var _achievements = [
    //achievements for number of drops
    {id:1, type: "drops", name: "Make one drop", filename: "achievements", cx:0, cy:0, required: 1, description:"Make one drop"},
    {id:2, type: "drops", name: "Make a thousand drops", filename: "achievements", cx:-60, cy:0,  required: 1000, description:"Make a thousand drops"},
    {id:3, type: "drops", name: "Make 100,000 drops", filename: "achievements", cx:-120, cy:0,  required: 100000, description:"Make 100,000 drops"},
    {id:4, type: "drops", name: "Make a million drops", filename: "achievements", cx:-180, cy:0,  required: 1000000, description:"Make a million drops"},
	{id:5, type: "drops", name: "Make a 100 million drops", filename: "achievements", cx:-240, cy:0,  required: 100000000, description:"Make a 100 million drops"},
	{id:6, type: "drops", name: "Make a billion drops", filename: "achievements", cx:-300, cy:0,  required: 1000000000, description:"Make a billion drops"},
	{id:7, type: "drops", name: "Make a 100 billion drops", filename: "achievements", cx:-360, cy:0,  required: 100000000000, description:"Make a 100 billion drops"},
	{id:8, type: "drops", name: "Make a trillion drops", filename: "achievements", cx:-420, cy:0,  required: 1000000000000, description:"Make a trillion drops"},
	{id:9, type: "drops", name: "Make a 100 trillion drops", filename: "achievements", cx:0, cy:-60,  required: 100000000000000, description:"Make a 100 trillion drops"},
	{id:10, type: "drops", name: "Make a quadrillion drops", filename: "achievements", cx:-60, cy:-60,  required: 1000000000000000, description:"Make a quadrillion drops"},
	{id:11, type: "drops", name: "Make a 100 quadrillion drops", filename: "achievements", cx:-120, cy:-60,  required: 100000000000000000, description:"Make a 100 quadrillion drops"},
	{id:12, type: "drops", name: "Make a quintillion drops", filename: "achievements", cx:-180, cy:-60,  required: 1000000000000000000, description:"Make a quintillion drops"},
	{id:13, type: "drops", name: "Make a 100 quintillion drops", filename: "achievements", cx:-240, cy:-60,  required: 100000000000000000000, description:"Make a 100 quintillion drops"},
	{id:14, type: "drops", name: "Make a sextillion drops", filename: "achievements", cx:-300, cy:-60,  required: 1000000000000000000000, description:"Make a sextillion drops"},
	{id:15, type: "drops", name: "Make a 100 sextillion drops", filename: "achievements", cx:-360, cy:-60,  required: 100000000000000000000000, description:"Make a 100 sextillion drops"},
	{id:16, type: "drops", name: "Make a septillion drops", filename: "achievements", cx:-420, cy:-60,  required: 1000000000000000000000000, description:"Make a septillion drops"},
	{id:17, type: "drops", name: "Make a 100 septillion drops", filename: "achievements", cx:0, cy:-120,  required: 100000000000000000000000000, description:"Make a 100 septillion drops"},
	{id:18, type: "drops", name: "Make an octillion drops", filename: "achievements", cx:-60, cy:-120,  required: 1000000000000000000000000000, description:"Make an octillion drops"},
	{id:19, type: "drops", name: "Make a 100 octillion drops", filename: "achievements", cx:-120, cy:-120,  required: 100000000000000000000000000000, description:"Make a 100 octillion drops"},
	{id:20, type: "drops", name: "Make a nonillion drops", filename: "achievements", cx:-180, cy:-120,  required: 1000000000000000000000000000000, description:"Make a nonillion drops"},
	{id:21, type: "drops", name: "Make a 100 nonillion drops", filename: "achievements", cx:-240, cy:-120,  required: 100000000000000000000000000000000, description:"Make a 100 nonillion drops"},
	{id:22, type: "drops", name: "Make a decillion drops", filename: "achievements", cx:-300, cy:-120,  required: 1000000000000000000000000000000000, description:"Make a decillion drops"},
    {id:23, type: "drops", name: "Make a 100 decillion drops", filename: "achievements", cx:-360, cy:-120,  required: 100000000000000000000000000000000000, description:"Make a 100 decillion drops"},
    
    //achievement for number of drops per second
    {id:24, type: "persecond", name: "Newborn", filename: "achievements", cx:0, cy:0,  required: 1, description:"Make one drop per second"},
    {id:25, type: "persecond", name: "Baby", filename: "achievements", cx:-60, cy:0,  required: 10, description:"Make ten drops per second"},
	{id:26, type: "persecond", name: "Toddler", filename: "achievements", cx:-120, cy:0,  required: 100, description:"Make 100 drops per second"},
	{id:27, type: "persecond", name: "Gradeschooler", filename: "achievements", cx:-180, cy:0,  required: 1000, description:"Make 1,000 drops per second"},
	{id:28, type: "persecond", name: "Teen", filename: "achievements", cx:-240, cy:0,  required: 10000, description:"Make 10,000 drops per second"},
	{id:29, type: "persecond", name: "Young adult", filename: "achievements", cx:-300, cy:0,  required: 100000, description:"Make 100,000 drops per second"},
	{id:30, type: "persecond", name: "Student", filename: "achievements", cx:-360, cy:0,  required: 1000000, description:"Make 1 million drops per second"},
	{id:31, type: "persecond", name: "College student", filename: "achievements", cx:-420, cy:0,  required: 10000000, description:"Make 10 million drops per second"},
	{id:32, type: "persecond", name: "Undergraduate", filename: "achievements", cx:0, cy:-60,  required: 100000000, description:"Make 100 million drops per second"},
	{id:33, type: "persecond", name: "Bachelor", filename: "achievements", cx:-60, cy:-60,  required: 1000000000, description:"Make 1 billion drops per second"},
	{id:34, type: "persecond", name: "Graduate", filename: "achievements", cx:-120, cy:-60,  required: 10000000000, description:"Make 10 billion drops per second"},
	{id:35, type: "persecond", name: "Master", filename: "achievements", cx:-180, cy:-60,  required: 100000000000, description:"Make 100 billion drops per second"},
	{id:36, type: "persecond", name: "Postgraduate", filename: "achievements", cx:-240, cy:-60,  required: 1000000000000, description:"Make 1 trillion drops per second"},
	{id:37, type: "persecond", name: "Intern", filename: "achievements", cx:-300, cy:-60,  required: 10000000000000, description:"Make 10 trillion drops per second"},
	{id:38, type: "persecond", name: "Entry level job", filename: "achievements", cx:-360, cy:-60,  required: 100000000000000, description:"Make 100 trillion drops per second"},
	{id:39, type: "persecond", name: "Middle level job", filename: "achievements", cx:-420, cy:-60,  required: 1000000000000000, description:"Make 1 quadrillion drops per second"},
	{id:40, type: "persecond", name: "Chief Sales Officer", filename: "achievements", cx:0, cy:-120,  required: 10000000000000000, description:"Make 10 quadrillion drops per second"},
	{id:41, type: "persecond", name: "Chief Information Officer", filename: "achievements", cx:-60, cy:-120,  required: 100000000000000000, description:"Make 100 quadrillion drops per second"},
	{id:42, type: "persecond", name: "Chief Operations Officer", filename: "achievements", cx:-120, cy:-120,  required: 1000000000000000000, description:"Make 1 quintillion drops per second"},
	{id:43, type: "persecond", name: "Chief Financial Officer", filename: "achievements", cx:-180, cy:-120,  required: 10000000000000000000, description:"Make 10 quintillion drops per second"},
    {id:44, type: "persecond", name: "Chief Executive Officer", filename: "achievements", cx:-240, cy:-120,  required: 100000000000000000000, description:"Make 100 quintillion drops per second"},
    
    //achievements for number of drops made from clicking big drop
    {id:45, type: "clicking", name: "Starting to click?", filename: "upgrades", cx:0, cy:-60,  required: 1000, description:"Make 1,000 drops from clicking"},
    {id:46, type: "clicking", name: "Getting the hang of clicking", filename: "upgrades",  cx:-60, cy:-60, required: 100000, description:"Make 100,000 drops from clicking"},
	{id:47, type: "clicking", name: "Just clicking away", filename: "upgrades", cx:-120, cy:-60,  required: 1000000, description:"Make 1 million drops from clicking"},
	{id:48, type: "clicking", name: "Keep on clicking", filename: "upgrades", cx:-180, cy:-60,  required: 10000000, description:"Make 10 million drops from clicking"},
	{id:49, type: "clicking", name: "Aren't you tired of clicking?", filename: "upgrades", cx:-240, cy:-60,  required: 1000000000, description:"Make 1 billion drops from clicking"},
	{id:50, type: "clicking", name: "Nothing better to do than clicking", filename: "upgrades", cx:-300, cy:-60,  required: 10000000000, description:"Make 10 billion drops from clicking"},
	{id:51, type: "clicking", name: "Still clicking, are you?", filename: "upgrades", cx:-360, cy:-60,  required: 1000000000000, description:"Make 1 trillion drops from clicking"},
	{id:52, type: "clicking", name: "Going strong, don't give up now", filename: "upgrades", cx:-420, cy:-60,  required: 10000000000000, description:"Make 10 trillion drops from clicking"},
	{id:53, type: "clicking", name: "You must be getting tired now", filename: "upgrades", cx:-480, cy:-60,  required: 1000000000000000, description:"Make 1 quadrillion drops from clicking"},
	{id:54, type: "clicking", name: "Master clicker you are", filename: "upgrades", cx:-480, cy:-120,  required: 10000000000000000, description:"Make 10 quadrillion drops from clicking"},
	{id:55, type: "clicking", name: "Don't you have carpal tunnel syndrome yet?", filename: "upgrades", cx:-480, cy:-180,  required: 1000000000000000000, description:"Make 1 quintillion drops from clicking"},
    {id:56, type: "clicking", name: "How many clicks outsourced?", filename: "upgrades", cx:-480, cy:-240,  required: 10000000000000000000, description:"Make 10 quintillion drops from clicking"},
    
    //achievements for number of helping hands
    {id:57, type: "building", subtype: "helpinghand", name: "An extra hand", filename: "upgrades", cx:0, cy:-60,  required: 1, description:"Have 1 Helping hand"},
    {id:58, type: "building", subtype: "helpinghand", name: "Injury prevention", filename: "upgrades", cx:-60, cy:-60,  required: 50, description:"Have 50 Helping hands"},
	{id:59, type: "building", subtype: "helpinghand", name: "Clicking With All Fingers and ten hands", filename: "upgrades", cx:-120, cy:-60,  required: 100, description:"Have 100 Helping hands"},
	{id:60, type: "building", subtype: "helpinghand", name: "A Lot Of Fingers", filename: "upgrades", cx:-180, cy:-60,  required: 150, description:"Have 150 Helping hands"},
	{id:61, type: "building", subtype: "helpinghand", name: "Even More Fingers", filename: "upgrades", cx:-240, cy:-60,  required: 200, description:"Have 200 Helping hands"},
	{id:62, type: "building", subtype: "helpinghand", name: "Where do you get all these hands?", filename: "upgrades", cx:-300, cy:-60,  required: 250, description:"Have 250 Helping hands"},
	{id:63, type: "building", subtype: "helpinghand", name: "Is it even possible to get more?", filename: "upgrades", cx:-360, cy:-60,  required: 300, description:"Have 300 Helping hands"},
    {id:64, type: "building", subtype: "helpinghand", name: "I guess it is.", filename: "upgrades", cx:-420, cy:-60,  required: 400, description:"Have 400 Helping hands"},
    
    //achievements for number of pipettes
    {id:65, type: "building", subtype: "pipette", name: "1", filename: "upgrades", cx:0, cy:-120,  required: 1, description:"Have 1 pipette"},
	{id:66, type: "building", subtype: "pipette", name: "50", filename: "upgrades", cx:-60, cy:-120,  required: 50, description:"Have 50 pipettes"},
	{id:67, type: "building", subtype: "pipette", name: "100", filename: "upgrades", cx:-120, cy:-120,  required: 100, description:"Have 100 pipettes"},
	{id:68, type: "building", subtype: "pipette", name: "150", filename: "upgrades",  cx:-180, cy:-120, required: 150, description:"Have 150 pipettes"},
	{id:69, type: "building", subtype: "pipette", name: "200", filename: "upgrades", cx:-240, cy:-120,  required: 200, description:"Have 200 pipettes"},
	{id:70, type: "building", subtype: "pipette", name: "250", filename: "upgrades", cx:-300, cy:-120,  required: 250, description:"Have 250 pipettes"},
	{id:71, type: "building", subtype: "pipette", name: "300", filename: "upgrades", cx:-360, cy:-120,  required: 300, description:"Have 300 pipettes"},
    {id:72, type: "building", subtype: "pipette", name: "400", filename: "upgrades", cx:-420, cy:-120, required: 400, description:"Have 400 pipettes"},
    
    //achievements for number of air dryers
    {id:73, type: "building", subtype: "airdryer", name: "1", filename: "upgrades", cx:0, cy:-180,  required: 1, description:"Have 1 air dryer"},
	{id:74, type: "building", subtype: "airdryer", name: "50", filename: "upgrades", cx:-60, cy:-180,  required: 50, description:"Have 50 air dryers"},
	{id:75, type: "building", subtype: "airdryer", name: "100", filename: "upgrades", cx:-120, cy:-180,  required: 100, description:"Have 100 air dryers"},
	{id:76, type: "building", subtype: "airdryer", name: "150", filename: "upgrades", cx:-180, cy:-180,  required: 150, description:"Have 150 air dryers"},
	{id:77, type: "building", subtype: "airdryer", name: "200", filename: "upgrades", cx:-240, cy:-180,  required: 200, description:"Have 200 air dryers"},
	{id:78, type: "building", subtype: "airdryer", name: "250", filename: "upgrades", cx:-300, cy:-180,  required: 250, description:"Have 250 air dryers"},
	{id:79, type: "building", subtype: "airdryer", name: "300", filename: "upgrades", cx:-360, cy:-180,  required: 300, description:"Have 300 air dryers"},
    {id:80, type: "building", subtype: "airdryer", name: "400", filename: "upgrades", cx:-240, cy:-180,  required: 400, description:"Have 400 air dryers"},
    
    //achievements for number of buckets
    {id:81, type: "building", subtype: "bucket", name: "1", filename: "upgrades", cx:0, cy:-240,  required: 1, description:"Have 1 bucket"},
	{id:82, type: "building", subtype: "bucket", name: "50", filename: "upgrades", cx:-60, cy:-240, required: 50, description:"Have 50 buckets"},
	{id:83, type: "building", subtype: "bucket", name: "100", filename: "upgrades", cx:-120, cy:-240,  required: 100, description:"Have 100 buckets"},
	{id:84, type: "building", subtype: "bucket", name: "150", filename: "upgrades", cx:-180, cy:-240,  required: 150, description:"Have 150 buckets"},
	{id:85, type: "building", subtype: "bucket", name: "200", filename: "upgrades", cx:-240, cy:-240,  required: 200, description:"Have 200 buckets"},
	{id:86, type: "building", subtype: "bucket", name: "250", filename: "upgrades", cx:-300, cy:-240,  required: 250, description:"Have 250 buckets"},
	{id:87, type: "building", subtype: "bucket", name: "300", filename: "upgrades", cx:-360, cy:-240,  required: 300, description:"Have 300 buckets"},
    {id:88, type: "building", subtype: "bucket", name: "400", filename: "upgrades", cx:-420, cy:-240,  required: 400, description:"Have 400 buckets"},
    
    //achievements for number of raindances
    {id:89, type: "building", subtype: "raindance", name: "1", filename: "upgrades", cx:0, cy:-300,  required: 1, description:"Have 1 raindance"},
	{id:90, type: "building", subtype: "raindance", name: "50", filename: "upgrades", cx:-60, cy:-300,  required: 50, description:"Have 50 raindances"},
	{id:91, type: "building", subtype: "raindance", name: "100", filename: "upgrades", cx:-120, cy:-300,  required: 100, description:"Have 100 raindances"},
	{id:92, type: "building", subtype: "raindance", name: "150", filename: "upgrades", cx:-180, cy:-300,  required: 150, description:"Have 150 raindances"},
	{id:93, type: "building", subtype: "raindance", name: "200", filename: "upgrades", cx:-240, cy:-300,  required: 200, description:"Have 200 raindances"},
	{id:94, type: "building", subtype: "raindance", name: "250", filename: "upgrades", cx:-300, cy:-300,  required: 250, description:"Have 250 raindances"},
	{id:95, type: "building", subtype: "raindance", name: "300", filename: "upgrades", cx:-360, cy:-300,  required: 300, description:"Have 300 raindances"},
    {id:96, type: "building", subtype: "raindance", name: "400", filename: "upgrades", cx:-420, cy:-300,  required: 400, description:"Have 400 raindances"},
    
    //achievements for number of faucets
    {id:97, type: "building", subtype: "faucet", name: "1", filename: "upgrades", cx:0, cy:-360,  required: 1, description:"Have 1 faucet"},
	{id:98, type: "building", subtype: "faucet", name: "50", filename: "upgrades", cx:-60, cy:-360,  required: 50, description:"Have 50 faucets"},
	{id:99, type: "building", subtype: "faucet", name: "100", filename: "upgrades", cx:-120, cy:-360,  required: 100, description:"Have 100 faucets"},
	{id:100, type: "building", subtype: "faucet", name: "150", filename: "upgrades", cx:-180, cy:-360,  required: 150, description:"Have 150 faucets"},
	{id:101, type: "building", subtype: "faucet", name: "200", filename: "upgrades", cx:-240, cy:-360,  required: 200, description:"Have 200 faucets"},
	{id:102, type: "building", subtype: "faucet", name: "250", filename: "upgrades", cx:-300, cy:-360,  required: 250, description:"Have 250 faucets"},
	{id:103, type: "building", subtype: "faucet", name: "300", filename: "upgrades", cx:-360, cy:-360,  required: 300, description:"Have 300 faucets"},
    {id:104, type: "building", subtype: "faucet", name: "400", filename: "upgrades", cx:-420, cy:-360,  required: 400, description:"Have 400 faucets"},
    
    //achievements for number of garden hoses
    {id:105, type: "building", subtype: "gardenhose", name: "1", filename: "upgrades", cx:0, cy:-420,  required: 1, description:"Have 1 garden hose"},
	{id:106, type: "building", subtype: "gardenhose", name: "50", filename: "upgrades", cx:-60, cy:-420,  required: 50, description:"Have 50 garden hoses"},
	{id:107, type: "building", subtype: "gardenhose", name: "100", filename: "upgrades", cx:-120, cy:-420,  required: 100, description:"Have 100 garden hoses"},
	{id:108, type: "building", subtype: "gardenhose", name: "150", filename: "upgrades", cx:-180, cy:-420,  required: 150, description:"Have 150 garden hoses"},
	{id:109, type: "building", subtype: "gardenhose", name: "200", filename: "upgrades", cx:-240, cy:-420,  required: 200, description:"Have 200 garden hoses"},
	{id:110, type: "building", subtype: "gardenhose", name: "250", filename: "upgrades", cx:-300, cy:-420,  required: 250, description:"Have 250 garden hoses"},
	{id:111, type: "building", subtype: "gardenhose", name: "300", filename: "upgrades", cx:-360, cy:-420,  required: 300, description:"Have 300 garden hoses"},
    {id:112, type: "building", subtype: "gardenhose", name: "400", filename: "upgrades", cx:-420, cy:-420,  required: 400, description:"Have 400 garden hoses"},
    
    //achievements for number of tricks
    {id:113, type: "building", subtype: "truck", name: "1", filename: "upgrades", cx:0, cy:-480,  required: 1, description:"Have 1 truck"},
	{id:114, type: "building", subtype: "truck", name: "50", filename: "upgrades", cx:-60, cy:-480,  required: 50, description:"Have 50 trucks"},
	{id:115, type: "building", subtype: "truck", name: "100", filename: "upgrades", cx:-120, cy:-480,  required: 100, description:"Have 100 trucks"},
	{id:116, type: "building", subtype: "truck", name: "150", filename: "upgrades", cx:-180, cy:-480,  required: 150, description:"Have 150 trucks"},
	{id:117, type: "building", subtype: "truck", name: "200", filename: "upgrades", cx:-240, cy:-480,  required: 200, description:"Have 200 trucks"},
	{id:118, type: "building", subtype: "truck", name: "250", filename: "upgrades", cx:-300, cy:-480,  required: 250, description:"Have 250 trucks"},
	{id:119, type: "building", subtype: "truck", name: "300", filename: "upgrades", cx:-360, cy:-480,  required: 300, description:"Have 300 trucks"},
    {id:120, type: "building", subtype: "truck", name: "400", filename: "upgrades", cx:-420, cy:-480,  required: 400, description:"Have 400 trucks"},
    
    //achievements for number of firehoses
    {id:121, type: "building", subtype: "firehose", name: "1", filename: "upgrades", cx:0, cy:-540,  required: 1, description:"Have 1 fire hose"},
	{id:122, type: "building", subtype: "firehose", name: "50", filename: "upgrades", cx:-60, cy:-540,  required: 50, description:"Have 50 fire hoses"},
	{id:123, type: "building", subtype: "firehose", name: "100", filename: "upgrades", cx:-120, cy:-540,  required: 100, description:"Have 100 fire hoses"},
	{id:124, type: "building", subtype: "firehose", name: "150", filename: "upgrades", cx:-180, cy:-540,  required: 150, description:"Have 150 fire hoses"},
	{id:125, type: "building", subtype: "firehose", name: "200", filename: "upgrades", cx:-240, cy:-540,  required: 200, description:"Have 200 fire hoses"},
	{id:126, type: "building", subtype: "firehose", name: "250", filename: "upgrades", cx:-300, cy:-540,  required: 250, description:"Have 250 fire hoses"},
	{id:127, type: "building", subtype: "firehose", name: "300", filename: "upgrades", cx:-360, cy:-540,  required: 300, description:"Have 300 fire hoses"},
    {id:128, type: "building", subtype: "firehose", name: "400", filename: "upgrades", cx:-420, cy:-540,  required: 400, description:"Have 400 fire hoses"},
    
    //achievements for number of ice mines
    {id:129, type: "building", subtype: "icemine", name: "1", filename: "upgrades", cx:0, cy:-600,  required: 1, description:"Have 1 ice mine"},
	{id:130, type: "building", subtype: "icemine", name: "50", filename: "upgrades", cx:-60, cy:-600,  required: 50, description:"Have 50 ice mines"},
	{id:131, type: "building", subtype: "icemine", name: "100", filename: "upgrades", cx:-120, cy:-600,  required: 100, description:"Have 100 ice mines"},
	{id:132, type: "building", subtype: "icemine", name: "150", filename: "upgrades", cx:-180, cy:-600,  required: 150, description:"Have 150 ice mines"},
	{id:133, type: "building", subtype: "icemine", name: "200", filename: "upgrades", cx:-240, cy:-600,  required: 200, description:"Have 200 ice mines"},
	{id:134, type: "building", subtype: "icemine", name: "250", filename: "upgrades", cx:-300, cy:-600,  required: 250, description:"Have 250 ice mines"},
	{id:135, type: "building", subtype: "icemine", name: "300", filename: "upgrades", cx:-360, cy:-600,  required: 300, description:"Have 300 ice mines"},
    {id:136, type: "building", subtype: "icemine", name: "400", filename: "upgrades", cx:-420, cy:-600,  required: 400, description:"Have 400 ice mines"},
    
    //achievements for number of spaceships
    {id:137, type: "building", subtype: "spaceship", name: "1", filename: "upgrades", cx:0, cy:-660,  required: 1, description:"Have 1 spaceship"},
	{id:138, type: "building", subtype: "spaceship", name: "50", filename: "upgrades", cx:-60, cy:-660,  required: 50, description:"Have 50 spaceships"},
	{id:139, type: "building", subtype: "spaceship", name: "100", filename: "upgrades", cx:-120, cy:-660,  required: 100, description:"Have 100 spaceships"},
	{id:140, type: "building", subtype: "spaceship", name: "150", filename: "upgrades", cx:-180, cy:-660,  required: 150, description:"Have 150 spaceships"},
	{id:141, type: "building", subtype: "spaceship", name: "200", filename: "upgrades", cx:-240, cy:-660,  required: 200, description:"Have 200 spaceships"},
	{id:142, type: "building", subtype: "spaceship", name: "250", filename: "upgrades", cx:-300, cy:-660,  required: 250, description:"Have 250 spaceships"},
	{id:143, type: "building", subtype: "spaceship", name: "300", filename: "upgrades", cx:-360, cy:-660,  required: 300, description:"Have 300 spaceships"},
    {id:144, type: "building", subtype: "spaceship", name: "400", filename: "upgrades", cx:-420, cy:-660,  required: 400, description:"Have 400 spaceships"},
    
    //achievements for number of wormholes
    {id:145, type: "building", subtype: "wormhole", name: "1", filename: "upgrades", cx:0, cy:-720,  required: 1, description:"Have 1 wormhole"},
	{id:146, type: "building", subtype: "wormhole", name: "50", filename: "upgrades", cx:-60, cy:-720,  required: 50, description:"Have 50 wormholes"},
	{id:147, type: "building", subtype: "wormhole", name: "100", filename: "upgrades", cx:-120, cy:-720,  required: 100, description:"Have 100 wormholes"},
	{id:148, type: "building", subtype: "wormhole", name: "150", filename: "upgrades", cx:-180, cy:-720,  required: 150, description:"Have 150 wormholes"},
	{id:149, type: "building", subtype: "wormhole", name: "200", filename: "upgrades", cx:-240, cy:-720,  required: 200, description:"Have 200 wormholes"},
	{id:150, type: "building", subtype: "wormhole", name: "250", filename: "upgrades", cx:-300, cy:-720,  required: 250, description:"Have 250 wormholes"},
	{id:151, type: "building", subtype: "wormhole", name: "300", filename: "upgrades", cx:-360, cy:-720,  required: 300, description:"Have 300 wormholes"},
    {id:152, type: "building", subtype: "wormhole", name: "400", filename: "upgrades", cx:-420, cy:-720,  required: 400, description:"Have 400 wormholes"},
    
    //achievements for number of rivers
    {id:153, type: "building", subtype: "river", name: "1", filename: "upgrades", cx:0, cy:-780,  required: 1, description:"Have 1 river"},
	{id:154, type: "building", subtype: "river", name: "50", filename: "upgrades", cx:-60, cy:-780,  required: 50, description:"Have 50 rivers"},
	{id:155, type: "building", subtype: "river", name: "100", filename: "upgrades", cx:-120, cy:-780,  required: 100, description:"Have 100 rivers"},
	{id:156, type: "building", subtype: "river", name: "150", filename: "upgrades", cx:-180, cy:-780,  required: 150, description:"Have 150 rivers"},
	{id:157, type: "building", subtype: "river", name: "200", filename: "upgrades", cx:-240, cy:-780,  required: 200, description:"Have 200 rivers"},
	{id:158, type: "building", subtype: "river", name: "250", filename: "upgrades", cx:-300, cy:-780,  required: 250, description:"Have 250 rivers"},
	{id:159, type: "building", subtype: "river", name: "300", filename: "upgrades", cx:-360, cy:-780,  required: 300, description:"Have 300 rivers"},
    {id:160, type: "building", subtype: "river", name: "400", filename: "upgrades", cx:-420, cy:-780,  required: 400, description:"Have 400 rivers"},
    
    //achievements for number of colliders
    {id:161, type: "building", subtype: "collider", name: "1", filename: "upgrades", cx:0, cy:-840,  required: 1, description:"Have 1 large H-O collider"},
	{id:162, type: "building", subtype: "collider", name: "50", filename: "upgrades", cx:-60, cy:-840,  required: 50, description:"Have 50 large H-O colliders"},
	{id:163, type: "building", subtype: "collider", name: "100", filename: "upgrades", cx:-120, cy:-840,  required: 100, description:"Have 100 large H-O colliders"},
	{id:164, type: "building", subtype: "collider", name: "150", filename: "upgrades", cx:-180, cy:-840,  required: 150, description:"Have 150 large H-O colliders"},
	{id:165, type: "building", subtype: "collider", name: "200", filename: "upgrades", cx:-240, cy:-840,  required: 200, description:"Have 200 large H-O colliders"},
	{id:166, type: "building", subtype: "collider", name: "250", filename: "upgrades", cx:-300, cy:-840,  required: 250, description:"Have 250 large H-O colliders"},
	{id:167, type: "building", subtype: "collider", name: "300", filename: "upgrades", cx:-360, cy:-840,  required: 300, description:"Have 300 large H-O colliders"},
    {id:168, type: "building", subtype: "collider", name: "400", filename: "upgrades", cx:-420, cy:-840,  required: 400, description:"Have 400 large H-O colliders"},
    
    //achievements for total number of builings/helpers
    {id:169, type: "totalbuildings", name: "Amateur builder", filename: "achievements", cx:-420, cy:-120,  required:100 , description:"Have 100 buildings in total."},
	{id:170, type: "totalbuildings", name: "Contractor", filename: "achievements", cx:-480, cy:0,  required:500 , description:"Have 500 buildings in total."},
	{id:171, type: "totalbuildings", name: "City developer", filename: "achievements", cx:-480, cy:-60,  required:1000 , description:"Have 1000 buildings in total."},
    {id:172, type: "totalbuildings", name: "Building God", filename: "achievements", cx:-480, cy:-120,  required:1500 , description:"Have 1500 buildings in total."},
    
    //achievements for production of one type of building/helper
    {id:173, type: "buildingprod", name: "Hand instructor", filename: "upgrades", cx:0, cy:-60,  required: 10000000000000000000, other: 0, description:"Make 10 quintillion drops from Helping hands alone."},
    {id:174, type: "buildingprod", name: "Hand manager", filename: "upgrades", cx:-300, cy:-60,  required: 10000000000000000000000, other: 0, description:"Make 10 sextillion drops from Helping hands alone."},
	{id:175, type: "buildingprod", name: "Pipette instructor", filename: "upgrades", cx:0, cy:-120,  required: 10000000000000000000, other: 1, description:"Make 10 quintillion drops from pipettes alone."},
	{id:176, type: "buildingprod", name: "Pipette manager", filename: "upgrades", cx:-300, cy:-120,  required: 10000000000000000000000, other: 1, description:"Make 10 quintillion drops from pipettes alone."},
	{id:177, type: "buildingprod", name: "Air dryer instructor", filename: "upgrades", cx:0, cy:-180,  required: 10000000000000, other: 2, description:"Make 10 trillion drops from air dryers alone."},
	{id:178, type: "buildingprod", name: "Air Dryer manager", filename: "upgrades", cx:-300, cy:-180,  required: 10000000000000000, other: 2, description:"Make 10 quadrillion drops from air dryers alone."},
	{id:179, type: "buildingprod", name: "Bucket instructor", filename: "upgrades", cx:0, cy:-240,  required: 100000000000000, other: 3, description:"Make 100 trillion drops from buckets alone."},
	{id:180, type: "buildingprod", name: "Bucket manager", filename: "upgrades", cx:-300, cy:-240,  required: 100000000000000000, other: 3, description:"Make 100 quadrillion drops from buckets alone."},
	{id:181, type: "buildingprod", name: "Raindance instructor", filename: "upgrades", cx:0, cy:-300,  required: 1000000000000000, other: 4, description:"Make 1 quadrillion drops from raindances alone."},
	{id:182, type: "buildingprod", name: "Raindance manager", filename: "upgrades", cx:-300, cy:-300,  required: 1000000000000000000, other: 4, description:"Make 1 quintillion drops from raindances alone."},
	{id:183, type: "buildingprod", name: "Faucet instructor", filename: "upgrades", cx:0, cy:-360,  required: 10000000000000000, other: 5, description:"Make 10 quadrillion drops from faucets alone."},
	{id:184, type: "buildingprod", name: "Faucet manager", filename: "upgrades", cx:-300, cy:-360,  required: 10000000000000000000, other: 5, description:"Make 10 quintillion drops from faucets alone."},
	{id:185, type: "buildingprod", name: "Garden hose instructor", filename: "upgrades", cx:0, cy:-420,  required: 100000000000000000, other: 6, description:"Make 100 quadrillion drops from garden hoses alone."},
	{id:186, type: "buildingprod", name: "Garden hose manager", filename: "upgrades", cx:-300, cy:-420,  required: 100000000000000000000, other: 6, description:"Make 100 quintillion drops from garden hoses alone."},
	{id:187, type: "buildingprod", name: "Truck instructor", filename: "upgrades", cx:0, cy:-480,  required: 1000000000000000000, other: 7, description:"Make 1 quintillion drops from trucks alone."},
	{id:188, type: "buildingprod", name: "Truck manager", filename: "upgrades", cx:-300, cy:-480,  required: 1000000000000000000000, other: 7, description:"Make 1 sextillion drops from trucks alone."},
	{id:189, type: "buildingprod", name: "Fire hose instructor", filename: "upgrades", cx:0, cy:-540,  required: 10000000000000000000, other: 8, description:"Make 10 quintillion drops from fire hoses alone."},
	{id:190, type: "buildingprod", name: "Fire hose manager", filename: "upgrades", cx:-300, cy:-540,  required: 10000000000000000000000, other: 8, description:"Make 10 sextillion drops from fire hoses alone."},
	{id:191, type: "buildingprod", name: "Ice mine instructor", filename: "upgrades", cx:0, cy:-600,  required: 100000000000000000000, other: 9, description:"Make 100 quintillion drops from ice mines alone."},
	{id:192, type: "buildingprod", name: "Ice mine manager", filename: "upgrades", cx:-300, cy:-600,  required: 100000000000000000000000, other: 9, description:"Make 100 sextillion drops from ice mines alone."},
	{id:193, type: "buildingprod", name: "Spaceship instructor", filename: "upgrades", cx:0, cy:-660,  required: 1000000000000000000000, other: 10, description:"Make 1 sextillion drops from spaceships alone."},
	{id:194, type: "buildingprod", name: "Spaceship manager", filename: "upgrades", cx:-300, cy:-660,  required: 1000000000000000000000000, other: 10, description:"Make 1 septillion drops from spaceships alone."},
	{id:195, type: "buildingprod", name: "Wormhole instructor", filename: "upgrades", cx:0, cy:-720,  required: 10000000000000000000000, other: 11, description:"Make 10 sextillion drops from wormholes alone."},
	{id:196, type: "buildingprod", name: "Wormhole manager", filename: "upgrades", cx:-300, cy:-720,  required: 10000000000000000000000000, other: 11, description:"Make 10 septillion drops from wormholes alone."},
	{id:197, type: "buildingprod", name: "River instructor", filename: "upgrades", cx:0, cy:-780,  required: 100000000000000000000000, other: 12, description:"Make 100 sextillion drops from rivers alone."},
	{id:198, type: "buildingprod", name: "River manager", filename: "upgrades", cx:-300, cy:-780,  required: 100000000000000000000000000, other: 12, description:"Make 100 septillion drops from rivers alone."},
	{id:199, type: "buildingprod", name: "Collider instructor", filename: "upgrades", cx:0, cy:-840,  required: 1000000000000000000000000, other: 13, description:"Make 1 septillion drops from colliders alone."},
    {id:200, type: "buildingprod", name: "Collider manager", filename: "upgrades", cx:-300, cy:-840,  required: 1000000000000000000000000000, other: 13, description:"Make 1 octillion drops from colliders alone."},
    
    //achievements for total number of upgrades
    {id:201, type: "totalupgrades", name: "Upgrading started", filename: "upgrades", cx:-0, cy:-1380,  required: 1, other: 0, description:"Have one upgrade."},
	{id:202, type: "totalupgrades", name: "Enhance further!", filename: "upgrades", cx:-60, cy:-1380,  required: 20, other: 0, description:"Have 20 upgrades."},
	{id:203, type: "totalupgrades", name: "Upgrading has become quite a hobby.", filename: "upgrades", cx:-120, cy:-1380,  required: 50, other: 0, description:"Have 50 upgrades."},
	{id:204, type: "totalupgrades", name: "Haven't you got enough upgrades?", filename: "upgrades", cx:-180, cy:-1380,  required: 100, other: 0, description:"Have 100 upgrades."},
	{id:205, type: "totalupgrades", name: "Professional upgrader", filename: "upgrades", cx:-240, cy:-1380,  required: 150, other: 0, description:"Have 150 upgrades."},
    {id:206, type: "totalupgrades", name: "Upgrading God", filename: "upgrades", cx:-300, cy:-1380,  required: 200, other: 0, description:"Have 200 upgrades."},
    
    //achievements for total number of cloudclicks
    {id:207, type: "totalcloudclicks", name: "You clicked on a cloud!", filename: "upgrades", cx:-480, cy:-300,  required: 1, other: 0, description:"Click on one cloud."},
	{id:208, type: "totalcloudclicks", name: "Keep clicking clouds!", filename: "upgrades", cx:-420, cy:-1320,  required: 10, other: 0, description:"Click on ten clouds."},
	{id:209, type: "totalcloudclicks", name: "A century of clouds", filename: "upgrades", cx:-480, cy:-1320,  required: 100, other: 0, description:"Click on 100 clouds."},
	{id:210, type: "totalcloudclicks", name: "Wow, a thousand clouds!", filename: "upgrades", cx:-360, cy:-1380,  required: 1000, other: 0, description:"Click on 1000 clouds."},
	{id:211, type: "totalcloudclicks", name: "Where did all those clouds come from?", filename: "upgrades", cx:-420, cy:-1380,  required: 5000, other: 0, description:"Click on 5000 clouds."},
	{id:212, type: "totalcloudclicks", name: "How long are you playing this game?!", filename: "upgrades", cx:-480, cy:-1380,  required: 10000, other: 0, description:"Click on 10,000 clouds."}
];

// Aliens
var Alien = function(options) {
	return $.extend({
		
		active:0,
		dropsDrained:0,
		clicks:0,
		timer: undefined,
		clickActive:0,
        moving:0,
        popup:0,
		
		drain: function(diff){
            var self=this;
			if (this.active==1){
                    var aDrain = (Game.dps/100*Game.alienDrain)/1000*diff;
                    
					this.dropsDrained += aDrain;
                    Game.totalDropsDrained += aDrain;

                    if(self.popup==1){
                        Game.popupAlien.html(Beautify(Math.floor(self.dropsDrained))+' drops');		
                    }
                    	
			}
        },
        
        drainOffline: function(diff){
            var self=this;
			if (this.active==1){
                var aDrain = (Game.dps/100*Game.alienDrain)/1000*diff;
                this.dropsDrained += aDrain/100*Game.offlineProductionPercentage;
                Game.totalDropsDrained += aDrain/100*Game.offlineProductionPercentage;
                if(self.popup==1){
                    Game.popupAlien.html(Beautify(Math.floor(self.dropsDrained))+' drops');		
                }
                return aDrain;
            }
        },
		
		click: function(){
			var self = this;
			this.clicks++;
			setTimeout(function(){self.clicks=0;}, 1500);
			if((this.clicks==3)){
				if (this.clickActive==0){
					this.clickActive=1;
					
					this.moving=0;
					if (this.active==1){
						Game.alienNumber--;
						if (this.dropsDrained>0){
							Game.dropsInBank += this.dropsDrained; if(Game.dropsInBank<0){Game.dropsInBank=0;}
							Game.totalDropsThisExperienceLevel += this.dropsDrained;
							Game.totalDropsEver += this.dropsDrained; 
							Game._makeNotice("alienSmall", "Alien popped", "You got " + Beautify(Math.floor(this.dropsDrained)) + " back from the alien.",0,0,0);
						}
						this.dropsDrained = 0;
					}
                    this.active = 0;
                    
                    $.each(Game.buildings, function(i, _building) {
                        _building.calculateCurrentProduction();
                    });
                    Game._calculateDps();
                
					var starttxt = 'translate('+this.startpos+'px, -411px) rotate(0.0deg)'; 

					this.div.fadeOut("slow");
					this.div.removeClass(this.hover);
						this.div.css({'position':'absolute', 'margin':'auto', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0','z-index':'2005', 'width':'90px', 'height':'222px', 'background-image':'url(images/alien.png)', 'transform': starttxt, 'transform-origin': '45px 222px' });

                    Game.aliensPopList.push(this);
                    Game.aliensActiveList = $.grep(Game.aliensActiveList, function(value) {
                        return value != self;
                      });
					this.clicks=0;
                    clearTimeout(this.timer);
                    
					setTimeout(function(){self.clickActive=0;},1000);
				}
			}
		},
		
		init: function() {
			var self = this;
			this.dropsDrained = 0;
			this.div = $("<div class='alien no-zoom'></div>").on('click', function() {
									
									self.click();
								}).hover(function() {
                                    addMouseListener();
                                    self.popup=1;
                                    Game.popupAlien.html(Beautify(Math.floor(self.dropsDrained))+' drops');		
						            Game.popupAlien.show();
								
								}, function() {
                                    // on mouseout
                                    removeMouseListener();
                                   self.popup=0;
                                    Game.popupAlien.hide();
								});
			this.div.css({'cursor':'pointer'});
			Game.alienContainer.append(this.div);
			return this;
		}				
	}, options);
};

var KnowhowUpgrade = function(options) {
	return $.extend({
		button: undefined, 
		active:0,
		shown:0,
		bought:0,
		
		check: function() {
			var self = this;
			var pos = this.cx + "px " + this.cy + "px";
			if (this.bought==0){
				
				var r1 = 0;
				var r2 = 0;
				if(this.req1!=0){
					var num = this.req1-1;
					r1 = Game.knowhowUpgrades[num].bought; 
				}else {
					r1=1;
				}
				
				if(this.req2!=0){
					var num = this.req2-1;
					r2 = Game.knowhowUpgrades[num].bought;
				}else {
					r2=1;
				}
				
				if((r1==1)&&(r2==1)){
					this.shown=1;
				}
				
				if (this.shown==1){
					if (this.cost <= Game.experienceToSpend){
						this.active = 1;
						this.button.css({'-moz-opacity':'.8', 'opacity':'.8', 'filter':'alpha(opacity=80)','border-color':'#ffffff'});
						this.changeopac(0.8,80);
					}else {
						this.active = 0;
						this.button.css({'-moz-opacity':'0.55', 'opacity':'.55', 'filter':'alpha(opacity=55)'});
						this.changeopac(0.55, 55);
					}
				}
			}else {
                var filen = 'url("images/'+this.filename+'.png")';
                this.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'background-image':filen, 'background-position': pos, 'border-color':'#00dd00'});
                this.changeopac(1, 100);
			}	
		},
		
		changeopac: function(x,y){
			var ytxt = "alpha(opacity="+y+")";
			if(this.id>1){
				if(this.id==5){
					Game.arrowsArray[3][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[3][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}else if(this.id==20){
					Game.arrowsArray[18][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[18][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}else if (this.id==21){
					Game.arrowsArray[19][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[19][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}else if (this.id==40){
					Game.arrowsArray[38][0].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
					Game.arrowsArray[38][1].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}
				else {
					Game.arrowsArray[this.id-2].css({'-moz-opacity':x, 'opacity':x, 'filter':ytxt});
				}
			}
		},
		
		buy: function() {
            if ((this.active==1)&&(this.bought==0)){
                Game.knowhowBackButton.prop('disabled', true);
                Game.experienceToSpend -= this.cost;
                Game.knowhowscreenExpStats.text(Beautify(Game.experienceToSpend));
                Game.experiencePointsToSpendStats.text(Beautify(Game.experienceToSpend));
                this.button.css({'-moz-opacity':'1', 'opacity':'1', 'filter':'alpha(opacity=100)', 'border-color':'#00dd00'});
                this.bought = 1;
                Game.boughtKnowhowUpgrades.push(this);
                if (this.type=="unlock"){
					Game.useKnowhow = 1;
                }else if(this.type=="offline"){
					if(this.id==23){
						Game.offlineProductionPercentage = 40;
						Game.maximumTimeForOfflineProduction = 86400000;
					}else if(this.id==24){
						Game.maximumTimeForOfflineProduction = 129600000;
					}else if(this.id==25){
						Game.offlineProductionPercentage = 50;
					}else if(this.id==26){
						Game.maximumTimeForOfflineProduction = 172800000;
					}else if(this.id==27){
						Game.offlineProductionPercentage = 55;
					}else if(this.id==28){
						Game.maximumTimeForOfflineProduction = 216000000;
					}else if(this.id==29){
						Game.offlineProductionPercentage = 60;
					}else if(this.id==30){
						Game.maximumTimeForOfflineProduction = 259200000;
					}else if(this.id==31){
						Game.offlineProductionPercentage = 65;
					}else if(this.id==32){
						Game.maximumTimeForOfflineProduction = 302400000;
					}else if(this.id==33){
						Game.offlineProductionPercentage = 70;
					}else if(this.id==34){
						Game.maximumTimeForOfflineProduction = 345600000;
					}else if(this.id==35){
						Game.offlineProductionPercentage = 75;
					}else if(this.id==36){
						Game.maximumTimeForOfflineProduction = 432000000;
					}else if(this.id==37){
						Game.offlineProductionPercentage = 80;
					}else if(this.id==38){
						Game.maximumTimeForOfflineProduction = 518400000;
					}else if(this.id==39){
						Game.offlineProductionPercentage = 85;
					}else if(this.id==40){
						Game.offlineProductionPercentage = 95;
						Game.maximumTimeForOfflineProduction = 604800000;
					}
				}else if (this.type=="alien"){	
					if (this.id==12){
						Game.alienContactDuration = Game.alienContactDuration/10;
					}
					else if (this.id==13){
						Game.alienStart = Game.alienStart/4;
						Game.alienEnd = Game.alienEnd/4;
					}
					else if (this.id==14||this.other==15){
						Game.alienDrainPerc += 1;
					}
				}else if (this.type=="cloud"){
					if (this.id==8||this.id==9){
						Game.cloudStart = Game.cloudStart - (Game.cloudStart*0.05);
						Game.cloudEnd = Game.cloudEnd - (Game.cloudEnd*0.05);
					}
					else if(this.id==10||this.id==11){
						Game.stormDuration = Game.stormDuration*1.05;
						Game.clickStormDuration = Game.clickStormDuration*1.05;
						Game.turboDuration = Game.turboDuration * 1.05;
						Game.wrathDuration = Game.wrathDuration * 1.05;
						Game.buildingSpecialsDuration = Game.buildingSpecialsDuration *2;
					}
				}else if(this.type=="alientech"){
					Game.alienTechStrength++;
                }else if(this.type=="weatherstation"){
					Game.weatherstationImage.show();
					Game.weatherstationLevel = 1;
                }
               
                Game._checkKnowhowScreen();
            }
		},
		
		init: function() {
			var self = this;
            var pos = this.cx + "px " + this.cy + "px";
            this.button = $("<button class='knowhowupgradebutton'></button>").css({'background':'transparent url("images/question.png") no-repeat center center'})
                            .hover(function() {
                                    addMouseListener();
                                    $('#popupk').html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:url(images/' + self.filename + '.png); background-position:'+pos+'">&nbsp;</div></td><td><p class="popovertitle">'+self.name+'</p><p>Cost: '+Beautify(Math.floor(self.cost))+' experience points</p><p>'+self.description+'</p></td></tr></table>').show();
                                    $('#popupk').show();
                                }, function() {
                                // on mouseout
                                    removeMouseListener()
                                    $('#popupk').hide();
                                })
                                
                            .click(function() {
                                self.buy();
                            });

                var apdiv = "#khupgrade" + this.id; 
                $(apdiv).append(this.button);
                
                var filen = 'url("images/'+this.filename+'.png")';
                this.button.css({'-moz-opacity':'0.55', 'opacity':'.55', 'filter':'alpha(opacity=55)', 'background-image':filen, 'background-position': pos});
                this.changeopac(0.55, 55);
                        

                this.check();
                
                return this;
            }
        }, options);
};

var _knowhowupgrades = [
	{id:1, type:"unlock", name:"Unlock", filename: "upgrades", cx:-480 , cy:-360, cost:1, req1:0, req2:0, description:"Unlock knowhow"},
	
	{id:2, type:"life", name:"Higher lifeforms: Seahorses", filename: "upgrades", cx:-240, cy:-1140, cost:30, req1:1, req2:0, description:"Get higher life forms: seahorses"},
	{id:3, type:"life", name:"Higher lifeforms: Crustaceans", filename: "upgrades", cx:-60, cy:-1200, cost:40, req1:2, req2:0, description:"Get higher life forms: crustaceans"},
	{id:4, type:"life", name:"Higher lifeforms: Octopi", filename: "upgrades", cx:-480, cy:-1200, cost:40, req1:2, req2:0, description:"Get higher life forms: octopi"},
	{id:5, type:"life", name:"Higher lifeforms: Fish", filename: "upgrades", cx:-60, cy:-1260, cost:100, req1:3, req2:4, description:"Get higher life forms: fish"},
	{id:6, type:"life", name:"Higher lifeforms: Tropical Fish", filename: "upgrades", cx:-480, cy:-1260, cost:500, req1:5, req2:0, description:"Get higher life forms: tropical fish"},
	{id:7, type:"life", name:"Higher lifeforms: Scary Fish", filename: "upgrades", cx:-180, cy:-1320, cost:1000, req1:6, req2:0, description:"Get higher life forms: scary fish"},
	
	{id:8, type:"cloud", name:"More Clouds", filename: "CloudSmall", cx:0, cy:0, cost:2000, req1:1, req2:0, description:"Clouds appear 5% more often"},
	{id:9, type:"cloud", name:"Even More Clouds", filename: "CloudSmall", cx:0, cy:0, cost:3000, req1:8, req2:0, description:"Clouds appear 5% more often"},
	{id:10, type:"cloud", name:"Longer Storms", filename: "CloudSmall", cx:0, cy:0, cost:4000, req1:9, req2:0, description:"Cloudeffects last 5% longer"},
	{id:11, type:"cloud", name:"Even Longer Storms", filename: "CloudSmall", cx:0, cy:0, cost:5000, req1:10, req2:0, description:"Cloudeffects last 5% longer"},
	
	{id:12, type:"alien", name:"Faster Diplomacy", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:1, req2:0, description:"Meetings with aliens happen 10 times faster."},
	{id:13, type:"alien", name:"Faster Aliens", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:12, req2:0, description:"Aliens show up four times as fast."},
	{id:14, type:"alien", name:"More Alien Drain", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:13, req2:0, description:"Aliens drain 1% more drops per second."},
	{id:15, type:"alien", name:"Even More Alien Drain", filename: "alienSmall", cx:0, cy:0, cost:5000, req1:14, req2:0, description:"Aliens drain 1% more drops per second."},
	
	{id:16, type:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1100, req1:1, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},
	{id:17, type:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1200, req1:16, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},
	{id:18, type:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1300, req1:17, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},
	{id:19, type:"alientech", name:"Alien technology gets stronger", filename: "upgrades", cx:-480, cy:-600, cost:1400, req1:18, req2:0, description:"Alien technology works better and gives 1% more boost to helpers."},

	{id:20, type:"collaboration", name:"Together we are stronger, tier I", filename: "upgrades", cx:-480, cy:-780, cost:1500, req1:5, req2:18, description:"Unlocks extra upgrades that let helpers work together and become stronger. Tier I"},
	{id:21, type:"collaboration", name:"Together we are stronger, tier II", filename: "upgrades", cx:-480, cy:-840, cost:1500, req1:6, req2:19, description:"Unlocks extra upgrades that let helpers work together and become stronger. Tier II"},
	
	{id:22, type:"poseidon", name:"Poseidon, God of the seas", filename: "poseidonsmall", cx:0, cy:0, cost:15, req1:1, req2:0, description:"Maybe Poseidon, God of the seas can help us?"},
	
	{id:23, type:"offline", name:"Offline progress", filename: "clock", cx:-4, cy:-4, cost:1, req1:1, req2:0, description:"Offline progress: you now keep making drops at a rate of 40% of your cps for 24 hours while the game is closed. If aliens are draining drops they will also drain at a rate of 40% of their normal rate for 24 hours."},
	{id:24, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:15, req1:23, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 36 hours while the game is closed."},
	{id:25, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:15, req1:23, req2:0, description:"Offline progress: you now keep making drops at a rate of 50% while the game is closed."},
	{id:26, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:50, req1:24, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 48 hours while the game is closed."},
	{id:27, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:50, req1:25, req2:0, description:"Offline progress: you now keep making drops at a rate of 55% while the game is closed."},
	{id:28, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:500, req1:26, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 60 hours while the game is closed."},
	{id:29, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:500, req1:27, req2:0, description:"Offline progress: you now keep making drops at a rate of 60% while the game is closed."},
	{id:30, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:2500, req1:28, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 72 hours while the game is closed."},
	{id:31, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:2500, req1:29, req2:0, description:"Offline progress: you now keep making drops at a rate of 65% while the game is closed."},
	{id:32, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:10000, req1:30, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 84 hours while the game is closed."},
	{id:33, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:10000, req1:31, req2:0, description:"Offline progress: you now keep making drops at a rate of 70% while the game is closed."},
	{id:34, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:100000, req1:32, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 4 days while the game is closed."},
	{id:35, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:100000, req1:33, req2:0, description:"Offline progress: you now keep making drops at a rate of 75% while the game is closed."},
	{id:36, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:500000, req1:34, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 5 days while the game is closed."},
	{id:37, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:500000, req1:35, req2:0, description:"Offline progress: you now keep making drops at a rate of 80% while the game is closed."},
	{id:38, type:"offline", name:"Offline progress", filename: "clockduration", cx:-4, cy:-4, cost:1000000, req1:36, req2:0, description:"Offline progress: you now keep making drops and aliens keep draining for 6 days while the game is closed."},
	{id:39, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:1000000, req1:37, req2:0, description:"Offline progress: you now keep making drops at a rate of 85% while the game is closed."},
	{id:40, type:"offline", name:"Offline progress", filename: "clockperc", cx:-4, cy:-4, cost:5000000, req1:38, req2:39, description:"Offline progress: you now keep making drops at a rate of 95% of your cps for 7 days while the game is closed."},
	
	{id:41, type:"weatherstation", name:"Weatherstation", filename: "weatherstation", cx:0, cy:0, cost:20, req1:1, req2:0, description:"A weatherstation can help you with clouds."},
	
];

//prayers

var Prayer = function(options) {
	return $.extend({
		button: undefined,
		unlocked: 0,
		selected: 0,
		border:0,
		
		check: function(){
			if((Game.sacrificeLevel-4)>=this.id){
				this.button.show();
			}else if (this.id==0){
				this.button.show();
			}
			if ((this.selected==1)&&(this.border!=1)){
				this.button.css({'border-color':'#00ff00'});
				this.border=1;
			}else if ((this.selected==0)&&(this.border!=0)){
				this.button.css({'border-color':'#ffffff'});
				this.border=0;
			}
		},
		
		select: function(){
            if(Game.prayerToSelect==1){
                if(this.id!=Game.firstSelectedPrayerId){
                    if((this.id!=Game.secondSelectedPrayerId)||(this.id==0)){
                        var prayerToDeselect = Game.prayers.find(x => x.id === Game.firstSelectedPrayerId);
                        prayerToDeselect.selected = 0;
                        Game._deactivatePrayer(Game.firstSelectedPrayerId);
                        prayerToDeselect.button.removeClass('prayerSelected');
                        this.selected = 1;
                        if(this.id!=0){
                            this.button.addClass('prayerSelected');
                        }
                        Game.firstSelectedPrayerId = this.id;
                        Game._activatePrayer(Game.firstSelectedPrayerId);
                        Game._prayerSelected(this.id);
                    }
                }
            }else{
                if(this.id!=Game.secondSelectedPrayerId){
                    if((this.id!=Game.firstSelectedPrayerId)||(this.id==0)){
                        var prayerToDeselect = Game.prayers.find(x => x.id === Game.secondSelectedPrayerId);
                        prayerToDeselect.selected = 0;
                        Game._deactivatePrayer(Game.secondSelectedPrayerId);
                        prayerToDeselect.button.removeClass('prayerSelected');
                        this.selected = 1;
                        if(this.id!=0){
                            this.button.addClass('prayerSelected');
                        }
                        Game.secondSelectedPrayerId = this.id;
                        Game._activatePrayer(Game.secondSelectedPrayerId);
                        Game._prayerSelected(this.id);
                    }
                }
            }
		},
		
		init: function() {
			var self = this;
			
            var pos = this.cx + "px " + this.cy + "px";
            var filen = 'url(images/' + this.filename + '.png)';
            this.button = $("<button class='prayer' id='" + this.name + "' title='" + this.name + "' ><div style='font-size:1em;'>&nbsp;</div></button>").css({'background-image':filen, 'background-position':pos })
                            .hover(function(){
                                addMouseListener();
                                Game.popupp.html('<table><tr><td><div style="border:2px solid white; border-radius:4px; width:60px; height:60px; background-image:'+filen+'; background-position:'+pos+'">&nbsp;</div></td><td><p class="popuptitle">'+self.name+'</p><p>'+self.description+'</p></td></tr></table>');		
                                Game.popupp.show();
                            },function(){
                                removeMouseListener();
                                Game.popupp.hide();
                            }).click(function(){
                                self.select();
                            });
        
			
			this.button.hide();
			
			Game.prayerSelectDiv.append(this.button);
			
			this.check();
			return this;
		}
		
	}, options);
};

var _prayers = [
	{id:0, name:"none", filename:"prayers", cx:-420, cy:0,description:"Select no prayer."},
	{id:1, name:"Brainpower", filename:"prayers", cx:0, cy:0, description:"Crazy scientists are 10% more powerful."},
	{id:2, name:"Clickpower", filename:"prayers", cx:-60, cy:0, description:"50% more clicking power."},
	{id:3, name:"Pipettelicious", filename:"prayers", cx:-120, cy:0, description:"Each pipette is 2% more powerful for every helper you have"},
	{id:4, name:"Turbo", filename:"prayers", cx:-180, cy:0, description:"Chance of drops per second x30 for 60 seconds when you click on a cloud."},
	{id:5, name:"Brainwaves", filename:"prayers", cx:-240, cy:0, description:"Crazy scientists are 20% more powerful."},
	{id:6, name:"Discount upgrade", filename:"prayers", cx:-300, cy:0, description:"All upgrades are 5% cheaper."},
	{id:7, name:"Discount helper", filename:"prayers", cx:-360, cy:0, description:"All helpers are 5% cheaper."},
	{id:8, name:"Bonus", filename:"prayers", cx:0, cy:-60, description:"10% bonus drops per second"},
	{id:9, name:"Bad weather", filename:"prayers", cx:-60, cy:-60, description:"Clouds show up 50% more often."},
	{id:10, name:"Poseidon Wrath", filename:"prayers", cx:-120, cy:-60, description:"Chance of clicking power times 1111 for 11 seconds when you click on a cloud."},
	{id:11, name:"Heavy rain", filename:"prayers", cx:-180, cy:-60, description:"Clouds give 50% more drops."},
	{id:12, name:"Big bonus", filename:"prayers", cx:-240, cy:-60, description:"20% bonus drops per second."},
	{id:13, name:"Braingrowth", filename:"prayers", cx:-300, cy:-60, description:"Crazy scientists are 40% more powerful"},
	{id:14, name:"Enormous bonus", filename:"prayers", cx:-360, cy:-60, description:"60% bonus drops per second."},
	{id:15, name:"Double", filename:"prayers", cx:-420, cy:-60, description:"Double your drops per second."},
];

// start game
Game.init(_buildings, _upgrades, _achievements, _knowhowupgrades);


//Beautify numbers shown on screen
function Beautify(value){
	if (Game.numberOption == 0){
		var power = [
				'',
				'',
				' million',
				' billion',
				' trillion',
				' quadrillion',
				' quintillion',
				' sextillion',
				' septillion',
				' octillion',
				' nonillion',
				' decillion',
				' undecillion',
				' duodecillion',
				' tredecillion',
				' quattuordecillion',
				' quindecillion'
			];
		
		var valuestr = value.toString();
		var isE = valuestr.indexOf('e+');
		if (isE!=-1){
			var varray = valuestr.split('e+');
			var partone = varray[0];
			partone = partone.replace('.', '');
			var parttwo = varray[1];
			var parttwonum = parseInt(parttwo)+1;
			var result = partone;
			for(var x = partone.length; x<parttwonum; x++){
				result += "0";
			}
			valuestr=result;
		}

		
		var pos = valuestr.indexOf('.');
		var rest = "";
		if (pos!=-1){
			var valuearray = valuestr.split('.');
			valuestr = valuearray[0];
			rest = valuearray[1];
		}
		
		if(value<1000000){
			return numberWithCommas(value);
		}
		else {
			
			
			var numberOfDigits = valuestr.length;
			
			var inThree = Math.floor((numberOfDigits-1)/3);

			var revvaluestr = reverseAddDots(valuestr);
			
			var returnstrtot = reverse(revvaluestr);
			if (returnstrtot[0]=='.') {
				returnstrtot = returnstrtot.substring(1);
			}
			
			var returnstr = "";
			var numDots = 0;
			for (var i=0; i<returnstrtot.length; i++){
				if (returnstrtot[i]=="."){
					numDots++;
				}
				if (numDots<2){
					returnstr = returnstr + returnstrtot[i];
					
				}
			}
			if (inThree<=16){
				returnstr = returnstr + " " + power[inThree];
				return returnstr;
			}else {
				returnstr="Infinity";
				return returnstr;
			}
			
		}
	}else if (Game.numberOption == 1){
		value = parseFloat(value);
		if(value<1000000){
			return numberWithCommas(value);
		}else{
			var returnstr = value.toExponential(3);
			return returnstr;
		}
	
	}else {
		value = parseFloat(value);
		if(value<1000000){
			return numberWithCommas(value);
		}
		else {
			var returnstr = value.toExponential(15);
			return returnstr;
		}
	}
	
}
	
function reverseAddDots(s) {

	var o = "";
	var x = 0;
	for (var i =s.length-1; i>=0; i--){
		o += s[i];
		x++;
		if (x%3==0){
			o+='.';
		}
	}
	
	return o;
}

function reverseAddCommas(s) {

	var o = "";
	var x = 0;
	for (var i =s.length-1; i>=0; i--){
		o += s[i];
		x++;
		if (x%3==0){
			o+=',';
		}
	}
	
	return o;
}

function reverse(s){
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// get postition of mouse click on screen

var tempX = 0
var tempY = 0
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$( window ).resize(function() {
     vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
     vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
     
     Game._updateWaterLevel(1);
     Game._waterWaves();

     Game.laserCanvas.width = window.innerWidth;
     Game.laserCanvas.height = window.innerHeight;
});


function addMouseListener(){
    document.addEventListener("mousemove",getMouseXY);
}

function removeMouseListener(){
    document.removeEventListener("mousemove",getMouseXY);
}

function getMouseXY(e) {
    
    tempX = e.pageX
    tempY = e.pageY

  // catch possible negative values in NS4
  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0}  
  
  if((Game.popup.is(":visible"))||(Game.popupr.is(":visible"))||(Game.popupk.is(":visible"))||(Game.popupp.is(":visible"))){
    var postop = tempY - Game.popup.height()/2;
    var postopr = tempY - Game.popupr.height()/2;
    var postopk = tempY - (Game.popupk.height()+50);
    var postopp = tempY - (Game.popupp.height()+40);
    if (vw>850){
        Game.popup.css({'top':postop, 'left':tempX+100});
        Game.popupr.css({'top':postopr,'left':tempX-Game.popupr.width()-100});
        Game.popupk.css({'top':postopk,'left':tempX-Game.popupk.width()/2});
        Game.popupp.css({'top':postopp,'left':tempX-(Game.popupp.width()/2)});
    } else {
        Game.popup.css({'top':10, 'left':(vw/2)-(Game.popupr.width()/2)});
        Game.popupr.css({'top':10, 'left':(vw/2)-(Game.popupr.width()/2)});
        Game.popupk.css({'top':10, 'left':(vw/2)-(Game.popupr.width()/2)});
        Game.popupp.css({'top':10, 'left':(vw/2)-(Game.popupr.width()/2)});
    }
  }
  if(Game.popupAlien.is(":visible")){
    Game.popupAlien.css({'top':tempY-Game.popupAlien.height(), 'left':tempX+20});
  }
  if(Game.popuprb.is(":visible")){
    var postoprb = tempY - (Game.popuprb.height()+50);
    if (vw>850){
        Game.popuprb.css({'top':postoprb,'left':tempX+20});
    } else {
        Game.popuprb.css({'top':10, 'left':(vw/2)-(Game.popuprb.width()/2)});  
    }
  }
  return true
}

// No zoom on double-tap on mobile
$('.no-zoom').bind('touchend', function(e){
    e.preventDefault();
    $(this).click();
});

//random int from interval
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// from ms to time
function msToTime(duration) {
     var days = Math.floor(duration / 86400000);
     var dremain = duration % 86400000;
     var hours = Math.floor(dremain/3600000);
     var hremain = dremain % 3600000;
     var minutes = Math.floor(hremain/60000);
     var minremain = hremain%60000;
     var seconds = Math.floor(minremain/1000);
     
     var ret = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds ";
     return ret;
}

//get log
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
//file save function from https://github.com/eligrey/FileSaver.js
var saveAs=saveAs||function(view){"use strict";if(typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var doc=view.document,get_URL=function(){return view.URL||view.webkitURL||view},save_link=doc.createElementNS("http://www.w3.org/1999/xhtml","a"),can_use_save_link="download"in save_link,click=function(node){var event=new MouseEvent("click");node.dispatchEvent(event)},is_safari=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),webkit_req_fs=view.webkitRequestFileSystem,req_fs=view.requestFileSystem||webkit_req_fs||view.mozRequestFileSystem,throw_outside=function(ex){(view.setImmediate||view.setTimeout)(function(){throw ex},0)},force_saveable_type="application/octet-stream",fs_min_size=0,arbitrary_revoke_timeout=500,revoke=function(file){var revoker=function(){if(typeof file==="string"){get_URL().revokeObjectURL(file)}else{file.remove()}};if(view.chrome){revoker()}else{setTimeout(revoker,arbitrary_revoke_timeout)}},dispatch=function(filesaver,event_types,event){event_types=[].concat(event_types);var i=event_types.length;while(i--){var listener=filesaver["on"+event_types[i]];if(typeof listener==="function"){try{listener.call(filesaver,event||filesaver)}catch(ex){throw_outside(ex)}}}},auto_bom=function(blob){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)){return new Blob(["\ufeff",blob],{type:blob.type})}return blob},FileSaver=function(blob,name,no_auto_bom){if(!no_auto_bom){blob=auto_bom(blob)}var filesaver=this,type=blob.type,blob_changed=false,object_url,target_view,dispatch_all=function(){dispatch(filesaver,"writestart progress write writeend".split(" "))},fs_error=function(){if(target_view&&is_safari&&typeof FileReader!=="undefined"){var reader=new FileReader;reader.onloadend=function(){var base64Data=reader.result;target_view.location.href="data:attachment/file"+base64Data.slice(base64Data.search(/[,;]/));filesaver.readyState=filesaver.DONE;dispatch_all()};reader.readAsDataURL(blob);filesaver.readyState=filesaver.INIT;return}if(blob_changed||!object_url){object_url=get_URL().createObjectURL(blob)}if(target_view){target_view.location.href=object_url}else{var new_tab=view.open(object_url,"_blank");if(new_tab==undefined&&is_safari){view.location.href=object_url}}filesaver.readyState=filesaver.DONE;dispatch_all();revoke(object_url)},abortable=function(func){return function(){if(filesaver.readyState!==filesaver.DONE){return func.apply(this,arguments)}}},create_if_not_found={create:true,exclusive:false},slice;filesaver.readyState=filesaver.INIT;if(!name){name="download"}if(can_use_save_link){object_url=get_URL().createObjectURL(blob);setTimeout(function(){save_link.href=object_url;save_link.download=name;click(save_link);dispatch_all();revoke(object_url);filesaver.readyState=filesaver.DONE});return}if(view.chrome&&type&&type!==force_saveable_type){slice=blob.slice||blob.webkitSlice;blob=slice.call(blob,0,blob.size,force_saveable_type);blob_changed=true}if(webkit_req_fs&&name!=="download"){name+=".download"}if(type===force_saveable_type||webkit_req_fs){target_view=view}if(!req_fs){fs_error();return}fs_min_size+=blob.size;req_fs(view.TEMPORARY,fs_min_size,abortable(function(fs){fs.root.getDirectory("saved",create_if_not_found,abortable(function(dir){var save=function(){dir.getFile(name,create_if_not_found,abortable(function(file){file.createWriter(abortable(function(writer){writer.onwriteend=function(event){target_view.location.href=file.toURL();filesaver.readyState=filesaver.DONE;dispatch(filesaver,"writeend",event);revoke(file)};writer.onerror=function(){var error=writer.error;if(error.code!==error.ABORT_ERR){fs_error()}};"writestart progress write abort".split(" ").forEach(function(event){writer["on"+event]=filesaver["on"+event]});writer.write(blob);filesaver.abort=function(){writer.abort();filesaver.readyState=filesaver.DONE};filesaver.readyState=filesaver.WRITING}),fs_error)}),fs_error)};dir.getFile(name,{create:false},abortable(function(file){file.remove();save()}),abortable(function(ex){if(ex.code===ex.NOT_FOUND_ERR){save()}else{fs_error()}}))}),fs_error)}),fs_error)},FS_proto=FileSaver.prototype,saveAs=function(blob,name,no_auto_bom){return new FileSaver(blob,name,no_auto_bom)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(blob,name,no_auto_bom){if(!no_auto_bom){blob=auto_bom(blob)}return navigator.msSaveOrOpenBlob(blob,name||"download")}}FS_proto.abort=function(){var filesaver=this;filesaver.readyState=filesaver.DONE;dispatch(filesaver,"abort")};FS_proto.readyState=FS_proto.INIT=0;FS_proto.WRITING=1;FS_proto.DONE=2;FS_proto.error=FS_proto.onwritestart=FS_proto.onprogress=FS_proto.onwrite=FS_proto.onabort=FS_proto.onerror=FS_proto.onwriteend=null;return saveAs}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!=null){define([],function(){return saveAs})}

/*  Warning when leaving page / uncomment when not testing*/
window.onbeforeunload = function (e) {
	if(Game.reload==0){
		e = e || window.event;
		// For IE and Firefox prior to version 4
		if (e) {
			e.returnValue = 'Sure?';
		}
		// For Safari
		return 'Sure?';
	}
};