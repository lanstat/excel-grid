module ExcelGrid {
    export class DataRow extends Row {
        public uid: string;

        constructor(uid: string) {
            super();

            this.uid = uid;
        }

        public initialize(count: number, index: number, prevRow: DataRow){
            let prevCell: DataCell;

            for (let i = 0; i < count; i++) {
                let cell = new TextCell(Globals.HeaderSide.getRowCell(index), Globals.HeaderTop.getColumnCell(i));

                if (i > 0){
                    prevCell = <DataCell>this.cells[i-1];

                    prevCell.rightCell = cell;
                    cell.leftCell = prevCell;
                }

                if (prevRow){
                    prevCell = <DataCell>prevRow.cells[i];

                    prevCell.downCell = cell;
                    cell.upCell = prevCell;
                }

                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }
        }

        public getCell(index: number): DataCell{
            return <DataCell>this.cells[index];
        }
    }
}