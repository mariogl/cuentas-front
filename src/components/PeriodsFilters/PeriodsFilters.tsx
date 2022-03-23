import { SyntheticEvent } from "react";
import { Button } from "react-bootstrap";

interface PeriodsFiltersProps {
  filters: {
    years: boolean;
    quarters: boolean;
    months: boolean;
  };
  changeFilter: (event: SyntheticEvent) => void;
}

const PeriodsFilters = ({
  filters,
  changeFilter,
}: PeriodsFiltersProps): JSX.Element => {
  return (
    <>
      <Button
        variant="secondary"
        id="years"
        active={filters.years}
        onClick={changeFilter}
      >
        Años
      </Button>
      <Button
        variant="secondary"
        id="quarters"
        active={filters.quarters}
        onClick={changeFilter}
      >
        Trimestres
      </Button>
      <Button
        variant="secondary"
        id="months"
        active={filters.months}
        onClick={changeFilter}
      >
        Months
      </Button>
    </>
  );
};

export default PeriodsFilters;
