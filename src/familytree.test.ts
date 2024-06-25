import { printFamilyAncestors } from './familytree';

describe('printFamilyAncestors', () => {
  it('Dominik', () => {
    const result = printFamilyAncestors('Dominik');

    expect(result).toBe('Petr, Václav');
  });

  it('Vašek', () => {
    const result = printFamilyAncestors('Vašek');

    expect(result).toBe('Václav');
  });

  it('Matyáš', () => {
    const result = printFamilyAncestors('Matyáš');

    expect(result).toBe('Monika, Jiří, Václav');
  });
});
