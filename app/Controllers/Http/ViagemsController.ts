 import { MessageBuilder } from '@ioc:Adonis/Core/Helpers'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Request from '@ioc:Adonis/Core/Request'
 import Viagems from 'App/Models/Topip'
 import Viagems from 'App/Validators/TopicValidator'
import authConfig from '../../../config/auth'


export default class ViagemsController {
     const topic = await MessageBuilder.query().preload('user').orderBy('id')
          return topic
     }
     public async store( {request, auth }: HttpContextContract) {
          const data = await Request.validate(MessageValidator)
          const topic = await Massage.create({...data, userId: authConfig.user?.id})
          return topic
     }
     
}
