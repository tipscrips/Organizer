function createCalendar(elem, year, month) {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const mon = month - 1;
  const date = new Date(year, mon);
  const table = document.createElement("table");
  const headTr = document.createElement("tr");
  let tr = document.createElement("tr");
  table.append(headTr);
  table.append(tr);

  for (let day of days) {
    const th = document.createElement("th");
    th.textContent = day;
    headTr.append(th);
  }

  for (let i = 0; i < getDay(date); i++) {
    const td = document.createElement("td");
    tr.append(td);
  }

  while (date.getMonth() === mon) {
    const d = getDay(date);
    const td = document.createElement("td");
    td.append(date.getDate());
    tr.append(td);

    if (d === 6) {
      tr = document.createElement("tr");
      table.append(tr);
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) != 0) {
    for (let i = getDay(date); i < 7; i++) {
      const td = document.createElement("td");
      tr.append(td);
    }
  }

  elem.append(table);
}

function getDay(d) {
  let day = d.getDay();
  if (day === 0) {
    day = 7;
  }
  return --day;
}


let calendar = document.querySelector(".calendar");
createCalendar(calendar, 2023, 7);
