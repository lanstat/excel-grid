module ExcelGrid {
    export class GuideColumn extends Cell {
        public downCell: DataCell;
        public leftCell: GuideColumn;
        public rightCell: GuideColumn;

        constructor() {
            super();

            this.element.className = 'grid-cell';
        }

        protected bind() {
            super.bind();

            let $this = this;

            this.element.addEventListener('click', function(evt){
            });
        }

        public getEditable(): HTMLElement{
            return null;
        }
    }
}