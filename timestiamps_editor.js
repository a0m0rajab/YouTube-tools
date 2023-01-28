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

function convertTimestamps(digits, amount) {  
    debugger      
        if (!hasHours(digits)) {
            digits.unshift(['00']);
        };
        digits = convertDigits(digits);

        let hours = getHours(digits),
            minutes = getMinutes(digits),
            seconds = getSeconds(digits);

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

        return `${(hours + '').padStart(2,'0')}:${(minutesWithAmount + '').padStart(2,'0')}:${(seconds + '').padStart(2,'0')}`;
}

function timeStamps(timestampsInput) {
    // split timestamps text by new line
    let timestamps = timestampsInput.split('\n');

    return timestamps
}

function convertText(text){
    let timestamps = timeStamps(text);
    let convertedTimeStamps = timestamps.map((line) => {
        // check if line is empty or has no digits
        if (line === '' || !getDigits(line)) {
            return line;
        }

        let digits = getDigits(line);
        let convertedTimeStamp = convertTimestamps(digits, -1);

        return convertedTimeStamp + line.substring(digits[digits.length-1].index + 2);
    });

    return convertedTimeStamps;
}

x = `
00:00 المقدمة
01:05 من هو أحمد علي؟ 🤔
06:10 كيف وصل المهندس احمد علي لمايكروسوفت في البداية؟ 🎁
12:20 ما هي التحديات التي تواجه رواد المنطقة للعمل في الشركات الكبرى؟ 🏦
18:05 ما هي طرق التجهيز للعمل في الشركات الكبرى؟  🎯
30:20 ما هو الفرق بين العمل في شركة محلية أو ناشئة وشركة كبرى؟ ⚖️
37:10 أهمية العمر في التوظيف واللآراء السياسية.
40:05 أهمية حل المشكلات في المقابلات الوظيفية.
41:15 هل من شهادات تنصح بها؟ 
43:15 هل المشاركة في المسابقات والمؤتمرات يزيد الفرصة؟ 
44:55 هل تشعر بالضغط النفسي وتعمل لساعات إضافية؟
46:02 ما هي نصائحكم للشباب العربي؟🌍
47:23 هل تحفز الشباب العربي على السعي بإطلاق المشاريع الخاصة بهم؟✨
50:10 هل من مصادر للتعلم باللغة الإنكليزية و باللغة العربية؟  🌱
53:39 ختام الحلقة`

console.log(convertText(x, -1).join('\n'))