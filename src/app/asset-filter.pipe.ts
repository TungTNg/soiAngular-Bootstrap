import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'assetFilter',
})
@Injectable()
export class AssetFilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        
        let newItems = [];
        
        for(let i = 0; i < items.length; i++) {
            for(let j = 0; j < items[i].issued_assets.length; j++) {
                if(items[i].issued_assets[j].asset_class.toLowerCase().includes(value.toLowerCase())) {
                    newItems.push(items[i]);
                    break;
                }
            }
        }
        
        return newItems;

    }
}