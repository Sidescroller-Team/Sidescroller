﻿var ctx;

var main_character_image;
var death_pirate_image;

var milch_fass_image;
var plattes_milch_fass;
var crab_image;

var musik_an;
var musik_aus;

var yellowBlock;
var endSandBlock;
var sandBlock;
var grassBlock;
var earthBlock;
var lava;
var spikes;
var background;
var goalImage;

var defeatScreen;
var reloadImage;
var homeImage;
var grey_fog;

var winScreen;
var reloadImageWin;
var homeImageWin;
var nextLevelImage;

//nur ein rahmen um die einzelnen quadrate
var quadrat;

function fillImages() {
	ctx = game_field.getContext('2d');

    main_character_image = new Image();
    death_pirate_image = new Image();

    milch_fass_image = new Image();
    plattes_milch_fass = new Image();
    crab_image = new Image();

    mainMenue = new Image();
    buttonSpielstart = new Image();
    buttonLevelauswahl = new Image();
    kisteHauptmenue = new Image();
    palmenstamm = new Image();
    rumfass = new Image();
    piratMenue = new Image();

    musik_an = new Image();
    musik_aus = new Image();

    wolkenformatEins = new Image();
    wolkenformatZwei = new Image();
    wolkenformatDrei = new Image();
    welle = new Image();
    schiff = new Image();

	//alle blockelemente sind png mit 50x50px
	yellowBlock = new Image();
	endSandBlock = new Image();
	sandBlock = new Image();
    grassBlock = new Image();
    background = new Image();
    spikes = new Image();
    goalImage = new Image();

    defeatScreen = new Image();
    reloadImage = new Image();
    homeImage = new Image();
    grey_fog = new Image();

    winScreen = new Image();
    reloadImageWin = new Image();
    homeImageWin = new Image();
    nextLevelImage = new Image();

    main_character_image.src = 'images/Pirat_Laufen.png';
    death_pirate_image.src = 'images/Toter_Pirat.png';
    plattes_milch_fass.src = 'images/plattes_fass.png';
    milch_fass_image.src = 'images/milch_laufen.png';
    crab_image.src = 'images/krabbe_gehen.png';

    mainMenue.src = 'images/hintergrund_menue.png';
    buttonSpielstart.src = 'images/Button_Spiel_Starten_PNG.png';
    buttonLevelauswahl.src = 'images/Button_Levelauswahl_PNG.png';
    kisteHauptmenue.src = 'images/KisteMitButtonsKrabbeSchaufel.png';
    palmenstamm.src = 'images/Bildelemente/Palmenstamm.png';
    rumfass.src = 'images/Rumfass_PNG.png';
    piratMenue.src = 'images/piratMenue.png';

    musik_an = 'images/musik_an.png';
    musik_aus = 'images/musik_aus.png';

    wolkenformatEins.src = 'images/wolkenformat_Eins.png';
    wolkenformatZwei.src = 'images/wolkenformat_Zwei.png';
    wolkenformatDrei.src = 'images/wolkenformat_Drei.png';
    welle.src = 'images/welle.png';
	schiff.src = 'images/Piratenschiff_Wasser.png';

	sandBlock.src = 'images/Bildelemente/Sand1.png';
	endSandBlock.src = 'images/Bildelemente/SandEndeLinks.png';
	yellowBlock.src = 'images/Bildelemente/SandMitte.png';
    grassBlock.src = 'images/block.png';
    spikes.src = 'images/spikes.png';
    background.src = 'images/hintergrund_Spiel_PNG.png';
    goalImage.src = 'images/Ziel.png';

    defeatScreen.src = 'images/Defeatscreen.png';
    reloadImage.src = 'images/Wiederholungssymbol.png';
    homeImage.src = 'images/Homebutton.png';
    grey_fog.src = 'images/grauer_schleier.png';

    winScreen.src = 'images/Winscreen.png';
    reloadImageWin.src = 'images/Wiederholungssymbol_gewonnen.png';
    homeImageWin.src = 'images/Homebutton_gewonnen.png';
    nextLevelImage.src = 'images/Next_level_gewonnen.png';
}