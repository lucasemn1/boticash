import { FC } from "react";
import ISaleCard from "../../interfaces/SaleCard";
import { getDateInBrazilianStandard } from "../../util/data";

// Styled components
import {
  CardContainer,
  ExpectedValue,
  GridContainer,
  StatusIndicator,
} from "./style";

interface IProps extends ISaleCard {};

const CashbackCard: FC<IProps> = ({
  status,
  cashbackValue,
  price,
  percentageWon,
  saleCode,
  saleDate,
}) => {
  function getStatusMessage() {
    const messages = {
      approved: "Aprovado",
      "in-progress": "Em andamento",
      disapproved: "Reprovado",
    };

    return messages[status];
  }

  return (
    <CardContainer className={status}>
      <ExpectedValue>{cashbackValue}</ExpectedValue>

      <GridContainer>
        <div>
          <h3>Valor da compra</h3>
          <h2>{price}</h2>
        </div>
        <div>
          <h3>Porcentagem</h3>
          <h2>{percentageWon}%</h2>
        </div>
        <div>
          <h3>Data: {getDateInBrazilianStandard(saleDate)}</h3>
        </div>
        <div>
          <h3>Código: {saleCode}</h3>
        </div>
      </GridContainer>

      <StatusIndicator>{getStatusMessage()}</StatusIndicator>
    </CardContainer>
  );
};

export default CashbackCard;
