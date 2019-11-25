# Projektname Sidescroller-Treasure Bay

## Autoren: <br>
-Niklas Gieretz<br>
-Niklas Klaes<br>
-Timo Schallenberg

## Erstelldatum: 25.11.2019<br>
## Versionsnummer: 1.0

## Beschreibung: <br>
Der Sidescroller Treasure Bay ist ein kleines, süßes Spiel, in dem du einen Piraten durch unterschiedliche Level mit verschiedenen Schwierigkeitsstufen fürhren musst, um am Ende zum Schatz zu kommen. Dabei muss man verschiedenen Hindernissen und Gegnern ausweichen. Der Spieler hat die Möglichkeit nach links und rechts zu laufen und zu springen. Eine eigene Levelgestaltung ist auch möglich. Es wird sehr empfohlen vor dem Spielen die Steuerung gut durchzulesen, welche entweder über das Hauptmenü zu erreichen ist oder am Ende dieses Dokumententes steht.

## Wer hat was gemacht: <br>
<strong>Niklas Gieretz:</strong> <br>
Blöcke  Design und Funktionalität <br>
Editor <br>
Level werden geladen <br>
Dynamik der Level <br>
Zoom <br>
Wandsprung <br>
Level 1, 4, 7 erstellt <br>

<strong>Niklas Klaes:</strong><br>
Hauptmenü Design und Funktionalität <br>
Levelauswahl Design und Funktionalität <br>
Impressum <br>
Datenschutzerklärung <br>
Lizenz <br>
Erklärung Steuerung <br>
Buttonhandling beim Zoom <br>
HintergrundbewegungRefactoring, damit es auf xampp läuft <br>
Level 2, 5 und 8 gebaut <br>

<strong>Timo Schallenberg:</strong><br>
Spielfigur Design und Funktionalität <br>
Gegner Design und Funktionalität <br>
Stacheln Design und Funktionalität <br>
Win- und Defeatscreen Design und Funktionalität <br>
Vertonung <br>
Level 3, 6 und 9 erstellt <br>

## Referenzen:<br>
-Soundeffekte von  https://www.zapsplat.com werden verwendet. (Lizensfrei nutzbar https://www.zapsplat.com/license-type/standard-license/)<br>
-Hintergrundmusik von https://www.youtube.com/watch?v=hVBgKCYrI-c (Ross Bugden - Music) wird verwendet. (Lizensfrei nutzbar)

## Known Bugs: <br>
-springende Fässer gehen manchmal durch die Wand <br>
-Musik nicht im Firefox<br>
-Spielfigur landet gelegentlich zu tief in einem Block (Keine Spielbeeinträchtigung) <br>
-Nicht immer perfekte Beschleunigung, wenn man von der Wand abspringt

## Browserkompatibilität: <br>
-Chrome <br>
-Edge <br>
-Firefox (bis auf Musik) <br>
(Safari und Opera nicht getestet)

## Eigene Lizenzdatei:<br>
[Apache License2.0](./LICENSE)

## Steuerung: <br>
#### Hauptmenü <br>
Enter-Taste: Spiel-Start wird gestartet (mit Level 1) <br>
S- Taste: Steuerung wird geöffnet (Die Steuerung lässt sich mit derselben Taste wieder schließen) <br>
I-Taste: Impressum wird geöffnet (Das Impressum lässt sich mit derselben Taste wieder schließen) <br>
D-Taste: Datenschutzerklärung wird geöffnet (Die Datenschuztzerklärung lässt sich mit derselben Taste wieder schließen) <br>
M-Taste: Musik wird ein- und ausgeschaltet <br>
L-Taste: Levelauswahl wird geöffnet <br>
Alle Buttons können auch durch klicken auf diese betätigt werden.

#### Levelauswahl <br>
L-Taste: Levelauswahl wird geschlossen -> Wieder im Hauptmenü <br>
1-Taste: Level 1 wird gestartet <br>
2-Taste: Level 2 wird gestartet <br>
3-Taste: Level 3 wird gestartet <br>
4-Taste: Level 4 wird gestartet <br>
5-Taste: Level 5 wird gestartet <br>
6-Taste: Level 6 wird gestartet <br>
7-Taste: Level 7 wird gestartet <br>
8-Taste: Level 8 wird gestartet <br>
9-Taste: Level 9 wird gestartet <br>
0-Taste: Bastellevel wird gestartet (Ist durch keinen Button zu erreichen. Wird nur beim bestehen des letzten Levels geöffnet oder wenn man das hier liest. <br>
Alle angegebenen Zahlen gelten sowohl für die Zahlenleiste, als auch den Ziffernblock.

#### Spielsteuerung <br>
Pfeiltaste nach Oben: Spung <br>
Pfeiltaste nach Rechts: Laufen nach rechts <br>
Pfeiltaste nach Links: Laufen nach links <br>
W-Taste: Spung <br>
D-Taste nach Rechts: Laufen nach rechts <br>
A-Taste nach Links: Laufen nach links <br>
P-Taste: Pause / Pause beenden <br>
C-Taste: Leveleditor wird geöffnet und das Spiel pausiert

#### Editing-Modus <br>
Mausrad: Durch Drehen des Mausrades können die verschiednen Elemente genutzt werden. (Rotes X auswählen um Objekte zu löschen) <br>
Linke Maustaste, Rechte Maustaste, Klicken auf das Mausrad: <br>
Levelelement wird platziert. <br>
C-Taste: Leveleditor wird geschlossen und die Pause beendet -> Spiel startet

#### Winning-Screen <br>
Enter-Taste: Zurück zum Hauptmenü <br>
Leertaste: Level wiederholen <br>
N-Taste: Nächstes Level

#### Loosing-Screen <br>
Enter-Taste: Zurück zum Hauptmenü <br>
Leertaste: Level wiederholen
