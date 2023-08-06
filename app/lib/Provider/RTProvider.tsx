'use client';

import { Provider } from 'react-redux';
import store from '@/store';
import { ReactNode } from 'react';

const RTProvider = ({ children }: { children: ReactNode }) => <Provider store={store}>{children}</Provider>;

export default RTProvider;
