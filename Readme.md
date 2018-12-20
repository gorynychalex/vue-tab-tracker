Create full stack application.
This proj uses vue.js and express.js frameworks.

https://youtu.be/Fa4cRMaTDUI
https://github.com/codyseibert/tab-tracker

 - 1.01. Create github project. MIT-license
 - 1.02. \# git clone https://github.com/codyseibert/tab-tracker.git
 - 1.03. https://github.com/vuejs/vue-cli
 - 1.04. \# npm install -g vue-cli
# Client
 - 1.05. \# vue init webpack client
 - 1.06. \# cd client
 - 1.07. \# npm install
 - 1.08. \# npm run dev

# Server
 - 1.09. \# cd .. && mkdir server && cd server
 - 1.10. \# npm init -f
 - 1.11. \# npm install
 - 1.12. \# npm install --save nodemon eslint
 - 1.13. \# mkdir src && touch src/app.js
 - 1.14. \# node ./node_modules/eslint/bin/eslint.js --init
 - 1.15. \# npm start
 - 1.16. \# npm install
 - 1.17. \# npm install --save express body-parser cors morgan
 - 1.18. refactor server/src/app.js: add express bodyParser cors morgan and get-req,res with endpoint status 
 - 1.19. 
