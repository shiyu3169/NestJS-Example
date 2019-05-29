import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '33434343545',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '1323412',
      name: 'Item two',
      qty: 50,
      description: 'This is item Two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id): Item {
    return this.items.find(item => item.id === id);
  }
}
