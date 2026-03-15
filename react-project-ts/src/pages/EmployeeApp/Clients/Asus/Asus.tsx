import { PageWrapper } from "./styles.ts";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button.tsx";
import { CompanyCard, CompanyInfo, CompanyTitle } from "../Airbnb/styles.ts";

export default function Asus() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <PageWrapper>
      <CompanyCard>
        <CompanyTitle>Asus</CompanyTitle>
        <CompanyInfo>
          ASUS (ASUSTeK Computer Inc.) is a multinational computer hardware and
          electronics company headquartered in Taipei, Taiwan. Founded in 1989,
          it has grown into one of the world’s leading technology brands, known
          for innovation, high‑quality components, and a broad product
          ecosystem.
        </CompanyInfo>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
