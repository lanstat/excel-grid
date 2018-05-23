module ExcelGrid {
    export abstract class DataCell extends Cell {
        public isEditing: boolean;

        private dataRow: DataRow;
        private dataColumn: GuideColumn;

        constructor(row: DataRow, column: GuideColumn) {
            super();

            this.dataRow = row;
            this.dataColumn = column;

            this.element.className = 'grid-cell';
            this.isEditing = false;
        }

        protected bind() {
            super.bind();

            let $this = this;

            this.element.addEventListener('click', function(evt){
                Globals.SelectContainer.showAtCell($this);
            });
        }

        get value(): string{
            return this.text;
        }

        abstract getEditable(): HTMLElement;
    }
}