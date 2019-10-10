class Overcomplicated_Towers_Save_Generator {
    
    constructor() {
        this.hero_lvl       = 1;
        this.hero_exp       = 0;
        this.stat_points    = 5;
        this.hero_speed     = 7;
        this.hero_dmg       = 8;
        this.hero_mhp       = 85;
        this.hero_hp        = 85;
        this.hero_mmp       = 25;
        this.hero_mp        = 25;
        this.hero_def       = 1;
        this.hero_cmb_lvl   = 1;
        this.hero_nxt_lvl   = 100;

        this.hero_speed_collector   = 0;
        this.hero_mhp_collector     = 0;
        this.hero_def_collector     = 0;
        this.hero_cmb_lvl_collector = 0;
        this.hero_dmg_collector     = 0;

        this.tower_level = {
            'air':      1,
            'earth':    1,
            'water':    1,
            'fire':     1,
            'forest':   1
        };

        this.heroSkillDefense       = 1;
        this.heroSkillHeal          = 1;
        this.heroSkillCleave        = 1;
        this.heroSkillTarget        = 1;
        this.heroSkillCapture       = 1;

        this.heroSoulStr         = 75;
        this.heroMoney           = 650;
        this.brokenBuildingEnter = 0;

        this.heroHpBottles      = 1;
        this.heroManaBottles    = 1;
        this.heroCureBottles    = 1;
        this.heroPervertBottles = 1;

        this.hero_perverting    = 500;
        this.totalSouls         = 1;

        this.bossSouls = {
            'chimera':      0,
            'foxTower':     0,
            'foxHome':      0,
            'naga':         0,
            'cyclops':      0,
            'empress':      0
        };

        this.monsterSouls = {
            'slime':        0,
            'fairy':        0,
            'alraune':      0,
            'holstaurus':   0,
            'cat':          0,
            'bunny':        0,
            'lizard':       0,
            'kappa':        0,
            'scorpio':      0,
            'centaurus':    0,
            'harpy':        0,
            'satyr':        0,
            'vampire':      0,
            'succubus':     0,
            'witch':        0
        };

        this.hard_level             = 100;
        this.aboutShop              = 0;
        this.aboutHouse             = 0;
        this.aboutPlace             = 0;
        this.aboutPeople            = 0;
        this.aboutHelp              = 0;
        this.aboutSpherePiece       = 0;
        this.aboutTownHelp          = 0;
        this.aboutChimeraVictory    = 0;
        this.aboutPricesRising      = 0;
        this.aboutFoxGirl           = 0;
        this.aboutBook              = 0;
        this.heroHaveSphere         = 0;
        this.heroWasInTower         = 0;
        this.heroTurnBack           = 0;
        this.heroUseFountain        = 0;
        this.heroHaveOnePart        = 0;
        this.heroHaveTwoPart        = 0;
        this.heroHaveGarden         = 0;
        this.heroHaveAir            = 0;
        this.heroHaveFire           = 0;
        this.heroHaveWater          = 0;
        this.heroHaveEarth          = 0;
        this.heroWinGarden          = 0;
        this.heroWinAir             = 0;
        this.heroWinFire            = 0;
        this.heroWinWater           = 0;
        this.heroWinEarth           = 0;
        this.heroWasInTown          = 0;
        this.foxAlive               = 0;
        this.foxInHome              = 0;
        this.foxTalkAboutStay       = 0;
        this.foxClothed             = 0;

        this.loveOfFox              = 25;
        this.aboutWhere             = 0;
        this.aboutTowers            = 0;
        this.aboutAllGirls          = 0;
        this.aboutMinions           = 0;
        this.aboutSpheres           = 0;
        this.aboutEmpress           = 0;
        this.aboutClothes           = 0;
        this.aboutBook              = 0;
        this.firstSex               = 0;
        this.foxHaveClothes         = 0;
        this.showTips               = 0;
        
        this.tip = {
            'mapT':             0,
            'town':             0,
            'tavern':           0,
            'rentHome':         0,
            'aboutTowers':      0,
            'battle':           0,
            'chimeraBattle':    0,
            'magicScroll':      0,
            'galleryT':         0
        };

        this.octaShowed     = 0;
        this.cyclopsNo      = 0;
        this.OldCharA       = 36;
        this.bananaCheat    = 0;
        this.coconutCheat   = 0;

        this.descOfAch = {
            'start':            0,
            'tenHoles':         0,
            'comboMaster':      0,
            'fame':             0,
            'soPower':          0,
            'souls':            0,
            'endIsNear':        0,
            'allOpened':        0,
            'end':              0,
            'nowYouKnow':       0,
            'divineHero':       0,
            'houseSitter':      0,
            'youAreMurderer':   0,
            'tricked':          0,
            'divineHeroTrue':   0,
            'youKnowCode':      0,
            'endWhat':          0,
            'nagaSpeak':        0,
            'wasTricked':       0
        };

        this.heroHaveAmulet     = 1;
        this.aboutAmulet        = 0;
        this.walkthrough        = 0;
        this.foxDiedTimes       = 0;
        this.foxLoveOverdosed   = 0;
    }

    modify(classVariable, subValue = null) {
        let classValue = null;

        if (subValue != null) {
            let classType = document.getElementsByTagName('input')[`${classVariable}['${subValue}']`];

            if (classType.type === 'checkbox') {
                classValue = classType.checked;
                this[classVariable][subValue] = classValue ? 1 : 0;
            } else {
                classValue = classType.value;
                this[classVariable][subValue] = classValue;
            }
        } else {
            let classType = document.getElementsByTagName('input')[classVariable];

            if (classType.type === 'checkbox') {
                classValue = classType.checked;
                this[classVariable] = classValue ? 1 : 0;
            } else {
                classValue = classType.value;
                this[classVariable] = classValue;
            }
        }
    }

    createSaveText() {
        let tmp = {
            'hl': this.hero_lvl,
            'he': this.hero_exp,
            'hstp': this.stat_points,
            'hs': this.hero_speed,
            'hdm': this.hero_dmg,
            'hmh': this.hero_mhp,
            'hh': this.hero_hp,
            'hmm': this.hero_mmp,
            'hm': this.hero_mp,
            'hde': this.hero_def,
            'hcmb': this.hero_cmb_lvl,
            'hnxt': this.hero_nxt_lvl,
            'hsc': this.hero_speed_collector,
            'hhc': this.hero_mhp_collector,
            'hdec': this.hero_def_collector,
            'hcmc': this.hero_cmb_lvl_collector,
            'hdmc': this.hero_dmg_collector,
            'htai': this.tower_level['air'],
            'htea': this.tower_level['earth'],
            'htwa': this.tower_level['water'],
            'htfi': this.tower_level['fire'],
            'htfo': this.tower_level['forest'],
            'hskd': this.heroSkillDefense,
            'hskh': this.heroSkillHeal,
            'hskc': this.heroSkillCleave,
            'hskt': this.heroSkillTarget,
            'hsca': this.heroSkillCapture,
            'hsst': this.heroSoulStr,
            'hmon': this.heroMoney,
            'hbbe': this.brokenBuildingEnter,
            'hhpb': this.heroHpBottles,
            'hmab': this.heroManaBottles,
            'hcub': this.heroCureBottles,
            'hpeb': this.heroPervertBottles,
            'hper': this.hero_perverting,
            'ttSls': this.totalSouls,
            'bschim': this.bossSouls['chimera'],
            'bsfoxT': this.bossSouls['foxTower'],
            'bsfoxH': this.bossSouls['foxHome'],
            'bsnaga': this.bossSouls['naga'],
            'bscyclo': this.bossSouls['cyclops'],
            'bsempr': this.bossSouls['empress'],
            'msslim': this.monsterSouls['slime'],
            'msfair': this.monsterSouls['fairy'],
            'msalra': this.monsterSouls['alraune'],
            'mshols': this.monsterSouls['holstaurus'],
            'mscat': this.monsterSouls['cat'],
            'msbunny': this.monsterSouls['bunny'],
            'msliz': this.monsterSouls['lizard'],
            'mskap': this.monsterSouls['kappa'],
            'mssco': this.monsterSouls['scorpio'],
            'mscent': this.monsterSouls['centaurus'],
            'msharp': this.monsterSouls['harpy'],
            'mssat': this.monsterSouls['satyr'],
            'msvamp': this.monsterSouls['vampire'],
            'mssucc': this.monsterSouls['succubus'],
            'mswitch': this.monsterSouls['witch'],
            'hrdlvl': this.hard_level,
            'aboutShop': this.aboutShop,
            'aboutHouse': this.aboutHouse,
            'aboutPlace': this.aboutPlace,
            'aboutHelp': this.aboutHelp,
            'aboutSpherePiece': this.aboutSpherePiece,
            'aboutTownHelp': this.aboutTownHelp,
            'aboutChimeraVictory': this.aboutChimeraVictory,
            'aboutPricesRising': this.aboutPricesRising,
            'aboutFoxGirl': this.aboutFoxGirl,
            'aboutBook': this.aboutBook,
            'heroHaveSphere': this.heroHaveSphere,
            'heroWasInTower': this.heroWasInTower,
            'heroTurnBack': this.heroTurnBack,
            'heroUseFountan': this.heroUseFountain,
            'heroHaveOnePart': this.heroHaveOnePart,
            'heroHaveTwoPart': this.heroHaveTwoPart,
            'heroHaveGarden': this.heroHaveGarden,
            'heroHaveAir': this.heroHaveAir,
            'heroHaveFire': this.heroHaveFire,
            'heroHaveWater': this.heroHaveWater,
            'heroHaveEarth': this.heroHaveEarth,
            'heroWinGarden': this.heroWinGarden,
            'heroWinAir': this.heroWinAir,
            'heroWinFire': this.heroWinFire,
            'heroWinWater': this.heroWinWater,
            'heroWinEarth': this.heroWinEarth,
            'heroWasInTown': this.heroWasInTown,
            'foxAlive': this.foxAlive,
            'foxInHome': this.foxInHome,
            'foxTalkAboutStay': this.foxTalkAboutStay,
            'foxClothed': this.foxClothed,
            'loveOfFox': this.loveOfFox,
            'aboutWhere': this.aboutWhere,
            'aboutTowers': this.aboutTowers,
            'aboutAllGirls': this.aboutAllGirls,
            'aboutMinions': this.aboutMinions,
            'aboutSpheres': this.aboutSpheres,
            'aboutEmpress': this.aboutEmpress,
            'aboutBook': this.aboutBook,
            'aboutClothes': this.aboutClothes,
            'firstSex': this.firstSex,
            'foxHaveClothes': this.foxHaveClothes,
            'showTips': this.showTips,
            'tipMapT': this.tip['mapT'],
            'tipTwn': this.tip['town'],
            'tipTavern': this.tip['tavern'],
            'tipHome': this.tip['rentHome'],
            'tipTow': this.tip['aboutTowers'],
            'tipBattle': this.tip['battle'],
            'tipChim': this.tip['chimeraBattle'],
            'tipMgScr': this.tip['magicScroll'],
            'tipGal': this.tip['galleryT'],
            'octaShowed': this.octaShowed,
            'cyclopsNo': this.cyclopsNo,
            'OldCharA': this.OldCharA,
            'bnCh': this.bananaCheat,
            'coCh': this.coconutCheat,
            'achAA': this.descOfAch['start'],
            'achAB': this.descOfAch['tenHoles'],
            'achAC': this.descOfAch['comboMaster'],
            'achAD': this.descOfAch['fame'],
            'achAE': this.descOfAch['soPower'],
            'achAF': this.descOfAch['souls'],
            'achAG': this.descOfAch['endIsNear'],
            'achAH': this.descOfAch['allOpened'],
            'achAI': this.descOfAch['end'],
            'achAJ': this.descOfAch['nowYouKnow'],
            'achAK': this.descOfAch['divineHero'],
            'achAL': this.descOfAch['houseSitter'],
            'achAM': this.descOfAch['youAreMurderer'],
            'achAN': this.descOfAch['tricked'],
            'achAO': this.descOfAch['divineHeroTrue'],
            'achAP': this.descOfAch['youKnowCode'],
            'achAQ': this.descOfAch['endWhat'],
            'achAR': this.descOfAch['nagaSpeak'],
            'achAS': this.descOfAch['wasTricked'],
            'hHA': this.heroHaveAmulet,
            'abAm': this.aboutAmulet,
            'wkthr': this.walkthrough,
            'fDT': this.foxDiedTimes,
            'fLO': this.foxLoveOverdosed
        };

        let outputstr = '';
        for (let i in Object.keys(tmp))
            outputstr += `${Object.keys(tmp)[i]}${Object.values(tmp)[i]}`;

        let codeRegion = document.getElementById('codeRegion');
        codeRegion.innerText = outputstr;
    }
}