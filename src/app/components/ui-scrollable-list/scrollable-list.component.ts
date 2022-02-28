import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listable } from './listable.interface';

@Component({
    selector: 'ui-scrollable-list',
    templateUrl: './scrollable-list.component.html',
    styleUrls: ['scrollable-list.component.scss']
})
export class ScrollableListComponent {
    
    @Input() public itemList: Listable[];
    @Output('onChange') public itemSelectionEmitter: EventEmitter<any> = new EventEmitter<any>();
    
    public selectedItem: number;

    public selectItem(item: number): void {
        this.selectedItem = item;
        this.onSelect();
    }

    public isSelected(item: Listable): boolean {
        return this.itemList.indexOf(item) == this.selectedItem;
    }

    private onSelect(): void {
        this.itemSelectionEmitter.emit(this.itemList[this.selectedItem].value);
    }

}