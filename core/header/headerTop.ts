module ExcelGrid {
    export class HeaderTop extends Element {
        private headerRow: HeaderRow;

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-table fixed';

            this.headerRow = new HeaderRow(count);
            this.element.appendChild(this.headerRow.element);
        }

        public getColumnCell(index: number): HeaderCell{
            return this.headerRow.cells[index];
        }
    }
}