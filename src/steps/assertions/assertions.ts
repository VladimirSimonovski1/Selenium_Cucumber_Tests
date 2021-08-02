/**
 * This file contains common assertions generally used across all step definitions
 */

import { expect } from "chai";

type Default = string | number | number[] | string[] | boolean;

export class Assertions {
    /**
     * Fails the current test case with the provided message
     * @param message will be displayed within the report
     */
    public static failWith(message: string): void {
        expect.fail(message);
    }

    public static checkIfActualValueIsTrue(
        actual: boolean,
        message?: string,
    ): void {
        expect(actual, message).to.be.true;
    }

    public static checkIfActualValueIsFalse(
        actual: boolean,
        message?: string,
    ): void {
        expect(actual, message).to.be.false;
    }

    public static checkIfActualContainsExpected(
        actual: string,
        expected: string,
        message?: string,
    ): void {
        expect(actual, message).contains(expected);
    }

    public static checkIfActualEqualsExpected(
        actual: Default,
        expected: Default,
        message?: string,
    ): void {
        if (!message) {
            message = `Expected <${actual}> to be <${expect}>`;
        }
        expect(actual, message).equals(expected);
    }

    public static checkIfActualDeeplyIncludesExpected<T>(
        actualArrayValues: T[],
        expectedArrayItems: T[],
        message?: string,
    ): void {
        expect(actualArrayValues, message).to.deep.include.members(
            expectedArrayItems,
        );
    }

    public static checkIfActualDeeplyEqualExpected<T>(
        actualArrayValues: T[],
        expectedArrayItems: T[],
        message?: string,
    ): void {
        expect(actualArrayValues, message).to.deep.equal(expectedArrayItems);
    }

    public static iterateActualAndCheckIfContainsExpected<T>(
        actualArray: T[],
        expectedArray: T[],
        message?: string,
    ): void {
        actualArray.forEach((element: T, index: number) => {
            expect(element, message).contains(expectedArray[index]);
        });
    }

    public static checkIfActualIsNotNullNorUndefined(
        actual: Default,
        message?: string,
    ): void {
        expect(actual, message).to.not.be.null;
        expect(actual, message).to.not.be.undefined;
    }

    public static checkIfActualIsNotEmpty(
        actual: Default,
        message?: string,
    ): void {
        expect(actual, message).to.not.be.empty;
    }

    public static checkIfActualIsEmpty(
        actual: Default,
        message?: string,
    ): void {
        expect(actual, message).to.be.empty;
    }

    public static checkIfActualValueMatchesRegExpression(
        actualString: string,
        regExp: RegExp,
        message?: string,
    ): void {
        expect(actualString, message).to.match(regExp);
    }
}
