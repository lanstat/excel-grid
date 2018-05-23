module ExcelGrid {
    export abstract class DataCell extends Cell {
        public isEditing: boolean;

        public row: HeaderCell;
        public column: HeaderCell;
        
        public upCell: DataCell;
        public leftCell: DataCell;
        public rightCell: DataCell;
        public downCell: DataCell;

        constructor(row: HeaderCell, column: HeaderCell) {
            super();

            this.row = row;
            this.column = column;

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