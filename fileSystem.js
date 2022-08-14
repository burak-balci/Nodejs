import { appendFile, readFile, unlink } from "fs";

appendFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  (err) => {
    if (err) console.log(err);
  }
);

readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

appendFile(
  "employees.json",
  '{"name": "Employee 2 Name", "salary": 4000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("Data successfully added");
  }
);

unlink("employees.json", (err) => {
  if (err) console.log(err);
});
