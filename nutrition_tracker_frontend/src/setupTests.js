import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';
import { configure } from '@testing-library/react';

// Set up missing DOM environment variables
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Configure testing library
configure({ testIdAttribute: 'data-testid' });
