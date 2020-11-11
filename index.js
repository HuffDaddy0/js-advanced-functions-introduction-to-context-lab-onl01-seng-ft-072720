const createEmployeeRecord = function(array){
    const [ firstName, familyName, title, payPerHour ] = array;
    const attributes = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
    return Object.assign({}, attributes);
};

const createEmployeeRecords = function(arrays){
    const records = arrays.map(createEmployeeRecord)
    return records
};