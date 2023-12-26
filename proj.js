function converttemprature(){
    const inputTemprature= parseFloat(document.getElementById("num").value);

    const unit=document.getElementById("unit").value;

    let converttemprature;
    if(unit=='fahrenheit')
    {
        converttemprature=(inputTemprature*9/5)+32;
        document.getElementById("results").textContent=converttemprature;
    }
    else if(unit=='kelvin'){
        converttemprature=inputTemprature+273.15;
        document.getElementById("results").textContent= converttemprature;


    }
    else{

    }
}