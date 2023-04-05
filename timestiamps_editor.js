// get all digits from a line
const getDigits = (line) => [...line.matchAll(/\d+/g)];

// convert all digits into a number
const convertDigits = (digits) => digits.map((digit) => Number(digit[0]));

// check if there is hours stamp 
const hasHours = (digits) => digits.length === 3;

// get hours from a digits array
const getHours = (digits) => digits[0];

// get minutes from a digits array
const getMinutes = (digits) => digits[1];

// get seconds from a digits array
const getSeconds = (digits) => digits[2];

// convert hours to minutes
const hoursToMinutes = (hours) => hours * 60;

// add hours and minutes
const addHoursAndMinutes = (hours, minutes) => hours + minutes;

// converts minutes to hours
const minutesToHours = (minutes) => minutes / 60;

// add amount to minutes
const addMinutes = (minutes, amount) => minutes + amount;

function convertTimestamps(digits, amount, secondsInput) {  
        amount = Number(amount);
      
        if (!hasHours(digits)) {
            digits.unshift(['00']);
        };
        digits = convertDigits(digits);

        let hours = getHours(digits),
            minutes = getMinutes(digits),
            seconds = getSeconds(digits) + Number(secondsInput);

        hours = hoursToMinutes(hours);
        minutes = addHoursAndMinutes(hours, minutes);

        let minutesWithAmount = addMinutes(minutes, amount);

        if (minutesWithAmount >= 60) {
            hours = parseInt(minutesToHours(minutesWithAmount));
            minutesWithAmount = minutesWithAmount % 60;
        }

        if (minutesWithAmount < 0 ) {
            minutesWithAmount = 0;
        }

        if (hours < 0) {
            hours = 0;
        }

        if (seconds >= 60) {
            minutesWithAmount = minutesWithAmount + parseInt(seconds / 60);
            seconds = seconds % 60;
        }
        
        if (minutesWithAmount <= 0 && seconds <= 0) {
            seconds = 0;
        }

        if (seconds < 0) {
            debugger
            minutesWithAmount = minutesWithAmount + parseInt(seconds / 60);
            seconds = 60 + (seconds % 60);
        }

        return `${(hours + '').padStart(2,'0')}:${(minutesWithAmount + '').padStart(2,'0')}:${(seconds + '').padStart(2,'0')}`;
}

function timeStamps(timestampsInput) {
    // split timestamps text by new line
    let timestamps = timestampsInput.split('\n');

    return timestamps
}

function convertText(text, amount, seconds){
    let timestamps = timeStamps(text);
    let convertedTimeStamps = timestamps.map((line) => {
        // check if line is empty or has no digits
        if (line === '' || !getDigits(line)) {
            return line;
        }

        let digits = getDigits(line);
        let convertedTimeStamp = convertTimestamps(digits, amount, seconds);

        return convertedTimeStamp + line.substring(digits[digits.length-1].index + 2);
    });

    return convertedTimeStamps;
}

x = `
`

console.log(convertText(x, -1).join('\n'))