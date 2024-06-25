type Familytree = {
  name: string;
  children: Familytree[];
};

export const familyTree: Familytree = {
  name: 'Václav',
  children: [
    {
      name: 'Petr',
      children: [
        {
          name: 'Dominik',
          children: [
            {
              name: 'Amálie',
              children: [],
            },
            {
              name: 'Antonín',
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Vašek',
      children: [
        {
          name: 'Marie',
          children: [],
        },
      ],
    },
    {
      name: 'Jiří',
      children: [
        {
          name: 'Monika',
          children: [
            {
              name: 'Matyáš',
              children: [],
            },
          ],
        },
        {
          name: 'Barbora',
          children: [],
        },
      ],
    },
  ],
};

// recursive helper function
const checkMatchingBranch = (
  partialTree: Familytree,
  who: string,
  ancestors: string[],
) => {
  if (partialTree.name === who) {
    return true;
  }

  for (const child of partialTree.children) {
    if (checkMatchingBranch(child, who, ancestors)) {
      ancestors.push(partialTree.name);
      return true;
    }
  }

  return false;
};

// main function
export const printFamilyAncestors = (who: string) => {
  const ancestors: string[] = [];
  checkMatchingBranch(familyTree, who, ancestors);
  return ancestors.join(', ');
};
