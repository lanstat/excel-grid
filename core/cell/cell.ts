module ExcelGrid {
    export abstract class Cell extends Element {

        constructor() {
            super(document.createElement('div'));

            this.element.className = 'grid-cell';

            this.bind();
        }

        protected bind() {
            let $this = this;
        }

        public setText(text: string){
            this.element.innerText = text;
        }

        public getText(): string{
            return this.element.innerText;
        }
    }
}