import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import { calculateClassAverage, findTopStudent, filterStudents } from "./analytics.js";

console.log("Fetching data from database...");

fetchStudents((rawData) => {
    console.log("Data received!");

    const students = rawData.map(item => new Student(item.id, item.name, item.courses));

    console.log("\nTesting Immutability:");
    const originalId = students[0].id;
    console.log(`Original ID: ${originalId}`);
    console.log("Attempting to change ID to 999...");

    try {
        students[0].id = 999;
    } catch (error) {

    }

    if (students[0].id === originalId) {
        console.log(`Final ID: ${students[0].id} (Success: ID did not change)`);
    } else {
        console.log(`Final ID: ${students[0].id} (Fail: ID changed)`);
    }

    console.log("\n--- Analytics Report ---");

    const average101 = calculateClassAverage(students, 101);
    console.log(`Class Average for Course 101: ${average101.toFixed(2)}`);

    const topStudent = findTopStudent(students);
    console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`);

    const course102Students = filterStudents(students, student =>
        student.courses.some(course => course.courseId === 102)
    );
    console.log(`Students in Course 102: ${course102Students.map(student => student.name).join(", ")}`);
});