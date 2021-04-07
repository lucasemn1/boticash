import { FC, useEffect, useState } from "react";
import { scrollToTop } from "../../util/window";

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
  ]);
  const [filteredSales, setFilteredSales] = useState<ICashbackCard[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(scrollToTop, []);

  useEffect(() => {
    handleFilter(searchValue, statusFilter);
    /* eslint-disable-next-line */
  }, [searchValue, statusFilter]);

  function handleFilter(code: string, status: string) {
    let salesResult = sales;

    if (code) {
      salesResult = salesResult.filter(
        (sale) => sale.saleCode.toLowerCase().includes(code.toLowerCase())
      );
    }

    if (status) {
      salesResult = salesResult.filter(
        ({ status }) => {

          switch (statusFilter) {
            case "Aprovado":
              return status === "approved";

            case "Em andamento":
              return status === "in-progress";

            case "Reprovado":
              return status === "disapproved";
            
            default:
              return true;
          }
        }
      );
    }

    setFilteredSales(salesResult);
  }

  function renderCards() {
    const salesToRender = filteredSales ? filteredSales : sales;

    return salesToRender.map((sale, index) => (
      <CashbackCard
        key={index}
        status={sale.status}
        expectedValue={sale.expectedValue}
        purchasePrice={sale.purchasePrice}
        percentageWon={sale.percentageWon}
        saleDate={sale.saleDate}
        saleCode={sale.saleCode}
      />
    ));
  }

  return (
    <FullPage>
      <Sidebar />

      <div>
        <PageContent>
          <Topbar />

          <AmountIndicatorLine>
            <AmountIndicatorArea>
              <div>
                <img src={cashbackIcon} alt="Arte de indicação de cashback." />
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
              options={["Todos", "Aprovado", "Em andamento", "Reprovado"]}
            />
          </SearchArea>

          <CardsGrid>{renderCards()}</CardsGrid>
        </PageContent>
      </div>
    </FullPage>
  );
};

export default Home;
