import { SummaryPipe } from './summary.pipe';

describe('SummaryPipe', () => {
  it('create an instance', () => {
    const pipe = new SummaryPipe();
    expect(pipe).toBeTruthy();
  });
  it('Text is trimmed to 300 characters', () => {
    const pipe = new SummaryPipe();
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    expect(pipe.transform(lorem, 300).length).toBeLessThanOrEqual(300);
  });
  it('Text with periods, returns text that ends in a period', () => {
    const pipe = new SummaryPipe();
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    expect(pipe.transform(lorem, 300).substring(pipe.transform(lorem, 300).length - 1)).toEqual('.');
  });
  it('Text with no period is trimmed', () => {
    const pipe = new SummaryPipe();
    let lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    expect(pipe.transform(lorem, 300).length).toBeLessThanOrEqual(303);
  });
});
