import React from 'react';
import { TeacherForm } from 'components/pages';

import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Landing Page', () => {
  it('Load the page correctly', () => {
    const { debug } = render(<TeacherForm />);

    debug();
  });
});
