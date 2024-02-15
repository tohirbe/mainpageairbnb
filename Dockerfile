# Ishlatiladigan Node.js obrazini tanlash
FROM Node.js v18.16.1

# Ishchi katalogini yaratish
WORKDIR /app

# Package.json va package-lock.json fayllarini kopyalash
COPY package*.json ./

# Node.js modullarini o'rnatish
RUN npm install

# Barcha fayllarni frontend katalogiga kopyalash
COPY . .

# Dasturni boshlash
CMD ["npm", "start"]
