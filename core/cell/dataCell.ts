module ExcelGrid {
    export abstract class DataCell extends Cell {
        public isEditing: boolean;

        constructor() {
            super();

            this.element.className = 'grid-cell';
            this.isEditing = false;
        }

        protected bind() {
            super.bind();

            let $this = this;
            this.element.ondblclick = function () {
                $this.element.innerHTML = '';
                $this.isEditing = true;

                $this.element.classList.add('editing-cell');
                let editable = $this.getEditable();
                $this.element.appendChild(editable);

                editable.focus();
            }
        }

        public notEditing(html: string) {
            if (this.isEditing){
                this.element.classList.remove('editing-cell');
                this.element.innerHTML = html;
                this.isEditing = false;
            }
        }

        abstract getEditable(): HTMLElement;
    }
}