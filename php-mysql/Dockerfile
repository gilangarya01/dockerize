FROM php:8.1-apache

# Install PDO and MySQL extensions
RUN docker-php-ext-install pdo pdo_mysql

# Ensure permissions for the web directory
RUN chown -R www-data:www-data /var/www/html

# Set up environment
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
