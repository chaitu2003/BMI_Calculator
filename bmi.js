function cal(){
            var height = parseFloat(document.getElementById('height').value);
            var weight = parseFloat(document.getElementById('weight').value);

            if(isNaN(height) || isNaN(weight) || height<0 || weight<=0){
                alert("Please enter Valid height and weight");
                return;
            }
            
            var h = height * height
            var bmi = weight / (h);
            bmi = bmi.toFixed(2);

            let status = "";
            let imgUrl = "";
            let color = "";

            if (bmi < 18.5) {
            status = "Underweight";
            imgUrl = "https://c8.alamy.com/comp/W3WRDG/illustration-of-an-underweight-man-in-skin-and-bones-W3WRDG.jpg";
            color = "#2196F3";
        } else if (bmi < 24.9) {
            status = "Normal";
            imgUrl="https://howtodrawforkids.com/wp-content/uploads/2021/12/9-realistic-person-sketch-768x576.jpg";
            color = "#4CAF50";
        } else if (bmi < 29.9) {
            status = "Overweight";
            imgUrl="https://th.bing.com/th/id/OIP.p3nk3BvN9UrXCX9uV4U93QHaHa?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain";
            color = "#FFC107";
        } else {
            status = "Obese";
            imgUrl="https://thumbs.dreamstime.com/z/obesity-poster-risk-consequence-prevention-method-vector-fat-people-health-problem-infographic-lifestyle-good-habits-254213826.jpg";
            color = "#F44336";
        }
            console.log(bmi);
            // document.getElementById('result').innerHTML = bmi ;   
            const resultText = document.getElementById('result');
            resultText.innerHTML = `Your BMI is <strong>${bmi}</strong> — <strong>${status}</strong>`;

            const img = document.getElementById('img_img');
            img.innerHTML = `<img src="${imgUrl}" alt="${status}" width="150" />`;

            const bar = document.getElementById('progress-bar');
            const barWidth = Math.min(bmi * 3, 100); 
            bar.style.width = barWidth + "%";
            bar.style.backgroundColor = color;
            bar.textContent = bmi;
            
        }
