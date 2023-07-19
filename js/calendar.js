function createCalendar(elem, year, month) {
  let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = document.createElement("table");
  let mainTr = document.createElement("tr");
  let tr = document.createElement("tr");
  table.append(mainTr);
  table.append(tr);

  for (let i = 0; i < 7; i++) {
    let th = document.createElement("th");
    th.textContent = days[i];
    mainTr.append(th);
  }

  for (let i = 0; i < getDay(d); i++) {
    let td = document.createElement("td");
    tr.append(td);
  }

  while (d.getMonth() == mon) {
    let td = document.createElement("td");
    td.append(d.getDate());
    tr.append(td);

    if (getDay(d) == 6) {
      // вс, последний день - перевод строки
      tr = document.createElement("tr");
      table.append(tr);
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      let td = document.createElement("td");
      tr.append(td);
    }
  }

  document.body.append(table);
}

function getDay(date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}

let calendar = document.querySelector(".calendar");
createCalendar(calendar, 2023, 7);
