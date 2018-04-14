# CourseAssigment-3
CA3 making a seed for our group

# Vejledning i at sætte seedet op
Vejledning består af 3 dele.
* Sæt jwtBackend op 
* Sæt frontend op (SPA)
* sæt seedMobilApp op (Mobile App)

# jwtBackend
Guiden tager udgangspunkt i at du bruger Netbeans, Visual Studio Code og et kommandline program. For at sætte jwtBackend op starter du med at downloade projektet fra Github. 

* Lav et schema i din lokale database, og husk schema navnet.
* Åben projektet i Netbeans og gå til Other Sources/src/main/resources/META_INF. Slet persistence.xml filen.
* Højre klik på projektet og lav en ny persistence unit som **SKAL** hedde **pu**. (Vær sikker på at du kan forbinde til din database. Brug det schema, du lige har lavet).
* Opret databasen(skal **KUN** gøres hvis det er første gang projektet køres lokalt). Åben Source Packages/Utils og kør **SetupTestUsers.java**. Dette opretter en test database.
* Åben Web Pages i Netbeans. Derefter højre klikker du på index.html og trykker på run file. Dette starter tomcat serveren, og en index side vises nu i browseren. Gem urlen uden /index.html dvs. den url du gemmer kan f.eks. se sådan ud: http://localhost:8084/jwtbackend 

jwtBackend er nu sat op, og klar til brug.



Skal hvis man vil køre frontenden med en deployed database skal url i en af de første linjer i api-facaden ændres til nedenstående:

databasen link https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/



for at arbejde med frontend skal der førse gang man henter programmet køres fælgende fra terminal
npm install
(npm install yarn) optional but faster

yarn add react-router-dom
# or, if you're not using yarn
npm install react-router-dom
 npm install react-navigation --save
 npm install jwt-decode
 
 
For at arbejde med SeedMobileApp skal følgende køres fra commandlinjen


npm install
  npm install -g create-react-native-app
  npm install react-navigation --save

  npm install jwt-decode
  
