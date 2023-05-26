import styled from "@emotion/styled/macro";

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
  
`;

export const LayoutContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1 1;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`