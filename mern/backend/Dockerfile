# Gunakan image Node.js versi LTS
FROM node:20-alpine

# Atur direktori kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Salin semua file ke dalam container
COPY . .

# Expose port 3000 untuk Express
EXPOSE 3000

# Jalankan server menggunakan nodemon
CMD ["nodemon", "server.js"]
