Lignes de lancement Docker + React :

docker build -t react-app:dev .
    - installe les dépendances (npm notamment)

docker run -p 5173:5173 react-app:dev
    - lance le serveur à l'adresse 5173