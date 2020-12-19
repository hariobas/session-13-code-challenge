var PersonLogic = require('../person/person.logic')

class PersonValidateLogic extends PersonLogic{
    constructor(...args) {
        super(...args)
    }

    validate(){
        if (this.nik.length < 16){
            return "NIK tidak valid, karakter < 16 digit."
        } else {
            var dateOfBirth = this.nik.substr(6, 6);
            var dateNIK = dateOfBirth.substr(0, 2);
            var monthNIK = dateOfBirth.substr(2, 2);
            var yearNIK = dateOfBirth.substr(4, 2);

            var dateInput = this.bod.substr(8, 2);
            var monthInput = this.bod.substr(5, 2);
            var yearInput = this.bod.substr(2, 2);

            if (monthNIK == monthInput && yearNIK == yearInput){
                if (dateNIK == dateInput){
                    return "NIK and DOB, MATCH! Gender: Male.";
                } else {
                    var diff = parseInt(dateNIK) - parseInt(dateInput);
                    if (diff == 40){
                        return "NIK and DOB, MATCH! Gender: Female.";                        
                    } else {
                        return "NIK and Date Of Birth, doesn't match.";
                    }
                }
            } else {
                return "NIK and Date Of Birth, doesn't match.";
            }
        }
    }
}

module.exports = PersonValidateLogic;  
