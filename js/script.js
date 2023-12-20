document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isTransitioning = false;
  
    function nextSlide() {
      if (!isTransitioning) {
        isTransitioning = true;
        setTimeout(() => {
          const firstSlide = slider.firstElementChild;
          slider.style.transition = "none";
          slider.style.transform = "translateX(0)";
          setTimeout(() => {
            slider.style.transition = "transform 1s ease-in-out";
            firstSlide.parentNode.appendChild(firstSlide);
            isTransitioning = false;
          }, 0);
        }, 1000);
      }
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  });
  

function setSenderUI(name, birthDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if(name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name,birthDate,gender,messages);

    return false;
}