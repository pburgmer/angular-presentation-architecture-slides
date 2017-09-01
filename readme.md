# Client-Architektur in Angular Projekten

Dieses Repository enthält die Präsentation zu meinem Vortrag 'Client-Architektur in Angular Projekten'. Eine PDF-Datei mit den Folien zum Vortrag liegt unter ```etc/pdf```.

## Zusammenfassung

Bei sogenannten Single-Page-Anwendungen, wird oft viel Funktionalität in den Client verlagert. Die letzten Jahre haben hier leider gezeigt, dass uns Frameworks wie Angular viele Freiheiten bei der Strukturierung und der Architektur lassen und sich viele Entwickler zu wenig Gedanken über über eben diese Punkte gemacht haben.

Hier setzt zum Glück ein Umdenken ein. Es wir vermehrt über Pattern wie Flux und Redux gesprochen und sich mehr an Best Practises orientiert. Außerdem spielen Themen wie Modularisierung und Komposition von unabhängig entwickelten Teil-Anwendungen im Zuge von Micro-Services eine Rolle. Doch was steckt hinter all dem?

Dieser Talk gibt einen Überblick über aktuelle Themen und Entwicklungen und zeigt am Beispiel von Angular wie diese eingesetzt werden können.

## Kurz-Bio

Philipp Burgmer ist ein Web-Native. Seit 15 Jahren in der Web-Programmierung unterwegs, gibt er sein angesammeltes und ständig aufgefrischtes Wissen gerne in [Schulungen](https://www.thecodecampus.de), Vorträgen bei Konferenzen und Blog-Einträgen weiter. Er arbeitet als Entwickler, Berater und Trainer für die [w11k GmbH](http://w11k.de) und beschäftigt sich mit der Gestaltung und Optimierung von Benutzeroberflächen. Philipp bloggt zusammen mit seinen Kollegen unter [blog.thecodecampus.de](blog.thecodecampus.de). Privat interessiert er sich für Klettern und DJing.


## Setup

Die Präsentation ist als Web-Anwendung mit [AngularJS](https://angularjs.org/) und [w11k-slides](https://github.com/w11k/w11k-slides) umgesetzt. Um sie lokal laufen zu lassen genügen folgende Aufrufe nach dem Checkout. Anschließend läuft ein lokaler Server (Port siehe Konsolenausgabe).

```
npm install
npm run dist
```
