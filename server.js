const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// מאפשר לשרת לקבל נתוני JSON מהלקוח
app.use(express.json());

/**
 * הגדרת תיקיית public כתיקייה סטטית.
 * האופציה extensions מאפשרת לגשת לקבצים ללא ציון הסיומת .html
 */
app.use(express.static(path.join(__dirname, 'public'), {
    extensions: ['html']
}));

// ניתוב ברירת המחדל - שולח את דף ההרשמה (index.html) כשניגשים לכתובת ה-root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});