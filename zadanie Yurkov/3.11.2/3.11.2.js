function average() {
      let sum = 0;
      let count = 0;
      for(let i = 0; i < arguments.length; i++) {
        let value = parseFloat(arguments[i]);
        if(!isNaN(value)) {
          sum += value;
          count++;
        }
      }
      return sum/count;
    }