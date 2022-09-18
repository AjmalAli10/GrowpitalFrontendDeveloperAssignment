const data = {
    "AccountName": "Current Account",
    "BankBalance": "XXXXX",
    "transactionamount" : 15000,
    "transactiondate": "2022-08-12 15:55",
    "PaymentType": {
        "Id": "X",
        "Name": "Bank to Wallet Transfer",
      },
    "senderDetails" : {
        "sender": "Saurabh Sharma",
        "bank" : "SBI",
        "IFSC": "SBIN016095",
        "accountno": "xxxxxxxxx5736",
        "transactiondate" : "2022-08-12 15:55",
        },
    "recieverDetails" : {
            "reciever": "Saurabh Sharma",
            "wallet" :" Growpital Wallet ",
            "referenceno": "DBTR/222201998174",
            "transactiondate" : "2022-08-12 15:55",
        },
    "paymentmethod": "UPI",
    "transactionId": "DBTR/222201998174",
}


function recieptDetails(data){
    console.log(data)
    const mainBox = document.getElementById("box-container");

    const tranferDetail = document.getElementById("tranfer-detail")
    const amount = document.getElementById("amount")
    const transactionDate = document.getElementById("general-date")

    tranferDetail.textContent = data.PaymentType.Name;
    amount.textContent = data.transactionamount;
    transactionDate.textContent = new Date(data.transactiondate).toLocaleString("en-IN",{
        year:"numeric",
        day :"numeric",
        month:"long",
        hour:"numeric",
        minute:"numeric",
        hour12:true,
    });
    mainBox.append(transactionDate);

    const sendRecieveDetails = document.getElementById("sendrecivedetails")
    const senderDetails = document.getElementById("sender");
    senderDetails.innerHTML = `
                                <p style="color:#FEBF32;">From</p>
                                <img src="/icon_image/SM.svg" class="sm"/>
                                <h2 style="color:#FFFFFF">${data.senderDetails.sender}</h2>
                                <p style="color:#FFFFFF">${data.senderDetails.bank}, IFSC ${data.senderDetails.IFSC}</p>
                                <p style="color:#FFFFFF">${data.senderDetails.accountno}</p>
                                <p style="color: #CCCDCC;">${new Date(data.transactiondate).toLocaleString("en-IN",{
                                    year:"numeric",
                                    day :"numeric",
                                    month:"long",
                                    hour:"numeric",
                                    minute:"numeric",
                                    hour12:true,
                                })}</p>`
    const recieveDetails = document.getElementById("reciever")
    recieveDetails.innerHTML = `
                                <p style="color:#FEBF32;">To</p>
                                <img src="/icon_image/rupee-wallet.svg" class="rupee-img"/>
                                <h2 style="color:#FFFFFF">${data.recieverDetails.reciever}</h2>
                                <p style="color:#FFFFFF">${data.recieverDetails.wallet}</p>
                                <p style="color:#FFFFFF">${data.recieverDetails.referenceno}</p>
                                <p style="color: #CCCDCC;">${new Date(data.transactiondate).toLocaleString("en-IN",{
                                    year:"numeric",
                                    day :"numeric",
                                    month:"long",
                                    hour:"numeric",
                                    minute:"numeric",
                                    hour12:true,
                                })}</p>`
    const paymentMethodId = document.getElementById("paymentmethod")
    paymentMethodId.innerHTML = `
                                <p style="color:#FFFFFF">Payment Method: ${data.paymentmethod}</p>
                                <img src="/icon_image/copy-files-svgrepo-com 1.svg" class="copy-img"/>
                                <p style="color: #CCCDCC;">Transaction Id: ${data.transactionId}</p>`

    sendRecieveDetails.append(senderDetails)
    sendRecieveDetails.append(recieveDetails)
    sendRecieveDetails.append(paymentMethodId)
}
recieptDetails(data)
