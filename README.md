Package used :
cors
express


To start with basic package.json file in backend
npm init -y

To install Vite + React basic frontend page
npm i vite@latest .


Docker will build server named (express-server) as image in docker in current directory
docker build -t express-server .

Run port local port : docker port image build in docker
docker run -p 4000:4000 express-server
