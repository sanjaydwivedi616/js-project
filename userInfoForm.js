
//creating user info form 

(function () {
    'use strict'

    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'userInfoForm');

    let firstNamelabel = document.createElement('label');
    firstNamelabel.innerHTML = 'Frist Name :';

    let fristName = document.createElement('input');
    fristName.setAttribute('type', 'text');
    fristName.setAttribute('placeholder', 'First Name');
    fristName.setAttribute('id', 'fristName');
    fristName.setAttribute('maxlength', '20');
    fristName.setAttribute('onkeypress', 'return characterOnly(event)');

    let lastNamelabel = document.createElement('label');
    lastNamelabel.innerHTML = 'Last Name :';

    let lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('id', 'lastName');
    lastName.setAttribute('maxlength', '20');
    lastName.setAttribute('onkeypress', 'return characterOnly(event)');

    let sapIDlabel = document.createElement('label');
    sapIDlabel.innerHTML = 'Sap ID :';

    let sapID = document.createElement('input');
    sapID.setAttribute('type', 'text');
    sapID.setAttribute('placeholder', 'Sap ID');
    sapID.setAttribute('id', 'sapID');
    sapID.setAttribute('maxlength', '6');
    sapID.setAttribute('onkeypress', 'return numberOnly(event)');


    let emaillabel = document.createElement('label');
    emaillabel.innerHTML = 'Email :';

    let email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('placeholder', 'Email Id');
    email.setAttribute('id', 'email');

    let contactlabel = document.createElement('label');
    contactlabel.innerHTML = 'Contact :';

    let contact = document.createElement('input');
    contact.setAttribute('type', 'text');
    contact.setAttribute('placeholder', 'Contact no.');
    contact.setAttribute('maxlength', '10');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('onkeypress', 'return numberOnly(event)');

    let locationlabel = document.createElement('label');
    locationlabel.innerHTML = 'Location :';

    const locationName = ['', 'Bangalore', 'Delhi', 'Pune'];
    let userLocation = document.createElement('select');
    userLocation.setAttribute('id', 'location');

    locationName.map(location => {
        let option = document.createElement('option');
        option.value = location;
        option.text = location;
        userLocation.appendChild(option);
    })

    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('value', 'Submit');
    submitButton.setAttribute('class', 'submitBtn');
    submitButton.setAttribute('onclick', 'submitUserInfo()');

    let updateButton = document.createElement('input');
    updateButton.setAttribute('type', 'button');
    updateButton.setAttribute('value', 'update');
    updateButton.setAttribute('class', 'updateBtn');
    updateButton.setAttribute('onclick', 'updateUserInfo()');

    form.appendChild(firstNamelabel);
    form.appendChild(fristName);
    form.appendChild(lastNamelabel);
    form.appendChild(lastName);
    form.appendChild(sapIDlabel);
    form.appendChild(sapID);
    form.appendChild(emaillabel);
    form.appendChild(email);
    form.appendChild(contactlabel);
    form.appendChild(contact);
    form.appendChild(locationlabel);
    form.appendChild(userLocation);

    let genderlabel = document.createElement('label');
    genderlabel.innerText = 'Gender :';
    form.appendChild(genderlabel);

    const gender = ['Male', 'Female'];
    let labelValue, inputValue
    gender.forEach((genederValue) => {
        labelValue = document.createElement('label');
        labelValue.innerText = genederValue;
        inputValue = document.createElement('input');
        inputValue.type = 'radio'
        inputValue.setAttribute('name', 'gender');
        inputValue.setAttribute('value', genederValue);
        form.appendChild(inputValue);
        form.appendChild(labelValue);

    });

    const language = ['Hindi', 'English', 'French'];
    let languagelabel = document.createElement('label');
    languagelabel.innerText = 'Language :';
    form.appendChild(languagelabel);

    language.map((languageValue) => {
        let inputBox = document.createElement('input');
        inputBox.type = 'checkbox';
        let labelBox = document.createElement('label');
        labelBox.innerText = languageValue;
        inputBox.setAttribute('value', languageValue);
        form.appendChild(labelBox);
        form.appendChild(inputBox);
    });

    form.appendChild(submitButton);
    form.appendChild(updateButton);
    document.getElementById('userDetailsForm').appendChild(form);

}())