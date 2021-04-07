import ICashbackCard from "../../interfaces/CashbackCard";

const sales: ICashbackCard[] = [
  {
    status: "approved",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "ABCDEFGHIJ",
  },
  {
    status: "in-progress",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "16283",
  },
  {
    status: "disapproved",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "090982",
  },
  {
    status: "approved",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "12I8Y",
  },
  {
    status: "in-progress",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "OAD918",
  },
  {
    status: "disapproved",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "IAIJDJ1",
  },
  {
    status: "approved",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "O12HD",
  },
  {
    status: "in-progress",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "194HDK",
  },
  {
    status: "disapproved",
    expectedValue: "R$ 5,50",
    purchasePrice: "R$ 55,00",
    percentageWon: 10,
    saleDate: new Date(Date.now()),
    saleCode: "10ALADKS",
  },
];

export default sales;
