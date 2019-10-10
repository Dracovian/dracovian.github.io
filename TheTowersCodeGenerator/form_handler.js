class FormHandler {

    // I know this is bad practice, but I am getting tired of this project right about now
    //  and I'm going to do this the dumb way just to get it over with.
    fill_form(OTSG) {
        let formInputs = document.getElementsByClassName('formInput');
        
        // Initialize Hero Information section with the default values.
        formInputs[0].value   = OTSG.hero_lvl;
        formInputs[1].value   = OTSG.hero_exp;
        formInputs[2].value   = OTSG.hero_nxt_lvl;
        formInputs[3].value   = OTSG.hero_cmb_lvl;
        formInputs[4].value   = OTSG.heroSoulStr;
        formInputs[5].value   = OTSG.heroMoney;
        formInputs[6].value   = OTSG.hard_level;
        formInputs[7].value   = OTSG.loveOfFox;
        formInputs[8].value   = OTSG.foxDiedTimes;

        // Initialize Hero Stats section with the default values.
        formInputs[9].value   = OTSG.stat_points;
        formInputs[10].value  = OTSG.hero_mhp;
        formInputs[11].value  = OTSG.hero_hp;
        formInputs[12].value  = OTSG.hero_mmp;
        formInputs[13].value  = OTSG.hero_mp;
        formInputs[14].value  = OTSG.hero_speed;
        formInputs[15].value  = OTSG.hero_dmg;
        formInputs[16].value  = OTSG.hero_def;
        formInputs[17].value  = OTSG.hero_perverting;
        formInputs[18].value  = OTSG.totalSouls;

        // Initialize Hero Collectors section with the default values.
        formInputs[19].value  = OTSG.hero_speed_collector;
        formInputs[20].value  = OTSG.hero_mhp_collector;
        formInputs[21].value  = OTSG.hero_def_collector;
        formInputs[22].value  = OTSG.hero_cmb_lvl_collector;
        formInputs[23].value  = OTSG.hero_dmg_collector;

        // Initialize Tower Levels section with the default values.
        formInputs[24].value  = OTSG.tower_level['air'];
        formInputs[25].value  = OTSG.tower_level['earth'];
        formInputs[26].value  = OTSG.tower_level['water'];
        formInputs[27].value  = OTSG.tower_level['fire'];
        formInputs[28].value  = OTSG.tower_level['forest'];

        // Initialize Hero Skills section with the default values.
        formInputs[29].value  = OTSG.heroSkillDefense;
        formInputs[30].value  = OTSG.heroSkillHeal;
        formInputs[31].value  = OTSG.heroSkillCleave;
        formInputs[32].value  = OTSG.heroSkillTarget;
        formInputs[33].value  = OTSG.heroSkillCapture;

        // Initialize Hero Inventory section with the default values.
        formInputs[34].value  = OTSG.heroHpBottles;
        formInputs[35].value  = OTSG.heroManaBottles;
        formInputs[36].value  = OTSG.heroCureBottles;
        formInputs[37].value  = OTSG.heroPervertBottles;

        // Initialize Boss Souls section with the default values.
        formInputs[38].value  = OTSG.bossSouls['chimera'];
        formInputs[39].value  = OTSG.bossSouls['foxTower'];
        formInputs[40].value  = OTSG.bossSouls['foxHome'];
        formInputs[41].value  = OTSG.bossSouls['naga'];
        formInputs[42].value  = OTSG.bossSouls['cyclops'];
        formInputs[43].value  = OTSG.bossSouls['empress'];

        // Initialize Monster Souls section with the default values.
        formInputs[44].value  = OTSG.monsterSouls['slime'];
        formInputs[45].value  = OTSG.monsterSouls['fairy'];
        formInputs[46].value  = OTSG.monsterSouls['alraune'];
        formInputs[47].value  = OTSG.monsterSouls['holstaurus'];
        formInputs[48].value  = OTSG.monsterSouls['cat'];
        formInputs[49].value  = OTSG.monsterSouls['bunny'];
        formInputs[50].value  = OTSG.monsterSouls['lizard'];
        formInputs[51].value  = OTSG.monsterSouls['kappa'];
        formInputs[52].value  = OTSG.monsterSouls['scorpio'];
        formInputs[53].value  = OTSG.monsterSouls['centaurus'];
        formInputs[54].value  = OTSG.monsterSouls['harpy'];
        formInputs[55].value  = OTSG.monsterSouls['satyr'];
        formInputs[56].value  = OTSG.monsterSouls['vampire'];
        formInputs[57].value  = OTSG.monsterSouls['succubus'];
        formInputs[58].value  = OTSG.monsterSouls['witch'];

        // Initialize Achievement Flags section with the default values.
        formInputs[59].checked  = OTSG.descOfAch['start'];
        formInputs[60].checked  = OTSG.descOfAch['tenHoles'];
        formInputs[61].checked  = OTSG.descOfAch['comboMaster'];
        formInputs[62].checked  = OTSG.descOfAch['fame'];
        formInputs[63].checked  = OTSG.descOfAch['soPower'];
        formInputs[64].checked  = OTSG.descOfAch['souls'];
        formInputs[65].checked  = OTSG.descOfAch['endIsNear'];
        formInputs[66].checked  = OTSG.descOfAch['allOpened'];
        formInputs[67].checked  = OTSG.descOfAch['end'];
        formInputs[68].checked  = OTSG.descOfAch['nowYouKnow'];
        formInputs[69].checked  = OTSG.descOfAch['divineHero'];
        formInputs[70].checked  = OTSG.descOfAch['houseSitter'];
        formInputs[71].checked  = OTSG.descOfAch['youAreMurderer'];
        formInputs[72].checked  = OTSG.descOfAch['tricked'];
        formInputs[73].checked  = OTSG.descOfAch['divineHeroTrue'];
        formInputs[74].checked  = OTSG.descOfAch['youKnowCode'];
        formInputs[75].checked  = OTSG.descOfAch['endWhat'];
        formInputs[76].checked  = OTSG.descOfAch['nagaSpeak'];
        formInputs[77].checked  = OTSG.descOfAch['wasTricked'];

        // Initialize Game Flags section with the default values.
        formInputs[78].checked  = OTSG.brokenBuildingEnter;
        formInputs[79].checked  = OTSG.aboutShop;
        formInputs[80].checked  = OTSG.aboutHouse;
        formInputs[81].checked  = OTSG.aboutPlace;
        formInputs[82].checked  = OTSG.aboutPeople;
        formInputs[83].checked  = OTSG.aboutHelp;
        formInputs[84].checked  = OTSG.aboutSpherePiece;
        formInputs[85].checked  = OTSG.aboutTownHelp;
        formInputs[86].checked  = OTSG.aboutChimeraVictory;
        formInputs[87].checked  = OTSG.aboutPricesRising;
        formInputs[88].checked  = OTSG.aboutFoxGirl;
        formInputs[89].checked  = OTSG.aboutBook;
        formInputs[90].checked  = OTSG.heroHaveSphere;
        formInputs[91].checked  = OTSG.heroWasInTower;
        formInputs[92].checked  = OTSG.heroTurnBack;
        formInputs[93].checked  = OTSG.heroUseFountain;
        formInputs[94].checked  = OTSG.heroHaveOnePart;
        formInputs[95].checked  = OTSG.heroHaveTwoPart;
        formInputs[96].checked  = OTSG.heroHaveGarden;
        formInputs[97].checked  = OTSG.heroHaveAir;
        formInputs[98].checked  = OTSG.heroHaveFire;
        formInputs[99].checked  = OTSG.heroHaveWater;
        formInputs[100].checked = OTSG.heroHaveEarth;
        formInputs[101].checked = OTSG.heroWinGarden;
        formInputs[102].checked = OTSG.heroWinAir;
        formInputs[103].checked = OTSG.heroWinFire;
        formInputs[104].checked = OTSG.heroWinWater;
        formInputs[105].checked = OTSG.heroWinEarth;
        formInputs[106].checked = OTSG.heroWasInTown;
        formInputs[107].checked = OTSG.foxAlive;
        formInputs[108].checked = OTSG.foxInHome;
        formInputs[109].checked = OTSG.foxTalkAboutStay;
        formInputs[110].checked = OTSG.foxClothed;
        formInputs[111].checked = OTSG.aboutWhere;
        formInputs[112].checked = OTSG.aboutTowers;
        formInputs[113].checked = OTSG.aboutAllGirls;
        formInputs[114].checked = OTSG.aboutMinions;
        formInputs[115].checked = OTSG.aboutSpheres;
        formInputs[116].checked = OTSG.aboutEmpress;
        formInputs[117].checked = OTSG.aboutClothes;
        formInputs[118].checked = OTSG.firstSex;
        formInputs[119].checked = OTSG.foxHaveClothes;
        formInputs[120].checked = OTSG.showTips;
        formInputs[121].checked = OTSG.tip['mapT'];
        formInputs[122].checked = OTSG.tip['town'];
        formInputs[123].checked = OTSG.tip['tavern'];
        formInputs[124].checked = OTSG.tip['rentHome'];
        formInputs[125].checked = OTSG.tip['aboutTowers'];
        formInputs[126].checked = OTSG.tip['battle'];
        formInputs[127].checked = OTSG.tip['chimeraBattle'];
        formInputs[128].checked = OTSG.tip['magicScroll'];
        formInputs[129].checked = OTSG.tip['galleryT'];
        formInputs[130].checked = OTSG.octaShowed;
        formInputs[131].checked = OTSG.cyclopsNo;
        formInputs[132].checked = OTSG.bananaCheat;
        formInputs[133].checked = OTSG.coconutCheat;
        formInputs[134].checked = OTSG.heroHaveAmulet;
        formInputs[135].checked = OTSG.aboutAmulet;
        formInputs[136].checked = OTSG.walkthrough;
        formInputs[137].checked = OTSG.foxLoveOverdosed;
    }
}