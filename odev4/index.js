const fs = require("fs");

setTimeout(() => {
  fs.writeFile(
    "employees.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("Basarili bir sekilde dosya olusturuldu");
    }
  );
}, 3000);

setTimeout(() => {
  fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("Basarili bir sekilde okundu");
  });
}, 3000);

setTimeout(() => {
  fs.appendFile(
    "employees.json",
    '{"name": "Employee 2 Name", "salary": 5000}',
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("Veri basarili bir sekilde eklendi");
    }
  );
}, 3000);

setTimeout(() => {
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("Basarili bir sekilde silindi");
  });
}, 5000);
