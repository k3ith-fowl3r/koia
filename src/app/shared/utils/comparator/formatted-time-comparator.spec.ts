import { TimeUnit } from 'app/shared/model';
import { compareFormattedTime } from './formatted-time-comparator';

describe('formatted-time-comparator', () => {

    it('#compareFormattedTime MILLISECOND', () => {
        const before = '1 Jan 2023 06:55:10 123';
        const after = '1 Jan 2023 06:55:10 873';
        const timeUnit = TimeUnit.MILLISECOND;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });

    it('#compareFormattedTime SECOND', () => {
        const before = '1 Jan 2023 06:55:10';
        const after = '1 Jan 2023 06:55:11';
        const timeUnit = TimeUnit.SECOND;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });

    it('#compareFormattedTime MINUTE', () => {
        const before = '1 Jan 2023 06:55';
        const after = '1 Jan 2023 06:56';
        const timeUnit = TimeUnit.MINUTE;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });

    it('#compareFormattedTime HOUR', () => {
        const before = '1 Jan 2023 06';
        const after = '1 Jan 2023 07';
        const timeUnit = TimeUnit.HOUR;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });

    it('#compareFormattedTime DAY', () => {
        const before = '1 Jan 2023';
        const after = '2 Jan 2023';
        const timeUnit = TimeUnit.DAY;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });

    it('#compareFormattedTime MONTH', () => {
        const before = 'Jan 2023';
        const after = 'Feb 2023';
        const timeUnit = TimeUnit.MONTH;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });

    it('#compareFormattedTime YEAR', () => {
        const before = '2022';
        const after = '2023';
        const timeUnit = TimeUnit.YEAR;

        expect(compareFormattedTime(before, after, timeUnit)).toBe(-1);
        expect(compareFormattedTime(before, before, timeUnit)).toBe(0);
        expect(compareFormattedTime(after, before, timeUnit)).toBe(1);
    });
});