import {PageWrapper} from "./styles.ts";
import { useState } from "react";
import { WEATHER_CODES } from "./types.ts";

import Button from "components/Button/Button.tsx";
import Input from "components/Input/Input.tsx";
import Counter from "components/Counter/Counter.tsx";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Lesson_07() {
  // 12. enum
  // Создайте функцию, которая бы принимала следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:
  const weatherDecoder = (code: string): string => {
    switch (code) {
      case WEATHER_CODES.SQ:
        return "шквал";
      case WEATHER_CODES.PO:
        return "пыльный вихрь";
      case WEATHER_CODES.FC:
        return "торнадо";
      case WEATHER_CODES.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WEATHER_CODES.HZ:
        return "мгла (видимость менее 10 км)";
      case WEATHER_CODES.FU:
        return "дым (видимость менее 10 км)";
      case WEATHER_CODES.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WEATHER_CODES.SS:
        return "песчаная буря (видимость менее 10 км)";
      default:
        return "This code is invalid";
    }
  };

  const getWeatherByCode = (weatherCode: string, decodeFn: any) => {
    return decodeFn(weatherCode);
  };

  const stringArray1: string[] = ["a", "b", "c"];
  const numbersArray1: number[] = [1, 2, 3];
  const booleanArray1: boolean[] = [true, false, true];

  type ArrayGenerator<T> = T[];

  const stringArray2: ArrayGenerator<string> = ["a", "b", "c"];
  const numbersArray2: ArrayGenerator<number> = [1, 2, 3];
  const booleanArray2: ArrayGenerator<boolean> = [true, false, true];

  interface Item3Value {
    model: string;
    article: number;
  }

  interface Item<ValueType> {
    type: string;
    value: ValueType;
  }
  const item1: Item<number> = {
    type: "TV",
    value: 123456789,
  };

  const item2: Item<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };

  const item3: Item<Item3Value> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      article: 1234567456456456,
    },
  };

  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const sendCounterResult = () => {
    console.log(count);
  };

  return (
    <PageWrapper>
      <Button name="Simple Button" onClick={sendCounterResult}/>
      <Input
        id="simple-input"
        name="simpleInput"
        placeholder="Enter something"
        label="Simple Input"
      />
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
    </PageWrapper>
  );
}
export default Lesson_07;
