import { getPercents } from "./script";

describe("тестирование правильности подсчета функции", () => {
  it("ожидается что функция правильно выведет процент от числа", () => {
    expect(getPercents(30, 200)).toBe(60);
  }),
    it("ожидается что функция вернет NaN", () => {
      expect(getPercents("asd", 200)).toBe(NaN);
    }),
    it("ожидается что функция правильно выведет ошибку при отрицательном проценте", () => {
      expect(getPercents(-2, 200)).toBe(
        "Отрицательный процент рачитать нельзя!"
      );
    });
});
