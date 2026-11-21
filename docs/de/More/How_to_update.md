# Firmware aktualisieren
Neue Funktionen warten vielleicht schon in Form eines Firmware-Updates auf dich. Mit dieser Anleitung legst du los.

## Update über den Computer
Du kannst auf [connect.habity.design](https://connect.habity.design) nach Updates suchen.

1. Verbinde deine Uhr mit einem USB-Kabel mit deinem Computer.
2. Öffne connect.habity.design in deinem Browser.
3. Öffne den Tab „Updates“, suche nach neuen Updates und installiere sie.

<p class="hb-cta-wrap">
  <a class="hb-cta" href="https://connect.habity.design" target="_blank" rel="noopener">Zu connect.habity.design</a>
</p>


## Update über das Handy
### Voraussetzungen
1. Die Uhr ist an den Strom angeschlossen.
2. Die Uhr ist [mit deinem WLAN zu Hause verbunden.](/de/Connectivity/Connect_to_Wi-Fi)
3. Datum und Uhrzeit sind auf die aktuelle Zeit eingestellt.

### Nach Updates suchen
So prüfst du, ob Updates verfügbar sind:
Öffne deine [Web-Steuerungsseite](/de/Connectivity/Connect_to_Wi-Fi) > „Update firmware“ > Klick auf „Check for updates“.
Wenn eine neuere Version verfügbar ist, kannst du fortfahren.

### Firmware aktualisieren
Geh auf deiner Web-Steuerungsseite zu „Update firmware“. Dort findest du „Update“.
Die Uhr beginnt automatisch, das Update herunterzuladen und zu installieren. Lass sie dabei unbedingt am Strom angeschlossen.
Wenn das Update abgeschlossen ist, startet die Uhr neu und fordert dich auf, die [Reisesperre](/de/More/Travel_lock) aufzuheben.

> [!NOTE] HINWEIS
> Beim Update der Firmware von v1.0.x auf die neueste Version werden deine gespeicherten Weckzeiten und Zeitpläne gelöscht.


## Änderungsprotokoll


<ChangelogEntry version="1.2.5" latest>

Lust auf einen neuen Weckton oder ein neues Schlafgeräusch? Im neuen Tab „Sounds“ auf der Web-Steuerungsseite kannst du neue Töne direkt auf deine Uhr laden 🔊🌧️

- Neue Töne von Habity über den neuen Tab „Sounds“ in der Web-Steuerung hinzufügen.
- Das heutige Datum auf dem Zifferblatt anzeigen (in den Einstellungen aktivieren).
- Geringere Lautstärke für Schlafgeräusche und Geräusche der Schlafenszeit-Erinnerung.
- Allmählicher ansteigendes Aufwachlicht für einen sanfteren Sonnenaufgang.
- Designverbesserungen in den Einstellungen.
- Bessere Übersicht über benutzerdefinierte Alarme.
- Doppelt auf Stopp drücken, um alle benutzerdefinierten Alarme ein- oder auszuschalten.
- Neue Zeitzonen für die automatische Uhrzeit.

</ChangelogEntry>

<ChangelogEntry version="1.2.4">

Du kannst deine Uhr jetzt per USB über deinen Computer aktualisieren und ihre Einstellungen ändern – auf connect.habity.design

- Die automatische Uhrzeit erkennt deine Zeitzone jetzt zuverlässiger und bleibt sekundengenau.
- Philips Hue und andere Smart-Home-Steuerungen funktionieren jetzt auch im Akkubetrieb.
- Verbesserte Stabilität und Akkulaufzeit.

</ChangelogEntry>

<ChangelogEntry version="1.2.2">

Dies ist ein größeres Update mit vielen Verbesserungen, einer neuen Navigation, längerer Akkulaufzeit und weiteren Funktionen. Wir empfehlen allen, dieses Update zu installieren.

> [!NOTE] HINWEIS
> Dieses Update ändert die Funktionsweise des E-Paper-Displays. Es kann 1–3 Tage dauern, bis sich deine Uhr an das Update angepasst hat. In dieser Zeit können die schwarzen Bereiche des Displays verblasst wirken, das normalisiert sich aber wieder. Der Grund dafür ist, dass sich die physischen Farbpartikel erst an die Änderungen anpassen müssen. Mit dem neuen [Wiederherstellungsmodus](/de/Troubleshooting/Recovery_mode) geht das schneller.

- Neue Navigation
- Bessere Ansteuerung des E-Paper-Displays für weniger Geisterbilder und ein schärferes Bild.
- Längere Akkulaufzeit – jetzt 2 Wochen mit einer Ladung.
- Live-Vorschau der Töne beim Einstellen der Lautstärke.
- Neue Philips Hue Sonnenaufgangsszene mit dynamischen Farben („Habity sunrise scene“).
- Snooze abbrechen durch doppeltes Drücken der Stopp-Taste.
- Schlafenszeit-Erinnerung und Lichtschalter in Home Assistant verfügbar.
- Einfachere Bedienung mit einer Hand: Mit der Snooze-Taste kannst du jetzt Einträge in den Einstellungen auswählen.
- Wecktöne klingeln länger, bevor sie aufhören.
- Neue Dauer von 12 Stunden für Schlafgeräusche.
- Neue Schlafenszeit-Erinnerung mit langsam pulsierendem Licht.
- Verbesserte Stabilität.

</ChangelogEntry>

<ChangelogEntry version="1.1.1">

- Allgemeine Verbesserungen der Stabilität.
- Philips Hue: Szenen werden zuverlässiger geladen.

</ChangelogEntry>

<ChangelogEntry version="1.1.0">

- Bessere Navigation: Das Auswahlrad, das Einstellen der Uhrzeit und das Auswählen von Einträgen reagieren jetzt schneller als je zuvor.
- Das Philips Hue Aufwachlicht ist jetzt mit dem Alarmstatus (ein/aus) synchronisiert.
- Verbesserungen bei Stabilität und Geisterbildern auf dem E-Paper-Display.

</ChangelogEntry>

<ChangelogEntry version="1.0.7">

- Behebt ein Problem, bei dem Alarme nicht gespeichert oder deaktiviert wurden.
- Behebt Leistungsprobleme im Akkubetrieb.
- Doppelt auf Stopp drücken schaltet in den Zeitplänen „Täglich wiederholen“ und „Wochentags“ den nächsten Alarm ein oder aus.
- Doppelt auf Stopp drücken bricht einen Snooze-Timer ab.
- Geringerer Akkuverbrauch in der Reisesperre.

Zuvor hinzugefügt:

- Helligkeitssteuerung für das Licht.

</ChangelogEntry>
