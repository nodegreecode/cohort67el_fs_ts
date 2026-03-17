import { useNavigate } from "react-router-dom";
import { PageWrapper, CompanyCard, CompanyInfo, CompanyTitle, WebSiteLink } from "./styles.ts";
import Button from "components/Button/Button.tsx";

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
        <WebSiteLink href="https://www.oracle.com/de/" target="_blank">Go to website</WebSiteLink>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
