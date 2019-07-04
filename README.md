# moment-emoji
🕔 library that returns the approximate emoji for the time


## Use
- ensure you have moment (hard requirement), loaded first
- src moment-emoji.js (or copy in file into your js)

on any moment time, just called `moment().emoji()`

```
<html>

<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://raw.githack.com/oscarmorrison/moment-emoji/master/moment-emoji.js"></script>


<script>
  var time = moment();
  var emoji = time.emoji();
  console.log(time.format('hh:mm'), emoji);
</script>

</body>
</html>

```

## Demo

https://github.com/oscarmorrison/moment-emoji

<img width="362" alt="Screen Shot 2019-07-04 at 11 42 25 pm" src="https://user-images.githubusercontent.com/1651212/60671055-96560600-9eb5-11e9-9cb4-dafaba31918b.png">

## Usecase

Why would anyone ever use this? I used it for a quick [uebersicht](https://github.com/felixhageloh/uebersicht) widget that a made.

<img width="147" alt="Screen Shot 2019-07-04 at 11 49 22 pm" src="https://user-images.githubusercontent.com/1651212/60671430-6b1fe680-9eb6-11e9-8b7f-d70a18f47c92.png">

## Caveat

This was made on MacOS, not sure if it works on other platforms.

