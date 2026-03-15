import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const PageWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const OurClientsContainer = styled.div`
  max-width: 920px;
`;

export const OurClientsTitle = styled.h2`
  text-align: center;
  margin-bottom: 32px;
`;

export const OurClientsText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

export const OurClients = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  margin: -5px;
`;

export const OurClient = styled.li`
    padding: 5px;
`;

export const ClientLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 90px;
  border-radius: 10px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
 `;

export const ClientLogo = styled.img`
  width: 100%;
  height: 100%;
`;

