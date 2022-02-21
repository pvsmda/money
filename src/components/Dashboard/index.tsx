import { Sumary } from "../Sumary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransactionTable />
    </Container>
  );
}
