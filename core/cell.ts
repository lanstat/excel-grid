module ExcelGrid {
    export abstract class Cell extends Element {
        public isEditing: boolean;

        constructor() {
            super(document.createElement('div'));

            this.element.className = 'grid-cell';
            this.isEditing = false;

            this.bind();
        }

        private bind() {
            let $this = this;
            this.element.ondblclick = function () {
                $this.element.innerHTML = '';
                $this.isEditing = true;

                let editable = $this.getEditable();
                $this.element.appendChild(editable);

                editable.focus();
            }
        }

        public notEditing() {
            if (this.isEditing){
                this.element.innerHTML = '';
                this.isEditing = false;
            }
        }

        public setText(text: string){
            this.element.innerText = text;
        }

        public getText(): string{
            return this.element.innerText;
        }

        public setWidth(width: number){
            this.element.style.width = width + 'px';
        }

        public getWidth(): number {
            return parseInt(this.element.style.width.replace('px', ''));
        }

        abstract getEditable(): HTMLElement;
    }
}