'use strict'


const Training = use('App/Models/training')

class TrainingController {
    async index() {
        const training = await Training.all()
        return training
    }
    async show({params}) {
        const training = await Training.findOrFail(params.id)
        await training.load('exercises')
        return training

    }
    async store({request}) {
        const {exercises, ...data} = request.only([
            'client_id',
            'name',
            'observation',
            "exercises"
        ])
        const training = await Training.create(data)

        if(exercises){
            await training.exercises().attach(exercises)
        }
        await training.load('exercises')
        return training

    }
    async update({params, request}) {
        const {exercises, ...data} = request.only([
            'client_id',
            'name',
            'observation',
            "exercises"
        ])
        const training = await Training.findOrFail(params.id)
        training.merge(data)
        await training.save()

        if(exercises){
            await training.exercises().sync(exercises)
        }

        await training.load('exercises')
        return training

    }
    async destroy({params}) {
        const training = await Training.findOrFail(params.id)
        return training.delete()
    }
}

module.exports = TrainingController
