var fruits6 = ['banana', 'mango', 'apple'];
function filterAnagrams(anagram, anagrams) {
    var standard = anagram.split('').sort().join('');
    return anagrams.filter(function (item) { return item.split('').sort().join('') === standard; });
}
filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
filterAnagrams('laser', ['lazing', 'lazy', 'lacer']);
//# sourceMappingURL=6.%20Arrays.js.map