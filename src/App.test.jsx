import { describe, expect, it } from 'vitest';
import App from './App';
import { render } from '@testing-library/react';

describe('App', () => {
    it('should have headline', () => {
        render(<App />);
        expect(screen.getByText(/vitest/i)).toBeInTheDocument();
    });
});
