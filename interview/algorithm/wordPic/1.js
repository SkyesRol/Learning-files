const wordDictionary = function () {
    // 初始化一个对象字面量，承担map的角色
    this.words = {};
    wordDictionary.prototype.addWord = function (word) {
        if (this.words[this.words.length]) {
            this.words[this.words.length].push(word)
        }
        else {
            this.words[this.words.length] = [word]
        }
    };
    wordDictionary.prototype.search = function (word) {
        if (!this.words[word.length]) {
            return false;
        }
        else {
            const len = word.length;
            // 根据正则表达式来搜
            if (!word.includes('.')) {
                return this.words[len].includes(word);
            }
            const reg = new RegExp(word);
            return this.words[len].some(item => reg.test(item));
        }
    }
}