import {
  PageWrapper,
  CompanyCard,
  CompanyInfo,
  CompanyTitle,
  WebSiteLink,
} from "./styles.ts";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button.tsx";

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
        <WebSiteLink href="https://www.asus.com/de/" target="_blank">
          Go to website
        </WebSiteLink>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
