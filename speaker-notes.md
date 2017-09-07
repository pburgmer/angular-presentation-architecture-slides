# Client-Architektur in Angular Projekten

## Links

* https://medium.com/curated-by-versett/building-maintainable-angular-2-applications-5b9ec4b463a1
* https://blog.javascripting.com/2016/05/21/the-problem-with-redux-and-how-to-fix-it/

## Struktur

* Datenfluss
  * Einleitung
    * Wer ändert wann welche Daten
    * Wer wird wie über Änderungen informiert
    * großes Problem in AngularJS Anwendungen
    * Angular lässt uns ebenfalls die Wahl
  * Demo: Master-Detail-Ansicht + nächste Schulung
  * Der Feind: Zwei-Wege-Data-Binding & Mutability
    * Shared Mutable Objects
    * Daten werden einfach geändert
    * Wer Binding hat wird aktualisiert
    * Führt zu viel Polling
  * Lösungsansatz: Funktional Reactive Programming
    * Observables
    * Immutable Data Structures
    * Pure Functions
    * Unidirectional Data Flow
  * eigener Ansatz mit Observables
  * Flux & Redux
    * Flux ist mehr ein Pattern als eine Implementierung
    * Redux greift Grundgedanken von Flux auf
      * etwas andere Namen
      * etwas schlanker
  * Tydux
    * Redux hat viel Redundanz beim Coden (Action Identifier)
    * Keine / wenig Typisierung in Redux
    * Fühlt sich oft kompliziert an
    * Tydux: Grundgedanke von Flux & Redux
      * schlanker, simple API
      * alles komplet typisiert (TypeScript)
      * erzwingt Unveränderbarkeit der Daten außerhalb von Mutators
  * RxJS
    * Keine Observables in Presentation-Components
    * async Pipe verwenden an Schnittstelle Container-Presentation
    * Keinen State über Subjects verwalten
  * EventSourcing
    * Events bis zum Server
    * Server speichert Events statt Zustand
    * Server hält aktuellen Zustand für Abfragen bereit


## Demos

* Service
  * TrainingService, TrainingExistGuard
* Components
  * Smart-vs-Dumb -> Schulung Liste / Details, Wiederverwendbarkeit Liste in Details
* EcmaScript Module
  * Statisch
  * Re-Exports am Beispiel von Angular
* Routing
  * Child-Routes pro Module: app.routes.ts und training.routes.ts
