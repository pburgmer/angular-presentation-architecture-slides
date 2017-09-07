# Client-Architektur in Angular Projekten

## Links

* https://medium.com/curated-by-versett/building-maintainable-angular-2-applications-5b9ec4b463a1
* https://blog.javascripting.com/2016/05/21/the-problem-with-redux-and-how-to-fix-it/

## Struktur

* Datenfluss
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
* Data-Flow Problem
  * Master-Detail-Ansicht mit Sortierung
  * nächste Schulung
* Data-Flow Tydux
  * Zertifikate Generator
