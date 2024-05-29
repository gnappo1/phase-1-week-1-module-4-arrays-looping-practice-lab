describe("Looping Exercises Lab", () => {
    describe("findItemIndex", () => {
        it("Should use a while loop", () => {
            const findItemIndexSource = findItemIndex.toString();
            expect(findItemIndexSource.includes("while")).to.be.true;
        });

        it("Should return the index of the first occurrence of the item in the array", () => {
            const items = [
                { name: "apple", color: "red" },
                { name: "banana", color: "yellow" },
                { name: "grape", color: "purple" },
                { name: "banana", color: "yellow" },
            ];
            const itemToFind = { name: "banana", color: "yellow" };
            expect(findItemIndex(items, itemToFind)).to.equal(1);
        });

        it("Should return -1 if the item is not found in the array", () => {
            const items = [
                { name: "apple", color: "red" },
                { name: "banana", color: "yellow" },
                { name: "grape", color: "purple" },
            ];
            const itemToFind = { name: "orange", color: "orange" };
            expect(findItemIndex(items, itemToFind)).to.equal(-1);
        });
    });

    describe("sumArray", () => {
        it("Should use a for loop", () => {
            const sumArraySource = sumArray.toString();
            expect(sumArraySource.includes("for")).to.be.true;
        });

        it("Should return the sum of only the odd numbers in the array", () => {
            const numbers = [1, 2, 3, 4, 5];
            expect(sumArray(numbers)).to.equal(9); // 1 + 3 + 5 = 9
        });

        it("Should return 0 if no odd numbers are present in the array", () => {
            const numbers = [2, 4, 6, 8];
            expect(sumArray(numbers)).to.equal(0);
        });
    });

    describe("filterByLength", () => {
        it("Should use a for...of loop", () => {
            const filterByLengthSource = filterByLength.toString();
            console.log("🚀 ~ it ~ filterByLengthSource:", filterByLengthSource)
            // the line below uses var for testing purposes because the source code is transpiled
            expect(filterByLengthSource.includes("for (var")).to.be.true;
        });

        it("Should return an array containing strings with a length equal or smaller than the specified length", () => {
            const strings = ["apple", "banana", "grape", "orange"];
            const maxLength = 5;
            expect(filterByLength(strings, maxLength)).to.deep.equal([
                "apple",
                "grape",
            ]);
        });

        it("Should return an empty array if no strings meet the length condition", () => {
            const strings = ["apple", "banana", "grape", "orange"];
            const maxLength = 2;
            expect(filterByLength(strings, maxLength)).to.be.an("array").that.is.empty;
        });
    });
});
