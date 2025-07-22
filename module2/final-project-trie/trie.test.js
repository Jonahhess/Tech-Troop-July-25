const Trie = require("./trie.js");
const TNode = require("./tnode.js");

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
    // Pseudocode plan:
    // 1. Import TNode.
    // 2. Test TNode constructor: empty string, non-empty string.
    // 3. Test addWord: add new word, add duplicate, add overlapping words, add empty string, add non-string.
    // 4. Test findWord: find existing, non-existing, prefix, empty string.
    // 5. Test predictWords: with prefix, empty prefix, no matches, partial matches.
    // 6. Test removeWord: remove existing, remove non-existing, remove prefix, remove after removal, remove empty string.
    // 7. Edge cases: deeply nested, special characters, numbers, case sensitivity.

    describe("TNode", () => {
      describe("constructor", () => {
        it("should create a node with given value", () => {
          const node = new TNode("a");
          expect(node.value).toBe("a");
          expect(node.children).toBeInstanceOf(Object);
          //expect(node.isWord).toBe(false);
        });

        it("should create a node with empty string", () => {
          const node = new TNode("");
          expect(node.value).toBe("");
        });
      });

      describe("addWord", () => {
        let root;
        beforeEach(() => {
          root = new TNode("");
        });

        it("should add a new word", () => {
          expect(root.addWord("cat")).toBe(true);
          expect(root.findWord("cat")).toBe(true);
        });

        it("should not add duplicate word", () => {
          root.addWord("dog");
          expect(root.addWord("dog")).toBe(false);
        });

        it("should add overlapping words", () => {
          expect(root.addWord("car")).toBe(true);
          expect(root.addWord("cart")).toBe(true);
          expect(root.findWord("car")).toBe(true);
          expect(root.findWord("cart")).toBe(true);
        });

        it("should handle empty string", () => {
          expect(root.addWord("")).toBe(true);
        });

        it("should handle non-string input", () => {
          expect(root.addWord(null)).toBe(false);
          expect(root.addWord(undefined)).toBe(false);
          expect(root.addWord(123)).toBe(false);
        });
      });

      describe("findWord", () => {
        let root;
        beforeEach(() => {
          root = new TNode("");
          root.addWord("apple");
          root.addWord("app");
        });

        it("should find existing word", () => {
          expect(root.findWord("apple")).toBe(true);
          expect(root.findWord("app")).toBe(true);
        });

        it("should not find non-existing word", () => {
          expect(root.findWord("appl")).toBe(false);
          expect(root.findWord("banana")).toBe(false);
        });

        it("should not find prefix as word if not added", () => {
          root.addWord("banana");
          expect(root.findWord("ban")).toBe(false);
        });

        it("should handle empty string", () => {
          expect(root.findWord("")).toBe(false);
        });
      });

      describe("predictWords", () => {
        let root;
        beforeEach(() => {
          root = new TNode("");
          root.addWord("star");
          root.addWord("start");
          root.addWord("stark");
          root.addWord("stack");
          root.addWord("static");
        });

        it("should return all words with given prefix", () => {
          const results = root.predictWords("sta");
          expect(results).toEqual(
            expect.arrayContaining([
              "star",
              "start",
              "stark",
              "stack",
              "static",
            ])
          );
        });

        it("should return only matching words", () => {
          const results = root.predictWords("star");
          expect(results).toEqual(
            expect.arrayContaining(["star", "start", "stark"])
          );
          expect(results).not.toContain("stack");
        });

        it("should return empty array for no matches", () => {
          expect(root.predictWords("xyz")).toEqual([]);
        });

        it("should return all words for empty prefix", () => {
          const results = root.predictWords("");
          expect(results.length).toBeGreaterThanOrEqual(5);
          expect(results).toEqual(
            expect.arrayContaining([
              "star",
              "start",
              "stark",
              "stack",
              "static",
            ])
          );
        });
      });

      describe("removeWord", () => {
        let root;
        beforeEach(() => {
          root = new TNode("");
          root.addWord("moon");
          root.addWord("moose");
          root.addWord("mood");
        });

        it("should remove existing word", () => {
          expect(root.removeWord("moon")).toBe(true);
          expect(root.findWord("moon")).toBe(false);
        });

        it("should not remove non-existing word", () => {
          expect(root.removeWord("moo")).toBe(false);
        });

        it("should not remove word twice", () => {
          root.removeWord("mood");
          expect(root.removeWord("mood")).toBe(false);
        });

        it("should not remove prefix if not a word", () => {
          expect(root.removeWord("moo")).toBe(false);
        });

        it("should handle empty string", () => {
          expect(root.removeWord("")).toBe(false);
        });
      });

      describe("edge cases", () => {
        it("should handle deeply nested words", () => {
          const root = new TNode("");
          expect(root.addWord("a".repeat(100))).toBe(true);
          expect(root.findWord("a".repeat(100))).toBe(true);
          expect(root.removeWord("a".repeat(100))).toBe(true);
          expect(root.findWord("a".repeat(100))).toBe(false);
        });

        it("should handle special characters and numbers", () => {
          const root = new TNode("");
          expect(root.addWord("123!@#")).toBe(true);
          expect(root.findWord("123!@#")).toBe(true);
          expect(root.removeWord("123!@#")).toBe(true);
        });

        it("should be case sensitive", () => {
          const root = new TNode("");
          root.addWord("Case");
          expect(root.findWord("case")).toBe(false);
          expect(root.findWord("Case")).toBe(true);
        });
      });
      // Pseudocode plan:
      // 1. Test removing a word that is a prefix of another word (should not remove the longer word).
      // 2. Test removing a word that has another word as a prefix (should not remove the shorter word).
      // 3. Test removing all words, then trie should be empty (getValues("") returns []).
      // 4. Test removing words with shared prefixes, then check remaining words.
      // 5. Test removing a word, then re-adding it, then removing again.
      // 6. Test removing a word with special characters or numbers.
      // 7. Test removing a word that is the only word in the trie.
      // 8. Test removing a word after adding many similar words (stress test).

      describe("complicated remove cases for Trie", () => {
        it("should not remove longer word when removing its prefix", () => {
          const trie = new Trie();
          trie.add("app");
          trie.add("apple");
          expect(trie.remove("app")).toBe(true);
          expect(trie.find("app")).toBe(false);
          expect(trie.find("apple")).toBe(true);
        });

        it("should not remove shorter word when removing a word with that prefix", () => {
          const trie = new Trie();
          trie.add("app");
          trie.add("apple");
          expect(trie.remove("apple")).toBe(true);
          expect(trie.find("apple")).toBe(false);
          expect(trie.find("app")).toBe(true);
        });

        it("should remove all words and leave trie empty", () => {
          const trie = new Trie();
          trie.add("cat");
          trie.add("car");
          trie.add("cart");
          trie.remove("cat");
          trie.remove("car");
          trie.remove("cart");
          expect(trie.getValues("")).toEqual([]);
        });

        it("should remove words with shared prefixes and leave others intact", () => {
          const trie = new Trie();
          trie.add("star");
          trie.add("start");
          trie.add("stark");
          trie.add("stack");
          trie.remove("start");
          trie.remove("stark");
          expect(trie.find("star")).toBe(true);
          expect(trie.find("stack")).toBe(true);
          expect(trie.find("start")).toBe(false);
          expect(trie.find("stark")).toBe(false);
          expect(trie.getValues("sta")).toEqual(
            expect.arrayContaining(["star", "stack"])
          );
        });

        it("should allow removing, re-adding, and removing again", () => {
          const trie = new Trie();
          trie.add("redo");
          expect(trie.remove("redo")).toBe(true);
          expect(trie.find("redo")).toBe(false);
          trie.add("redo");
          expect(trie.find("redo")).toBe(true);
          expect(trie.remove("redo")).toBe(true);
          expect(trie.find("redo")).toBe(false);
        });

        it("should remove words with special characters and numbers", () => {
          const trie = new Trie();
          trie.add("123abc!");
          expect(trie.find("123abc!")).toBe(true);
          expect(trie.remove("123abc!")).toBe(true);
          expect(trie.find("123abc!")).toBe(false);
        });

        it("should remove the only word in the trie", () => {
          const trie = new Trie();
          trie.add("solo");
          expect(trie.remove("solo")).toBe(true);
          expect(trie.find("solo")).toBe(false);
          expect(trie.getValues("")).toEqual([]);
        });

        it("should handle removing from a large set of similar words", () => {
          const trie = new Trie();
          const words = [];
          for (let i = 0; i < 100; i++) {
            words.push("word" + i);
            trie.add("word" + i);
          }
          expect(trie.find("word42")).toBe(true);
          expect(trie.remove("word42")).toBe(true);
          expect(trie.find("word42")).toBe(false);
          // All other words should still be present
          for (let i = 0; i < 100; i++) {
            if (i !== 42) expect(trie.find("word" + i)).toBe(true);
          }
        });
      });
    });
  });
});
