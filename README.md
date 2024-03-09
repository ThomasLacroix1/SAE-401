Lignes de lancement Docker + React :

docker build -t sae401 .
    - installe les dépendances (npm notamment)

docker run -p 5173:5173 -v / sae401
    - lance le serveur à l'adresse 5173