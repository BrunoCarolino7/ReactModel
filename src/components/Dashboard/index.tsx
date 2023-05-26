import { Summary } from "../Summary";
import { TransactionsTable } from "../Table/index";

export function Dashboard() {
    return (
        <>
            <Summary />
            <TransactionsTable />
        </>
    )
}