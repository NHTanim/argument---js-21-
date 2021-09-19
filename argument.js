// 






function getFullName(firstname, lastname) {
    let fullName = "";
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + " " + namePart; 
    }
    return fullName;
}

const name = getFullName ('Nazmul', 'Hossain', 'Tanim', 'Akash', 'Batash');
console.log(name);








// 