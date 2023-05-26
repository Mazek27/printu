import type {FC, PropsWithChildren} from 'react';
import {LayoutContent, LayoutWrapper} from "./layout.style";

type LayoutProps = {};

const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {

  return (
    <LayoutWrapper>
      <LayoutContent>
        {props.children}
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Layout;