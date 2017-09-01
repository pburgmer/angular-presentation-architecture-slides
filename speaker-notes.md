# Client-Architektur in Angular Projekten

## Struktur

* Einleitung
  * Was ist das Ziel des Talks / Workshops
    * Ideen aufzeigen
    * Keine fertigen Lösungen
    * Lösung ist immer individuell und Fall-abhängig
    * Vieles wahrscheinlich schon bekannt
    * Zusammenfassen / Überblick geben
  * Was ist Architektur (sehr vereinfacht)
    * Welche Software Komponenten gibt es
    * Wie spielen diese Zusammen (Relationship)
    * Wie grenzen sie sich von einander ab (Separation of Concern)
  * Wie lässt sich Architektur bewerten
    * Quantitativ mit Metriken? Eher für Code-Qualität statt für Architektur
    * Qualitativ mit Design & Review
    * Prüfen ob bzw. wie nicht funktionale Anforderungen erfüllt werden
      * Wartbarkeit
      * Erweiterbarkeit
      * Wiederverwendbarkeit
      * Performance
      * Testbarkeit
      * Verständlichkeit / Nachvollziehbarkeit
    * Dokumentation
      * wie bei Code auch: guter Code = dokumentierter oder selbsterklärender 
    * Meine Erfahrung
      * einige große, grundlegende Entscheidungen
      * aber auch viele kleine Entscheidungen
      * kleine Unaufmerksamkeiten können die schönste Architektur zerstören
      * oder zeigen sie nur Fehler auf?
Code
  * Style-Guide (https://angular.io/docs/ts/latest/guide/style-guide.html) t
    * Style: wie sollte man was in Angular machen, was ist Best-Practice 
    * Guide: es ist eine Empfehlung, keine Verpflichtung
    * Aber: Beschreibt keine komplette Architektur
  * Main Building-Blocks in Angular
    * Module
    * Componenten & Data-Binding
    * Services & DI
* Services & Dependency Injection
  * Service sollte keine direkten UI Sachen machen
  * kapselt irgendwelche Funktionalität
  * Schneiden von Services
    * Sehr wichtig für gute Architektur
    * Schwierig, keine Blaupause
    * 1 Zuständigkeit wichtigstes Merkmal (Single-Responsibility-Prinzip)
    * Indiz: Testbarkeit
  * DI wichtig für Lose Kopplung
    * Zwingt uns eigene Abhängigkeiten sichtbar zu machen (Konstruktor-Parameter)
    * Bindet uns nicht an konkrete Implementierung
    * Bindet uns nicht an Umgebung (Wiederverwendbarkeit)
    * Abhängkeiten mockbar (Testbarkeit)
* Komponenten
  * Smart vs Dumb
    * Testbarkeit, Wiederverwendbarkeit
    *  ähnlich wie lose Kopplung von Services per DI
  * Data-Binding (Property-Bindings, Event-Bindings, ChangeDetectionStrategy)
  * Styling (encapsulated vs global)
  * Interaktion (@ViewChild)
  * Rendering (@HostBinding)
* Modularisierung
  * ES Modules
    * Re-Exports zum Verstecken der tieferen Struktur
  * NgModules
    * Problem: keine Isolation für Providers
    * Re-Export macht es unübersichtlich
      * BrowserModule re-exportiert CommonModule (https://github.com/angular/angular/blob/master/packages/platform-browser/src/browser.ts)
      * BrowserModule darf aber nur einmal eingebunden werden
      * In AppModule BrowserModule, in FeatureModule CommonModule importieren
      * Nachvollziehbarkeit: Warum kann ich in AppComponent ngIf verwenden obwohl kein CommonModule importiert wird
      * zu viel Wissen vorausgesetzt
      * Warum nicht in AppModule BrowserModule und CommonModule importieren?
  * NPM Packages
    * Wiederverwendbare / allgemeine Teile auslagern (Bibliothek)
    * Private Repos (Nexus / Artifactory / NPM INC)
    * Problem: Build, CLI nur für Anwendungen, nicht für Libs
* Routing
  * Child-Routes + Relative Navigation
  * Lazy-Loading
    * Achtung mit Providern
* Datenfluss
  * Einleitung
    * großes Problem in ng1 Anwendunge
    * ng2 lässt uns ebenfalls die Wahl
    * Wer ändert wann die Daten
    * Wer wird wie über Änderungen benachrichtigt
  * Lösungsansatz: Funktional Reactive Programming
    * Observables
    * Immutable Data Structures
    * Pure Functions
    * Unidirectional Data Flow
  * eigener Ansatz mit Observables
  * Redux
  * SAM
    * https://www.youtube.com/watch?v=vDZsawI9UNM
  * EventSourcing
    * Events bis zum Server
    * Server speichert Events statt Zustand
    * Server hält aktuellen Zustand für Abfragen bereit
* Zusammenfassung