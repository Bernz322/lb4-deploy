import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    // type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectID'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;

  @property({
    type: 'string',
  })
  address?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export type UserWithRelations = User;
