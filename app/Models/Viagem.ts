import { DateTime } from 'luxon'
import { 
  BaseModel,column
} from '@ioc:Adonis/Lucid/Orm'


export default class Viagem extends BaseModel {
  @column({ isPrimary: true })
  public id: number 

  @column()
  public data: string

  @column()
  public hotel: string

  @column()
  public lugar: string

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
