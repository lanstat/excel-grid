module ExcelGrid {
    export class Grid extends Element {
        private headerRow: HeaderRow;
        private rows: Row[];

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-table';

            this.headerRow = new HeaderRow(count);
            //this.headerRow.
            this.element.appendChild(this.headerRow.element);

            for (let i = 0; i < 100; i++) {
                let tmp: Row = new Row(count);
                this.element.appendChild(tmp.element);
            }
        }
    }
}