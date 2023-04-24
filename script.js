// Value 1 to create day warning, 2 to create month warning and 3 to create year warning... the second parameter is the warning message that you want to show (String)
function createWarning(value, message) {
    let label;
    let input;
    let div;
    const warning = document.createElement('p');
    warning.classList.add("warning");
    warning.textContent = message;

    switch (value) {
        case 1:
            label = document.querySelector('#dayInputLabel');
            input = document.querySelector('#dayInput');
            label.classList = "labelWithWarning";
            input.classList = "inputWithWarning";
            warning.setAttribute("id", "dayWarning");
            div = document.querySelector('#dayInputDiv');
            div.append(warning);
            break;
        case 2:
            label = document.querySelector('#monthInputLabel');
            input = document.querySelector('#monthInput');
            label.classList = "labelWithWarning";
            input.classList = "inputWithWarning";
            warning.setAttribute("id", "monthWarning");
            div = document.querySelector('#monthInputDiv');
            div.append(warning);
            break;
        case 3:
            label = document.querySelector('#yearInputLabel');
            input = document.querySelector('#yearInput');
            label.classList = "labelWithWarning";
            input.classList = "inputWithWarning";
            warning.setAttribute("id", "yearWarning");
            div = document.querySelector('#yearInputDiv');
            div.append(warning);
            break;
        default:
            break;
    }
}

// Value 1 to remove day warning, 2 to remove month warning and 3 to remove year warning
function removeWarning(value) {
    let warningToRemove;
    let label;
    let input;

    switch (value) {
        case 1:
            label = document.querySelector('#dayInputLabel');
            input = document.querySelector('#dayInput');
            warningToRemove = document.querySelector('#dayWarning');
            label.classList = "labelNormalStyle";
            input.classList = "inputNormalStyle";
            warningToRemove.remove();
            break;
        case 2:
            label = document.querySelector('#monthInputLabel');
            input = document.querySelector('#monthInput');
            warningToRemove = document.querySelector('#monthWarning');
            label.classList = "labelNormalStyle";
            input.classList = "inputNormalStyle";
            warningToRemove.remove();
            break;
        case 3:
            label = document.querySelector('#yearInputLabel');
            input = document.querySelector('#yearInput');
            warningToRemove = document.querySelector('#yearWarning');
            label.classList = "labelNormalStyle";
            input.classList = "inputNormalStyle";
            warningToRemove.remove();
            break;
        default:
            break;
    }
}

// verify if warning exists -> Value 1 for day warning, 2 for month warning and 3 for year warning
function warningExists(value) {
    switch (value) {
        case 1:
            return document.querySelector('#dayWarning') !== null;
        case 2:
            return document.querySelector('#monthWarning') !== null;
        case 3:
            return document.querySelector('#yearWarning') !== null;
        default:
            break;
    }
}

// Changes the style of a input back to normal
function inputNormalStyle(label, input) {
    label.classList = "labelNormalStyle";
    input.classList = "inputNormalStyle";
}

// Changes the style of the button back to normal
function buttonNormalStyle(button) {
    button.classList = "buttonNormalStyle";
}

// returns true when a day is valid (number between 1 and 31)... returns false when the day is not valid
function validDay(value) {
    const valueNumber = Number(value);
    const label = document.querySelector('#dayInputLabel');
    const input = document.querySelector('#dayInput');
    let myArray = Array.from(value);

    // if the day is not valid, it removes any warning that may exist for the day input and creates a new one, returning false
    if ((myArray.includes(".") == true || Number.isInteger(valueNumber) == false || valueNumber <= 0 || valueNumber > 31 || isNaN(valueNumber)) && value != '') {
        if(warningExists(1)) {
            removeWarning(1);
        }
        createWarning(1, "Must be a valid day");
        return false;
    } 
    
    // if the day is valid, it changes the input style back to normal, removes all the day input warnings and return true... if the value is empty ('') we just return false, because this means the user does not have inputed any information yet. We have another function (checkDateBeforeRun()) to deal with the case where the user click the button with this input still empty.
    else {
        inputNormalStyle(label, input);

        if (warningExists(1)) {
            removeWarning(1);
        }

        if (value == '') {
            return false;
        } else {
            return true;
        }
        
    }
}

// returns true when a month is valid (number between 1 and 12)... returns false when the month is not valid
function validMonth(value) {
    const valueNumber = Number(value)
    const label = document.querySelector('#monthInputLabel')
    const input = document.querySelector('#monthInput')
    let myArray = Array.from(value)

    // if the month is not valid, it removes any warning that may exist for the month input and creates a new one, returning false
    if ((myArray.includes(".") == true || Number.isInteger(valueNumber) == false || valueNumber <= 0 || valueNumber > 12 || isNaN(valueNumber)) && value != '')
    {
        if(warningExists(2) == true) {
            removeWarning(2)
        }
        createWarning(2, "Must be a valid month")
        return false;
    } 
    
    // if the month is valid, it changes the input style back to normal, removes all the month input warnings and return true... if the value is empty ('') we just return false, because this means the user does not have inputed any information yet. We have another function (checkDateBeforeRun()) to deal with the case where the user click the button with this input still empty.
    else {
        inputNormalStyle(label, input);

        if (warningExists(2) == true) {
            removeWarning(2)
        }

        if (value == '') {
            return false;
        } else {
            return true;
        }
    }
}

