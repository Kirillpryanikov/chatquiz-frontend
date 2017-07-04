# Quick guide

```git clone https://github.com/Kirillpryanikov/chatquiz-frontend```

## For run quiz application:
```cd quiz```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
###for dev:
```ionic serve```

## For run chat application:
```cd imagechat```
```npm install```
```npm install -g gulp``` (if needed)
```gulp```
##for dev:
```ionic serve```

#For production

After gulp command your project placed to www folder in each of applications.

####For production server you need to copy data that stored at these www folders to "dist" folder in backend application.

#####Example:

dist/quiz (content from quiz/www)

dist/chat (content from imagechat/www)
