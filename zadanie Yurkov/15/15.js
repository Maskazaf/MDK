function translit(word) {
    const converter = {
      'sch': 'щ',
  
      'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я',
  
      'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
      'e': 'е', 'z': 'з', 'и': 'i', 'y': 'й', 'k': 'к',
      'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
      'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
      'h': 'х', 'c': 'ц', 'y': 'ы',
    };
  
    for (const [key, value] of Object.entries(converter)) {
      word = word.replaceAll(key, value);
    }
  
    return word;
  }

  console.log(translit('baraban'))
  console.log(translit('dom'))
  console.log(translit('chelovek'))
  