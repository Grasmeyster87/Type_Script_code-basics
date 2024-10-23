const fruits6 = ['banana', 'mango', 'apple'];
// Все работает
/*
const upperFruits6 = fruits.map((name) => name.toUpperCase());

const fruits7: string[] = ['banana', 'mango', 'apple'];

function toUpperArray(items: string[]): string[] {
    return items.map((s) => s.toUpperCase());
  }
*/
function filterAnagrams(anagram: string, anagrams: string[]): string[] {
    const standard = anagram.split('').sort().join('');
    return anagrams.filter(
        (item) => item.split('').sort().join('') === standard
    );
}

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy', 'lacer']);
// []
