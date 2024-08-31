# Gunakan image Node.js versi LTS
FROM node:20-alpine

# Atur direktori kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Expose port 5173 untuk Vite
EXPOSE 5173

# Jalankan aplikasi React
CMD ["npm", "run", "dev"]
