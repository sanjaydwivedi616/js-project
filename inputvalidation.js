const characterOnly = (e) => {
    const charCode = e.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        return true;
    } else {
        return false;
    }
}

const numberOnly = (e) => {
    const charCode = e.keyCode;
    if ((charCode > 47 && charCode < 58)) {
        return true;
    } else {
        return false;
    }
}