function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง วิทยาลัยเทคโนโลยีบริหารธุรกิจรักไทย มีทั้งหมด 14 สาขา";
        result.style.color = 'green';
    } else {
        result.textContent = "คำตอบของคุณไม่ถูกต้อง";
        result.style.color = 'red';
    }
    
 }