# Quick guide

```git clone https://github.com/Kirillpryanikov/chatquiz-frontend```

## For run quiz application:
```cd quiz```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
```ionic serve```


## For run chat application:
```cd imagechat```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
```ionic serve```
###After execute gulp command, application will builded, and located at ./www folder
###Important!
## there is a constant in the file in file app/app.js
```.constant('BaseURL', 'http://192.168.0.110:8080/')```
change to your server address!


## For dev quiz application:
```cd quiz```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
###After execute gulp command, application will builded, and located at ./www folder

###Important!
## there is a constant in the file in file app/app.js
```.constant('BaseURL', 'http://192.168.0.110:8080/')```
change to your server address!
