 import { MessageBuilder } from '@ioc:Adonis/Core/Helpers'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Request from '@ioc:Adonis/Core/Request'
 import Viagems from 'App/Models/Topip'
 import Viagems from 'App/Validators/TopicValidator'
import authConfig from '../../../config/auth'


export default class ViagemController {
     public async index({ }: HttpContextContract) {
       const Viagem = await Viagem.all()
       return Viagem
     }
   
     public async store({ request }: HttpContextContract) {
       const data = await request.validate(ViagemController)
       const Viagem = await Viagem.create({ ...data })
       return Viagem
     }
   
     public async show({ params, response }: HttpContextContract) {
       try {
         const Viagem = await Viagem.findOrFail(params.id)
         return Viagem
       } catch (error) {
         response.status(400).send("Viagem não encontrado!!!")
       }
     }
   
     public async update({ request, params, response }: HttpContextContract) {
       const { name } = await request.validate(ViagemController)
       try {
         const Viagem = await Viagem.findOrFail(params.id)
         Viagem.name = name
         await Viagem.save()
         return Viagem
   
       } catch (error) {
         response.status(400).send("Viagem não encontrado!!!")
       }
     }
   
     public async destroy({ params, response }: HttpContextContract) {
       try {
         const Viagem = await Viagem.findOrFail(params.id)
         await Viagem.delete()
         return Viagem
       } catch (error) {
         response.status(400).send("Viagem não encontrado!!!")
       }
     }
   }
   