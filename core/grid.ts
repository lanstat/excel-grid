module ExcelGrid {
    export class Grid extends Element {
        private headerRow: GuideRow;
        private rows: Row[];

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-table';

            this.headerRow = new GuideRow(count);
            //this.headerRow.
            this.element.appendChild(this.headerRow.element);

            for (let i = 0; i < 100; i++) {
                let tmp: Row = new Row(count, i + 1);
                this.element.appendChild(tmp.element);
            }
        }
    }
}