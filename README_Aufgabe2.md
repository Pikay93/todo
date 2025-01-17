# Bericht zu Sotwarequalität WS2023/2024

## Teilnehmer
Prathees Kumaravel          -Matrikel Nr. 30248993

## SonarQube Repo

## [SonarQube](https://hopper.fh-swf.de/sonarqube/project/information?id=todo_pk_SQ)

[![Quality Gate Status](https://hopper.fh-swf.de/sonarqube/api/project_badges/measure?project=todo_pk_SQ&metric=alert_status&token=sqb_4028052f1e65242d81df048f14c2e725ddb4cb17)](https://hopper.fh-swf.de/sonarqube/dashboard?id=todo_pk_SQ)

[Quality Gate Status](https://hopper.fh-swf.de/sonarqube/api/project_badges/measure?project=todo_pk_SQ&metric=alert_status&token=sqb_4028052f1e65242d81df048f14c2e725ddb4cb17)

## Vorgehensweise
- Anforderungen aus der [Aufgabe](https://github.com/fhswf/softwarequalitaet/tree/main/Exercises/CI_ToDo) umgesetzt
- [SonarQube](https://hopper.fh-swf.de/sonarqube/project/information?id=todo_pk_SQ) eingebunden
- GitHub Action SonarQube workflow erstellt
- Die benöitgten Keys, Root Cert und Variables als Secrets und Variables in GitHub hinterlegt
- [sonarqube.yml](./github/workflows/sonarqube.yml) und [build.yml](./github/workflows/build.yml) erstellt und in /.github/workflows in Repo eingebunden
- Init build.yml wurde aus SonarQube entnommen und mit Internetrecherche weiter ausgebaut
- die sonarqube.yml führt nach jedem push und pull request auf dem main branch die steps: npm install, npm coverage und npm test durch
- Coderefacotring aus dem SonarQube Report umgesetzt (Bugs und Security Review)
- Testcase ergänzt
- Bericht.md und ReadMe.md erstellt


## Herausforderungen
- Confgig erstellt für die Credentials der Datenbank
- Fehlerhafte Code Smells ausgeschlossen
- ungenutzte Pakete entfernt
- Bugs bereinigt
