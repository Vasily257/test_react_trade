const TEXT_CONTENT = {
  COMMON: {
    desription: 'Ход торгов',
    lotName: 'Тестовые торги на аппарат ЛОТОС №1235678 (01.12.2020 07:00)',
    date: '01.12.2020 07:00',
  },
  TABLE: {
    caption:
      'Уважаемые участники торгов, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:',
    headers: [
      { id: 0, tag: 'name', text: 'Участники' },
      { id: 1, tag: 'parametersAndRequirements', text: 'Параметры и требования' },
      {
        id: 2,
        tag: 'setOfMeasures',
        text: 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления',
      },
      { id: 3, tag: 'productionTime', text: 'Срок изготовления лота, дней' },
      { id: 4, tag: 'warrantyObligations', text: 'Гарантийные обязательства, месяцев' },
      { id: 5, tag: 'paymentTerms', text: 'Условия оплаты, %' },
      { id: 6, tag: 'manufacturingСost', text: 'Стоимость изготовления лота, рублей (без НДС)' },
    ],
  },
};

export default TEXT_CONTENT;
