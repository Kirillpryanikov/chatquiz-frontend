# Quick guide

```git clone https://github.com/Kirillpryanikov/chatquiz-frontend```

## For run quiz application:
```cd quiz```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
###for dev:
```ionic serve```
###for deploy:
application will builded, and located at ./www folder

###Important!
## there is a constant in the file in file app/app.js
```.constant('BaseURL', 'http://192.168.0.110:8080/')```
change to your server address! and rebuild it ```gulp```



## For run chat application:
```cd imagechat```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
###for dev:
```ionic serve```
###for deploy:
application will builded, and located at ./www folder

###Important!
## there is a constant in the file in file app/app.js
```.constant('BaseURL', 'http://192.168.0.110:8080/')```
change to your server address! and rebuild it ```gulp```
