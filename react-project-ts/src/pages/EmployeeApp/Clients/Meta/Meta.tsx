import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  CompanyCard,
  CompanyTitle,
  CompanyInfo,
} from "./styles.ts";
import Button from "components/Button/Button.tsx";

export default function Meta() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <PageWrapper>
      <CompanyCard>
        <CompanyTitle>Meta</CompanyTitle>
        <CompanyInfo>
          Global technology company behind Facebook, Instagram, WhatsApp, and
          Meta Quest. Focused on AI, social platforms, and immersive
          technologies, Meta connects billions of people worldwide and continues
          to expand its role in digital communication and virtual experiences.
        </CompanyInfo>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
