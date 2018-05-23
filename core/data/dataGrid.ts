module ExcelGrid {
    export class DataGrid extends Element {
        private headerRow: GuideRow;
        private rows: DataRow[];

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-table';

            this.headerRow = new GuideRow();
            this.headerRow.initialize(count);
            this.element.appendChild(this.headerRow.element);

            for (let i = 0; i < 100; i++) {
                let tmp: DataRow = new DataRow(Math.random + '');

                tmp.initialize(count, this.headerRow);

                this.element.appendChild(tmp.element);
            }
        }

        public getRow(index: number): DataRow{
            return this.rows[index];
        }
    }
}