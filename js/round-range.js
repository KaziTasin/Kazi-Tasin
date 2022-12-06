
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.75,
    fill: { gradient: ["#ffb400", "#ffb400"] },
  };
  
$(".circle .bar")
.circleProgress(options)
.on("circle-animation-progress", function (event, progress, stepValue) {
  $(this)
    .parent()
    .find("span")
    .text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".css .bar").circleProgress({
value: 0.85,
});
$(".jQuery .bar").circleProgress({
value: 0.8,
});
$(".javascript .bar").circleProgress({
value: 0.25,
});
$(".react .bar").circleProgress({
value: 0.15,
});
$(".bootstrap .bar").circleProgress({
value: 0.9,
});
$(".tailwind .bar").circleProgress({
value: 0.45,
});
$(".bem .bar").circleProgress({
value: 0.88,
});
