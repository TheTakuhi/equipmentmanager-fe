import { getLoansCroppedMock } from "../hooks/queries/loans/mocks/utils/getLoanCroppedMock";
import { getLoansMock } from "../hooks/queries/loans/mocks/utils/getLoanMock";
import { Loan } from "../models/loan/Loan";
import { LoanCropped } from "../models/loan/LoanCropped";

type LoansBuilderType = Loan | LoanCropped;

class LoansBuilder<T extends LoansBuilderType> {
  loans: T[] = [];

  constructor(count: number | undefined = 50, isCropped?: boolean) {
    if (isCropped) (this.loans as LoanCropped[]) = getLoansCroppedMock(count);
    (this.loans as Loan[]) = getLoansMock(count);
  }

  getLoans() {
    return this.loans;
  }

  getPartialLoans(startIndex: number, endIndex: number) {
    return this.loans.slice(startIndex, endIndex);
  }
}

export const loansBuilder: LoansBuilder<Loan> = new LoansBuilder(50);
export const loansCroppedBuilder: LoansBuilder<LoanCropped> = new LoansBuilder(
  50,
  true,
);
