var ctx;

var main_character_image;
var death_pirate_image;

var milch_fass_image;

var grassBlock;
var earthBlock;
var lava;
var background;

var defeatScreen;
var reloadImage;
var homeImage;
//nur ein rahmen um die einzelnen quadrate
var quadrat;

function fillImages() {
    ctx = game_field.getContext('2d');

    main_character_image = new Image();
    death_pirate_image = new Image();

    milch_fass_image = new Image();

    mainMenue = new Image();
    wolkenformatEins = new Image();
    wolkenformatZwei = new Image();
    wolkenformatDrei = new Image();
    welle = new Image();
    schiff = new Image();

    //alle blockelemente sind png mit 50x50px
    grassBlock = new Image();
    background = new Image();
    lava = new Image();
	earthBlock = new Image();
    quadrat = new Image();

    defeatScreen = new Image();
    reloadImage = new Image();
    homeImage = new Image();

    main_character_image.src = '../images/Pirat_Laufen.png';
    death_pirate_image.src = '../images/Toter_Pirat.png';

    milch_fass_image.src = '../images/milch_laufen.png';

    mainMenue.src = '../images/hintergrund_menue.png';

    wolkenformatEins.src = '../images/wolkenformat_Eins.png';
    wolkenformatZwei.src = '../images/wolkenformat_Zwei.png';
    wolkenformatDrei.src = '../images/wolkenformat_Drei.png';
    welle.src = '../images/welle.png';
    schiff.src = '../images/game_schiff.png';

    earthBlock.src = '../images/erdblock.png';
    grassBlock.src = '../images/block.png';
    lava.src = '../images/lava.png';
    background.src = '../images/hintergrund_Spiel_PNG.png';
    quadrat.src = '../images/rahmen.png';

    defeatScreen.src = '../images/Defeatscreen.png';
    reloadImage.src = '../images/Wiederholungssymbol.png';
    homeImage.src = '../images/Homebutton.png';
}