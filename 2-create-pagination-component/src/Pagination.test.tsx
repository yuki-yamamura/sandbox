import { render, screen } from '@testing-library/react';
import Pagination from 'Pagination';

describe('if total pages is less than or equal five', () => {
  describe('if total pages is only two', () => {
    test('should display page indexes of one and two', () => {
      render(<Pagination currentPageIndex={2} totalPosts={20} />);

      const pageIndexes = screen.getAllByText(/^\d+$/);

      expect(pageIndexes).toHaveLength(2);
      expect(pageIndexes[0]).toHaveTextContent('1');
      expect(pageIndexes[1]).toHaveTextContent('2');
    });
  });

  describe('if total page is just five', () => {
    test('should display all of the page indexes if current page is first index', () => {
      render(<Pagination currentPageIndex={1} totalPosts={50} />);

      const pageIndexes = screen.getAllByText(/^\d+/);

      expect(pageIndexes).toHaveLength(5);
      expect(pageIndexes[0]).toHaveTextContent('1');
      expect(pageIndexes[1]).toHaveTextContent('2');
      expect(pageIndexes[2]).toHaveTextContent('3');
      expect(pageIndexes[3]).toHaveTextContent('4');
      expect(pageIndexes[4]).toHaveTextContent('5');
    });

    test('should display all of the page indexes if current page is last index', () => {
      render(<Pagination currentPageIndex={5} totalPosts={50} />);

      const pageIndexes = screen.getAllByText(/^\d+/);

      expect(pageIndexes).toHaveLength(5);
      expect(pageIndexes[0]).toHaveTextContent('1');
      expect(pageIndexes[1]).toHaveTextContent('2');
      expect(pageIndexes[2]).toHaveTextContent('3');
      expect(pageIndexes[3]).toHaveTextContent('4');
      expect(pageIndexes[4]).toHaveTextContent('5');
    });

    test('should display all of the page indexes if current page is in the middle of the indexes', () => {
      render(<Pagination currentPageIndex={4} totalPosts={50} />);

      const pageIndexes = screen.getAllByText(/^\d+/);

      expect(pageIndexes).toHaveLength(5);
      expect(pageIndexes[0]).toHaveTextContent('1');
      expect(pageIndexes[1]).toHaveTextContent('2');
      expect(pageIndexes[2]).toHaveTextContent('3');
      expect(pageIndexes[3]).toHaveTextContent('4');
      expect(pageIndexes[4]).toHaveTextContent('5');
    });
  });
});

describe('if total page is six, which is bigger than the maximum display count', () => {
  test('should display page indexes between one and five if current page is first index', () => {
    render(<Pagination currentPageIndex={1} totalPosts={60} />);

    const pageIndexes = screen.getAllByText(/^\d+/);

    expect(pageIndexes).toHaveLength(5);
    expect(pageIndexes[0]).toHaveTextContent('1');
    expect(pageIndexes[1]).toHaveTextContent('2');
    expect(pageIndexes[2]).toHaveTextContent('3');
    expect(pageIndexes[3]).toHaveTextContent('4');
    expect(pageIndexes[4]).toHaveTextContent('5');
  });

  test('should display page indexes between two and six if current page is last index', () => {
    render(<Pagination currentPageIndex={6} totalPosts={60} />);

    const pageIndexes = screen.getAllByText(/^\d+/);

    expect(pageIndexes).toHaveLength(5);
    expect(pageIndexes[0]).toHaveTextContent('2');
    expect(pageIndexes[1]).toHaveTextContent('3');
    expect(pageIndexes[2]).toHaveTextContent('4');
    expect(pageIndexes[3]).toHaveTextContent('5');
    expect(pageIndexes[4]).toHaveTextContent('6');
  });

  test('should display page indexes between one and five if current page is three', () => {
    render(<Pagination currentPageIndex={1} totalPosts={60} />);

    const pageIndexes = screen.getAllByText(/^\d+/);

    expect(pageIndexes).toHaveLength(5);
    expect(pageIndexes[0]).toHaveTextContent('1');
    expect(pageIndexes[1]).toHaveTextContent('2');
    expect(pageIndexes[2]).toHaveTextContent('3');
    expect(pageIndexes[3]).toHaveTextContent('4');
    expect(pageIndexes[4]).toHaveTextContent('5');
  });
});

describe('if total pages is ten', () => {
  test('should display the page indexes that has six at center if current page is six', () => {
    render(<Pagination currentPageIndex={6} totalPosts={100} />);

    const pageIndexes = screen.getAllByText(/^\d+/);

    expect(pageIndexes).toHaveLength(5);
    expect(pageIndexes[0]).toHaveTextContent('4');
    expect(pageIndexes[1]).toHaveTextContent('5');
    expect(pageIndexes[2]).toHaveTextContent('6');
    expect(pageIndexes[3]).toHaveTextContent('7');
    expect(pageIndexes[4]).toHaveTextContent('8');
  });
});
