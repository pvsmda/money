import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionMOdal: () => void;
}

export function Header({ onOpenNewTransactionMOdal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionMOdal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
