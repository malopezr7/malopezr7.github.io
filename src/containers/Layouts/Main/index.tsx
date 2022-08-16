import React, { PropsWithChildren } from 'react';

import { Container, ContentWrapper, Main } from './styles';
import { MainLayoutProps } from './types';

export const MainLayout = ({ className, children }: PropsWithChildren<MainLayoutProps>) => (
    <Container>
        <Main>
            <ContentWrapper className={className}>{children}</ContentWrapper>
        </Main>
    </Container>
);