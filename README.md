# Tenntoo
- [![Code Climate](https://codeclimate.com/github/tdreid/Tenntoo/badges/gpa.svg)](https://codeclimate.com/github/tdreid/Tenntoo)

A preconfigured timer for the '(10+2)*5' procrastination hack described at [43folders.com (11 Oct 2005)](http://www.43folders.com/2005/10/11/procrastination-hack-1025)

[Click Here](https://tdreid.github.io/Tenntoo/) for a working demo.

![Tenntoo Screenshot](https://github.com/tdreid/Tenntoo/blob/master/docs/images/screenshot-tenntoo-2016-11-20-15-26-00.png?raw=true)

## Demonstrates:
* [Flipclock.js](http://flipclockjs.com/) with callback function to reconfigure timer when countdown complete

```javascript
var clock = $('#your-clock').FlipClock(600, {
  // ... your options here
  clockFace: 'MinuteCounter',
  countdown: true,
  callbacks: {

    start: function() {
      // do something when countdown starts
    },

    stop: function() {
      // do something when countdown complete
    }
  }
});
```

* Fetching a sound effect using 'audio' element

```javascript
var bell = document.createElement('audio');
bell.setAttribute('src', 'http://soundbible.com/grab.php?id=1598&type=mp3');
```
