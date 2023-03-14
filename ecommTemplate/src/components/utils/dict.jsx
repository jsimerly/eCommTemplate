
export function isDictInList(dict, list) {
    for (let i = 0; i < list.length; i++) {
      if (JSON.stringify(dict) === JSON.stringify(list[i])) {
        return true;
      }
    }
    return false;
  }