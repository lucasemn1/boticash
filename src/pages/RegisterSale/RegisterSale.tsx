import { FC, useEffect } from "react";
import { scrollToTop } from "../../util/window";

// Components
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Input from "../../components/Input/Input";

// Icons
import { Check } from "react-feather";

// Arts
import ShoppingArt from "../../assets/imgs/shopping.svg";

// Styled components
import { FullPage, PageContent } from "../../styles/components/layout";
import { PrimaryButton } from "../../styles/components/buttons";
import { Form } from "./style";

const RegisterSale: FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <FullPage>
      <Sidebar />

      <div>
        <PageContent>
          <Topbar
            title="Registrar venda"
            showBackButton
          />

          <Form>
            <img src={ShoppingArt} alt="Ilustração de compras"/>
            
            <Input label="Data" type="date" />

            <Input
              label="Valor da compra"
              mask="R$ 9999,99"
            ></Input>

            <Input label="Código da compra"></Input>  

            <PrimaryButton>
              Cadastrar nova compra
              <Check size="18" />
            </PrimaryButton>
          </Form>
        </PageContent>
      </div>
    </FullPage>
  );
};

export default RegisterSale;
