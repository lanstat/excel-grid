module ExcelGrid {
    export class HeaderSide {
        public column: HTMLDivElement;
        private rows: HeaderRow[];

        constructor(count: number) {
            this.column = document.createElement('div');
            this.column.className = 'grid-table header-column';
            this.rows = [];

            for (let i = 0; i <= count; i++) {
                let row = new HeaderRow(1, [i+''], true);

                this.rows.push(row);
                this.column.appendChild(row.element);
            }
        }

        public getRowCell(index: number): HeaderCell{
            return this.rows[index].cells[0];
        }
    }
}