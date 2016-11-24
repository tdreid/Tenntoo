$(window).load(function(){
var timerMessage = 'It is time to work: ';
var workToggle = true;
var minWorked = 0;
var minGoofed = 0;
var bell = document.createElement('audio');
bell.setAttribute('src', 'http://soundbible.com/grab.php?id=1598&type=mp3');
var clock = $('#your-clock').FlipClock(600, {
  // ... your options here
  clockFace: 'MinuteCounter',
  countdown: true,
  callbacks: {
    start: function() {
      // $('#status-message').html('Time to get busy!');
    },
    stop: function() {
      workToggle = !workToggle;
      if (workToggle) {
        minGoofed += 2;
        $('#minutes-goofed').html(minGoofed);
        $('#status-message').html('Time to get busy!');
        $('#status-message').addClass('red').removeClass('blue');
        bell.load();
        bell.play();
        clock.setTime(600);
        clock.start();
      } else {
        minWorked += 10;
        $('#minutes-worked').html(minWorked);
        $('#status-message').html('You <strong>MUST</strong> goof off now!');
        $('#status-message').addClass('blue').removeClass('red');
        bell.load();
        bell.play();
        clock.setTime(120);
        clock.start();
      }
      $('#total-minutes').html(minGoofed + minWorked);
    }
  }
});
});
