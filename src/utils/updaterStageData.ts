{
  /*Генерация отступов для таблицы
  "Анализ ВБС через стадии" окна BI-аналитика*/
}

export type Product = {
  name: string
  stage1: number
  stage2: number
  stage3: number
  stage4: number
  offset1?: number
  offset2?: number
  offset3?: number
  offset4?: number
}

export function calculateOffsets(originalData: Product[]): Product[] {
  // Извлекаем данные для КП
  const kp = originalData.find((item) => item.name === 'КП')

  // Проверяем наличие объекта КП
  if (!kp) {
    console.error("Объект с именем 'КП' не найден")
    return originalData
  }

  // Инициализация сумм для вычислений
  let cumulativeStage1 = 0
  let cumulativeStage2 = 0
  let cumulativeStage3 = 0
  let cumulativeStage4 = 0

  // Проходим по каждому продукту (начиная с 1-го, т.к. 0-й - это 'КП')
  for (let i = 1; i < originalData.length; i++) {
    const product = originalData[i]

    // Рассчитываем offset1 для текущего продукта
    product.offset1 = cumulativeStage1

    // Рассчитываем offset2, offset3, offset4 с учетом формул
    product.offset2 =
      kp.stage1 - cumulativeStage1 - product.stage1 + cumulativeStage2
    product.offset3 =
      kp.stage2 - cumulativeStage2 - product.stage2 + cumulativeStage3
    product.offset4 =
      kp.stage3 - cumulativeStage3 - product.stage3 + cumulativeStage4

    // Обновляем накопительные суммы для следующих итераций
    cumulativeStage1 += product.stage1
    cumulativeStage2 += product.stage2
    cumulativeStage3 += product.stage3
    cumulativeStage4 += product.stage4
  }

  return originalData
}