// returns true when a year is valid (number between 1 and the actual year)... returns false when the month is not valid
function validYear(value) {
    const valueNumber = Number(value)
    const label = document.querySelector('#yearInputLabel')
    const input = document.querySelector('#yearInput')
    const currentYear = new Date().getFullYear()  // returns the current year
    let myArray = Array.from(value)

    // if the year is not valid, it removes any warning that may exist for the year input and creates a new one, returning false
    if ((myArray.includes(".") == true || Number.isInteger(valueNumber) == false || valueNumber <= 0 || valueNumber > currentYear || isNaN(valueNumber)) && value != '')
    {
        if(warningExists(3) == true) {
            removeWarning(3)
        }
        createWarning(3, "Must be a valid year")
        return false;
    } 
    
    // if the year is valid, it changes the input style back to normal, removes all the year input warnings and return true... if the value is empty ('') we just return false, because this means the user does not have inputed any information yet. We have another function (checkDateBeforeRun()) to deal with the case where the user click the button with this input still empty.
    else {
        inputNormalStyle(label, input);

        if (warningExists(3) == true) {
            removeWarning(3)
        }

        if (value == '') {
            return false;
        } else {
            return true;
        }
    }
}

// verify if the date is a real date, in other words, if it exists in calendar
function dateExistsInCalendar(day, month, year) {
    let bornDate = new Date(year, (month-1), day);

    if (bornDate.getFullYear() == year && bornDate.getMonth() == (month-1) && bornDate.getDate() == day) {
        return true;
    }
    return false;
}

// basically, this function checks if there is some empty date input, if yes it creates a warning in the corresponding input... if all the inputs are not empty, the function checks if the date exists in calendar and also check if date is not in the past... after all the verifications mentioned previously, this function returns true if the date is ok to run the Age Calculator, and returns false if there is something wrong with the date inputed by user
function checkDateBeforeRun(day, month, year) {
    // the i variable is used to not calculate the age if there is something wrong with one or more fields
    let i = 0;

    if (day === '') {
        if (warningExists(1) == false) {
            createWarning(1, "This field is required");
        }
        i++;
    } 
    if (month === '') {
        if (warningExists(2) == false) {
            createWarning(2, "This field is required");
        }
        i++;
    } 
    if (year === '') {
        if (warningExists(3) == false) {
            createWarning(3, "This field is required");
        }
        i++;
    }
    if(i > 0) {
        return false;
    } else {
        if(dateExistsInCalendar(day, month, year)) {
            let bornDate = new Date(year, (month-1), day);
            let currentDate = new Date();
            if((currentDate.getTime() - bornDate.getTime()) < 0) {
                createWarning(1, "Date must be in the past");
                createWarning(2, "");
                createWarning(3, "");
                return false;
            }
            return true;
        }  else {
            const dateIsInCalendar = dateExistsInCalendar(day, month, year)
            if(warningExists(1) == false && dateIsInCalendar == false) {
                createWarning(1, 'Must be a valid date');
            }
            if(warningExists(2) == false && dateIsInCalendar == false) {
                createWarning(2, '');
            }
            if(warningExists(3) == false && dateIsInCalendar == false) {
                createWarning(3, '');
            }
            return false;
        }
    }
}

// calculate the age based on the day/month/year inputed by user
function calculateAge(dayInput, monthInput, yearInput) {
    const daysResultNumber = document.querySelector('#dayResultNumber');
    const monthsResultNumber = document.querySelector('#monthResultNumber');
    const yearsResultNumber = document.querySelector('#yearResultNumber');
    const dayResultDescription = document.querySelector('#dayResultDescription');
    const monthResultDescription = document.querySelector('#monthResultDescription');
    const yearResultDescription = document.querySelector('#yearResultDescription');

    let currentDate = new Date();
    let bornDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    let diff = currentDate.getTime() - bornDate.getTime();

    let age = new Date(diff);
    let years = age.getFullYear() - 1970;
    let months = age.getMonth();
    let days = age.getDate() - 1;

    // corrects the plural of the result descriptions
    if(years === 1) {
        yearResultDescription.textContent = "year";
    } else {
        yearResultDescription.textContent = "years";
    }
    if(months === 1) {
        monthResultDescription.textContent = "month";
    } else {
        monthResultDescription.textContent = "months";
    }
    if(days === 1) {
        dayResultDescription.textContent = "day";
    } else {
        dayResultDescription.textContent = "days";
    }

    daysResultNumber.textContent = days;
    monthsResultNumber.textContent = months;
    yearsResultNumber.textContent = years;
}

// run the ageCalculator
function runCalculator(dayInput, monthInput, yearInput) {
    if(checkDateBeforeRun(dayInput.value, monthInput.value, yearInput.value)) {
        calculateAge(dayInput, monthInput, yearInput);
        const button = document.querySelector('button');
        button.classList = "buttonBlackStyle";
    }
}

const dayInput = document.querySelector('#dayInput');
const monthInput = document.querySelector('#monthInput');
const yearInput = document.querySelector('#yearInput');
const button = document.querySelector('button');

dayInput.addEventListener('keyup', function() {validDay(dayInput.value)});
monthInput.addEventListener('keyup', function() {validMonth(monthInput.value)});
yearInput.addEventListener('keyup', function() {validYear(yearInput.value)});
monthInput.addEventListener('keydown', function() {buttonNormalStyle(button)});
yearInput.addEventListener('keydown', function() {buttonNormalStyle(button)});
button.addEventListener('click', function() {validDay(dayInput.value)});
button.addEventListener('click', function() {validMonth(monthInput.value)});
button.addEventListener('click', function() {validYear(yearInput.value)});
button.addEventListener('click', function() {runCalculator(dayInput, monthInput, yearInput)});