import { DateTime } from 'luxon'
import { 
  BaseModel, BelongsTo, belongsTo,column, HasMany,
  hasMany, ManyToMany, manyToMany
} from '@ioc:Adonis/Lucid/Orm'
import 

export default class Viagem extends BaseModel {
  @column({ isPrimary: true })
  public id: number 

  @column()
  public nome: string

  @column()
  public data: number

  @column()
  public lugar: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
