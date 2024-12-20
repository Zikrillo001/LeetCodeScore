// script.js

const students = [
    { name: "Tukhtamishhoji-zoda Muhammad Nur Islom", account_name: "jdu211171", account_link: "https://leetcode.com/u/jdu211171/" },
    { name: "Azimxo'jayev Abdulazizxo'ja", account_name: "Kho_ja", account_link: "https://leetcode.com/u/Kho_ja/" },
    { name: "Ismoilova Soliha", account_name: "Ismoilova1031", account_link: "https://leetcode.com/u/Ismoilova1031/" },
    { name: "Kozokjonov Khushnudbek", account_name: "edSJVRbEh6", account_link: "https://leetcode.com/u/edSJVRbEh6/" },
    { name: "Pardayev Otabek", account_name: "pardayevotabek30gmailcom", account_link: "https://leetcode.com/u/pardayevotabek30gmailcom/" },
    { name: "Abdulaziz Yunusov", account_name: "ayunusov238", account_link: "https://leetcode.com/u/ayunusov238/" },
    { name: "Xamidjonov Fazliddin", account_name: "Fazliddin_001", account_link: "https://leetcode.com/u/Fazliddin_001/" },
    { name: "Amrullayev Nurbek", account_name: "Amrullayev", account_link: "https://leetcode.com/u/Amrullayev/" },
    { name: "Pulatov Abdufattoh", account_name: "abdufattohcoder2004", account_link: "https://leetcode.com/u/abdufattohcoder2004/" },
    { name: "Tillayev Xusniddin", account_name: "MrPyDeveloper", account_link: "https://leetcode.com/u/MrPyDeveloper/" },
    { name: "Farmonov Javohir", account_name: "javohir07", account_link: "https://leetcode.com/u/javohir07/" },
    { name: "Otajonov Jaloliddin", account_name: "otajonovmuhammadali", account_link: "https://leetcode.com/u/otajonovmuhammadali/" },
];

// Talaba natijalarini olish
async function getStudentResults(accountName) {
    try {
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${accountName}/solved`);
        if (!response.ok) {
            console.error('API xatosi:', response.status);
            return null;
        }
        const data = await response.json();
        console.log('API natijasi:', data); // Natijani konsolda tekshirish
        return data;
    } catch (error) {
        console.error('Xatolik:', error);
        return null;
    }
}

// Talabalar ro'yxatini HTMLga joylash
async function displayStudents() {
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = '<p class="loading">Yuklanmoqda...</p>';

    for (const student of students) {
        const data = await getStudentResults(student.account_name);

        // Agar natija bo'lsa, uni ko'rsatish
        const studentCard = document.createElement('div');
        studentCard.classList.add('student-card');

        let solvedMessage = 'Natija topilmadi';
        if (data) {
            solvedMessage = `${data.solvedProblem} masala yechildi (Jami ${data.totalSubmissionNum[0].count} topshiriq yuborildi)`;
        }

        studentCard.innerHTML = `
            <h2>${student.name}</h2>
            <p>LeetCode hisob: <a href="${student.account_link}" target="_blank">${student.account_name}</a></p>
            <p>Yecheilgan masalalar: ${solvedMessage}</p>
        `;

        studentsList.appendChild(studentCard);
    }
}

// Sahifa yuklanishi bilan talabalarni ko'rsatish
document.addEventListener('DOMContentLoaded', displayStudents);
