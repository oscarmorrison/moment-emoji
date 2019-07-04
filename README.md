# moment-emoji
🕔 library that returns the approximate emoji for the time


## Use
- ensure you have moment, loaded first
- src moment-emoji.js (or copy in file into your js)

````
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
