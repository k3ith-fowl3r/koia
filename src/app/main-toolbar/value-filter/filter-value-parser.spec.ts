import { FilterValueParser } from './filter-value-parser';
import { PropertyFilter, Operator, DataType } from 'app/shared/model';

describe('FilterValueParser', () => {

   let filter: PropertyFilter;
   let parser: FilterValueParser;

   beforeEach(() => {
      filter = new PropertyFilter('x', Operator.EQUAL, '', DataType.NUMBER);
      parser = new FilterValueParser(filter);
   });

   it('#parse should return unchanged value when data type is not NUMBER', () => {

      // given
      filter.dataType = DataType.TEXT;

      // when
      const value = parser.parse('123');

      // then
      expect(value).toBe('123');
   });

   it('#parse should return number when value contains plain number', () => {

      // when
      const value = parser.parse('123');

      // then
      expect(value).toBe(123);
   });

   it('#parse should return number when value contains number with thousands separator', () => {

      // when
      const value = parser.parse('1,234.56');

      // then
      expect(value).toBe(1_234.56);
   });

   it('#parse should return number when value contains number with misplaced thousands separators', () => {

      // when
      const value = parser.parse('1,23,4.56');

      // then
      expect(value).toBe(1_234.56);
   });

   it('#parse should return unchanged value when number is invalid', () => {

      // when
      const value = parser.parse('123x');

      // then
      expect(value).toBe('123x');
   });
});
