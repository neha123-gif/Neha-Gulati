document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('1234');
  checkPageButton.addEventListener('click', function() {
  var loc = location.href;
  var url_ = "https://google.com?utm_source="+loc;
 // window.open("https://google.com", "_blank");
 window.open(url_, "_blank");
 // window.open("https://google.com", "_blank");
  
});

 var checkPageButton = document.getElementById('5678');
  checkPageButton.addEventListener('click', function() {
  window.close();
});


}, false);
  
