 
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Viagem from '../../Models/Viagem'
import ViagemValidator from '../../Validators/ViagemValidator'


export default class ViagemController {
     public async index({ }: HttpContextContract) {
       const viagem = await Viagem.all()
       return viagem
     }
   
     public async store({ request }: HttpContextContract) {
       const data = await request.validate(ViagemValidator)
       const viagem = await Viagem.create({ ...data })
       return viagem
     }
   
     public async show({ params, response }: HttpContextContract) {
       try {
         const viagem = await Viagem.findOrFail(params.id)
         return viagem
       } catch (error) {
         response.status(400).send("Viagem não encontrado!!!")
       }
     }
   
     public async update({ request, params, response }: HttpContextContract) {
       const { name } = await request.validate(ViagemValidatorr)
       try {
         const viagem = await Viagem.findOrFail(params.id)
         viagem.name = name
         await viagem.save()
         return viagem
   
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
   