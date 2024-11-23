function updatePage() {
  //Seoul
  let seoul = document.querySelector("#seoul");
  let seoulDate = seoul.querySelector(".date");
  let seoulTime = seoul.querySelector(".time");
  let seoulElement = moment().tz("Asia/Seoul");
  seoulDate.innerHTML = seoulElement.format("MMMM Do YYYY");
  seoulTime.innerHTML = seoulElement.format("hh:mm:ss[<small>]A[</small>]");

  //London
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  let londonElement = moment().tz("Europe/London");
  londonDate.innerHTML = londonElement.format("MMMM Do YYYY");
  londonTime.innerHTML = londonElement.format("hh:mm:ss[<small>]A[</small>]");

  //New York City
  let nyc = document.querySelector("#nyc");
  let nycDate = nyc.querySelector(".date");
  let nycTime = nyc.querySelector(".time");
  let nycElement = moment().tz("America/New_York");
  nycDate.innerHTML = nycElement.format("MMMM Do YYYY");
  nycTime.innerHTML = nycElement.format("hh:mm:ss[<small>]A[</small>]");

  //Sydney
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyElement = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydneyElement.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyElement.format("hh:mm:ss[<small>]A[</small>]");
}

updatePage();
setInterval(updatePage, 1000);
