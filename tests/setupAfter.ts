import {configure} from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import {cleanup} from '@testing-library/react';
import '@testing-library/react-hooks';
import '@testing-library/react/dont-cleanup-after-each';

configure({
  computedStyleSupportsPseudoElements: true
});

// 모든 테스트 후 cleanup 적용
afterEach(cleanup);
