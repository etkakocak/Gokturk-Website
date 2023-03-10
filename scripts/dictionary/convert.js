function latinToTurkic(str) {
    const latinToTurkicMap = {
      'a': 'π°',
      'b': 'π°',
      'c': 'π°²',
      'Γ§': 'π°²',
      'd': 'π°',
      'e': 'π°',
      'f': 'π°―',
      'g': 'π°',
      'Δ': 'π°',
      'h': 'π°',
      'Δ±': 'π°',
      'i': 'π°',
      'j': 'π°²',
      'k': 'π°',
      'l': 'π° ',
      'm': 'π°’',
      'n': 'π°€',
      'o': 'π°',
      'ΓΆ': 'π°',
      'p': 'π°―',
      'r': 'π°Ό',
      's': 'π°Ύ',
      'Ε': 'π±',
      't': 'π±',
      'u': 'π°',
      'ΓΌ': 'π°',
      'v': 'π°',
      'y': 'π°',
      'z': 'π°',
      'w': 'π°¨',
      'q': 'π°ͺ',
      'x': 'π°‘',
    };
  
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (latinToTurkicMap.hasOwnProperty(char)) {
        result += latinToTurkicMap[char];
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  const latinInput = document.getElementById('latin-input');
  const turkicOutput = document.getElementById('turkic-output');
  const convertBtn = document.getElementById('convert-btn');

  function handleConvertClick() {
    const latinStr = latinInput.value;
    const turkicStr = latinToTurkic(latinStr);
    turkicOutput.value = turkicStr;
}
convertBtn.addEventListener('click', handleConvertClick);
