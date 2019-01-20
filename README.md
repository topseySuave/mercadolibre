### Mercadolibre API consumption and visualization

Visit app [https://mercadolibre-ciu0gd996.now.sh](https://mercadolibre-ciu0gd996.now.sh)

![](https://github.com/topseySuave/mercadolibre/blob/master/public/Screen%20Shot%202019-01-19%20at%208.53.46%20PM.png)

## to install and run first clone this repo

```
git clone https://github.com/topseySuave/mercadolibre.git
```
with `http` or 

```
git clone git@github.com:topseySuave/mercadolibre.git
```
with `ssh`.

```
cd into the directory `cd mercadolibre` and run `yarn install`
```

After installing, you should be able to run the application by simply running this command
```
yarn start
```

and Enjoy!.

### To Deploy
I used `now` for this app, and the way to go about it is to first install `now-cli` if you don't have that already
```
npm install -g now
```

and login
```
now login <email>
```

and then follow instructions. When you have successfully logged in now let's deploy by just running
```
yarn deploy
```

I set up a script in package file `"deploy": "yarn build && cd build && now"` which will first build the application
and then go into the build folder and run `now` to deploy and create a url for the deployed app.

Thanks and have a nice day.


