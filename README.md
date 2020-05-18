# goOnAndGIT
this is for version control / collaboration practice. Or for whatever we want to test out.
Test1:AE  


To start program, open 2 shell windows.
1: npm start
2: npm run build


To run mongoDB-
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb

if homebrew installed already, open terminal and enter:
brew tap mongodb/brew
brew install mongodb-community@4.2
brew services start mongodb-community@4.2

to stop brew service mongodb, open terminal and enter:
brew services stop mongodb-community@4.2


https://mongoosejs.com/docs/4.x/docs/connections.html
how to connect mongodb using mongoose:
first you need to whitelist your ip address. mongodb will only allow users from certain ip addresses,
so be sure to validate through mongodb website. 