import { v4 } from "uuid";
import airbnb from "assets/icons/Airbnb--Streamline-Svg-Logos.svg";
import asus from "assets/icons/Asus--Streamline-Simple-Icons.svg";
import oracle from "assets/icons/Oracle--Streamline-Svg-Logos.svg";
import nvidia from "assets/icons/Nvidia--Streamline-Svg-Logos.svg";
import meta from "assets/icons/Meta--Streamline-Svg-Logos.svg";
import intel from "assets/icons/Intel--Streamline-Svg-Logos.svg";
import {
  PageWrapper,
  OurClientsContainer,
  OurClientsTitle,
  OurClientsText,
  OurClients,
  OurClient,
  ClientLink,
  ClientLogo,
} from "./styles.ts";

export default function Clients() {
  const clients = [
    {
      clientLogoImg: airbnb,
      clientUrl: "/clients/airbnb",
    },
    {
      clientLogoImg: asus,
      clientUrl: "/clients/asus",
    },
    {
      clientLogoImg: oracle,
      clientUrl: "/clients/oracle",
    },
    {
      clientLogoImg: nvidia,
      clientUrl: "/clients/nvidia",
    },
    {
      clientLogoImg: meta,
      clientUrl: "/clients/meta",
    },
    {
      clientLogoImg: intel,
      clientUrl: "/clients/intel",
    },
  ];
  return (
    <PageWrapper>
      <OurClientsContainer>
        <OurClientsTitle>Our Clients</OurClientsTitle>
        <OurClientsText>
          Our clients are our top priority and we are committed to provide them
          with the highest level of service.
        </OurClientsText>
        <OurClients>
          {clients.map((client) => (
            <OurClient key={v4()}>
              <ClientLink to={client.clientUrl}>
                <ClientLogo src={client.clientLogoImg} />
              </ClientLink>
            </OurClient>
          ))}
        </OurClients>
      </OurClientsContainer>
    </PageWrapper>
  );
}
