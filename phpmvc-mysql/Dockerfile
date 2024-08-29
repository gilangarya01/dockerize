FROM php:8.1-apache

# Enable mod_rewrite
RUN a2enmod rewrite

# Install PDO and MySQL extensions
RUN docker-php-ext-install pdo pdo_mysql

# Copy custom configuration files
COPY config/000-default.conf /etc/apache2/sites-available/000-default.conf

# Ensure permissions for the web directory
RUN chown -R www-data:www-data /var/www/html

# Set up environment
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
