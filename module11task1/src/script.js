export function getPercents(percent, number) {
  if (percent < 0) {
    let error = "Отрицательный процент рачитать нельзя!";
    console.log(error);

    return error;
  }

  let result = (number / 100) * percent;
  console.log(result);

  return result;
}

getPercents(30, 200);
