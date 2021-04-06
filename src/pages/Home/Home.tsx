import { FC, useState } from "react";

// Components
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Topbar from "../../components/Topbar/Topbar";
// import CashbackCard from "../../components/CashbackCard/CashbackCard";

// Styled components
import {
  FullPage,
  PageContent,
  AmountIndicatorLine,
  PrimaryButton,
  AmountIndicatorArea,
  SearchArea,
  CardsGrid,
} from "./style";

// Icons
import { Plus, Search } from "react-feather";
import cashbackIcon from "../../assets/icons/cashback_icon.svg";
import CashbackCard from "../../components/CashbackCard/CashbackCard";
import ICashbackCard from "../../interfaces/CashbackCard";

const Home: FC = () => {
  const [sales] = useState<ICashbackCard[]>([
    {
      type: "approved",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "in-progress",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "disapproved",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "approved",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "in-progress",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "disapproved",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "approved",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "in-progress",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    },
    {
      type: "disapproved",
      expectedValue: "R$ 5,50",
      purchasePrice: "R$ 55,00",
      percentageWon: 10,
      saleDate: new Date(Date.now()),
      saleCode: "ABCDEFGHIJ",
    }
  ]);

  const [statusFilter, setStatusFilter] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <FullPage>
      <Sidebar />

      <div>
        <PageContent>
          <Topbar />
          
          <AmountIndicatorLine>
            <AmountIndicatorArea>
              <div>
                <img src={cashbackIcon} alt="Arte de indicação de cashback."/>
              </div>

              <div>
                <h1>R$ 70,00</h1>
                <h3>Valor acumulado</h3>
              </div>
            </AmountIndicatorArea>

            <PrimaryButton>
              Nova compra
              <Plus size="18" />
            </PrimaryButton>
          </AmountIndicatorLine>
        
          <SearchArea>
            <Input
              placeholder="Código da compra"
              value={searchValue}
              onSetValue={setSearchValue}
            >
              <Search size="18" />
            </Input>

            <Select
              value={statusFilter}
              onSetValue={setStatusFilter}
              label="Filtar por"
              options={["Aprovado", "Em andamento", "Reprovado"]}
            />
          </SearchArea>

          <CardsGrid>
            {sales.map((sale, index) => (
              <CashbackCard
                key={index}
                type={sale.type}
                expectedValue={sale.expectedValue}
                purchasePrice={sale.purchasePrice}
                percentageWon={sale.percentageWon}
                saleDate={sale.saleDate}
                saleCode={sale.saleCode}
              />
            ))}
          </CardsGrid>
        </PageContent>
      </div>
    </FullPage>
  );
}

export default Home;
