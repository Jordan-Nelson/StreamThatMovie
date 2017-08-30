import { ResultFilterPipe } from './result-filter.pipe';

describe('ResultFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ResultFilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('test filter', () => {
    const pipe = new ResultFilterPipe();
    expect(pipe.transform(filterInput)).toEqual(filterOutput);
  });
});

let filterInput = [
  {
    poster_path: 'test',
    title: 'test',
    release_date: 'test',
    vote_count: 100
  },
  {
    poster_path: 'test',
    title: 'test',
    release_date: 'test',
    vote_count: 1
  },
  {
    poster_path: '',
    title: 'test',
    release_date: 'test',
    vote_count: 100
  },
  {
    poster_path: '',
    title: null,
    release_date: 'test',
    vote_count: 100
  },
  {
    poster_path: '',
    title: 'test',
    vote_count: 100
  }
];

let filterOutput = [
  {
    poster_path: 'test',
    title: 'test',
    release_date: 'test',
    vote_count: 100
  }
];