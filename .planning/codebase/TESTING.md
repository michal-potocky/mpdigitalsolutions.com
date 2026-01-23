# Testing Patterns

**Analysis Date:** 2026-01-23

## Test Framework

**Status:** No testing framework configured or in use

**Runner:**
- Not detected - no test runner (Jest, Vitest, etc.) installed or configured
- `package.json` contains no test dependencies
- No `jest.config.js`, `vitest.config.ts`, or similar files present

**Assertion Library:**
- Not detected

**Run Commands:**
- No test commands defined in `package.json`
- Application currently has zero test coverage

## Test File Organization

**Status:** Not applicable - no tests present

**Location:**
- No test files found in codebase (no `.test.ts`, `.test.tsx`, `.spec.ts`, `.spec.tsx` files)
- No dedicated `__tests__/` directory
- No test fixtures or test utilities

**Naming:**
- Standard pattern would be: `ComponentName.test.tsx` or `ComponentName.spec.tsx`

**Structure:**
- Not established

## Test Structure

**Pattern:** Not applicable - no tests present

To establish testing in this codebase, recommended pattern would follow:

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders navigation links', () => {
    const mockContent = { useCases: 'Use Cases', process: 'Process', faq: 'FAQ', contact: 'Contact' };
    const mockSetLang = vi.fn();

    render(<Header content={mockContent} lang="en" setLang={mockSetLang} />);

    expect(screen.getByText('Use Cases')).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    // test implementation
  });
});
```

**Organization:**
- Each component would have a corresponding `.test.tsx` file in same directory
- Example: `components/Header.tsx` → `components/Header.test.tsx`
- Test suites organized by describe blocks per component feature

## Mocking

**Current Status:** Not applicable - no tests

**Framework:** Would use Vitest's `vi.mock()` or `vi.fn()`

**Patterns if implemented:**
```typescript
// Mock child components
vi.mock('./components/Header', () => ({
  default: vi.fn(() => <div>Mocked Header</div>)
}));

// Mock functions/callbacks
const mockSetLang = vi.fn();
const mockSetIsSubmitting = vi.fn();

// Mock router
vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(() => ({ pathname: '/' })),
  // other mocks
}));
```

**What to Mock:**
- Child components for unit tests
- React Router hooks: `useLocation`, `useNavigate`, `Link`
- Callback functions passed as props
- Window methods: `document.getElementById()`, `scrollIntoView()`

**What NOT to Mock:**
- React hooks like `useState`, `useEffect` (use real implementations)
- Tailwind CSS classes
- lucide-react icons (keep real)
- Utility functions like text parsing logic

## Fixtures and Factories

**Current Status:** Not present

**Test Data Pattern if implemented:**

```typescript
// fixtures/content.ts
export const mockContent = {
  nav: {
    useCases: 'Use Cases',
    process: 'Process',
    faq: 'FAQ',
    contact: 'Contact'
  },
  hero: {
    headline: 'Automate [Your] Process',
    subheadline: 'Transform workflows...',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    bullets: [],
    promise: ''
  }
  // ... rest of content
};

// fixtures/language.ts
export const testLanguages = ['en', 'sk'] as const;
```

**Location:**
- Would be located in `src/__tests__/fixtures/` or `src/fixtures/`

## Coverage

**Current Requirements:** Not defined

**Target Coverage:** Would recommend:
- Statements: 70%+
- Branches: 65%+
- Functions: 70%+
- Lines: 70%+

**View Coverage (if configured):**
```bash
npm run test:coverage
# or
vitest run --coverage
```

## Test Types

**Unit Tests (recommended focus):**
- Test individual components in isolation
- Test state management: `useState` hooks, event handlers
- Test conditional rendering
- Test prop handling and type checking
- Example: `Header.test.tsx` would test menu toggle, language switching, scroll navigation

**Integration Tests (secondary):**
- Test component tree with real routing
- Test form submission flow in `ContactForm`
- Test language switching across multiple components
- Example: Test that switching language in Header updates content in all child components

**E2E Tests (optional):**
- Not configured
- Would use Playwright or Cypress if added
- Could test full user flows: navigation → contact form submission → success message
- Would test across different screen sizes (responsive design)

## Common Patterns

**Component Testing Pattern:**
```typescript
describe('ContactForm', () => {
  it('renders form fields', () => {
    const mockContent = { /* mock content */ };
    render(<ContactForm content={mockContent} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('shows success message after submission', async () => {
    const mockContent = { /* mock content */ };
    render(<ContactForm content={mockContent} />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/request received/i)).toBeInTheDocument();
    });
  });
});
```

**Async Testing Pattern:**
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('handles form submission', async () => {
  render(<ContactForm content={mockContent} />);

  const input = screen.getByLabelText(/name/i);
  await userEvent.type(input, 'John Doe');

  const submitButton = screen.getByRole('button', { name: /submit/i });
  await userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  }, { timeout: 2000 });
});
```

**State Change Testing Pattern:**
```typescript
it('toggles menu visibility', async () => {
  render(<Header content={mockContent} lang="en" setLang={vi.fn()} />);

  // Menu should not be visible initially
  expect(screen.queryByText('Use Cases')).not.toBeInTheDocument();

  // Click menu button
  const menuButton = screen.getByRole('button', { name: /menu/i });
  await userEvent.click(menuButton);

  // Menu items should now be visible
  expect(screen.getByText('Use Cases')).toBeInTheDocument();
});
```

**Snapshot Testing (use sparingly):**
```typescript
it('matches snapshot', () => {
  const { container } = render(<Footer content={mockContent} />);
  expect(container).toMatchSnapshot();
});
```

**Example: Testing state transitions in FAQ component**
```typescript
it('expands and collapses FAQ items', async () => {
  render(<FAQ content={mockFaqContent} />);

  const questions = screen.getAllByRole('button');
  const firstQuestion = questions[0];

  // Initially first item is open (openIndex: 0 by default)
  let answer = screen.queryByText(mockFaqContent.items[0].a);
  expect(answer).toBeInTheDocument();

  // Click to close
  await userEvent.click(firstQuestion);
  answer = screen.queryByText(mockFaqContent.items[0].a);
  expect(answer).not.toBeInTheDocument();

  // Click to open again
  await userEvent.click(firstQuestion);
  answer = screen.getByText(mockFaqContent.items[0].a);
  expect(answer).toBeInTheDocument();
});
```

## Recommended Testing Setup

To add testing to this project:

**1. Install dependencies:**
```bash
npm install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom happy-dom @vitest/ui
```

**2. Create `vitest.config.ts`:**
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/']
    }
  }
});
```

**3. Add test script to `package.json`:**
```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest run --coverage"
}
```

**4. Create test setup file `src/test/setup.ts`:**
```typescript
import '@testing-library/jest-dom';
```

**5. Test directory structure to adopt:**
```
src/
├── components/
│   ├── Header.tsx
│   ├── Header.test.tsx
│   ├── Footer.tsx
│   ├── Footer.test.tsx
│   └── ...
├── pages/
│   ├── PrivacyPolicy.tsx
│   ├── PrivacyPolicy.test.tsx
│   └── ...
├── test/
│   ├── setup.ts
│   └── fixtures/
│       ├── content.ts
│       └── language.ts
```

---

*Testing analysis: 2026-01-23*
