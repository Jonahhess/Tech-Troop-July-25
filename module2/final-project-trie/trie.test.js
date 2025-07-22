const Trie = require("./trie.js");

describe("test suite for Trie functions", () => {
  describe("add to trie", () => {
    const trie = new Trie();
    it("should add word only once", () => {
      expect(trie.add("hello")).toBeTruthy();
      expect(trie.add("hello")).toBeFalsy();
    });

    it("should add two different words", () => {
      expect(() => trie.add("foo")).toBeTruthy();
      expect(() => trie.add("bar")).toBeTruthy();
    });

    it("should add two words which are substrings", () => {
      expect(() => trie.add("app")).toBeTruthy();
      expect(() => trie.add("apple")).toBeTruthy();
    });
  });

  describe("find in trie", () => {
    const trie = new Trie();
    trie.add("hello");
    trie.add("world");
    it("should find hello and world", () => {
      expect(trie.find("hello")).toBeTruthy();
      expect(trie.find("world")).toBeTruthy();
    });

    it("should not find other words similar", () => {
      expect(() => trie.find("hell")).toBeTruthy();
      expect(() => trie.find("w")).toBeTruthy();
    });

    describe("complete in trie", () => {
      const trie = new Trie();
      trie.add("hello");
      trie.add("world");
      it("should complete '' to all words", () => {
        expect(trie.getValues("")).toHaveLength(2);
      });

      it("should complete words with prefix", () => {
        expect(trie.getValues("hell")).toHaveLength(1);
        expect(trie.getValues("w")).toHaveLength(1);
        expect(trie.getValues("world")).toHaveLength(1);
      });

      it("should have no results for items not in trie ", () => {
        expect(trie.getValues("potato")).toHaveLength(0);
        expect(trie.getValues("lol")).toHaveLength(0);
      });
    });
  });
});
