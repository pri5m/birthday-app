import { useDateFormatter } from "./useDateFormatter"

describe('Date formatter hook', () => {
    test('it should format timestamp into date', () => {
        expect(useDateFormatter("1986-04-07T14:08:04.611Z")).toBe('7/4/1986');
    })
    test('it should format pre 1970 timestamp into date', () => {
        expect(useDateFormatter("1955-04-07T14:08:04.611Z")).toBe('7/4/1955');
    })
    test('it should return empty string if format is invalid', () => {
        expect(useDateFormatter("Test")).toBe('');
    })
})