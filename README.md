# Web-Lab3

## File Organization

- `models.js`: Student class is here. The id is read-only (made with Object.defineProperty).
- `database.js`: Fake database. It sends the student data after 2 seconds using setTimeout.
- `analytics.js`: Functions for the report (class average, top student, filtering students).
- `main.js`: Main file. Gets the data, creates the students and prints the results.

To run: `node main.js`

## Challenges

- I learned that files using import/export run in strict mode, so changing a read-only id throws a TypeError instead of being ignored. I used try/catch so the program doesn't stop.
- I wrote `valude` instead of `value` in defineProperty and the id became undefined. There was no error, so it was hard to notice. Same thing happened when I wrote `course` instead of `courses` in the data.

Note: In the example output Zeynep is the top student, but Ali's average (87.5) is higher than Zeynep's (82.5), so my program prints Ali.