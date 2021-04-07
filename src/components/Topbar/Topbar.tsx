import { FC, useEffect } from "react";

// Components
import ProfileButton from "../ProfileButton/ProfileButton";

// Styled components
import { FullPage, TitleArea, BackButton } from "./style";

// Icons
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router";

interface IProps {
  showBackButton?: boolean;
  title: string;
}

const Topbar: FC<IProps> = ({ showBackButton, title }) => {
  const history = useHistory();

  useEffect(() => {
    document.title = `Boticash | ${title}`;
  }, [title]);

  function backPage() {
    history.goBack();
  }

  return (
    <FullPage>
      <TitleArea>
        {showBackButton && (
          <BackButton onClick={backPage}>
            <ArrowLeft size="18" />
          </BackButton>
        )}

        <h3>Boticash / {title}</h3>
      </TitleArea>

      <ProfileButton />
    </FullPage>
  );
};

export default Topbar;
