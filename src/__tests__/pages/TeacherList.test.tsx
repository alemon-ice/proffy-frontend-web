import React from 'react';
import { TeacherList } from 'components/pages';

import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Landing Page', () => {
  it('Load the page correctly', () => {
    const { debug } = render(<TeacherList />);

    debug();
  });
});
