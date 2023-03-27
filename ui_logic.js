function convert() {
    // get the text from input
    let timestampsInput = document.getElementById('input').value;
    // get the amount to add
    let amount = document.getElementById('amount').value;
    // get the result
    let result = convertText(timestampsInput, amount).join('\n');
    // print the result on the output
    document.getElementById('output').value = result;
}

// add event listener to the button
document.getElementById('convert').addEventListener('click', convert);
// add sample to the input
document.getElementById('input').value = `00:00 المقدمة
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
53:39 ختام الحلقة`;