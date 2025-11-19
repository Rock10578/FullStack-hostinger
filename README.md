## To Start with Frontend, Backend and Docker

To start with basic package.json file in backend
```bash
  npm init -y
```

To install Vite + React basic frontend page
```bash
  npm i vite@latest .
```

## Docker

Docker will build server named (express-server) as image in docker in current directory
```bash
  docker build -t express-server .
```

Run port local port : docker port image build in docker
```bash
  docker run -p 4000:4000 express-server
```