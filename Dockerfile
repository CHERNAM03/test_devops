# Utiliser l'image officielle Nginx
FROM nginx:alpine

# Copier les fichiers du projet dans le dossier par défaut de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 pour le conteneur
EXPOSE 80