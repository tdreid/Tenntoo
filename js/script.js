$(window).load(function(){
var timerMessage = 'It is time to work: ';
var workToggle = true;
var minWorked = 0;
var minGoofed = 0;
var bell = document.createElement('audio');
bell.setAttribute('src', 'http://soundbible.com/grab.php?id=1598&type=mp3');
function togglePhase(phase,increment,message,addMe,removeMe,setTime)
{
  phase += increment;
  $('#status-message').html(message);
  $('#status-message').addClass(addMe).removeClass(removeMe);
  bell.load();
  bell.play();
  clock.setTime(setTime);
  clock.start();  
  $('#total-minutes').html(minGoofed + minWorked);  
}
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
      workToggle ? togglePhase(minGoofed,2,'Time to get busy!','red','blue',600) : 
                   togglePhase(minWorked,10,'You <strong>MUST</strong> goof off now!','blue','red',120);
    }
  }
});
});
