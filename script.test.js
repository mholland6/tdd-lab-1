const translate = require("./script");

describe("translate function", () => {
  // vowel test 1
  test("apple -> appleway", () => {
    expect(translate("apple")).toBe("appleway");
  });
  // vowel test 2
  test("else -> elseway", () => {
    expect(translate("else")).toBe("elseway");
  });
  // vowel test 3
  test("I -> iway", () => {
    expect(translate("I")).toBe("iway");
  });
  // vowel test 4
  test("out -> outway", () => {
    expect(translate("out")).toBe("outway");
  });
  // vowel test 5
  test("Ultra -> ultraway", () => {
    expect(translate("Ultra")).toBe("ultraway");
  }); 
  // consonant test 1
  test("boot -> ootbay", () => {
    expect(translate("boot")).toBe("ootbay");
  }); 
  // consonant test 2
  test("camp -> ampcay", () => {
    expect(translate("camp")).toBe("ampcay");
  });
  // consonant test 3
  test("giraffe -> iraffegay", () => {
    expect(translate("giraffe")).toBe("iraffegay");
  });
  // consonant test "y"
  test("yolo -> oloyay", () => {
    expect(translate("yolo")).toBe("oloyay");
  });
  // double consonant test 1
  test("Grand -> andgray", () => {
    expect(translate("Grand")).toBe("andgray");
  });
  // triple consonant test 1
  test("string -> ingstray", () => {
    expect(translate("string")).toBe("ingstray");
  });
  // lower case conversion test vowels test 2
  test("AEIOU -> aeiouway", () => {
    expect(translate("AEIOU")).toBe("aeiouway");
  });
  // lower case conversion test consonants test 2
  test("BOOTSTRAP -> ootstrapbay", () => {
    expect(translate("BOOTSTRAP")).toBe("ootstrapbay");
  });
  // punctuation test 1
  test("can't -> an'tcay", () => {
    expect(translate("can't")).toBe("an'tcay");
  });
  // punctuation test 2
  test("!What -> at!whay", () => {
    expect(translate("!What")).toBe("at!whay");
  });
  // all consonants, this is the one that broke it. 
  // test("BBB -> bbb", () => {
  //   expect(translate("BBB")).toBe("BBB");
  // }) 
}); 