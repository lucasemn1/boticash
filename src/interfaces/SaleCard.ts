interface ISaleCard {
  status: "approved" | "in-progress" | "disapproved";
  cashbackValue: string;
  price: string;
  percentageWon: number;
  saleDate: Date;
  saleCode: string;
}

// interface ICashbackCard {
//   status: "approved" | "in-progress" | "disapproved";
//   expectedValue: string;
//   purchasePrice: string;
//   percentageWon: number;
//   saleDate: Date;
//   saleCode: string;
// }

export default ISaleCard;
