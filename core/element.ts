module ExcelGrid{
    export class Element{
        public element: HTMLElement;

        constructor(root: HTMLElement){
            this.element = root;
        }

        public setWidth(width: number){
            this.element.style.width = width + 'px';
        }

        public getWidth(): number {
            return parseInt(this.element.style.width.replace('px', ''));
        }

        public setHeight(height: number){
            this.element.style.height = height + 'px';
        }

        public getHeight(): number {
            return parseInt(this.element.style.height.replace('px', ''));
        }
    }
}