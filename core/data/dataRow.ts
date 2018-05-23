module ExcelGrid {
    export class DataRow extends Row {
        public uid: string;

        constructor(uid: string) {
            super();

            this.uid = uid;
        }

        public initialize(count: number, guideRow: GuideRow){
            for (let i = 0; i < count; i++) {
                let cell = new TextCell(this, <GuideColumn>guideRow.cells[i]);

                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }
        }

        public getCell(index: number): DataCell{
            return <DataCell>this.cells[index];
        }
    }
}