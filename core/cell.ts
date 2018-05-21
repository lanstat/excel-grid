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

        set text(text: string){
            this.element.innerText = text;
        }

        get text(): string{
            return this.element.innerText;
        }
    }
}