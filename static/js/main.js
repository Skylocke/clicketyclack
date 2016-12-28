$(".click-tally").on("click", function(event) {
  event.preventDefault();
  console.log(event);
  console.log(window.location);

  var count = $(".click-tally").siblings("h1");
  console.log(count.text());
  var id = event.target.dataset.id;
  var name = event.target.dataset.name;
  var clicks = event.target.dataset.clicks;
  console.log(name, clicks);

  clicks++;

  var url = "/everyone/" + name;
  var click_data = { clicks: clicks };
  console.log(name, clicks);

  $.ajax({
    method: "PUT",
    url: url,
    data: click_data
  }).then(function(data) {
    console.log("success", data);
    event.target.dataset.clicks = clicks;
    count.text(event.target.dataset.clicks);
  });

});
