import type {FC, PropsWithChildren} from 'react';
import {ContentWrapper} from "./palette.styles";

const Palette: FC<PropsWithChildren> = (props) => {
  return (
    <ContentWrapper>
      {props.children}
    </ContentWrapper>
  );
};

export default Palette;