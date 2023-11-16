import { Dictionary } from "../../../../types/styleDictionary/dictionary";

export function sortByReference(dictionary: Dictionary): (a, b) => 1 | -1 {
  // The sorter function is recursive to account for multiple levels of nesting
  function sorter(a, b) {
    const aComesFirst = -1;
    const bComesFirst = 1;

    // return early if a or b ar undefined
    if (typeof a === "undefined") {
      return aComesFirst;
    } else if (typeof b === "undefined") {
      return bComesFirst;
    }

    // If token a uses a reference and token b doesn't, b might come before a
    // read on..
    if (a.original && dictionary.usesReference(a.original.value)) {
      // Both a and b have references, we need to see if the reference each other
      if (b.original && dictionary.usesReference(b.original.value)) {
        const aRefs = dictionary.getReferences(a.original.value);
        const bRefs = dictionary.getReferences(b.original.value);

        aRefs.forEach((aRef) => {
          // a references b, we want b to come first
          if (aRef.name === b.name) {
            return bComesFirst;
          }
        });

        bRefs.forEach((bRef) => {
          // ditto but opposite
          if (bRef.name === a.name) {
            return aComesFirst;
          }
        });

        // both a and b have references and don't reference each other
        // we go further down the rabbit hole (reference chain)
        return sorter(aRefs[0], bRefs[0]);
        // a has a reference and b does not:
      } else {
        return bComesFirst;
      }
      // a does not have a reference it should come first regardless if b has one
    } else {
      return aComesFirst;
    }
  }

  return sorter;
}
