import { FC } from "react";

// Components
import Sidebar from "../../components/Sidebar/Sidebar";
import CashbackCard from "../../components/CashbackCard/CashbackCard";

// Styled components
import { FullPage, PageContent } from "./style";

const Home: FC = () => {
  return (
    <FullPage>
      <Sidebar />

      <div>
        <PageContent>
          <CashbackCard
            type="in-progress"
            expectedValue="R$ 5,00"
            percentageWon={10}
            purchasePrice="R$ 50"
            saleCode="ABCDEFG"
            saleDate={new Date(Date.now())}
          />
        </PageContent>
      </div>
    </FullPage>
  );
}

export default Home;
