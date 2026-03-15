import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  CompanyCard,
  CompanyTitle,
  CompanyInfo,
} from "./styles.ts";
import Button from "components/Button/Button.tsx";

export default function Airbnb() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <PageWrapper>
      <CompanyCard>
        <CompanyTitle>Airbnb</CompanyTitle>
        <CompanyInfo>
          Airbnb is a global marketplace for short‑term stays and unique
          accommodations. It connects travelers with hosts offering homes,
          apartments, cabins, beach houses, and other spaces across more than
          220 countries and regions. The platform lists millions of properties
          and is widely used for both leisure and business travel.
        </CompanyInfo>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
