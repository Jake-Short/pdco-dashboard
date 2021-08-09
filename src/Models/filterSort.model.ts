// Interface for filter and sort data used in table and MainUI
export interface IFilterSortData {
  column?: 'dist' | 'size';
  direction?: 'ascending' | 'descending';

  sizeFilter?: '>50m' | '>140m' | '>1km';
}