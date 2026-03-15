import { useNavigate } from "react-router-dom";
import { PageWrapper } from "./styles.ts";
import Button from "../../../../components/Button/Button.tsx";
import { CompanyCard, CompanyInfo, CompanyTitle } from "../Airbnb/styles.ts";

export default function Oracle() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <PageWrapper>
      <CompanyCard>
        <CompanyTitle>Oracle</CompanyTitle>
        <CompanyInfo>
          Oracle is a global technology corporation specializing in enterprise
          software, cloud infrastructure, and database systems. Founded in 1977,
          it has grown into one of the world’s largest software and hardware
          providers, serving customers across nearly every industry. ecosystem.
        </CompanyInfo>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
