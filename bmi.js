function cal() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  // var gender = document.querySelector('input[name="gender"]:checked').getAttribute('value');

  if (isNaN(height) || isNaN(weight) || height < 0 || weight <= 0) {
    alert("Please enter Valid height and weight");
    return;
  }

  var h = height * height;
  var bmi = weight / h;
  bmi = bmi.toFixed(2);

  let status = "";
  let imgUrl = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    imgUrl =
      "https://c8.alamy.com/comp/W3WRDG/illustration-of-an-underweight-man-in-skin-and-bones-W3WRDG.jpg";
    color = "#2196F3";
  } else if (bmi < 24.9) {
    status = "Normal";
    imgUrl =
      "https://howtodrawforkids.com/wp-content/uploads/2021/12/9-realistic-person-sketch-768x576.jpg";
    color = "#4CAF50";
  } else if (bmi < 29.9) {
    status = "Overweight";
    imgUrl =
      "https://th.bing.com/th/id/OIP.p3nk3BvN9UrXCX9uV4U93QHaHa?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain";
    color = "#FFC107";
  } else if (bmi > 30) {
    status = "Obese";
    imgUrl =
      "https://thumbs.dreamstime.com/z/obesity-poster-risk-consequence-prevention-method-vector-fat-people-health-problem-infographic-lifestyle-good-habits-254213826.jpg";
    color = "#F44336";
  }
  console.log(bmi);
  // document.getElementById('result').innerHTML = bmi ;
  const resultText = document.getElementById("result");
  resultText.innerHTML = `Your BMI is <strong>${bmi}</strong> — <strong>${status}</strong>`;

  const img = document.getElementById("img_img");
  img.innerHTML = `<img src="${imgUrl}" alt="${status}" width="150" />`;

  const bar = document.getElementById("progress-bar");
  const barWidth = Math.min(bmi * 3, 100);
  bar.style.width = barWidth + "%";
  bar.style.backgroundColor = color;
  bar.textContent = bmi;
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//close using escape button
document.addEventListener("keydown",function(event){
  if(event.key === "Escape"){
    modal.style.display = "none";
  }
});
