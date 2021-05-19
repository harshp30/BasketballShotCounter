$('.make').click(function() {
  $('.make-count').html(function(i, buckets) {
    return buckets * 1 + 1
  });
  $('.miss-count').html(function(i, shots) {
    return shots * 1 + 1
  });
});

$('.miss').click(function() {
  $('.miss-count').html(function(i, shots) {
    return shots * 1 + 1
  });
});


$(".dark").click(function() {
  $(".dark").animate({
    opacity: 0.8
  }, 1).delay(5).animate({
    opacity: 1
  });
  $("body").css("background-color", "black");
  $("#title").css("color", "white");
  $("footer").css("color", "white");
  $(".shot").css("background-color", "#57668f");
  $(".mode").css("background-color", "#57668f");
  $(".shot").css("border-color", "#404B69");
  $(".mode").css("border-color", "#404B69");
  $(".counters").css("color", "white");
});

$(".light").click(function() {
  $(".light").animate({
    opacity: 0.8
  }, 1).delay(5).animate({
    opacity: 1
  });
  $("body").css("background-color", "white");
  $("#title").css("color", "black");
  $("footer").css("color", "black");
  $(".shot").css("background-color", "white");
  $(".mode").css("background-color", "white");
  $(".shot").css("border-color", "black");
  $(".mode").css("border-color", "black");
  $(".counters").css("color", "black");
});

$(".classic").click(function() {
  $(".classic").animate({
    opacity: 0.8
  }, 1).delay(5).animate({
    opacity: 1
  });
  $("body").css("background-color", "#283149");
  $("#title").css("color", "#DBEDF3");
  $("footer").css("color", "#DBEDF3");
  $(".shot").css("background-color", "white");
  $(".mode").css("background-color", "white");
  $(".shot").css("border-color", "#404B69");
  $(".mode").css("border-color", "#404B69");
  $(".counters").css("color", "white");
});

$(".arcade").click(function() {
  $(".arcade").animate({
    opacity: 0.8
  }, 1).delay(5).animate({
    opacity: 1
  });
  $("body").css("background-color", "#e67300");
  $("#title").css("color", "white");
  $("footer").css("color", "white");
  $(".shot").css("background-color", "#57668f");
  $(".mode").css("background-color", "#57668f");
  $(".shot").css("border-color", "#404B69");
  $(".mode").css("border-color", "#404B69");
  $(".counters").css("color", "white");
});

$(".session-end").click(function() {
  alert("Refresh the page to start a new session");
  $(".session-end").animate({
    opacity: 0.8
  }, 1).delay(5).animate({
    opacity: 1
  });
});
