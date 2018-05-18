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

        public setWidth(width: number){
            this.element.style.width = width + 'px';
        }

        public getWidth(): number {
            return parseInt(this.element.style.width.replace('px', ''));
        }
    }
}