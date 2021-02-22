import * as React from 'react'

export function optionArray(
  start: number,
  length: number,
  step: number,
  operator: string,
) {
  const array = new Array(length)

  for (let i = start; i < length + start; i++)
    array[i] =
      operator === '+'
        ? i + step
        : operator === '-'
        ? i - step
        : operator === '*'
        ? i * step
        : i / step

  return array.map((data, i) => (
    <option key={i} value={data}>
      {data}
    </option>
  ))
}
