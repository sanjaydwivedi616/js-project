
'use strict'

const url = 'http://localhost:3333/userInfoList';

document.querySelector('.updateBtn').style.display = 'none';

const tableHeader = {
    ID: 'ID',
    fristName: 'Frist Name',
    lastName: 'Last Name',
    sapid: 'Sap id',
    email: 'Email',
    contact: 'Contact',
    location: 'Location',
    gender: 'Gender',
    language: 'Language',
    action: 'Action'
}

const tableHeaderLength = Object.keys(tableHeader).length

//get request for data 
let data = {};

const getapi = async () => {
    document.querySelector('table').remove();

    try {
        const response = await axios.get(url);
        data = await response.data;
    } catch (error) {
        console.log(error)
    }

    //new code
    const tableArea = document.getElementById('tablearea');

    let table = document.createElement('table');
    table.setAttribute('class', 'table')
    let headdingTr = document.createElement('tr');

    Object.values(tableHeader).forEach(values => {
        var td = document.createElement('th');
        headdingTr.append(td)
        td.innerText = values
    });

    table.append(headdingTr);
    const dataLength = data.length;
    if (dataLength >= 1) {

        data.map(dataItem => {

            let dataTr = document.createElement('tr');

            Object.values(dataItem).forEach(item => {
                let td = document.createElement('td');
                dataTr.append(td)
                td.innerText = item;
            })

            let buttonTd = document.createElement('td');

            let editButton = document.createElement('button');
            editButton.setAttribute('onclick', `editUserInfo(${dataItem.id})`)
            editButton.innerText = 'Edit';

            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('onclick', `deleteUserInfo(${dataItem.id})`)
            deleteButton.setAttribute('class', 'deleteBtn')
            deleteButton.innerText = 'Delete';

            console.log(buttonTd.append(editButton));

            dataTr.append(buttonTd.appendChild(editButton))
            dataTr.append(buttonTd.appendChild(deleteButton))
            table.append(dataTr)
        })

    } else {

        const NodataFoundTr = document.createElement('tr');
        const NodataFoundTd = document.createElement('td');
        NodataFoundTr.appendChild(NodataFoundTd)
        NodataFoundTd.setAttribute('colSpan', tableHeaderLength)
        NodataFoundTd.setAttribute('class', 'text-center')
        NodataFoundTd.innerHTML = 'No data found';
        table.appendChild(NodataFoundTr);
    }
    tableArea.appendChild(table);
}

getapi();

//post data
const submitUserInfo = () => {
    const fristName = document.getElementById('fristName').value;
    const lastName = document.getElementById('lastName').value;
    const sapID = document.getElementById('sapID').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const location = document.getElementById('location').value;
    const selectedGender = document.querySelector("input[name = 'gender']:checked");
    const languag = document.querySelectorAll("input[type='checkbox']:checked");
    const languageSelected = [];

    languag.forEach(languag => {
        let checkbox = languag;
        if (checkbox.checked) {
            languageSelected.push(checkbox.value)
        }
    })

    switch (true) {

        case fristName == '':
            alert('Please fill first name');
            document.getElementById('fristName').focus();
            break;

        case lastName == '':
            alert('Please fill last name');
            document.getElementById('lastName').focus();
            break;

        case sapID == '':
            alert('Please fill sapID');
            document.getElementById('sapID').focus();
            break;

        case email == '':
            alert('Please fill sapID');
            document.getElementById('sapID').focus();
            break;

        case contact == '':
            alert('Please fill contact number');
            document.getElementById('contact').focus();
            break;

        case location == '':
            alert('Please select location');
            document.getElementById('location').focus();
            break;

        case selectedGender == null:
            alert('Please select gender');
            break;
    }

    const gender = selectedGender.value;
    const postData = {
        id: Math.random(),
        fristName, lastName, sapID, email, contact, location, gender, languageSelected
    }

    try {
        axios.post(url, postData);
        getapi();
        document.getElementById('userInfoForm').reset();
    } catch (error) {
        console.log(error)
    }
}

//update user information
const updateUserInfo = () => {
    const fristName = document.getElementById('fristName').value;
    const lastName = document.getElementById('lastName').value;
    const sapID = document.getElementById('sapID').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const location = document.getElementById('location').value;
    const gender = document.querySelector("input[name = 'gender']:checked").value;
    const languag = document.querySelectorAll("input[type='checkbox']:checked");
    const languageSelected = [];

    languag.forEach(languag => {
        let checkbox = languag;
        if (checkbox.checked) {
            languageSelected.push(checkbox.value)
        }
    })
    const updatedData = {
        id: Math.random(),
        fristName, lastName, sapID, email, contact, location, gender, languageSelected
    }
    try {
        axios.put(`${url}/${editId}`, updatedData);
        getapi();
        document.getElementById('userInfoForm').reset();
    } catch (error) {
        console.log(error)
    }

    document.querySelector('.updateBtn').style.display = 'none'
    document.querySelector('.submitBtn').style.display = 'block'
}

// delete data for db
const deleteUserInfo = (id) => {
    const com = confirm(`Do you wand delete this user ${id}`)
    try {
        if (com) {
            axios.delete(`${url}/${id}`)
            getapi();
        }
    } catch (error) {
        console.log(error)
    }
}

// edit data
let editId;
const editUserInfo = (id) => {
    editId = id;
    document.querySelector('.updateBtn').style.display = 'block';
    document.querySelector('.submitBtn').style.display = 'none';

    const filterData = data.find(data => {
        if (data.id == id) {
            return data
        }
    });

    const { fristName, lastName, sapID, email, contact, location } = filterData;

    document.getElementById('fristName').value = fristName;
    document.getElementById('lastName').value = lastName
    document.getElementById('sapID').value = sapID
    document.getElementById('email').value = email
    document.getElementById('contact').value = contact;
    document.getElementById('location').value = location;

    if (filterData.gender == 'Male') {
        document.querySelector(`input[value = 'Male']`).checked = true;
    } else {
        document.querySelector(`input[value = 'Female']`).checked = true;
    }

    for (let i = 0; i <= filterData.languageSelected.length; i++) {
        document.querySelector(`input[value = ${filterData.languageSelected[i]}`).checked = true;
    }
}
