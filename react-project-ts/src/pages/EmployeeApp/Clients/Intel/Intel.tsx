import { useNavigate } from "react-router-dom";
import { PageWrapper } from "./styles.ts";
import Button from "../../../../components/Button/Button.tsx";
import { CompanyCard, CompanyInfo, CompanyTitle } from "../Airbnb/styles.ts";

export default function Intel() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <PageWrapper>
      <CompanyCard>
        <CompanyTitle>Intel</CompanyTitle>
        <CompanyInfo>
          Global semiconductor leader known for its Core and Xeon processors,
          advanced chip manufacturing, and AI‑focused computing platforms. With
          decades of innovation shaping modern technology, Intel continues to
          drive progress in PCs, data centers, and next‑generation digital
          infrastructure.
        </CompanyInfo>
        <Button name="Back" onClick={handleClick} />
      </CompanyCard>
    </PageWrapper>
  );
}
