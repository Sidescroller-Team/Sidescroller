var ctx;

var main_character_image;
var death_pirate_image;

var milch_fass_image;
var plattes_milch_fass;
var crab_image;


var yellowBlock;
var endSandBlock;
var sandBlock;
var grassBlock;
var earthBlock;
var lava;
var spikes;
var background;

var defeatScreen;
var reloadImage;
var homeImage;
var grey_fog;
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
    lava = new Image();
    spikes = new Image();
	earthBlock = new Image();
    quadrat = new Image();

    defeatScreen = new Image();
    reloadImage = new Image();
    homeImage = new Image();
    grey_fog = new Image();

    main_character_image.src = '../images/Pirat_Laufen.png';
    death_pirate_image.src = '../images/Toter_Pirat.png';
    plattes_milch_fass.src = '../images/plattes_fass.png';
    milch_fass_image.src = '../images/milch_laufen.png';
    crab_image.src = '../images/krabbe_gehen.png';

    mainMenue.src = '../images/hintergrund_menue.png';

    wolkenformatEins.src = '../images/wolkenformat_Eins.png';
    wolkenformatZwei.src = '../images/wolkenformat_Zwei.png';
    wolkenformatDrei.src = '../images/wolkenformat_Drei.png';
    welle.src = '../images/welle.png';
    schiff.src = '../images/game_schiff.png';

	sandBlock.src = '../images/Bildelemente/Sand.png';
	endSandBlock.src = '../images/Bildelemente/SandEnde.png';
	yellowBlock.src = '../images/Bildelemente/yellow.png';
    earthBlock.src = '../images/erdblock.png';
    grassBlock.src = '../images/block.png';
    lava.src = '../images/lava.png';
    spikes.src = '../images/spikes.png';
    background.src = '../images/hintergrund_Spiel_PNG.png';
    quadrat.src = '../images/rahmen.png';

    defeatScreen.src = '../images/Defeatscreen.png';
    reloadImage.src = '../images/Wiederholungssymbol.png';
    homeImage.src = '../images/Homebutton.png';
    grey_fog.src = '../images/grauer_schleier.png';
}