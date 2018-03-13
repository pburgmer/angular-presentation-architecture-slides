# Client-Architektur in Angular Projekten

## Links

* https://medium.com/curated-by-versett/building-maintainable-angular-2-applications-5b9ec4b463a1
* https://blog.javascripting.com/2016/05/21/the-problem-with-redux-and-how-to-fix-it/

## Struktur

* Datenfluss
  * RxJS
    * Keine Observables in Presentation-Components
    * async Pipe verwenden an Schnittstelle Context-Presentation
    * Keinen State über Subjects verwalten


## Demos

* Components Demo 1
  * Schulung Liste / Details (Branch 9)
* Components Demo 2
  * Context- und Presentation Komponente einbauen
* Module & Routing
  * Routen an Feature Module
  * Relative Navigation
  * Lazy Loading

* EcmaScript Module
  * Statisch
  * Re-Exports am Beispiel von Angular
* Routing
  * Child-Routes pro Module (Branch 9)
* Data-Flow Problem
  * Master-Detail-Ansicht mit Sortierung (Branch 9)
  * nächste Schulung (Branch 22)
* Data-Flow Tydux
  * Zertifikate Generator


## v2

### Struktur

* Einleitung
* Services & DI
  * ganz kurz als Erinnerung an Kapselung und Kopplung
* Komponenten
  * Beispiel Liste/Details
  * Wiederverwendbarkeit von Liste in Details
  * Event-Abstraktion Verlinkung
* Module & Routing
  * Home Route mit Komponente vorbereiten
  * Routen an Feature Module
  * Relative Navigation
  * Lazy Loading
* Angular Module & Kapselung
  * Kapselung für Direktiven
  * Keine Kapselung für Provider
* Modularisierung über NPM Packages
  * 
* State Management
  * Beispiel mit Sortieren nach Name
  * Beispiel mit nächster Schulung
  * 
* Angular Module & Lazy Loading
  * nur als Bonus, ans Ende
  * Problematik mit Providern
