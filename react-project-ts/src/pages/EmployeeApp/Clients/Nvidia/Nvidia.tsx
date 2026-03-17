import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  CompanyCard,
  CompanyTitle,
  CompanyInfo,
  WebSiteLink,
} from "./styles.ts";
import Button from "components/Button/Button.tsx";

export default function Nvidia() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <PageWrapper>
      <CompanyCard>
        <CompanyTitle>Nvidia</CompanyTitle>
        <CompanyInfo>
          Global leader in GPUs, AI computing, and accelerated data‑center
          technologies. Known for its groundbreaking graphics hardware,
          enterprise AI platforms, and software ecosystem that powers gaming,
          cloud computing, and advanced machine learning worldwide.
        </CompanyInfo>
        <WebSiteLink href="https://www.nvidia.com/de-de/" target="_blank">
          Go to website
        </WebSiteLink>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
