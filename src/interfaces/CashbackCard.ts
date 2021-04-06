interface ICashbackCard {
  type: "approved" | "in-progress" | "disapproved";
  expectedValue: string;
  purchasePrice: string;
  percentageWon: number;
  saleDate: Date;
  saleCode: string;
}

export default ICashbackCard;
