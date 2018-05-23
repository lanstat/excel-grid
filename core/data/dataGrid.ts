module ExcelGrid {
    export class DataGrid extends Element {
        private guideRow: GuideRow;
        private rows: DataRow[];

        constructor(rowCount: number, columnCount: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-table';

            this.rows = [];
            this.guideRow = new GuideRow();
            this.guideRow.initialize(columnCount);
            this.element.appendChild(this.guideRow.element);

            for (let i = 0; i < rowCount; i++) {
                let tmp: DataRow = new DataRow(Math.random + '');

                tmp.initialize(columnCount, i, i>0? this.rows[i - 1]: null);

                this.rows.push(tmp);
                this.element.appendChild(tmp.element);
            }
        }

        public getRow(index: number): DataRow{
            return this.rows[index];
        }
    }
}