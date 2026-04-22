import {priceObject} from '../constants'

export function unitPriceFormatStr(price: number, quantity: number) {
    return `${(price).toFixed(2)} x ${quantity}`;
}

export function priceFormatStr(price: number) {
    return `$${(price).toFixed(2)}`;
}

export function totalPriceFormatStr(orderItemName: string, quantity = 1): string {
    const priceForItem = priceObject[orderItemName as keyof typeof priceObject]
    const total = priceForItem * quantity
    
    return `Total: $${(total).toFixed(2)}`;
}