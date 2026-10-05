export function calculateClassAverage(students, courseId) {
    const grades = students
        .map(student => student.courses.find(course => course.courseId === courseId))
        .filter(course => course !== undefined)
        .map(course => course.grade);

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

export function findTopStudent(students) {
    return students.reduce((best, current) =>
        current.getAverage() > best.getAverage() ? current : best
    );
}

export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}